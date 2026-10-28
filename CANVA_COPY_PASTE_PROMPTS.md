# COPY-PASTE CANVA AI PROMPTS
## Ready to use - just copy each block directly into Canva

---

## SLIDE 1 - TITLE PAGE

```
Create a professional hackathon presentation title slide for Smart India Hackathon 2026 with a deep blue gradient background. Include:

- Large "TITLE PAGE" header in white
- SIH 2026 logo (brain icon with orange and green, Indian flag colors) in top right
- Bullet point information list in white text:
  • Problem Statement ID – SIH26263
  • Problem Statement Title – Development of an APAAR ID-Based Student Data Management and Verification Platform for AICTE-Approved Institutions
  • Idea Title – Veriducate: APAAR ID Compliance at Scale
  • Theme – Smart Education
  • PS Category – Software
  • Team Name – RAMblers
- Bottom right: Three UN Sustainable Development Goal icons (SDG 4 Quality Education in red, SDG 9 Innovation in orange, SDG 16 Peace Justice in blue)

Style: Government/education professional aesthetic, clean white text on dark blue, 16:9 aspect ratio
```

---

## SLIDE 2 - IDEA/SOLUTION

```
Create a dense information slide titled "IDEA TITLE" for a hackathon pitch. Use a white background with blue accents. Layout should be 60/40 split.

LEFT SIDE (60%):
Brief text box: "Veriducate – we have BUILT a working 10-layer compliance engine with impact detection and tamper-evident credentials. Problem: invalid IDs, cross-institution duplicates, intake breaches caught late by manual reconciliation."

Create a 2x3 grid of feature cards below:
1. ANOMALY ENGINE ✓ - "10 layers, Stable codes, 40 unit tests" (green checkmark)
2. IMPACT DETECTOR ✓ - "6 CIA rules, 'What breaks?', Review lists" (shield icon)
3. SEALED CREDENTIALS ✓ - "HMAC/Ed25519, Hash-chained audit" (lock icon)
4. PRIVACY & ACCESS ✓ - "HMAC tokens, RBAC isolation" (privacy icon)
5. CSV PREVIEW → COMMIT ✓ - "Row validation, Seat projection" (document icon)

Below the grid, add a horizontal "SCALE FEATURES (Planned ○)" bar showing:
○ ASYNC JOBS, ○ CASE MGMT, ○ BULK VERIFY, ○ OBSERVABILITY
(Use outline style for planned items)

RIGHT SIDE (40%):
Create a vertical flowchart "PROBLEM RESOLUTION":
VALIDATE (10-Layer Engine ✓) → PREVIEW IMPACT (CIA Rules ✓) → REVIEW & RESOLVE (Case Mgmt ○) → SEAL & VERIFY (Credentials ✓)

Below flowchart, add "UNIQUE VALUE PROPOSITION" box with:
✦ Proof first: 487 tests across 3 platforms
✦ Impact-aware: previews "what else breaks?"
✦ Privacy-first: HMAC match tokens, never raw APAAR
✦ Tamper-evident: hash-chained audit, sealed credentials

Footer: "✓ = implemented and tested   ○ = planned for competition phase"
Header: "RAMblers" badge left, "SMART INDIA HACKATHON 2026" logo right
```

---

## SLIDE 3 - TECHNICAL APPROACH (Main Architecture)

```
Create a "TECHNICAL APPROACH" slide with a detailed system architecture flowchart. This is the most important slide - make the architecture diagram prominent (65% of slide).

PROCESS FLOW ARCHITECTURE (vertical flowchart):

TOP: Three user icons in a row - "AICTE ADMIN", "INSTITUTION ADMIN", "VERIFIER"
↓
AUTH BOX: "🔐 AUTHENTICATION" showing JWT, Google OAuth, RBAC, Institution Scope badges
↓
CSV BOX: "📁 CSV UPLOAD + PREVIEW ✓" with mini spreadsheet showing valid/error/warning rows
↓
ANOMALY ENGINE BOX (make this large and prominent):
"🔍 10-LAYER ANOMALY ENGINE ✓"
Show flow: L1→L2→L3→L4→L5→L6→L7→L8→L9→L10
Color indicators: 🔴 CRITICAL 🟠 HIGH 🟡 WARNING
↓
IMPACT DETECTOR BOX:
"⚠ IMPACT DETECTOR (6 CIA Rules) ✓"
Show: CIA-A through CIA-F
Caption: "What else breaks? → Review checklist"
↓
SEALING BOX:
"🔏 CREDENTIAL SEALING ✓"
Three paths converging: Legacy | HMAC-SHA256 | Ed25519 → QR CODE
↓
VERIFICATION BOX:
"✅ VERIFICATION FLOW ✓"
Student QR → Scan → HMAC Match Lookup → ✓/✗ Result (no PII)
↓
AUDIT BOX:
"📜 HASH-CHAINED AUDIT TRAIL ✓"
Entry₁ →H()→ Entry₂ →H()→ Entry₃...

Use technology logos throughout. Green ✓ for built items.
Add footer: "✓ = IMPLEMENTED | ○ = PLANNED (Redis/ARQ, Prometheus)"
```

---

## SLIDE 3 - TECHNICAL APPROACH (Tech Stack - Right Side)

```
Create the right side panel for a technical approach slide (35% width):

SECTION 1 - "WORKING MODEL / DESIGN:"
Two screenshot placeholder boxes:
- "Dashboard with KPI cards, anomaly severity chips"
- "Impact checklist preview"
Add "[Demo video link]" with play button

SECTION 2 - "Implementation Status" box:
• P0 Mandatory MVP: 100% (12/12) ✓
• P1 Differentiators: 75% (6/8)
• P2 Extensions: 0% (post-selection)
• Tests: 487 (258 backend + 44 web + 185 Android)
(Add a circular progress indicator)

SECTION 3 - "TECH STACK" logo grid:

IMPLEMENTED ✓ row 1: React | Vite | Tailwind | Kotlin | Compose | FastAPI
IMPLEMENTED ✓ row 2: Pydantic | MongoDB | Motor | JWT | OAuth | Crypto

PLANNED ○ row (grayed): Redis | Prometheus | Grafana | k6

Deployed: Render | Vercel | MongoDB Atlas logos

Make logos recognizable at 40x40px with names below
```

---

## SLIDE 4 - FEASIBILITY AND VIABILITY

```
Create a "FEASIBILITY AND VIABILITY" slide with three equal columns:

COLUMN 1 - "ANALYSIS OF THE FEASIBILITY":
Four stacked colored boxes with icons:
- TECHNICAL (green): "487 tests passing, P0: 100%"
- MARKET/IMPACT (blue): "Direct fit for AICTE bureaus"
- OPERATIONAL (purple): "Modular monolith retained"
- FINANCIAL (yellow): "Open-source stack"

COLUMN 2 - "CHALLENGES AND RISKS":
Four stacked boxes with warning colors:
- Technical (red accent): "Concurrent CSV commits could over-admit"
- Reliability (orange): "Redis outage leaves jobs half-processed"
- Data & Testing (yellow): "MongoDB txns tested with mongomock only"
- Security (red): "Bulk-verify APIs invite enumeration"

COLUMN 3 - "STRATEGIES FOR OVERCOMING":
Four stacked boxes:
- METHODS (teal): "Benchmark sync vs queue+worker: p50/p95/p99"
- PRINCIPLES (blue): "State what is unproven. RBAC on every endpoint"
- STRATEGIES (purple): "Idempotency key + SHA-256 file hash"
- ALGORITHMS (green): "All 10 anomaly rules must still fire"

BOTTOM: Effort estimates table:
| Phase | Features | Effort |
| P1 completion | Reviewer assignment, bureau views | ~3 dev-days |
| P2 async | Redis/ARQ integration | ~4 dev-days |
| P2 bulk verify | Batch endpoint, rate limiting | ~2 dev-days |
| P2 observability | Prometheus/Grafana | ~2 dev-days |

Use blue header row, alternating white/gray rows
```

---

## SLIDE 5 - IMPACT AND BENEFITS

```
Create an "IMPACT AND BENEFITS" slide with two sections:

LEFT HALF - SWOT ANALYSIS:
Create a 2x2 quadrant matrix:

TOP-LEFT (Green): S - STRENGTHS
• 10-layer engine (40 unit tests)
• Impact detector (6 CIA rules)
• 3 seal generations (backward compat)
• 487 tests passing
• Privacy-first HMAC

TOP-RIGHT (Red/Pink): W - WEAKNESSES
• MongoDB txns tested with mongomock only
• Async not yet built (sync-only batches)
• Android QR format diverges from web

BOTTOM-LEFT (Blue): O - OPPORTUNITIES
• APAAR rollout across AICTE institutions
• Multi-bureau coordination
• Incremental detection

BOTTOM-RIGHT (Orange): T - THREATS
• Redis outage or duplicate commits
• API enumeration attacks
• DPDP compliance needs legal review

Add axis labels: INTERNAL/EXTERNAL (vertical), HELPFUL/HARMFUL (horizontal)

Above SWOT, add four impact categories in row:
🎓 REGULATORY | 🏛️ INSTITUTIONAL | 👤 STUDENT | ⚙️ OPERATIONAL

Include SDG badges: SDG 4, 9, 16

RIGHT HALF - BENEFITS TABLE:
Create table with columns: Feature | Social | Economic

Row 1: 🎓 TRUSTED RECORDS | "Sealed credentials verifiers trust" | "Less manual reconciliation"
Row 2: 🛡️ IMPACT-AWARE CORRECTIONS | "Never silently corrupt linked records" | "Fewer downstream fixes"
Row 3: ⚖️ EARLY REGULATORY DETECTION | "Fairer quota use" | "Avoids late rework"
Row 4: 📈 SCALABLE OPS ○ | "Responsive uploads" | "Only Redis/ARQ added"
Row 5: 🔒 PRIVACY-FIRST | "Opaque, revocable tokens" | "Bulk verify replaces one-by-one"

Alternating row colors, icons in first column
```

---

## SLIDE 6 - RESEARCH AND REFERENCES

```
Create a "RESEARCH AND REFERENCES" slide with academic citation cards:

7 numbered reference cards on a clean white background with subtle decorative pattern:

1. "A Proof for the Queuing Formula: L = λW" – J. D. C. Little
   Relevance: Basis of our capacity model | Operations Research (1961)

2. "RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)" – S. Josefsson & I. Liusvaara
   Relevance: Ed25519 for credential seals | IETF (2017)

3. "RFC 2104: HMAC: Keyed-Hashing for Message Authentication"
   Relevance: HMAC-SHA256 seals | IETF (1997)

4. "Digital Personal Data Protection Act, 2023" – Government of India
   Relevance: Consent management framework | Gazette of India

5. "OWASP API Security Top 10" – OWASP Foundation
   Relevance: API hardening guidance | OWASP (2023)

6. "National Education Policy 2020; APAAR" – Ministry of Education
   Relevance: Problem context, learner ID framework | MoE, GoI

7. "ISO/IEC 18004:2015 – QR Code Specification"
   Relevance: Android QR encoder compliance | ISO (2015)

Format each reference as a card with:
- Blue numbered circle
- Bold title
- Author in regular text
- Italicized relevance note
- Small publication info aligned right
- Alternating white/light gray backgrounds
```

---

## SUPPLEMENTARY: 10-Layer Engine Infographic

```
Create an infographic titled "10-LAYER ANOMALY ENGINE - DEFENSE IN DEPTH"

INPUT at top: "Student Record (APAAR, Programme, Institution, Dates, Category, Seat)"

10 horizontal bars stacked vertically, color-coded by severity:

L1 | INVALID_APAAR_FORMAT | Luhn checksum fails | 🔴 CRITICAL (Red)
L2 | DUPLICATE_CROSS_COLLEGE | Same APAAR at 2 institutions | 🔴 CRITICAL (Red)
L3 | DUPLICATE_SAME_INSTITUTION | Same APAAR twice | 🔴 CRITICAL (Red)
L4 | DUPLICATE_ROLL_NUMBER | Same Roll#, different APAAR | 🟠 HIGH (Orange)
L5 | EXCESS_APPROVED_INTAKE | Admitted > Sanctioned | 🔴 CRITICAL (Red)
L6 | SUPERNUMERARY_BREACH | Quota % exceeded | 🟡 WARNING (Yellow)
L7 | INCONSISTENT_CATEGORY | Category changed | ⚪ VARIES (Gray)
L8 | IMPOSSIBLE_DATE | DOB after admission | 🟠 HIGH (Orange)
L9 | MISSING_REQUIRED_FIELD | Empty mandatory | 🟠 HIGH (Orange)
L10 | UNSANCTIONED_PROGRAM | Not AICTE-approved | 🔴 CRITICAL (Red)

OUTPUT at bottom: "{anomaly_type, severity, evidence, suggested_action}"

LEGEND: 🔴 Block (6) | 🟠 Review (3) | 🟡 Warning (1)
```

---

## SUPPLEMENTARY: Impact Detector Flowchart

```
Create a flowchart titled "IMPACT DETECTOR: What Else Breaks?"

TOP INPUT: "PROPOSED CORRECTION: Change APAAR from AAA to BBB"

MIDDLE: "6 CIA IMPACT RULES" - six boxes:
CIA-A: APAAR ID changes → Validity, duplicates
CIA-B: Institution changes → Sanctions, seats
CIA-C: Date changes → Both years recalc
CIA-D: Quota changes → Ceiling checks
CIA-E: Seat moves → Intake vs sanctioned
CIA-F: Sealed fields → Credential invalidation

BOTTOM: Two side-by-side output boxes:

"REVIEW CHECKLIST":
□ Verify new APAAR source
□ Confirm seat recount
□ Re-notify verifiers
□ Supervisor approval required

"IMPACT SUMMARY":
• 3 linked credentials affected
• 2 findings become stale
• Cross-institution duplicate created
DECISION: ✗ BLOCKED

FOOTER BANNER: "⚠ NEVER SILENTLY MODIFIES LINKED RECORDS"
```

---

## SUPPLEMENTARY: Privacy Verification Comparison

```
Create a split comparison infographic: "PRIVACY-PRESERVING VERIFICATION"

LEFT (crossed out, red): "TRADITIONAL APPROACH"
❌ Verifier sends: "Check APAAR-1234-5678-9012"
❌ System returns: Name, DOB, Programme, College
❌ PII EXPOSURE
❌ ENUMERATION ATTACK POSSIBLE
(Big red X overlay)

RIGHT (green checkmarks): "VERIDUCATE APPROACH"
1. Student presents QR → opaque_token (not APAAR)
2. Verifier scans → sends opaque token only
3. System: HMAC match lookup (never raw ID)
4. System: Ed25519 seal verification
5. Returns: ✓ VALID or ✗ INVALID (no PII)

FOOTER badges:
✓ GDPR/DPDP COMPLIANT | ✓ NO ENUMERATION | ✓ REVOCABLE
```

---

# QUICK TIPS FOR CANVA AI

1. **If prompt is too long**: Break into multiple generations and combine manually
2. **For tech logos**: Upload actual logos as assets first, then ask AI to place them
3. **For flowcharts**: Use Canva's "Whiteboard" or "Flowchart" templates as starting point
4. **Colors to use**:
   - Primary blue: #1E3A5F
   - Accent orange: #FF6B35
   - Success green: #22C55E
   - Warning orange: #F59E0B
   - Error red: #EF4444
5. **Always specify**: "16:9 aspect ratio", "professional", "clean", "minimal"

---

*Ready-to-use prompts for Veriducate/EduSynC SIH 2026*
