# Architecture Review — nainovate-AI.github.io

Full-site audit for external review (ChatGPT / peer review).
Snapshot date: 2026-07-23
Branch: `nia-integration`

---

## 0. Executive Summary

**What this is:** Static-export Next.js 15 marketing site + interactive demo hubs for an AI Decision Workspace product. Deployed to GitHub Pages via `gh-pages`.

**Overall rating: 6.5 / 10**

| Dimension | Score | Note |
|---|---|---|
| Routing / file organization | 7.5 | Route groups clean, but no dynamic segments where they'd help |
| Data layer (JSON) | 5.5 | Vertical-scoped folders exist but duplicated + orphaned files |
| Component reuse | 5.0 | Demo panels coupled to one vertical (`BuildingPermits*` naming); no shared `Dashboard/Ask/Workflow` generic |
| Dead-code hygiene | 4.5 | 2 orphaned demo components + 1 orphaned page client + 3 orphaned JSON files |
| Helper / utils layer | 3.5 | No `utils/`, `hooks/`, or `types/` dirs. Single `lib/reportDownload.ts` |
| Styling / theming | 8.0 | Well-scoped theme tokens (`--gd-*`), Tailwind + CSS-var hybrid works |
| Type safety | 7.0 | Strict mode on. Some inline `Msg` types could move to `types/` |
| Testing | 6.5 | 3 tests present (smoke, data schema, lint hygiene) — no component tests |
| Documentation | 4.0 | No architecture doc before this file. Code speaks, but naming is ad-hoc |
| Consistency | 5.5 | Two hub components for public-sector, two `dashboards.json` files, hardcoded mock data alongside JSON pack |

**Bottom line:** solid Next.js scaffold, working demo, but the AI Decision Workspace layer is prototype-grade — dead files, hardcoded mocks, no generic panel abstraction. Adding a second vertical (sales, CS, etc.) without refactor will 4× the surface area.

---

## 1. Stack & Config

**Framework:** Next.js 15.5.2 (App Router), React 19.1.0
**Language:** TypeScript 5, strict mode
**Styling:** Tailwind 3.4.0 + CSS variables
**Animation:** framer-motion 12.23.12
**Icons:** lucide-react 0.544.0
**Deploy:** Static export (`output: 'export'`) → GitHub Pages via `gh-pages`
**Path alias:** `@/*` → root
**Analytics:** Google Analytics (via `gtag`) + custom `PageTracker` component
**Backend integration:** Google Apps Script for report download form (`lib/reportDownload.ts`)

**No ESM/CommonJS confusion, no monorepo, no server actions** — pure static export site.

---

## 2. Routes (32 total)

### `app/(main)/` — marketing site
Layout: `app/(main)/layout.tsx` (Header + Footer + PageTracker)

| Route | Client component |
|---|---|
| `/` | inline (Hero, ProofStrip, LensPicker, Problem, Industries, Features, Category, Stats, CTA) |
| `/platform` | `ProductsPageClient` |
| `/platform/core` | `CorePageClient` |
| `/platform/nia` | `NiaPageClient` |
| `/platform/flow` | inline static |
| `/platform/ai-engineering-tools` | `AIEngineeringToolsClient` |
| `/platform/development-tools` | `DevelopmentToolsClient` |
| `/platform/search-data-ai` | `SearchDataAIClient` |
| `/platform/integrations` | `IntegrationsClient` |
| `/platform/security-governance` | `SecurityGovernanceClient` |
| `/solutions` | `SolutionsPageClient` |
| `/solutions/customer-success` | `CustomerSuccessSolutionClient` |
| `/solutions/customer-support` | `CustomerSupportSolutionClient` |
| `/solutions/sales` | `SalesSolutionClient` |
| `/solutions/delivery` | `DeliverySolutionClient` |
| `/solutions/engagement` | `EngagementPageClient` |
| `/solutions/intelligence` | `IntelligencePageClient` |
| `/solutions/operations` | `OperationsPageClient` |
| `/decision-intelligence` | `DecisionIntelligenceClient` |
| `/decision-intelligence/ai-agent` | `AIAgentClient` |
| `/decision-intelligence/signal-chain` | `SignalChainClient` |
| `/decision-intelligence/trace-audit` | `TraceAuditClient` |
| `/decision-intelligence/coordination` | `CoordinationClient` |
| `/about`, `/contact`, `/reports`, `/ai-center-of-excellence`, `/ai-implementation-index`, `/ai-readiness-report-2025` | inline / `ContactPageClient` |

### `app/(demo)/` — interactive product demos
Layout: `app/(demo)/layout.tsx` (23 lines; strips header/footer)

| Route | Client component |
|---|---|
| `/demo` | `DemoChooserClient` (lens picker) |
| `/demo/public-sector` | `PublicSectorHubClient` |
| `/demo/operations` | `PublicSectorHubClient` (reused — questionable) |
| `/demo/decision-nia` | `DecisionNiaDemoHubClient` |

**Red flag:** `/demo/operations` reuses `PublicSectorHubClient`. If Operations is a distinct vertical, it should have its own hub or a generic one — reusing public-sector hub couples routes to unrelated code.

---

## 3. Component Inventory

### `components/layout/` (2)
- `Header.tsx` — 49 KB, all nav routing + logo
- `Footer.tsx` — 7 KB

### `components/pages/` (28) — one client per route
All `*Client.tsx`. Naming inconsistent: `*PageClient` vs `*SolutionClient` vs `*Client`.

| Active | Orphan |
|---|---|
| 27 wired to routes | `PublicSectorDemoHubClient.tsx` (24 KB — dead, superseded by `PublicSectorHubClient`) |

### `components/demo/` (5)
| File | Status | Wired to |
|---|---|---|
| `BuildingPermitsAsk.tsx` | ACTIVE | `PublicSectorHubClient` |
| `BuildingPermitsDashboard.tsx` | ACTIVE | `PublicSectorHubClient` |
| `WorkflowPlaceholder.tsx` | ACTIVE | `PublicSectorHubClient` |
| `PermitsChatbot.tsx` | **ORPHAN** | none |
| `AnalyticsDashboard.tsx` | **ORPHAN** | none |

### `components/sections/` (9)
All used: `Hero`, `ProofStrip`, `LensPicker`, `Problem`, `Features`, `Industries`, `Category`, `Stats`, `CTA`.

### `components/ui/` (8)
All used: `Button`, `AnimatedSection`, `BackgroundAnimation`, `CustomCursor`, `LiveChatBot`, `NeuralNetwork`, `HeroSlideshow`.

### `components/mockups/` (17)
All used — SVG-based marketing mockups (AISecurity, APIManagement, etc.).

### `components/seo/`, `components/tracking/`
- `JsonLd.tsx` — Schema.org emitter
- `PageTracker.tsx` — GA instrumentation

**Component total: ~100 .tsx files**

---

## 4. Data Layer — JSON Wiring (39 files)

### Root `data/` — marketing content (17 files)

| File | Lines | Consumer | Status |
|---|---|---|---|
| `solutions.json` | 29 | `SolutionsPageClient` | ✅ |
| `platform.json` | 52 | `ProductsPageClient` | ✅ |
| `engagement.json` | 60 | `EngagementPageClient` | ✅ |
| `intelligence.json` | 60 | `IntelligencePageClient` | ✅ |
| `operations.json` | 60 | `OperationsPageClient` | ✅ |
| `sales.json` | 49 | `SalesSolutionClient` | ✅ |
| `customer-support.json` | 77 | `CustomerSupportSolutionClient` | ✅ |
| `customer-success.json` | 11 | `CustomerSuccessSolutionClient` | ⚠ tiny (looks like stub) |
| `delivery.json` | 22 | `DeliverySolutionClient` | ✅ |
| `nia.json` | 10 | `NiaPageClient` | ⚠ tiny |
| `core.json` | 89 | `CorePageClient` | ✅ |
| `ai-engineering-tools.json` | 141 | `AIEngineeringToolsClient` | ✅ |
| `search-data-ai.json` | 148 | `SearchDataAIClient` | ✅ |
| `security-governance.json` | 161 | `SecurityGovernanceClient` | ✅ |
| `development-tools.json` | 166 | `DevelopmentToolsClient` | ✅ |
| `integrations.json` | 24 | `IntegrationsClient` | ✅ |
| `public-sector.json` | 192 | `PublicSectorDemoHubClient` (ORPHAN client!) | ⚠ effectively dead |

### `data/building-permits/` (1)
| File | Lines | Consumer |
|---|---|---|
| `dashboards.json` | 203 | `BuildingPermitsDashboard` ✅ |

### `data/ai-decision-workspace/` — vertical packs

Per-vertical shape: `{ask, command-center, dashboards, trace}.json`

| Vertical | Files | Consumer |
|---|---|---|
| `customer-success/` | 4 (214 lines) | `DecisionNiaDemoHubClient` ✅ |
| `customer-support/` | 4 (200 lines) | `DecisionNiaDemoHubClient` ✅ |
| `sales/` | 4 (203 lines) | `DecisionNiaDemoHubClient` ✅ |
| `delivery/` | 4 (201 lines) | `DecisionNiaDemoHubClient` ✅ |
| `public-sector/building-permits/ask.json` | 32 | **PermitsChatbot (ORPHAN)** ❌ |
| `public-sector/building-permits/dashboards.json` | 78 | **AnalyticsDashboard (ORPHAN)** ❌ |
| `public-sector/building-permits/workflow.json` | 5 | `WorkflowPlaceholder` ✅ |

**Note:** public-sector vertical is missing `command-center.json` and `trace.json` — inconsistent shape vs. the other 4 verticals.

---

## 5. Duplicate / Dead Code Registry

### 5.1 Duplicate hub components
| File | Size | Status | Notes |
|---|---|---|---|
| `components/pages/PublicSectorHubClient.tsx` | 8 KB | ACTIVE | Used by `/demo/public-sector` + `/demo/operations` |
| `components/pages/PublicSectorDemoHubClient.tsx` | 24 KB | **DEAD** | Superseded; also the only consumer of `data/public-sector.json` |

### 5.2 Duplicate `dashboards.json`
| File | Lines | Purpose | Consumer |
|---|---|---|---|
| `data/building-permits/dashboards.json` | 203 | Static KPI/distribution/at-risk | `BuildingPermitsDashboard` ✅ |
| `data/ai-decision-workspace/public-sector/building-permits/dashboards.json` | 78 | AI-suggestion matchers | `AnalyticsDashboard` (orphan) ❌ |

These aren't semantically duplicates — different shapes — but share a filename in overlapping vertical space. **Confusing.**

### 5.3 Duplicate ask logic
- `data/ai-decision-workspace/public-sector/building-permits/ask.json` — proper matcher-based Q&A pack (used by orphan `PermitsChatbot`)
- `BuildingPermitsAsk.tsx` — **hardcodes** the same logic as inline `classify()` + `respond()` + `FOLLOWUPS` constants

**Same data lives in two places.** JSON pack orphaned; component reinvents it.

### 5.4 Dead components
1. `components/demo/AnalyticsDashboard.tsx` (20 KB)
2. `components/demo/PermitsChatbot.tsx` (6 KB)
3. `components/pages/PublicSectorDemoHubClient.tsx` (24 KB)

### 5.5 Dead / effectively-dead JSON
1. `data/public-sector.json` (192 lines) — only orphan client imports it
2. `data/ai-decision-workspace/public-sector/building-permits/ask.json` (32 lines) — only orphan imports
3. `data/ai-decision-workspace/public-sector/building-permits/dashboards.json` (78 lines) — only orphan imports

**Deleting these has no user-facing impact.**

---

## 6. Helpers / Utilities

### What exists
- `lib/reportDownload.ts` (152 lines):
  - `submitReportDownload()` — POST to Google Apps Script
  - `trackDownloadEvent()` — GA event
  - `isValidEmail()` — regex check
  - `validateFormData()` — required-field check
  - `getUTMParam()` — URL param reader

### What's missing
- **No `utils/`, `hooks/`, `types/` directories.**
- Every component defines its own inline `type Msg = ...`, its own inline mock data, its own inline classifier logic.
- No shared `useWorkspace()`, `useSpaceData(vertical)`, or `useChatState()` hook.
- No shared `Card`, `Chip`, `KPITile`, `Panel` primitive despite ~20 places rendering the same pattern.

### Reuse opportunities (not currently done)
| Pattern | Duplicated in | Should be |
|---|---|---|
| Rounded dark card w/ border + `--gd-border` bg | Every solution page, every demo panel | `<SurfaceCard>` primitive |
| Icon + title + subtitle + chevron button | `BuildingPermitsAsk` cards, `DemoChooserClient`, `LensPicker` | `<SuggestionCard>` |
| Chip pill (rounded-full border, hover) | `BuildingPermitsAsk` followups, `DecisionNiaDemoHubClient` | `<Chip>` primitive |
| Sparkline KPI tile | `BuildingPermitsDashboard`, DecisionNia dashboards | `<KpiTile>` |
| Chat message bubble (user/assistant) | `BuildingPermitsAsk`, `PermitsChatbot`, `LiveChatBot` | `<ChatMessage>` |
| Matcher-based response system (keywords → response) | `PermitsChatbot`, `BuildingPermitsAsk`, `DecisionNiaDemoHubClient` | `lib/chat/respond.ts` |

---

## 7. Theming

### Root theme (`app/globals.css`)
- Base tokens: `--black`, `--white`, `--gray*`, `--accent`
- 3 background animations, custom cursor, dashboard countUp/fillProgress keyframes

### Scoped workspace theme (`.theme-genx-decision`)
- Surface: `--gd-bg`, `--gd-fg`, `--gd-card`, `--gd-muted`
- Text hierarchy: `--gd-fg-strong` → `--gd-fg-faint` (5 levels)
- Border: `--gd-border`, `--gd-border-strong`, `--gd-border-active`
- Brand: `--gd-primary: #6366f1` (indigo)
- Semantic: `--gd-danger`, `--gd-success`, `--gd-warning`, `--gd-info`
- Neutral chart: `--gd-neutral: #94a3b8`
- Scrollbar restyled to match

**Well-designed.** Applied via class on root `<main>` in workspace hubs — no leakage into marketing pages.

### Tailwind config
- Extended colors via CSS var pointers (`primary`, `secondary`, `accent`)
- Extended spacing scale (`xs`–`3xl`) also via CSS vars
- Custom `float` animation
- No plugins

---

## 8. Testing

3 test files in `tests/`:
1. `smoke.test.mjs` — basic smoke
2. `decision-nia-data.test.mjs` — schema validation for workspace JSON
3. `lint-hygiene.test.mjs` — enforces no stray TODO markers

Run: `npm test`.

**No component tests, no E2E, no visual regression.**

---

## 9. The Building Permits Ask Panel (Detailed)

Case study of prototype-grade wiring:

- **Location:** `components/demo/BuildingPermitsAsk.tsx`
- **Shape:** Client component, `useState` for messages/input/typing/followups
- **Response engine:** hardcoded inside file:
  - `classify(text): Topic` — 5 keyword branches
  - `respond(text): string` — 5 hardcoded markdown blocks
  - `FOLLOWUPS: Record<Topic, string[]>` — chip suggestions per topic
- **JSON pack:** `data/ai-decision-workspace/public-sector/building-permits/ask.json` — contains **the same matcher data in cleaner form**, but is **not imported**
- **Layout:** welcome card top + 4 big suggestion cards pushed to bottom via `mt-auto` when idle → after first message shows chat + follow-up pill chips above composer

**Verdict:** works, but is the poster child for the pattern that should be extracted:

```
lib/chat/
  respond.ts        — reads a matcher pack, returns response + followups
  types.ts          — Msg, Topic, Matcher, ChatPack
components/chat/
  ChatPanel.tsx     — generic chat UI (welcome, messages, composer, chips)
  ChatMessage.tsx
  FollowupChip.tsx
```

Then `BuildingPermitsAsk` = `<ChatPanel pack={askJson} />` — 3 lines.

---

## 10. The Two Ways of Building a "Workspace Hub"

Site has **two hub implementations** that solve the same problem differently:

### A. `PublicSectorHubClient` (active for `/demo/public-sector` + `/demo/operations`)
- Single space: `building-permits`
- 3 tabs: Dashboards, Ask, Workflow
- Sidebar + top bar + panel switcher
- Hardcoded `SPACES` and `FEATURES` arrays
- Panels: `BuildingPermitsDashboard`, `BuildingPermitsAsk`, `WorkflowPlaceholder` — all vertical-named

### B. `DecisionNiaDemoHubClient` (active for `/demo/decision-nia`)
- 4 spaces: customer-success, customer-support, sales, delivery
- 4 capabilities per space: Command Center, Ask, Dashboards, Trace
- All rendering inline in a **94 KB single file**
- Each space's data loaded from JSON pack (`ai-decision-workspace/<vertical>/*.json`)

### Convergence path
Both should collapse into one generic hub:

```
components/workspace/
  WorkspaceHub.tsx        ← generic sidebar + top bar + tab switcher
  panels/
    CommandCenter.tsx     ← reads command-center.json
    Ask.tsx               ← reads ask.json
    Dashboard.tsx         ← reads dashboards.json
    Trace.tsx             ← reads trace.json
    Workflow.tsx          ← reads workflow.json (optional per vertical)
  config/
    verticals.ts          ← { label, letter, persona, features[], theme } per vertical
app/(demo)/demo/[vertical]/page.tsx  ← one dynamic route
```

Route table then:
- `/demo/sales`, `/demo/customer-support`, `/demo/customer-success`, `/demo/delivery` → auto-wired
- `/demo/public-sector/[space]` → dynamic subroute for public-sector spaces (building-permits, public-health, etc.)

---

## 11. Anomalies / Watchlist

1. **`/demo/operations`** reuses `PublicSectorHubClient` — likely wrong vertical.
2. **`Header.tsx` is 49 KB** — extract nav config to JSON, split into `<NavPrimary>`, `<NavMobile>`, `<NavCta>`.
3. **`DecisionNiaDemoHubClient.tsx` is 94 KB** — a single file holding 4 spaces × 4 panels; needs decomposition.
4. **`data/customer-success.json` (11 lines)** and **`data/nia.json` (10 lines)** are suspiciously small — check they're not stub placeholders.
5. **`public-sector` vertical shape mismatch** — has `{ask, dashboards, workflow}.json` while others have `{ask, command-center, dashboards, trace}.json`. Inconsistent.
6. **Metadata-only pages** (`ai-implementation-index`, `ai-readiness-report-2025`) — separate `metadata.tsx` files exist; verify they're not half-finished pages.
7. **No `not-found.tsx`** — using default Next.js 404 on a static-export site.
8. **`APPS_SCRIPT_URL` hardcoded** in `lib/reportDownload.ts` — no `.env` indirection.
9. **`use client` sprinkled without discipline** — many `*Client.tsx` could be server components if they don't hold state.
10. **No image optimization strategy** — `images.unoptimized: true` because of static export; consider next-gen formats manually.

---

## 12. Recommended Action Plan (Prioritized)

### P0 — Delete dead code (1 hr, zero risk)
- `components/demo/PermitsChatbot.tsx`
- `components/demo/AnalyticsDashboard.tsx`
- `components/pages/PublicSectorDemoHubClient.tsx`
- `data/public-sector.json` (verify first — check if any Public Sector expansion is planned)
- `data/ai-decision-workspace/public-sector/building-permits/ask.json` (or wire it into `BuildingPermitsAsk` in place of hardcoded logic — see P1)
- `data/ai-decision-workspace/public-sector/building-permits/dashboards.json` (unused; different shape from active dashboards.json)

### P1 — Wire JSON pack into Ask panel (2 hrs)
Move `classify` / `respond` / `FOLLOWUPS` from `BuildingPermitsAsk.tsx` inline constants into `data/ai-decision-workspace/public-sector/building-permits/ask.json`. Consume in component.

### P2 — Extract chat primitives (½ day)
```
lib/chat/{respond.ts, types.ts}
components/chat/{ChatPanel.tsx, ChatMessage.tsx, FollowupChip.tsx}
```

### P3 — Unify workspace hub (1–2 days)
Extract `WorkspaceHub` + `panels/*` per §10. Delete `PublicSectorHubClient`, decompose `DecisionNiaDemoHubClient`.

### P4 — Add `utils/`, `hooks/`, `types/` conventions (ongoing)
Move `Msg`, `Topic`, `Matcher`, `WorkspacePack` into `types/`. Extract `useChatState`, `useSpaceData` into `hooks/`.

### P5 — Testing (ongoing)
Add component tests for `ChatPanel`, `WorkspaceHub`, at least one route smoke.

### P6 — Split giants (½ day)
- `Header.tsx` → nav config JSON + smaller components
- `DecisionNiaDemoHubClient.tsx` → per-panel files

---

## 13. What's Actually Good

- Clean route grouping (`(main)` / `(demo)`) with separate layouts
- Theme tokens scoped via class (`theme-genx-decision`) — no global bleed
- Vertical data folders (`data/ai-decision-workspace/<vertical>/`) already have a **consistent 4-file shape** for the 4 non–public-sector verticals — good foundation for generic panels
- Static export config is correct (`unoptimized` images, trailing slashes, base path)
- TypeScript strict mode
- Schema validation test for workspace JSON already exists
- No `any` sprinkled everywhere from what was inspected
- CSS variable strategy composes well with Tailwind

---

## 14. What Would Take This to 8.5+

1. Delete the 3 orphan components + 3 orphan JSON files.
2. One generic `<WorkspaceHub>` + `panels/{Ask,Dashboard,CommandCenter,Trace}.tsx` shared across all 5 verticals.
3. `lib/chat/` for matcher-based responses (kill hardcoded `classify`/`respond`).
4. Populate `utils/`, `hooks/`, `types/`.
5. Component tests for `WorkspaceHub` and one panel.
6. Split the 2 giant files (`Header`, `DecisionNiaDemoHubClient`).

**Target rating after these 6 items: 8.5 / 10.**

---

## 15. File-by-file Cheat Sheet (For Reviewer)

### Active demo panels
- [components/demo/BuildingPermitsAsk.tsx](components/demo/BuildingPermitsAsk.tsx) — chat UI, hardcoded matchers
- [components/demo/BuildingPermitsDashboard.tsx](components/demo/BuildingPermitsDashboard.tsx) — KPI dashboard, reads `data/building-permits/dashboards.json`
- [components/demo/WorkflowPlaceholder.tsx](components/demo/WorkflowPlaceholder.tsx) — coming-soon placeholder

### Active hubs
- [components/pages/PublicSectorHubClient.tsx](components/pages/PublicSectorHubClient.tsx) — sidebar + panel switcher for building-permits
- [components/pages/DecisionNiaDemoHubClient.tsx](components/pages/DecisionNiaDemoHubClient.tsx) — giant single-file hub for 4 verticals

### Dead files (safe to delete)
- [components/demo/PermitsChatbot.tsx](components/demo/PermitsChatbot.tsx)
- [components/demo/AnalyticsDashboard.tsx](components/demo/AnalyticsDashboard.tsx)
- [components/pages/PublicSectorDemoHubClient.tsx](components/pages/PublicSectorDemoHubClient.tsx)

### Data
- [data/public-sector.json](data/public-sector.json) — 192 lines, only orphan client imports
- [data/building-permits/dashboards.json](data/building-permits/dashboards.json) — active
- [data/ai-decision-workspace/public-sector/building-permits/](data/ai-decision-workspace/public-sector/building-permits/) — mixed active/orphan

### Config
- [next.config.ts](next.config.ts), [tailwind.config.ts](tailwind.config.ts), [tsconfig.json](tsconfig.json)
- [app/globals.css](app/globals.css) — themes + animations
- [lib/reportDownload.ts](lib/reportDownload.ts) — only lib file

---

*End of report. Feed this file to an external reviewer for second opinion.*
