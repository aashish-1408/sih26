import { useTranslation } from 'react-i18next'

export function Card({ title, subtitle, actions, children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      {(title || actions) && (
        <div className="card-header">
          <div>
            {title && <h2 className="text-sm font-semibold text-ink m-0">{title}</h2>}
            {subtitle && <p className="m-0 mt-0.5 text-xs text-muted">{subtitle}</p>}
          </div>
          {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </section>
  )
}

export function KpiCard({ label, value, hint, tone = 'default', icon }) {
  const tones = {
    default: 'text-brand-mid',
    good: 'text-success',
    warning: 'text-warning',
    critical: 'text-danger',
    info: 'text-info',
  }
  const bgTones = {
    default: 'bg-info-surface',
    good: 'bg-success-surface',
    warning: 'bg-warning-surface',
    critical: 'bg-danger-surface',
    info: 'bg-info-surface',
  }
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <div className="stat-label">{label}</div>
          <div className={`stat-value mt-1 ${tones[tone] || tones.default}`}>{value}</div>
        </div>
        {icon && (
          <div className={`w-10 h-10 rounded-lg ${bgTones[tone] || bgTones.default} flex items-center justify-center ${tones[tone] || tones.default}`}>
            {icon}
          </div>
        )}
      </div>
      {hint && <div className="stat-change text-muted mt-1">{hint}</div>}
    </div>
  )
}

export function Badge({ children, variant = 'neutral', className = '' }) {
  const variants = {
    critical: 'badge-critical',
    high: 'badge-high',
    warning: 'badge-warning',
    success: 'badge-success',
    info: 'badge-info',
    neutral: 'badge-neutral',
  }
  return (
    <span className={`badge ${variants[variant] || variants.neutral} ${className}`}>
      {children}
    </span>
  )
}

export function Spinner({ label }) {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-sm text-muted" role="status">
      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-line border-t-brand-mid" />
      {label || t('common.loading')}
    </div>
  )
}

export function ErrorState({ message, onRetry }) {
  const { t } = useTranslation()
  return (
    <div role="alert" className="rounded-xl border border-danger/20 bg-danger-surface p-5 text-sm">
      <p className="m-0 font-semibold text-danger-strong">{t('common.errorTitle')}</p>
      <p className="m-0 mt-1 text-danger-strong/80">{message}</p>
      {onRetry && (
        <button type="button" className="btn btn-outline btn-sm mt-3" onClick={onRetry}>
          {t('common.retry')}
        </button>
      )}
    </div>
  )
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="empty-state">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <path d="M12 17h.01" />
      </svg>
      <p className="font-semibold text-ink text-sm">{title}</p>
      {description && <p className="text-sm text-muted max-w-xs">{description}</p>}
      {action}
    </div>
  )
}

export function Pagination({ page, pageCount, onChange }) {
  const { t } = useTranslation()
  if (!pageCount || pageCount <= 1) return null
  return (
    <nav className="flex items-center justify-between mt-4 pt-4 border-t border-line">
      <span className="text-xs text-muted">
        Page {page} of {pageCount}
      </span>
      <div className="flex gap-2">
        <button type="button" className="btn btn-outline btn-sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>
          {t('common.previous')}
        </button>
        <button type="button" className="btn btn-outline btn-sm" disabled={page >= pageCount} onClick={() => onChange(page + 1)}>
          {t('common.next')}
        </button>
      </div>
    </nav>
  )
}

export function FilterBar({ children }) {
  return <div className="flex flex-wrap items-end gap-3 mb-5">{children}</div>
}

export function SeverityBadge({ severity }) {
  const map = {
    CRITICAL: { variant: 'critical', label: 'Critical' },
    HIGH: { variant: 'high', label: 'High' },
    WARNING: { variant: 'warning', label: 'Warning' },
  }
  const config = map[severity] || { variant: 'neutral', label: severity }
  return <Badge variant={config.variant}>{config.label}</Badge>
}

export function StatusBadge({ status }) {
  const map = {
    ACTIVE: { variant: 'success', label: 'Active' },
    WITHDRAWN: { variant: 'neutral', label: 'Withdrawn' },
    PENDING_REVIEW: { variant: 'warning', label: 'Pending' },
    COMMITTED: { variant: 'success', label: 'Committed' },
    RESOLVED: { variant: 'success', label: 'Resolved' },
    OPEN: { variant: 'info', label: 'Open' },
    IN_PROGRESS: { variant: 'warning', label: 'In Progress' },
    VALID: { variant: 'success', label: 'Valid' },
    NOT_FOUND: { variant: 'neutral', label: 'Not Found' },
    REVOKED: { variant: 'critical', label: 'Revoked' },
  }
  const config = map[status] || { variant: 'neutral', label: status }
  return <Badge variant={config.variant}>{config.label}</Badge>
}
