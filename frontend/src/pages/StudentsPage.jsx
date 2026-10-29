import { useEffect, useState } from 'react'

import { Badge, Card, EmptyState, ErrorState, FilterBar, Spinner } from '../components/common'
import { useApi } from '../hooks/useApi'
import { useDebounce } from '../hooks/useDebounce'
import { api, errorMessage } from '../services/api'
import { formatApaar, quotaLabel, statusClass } from '../utils/format'

const QUOTAS = [
  '',
  'REGULAR_MERIT',
  'MANAGEMENT',
  'SUPERNUMERARY_NRI',
  'SUPERNUMERARY_OCI',
  'SUPERNUMERARY_FN',
  'SUPERNUMERARY_TFW',
  'PMSSS',
]

export default function StudentsPage() {
  const [search, setSearch] = useState('')
  const [quota, setQuota] = useState('')
  const [recordStatus, setRecordStatus] = useState('ACTIVE')
  const debouncedSearch = useDebounce(search)

  // Selected student modal & QR generation state
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [generating, setGenerating] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [tokenData, setTokenData] = useState(null)
  const [qrBlobUrl, setQrBlobUrl] = useState('')
  const [modalError, setModalError] = useState('')
  const [copied, setCopied] = useState(false)

  const students = useApi(
    () =>
      api
        .get('/students', {
          params: {
            search: debouncedSearch || undefined,
            quota: quota || undefined,
            record_status: recordStatus || undefined,
            limit: 200,
          },
        })
        .then((r) => r.data),
    [debouncedSearch, quota, recordStatus],
  )

  const handleSelectStudent = (student) => {
    setSelectedStudent(student)
    setTokenData(null)
    setQrBlobUrl('')
    setModalError('')
    setCopied(false)
  }

  const handleCloseModal = () => {
    if (qrBlobUrl) {
      URL.revokeObjectURL(qrBlobUrl)
    }
    setSelectedStudent(null)
    setTokenData(null)
    setQrBlobUrl('')
    setModalError('')
    setCopied(false)
  }

  const handleGenerateQr = async () => {
    if (!selectedStudent) return
    setGenerating(true)
    setModalError('')
    try {
      const tokenRes = await api.post('/verification-tokens', {
        student_record_id: selectedStudent.record_id,
        minutes: 60,
      })
      setTokenData(tokenRes.data)

      try {
        const qrRes = await api.get(`/students/${selectedStudent.apaar_id}/qr`, {
          responseType: 'blob',
        })
        const blobUrl = URL.createObjectURL(qrRes.data)
        setQrBlobUrl(blobUrl)
      } catch {
        // Fallback gracefully if image rendering fails
      }
    } catch (err) {
      setModalError(errorMessage(err, 'Failed to generate QR badge.'))
    } finally {
      setGenerating(false)
    }
  }

  const handleDownloadPdf = async () => {
    if (!selectedStudent) return
    setDownloading(true)
    setModalError('')
    try {
      const res = await api.get(`/students/${selectedStudent.apaar_id}/certificate.pdf`, {
        responseType: 'blob',
      })
      const url = URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${selectedStudent.apaar_id}_certificate.pdf`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      setModalError(errorMessage(err, 'Could not download certificate.'))
    } finally {
      setDownloading(false)
    }
  }

  const handleCopyLink = async () => {
    if (!tokenData?.token_url) return
    try {
      await navigator.clipboard.writeText(tokenData.token_url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard write failed
    }
  }

  useEffect(() => {
    return () => {
      if (qrBlobUrl) URL.revokeObjectURL(qrBlobUrl)
    }
  }, [qrBlobUrl])

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Student Register</h1>
        <p className="page-subtitle">
          Every enrolment record the registry holds, with the APAAR ID masked unless the full identifier is needed. Click any student row to view details and generate a QR badge.
        </p>
      </div>

      <FilterBar>
        <div className="w-72">
          <label className="label" htmlFor="search">
            Search
          </label>
          <input
            id="search"
            className="input"
            value={search}
            placeholder="Name or APAAR ID"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="w-56">
          <label className="label" htmlFor="quota">
            Quota
          </label>
          <select
            id="quota"
            className="input"
            value={quota}
            onChange={(event) => setQuota(event.target.value)}
          >
            {QUOTAS.map((code) => (
              <option key={code} value={code}>
                {code ? quotaLabel(code) : 'All quotas'}
              </option>
            ))}
          </select>
        </div>
        <div className="w-48">
          <label className="label" htmlFor="status">
            Record status
          </label>
          <select
            id="status"
            className="input"
            value={recordStatus}
            onChange={(event) => setRecordStatus(event.target.value)}
          >
            <option value="ACTIVE">Active</option>
            <option value="WITHDRAWN">Withdrawn</option>
            <option value="ALL">All</option>
          </select>
        </div>
      </FilterBar>

      {students.error && <ErrorState message={students.error} onRetry={students.reload} />}

      <Card
        title="Enrolments"
        subtitle={
          students.data ? `${students.data.length} record(s) shown — click any row to generate QR badge` : 'Loading the register...'
        }
      >
        {students.loading ? (
          <Spinner />
        ) : (students.data || []).length === 0 ? (
          <EmptyState
            title="No record found"
            description="Adjust the filters, or upload a batch to add enrolments."
          />
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>APAAR ID</th>
                  <th>Student</th>
                  <th>Institution</th>
                  <th>Programme</th>
                  <th>Quota</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.data.map((row) => (
                  <tr
                    key={row.record_id}
                    onClick={() => handleSelectStudent(row)}
                    className="cursor-pointer transition-colors hover:bg-brand-surface/40"
                    title="Click to view details and generate QR badge"
                  >
                    <td className="font-mono text-xs">{formatApaar(row.apaar_id)}</td>
                    <td>
                      <p className="m-0 font-semibold text-brand-text">
                        {row.student_name || <span className="text-danger">Missing</span>}
                      </p>
                      <p className="m-0 text-xs text-muted">
                        {row.student_institute_roll_no || 'No roll number'}
                      </p>
                    </td>
                    <td className="text-xs">{row.institution_id}</td>
                    <td className="text-xs">
                      {row.program_id}
                      <p className="m-0 text-muted">{row.academic_year}</p>
                    </td>
                    <td className="text-xs">{quotaLabel(row.admission_quota)}</td>
                    <td>
                      <Badge className={statusClass(row.verification_status)}>
                        {row.verification_status}
                      </Badge>
                    </td>
                    <td className="text-right">
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSelectStudent(row)
                        }}
                      >
                        Badge / QR
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Student Details & QR Badge Modal */}
      {selectedStudent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-line bg-surface p-6 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-line pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Credential Verification</span>
                <h2 className="text-xl font-bold text-ink m-0 mt-0.5">
                  {selectedStudent.student_name || 'Student Record'}
                </h2>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm text-lg leading-none"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Error Message */}
            {modalError && (
              <div className="mt-4 rounded-xl border border-danger/30 bg-danger-surface p-3 text-xs text-danger-strong">
                {modalError}
              </div>
            )}

            {/* Student Info Card */}
            <div className="mt-4 rounded-xl border border-line bg-surface-sunken p-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-muted block">APAAR ID</span>
                  <span className="font-mono font-semibold text-brand-text">
                    {formatApaar(selectedStudent.apaar_id)}
                  </span>
                </div>
                <div>
                  <span className="text-muted block">Roll Number</span>
                  <span className="font-semibold text-ink">
                    {selectedStudent.student_institute_roll_no || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-muted block">Institution</span>
                  <span className="font-semibold text-ink">{selectedStudent.institution_id}</span>
                </div>
                <div>
                  <span className="text-muted block">Programme</span>
                  <span className="font-semibold text-ink">
                    {selectedStudent.program_id} ({selectedStudent.academic_year || '2024-25'})
                  </span>
                </div>
                <div>
                  <span className="text-muted block">Quota</span>
                  <span className="font-semibold text-ink">{quotaLabel(selectedStudent.admission_quota)}</span>
                </div>
                <div>
                  <span className="text-muted block">Status</span>
                  <Badge className={statusClass(selectedStudent.verification_status)}>
                    {selectedStudent.verification_status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* QR Generation & Output Area */}
            <div className="mt-5">
              {!tokenData && !generating && (
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="btn btn-primary w-full py-2.5 flex items-center justify-center gap-2"
                    onClick={handleGenerateQr}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    Generate QR Badge
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline w-full py-2 flex items-center justify-center gap-2"
                    onClick={handleDownloadPdf}
                    disabled={downloading}
                  >
                    {downloading ? 'Downloading...' : 'Download Certificate (PDF)'}
                  </button>
                </div>
              )}

              {generating && (
                <div className="py-6 text-center">
                  <Spinner label="Issuing opaque verification token & QR badge..." />
                </div>
              )}

              {tokenData && (
                <div className="flex flex-col items-center animate-in fade-in">
                  {/* QR Image */}
                  {qrBlobUrl ? (
                    <div className="p-3 bg-white rounded-2xl border border-line shadow-sm mb-4">
                      <img src={qrBlobUrl} alt="Student APAAR QR Badge" className="w-44 h-44 object-contain" />
                    </div>
                  ) : (
                    <div className="w-44 h-44 flex items-center justify-center bg-surface-sunken border border-line rounded-xl mb-4 text-xs text-muted">
                      QR Generated
                    </div>
                  )}

                  {/* Token Status Badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-success mb-3">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Opaque verification token active (expires in {tokenData.expires_in_minutes || 60}m)
                  </div>

                  {/* Token URL Box with Copy */}
                  <div className="w-full flex gap-2 mb-3">
                    <input
                      type="text"
                      readOnly
                      value={tokenData.token_url}
                      className="input text-xs font-mono select-all flex-1"
                    />
                    <button
                      type="button"
                      className="btn btn-outline btn-sm px-3"
                      onClick={handleCopyLink}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Action Link: Open verification in new tab */}
                  <a
                    href={tokenData.token_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold shadow-sm"
                  >
                    <span>Open Verification Result</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Explanatory Demo Note */}
                  <div className="mt-3 rounded-lg bg-info-surface p-2.5 text-xs text-info-strong text-left w-full">
                    <p className="m-0 font-semibold">Privacy-Preserving Verification</p>
                    <p className="m-0 mt-0.5 opacity-90 text-[11px] leading-relaxed">
                      Notice the link carries an opaque token instead of the raw APAAR ID. The public verification page resolves only allowlisted fields (institution, programme, status) without disclosing sensitive personal data.
                    </p>
                  </div>

                  {/* PDF Download option */}
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm mt-3 text-xs"
                    onClick={handleDownloadPdf}
                    disabled={downloading}
                  >
                    {downloading ? 'Downloading...' : 'Download Bonafide Certificate PDF'}
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-5 border-t border-line pt-4 flex justify-end">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
