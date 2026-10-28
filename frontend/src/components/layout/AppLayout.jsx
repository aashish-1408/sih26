import { useState } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from '../common/ThemeToggle'
import LanguageSwitcher from '../common/LanguageSwitcher'
import { useAuth } from '../../hooks/useAuth'
import { PERMISSIONS, ROLE_LABELS } from '../../utils/permissions'

const NAV_SECTIONS = [
  {
    title: 'Overview',
    items: [
      { to: '/dashboard', label: 'Dashboard', icon: 'grid', permission: PERMISSIONS.VIEW_NATIONAL_DASHBOARD },
    ],
  },
  {
    title: 'Management',
    items: [
      { to: '/institutions', label: 'Institutions', icon: 'building', permission: PERMISSIONS.VIEW_COMPLIANCE_MATRIX },
      { to: '/students', label: 'Students', icon: 'users', permission: PERMISSIONS.VIEW_STUDENT_REGISTER },
      { to: '/upload', label: 'CSV Upload', icon: 'upload', permission: PERMISSIONS.IMPORT_CSV },
    ],
  },
  {
    title: 'Compliance',
    items: [
      { to: '/anomalies', label: 'Anomalies', icon: 'alert-triangle', permission: PERMISSIONS.REVIEW_ANOMALIES },
      { to: '/cases', label: 'Case Review', icon: 'clipboard', permission: PERMISSIONS.REVIEW_TASKS },
      { to: '/impact', label: 'Impact Analysis', icon: 'activity', permission: PERMISSIONS.PREVIEW_CORRECTION },
    ],
  },
  {
    title: 'Credentials',
    items: [
      { to: '/verify', label: 'Verification', icon: 'shield', permission: PERMISSIONS.VERIFY_CREDENTIAL },
      { to: '/reports', label: 'Reports', icon: 'file-text', permission: PERMISSIONS.EXPORT_REPORTS },
    ],
  },
]

const ICONS = {
  grid: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  building: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15M9 9h1M9 13h1M9 17h1M17 9h1M17 13h1" />
    </svg>
  ),
  users: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  upload: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  ),
  'alert-triangle': (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="m10.29 3.86-8.6 14.86A2 2 0 0 0 3.4 21h17.2a2 2 0 0 0 1.71-2.97L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17h.01" />
    </svg>
  ),
  clipboard: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  ),
  activity: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  shield: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  'file-text': (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  menu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  x: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  logout: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  ),
  chevron: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
}

function Icon({ name }) {
  return ICONS[name] || null
}

export default function AppLayout() {
  const { user, role, can, logout } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const currentPage = NAV_SECTIONS
    .flatMap((s) => s.items)
    .find((item) => location.pathname.startsWith(item.to))

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col
          bg-[var(--app-sidebar)] transform transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/10 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">V</div>
          <div>
            <div className="text-white font-semibold text-sm tracking-wide">Veriducate</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest">SIH 2026</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {NAV_SECTIONS.map((section) => {
            const visibleItems = section.items.filter((item) => can(item.permission))
            if (!visibleItems.length) return null
            return (
              <div key={section.title}>
                <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  {section.title}
                </div>
                <div className="space-y-0.5">
                  {visibleItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                          isActive
                            ? 'bg-[var(--app-sidebar-active)] text-white'
                            : 'text-[var(--app-sidebar-text)] hover:bg-[var(--app-sidebar-hover)] hover:text-white'
                        }`
                      }
                    >
                      <Icon name={item.icon} />
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        <div className="border-t border-white/10 p-4 shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-semibold">
              {(user?.display_name || '?')[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">{user?.display_name || 'User'}</div>
              <div className="text-white/50 text-[11px] truncate">{ROLE_LABELS[role] || role}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-white/60
              hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Icon name="logout" />
            <span>{t('nav.signOut')}</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 shrink-0 bg-surface border-b border-line flex items-center justify-between px-5 gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-surface-3 cursor-pointer text-muted"
            >
              <Icon name={sidebarOpen ? 'x' : 'menu'} />
            </button>
            <div>
              <h1 className="text-base font-semibold text-ink m-0">{currentPage?.label || 'Dashboard'}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle label={t('settings.theme.label')} />
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
