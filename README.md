# Huston Warrick Portfolio

Personal portfolio site for [hwarrick.com](https://hwarrick.com).

GitHub account: [wikidpanda](https://github.com/wikidpanda). Plan for turning that profile into current work: `docs/GITHUB.md`.

## Design direction

The site merges three senior-project concepts instead of picking only one:

- **Home (`/`)** — dark grid hero from the About page, with pill nav (`Case Studies`, `Creative`, `Contact`)
- **Category explorer** — arc interaction from the UX/Product/Graphic concept, remapped to `Product`, `Engineering`, and `Creative`
- **Timeline (`/timeline`)** — Figma timeline page with purple curve and Dekanova imagery
- **Dossier (`/dossier`)** — blueprint-style resume vault with tabs, credential roadmap, artifact index, and print/PDF export

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shader Gradient (`@shadergradient/react`) — animated hero background
- React Three Fiber + Drei — liquid logo mark and hero wireframe sculpture
- CSS liquid-glass surfaces inspired by liquid-glass-js
- SVG path-draw animation on the timeline curve

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding content later

Most site content lives in `src/data/`:

- `site.ts` — name, title, contact info, tools
- `case-studies/index.ts` — **full case study write-ups** (primary content source)
- `projects.ts` — project card index (links to case studies)
- `timeline.ts` — timeline entries + links to case studies
- `resume.ts` — resume content used by the dossier
- `dossier.ts` — credentials, artifacts, and contact blocks

See **`docs/PROJECTS.md`** for the GitHub repo registry and Fleet Manager workflow.

Add images to `public/images/`, then reference them from case study `gallery` arrays.

## Deploying to hwarrick.com (Namecheap)

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com) (free tier works well for portfolios).
3. Add the custom domain `hwarrick.com` in Vercel project settings.
4. In Namecheap DNS, point the domain to Vercel:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation and SSL provisioning.

Alternative: build a static export and upload to Namecheap shared hosting if you prefer not to use Vercel.

```bash
npm run build
```

## Source assets

| Project | Location |
|---------|----------|
| **Dekanova** (hardware, CAD, photos) | `C:\Users\Huston\Documents\Projects\archive\dekanova` — see `PORTFOLIO-PICKS.txt` |
| **Portfolio site** (wireframes, Figma exports) | `C:\Users\Huston\Documents\Cleanup Dec 2024\Senior Project Final` |

Figma file: [Portfolio design](https://www.figma.com/design/qS8hZOZaslikddQHuBydcY/Portfolio)
