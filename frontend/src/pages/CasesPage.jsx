import { useState } from 'react'

import { Badge, Card, EmptyState, ErrorState, FilterBar, Spinner } from '../components/common'
import { useApi } from '../hooks/useApi'
import { api, errorMessage } from '../services/api'
import { formatDateTime, severityClass } from '../utils/format'

const STATUS_OPTIONS = ['', 'open', 'in_progress', 'resolved', 'dismissed']
const STATUS_LABELS = { open: 'Open', in_progress: 'In Progress', resolved: 'Resolved', dismissed: 'Dismissed' }
const CERTAINTY_CLASS = {
  confirmed: 'badge-critical',
  suspected: 'badge-warning',
  review_only: 'badge-info',
}

export default function CasesPage() {
  const [statusFilter, setStatusFilter] = useState('')
  const [error, setError] = useState('')

  const tasks = useApi(
    () =>
      api
        .get('/review-tasks', {
          params: { status: statusFilter || undefined, limit: 200 },
        })
        .then((r) => r.data)
        .catch(() => []),
    [statusFilter],
  )

  const updateTask = async (taskId, patch) => {
    setError('')
    try {
      await api.patch(`/review-tasks/${taskId}`, patch)
      tasks.reload()
    } catch (caught) {
      setError(errorMessage(caught, 'The task could not be updated.'))
    }
  }

  const openCount = (tasks.data || []).filter((t) => t.status === 'open').length
  const inProgressCount = (tasks.data || []).filter((t) => t.status === 'in_progress').length

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Case Review</h1>
        <p className="page-subtitle">
          Review tasks created by corrections, anomaly investigations, and compliance checks.
          Each case tracks a finding through to resolution.
        </p>
      </div>

      {error && <ErrorState message={error} />}

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div className="stat-card">
          <div className="stat-label">Total Cases</div>
          <div className="stat-value mt-1">{(tasks.data || []).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Open</div>
          <div className="stat-value mt-1 text-warning">{openCount}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">In Progress</div>
          <div className="stat-value mt-1 text-brand-mid">{inProgressCount}</div>
        </div>
      </div>

      <FilterBar>
        <div className="w-48">
          <label className="label" htmlFor="case-status">Status</label>
          <select
            id="case-status"
            className="input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_OPTIONS.map((code) => (
              <option key={code} value={code}>
                {code ? STATUS_LABELS[code] : 'All statuses'}
              </option>
            ))}
          </select>
        </div>
      </FilterBar>

      <Card title="Review Tasks" subtitle="Newest first.">
        {tasks.loading ? (
          <Spinner />
        ) : (tasks.data || []).length === 0 ? (
          <EmptyState
            title="No cases to review"
            description="No review tasks match the current filter. Cases are created when corrections trigger downstream checks."
          />
        ) : (
          <ul className="m-0 p-0 list-none grid gap-3">
            {tasks.data.map((task) => (
              <li key={task.task_id} className="rounded-xl border border-line p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={severityClass(task.severity)}>{task.severity}</Badge>
                  <Badge className={CERTAINTY_CLASS[task.certainty] || CERTAINTY_CLASS.suspected}>
                    {(task.certainty || '').replace('_', ' ')}
                  </Badge>
                  <Badge variant="neutral">{STATUS_LABELS[task.status] || task.status}</Badge>
                  <span className="font-mono text-xs text-muted">{task.rule_id}</span>
                  {task.created_at && (
                    <span className="text-xs text-muted ml-auto">{formatDateTime(task.created_at)}</span>
                  )}
                </div>
                <p className="m-0 mt-2 font-semibold text-brand-text">{task.title}</p>
                <p className="m-0 mt-1 text-sm text-muted">{task.explanation}</p>
                {task.suggested_action && (
                  <p className="m-0 mt-1 text-xs text-brand-mid">
                    Next: {task.suggested_action}
                  </p>
                )}
                {task.status !== 'resolved' && task.status !== 'dismissed' && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {task.status === 'open' && (
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() =>
                          updateTask(task.task_id, {
                            status: 'in_progress',
                            review_note: 'Taken up for review.',
                          })
                        }
                      >
                        Start Review
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-accent btn-sm"
                      onClick={() =>
                        updateTask(task.task_id, {
                          status: 'resolved',
                          review_note: 'Checked against the source documents.',
                          outcome: 'No further action needed.',
                        })
                      }
                    >
                      Resolve
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => {
                        const note = window.prompt(
                          'Why is this finding dismissed? A dismissal has to record a reason.',
                        )
                        if (note && note.trim()) {
                          updateTask(task.task_id, {
                            status: 'dismissed',
                            review_note: note.trim(),
                          })
                        }
                      }}
                    >
                      Dismiss
                    </button>
                  </div>
                )}
                {task.review_note && (
                  <p className="m-0 mt-2 text-xs text-muted">
                    Note: {task.review_note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  )
}
