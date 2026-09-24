# Portfolio project registry

Track GitHub repos and local CAD/source folders for [hwarrick-portfolio](.).

**Master registry (all projects):** [`Manager Dashboard/data/life-projects.json`](../../Manager%20Dashboard/data/life-projects.json) — portfolio + Fleet + homelab + digital library + career. Filter `domain === "portfolio"` for this page.

**Workflow:** Each `nextActions` entry has `owner: "hu"` or `"agent"`. Hu-gated steps need your approval before execution (git push, DNS, installs, asset picks, Fleet dispatch, spend).

**GitHub profile:** https://github.com/wikidpanda

Use **Fleet Manager → Repos** (`POST /api/repos/scan`) after initializing each repo under `~/Documents/Projects`.

## How to add a project to GitHub (via Manager app)

1. Create folder: `C:\Users\Huston\Documents\Projects\<repo-name>`
2. `git init` + README case study (problem → process → photos → lessons)
3. Push to `https://github.com/wikidpanda/<repo-name>`
4. In Fleet Manager: **Settings → Repo catalog roots** → scan
5. Update `repoUrl` in `src/data/case-studies/index.ts` for that project id
6. Bump `completionPercent` in `life-projects.json`

## Project status

| ID | Title | Tier | % | Status | Local path | Target GitHub repo | Portfolio page |
|----|-------|------|---|--------|------------|-------------------|----------------|
| `dekanova` | Dekanova | **now** | 80 | Baseline written | `Projects\archive\dekanova` | `wikidpanda/dekanova` | `/projects/dekanova` |
| `portfolio-website` | hwarrick.com | **now** | 85 | Ready to launch | `Projects\hwarrick-portfolio` | `wikidpanda/hwarrick-portfolio` | `/projects/portfolio-website` |
| `senior-design-process` | Design process | **now** | 90 | Published | Senior project assets | — (optional) | `/projects/senior-design-process` |
| `mini-pc-case` | SFF PC Case V5.5 | **now** | 75 | CAD ready | `- Adult engineer\Full Case` | `wikidpanda/mini-pc-case` | `/projects/mini-pc-case` |
| `pcb-prototype` | PCB bring-up | soon | 85 | Published | `Projects\archive\dekanova` | fold into dekanova | `/projects/pcb-prototype` |
| `mouse-enclosure` | Mouse CAD | later | 80 | Published | `Projects\archive\dekanova` | fold into dekanova | `/projects/mouse-enclosure` |
| `custom-camera-body` | Camera body | later | 15 | In progress | TBD | `wikidpanda/camera-body` | `/projects/custom-camera-body` |
| `custom-lamp` | Lamp series | later | 10 | In progress | TBD | `wikidpanda/lamp-series` | `/projects/custom-lamp` |

## Life systems (not portfolio pages)

Tracked in `life-projects.json` — see [`integration-execution-plan.md`](../../Manager%20Dashboard/docs/integration-execution-plan.md).

| ID | Title | Tier | % | Status |
|----|-------|------|---|--------|
| `fleet-manager` | Fleet Manager | maintenance | 92 | V8 in progress |
| `timer` | Sprint Task Manager | maintenance | 95 | 1.0.0 released |
| `knowledge-pool` | Digital library / Obsidian | soon | 5 | Plan approved |
| `homelab` | Home server | soon | 10 | BOM on hold |
| `career-lssgb` | LSSGB / career | soon | — | Hu-led WIP |
| `pc-cleanup` | PC cleanup | done | 100 | Phase 3 complete |

## Content files

| What | Where |
|------|--------|
| Case study full text | `src/data/case-studies/index.ts` |
| Project cards (index) | `src/data/projects.ts` |
| Timeline + links | `src/data/timeline.ts` |
| Images | `public/images/` — drop refs here, reference in case study `gallery` |

## Next uploads (your refs)

When you add photos/CAD exports:

1. Copy to `public/images/` (use kebab-case names)
2. Add to `gallery` array on the matching case study in `case-studies/index.ts`
3. Optionally add to `/gallery` page list
4. Update `completionPercent` in `life-projects.json`

## Dekanova case study — baseline written

Numbers and scope: `docs/DEKANOVA-BASELINE.md`. Redo plan: `docs/REDO.md`.

## Dekanova case study — gallery still open

**Asset archive:** `C:\Users\Huston\Documents\Projects\archive\dekanova` — see `PORTFOLIO-PICKS.txt` for suggested gallery starting points. Pick images in File Explorer, then copy to `public/images/` or tell the agent which files to wire up.

Priority additions:

- [ ] Iteration photos per hardware revision
- [ ] Assembly / bench photos
- [ ] Supplier/process notes (redacted if needed)
- [ ] GitHub README case study
- [ ] Link `repoUrl` once `wikidpanda/dekanova` exists
