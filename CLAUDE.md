# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Veriducate** — Academic Admission Compliance & Credential Verification Platform for Smart India Hackathon 2026 (Problem Statement SIH26263). Formerly "EduSynC"; all references have been renamed to "veriducate" across the codebase.

APAAR ID (Automated Permanent Academic Account Registry) student data management and verification for AICTE-approved institutions.

Three-part architecture with **identical validation rules** in both Python and Kotlin:
- `frontend/` — React 19 + Vite 6 + Tailwind CSS 4 + Recharts + React Router 7 + i18n (13 languages)
- `backend/` — FastAPI + Motor (async MongoDB) + Pydantic v2
- `Acadentrix/` — Kotlin + Jetpack Compose (offline-first Android client, `com.acadentrix.app`)

## Build and Test Commands

### Backend (Python 3.11+)
```bash
cd backend
pip install -r requirements.txt
pytest -q                          # runs against in-memory MongoDB
ruff check app tests               # lint
python -m app.scripts.seed         # seed demo data
uvicorn app.main:app --reload      # dev server at localhost:8000
```

### Frontend
```bash
cd frontend
npm install
npm test                           # Vitest
npm run lint                       # eslint
npm run i18n:check                 # validate translation keys
npm run dev                        # dev server at localhost:5173, proxies /api to backend
npm run build                      # production bundle
```

### Android (requires JDK 17+, compileSdk 36)
```bash
cd Acadentrix
./gradlew testDebugUnitTest assembleDebug
# Windows: .\build.cmd testDebugUnitTest assembleDebug
```

### Full Stack (Docker)
```bash
docker compose up --build          # MongoDB 7 + API + frontend on localhost:8000
```

## Architecture Essentials

### Key Design Decisions

1. **Dual implementation**: APAAR validator, anomaly engine, signed seal format, and QR payload are specified identically in Python (`backend/app/services/`) and Kotlin (`Acadentrix/core/`). Changes must be mirrored.

2. **No ML in validation**: Ten-layer anomaly engine and six change-impact rules (CIA-A through CIA-F) are deterministic pure functions.

3. **Privacy-first lookups**: Raw APAAR IDs are never used as lookup keys. Student documents store `apaar_id_hmac` (HMAC-SHA256) for equality lookups.

4. **No unique index on APAAR ID**: Deliberate — a unique constraint would prevent detecting cross-institution duplicates.

5. **Opaque verification tokens**: QR badges carry expiring, revocable tokens (not raw APAAR IDs). Public verification endpoints return allowlist-only data.

6. **Three seal generations coexist**: Legacy (unkeyed), HMAC-SHA256, and Ed25519 — all must verify badges already in circulation.

7. **RBAC**: 4 roles (aicte_admin, institution_admin, verifier, student) with 17 permissions. Permission matrix mirrored in `frontend/src/utils/permissions.js` and `backend/app/core/rbac.py`.

8. **Audit trail**: SHA-256 hash-chained events (tamper-evident, offline-verifiable). Genesis hash = `"0"*64`.

### Backend Layer Map

| Layer | Package | Notes |
|-------|---------|-------|
| Config | `app.core.config` | Refuses dev secrets in production |
| Database | `app.core.database` | Async MongoDB via Motor |
| RBAC | `app.core.rbac` | Permission matrix (mirrored in frontend) |
| Security | `app.core.security` | JWT (HS256), bcrypt, API keys (prefix `veriducate`) |
| Models | `app.models` | Documents, enums |
| Repositories | `app.repositories` | All MongoDB access; routers never touch collections |
| Services | `app.services` | Validation rules, anomaly engine, impact engine, seals, CSV, PDF |
| API | `app.api` | Thin routers delegating to services |

### Critical Services

- `app/services/anomaly_engine.py` — Ten-layer anomaly detection (~820 lines)
- `app/services/impact_engine.py` — Change impact detector (CIA-A through CIA-F rules)
- `app/services/apaar_validator.py` — APAAR ID syntax validation
- `app/services/seal.py` — Credential signing (legacy/HMAC/Ed25519)
- `app/services/policy.py` — Versioned supernumerary ceiling policy (stored in DB, not code)
- `app/services/csv_ingestion.py` — RFC 4180, BOM-tolerant CSV parsing with preview→approve→commit workflow
- `app/services/audit_chain.py` — Hash-chained audit events

### Transaction Handling

On MongoDB Atlas (replica set): multi-document transactions wrap corrections to 6 collections. On standalone: explicit `operation_status` tracking with manual recovery.

## Frontend Design System

### Layout
- **Sidebar navigation** (`AppLayout.jsx`): collapsible, mobile-responsive with overlay. 4 sections: Overview, Management, Compliance, Credentials.
- Pages use inline `page-header` / `page-title` / `page-subtitle` CSS classes (not a PageHeader component).

### Design Tokens (CSS custom properties)
Defined in `frontend/src/index.css` via `:root` and `[data-theme='dark']`:
- Brand: `--app-brand` (#1e3a5f), `--app-brand-mid` (#2563eb), `--app-accent` (#0d9488)
- Surfaces: `--app-canvas`, `--app-surface`, `--app-surface-2`, `--app-surface-3`
- Semantic: `--app-success`, `--app-warning`, `--app-danger`, `--app-info` (each with `-surface` and `-strong` variants)
- Sidebar: `--app-sidebar`, `--app-sidebar-hover`, `--app-sidebar-active`, `--app-sidebar-text`

Tailwind 4 maps these to utility classes via `@theme inline` (e.g., `bg-brand`, `text-muted`, `border-line`).

### Component Classes (in `@layer components`)
- `.card`, `.card-header`, `.card-body` — card container
- `.btn`, `.btn-primary`, `.btn-accent`, `.btn-outline`, `.btn-danger`, `.btn-ghost`, `.btn-sm`, `.btn-lg`
- `.input`, `.label` — form elements
- `.badge-critical`, `.badge-high`, `.badge-warning`, `.badge-success`, `.badge-info`, `.badge-neutral`
- `.stat-card`, `.stat-value`, `.stat-label` — KPI tiles
- `.table-wrap`, `.data-table` — scrollable tables
- `.empty-state` — centered placeholder

### Routes
| Path | Page | Permission |
|------|------|------------|
| `/login` | LoginPage | Public |
| `/auth/callback` | AuthCallbackPage | Public |
| `/verify/t/:token` | TokenVerificationPage | Public |
| `/dashboard` | DashboardPage | VIEW_NATIONAL_DASHBOARD |
| `/institutions` | InstitutionsPage | VIEW_COMPLIANCE_MATRIX |
| `/students` | StudentsPage | VIEW_STUDENT_REGISTER |
| `/upload` | UploadPage | IMPORT_CSV |
| `/anomalies` | AnomaliesPage | REVIEW_ANOMALIES |
| `/cases` | CasesPage | REVIEW_TASKS |
| `/impact` | ImpactPage | PREVIEW_CORRECTION |
| `/verify` | VerificationPage | VERIFY_CREDENTIAL |
| `/reports` | ReportsPage | EXPORT_REPORTS |

### Shared Components (`components/common/index.jsx`)
Card, KpiCard, Badge, Spinner, ErrorState, EmptyState, Pagination, FilterBar, SeverityBadge, StatusBadge.

### Format Utils (`utils/format.js`)
`severityClass()`, `statusClass()`, `riskClass()` return badge CSS class names (e.g., `badge-critical`). `formatApaar()` always masks — no screen ever shows a full APAAR ID.

## Environment Variables

Required for backend: `MONGODB_URL`, `SECRET_KEY`, `SEAL_HMAC_KEY`, `FRONTEND_ORIGIN`

In-memory database requires explicit `ALLOW_IN_MEMORY_DB=true` and is refused in production.

Frontend: `VITE_API_URL` is baked in at build time. Required for split deployment (Vercel+Render). Leave unset when API serves the frontend (Docker).

## Deployment

### Docker Compose (single-image, recommended for demo)
```bash
docker compose up --build    # MongoDB 7 + API + frontend on localhost:8000
```
The `backend/Dockerfile` is a multi-stage build: Node 22 (frontend) → Python 3.12 (backend deps) → runtime. Frontend dist is served by FastAPI's SPA handler.

### Split Deployment (Render + Vercel + MongoDB Atlas)
- **Backend**: Render reads `render.yaml` (`rootDir: backend`). Set `MONGODB_URL`, `SECRET_KEY`, `SEAL_HMAC_KEY`, `FRONTEND_ORIGIN` in Render dashboard.
- **Frontend**: Vercel with root `frontend/`. Set `VITE_API_URL` to Render URL. `vercel.json` handles SPA routing + security headers.
- **Database**: MongoDB Atlas (free tier works; replica set enables transactions for corrections).

### CI/CD
`.github/workflows/veriducate.yml` — backend tests (Python 3.11-3.13), frontend tests + build (Node 20, 22), container image build + health check.

## Module Architecture Diagrams

Interactive HTML diagrams in `modules/`:
- `module1_users_and_clients.html` — Zone 1: Users & Clients
- `module2_access_api_request_control.html` — Zone 2: Access & API Request Control
- `module3_core_business_services.html` — Zone 3: Core Business Services
- `module4_async_processing_case_mgmt.html` — Zone 4: Async Processing & Case Management
- `module5_persistence_integrity_credentials.html` — Zone 5: Persistence, Integrity & Credentials
- `module6_outputs_monitoring_deployment.html` — Zone 6: Outputs, Monitoring & Deployment
