# Visual Mockups for Veriducate PPT
## Ready-to-implement diagram templates

These are ASCII mockups showing EXACTLY what each visual should look like. Use these as templates when creating in Figma, PowerPoint, or draw.io.

---

## SLIDE 2: IDEA/SOLUTION - Enhanced Layout

### Current Problem
Your slide 2 is text-heavy. Here's the improved layout:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RAMblers                    IDEA TITLE                    [SIH 2026 Logo]                      │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  IDEA / SOLUTION:                                          ┌─────────────────────────────────┐  │
│  Veriducate – 10-layer compliance engine with              │      PROBLEM RESOLUTION         │  │
│  impact detection and tamper-evident credentials.          │                                 │  │
│                                                            │  ┌─────────┐                    │  │
│  Problem: Invalid IDs, cross-institution duplicates,       │  │VALIDATE │ 10-Layer Engine ✓  │  │
│  intake breaches caught late by manual reconciliation.     │  │   ⬇    │                    │  │
│                                                            │  │PREVIEW  │ Impact Rules ✓     │  │
│  ┌──────────────────────────────────────────────────────┐  │  │ IMPACT │                    │  │
│  │                  CORE FEATURES (Built ✓)              │  │  │   ⬇    │                    │  │
│  ├──────────────────────────────────────────────────────┤  │  │REVIEW & │ Case Mgmt ○       │  │
│  │                                                       │  │  │RESOLVE │                    │  │
│  │  ┌─────────────────┐  ┌─────────────────┐            │  │  │   ⬇    │                    │  │
│  │  │  ANOMALY        │  │  IMPACT         │            │  │  │ SEAL & │ Credentials ✓     │  │
│  │  │  ENGINE ✓       │  │  DETECTOR ✓     │            │  │  │ VERIFY │                    │  │
│  │  │  ─────────────  │  │  ─────────────  │            │  │  └─────────┘                    │  │
│  │  │  10 layers      │  │  6 CIA rules    │            │  └─────────────────────────────────┘  │
│  │  │  Stable codes   │  │  "What breaks?" │            │                                       │
│  │  │  40 unit tests  │  │  Review lists   │            │  ┌─────────────────────────────────┐  │
│  │  └─────────────────┘  └─────────────────┘            │  │    UNIQUE VALUE PROPOSITION     │  │
│  │                                                       │  │                                 │  │
│  │  ┌─────────────────┐  ┌─────────────────┐            │  │  ✦ Proof first: 487 tests       │  │
│  │  │  SEALED         │  │  PRIVACY &      │            │  │    across 3 platforms           │  │
│  │  │  CREDENTIALS ✓  │  │  ACCESS ✓       │            │  │                                 │  │
│  │  │  ─────────────  │  │  ─────────────  │            │  │  ✦ Impact-aware: previews       │  │
│  │  │  HMAC/Ed25519   │  │  HMAC tokens    │            │  │    "what else breaks?"          │  │
│  │  │  Hash-chained   │  │  RBAC isolation │            │  │                                 │  │
│  │  │  audit trail    │  │  DPDP consent   │            │  │  ✦ Privacy-first: HMAC match    │  │
│  │  └─────────────────┘  └─────────────────┘            │  │    tokens, never raw APAAR      │  │
│  │                                                       │  │                                 │  │
│  │  ┌─────────────────┐                                 │  │  ✦ Tamper-evident: hash-chained │  │
│  │  │  CSV PREVIEW    │                                 │  │    audit, sealed credentials    │  │
│  │  │  → COMMIT ✓     │                                 │  │                                 │  │
│  │  │  ─────────────  │                                 │  └─────────────────────────────────┘  │
│  │  │  Row validation │                                 │                                       │
│  │  │  Seat projection│                                 │                                       │
│  │  └─────────────────┘                                 │                                       │
│  └──────────────────────────────────────────────────────┘                                       │
│                                                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────────────────────────┐   │
│  │                              SCALE FEATURES (Planned ○)                                   │   │
│  ├──────────────────────────────────────────────────────────────────────────────────────────┤   │
│  │  ○ ASYNC JOBS          ○ CASE MGMT           ○ BULK VERIFY        ○ OBSERVABILITY        │   │
│  │    Redis/ARQ queue       Reviewer assign       Rate-limited API     Prometheus/Grafana   │   │
│  └──────────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                                  │
│  ✓ = implemented and tested   ○ = planned for competition phase                                 │
│                                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 2: 10-LAYER ENGINE VISUAL (Add as sub-element or separate mini-diagram)

This should be a prominent visual showing your killer feature:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                     10-LAYER ANOMALY ENGINE - DEFENSE IN DEPTH                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│   INPUT: Student Record (APAAR, Programme, Institution, Dates, Category, Seat)         │
│          ↓                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐  │
│   │ LAYER 1 │ INVALID_APAAR_FORMAT      │ Luhn checksum fails          │ 🔴 CRITICAL │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 2 │ DUPLICATE_CROSS_COLLEGE   │ Same APAAR at 2 institutions │ 🔴 CRITICAL │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 3 │ DUPLICATE_SAME_INSTITUTION│ Same APAAR twice at 1 inst   │ 🔴 CRITICAL │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 4 │ DUPLICATE_ROLL_NUMBER     │ Same Roll#, different APAAR  │ 🟠 HIGH    │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 5 │ EXCESS_APPROVED_INTAKE    │ Admitted > Sanctioned seats  │ 🔴 CRITICAL │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 6 │ SUPERNUMERARY_BREACH      │ Quota % exceeded             │ 🟡 WARNING │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 7 │ INCONSISTENT_CATEGORY     │ Category changed year-to-year│ ⚪ VARIES  │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 8 │ IMPOSSIBLE_DATE           │ DOB after admission date     │ 🟠 HIGH    │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 9 │ MISSING_REQUIRED_FIELD    │ Empty mandatory field        │ 🟠 HIGH    │  │
│   ├─────────┼────────────────────────────┼──────────────────────────────┼────────────┤  │
│   │ LAYER 10│ UNSANCTIONED_PROGRAM      │ Programme not AICTE-approved │ 🔴 CRITICAL │  │
│   └─────────┴────────────────────────────┴──────────────────────────────┴────────────┘  │
│          ↓                                                                              │
│   OUTPUT: List of {anomaly_type, severity, evidence, suggested_action}                 │
│                                                                                         │
│   🔴 = Block admission  🟠 = Requires review  🟡 = Warning only                        │
│                                                                                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 2: IMPACT DETECTOR VISUAL (Your unique differentiator)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                    IMPACT DETECTOR - "WHAT ELSE BREAKS?"                                │
│                    ─────────────────────────────────────────                            │
│                    Before ANY correction is applied to a record                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│     ┌───────────────────────────────────┐                                              │
│     │      PROPOSED CORRECTION           │                                              │
│     │  "Change APAAR from AAA to BBB"   │                                              │
│     └─────────────────┬─────────────────┘                                              │
│                       │                                                                 │
│                       ▼                                                                 │
│     ┌─────────────────────────────────────────────────────────────────────────────┐    │
│     │                         6 CIA IMPACT RULES                                   │    │
│     ├─────────┬───────────────────────────────────┬───────────────────────────────┤    │
│     │ CIA-A   │ APAAR ID changes                  │ Validity, duplicates, stale   │    │
│     │         │                                   │ findings recalculated         │    │
│     ├─────────┼───────────────────────────────────┼───────────────────────────────┤    │
│     │ CIA-B   │ Institution/programme changes     │ Sanctions, seat counts        │    │
│     │         │                                   │ re-verified                   │    │
│     ├─────────┼───────────────────────────────────┼───────────────────────────────┤    │
│     │ CIA-C   │ Academic year/date changes        │ Both years recalculated       │    │
│     ├─────────┼───────────────────────────────────┼───────────────────────────────┤    │
│     │ CIA-D   │ Quota/nationality changes         │ Ceiling checks, consistency   │    │
│     ├─────────┼───────────────────────────────────┼───────────────────────────────┤    │
│     │ CIA-E   │ Seat count moves                  │ Intake vs sanctioned          │    │
│     ├─────────┼───────────────────────────────────┼───────────────────────────────┤    │
│     │ CIA-F   │ Sealed field changes              │ Credential invalidation       │    │
│     └─────────┴───────────────────────────────────┴───────────────────────────────┘    │
│                       │                                                                 │
│                       ▼                                                                 │
│     ┌─────────────────────────────────────────────────────────────────────────────┐    │
│     │                       GENERATED OUTPUTS                                      │    │
│     ├─────────────────────────────────┬───────────────────────────────────────────┤    │
│     │  ☑ REVIEW CHECKLIST             │  ⚠ IMPACT SUMMARY                         │    │
│     │  □ Verify new APAAR source      │  • 3 linked credentials affected          │    │
│     │  □ Confirm seat recount         │  • 2 findings will become stale           │    │
│     │  □ Re-notify verifiers          │  • Cross-institution duplicate created    │    │
│     │  □ Supervisor approval required │  ─────────────────────────────────────    │    │
│     │                                 │  DECISION: ✗ BLOCKED - manual review      │    │
│     └─────────────────────────────────┴───────────────────────────────────────────┘    │
│                                                                                         │
│     ⚠ NEVER SILENTLY MODIFIES LINKED RECORDS - ALL IMPACTS SURFACED FOR REVIEW        │
│                                                                                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 3: PROCESS FLOW ARCHITECTURE (THE BIG ONE)

This is the most important visual. It should take up ~60% of Slide 3.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              VERIDUCATE PROCESS FLOW ARCHITECTURE                                     │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                       │
│    ┌──────────────┐        ┌──────────────┐        ┌──────────────┐                                  │
│    │    AICTE     │        │ INSTITUTION  │        │   VERIFIER   │                                  │
│    │    ADMIN     │        │    ADMIN     │        │   (HR/Univ)  │                                  │
│    └──────┬───────┘        └──────┬───────┘        └──────┬───────┘                                  │
│           │                       │                       │                                           │
│           └───────────────────────┼───────────────────────┘                                           │
│                                   │                                                                   │
│                                   ▼                                                                   │
│    ┌─────────────────────────────────────────────────────────────────────────────────────────────┐   │
│    │                      🔐 AUTHENTICATION & AUTHORIZATION                                       │   │
│    │   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────────────────┐                            │   │
│    │   │  JWT    │  │ Google  │  │  RBAC   │  │ Institution Scope   │                            │   │
│    │   │ [logo]  │  │ OAuth   │  │ 4 roles │  │ Data isolation      │                            │   │
│    │   └─────────┘  └─────────┘  └─────────┘  └─────────────────────┘                            │   │
│    └──────────────────────────────────────────────────────────────┬──────────────────────────────┘   │
│                                                                   │                                   │
│        ─────────────────────── DATA INGESTION ───────────────────│────────────────────────           │
│                                                                   │                                   │
│                                   ▼                               │                                   │
│    ┌─────────────────────────────────────────────────────────┐   │                                   │
│    │              📁 CSV UPLOAD + PREVIEW ✓                   │   │                                   │
│    │   ┌────────────────────────────────────────────────────┐│   │                                   │
│    │   │ student_records.csv                                ││   │                                   │
│    │   │ ┌─────────┬─────────┬──────────┬────────────────┐ ││   │                                   │
│    │   │ │ APAAR   │ Name    │ College  │ Programme      │ ││   │                                   │
│    │   │ ├─────────┼─────────┼──────────┼────────────────┤ ││   │                                   │
│    │   │ │ ✓ Valid │ Row 1   │ ...      │ ...            │ ││   │                                   │
│    │   │ │ ✗ ERROR │ Row 2   │ Luhn fail│ ...            │ ││   │                                   │
│    │   │ │ ⚠ WARN  │ Row 3   │ ...      │ Duplicate?     │ ││   │                                   │
│    │   │ └─────────┴─────────┴──────────┴────────────────┘ ││   │                                   │
│    │   │ Row-level validation • Seat-impact projection     ││   │                                   │
│    │   └────────────────────────────────────────────────────┘│   │                                   │
│    └──────────────────────────────────────────────────────┬──┘   │                                   │
│                                                           │      │                                   │
│        ─────────────────────── VALIDATION ────────────────│──────│────────────────────────           │
│                                                           │      │                                   │
│                                   ▼                       │      │                                   │
│    ┌─────────────────────────────────────────────────────────────────────────────────────────────┐   │
│    │                       🔍 10-LAYER ANOMALY ENGINE ✓                                           │   │
│    │                                                                                              │   │
│    │   L1: Format → L2: Cross-Inst Dup → L3: Same-Inst Dup → L4: Roll Dup → L5: Intake Cap      │   │
│    │        ↓              ↓                  ↓                 ↓              ↓                  │   │
│    │   L6: Supernumerary → L7: Category → L8: Dates → L9: Required Fields → L10: Sanctions       │   │
│    │                                                                                              │   │
│    │   🔴 CRITICAL  🟠 HIGH  🟡 WARNING  →  {anomaly_type, severity, evidence}                   │   │
│    │                                                                                              │   │
│    │   [Python logo]  app/services/anomaly_engine.py   •   40 unit tests                         │   │
│    └──────────────────────────────────────────────────────────────────────────┬──────────────────┘   │
│                                                                               │                      │
│                                   ▼                                           │                      │
│    ┌─────────────────────────────────────────────────────────┐               │                      │
│    │              ⚠ IMPACT DETECTOR (6 CIA Rules) ✓          │               │                      │
│    │                                                          │               │                      │
│    │   "What else breaks if we apply this correction?"       │               │                      │
│    │                                                          │               │                      │
│    │   CIA-A  CIA-B  CIA-C  CIA-D  CIA-E  CIA-F              │               │                      │
│    │     ↓      ↓      ↓      ↓      ↓      ↓                │               │                      │
│    │   ┌──────────────────────────────────────┐              │               │                      │
│    │   │ ☑ Review Checklist + Impact Summary │              │               │                      │
│    │   │ → Never silently modify linked data │              │               │                      │
│    │   └──────────────────────────────────────┘              │               │                      │
│    │                                                          │               │                      │
│    │   [Python logo]  app/services/impact_engine.py          │               │                      │
│    └──────────────────────────────────────────────────────┬──┘               │                      │
│                                                           │                  │                      │
│        ─────────────────────── SEALING ───────────────────│──────────────────│───────────           │
│                                                           │                  │                      │
│                                   ▼                       │                  │                      │
│    ┌─────────────────────────────────────────────────────────────────────────┐                      │
│    │                    🔏 CREDENTIAL SEALING ✓                               │                      │
│    │                                                                          │                      │
│    │   Clean Record                                                           │                      │
│    │       │                                                                  │                      │
│    │       ▼                                                                  │                      │
│    │   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                │                      │
│    │   │   Legacy     │   │  HMAC-SHA256 │   │   Ed25519    │                │                      │
│    │   │  (compat)    │   │    Seal      │   │  Signature   │                │                      │
│    │   └──────────────┘   └──────────────┘   └──────────────┘                │                      │
│    │            ↘               ↓               ↙                            │                      │
│    │                    ┌──────────────┐                                      │                      │
│    │                    │   QR CODE    │                                      │                      │
│    │                    │   [qrcode]   │                                      │                      │
│    │                    └──────────────┘                                      │                      │
│    │                                                                          │                      │
│    │   [cryptography logo]  [qrcode logo]  [ReportLab logo]                  │                      │
│    └──────────────────────────────────────────────────────────┬──────────────┘                      │
│                                                               │                                      │
│        ─────────────────────── VERIFICATION ──────────────────│──────────────────────────────        │
│                                                               │                                      │
│                                                               ▼                                      │
│    ┌─────────────────────────────────────────────────────────────────────────────────────────────┐   │
│    │                         ✅ VERIFICATION FLOW ✓                                               │   │
│    │                                                                                              │   │
│    │   ┌─────────┐        ┌─────────────────┐        ┌─────────────────┐        ┌─────────────┐  │   │
│    │   │ Student │  ───▶  │   Scan QR       │  ───▶  │  HMAC Match     │  ───▶  │  ✓ VALID    │  │   │
│    │   │ presents│        │   Code          │        │  Lookup         │        │  ✗ INVALID  │  │   │
│    │   │   QR    │        │                 │        │  (never raw ID) │        │  (no PII)   │  │   │
│    │   └─────────┘        └─────────────────┘        └─────────────────┘        └─────────────┘  │   │
│    │                                                                                              │   │
│    │   Privacy: Opaque tokens • Expiring • Revocable • DPDP consent-based                        │   │
│    └─────────────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                                       │
│        ─────────────────────── AUDIT ─────────────────────────────────────────────────────────        │
│                                                                                                       │
│    ┌─────────────────────────────────────────────────────────────────────────────────────────────┐   │
│    │                         📜 HASH-CHAINED AUDIT TRAIL ✓                                        │   │
│    │                                                                                              │   │
│    │   Entry₁ ─H()─▶ Entry₂ ─H()─▶ Entry₃ ─H()─▶ Entry₄ ─H()─▶ ...                              │   │
│    │                                                                                              │   │
│    │   • Tamper-evident: modification breaks the chain                                           │   │
│    │   • Every action logged: uploads, validations, corrections, verifications                   │   │
│    │                                                                                              │   │
│    │   [MongoDB logo]  app/audit/                                                                │   │
│    └─────────────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                                       │
│    ─────────────────────────────────────────────────────────────────────────────────────────────     │
│    │ ✓ = IMPLEMENTED (P0 complete)        │ ○ = PLANNED (Redis/ARQ, Prometheus/Grafana)        │     │
│    ─────────────────────────────────────────────────────────────────────────────────────────────     │
│                                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 3: TECH STACK LOGO GRID

Replace text list with this visual grid:

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                                  TECH STACK                                         │
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                            IMPLEMENTED ✓                                           │
│  ┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐                    │
│  │ [React] │ [Vite]  │[Tailwind]│[Kotlin] │[Compose]│[FastAPI]│                    │
│  │ React 19│  Vite   │Tailwind 4│ Kotlin  │Jetpack  │ FastAPI │                    │
│  └─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘                    │
│  ┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐                    │
│  │[Pydantic]│[MongoDB]│ [Motor] │  [JWT]  │ [OAuth] │ [🔐]   │                    │
│  │Pydantic │ MongoDB │  Motor  │   JWT   │ Google  │ crypto  │                    │
│  │   v2    │         │ (async) │         │  OAuth  │ graphy  │                    │
│  └─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘                    │
│                                                                                     │
│                              PLANNED ○                                              │
│  ┌─────────┬─────────┬─────────┬─────────┐                                        │
│  │ [Redis] │[Promethe│[Grafana]│  [k6]   │ (grayed/outlined icons)                │
│  │  Redis  │   us]   │ Grafana │   k6    │                                        │
│  │  + ARQ  │Prometheus│        │ Locust  │                                        │
│  └─────────┴─────────┴─────────┴─────────┘                                        │
│                                                                                     │
│  Deployed: [Render logo] [Vercel logo] [MongoDB Atlas logo]                        │
│                                                                                     │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 4: FEASIBILITY - Three Column Layout

Match the winning PPT's structure:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               FEASIBILITY AND VIABILITY                                               │
├──────────────────────┬──────────────────────────┬────────────────────────────────────────────────────┤
│                      │                          │                                                     │
│  ANALYSIS OF THE     │  CHALLENGES AND RISKS    │           STRATEGIES FOR OVERCOMING                │
│  FEASIBILITY         │                          │                                                     │
│                      │                          │                                                     │
│  ┌────────────────┐  │  ┌──────────────────┐   │  ┌─────────────────────────────────────────────┐   │
│  │   TECHNICAL    │  │  │    TECHNICAL     │   │  │                  METHODS                     │   │
│  │  ┌──────────┐  │  │  │                  │   │  │  ┌─────────────────────────────────────┐    │   │
│  │  │ [icon]   │  │  │  │ Concurrent CSV   │   │  │  │ Benchmark sync vs queue+worker:    │    │   │
│  │  │          │  │  │  │ commits could    │   │  │  │ p50/p95/p99, error rate (k6)       │    │   │
│  │  │ 487 tests│  │  │  │ over-admit       │   │  │  └─────────────────────────────────────┘    │   │
│  │  │ passing  │  │  │  │                  │   │  └─────────────────────────────────────────────┘   │
│  │  │ P0: 100% │  │  │  └──────────────────┘   │                                                     │
│  │  └──────────┘  │  │                          │  ┌─────────────────────────────────────────────┐   │
│  └────────────────┘  │  ┌──────────────────┐   │  │                 PRINCIPLES                   │   │
│                      │  │    RELIABILITY   │   │  │  ┌─────────────────────────────────────┐    │   │
│  ┌────────────────┐  │  │                  │   │  │  │ State what is unproven. Never fake  │    │   │
│  │ MARKET/IMPACT  │  │  │ Redis outage     │   │  │  │ "queued". RBAC on every endpoint.   │    │   │
│  │  ┌──────────┐  │  │  │ leaves jobs      │   │  │  └─────────────────────────────────────┘    │   │
│  │  │ [icon]   │  │  │  │ half-processed   │   │  └─────────────────────────────────────────────┘   │
│  │  │          │  │  │  │                  │   │                                                     │
│  │  │ Direct   │  │  │  └──────────────────┘   │  ┌─────────────────────────────────────────────┐   │
│  │  │ fit for  │  │  │                          │  │                 STRATEGIES                  │   │
│  │  │ AICTE    │  │  │  ┌──────────────────┐   │  │  ┌─────────────────────────────────────┐    │   │
│  │  └──────────┘  │  │  │  DATA & TESTING  │   │  │  │ Idempotency key + SHA-256 file     │    │   │
│  └────────────────┘  │  │                  │   │  │  │ hash. Atomic capacity reservation.  │    │   │
│                      │  │ MongoDB txns     │   │  │  │ Durable job states + retries.       │    │   │
│  ┌────────────────┐  │  │ tested with      │   │  │  └─────────────────────────────────────┘    │   │
│  │   OPERATIONAL  │  │  │ mongomock only   │   │  └─────────────────────────────────────────────┘   │
│  │  ┌──────────┐  │  │  │                  │   │                                                     │
│  │  │ [icon]   │  │  │  └──────────────────┘   │  ┌─────────────────────────────────────────────┐   │
│  │  │          │  │  │                          │  │                ALGORITHMS                   │   │
│  │  │ Modular  │  │  │  ┌──────────────────┐   │  │  ┌─────────────────────────────────────┐    │   │
│  │  │ monolith │  │  │  │    SECURITY      │   │  │  │ Regression: all 10 anomaly rules   │    │   │
│  │  │          │  │  │  │                  │   │  │  │ must still fire. Replica-set       │    │   │
│  │  └──────────┘  │  │  │ Bulk-verify      │   │  │  │ staging tests. Rate limits.        │    │   │
│  └────────────────┘  │  │ APIs invite      │   │  │  └─────────────────────────────────────┘    │   │
│                      │  │ enumeration      │   │  └─────────────────────────────────────────────┘   │
│  ┌────────────────┐  │  │                  │   │                                                     │
│  │   FINANCIAL    │  │  └──────────────────┘   │                                                     │
│  │  ┌──────────┐  │  │                          │                                                     │
│  │  │ [icon]   │  │  │                          │                                                     │
│  │  │          │  │  │                          │                                                     │
│  │  │ Open-src │  │  │                          │                                                     │
│  │  │ stack    │  │  │                          │                                                     │
│  │  └──────────┘  │  │                          │                                                     │
│  └────────────────┘  │                          │                                                     │
│                      │                          │                                                     │
├──────────────────────┴──────────────────────────┴────────────────────────────────────────────────────┤
│                                                                                                       │
│  │ Phase            │ Features                                         │ Effort      │              │
│  │──────────────────│──────────────────────────────────────────────────│─────────────│              │
│  │ P1 completion    │ Reviewer assignment, bureau views, export polish │ ~3 dev-days │              │
│  │ P2 async         │ Redis/ARQ integration, job status API            │ ~4 dev-days │              │
│  │ P2 bulk verify   │ Batch endpoint, rate limiting                    │ ~2 dev-days │              │
│  │ P2 observability │ Prometheus/Grafana setup                         │ ~2 dev-days │              │
│                                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 5: SWOT - Visual Circular/Quadrant Layout

Replace text bullets with this:

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                              SWOT ANALYSIS                                          │
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│              HELPFUL                              HARMFUL                           │
│         (to achieving goals)                 (to achieving goals)                   │
│                                                                                     │
│    ┌────────────────────────────┐   ┌────────────────────────────┐                 │
│    │                            │   │                            │                 │
│    │     S  STRENGTHS           │   │     W  WEAKNESSES          │                 │
│    │                            │   │                            │                 │
│ I  │  • 10-layer engine         │   │  • MongoDB txns tested     │   I             │
│ N  │    (40 unit tests)         │   │    with mongomock only     │   N             │
│ T  │                            │   │                            │   T             │
│ E  │  • Impact detector         │   │  • Async not yet built     │   E             │
│ R  │    (6 CIA rules)           │   │    (sync-only batches)     │   R             │
│ N  │                            │   │                            │   N             │
│ A  │  • 3 seal generations      │   │  • Android QR format       │   A             │
│ L  │    (backward compat)       │   │    diverges from web       │   L             │
│    │                            │   │                            │                 │
│    │  • 487 tests passing       │   │                            │                 │
│    │                            │   │                            │                 │
│    │  • Privacy-first HMAC      │   │                            │                 │
│    │                            │   │                            │                 │
│    └────────────────────────────┘   └────────────────────────────┘                 │
│                                                                                     │
│    ┌────────────────────────────┐   ┌────────────────────────────┐                 │
│    │                            │   │                            │                 │
│    │     O  OPPORTUNITIES       │   │     T  THREATS             │                 │
│    │                            │   │                            │                 │
│ E  │  • APAAR rollout across    │   │  • Redis outage or         │   E             │
│ X  │    AICTE institutions      │   │    duplicate commits       │   X             │
│ T  │                            │   │                            │   T             │
│ E  │  • Multi-bureau            │   │  • API enumeration         │   E             │
│ R  │    coordination            │   │    attacks                 │   R             │
│ N  │                            │   │                            │   N             │
│ A  │  • Incremental             │   │  • DPDP compliance needs   │   A             │
│ L  │    detection               │   │    separate legal review   │   L             │
│    │                            │   │                            │                 │
│    └────────────────────────────┘   └────────────────────────────┘                 │
│                                                                                     │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SLIDE 5: BENEFITS TABLE - Add Icons

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                           BENEFITS OF THE SOLUTION                                  │
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                   SOCIAL              ECONOMIC                      │
│  ┌─────────────────────────┬──────────────────────┬───────────────────────────┐   │
│  │                         │                      │                           │   │
│  │  🎓 TRUSTED STUDENT     │ Sealed credentials   │ Less manual reconcile     │   │
│  │     RECORDS             │ students carry &     │ effort for institutions   │   │
│  │                         │ verifiers trust      │ and bureaus               │   │
│  │                         │                      │                           │   │
│  ├─────────────────────────┼──────────────────────┼───────────────────────────┤   │
│  │                         │                      │                           │   │
│  │  🛡️ IMPACT-AWARE        │ Corrections never    │ Fewer downstream fixes    │   │
│  │     CORRECTIONS         │ silently corrupt     │ after a bad correction    │   │
│  │                         │ linked records       │                           │   │
│  │                         │                      │                           │   │
│  ├─────────────────────────┼──────────────────────┼───────────────────────────┤   │
│  │                         │                      │                           │   │
│  │  ⚖️ EARLY REGULATORY    │ Fairer use of        │ Avoids late rework of     │   │
│  │     DETECTION           │ intake and quota     │ corrupted registry        │   │
│  │                         │ seats                │ records                   │   │
│  │                         │                      │                           │   │
│  ├─────────────────────────┼──────────────────────┼───────────────────────────┤   │
│  │                         │                      │                           │   │
│  │  📈 SCALABLE OPS ○      │ Responsive uploads   │ Open-source stack;        │   │
│  │     (Planned)           │ for large inst.      │ only Redis/ARQ added      │   │
│  │                         │                      │                           │   │
│  ├─────────────────────────┼──────────────────────┼───────────────────────────┤   │
│  │                         │                      │                           │   │
│  │  🔒 PRIVACY-FIRST       │ Consent-based,       │ Bulk verify replaces      │   │
│  │     VERIFICATION        │ opaque, revocable    │ one-by-one lookups        │   │
│  │                         │ tokens               │                           │   │
│  │                         │                      │                           │   │
│  └─────────────────────────┴──────────────────────┴───────────────────────────┘   │
│                                                                                     │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Reference: Icon Sources

For technology logos, download from:
- **React**: reactjs.org/brand
- **Vite**: vitejs.dev (GitHub assets)
- **Tailwind**: tailwindcss.com/brand
- **Kotlin**: kotlinlang.org/docs/resources.html
- **FastAPI**: fastapi.tiangolo.com (GitHub)
- **MongoDB**: mongodb.com/brand-resources
- **Redis**: redis.io (GitHub)
- **Prometheus**: prometheus.io
- **Grafana**: grafana.com/about/press

For feature icons:
- **Flaticon**: flaticon.com (free with attribution)
- **Material Design Icons**: fonts.google.com/icons
- **Heroicons**: heroicons.com

---

## Summary: What to Build

1. **Slide 2**: Keep current content but add the 10-layer visual and impact detector visual
2. **Slide 3**: Replace current layout with the FULL process flow architecture diagram + logo grid + screenshots
3. **Slide 4**: Reorganize into 3-column visual layout
4. **Slide 5**: Convert SWOT to quadrant visual + add icons to benefits table

**Time estimate**: 4-6 hours in PowerPoint/Figma to create all visuals

**Priority**: Slide 3 process flow > Slide 2 feature visuals > Slide 4/5 restructure

---

*Mockups created 2026-10-27*
