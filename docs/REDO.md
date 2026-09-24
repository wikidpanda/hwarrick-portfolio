# Portfolio redo

Public site: [hwarrick.com](https://hwarrick.com) · repo: this folder.  
Asset library: `C:\Users\Huston\Documents\Projects\archive\dekanova`.  
Fixed Dekanova numbers: `docs/DEKANOVA-BASELINE.md`.

The Desktop Zola folder was emptied when that tree was archived on 1 Aug 2026. Do not rebuild a second site there. This Next.js app is the portfolio.

## Positioning

Huston Warrick (Discord: moon). One person across four practices:

| Practice | Proof on this site |
| --- | --- |
| UI | Dekanova Figma system, this site’s visual system, senior-project wireframes |
| Frontend | Zola/SCSS product site; Next.js, TypeScript, Tailwind portfolio |
| Backend | Zola build, Helcim checkout start, Cloudflare Worker token flow |
| Engineering | Axion and Muon NPD, PCB bring-up, SFF case, manufacturing roles |

Do not credit a co-founder. Supplier and factory coordination stays, named as suppliers.

## Information architecture

Keep the current routes. Change the story, not the app shell.

| Route | Job |
| --- | --- |
| `/` | Name, four practices, four featured studies |
| `/projects` | Full index |
| `/projects/dekanova` | Baseline case study |
| `/projects/mouse-enclosure`, `/projects/pcb-prototype` | Dekanova hardware, still separate pages |
| `/timeline` | Jobs, with Dekanova as founder work |
| `/dossier` | Resume |

Categories stay `product`, `engineering`, `creative`. Software work sits in creative (this site) and inside the Dekanova study (the product site).

## This pass

- Rewrite home copy and add a practice strip.
- Replace the Dekanova case study with the baseline: products, UI, frontend, backend, community counts.
- Remove “small team” / “technical team” wording.
- Point the archive partner sentence out of the old Zola case study.

## Next pass

1. Copy winners from `archive\dekanova\PORTFOLIO-PICKS.txt` into `public/images/` and add them to the Dekanova gallery. Skip NDAs, statements, purchasing docs, and the PixArt datasheet.
2. Publish `wikidpanda/dekanova` as a redacted README, then set `repoUrl`.
3. Deploy this app and point `hwarrick.com` at it.
4. Deepen camera body and lamp only after those have photos. They stay marked in progress.

## Voice

First person, sole founder. Raw Discord counts in the case study. Rounded counts (3,625 messages, 129 authors, 222 images) are display-only and are not the baseline.
