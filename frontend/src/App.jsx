import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import AppLayout from './components/layout/AppLayout'
import { useAuth } from './hooks/useAuth'
import AnomaliesPage from './pages/AnomaliesPage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import CasesPage from './pages/CasesPage'
import DashboardPage from './pages/DashboardPage'
import ImpactPage from './pages/ImpactPage'
import InstitutionsPage from './pages/InstitutionsPage'
import LoginPage from './pages/LoginPage'
import ReportsPage from './pages/ReportsPage'
import StudentsPage from './pages/StudentsPage'
import TokenVerificationPage from './pages/TokenVerificationPage'
import UploadPage from './pages/UploadPage'
import VerificationPage from './pages/VerificationPage'
import { PERMISSIONS } from './utils/permissions'

function Protected({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return children
}

function Guarded({ permission, children }) {
  const { can } = useAuth()
  const { t } = useTranslation()
  if (!can(permission)) {
    return (
      <div className="empty-state">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" />
        </svg>
        <h3 className="text-base font-semibold text-ink">{t('common.notAvailable')}</h3>
        <p className="text-sm text-muted mt-1">{t('common.permissionMissing', { permission })}</p>
      </div>
    )
  }
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/callback" element={<AuthCallbackPage />} />
      <Route path="/verify/t/:token" element={<TokenVerificationPage />} />
      <Route
        element={
          <Protected>
            <AppLayout />
          </Protected>
        }
      >
        <Route
          path="/dashboard"
          element={<Guarded permission={PERMISSIONS.VIEW_NATIONAL_DASHBOARD}><DashboardPage /></Guarded>}
        />
        <Route
          path="/institutions"
          element={<Guarded permission={PERMISSIONS.VIEW_COMPLIANCE_MATRIX}><InstitutionsPage /></Guarded>}
        />
        <Route
          path="/students"
          element={<Guarded permission={PERMISSIONS.VIEW_STUDENT_REGISTER}><StudentsPage /></Guarded>}
        />
        <Route
          path="/upload"
          element={<Guarded permission={PERMISSIONS.IMPORT_CSV}><UploadPage /></Guarded>}
        />
        <Route
          path="/anomalies"
          element={<Guarded permission={PERMISSIONS.REVIEW_ANOMALIES}><AnomaliesPage /></Guarded>}
        />
        <Route
          path="/cases"
          element={<Guarded permission={PERMISSIONS.REVIEW_TASKS}><CasesPage /></Guarded>}
        />
        <Route
          path="/impact"
          element={<Guarded permission={PERMISSIONS.PREVIEW_CORRECTION}><ImpactPage /></Guarded>}
        />
        <Route
          path="/verify"
          element={<Guarded permission={PERMISSIONS.VERIFY_CREDENTIAL}><VerificationPage /></Guarded>}
        />
        <Route
          path="/reports"
          element={<Guarded permission={PERMISSIONS.EXPORT_REPORTS}><ReportsPage /></Guarded>}
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
