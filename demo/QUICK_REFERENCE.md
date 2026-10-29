# Veriducate Demo Quick Reference (3 min)

## Credentials
**Password for all:** `DemoSIH2026!`

| Role | Email |
|------|-------|
| AICTE Admin | aicte.admin@veriducate.gov.in |
| Institution | principal@vidyavikas.edu.in |
| Verifier | verifier@acme-corp.com |

---

## Scene 1: Anomaly Detection (50s)

**Option A - View existing anomalies:**
1. Login: `aicte.admin@veriducate.gov.in`
2. Navigate: **Anomalies** (sidebar)
3. Filter: Severity = CRITICAL
4. Show: EXCESS_APPROVED_INTAKE (62 regular vs 60 approved)

**Option B - Upload new batch:**
1. Login: `principal@vidyavikas.edu.in`
2. Navigate: **Upload** (sidebar)
3. Upload: `demo/intake_breach_demo.csv`
4. Show: Preview with 8 incoming + 62 existing = 70 regular (breach worsens)

**Say:** "The system flags a sanctioned intake violation before records are committed."

---

## Scene 2: Impact Detection (40s)

1. Login: `aicte.admin@veriducate.gov.in`
2. Navigate: **Impact** (sidebar)
3. Search: `Aakash Bose` or APAAR `322999031397`
4. Change: Institution to INST-0422
5. Click: **Preview Impact**
6. Show: CIA rules flagging duplicate risk, token invalidation

**Say:** "Six impact rules evaluate consequences before any change is applied."

---

## Scene 3: Credential Verification (25s)

1. Navigate: **Students** (sidebar)
2. Click: Any student row
3. Click: **Generate QR Badge**
4. Open: Token URL in incognito
5. Show: Verification result (no raw APAAR visible)

**Say:** "Opaque tokens enable verification without exposing the underlying identifier."

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Anomaly layers | 10 |
| Impact rules | 6 (CIA-A to CIA-F) |
| Seal generations | 3 |
| RBAC roles | 4 |
| Backend tests | 258 |
| Frontend tests | 48 |
| Android tests | 192 |
| **Total tests** | **498** |

---

## Emergency Fallbacks

**Backend down?**
```bash
cd backend && source .venv/bin/activate && uvicorn app.main:app --reload
```

**Frontend not loading?**
```bash
cd frontend && npm run dev
```

**Reset data?**
Restart backend (in-memory DB re-seeds automatically)
