import i18n, { LANGUAGE_BY_CODE } from '../i18n'

function activeLocale() {
  const code = String(i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  return LANGUAGE_BY_CODE[code]?.bcp47 || 'en-IN'
}

export function formatNumber(value) {
  return Number(value || 0).toLocaleString(activeLocale())
}

export function formatPercent(value, digits = 1) {
  return new Intl.NumberFormat(activeLocale(), { style: 'percent', maximumFractionDigits: digits, minimumFractionDigits: digits }).format(Number(value || 0) / 100)
}

export function formatDate(value) {
  if (!value) return '-'
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleDateString(activeLocale(), {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(value) {
  if (!value) return '-'
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleString(activeLocale(), {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatApaar(value) {
  return maskApaar(value)
}

export function maskApaar(value) {
  const digits = String(value || '').replace(/\D/g, '')
  if (digits.length < 4) return '*'.repeat(digits.length)
  return `${digits.slice(0, 4)} **** ****`
}

export const QUOTA_LABELS = {
  REGULAR_MERIT: 'Merit',
  MANAGEMENT: 'Management',
  SUPERNUMERARY_NRI: 'NRI',
  SUPERNUMERARY_OCI: 'OCI',
  SUPERNUMERARY_FN: 'Foreign National',
  SUPERNUMERARY_TFW: 'TFW',
  PMSSS: 'PMSSS',
}

export function quotaLabel(code) {
  return QUOTA_LABELS[code] || code || '-'
}

export const ANOMALY_LABELS = {
  EXCESS_APPROVED_INTAKE: 'Over-admission',
  DUPLICATE_CROSS_COLLEGE: 'Cross-enrolment',
  DUPLICATE_SAME_INSTITUTION: 'Duplicate record',
  DUPLICATE_ROLL_NUMBER: 'Duplicate roll no.',
  INVALID_APAAR_FORMAT: 'Invalid APAAR',
  SUPERNUMERARY_BREACH: 'Supernumerary cap',
  INCONSISTENT_CATEGORY: 'Data inconsistency',
  IMPOSSIBLE_DATE: 'Date conflict',
  MISSING_REQUIRED_FIELD: 'Incomplete record',
  UNSANCTIONED_PROGRAM: 'Unregistered course',
}

export function anomalyLabel(code) {
  return ANOMALY_LABELS[code] || code || '-'
}

export function severityClass(severity) {
  switch (severity) {
    case 'CRITICAL':
      return 'badge-critical'
    case 'HIGH':
      return 'badge-high'
    case 'WARNING':
      return 'badge-warning'
    default:
      return 'badge-neutral'
  }
}

export function statusClass(status) {
  switch (status) {
    case 'VERIFIED':
      return 'badge-success'
    case 'FLAGGED_ANOMALY':
      return 'badge-critical'
    default:
      return 'badge-warning'
  }
}

export function riskClass(band) {
  switch (band) {
    case 'CRITICAL':
      return 'badge-critical'
    case 'HIGH':
      return 'badge-high'
    case 'MEDIUM':
      return 'badge-warning'
    default:
      return 'badge-success'
  }
}
