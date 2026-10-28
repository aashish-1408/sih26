# CANVA AI MEGA PROMPT FOR VERIDUCATE SIH 2026 PPT

## How to Use This Prompt

Copy each slide's prompt into Canva AI separately. The prompts are designed for Canva's "Magic Design" or "Design with AI" features. You may need to break longer prompts into parts.

---

# MASTER DESIGN INSTRUCTIONS (Apply to ALL slides)

**Before generating any slide, apply these universal requirements:**

```
DESIGN SYSTEM FOR ALL SLIDES:

Theme: Smart India Hackathon 2026 official style
Color Palette:
- Primary: Deep Blue (#1E3A5F) - headers, borders
- Secondary: Orange (#FF6B35) - highlights, implemented features
- Accent: Teal (#2EC4B6) - planned features, tech elements
- Success Green (#22C55E) - checkmarks, "built" indicators
- Warning Orange (#F59E0B) - planned items, warnings
- Critical Red (#EF4444) - critical findings, errors
- Background: White (#FFFFFF) with subtle gray (#F8FAFC) sections

Typography:
- Headers: Bold sans-serif (Montserrat or Inter), 28-32pt
- Subheaders: Semi-bold, 20-24pt
- Body: Regular, 14-16pt
- Feature labels: Medium, 12-14pt

Visual Elements:
- Rounded corners (8-12px) on all boxes
- Subtle drop shadows (2px blur, 10% opacity)
- Technology logos should be 40x40px minimum
- Use flat/modern icons from the same family
- Arrows should be clean with pointed heads
- Use ✓ symbol for implemented, ○ for planned

Layout Principles:
- 16:9 aspect ratio
- Safe margins: 40px on all sides
- Grid-based alignment
- Visual hierarchy: large → medium → small
- Data flows top-to-bottom or left-to-right

Header Bar (every slide):
- Left: "RAMblers" in a rounded pill badge
- Center: Slide title in bold
- Right: "SMART INDIA HACKATHON 2026" logo
- Blue accent bar at bottom of slide

Footer (every slide):
- "@SIH Idea submission" left-aligned
- Slide number right-aligned
```

---

# SLIDE 1: TITLE PAGE

## Canva AI Prompt

```
Create a professional hackathon title slide for Smart India Hackathon 2026.

LAYOUT:
- Full slide background with subtle geometric pattern or gradient (deep blue to lighter blue)
- Center-aligned content

CONTENT (top to bottom):
1. Large title: "TITLE PAGE" in bold white
2. SIH 2026 logo (brain icon with Indian flag colors) in top right corner

3. Information block with bullet points:
   • Problem Statement ID – SIH26263
   • Problem Statement Title – Development of an APAAR ID-Based Student Data Management and Verification Platform for AICTE-Approved Institutions
   • Idea Title – Veriducate: APAAR ID Compliance at Scale (built on the EduSynC platform)
   • Theme – Smart Education
   • PS Category – Software
   • Team ID – [Leave blank placeholder]
   • Team Name – RAMblers

4. Bottom right corner: Three UN SDG goal icons in colored squares:
   - SDG 4 (Quality Education) - Red square with book icon
   - SDG 9 (Industry, Innovation & Infrastructure) - Orange square
   - SDG 16 (Peace, Justice & Strong Institutions) - Blue square

STYLE:
- Professional government/education aesthetic
- Clean typography with clear hierarchy
- White text on dark background for main content
- Bullet points should have subtle orange/teal accents
```

---

# SLIDE 2: IDEA / SOLUTION

## Canva AI Prompt - Part 1 (Main Layout)

```
Create a dense, information-rich slide titled "IDEA TITLE" for a hackathon presentation.

OVERALL LAYOUT (60/40 split):
- Left side (60%): Features section
- Right side (40%): Problem Resolution flow + Unique Value Proposition

HEADER:
- "RAMblers" pill badge (purple/teal) top-left
- "IDEA TITLE" centered, bold
- SIH 2026 logo top-right

LEFT SIDE - IDEA/SOLUTION BLOCK:
1. Brief intro text box:
   "IDEA / SOLUTION:
   Veriducate – we have BUILT a working 10-layer compliance engine with impact detection and tamper-evident credentials for APAAR-linked records, and are ADDING async scale, accountable review and bulk verification for production.
   
   Problem: invalid IDs, cross-institution duplicates, intake-cap breaches and quota misuse are caught late, by manual reconciliation."

2. CORE FEATURES section (Built ✓):
   Create a 2x3 grid of feature cards with rounded borders:
   
   Card 1 - ANOMALY ENGINE ✓
   - Green checkmark icon
   - "10 layers, Stable codes, 40 unit tests"
   
   Card 2 - IMPACT DETECTOR ✓
   - Shield icon with warning symbol
   - "6 CIA rules, 'What breaks?', Review lists"
   
   Card 3 - SEALED CREDENTIALS ✓
   - Lock/certificate icon
   - "HMAC/Ed25519, Hash-chained audit trail"
   
   Card 4 - PRIVACY & ACCESS ✓
   - Privacy shield icon
   - "HMAC tokens, RBAC isolation, DPDP consent"
   
   Card 5 - CSV PREVIEW → COMMIT ✓
   - Spreadsheet/upload icon
   - "Row validation, Seat projection"

3. SCALE FEATURES section (Planned ○):
   Horizontal bar with 4 planned features:
   ○ ASYNC JOBS (Redis/ARQ queue)
   ○ CASE MGMT (Reviewer assign)
   ○ BULK VERIFY (Rate-limited API)
   ○ OBSERVABILITY (Prometheus/Grafana)
   
   Use outline style (not filled) for planned items

4. Legend at bottom:
   "✓ = implemented and tested   ○ = planned for competition phase"
```

## Canva AI Prompt - Part 2 (Right Side)

```
RIGHT SIDE - PROBLEM RESOLUTION FLOW:
Create a vertical flowchart with 4 connected steps:

Step 1: "VALIDATE" box
- Green accent
- Subtitle: "10-Layer Engine ✓"
- Down arrow

Step 2: "PREVIEW IMPACT" box
- Orange accent  
- Subtitle: "CIA Rules ✓"
- Down arrow

Step 3: "REVIEW & RESOLVE" box
- Teal outline (not filled - planned)
- Subtitle: "Case Mgmt ○"
- Down arrow

Step 4: "SEAL & VERIFY" box
- Green accent
- Subtitle: "Credentials ✓"

Below the flowchart, add UNIQUE VALUE PROPOSITION box:
White box with blue border containing:
✦ Proof first: 487 tests across 3 platforms
✦ Impact-aware: previews "what else breaks?"
✦ Privacy-first: HMAC match tokens, never raw APAAR
✦ Tamper-evident: hash-chained audit, sealed credentials

Use star/diamond bullets (✦) for each point
```

---

# SLIDE 3: TECHNICAL APPROACH (THE CRITICAL ONE)

## Canva AI Prompt - Part 1 (Process Flow Architecture - LEFT 65%)

```
Create the most important slide: "TECHNICAL APPROACH" with a comprehensive system architecture diagram.

This slide should be split: 65% left for architecture, 35% right for screenshots + tech stack.

LEFT SIDE - PROCESS FLOW ARCHITECTURE:

Title: "PROCESS FLOW ARCHITECTURE" in bold with blue underline

Create a vertical flowchart with the following sections:

SECTION 1 - USER ROLES (top):
Three user icons in a row:
- "AICTE ADMIN" (government building icon)
- "INSTITUTION ADMIN" (university icon)  
- "VERIFIER (HR/Univ)" (person with checkmark icon)
All three connect with arrows down to...

SECTION 2 - AUTHENTICATION:
Wide horizontal box with lock icon:
"🔐 AUTHENTICATION & AUTHORIZATION"
Inside show 4 small tech badges:
- JWT [logo]
- Google OAuth [logo]
- RBAC (4 roles)
- Institution Scope

Arrow down to...

SECTION 3 - DATA INGESTION:
Box labeled "📁 CSV UPLOAD + PREVIEW ✓"
Show a mini spreadsheet visual inside:
- Header row: APAAR | Name | College | Programme
- Row with ✓ Valid
- Row with ✗ ERROR (red)
- Row with ⚠ WARN (orange)
Caption: "Row-level validation • Seat-impact projection"

Arrow down to...

SECTION 4 - ANOMALY ENGINE (make this prominent!):
Large box with magnifying glass icon:
"🔍 10-LAYER ANOMALY ENGINE ✓"

Show the 10 layers in a horizontal flow:
L1→L2→L3→L4→L5 (top row)
L6→L7→L8→L9→L10 (bottom row)

Below that: severity indicators:
🔴 CRITICAL  🟠 HIGH  🟡 WARNING

Small text: "app/services/anomaly_engine.py • 40 unit tests"

Arrow down to...

SECTION 5 - IMPACT DETECTOR:
Box with warning icon:
"⚠ IMPACT DETECTOR (6 CIA Rules) ✓"
Show: "CIA-A  CIA-B  CIA-C  CIA-D  CIA-E  CIA-F"
Caption: "What else breaks? → Review checklist → Never silently modify"

Arrow down to...

SECTION 6 - CREDENTIAL SEALING:
Box with seal icon:
"🔏 CREDENTIAL SEALING ✓"
Show three seal types converging:
- Legacy (compat)
- HMAC-SHA256 Seal
- Ed25519 Signature
All three arrows point down to: QR CODE icon

Arrow down to...

SECTION 7 - VERIFICATION FLOW:
Horizontal flow:
Student (QR) → Scan QR → HMAC Match Lookup → ✓ VALID / ✗ INVALID
Caption: "Privacy: Opaque tokens • Expiring • Revocable • DPDP consent-based"

SECTION 8 - AUDIT TRAIL (bottom):
Long horizontal box:
"📜 HASH-CHAINED AUDIT TRAIL ✓"
Show: "Entry₁ →H()→ Entry₂ →H()→ Entry₃ →H()→ ..."
Caption: "Tamper-evident: modification breaks the chain"

LEGEND at very bottom:
"✓ = IMPLEMENTED (P0 complete)  |  ○ = PLANNED (Redis/ARQ, Prometheus/Grafana)"
```

## Canva AI Prompt - Part 2 (Working Model + Tech Stack - RIGHT 35%)

```
RIGHT SIDE OF SLIDE 3:

SECTION A - WORKING MODEL / DESIGN:
Title: "WORKING MODEL / DESIGN:"

Placeholder boxes for 2 screenshots:
- Screenshot 1: "Dashboard with KPI cards, anomaly severity chips"
  [Mockup of a dashboard with cards showing: 12 Critical, 8 High, 3 Warnings]
- Screenshot 2: "Impact checklist preview"
  [Mockup showing a checklist with checkboxes]

Add text: "[Demo video link]" with play button icon

SECTION B - IMPLEMENTATION STATUS:
Small box with progress indicator:
"Implementation Status
• P0 Mandatory MVP: 100% (12/12) ✓
• P1 Differentiators: 75% (6/8)
• P2 Extensions: 0% (post-selection)
• Tests: 487 (258 backend + 44 web + 185 Android)"

Use a circular progress indicator or bar chart visual

SECTION C - TECH STACK:
Title: "TECH STACK:"

Two rows of technology logos:

IMPLEMENTED ✓ (full color logos):
Row 1: React | Vite | Tailwind | Kotlin | Compose | FastAPI
Row 2: Pydantic | MongoDB | Motor | JWT | OAuth | 🔐

PLANNED ○ (grayed/outlined logos):
Row: Redis | Prometheus | Grafana | k6

Deployed section:
Small icons for: Render | Vercel | MongoDB Atlas

Make sure each logo is recognizable (40x40px minimum) with the technology name below it.
```

---

# SLIDE 4: FEASIBILITY AND VIABILITY

## Canva AI Prompt

```
Create a "FEASIBILITY AND VIABILITY" slide with a three-column layout.

HEADER: Same style as other slides

THREE-COLUMN LAYOUT:

COLUMN 1 - ANALYSIS OF THE FEASIBILITY:
Four stacked boxes with icons:

Box 1: "TECHNICAL" (gear icon)
- Light green background
- Content: "487 tests passing, P0: 100%"

Box 2: "MARKET/IMPACT" (target icon)
- Light blue background
- Content: "Direct fit for AICTE bureaus"

Box 3: "OPERATIONAL" (settings icon)
- Light purple background
- Content: "Modular monolith retained"

Box 4: "FINANCIAL" (dollar icon)
- Light yellow background
- Content: "Open-source stack"

COLUMN 2 - CHALLENGES AND RISKS:
Four stacked boxes with warning styling:

Box 1: "TECHNICAL" (red accent)
- "Concurrent CSV commits could over-admit"

Box 2: "RELIABILITY" (orange accent)
- "Redis outage leaves jobs half-processed"

Box 3: "DATA & TESTING" (yellow accent)
- "MongoDB txns tested with mongomock only"

Box 4: "SECURITY" (red accent)
- "Bulk-verify APIs invite enumeration"

COLUMN 3 - STRATEGIES FOR OVERCOMING:
Four colored cards with solution categories:

Card 1: "METHODS" (teal background)
- "Benchmark sync vs queue+worker: p50/p95/p99, error rate (k6)"

Card 2: "PRINCIPLES" (blue background)
- "State what is unproven. Never fake 'queued'. RBAC on every endpoint."

Card 3: "STRATEGIES" (purple background)
- "Idempotency key + SHA-256 file hash. Atomic capacity reservation. Durable job states + retries."

Card 4: "ALGORITHMS" (green background)
- "Regression: all 10 anomaly rules must still fire. Replica-set staging tests. Rate limits."

BOTTOM SECTION - EFFORT ESTIMATES TABLE:
A clean table with 4 rows:

| Phase            | Features                                         | Effort      |
|------------------|--------------------------------------------------|-------------|
| P1 completion    | Reviewer assignment, bureau views, export polish | ~3 dev-days |
| P2 async         | Redis/ARQ integration, job status API            | ~4 dev-days |
| P2 bulk verify   | Batch endpoint, rate limiting                    | ~2 dev-days |
| P2 observability | Prometheus/Grafana setup                         | ~2 dev-days |

Use alternating row colors (white/light gray) and a blue header row.
```

---

# SLIDE 5: IMPACT AND BENEFITS

## Canva AI Prompt - Part 1 (SWOT)

```
Create an "IMPACT AND BENEFITS" slide with two main sections.

LEFT HALF - POTENTIAL IMPACT & SWOT:

Title: "POTENTIAL IMPACT:" with a "Positive" label and sun/growth icon

Below that, create a 2x2 SWOT MATRIX:

Layout: Four quadrants with colored backgrounds

TOP-LEFT: STRENGTHS (Green background, "S" large letter)
Internal / Helpful
• 10-layer engine (40 unit tests)
• Impact detector (6 CIA rules)
• 3 seal generations (backward compat)
• 487 tests passing
• Privacy-first HMAC

TOP-RIGHT: WEAKNESSES (Red/Pink background, "W" large letter)
Internal / Harmful
• MongoDB txns tested with mongomock only
• Async not yet built (sync-only batches)
• Android QR format diverges from web

BOTTOM-LEFT: OPPORTUNITIES (Blue background, "O" large letter)
External / Helpful
• APAAR rollout across AICTE institutions
• Multi-bureau coordination
• Incremental detection

BOTTOM-RIGHT: THREATS (Orange background, "T" large letter)
External / Harmful
• Redis outage or duplicate commits
• API enumeration attacks
• DPDP compliance needs separate legal review

Add labels on the sides:
- Left edge: "INTERNAL" vertically
- Right edge: "EXTERNAL" vertically
- Top edge: "HELPFUL" and "HARMFUL"

Above the SWOT, add four impact categories in a horizontal row with icons:
- 🎓 REGULATORY (icon)
- 🏛️ INSTITUTIONAL (icon)
- 👤 STUDENT (icon)
- ⚙️ OPERATIONAL (icon)

Include SDG badges:
- SDG 4 – Quality Education
- SDG 9 – Industry, Innovation & Infrastructure
- SDG 16 – Peace, Justice & Strong Institutions
```

## Canva AI Prompt - Part 2 (Benefits Table)

```
RIGHT HALF - BENEFITS OF THE SOLUTION:

Create a table with Feature | Social | Economic columns:

Table Header:
BENEFITS OF THE SOLUTION
              |     SOCIAL         |     ECONOMIC

Row 1: 🎓 TRUSTED STUDENT RECORDS
Social: "Sealed credentials students carry & verifiers trust"
Economic: "Less manual reconciliation effort for institutions and bureaus"

Row 2: 🛡️ IMPACT-AWARE CORRECTIONS
Social: "Corrections never silently corrupt linked records"
Economic: "Fewer downstream fixes after a bad correction"

Row 3: ⚖️ EARLY REGULATORY DETECTION
Social: "Fairer use of intake and quota seats"
Economic: "Avoids late rework of corrupted registry records"

Row 4: 📈 SCALABLE OPERATIONS ○ (mark as planned)
Social: "Responsive uploads even for large institutions"
Economic: "Open-source stack; only Redis/ARQ added"

Row 5: 🔒 PRIVACY-FIRST VERIFICATION
Social: "Consent-based, opaque, expiring and revocable tokens"
Economic: "Bulk verification (planned) replaces one-by-one lookups"

Design notes:
- Use alternating row colors
- Add icons in the first column for each feature
- Use smaller text in the Social/Economic columns
- Mark planned features with ○ symbol
- Use a clean table border style
```

---

# SLIDE 6: RESEARCH AND REFERENCES

## Canva AI Prompt

```
Create a "RESEARCH AND REFERENCES" slide with a clean academic citation style.

HEADER: Same style as other slides

LAYOUT: Single column with 7 numbered references

Add a subtle decorative element in the background (faded technology/education pattern or abstract geometric shapes).

REFERENCES LIST:

1. A Proof for the Queuing Formula: L = λW – J. D. C. Little
   Relevance: Relates arrival rate, time in system and requests in flight; basis of our capacity model.
   Published in: Operations Research (1961)

2. RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA) – S. Josefsson & I. Liusvaara
   Relevance: Specifies Ed25519 signatures; used for our credential seals.
   Published in: IETF (2017)

3. RFC 2104: HMAC: Keyed-Hashing for Message Authentication – H. Krawczyk, M. Bellare, R. Canetti
   Relevance: Defines keyed hashing for message integrity; used for HMAC-SHA256 seals.
   Published in: IETF (1997)

4. Digital Personal Data Protection Act, 2023 – Government of India
   Relevance: Consent, purpose limitation and data-fiduciary duties; frames our consent management.
   Published in: Gazette of India

5. OWASP API Security Top 10 – OWASP Foundation
   Relevance: Broken authorisation and unrestricted resource use; guides bulk-verify and job API hardening.
   Published in: OWASP (2023)

6. National Education Policy 2020; APAAR / Academic Bank of Credits – Ministry of Education, GoI
   Relevance: Lifelong learner ID and credit portability framework; problem context.
   Published in: MoE, Government of India

7. ISO/IEC 18004:2015 – QR Code Specification – ISO/IEC
   Relevance: Our Android client implements a dependency-free QR encoder/decoder compliant with this standard.
   Published in: ISO (2015)

FORMATTING:
- Each reference should be in a card/box format
- Reference number in a colored circle (blue)
- Title in bold
- Authors in regular weight
- "Relevance:" in italic with the explanation
- "Published in:" in small text, right-aligned
- Alternate background colors for readability (white and very light gray)
```

---

# SUPPLEMENTARY VISUALS (Generate Separately)

## 10-Layer Anomaly Engine Detail Diagram

```
Create a detailed infographic showing the "10-LAYER ANOMALY ENGINE"

Title: "10-LAYER DEFENSE AGAINST ADMISSION FRAUD"

INPUT at top: "Student Record (APAAR, Programme, Institution, Dates, Category, Seat)"

Create 10 horizontal bars stacked vertically, each showing:

LAYER 1 | INVALID_APAAR_FORMAT | Luhn checksum fails | 🔴 CRITICAL
Background: Red

LAYER 2 | DUPLICATE_CROSS_COLLEGE | Same APAAR at 2 institutions | 🔴 CRITICAL
Background: Red

LAYER 3 | DUPLICATE_SAME_INSTITUTION | Same APAAR twice at 1 inst | 🔴 CRITICAL
Background: Red

LAYER 4 | DUPLICATE_ROLL_NUMBER | Same Roll#, different APAAR | 🟠 HIGH
Background: Orange

LAYER 5 | EXCESS_APPROVED_INTAKE | Admitted > Sanctioned seats | 🔴 CRITICAL
Background: Red

LAYER 6 | SUPERNUMERARY_BREACH | Quota % exceeded | 🟡 WARNING
Background: Yellow

LAYER 7 | INCONSISTENT_CATEGORY | Category changed year-to-year | ⚪ VARIES
Background: Gray

LAYER 8 | IMPOSSIBLE_DATE | DOB after admission date | 🟠 HIGH
Background: Orange

LAYER 9 | MISSING_REQUIRED_FIELD | Empty mandatory field | 🟠 HIGH
Background: Orange

LAYER 10 | UNSANCTIONED_PROGRAM | Programme not AICTE-approved | 🔴 CRITICAL
Background: Red

OUTPUT at bottom: "List of {anomaly_type, severity, evidence, suggested_action}"

LEGEND:
🔴 = Block admission (6 rules)
🟠 = Requires review (3 rules)
🟡 = Warning only (1 rule)
```

## Impact Detector Flow Diagram

```
Create a flowchart infographic for "IMPACT DETECTOR - What Else Breaks?"

Title: "IMPACT DETECTOR: BEFORE ANY CORRECTION"

TOP: Input box
"PROPOSED CORRECTION: Change APAAR from AAA to BBB"

Arrow down to...

MIDDLE: "6 CIA IMPACT RULES" - Create 6 connected boxes:

CIA-A | APAAR ID changes → Validity, duplicates, stale findings recalculated
CIA-B | Institution/programme changes → Sanctions, seat counts re-verified
CIA-C | Academic year/date changes → Both years recalculated
CIA-D | Quota/nationality changes → Ceiling checks, consistency
CIA-E | Seat count moves → Intake vs sanctioned
CIA-F | Sealed field changes → Credential invalidation

Arrow down to...

BOTTOM: Two output boxes side by side:

Box 1: "☑ REVIEW CHECKLIST"
□ Verify new APAAR source
□ Confirm seat recount
□ Re-notify verifiers
□ Supervisor approval required

Box 2: "⚠ IMPACT SUMMARY"
• 3 linked credentials affected
• 2 findings will become stale
• Cross-institution duplicate created
───────────────────
DECISION: ✗ BLOCKED - manual review

FOOTER banner:
"⚠ NEVER SILENTLY MODIFIES LINKED RECORDS - ALL IMPACTS SURFACED FOR REVIEW"
```

## Privacy-First Verification Comparison

```
Create a comparison infographic: "PRIVACY-PRESERVING CREDENTIAL VERIFICATION"

Split into two sections:

LEFT SIDE - "TRADITIONAL APPROACH" (crossed out, red border):
❌ Verifier sends: "Check APAAR-1234-5678-9012"
❌ System returns: Name, DOB, Programme, College...
❌ PII EXPOSURE
❌ ENUMERATION ATTACK POSSIBLE

Add a big red X over this section

RIGHT SIDE - "VERIDUCATE APPROACH" (green border, checkmarks):
5-step flow with icons:

1. Student presents QR code [QR icon]
   "Contains: opaque_token (not APAAR)"

2. Verifier scans [phone scanning icon]
   "Sends opaque token only"

3. System performs HMAC match lookup [lock icon]
   "HMAC(APAAR, secret) == stored_match_token?"

4. System verifies seal [certificate icon]
   "Ed25519.verify(credential, signature, public_key)"

5. Returns result [checkmark/x icon]
   "✓ VALID or ✗ INVALID (No PII returned)"

FOOTER:
Three badges:
✓ GDPR/DPDP COMPLIANT
✓ NO ENUMERATION
✓ REVOCABLE
```

---

# DESIGN ASSETS TO PREPARE

Before using Canva AI, prepare these assets:

## Technology Logos to Upload
1. React 19
2. Vite
3. Tailwind CSS
4. Kotlin
5. Jetpack Compose
6. FastAPI
7. Pydantic
8. MongoDB
9. Motor
10. JWT
11. Google OAuth
12. Python cryptography
13. QR Code icon
14. Redis
15. Prometheus
16. Grafana
17. k6
18. Render
19. Vercel
20. MongoDB Atlas

## Icons Needed
- Lock/security icon
- Shield with checkmark
- Warning triangle
- Document/CSV icon
- QR code icon
- User roles (admin, verifier, student)
- Gear/settings icon
- Database icon
- Certificate/seal icon
- Audit trail/chain icon

## Screenshots to Capture
1. Dashboard with KPI cards
2. Anomaly detection results
3. Impact detector checklist
4. Generated QR credential
5. Verification result screen

---

# QUICK REFERENCE: KEY MESSAGES

When generating any slide, emphasize these key differentiators:

1. **PROOF OVER PLANS**: 487 tests across 3 platforms - this is BUILT, not proposed
2. **10-LAYER ENGINE**: More comprehensive than any competitor (most check 2-3 things)
3. **IMPACT DETECTOR**: UNIQUE - "What else breaks?" before ANY correction
4. **PRIVACY-FIRST**: HMAC match tokens, never raw APAAR IDs as lookup keys
5. **TAMPER-EVIDENT**: Hash-chained audit trail, Ed25519 sealed credentials
6. **THREE SEAL GENERATIONS**: Backward compatibility shows enterprise thinking
7. **BUILT VS PLANNED**: Always clearly distinguish with ✓ and ○

---

# FINAL CHECKLIST

After generating all slides, verify:

□ Every slide has the header bar (RAMblers | Title | SIH 2026)
□ Every slide has the footer (@SIH Idea submission | page number)
□ Built features marked with ✓ (green)
□ Planned features marked with ○ (teal/outline)
□ Process flow architecture is PROMINENT on Slide 3
□ Technology logos are visible and recognizable
□ 10-layer engine is visualized, not just mentioned
□ Impact detector is visualized, not just mentioned
□ SWOT is a visual quadrant, not bullet points
□ All text is readable (14pt minimum)
□ Color coding is consistent across all slides
□ SDG goals are visible on Slides 1 and 5

---

*Prompt created 2026-10-27 for Veriducate/EduSynC SIH 2026 submission*
