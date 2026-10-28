# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Veriducate is an APAAR ID (Automated Permanent Academic Account Registry) student data management and verification platform for AICTE-approved institutions. The product name is **Veriducate**, but the codebase keeps internal identifiers (`backend/` Python package, `com.acadentrix.app` Android package).

Three-part architecture with **identical validation rules** in both Python and Kotlin:
- `frontend/` - React 19 + Vite 6 + Tailwind CSS 4 + Recharts + React Router 7
- `backend/` - FastAPI + Motor (async MongoDB) + Pydantic v2
- `Acadentrix/` - Kotlin + Jetpack Compose (offline-first Android client, no API calls yet)

## Build and Test Commands

### Backend (Python)
```bash
cd backend
pip install -r requirements.txt
pytest -q                          # 258 tests, runs against in-memory MongoDB
ruff check app tests               # lint
python -m app.scripts.seed         # seed demo data
uvicorn app.main:app --reload      # dev server at localhost:8000
```

### Frontend
```bash
cd frontend
npm install
npm test                           # 44 tests (Vitest)
npm run lint                       # eslint
npm run i18n:check                 # validate translation keys
npm run dev                        # dev server at localhost:5173, proxies /api to backend
npm run build                      # production bundle
```

### Android (requires JDK 17+, compileSdk 36)
```bash
cd Acadentrix
./gradlew testDebugUnitTest assembleDebug    # 185 tests
# or on Windows: .\build.cmd testDebugUnitTest assembleDebug
```

### Full Stack
```bash
docker compose up --build          # MongoDB + API + frontend
```

## Architecture Essentials

### Key Design Decisions

1. **Dual implementation**: The APAAR validator, anomaly engine, signed seal format, and QR payload are specified identically in Python (`backend/app/services/`) and Kotlin (`Acadentrix/core/`). Changes must be mirrored.

2. **No ML in validation**: The ten-layer anomaly engine and six change-impact rules (CIA-A through CIA-F) are deterministic pure functions.

3. **Privacy-first lookups**: Raw APAAR IDs are never used as lookup keys. Student documents store `apaar_id_hmac` (HMAC-SHA256) for equality lookups.

4. **No unique index on APAAR ID**: This is deliberate - a unique constraint would prevent detecting cross-institution duplicates.

5. **Opaque verification tokens**: QR badges carry expiring, revocable tokens (not raw APAAR IDs). Public verification endpoints return allowlist-only data.

6. **Three seal generations coexist**: Legacy (unkeyed), HMAC-SHA256, and Ed25519 - all must verify badges already in circulation.

### Backend Layer Map

| Layer | Package | Notes |
|-------|---------|-------|
| Config | `app.core.config` | Refuses dev secrets in production |
| Database | `app.core.database` | Async MongoDB via Motor |
| RBAC | `app.core.rbac` | Permission matrix (mirrored in frontend) |
| Models | `app.models` | Documents, enums |
| Repositories | `app.repositories` | All MongoDB access; routers never touch collections |
| Services | `app.services` | Validation rules, anomaly engine, impact engine, seals, CSV, PDF |
| API | `app.api` | Thin routers delegating to services |
| Audit | `app.audit.writer` | Hash-chained audit trail |

### Critical Services

- `app/services/anomaly_engine.py` - Ten-layer anomaly detection
- `app/services/impact_engine.py` - Change impact detector (CIA-A through CIA-F rules)
- `app/services/apaar_validator.py` - APAAR ID syntax validation
- `app/services/seal.py` - Credential signing (legacy/HMAC/Ed25519)
- `app/services/policy.py` - Versioned supernumerary ceiling policy (stored in DB, not code)

### Transaction Handling

On MongoDB Atlas (replica set): multi-document transactions wrap corrections to 6 collections. On standalone: explicit `operation_status` tracking with manual recovery.

## Environment Variables

Required for backend: `MONGODB_URL`, `SECRET_KEY`, `SEAL_HMAC_KEY`, `FRONTEND_ORIGIN`

In-memory database requires explicit `ALLOW_IN_MEMORY_DB=true` and is refused in production.

## Deployment

- Backend: Render (`render.yaml`) - `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- Frontend: Vercel (`frontend/vercel.json`) - set `VITE_API_URL` before first build (baked in)
- Database: MongoDB Atlas
