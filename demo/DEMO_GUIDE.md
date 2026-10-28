# Veriducate Demo Guide - SIH26263

## Quick Start

**Backend:** http://127.0.0.1:8000 (already running)
**Frontend:** http://localhost:5173 (run `cd frontend && npm run dev`)
**API Docs:** http://127.0.0.1:8000/docs

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| AICTE Admin | `aicte.admin@veriducate.gov.in` | `DemoSIH2026!` |
| Institution Admin | `principal@vidyavikas.edu.in` | `DemoSIH2026!` |
| Verifier | `verifier@acme-corp.com` | `DemoSIH2026!` |

---

## Demo Scenario 1: Anomaly Detection (0:40-1:30)

### Pre-existing Anomalies (Already Seeded)
The demo database already contains 30 anomalies including:

| Type | Count | Example |
|------|-------|---------|
| EXCESS_APPROVED_INTAKE | 2 | BTECH_CSE: 62 regular vs 60 approved |
| DUPLICATE_CROSS_COLLEGE | 4 | Same APAAR at INST-0421 and INST-0422 |
| INVALID_APAAR_FORMAT | 1 | Malformed identifier |
| UNSANCTIONED_PROGRAM | 1 | Student in non-approved programme |

### Steps to Demo

1. **Login as Institution Admin:** `principal@vidyavikas.edu.in`
2. **Go to Upload page** (left navigation)
3. **Upload the CSV file:** `demo/intake_breach_demo.csv`
4. **Review the preview:**
   - Shows 8 new students for BTECH_CSE
   - Current: 64 regular admissions
   - After commit: 72 regular admissions (19 over capacity!)
   - Each flagged row shows rule code, severity, evidence

5. **Alternative - View existing anomalies:**
   - Login as `aicte.admin@veriducate.gov.in`
   - Go to **Anomalies** page
   - Filter by severity: CRITICAL
   - Show the intake breach details

### Key Talking Points
- "The system identifies a sanctioned intake violation"
- "62 regular admissions against approved capacity of 60" (use actual numbers)
- "Each finding includes rule code, severity, and supporting evidence"
- "An anomaly is a signal for investigation, not automatic proof of fraud"

---

## Demo Scenario 2: Impact Detection (1:30-2:10)

### Setup - Find a Good Student for Demo

Use this student for a compelling impact demo:

**Student with Cross-Institution Risk:**
- Record ID: `6ae1b1631307ab555cc19995`
- APAAR: `322999031397`
- Name: Aakash Bose
- Current: INST-0421, BTECH_CSE

### Steps to Demo

1. **Login as AICTE Admin:** `aicte.admin@veriducate.gov.in`
2. **Go to Change Impact page** (left navigation)
3. **Search for student:** Enter APAAR `322999031397` or name "Aakash Bose"
4. **Select the student**
5. **Propose a correction - change institution:**
   - Change `institution_id` from `INST-0421` to `INST-0422`
   
6. **Click "Preview Impact"**
7. **Review the findings:**
   - **CIA-A:** Potential duplicate with existing record
   - **CIA-B:** Destination programme seat recalculation needed
   - **CIA-F:** Verification tokens will become stale

### Alternative Impact Scenarios

**Scenario A - APAAR ID Change:**
- Change APAAR ID to `929347019232` (existing cross-institution duplicate)
- Shows: "New APAAR ID already held by another institution"

**Scenario B - Programme Change:**
- Change `program_id` from `BTECH_CSE` to `BTECH_ECE`
- Shows: Seat count recalculation for both programmes

### Key Talking Points
- "Veriducate's impact detector evaluates proposed changes using six rules"
- "CIA-A through CIA-F check for duplicates, credential invalidation, seat violations"
- "Instead of applying without warning, it generates an impact assessment"
- "The administrator can examine consequences before deciding to proceed"

---

## Demo Scenario 3: Credential Verification (2:10-2:35)

### Steps to Demo

1. **Login as Institution Admin:** `principal@vidyavikas.edu.in`
2. **Go to Students page**
3. **Find a student** (e.g., search "Verma" or "Sharma")
4. **Click on the student row** to view details
5. **Click "Generate QR Badge"** or **"Download Certificate"**
6. **Show the QR code** - contains opaque token URL
7. **Open the verification URL** in a new incognito window:
   - Format: `http://localhost:5173/verify/t/{token}`
   - Shows: Validation result WITHOUT exposing raw APAAR ID
   - Shows: Institution, programme, academic year, status

### Alternative - Direct API Verification

```bash
# Get a token for a student (replace record_id)
curl -X POST "http://127.0.0.1:8000/api/verification-tokens" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"student_record_id": "6ae1b1631307ab555cc19995"}'

# Verify using the token (public endpoint, no auth needed)
curl "http://127.0.0.1:8000/api/verify/token/{TOKEN_VALUE}"
```

### Key Talking Points
- "The platform supports HMAC-SHA-256 and Ed25519 sealing"
- "Uses opaque token rather than exposing raw APAAR ID"
- "Verifier receives validation result without accessing the underlying identifier"
- "Preserves privacy while supporting credential integrity checks"

---

## Demo Data Summary

### Seeded Institutions (12 total)
| ID | Name | State |
|----|------|-------|
| INST-0421 | Vidya Vikas Institute of Technology | Maharashtra |
| INST-0422 | Bharatiya Vidya Mandir College | Maharashtra |
| INST-0423 | Deccan Institute of Engineering | Telangana |
| INST-0424 | Karnataka Institute of Management | Karnataka |
| INST-0425 | Gujarat Polytechnic | Gujarat |

### Seeded Programmes (60 total)
Each institution has 5 programmes:
- BTECH_CSE, BTECH_ECE, BTECH_MECH, BTECH_CIVIL, BTECH_AIML (for engineering)
- DIPLOMA variants (for polytechnics)
- MBA, PGDM variants (for management)

### Seeded Students: 1,889
### Seeded Anomalies: 30

---

## Troubleshooting

### Backend not responding
```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

### Frontend not loading
```bash
cd frontend
npm install
npm run dev
```

### Reset demo data
Restart the backend - in-memory data is re-seeded automatically.

### Check current anomalies via API
```bash
TOKEN="your-jwt-token"
curl -s "http://127.0.0.1:8000/api/anomalies" -H "Authorization: Bearer $TOKEN"
```

---

## API Quick Reference

| Action | Method | Endpoint |
|--------|--------|----------|
| Login | POST | `/api/auth/login` |
| List students | GET | `/api/students` |
| Upload CSV preview | POST | `/api/students/bulk/preview` |
| Commit CSV | POST | `/api/students/bulk/commit` |
| List anomalies | GET | `/api/anomalies` |
| Correction preview | POST | `/api/students/{id}/correction-preview` |
| Apply correction | POST | `/api/students/{id}/corrections` |
| Issue token | POST | `/api/verification-tokens` |
| Verify token (public) | GET | `/api/verify/token/{token}` |
| Dashboard KPIs | GET | `/api/dashboard/national` |

---

## Test Counts (for closing slide)

- Backend (pytest): 258 tests
- Frontend (vitest): 48 tests  
- Android (JUnit): 192 tests
- **Total: 498 tests**

*Note: Run `cd backend && pytest -q` to verify backend tests.*
