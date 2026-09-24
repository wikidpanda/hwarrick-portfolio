import type { CaseStudy } from "./types";

export const caseStudies: Record<string, CaseStudy> = {
  dekanova: {
    id: "dekanova",
    title: "Dekanova",
    subtitle:
      "Solo founder. Mouse, keypad, brand, Discord, and the commerce site.",
    category: "product",
    status: "in-progress",
    period: "2021 – 2025",
    role: "Founder · UI · Frontend · Backend · Product engineering",
    heroImage: "/images/dekanova-case-study.png",
    problem:
      "Ship two open-source peripherals — an 8 kHz mouse and a compact osu! keypad — with a brand, a storefront, and a public build log, without an OEM behind it.",
    approach: [
      "Defined Axion and Muon, then ran enclosure CAD, PCB fitment, and prototype cycles through sample production.",
      "Designed the visual system in Figma and built the marketing site in Zola: landing, shop, both product pages, FAQ, and support.",
      "Started hosted checkout with Helcim and a Cloudflare Worker for the payment token handoff.",
      "Used Discord, as moon, for betas, firmware notes, and launch posts from November 2021 through March 2025.",
    ],
    outcomes: [
      "Two SKUs taken from concept to sample-ready hardware: Axion (PAW3399 mouse) and Muon (3-key keypad).",
      "A full UI system: wireframe brand, motion specs, and a static commerce site.",
      "426 public posts as moon inside a 3,153-message Discord export.",
    ],
    tools: [
      "Figma",
      "Zola",
      "SCSS",
      "Cloudflare Workers",
      "Helcim",
      "SolidWorks",
      "KiCad",
      "3D printing",
    ],
    repoUrl: null,
    localPath:
      "C:\\Users\\Huston\\Documents\\Projects\\archive\\dekanova",
    timelineId: "dekanova",
    metrics: [
      { value: "426", label: "Posts as moon" },
      { value: "3,153", label: "Discord messages" },
      { value: "66", label: "People who wrote" },
      { value: "198", label: "Images shared" },
    ],
    wipNote:
      "Baseline is written from the archive and the 1 Aug 2026 Discord export. Gallery photos from PORTFOLIO-PICKS.txt are the next pass. Counts below are raw, not rounded.",
    gallery: [
      {
        src: "/images/dekanova-case-study.png",
        alt: "Dekanova case study title card",
        caption: "Case study title treatment",
      },
      {
        src: "/images/mouse-wireframe.png",
        alt: "Mouse enclosure wireframe",
        caption: "Mouse enclosure — CAD wireframe",
      },
      {
        src: "/images/pcb-layout.png",
        alt: "PCB layout",
        caption: "PCB layout and routing",
      },
      {
        src: "/images/pcb-photo.png",
        alt: "Assembled PCB prototype",
        caption: "Prototype bring-up",
      },
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Enclosure wireframe",
        caption: "Enclosure concept study",
      },
    ],
    sections: [
      {
        title: "Products",
        paragraphs: [
          "Axion is a light gaming mouse: about 55 g, PBT shell, PixArt PAW3399, binned Japanese Omron switches, and an open-source firmware path. Target price was about $160.",
          "Muon is a 3-key osu! keypad: acrylic stack, RGB, MX and Choc hotswap. Target price was about $35. The sample plan was about 40 units, with testers in Asia and assembly in the US.",
        ],
      },
      {
        title: "UI",
        paragraphs: [
          "The brand is black fields, white line art, and instrument-panel type. Figma file Test Copy 3 is the visual source.",
        ],
        bullets: [
          "Tokens: #050505, #EEEEEE, Orbitron, Poppins",
          "Landing pullout with blur, stagger, and reduced-motion fallback",
          "Shop card hover, FAQ accordion, home-nav underline, disabled order state on Axion",
        ],
      },
      {
        title: "Frontend and backend",
        paragraphs: [
          "The storefront is a Zola static site with shared navigation, SCSS tokens, and pages for landing, shop, both products, FAQ, and support.",
          "Checkout started as Helcim hosted payments plus a Cloudflare Worker for the token handoff. Account pages and live inventory were specified and not built.",
        ],
      },
      {
        title: "Community",
        paragraphs: [
          "Discord was the lab notebook. The export covers 22 Nov 2021 through 11 Mar 2025, eight channels with messages, and 426 posts under the handle moon.",
          "Busiest rooms: #general (2,455), #kbd-things (221), #dev-chat (163), #dev-log (38), #announcements (37).",
        ],
      },
    ],
    nextSteps: [
      "Copy archive photos listed in PORTFOLIO-PICKS.txt into the gallery",
      "Publish a redacted GitHub README for the hardware and the site",
      "Leave NDAs, statements, and supplier contracts out of the public repo",
    ],
  },

  "portfolio-website": {
    id: "portfolio-website",
    title: "hwarrick.com Portfolio",
    subtitle:
      "Personal site for UI, frontend, backend, and hardware work. Figma to Next.js.",
    category: "creative",
    status: "published",
    period: "2024 – 2026",
    role: "Designer · Developer",
    heroImage: "/images/portfolio-design.png",
    problem:
      "One site has to carry hardware, interface work, and software without splitting into a manufacturing resume and a separate design portfolio.",
    approach: [
      "Paper wireframes and Figma iterations to settle on timeline, dossier, and case-study structure.",
      "Built a data-driven Next.js site so projects, timeline, and resume content update without rewriting pages.",
      "Added scroll-driven SVG timeline, shader hero, and blueprint-style resume dossier.",
      "Registered hwarrick.com and validated production builds locally before deployment.",
    ],
    outcomes: [
      "Unified portfolio site replacing scattered senior-project assets.",
      "Reusable case-study template for Dekanova, CAD work, and future flagship projects.",
      "Production build verified — ready to deploy when you choose.",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Shader Gradient", "React Three Fiber"],
    repoUrl: null,
    localPath: "C:\\Users\\Huston\\Documents\\Projects\\hwarrick-portfolio",
    gallery: [
      {
        src: "/images/portfolio-design.png",
        alt: "Portfolio design concept",
        caption: "Landing concept — arc navigation exploration",
      },
      {
        src: "/images/about-layout.png",
        alt: "About page grid layout",
        caption: "Grid-based about layout",
      },
      {
        src: "/images/wireframe-paper-1.jpg",
        alt: "Paper wireframe",
        caption: "Early paper wireframe",
      },
    ],
    nextSteps: [
      "Initialize GitHub repo (wikidpanda/hwarrick-portfolio)",
      "Deploy to Vercel + point hwarrick.com DNS",
    ],
  },

  "senior-design-process": {
    id: "senior-design-process",
    title: "Portfolio Design Process",
    subtitle: "Wireframes, Figma iterations, and visual system for hwarrick.com.",
    category: "creative",
    status: "published",
    period: "Senior project coursework",
    role: "UX · Visual design",
    heroImage: "/images/design-process.jpg",
    problem:
      "Define a visual language that reads as engineering-forward and professional — not generic template portfolio.",
    approach: [
      "Explored light arc navigation (UX / Product / Graphic) and dark grid about layouts.",
      "Settled on charcoal + cream typography with purple timeline curve as the anchor motif.",
      "Mapped senior project deliverables (timeline, dossier, case studies) to navigable site sections.",
    ],
    outcomes: [
      "Coherent design system carried into the live Next.js build.",
      "Documented iteration path from paper wireframes to Figma to code.",
    ],
    tools: ["Figma", "Paper wireframing", "Typography pairing", "Design critique"],
    repoUrl: null,
    gallery: [
      {
        src: "/images/wireframe-paper-1.jpg",
        alt: "Paper wireframe",
        caption: "Paper wireframe 1",
      },
      {
        src: "/images/design-process.jpg",
        alt: "Figma iteration",
        caption: "Figma design iteration",
      },
      {
        src: "/images/about-layout.png",
        alt: "About layout",
        caption: "About page concept",
      },
    ],
  },

  "mini-pc-case": {
    id: "mini-pc-case",
    title: "SFF PC Case V5.5 Mini",
    subtitle:
      "Small-form-factor enclosure — multi-part CAD for panels, mesh, and structural supports.",
    category: "engineering",
    status: "published",
    period: "Personal project",
    role: "Mechanical design",
    heroImage: "/images/enclosure-wireframe.png",
    problem:
      "Design a compact PC enclosure with separate printable/manufacturable panels, mesh intakes, and internal support geometry.",
    approach: [
      "Modeled case as an assembly of discrete STLs: front/rear panels, bottom plate, cover, feet, mesh, LED bar, power button, and GPU/PSU support.",
      "Iterated on panel interfaces and internal clearance for SFF constraints.",
      "Exported print-ready geometry for validation builds.",
    ],
    outcomes: [
      "Complete multi-part enclosure assembly (11 components) ready for print or further DFM.",
      "Demonstrates assembly thinking, panel breaks, and SFF mechanical layout.",
    ],
    tools: ["SolidWorks / CAD", "STL export", "3D printing", "DFM"],
    repoUrl: null,
    localPath: "C:\\Users\\Huston\\Documents\\- Adult engineer\\Full Case",
    gallery: [
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Enclosure wireframe study",
        caption: "Related enclosure wireframe study",
      },
      {
        src: "/images/case-study-wireframe.png",
        alt: "Product wireframe",
        caption: "Panel and volume study",
      },
    ],
    sections: [
      {
        title: "Assembly breakdown",
        paragraphs: ["Local CAD folder contains the following print/manufacturing parts:"],
        bullets: [
          "Bottom front panel · Bottom plate · Case cover · Feet",
          "Front mesh · Front panel · GPU/PSU support",
          "LED clear bar · Power button · Rear panel · Support bar",
        ],
      },
    ],
    nextSteps: [
      "Add render photos from printed build",
      "Publish GitHub repo with README + STLs (or Onshape/SolidWorks link)",
    ],
  },

  "custom-camera-body": {
    id: "custom-camera-body",
    title: "Custom Camera Body",
    subtitle: "Flagship industrial-design surfacing and mechanism study.",
    category: "product",
    status: "in-progress",
    period: "2026",
    role: "Industrial design · Mechanical design",
    problem:
      "Create a portfolio flagship that demonstrates true ID-level surfacing and mechanism thinking — not parametric hobbyist CAD.",
    approach: [
      "Plasticity for organic surfacing and form exploration.",
      "SolidWorks/OnShape for engineering follow-through, tolerancing, and drawings.",
      "STEP handoff workflow between surfacing and parametric CAD.",
    ],
    outcomes: [
      "In progress — case study will document surfacing iterations, mechanism layout, and DFM notes.",
    ],
    tools: ["Plasticity", "SolidWorks", "OnShape", "GD&T"],
    repoUrl: null,
    nextSteps: [
      "Complete primary surfacing pass",
      "Define shutter/mount mechanism",
      "Photo set + GitHub README case study",
    ],
  },

  "custom-lamp": {
    id: "custom-lamp",
    title: "Custom Lamp Series",
    subtitle: "Quick-win manufacturable forms — printable now, mold-ready later.",
    category: "product",
    status: "in-progress",
    period: "2026",
    role: "Product design",
    problem:
      "Maintain portfolio update cadence with a smaller project that still shows manufacturability thinking.",
    approach: [
      "Fast concept-to-render loop across 2–3 lamp forms.",
      "Design geometry that works for FDM printing today and injection molding later.",
    ],
    outcomes: ["In progress — lamp series renders and process photos coming."],
    tools: ["SolidWorks", "Plasticity", "3D printing"],
    repoUrl: null,
    nextSteps: ["Finish 2 lamp concepts", "Print prototypes", "Publish case study"],
  },

  "mouse-enclosure": {
    id: "mouse-enclosure",
    title: "Custom Mouse Enclosure",
    subtitle: "Peripheral enclosure CAD tied to Dekanova hardware development.",
    category: "engineering",
    status: "published",
    period: "2021 – 2023",
    role: "CAD · DFM",
    heroImage: "/images/mouse-wireframe.png",
    problem:
      "Design a custom mouse housing with correct internal volumes, button geometry, and production-aware wall sections.",
    approach: [
      "Wireframe and solid modeling for internal ribbing and mounting features.",
      "Iterated against PCB envelope and ergonomics targets.",
    ],
    outcomes: [
      "Validated enclosure geometry for prototype builds.",
      "Part of the broader Dekanova peripheral development story.",
    ],
    tools: ["SolidWorks", "3D printing"],
    repoUrl: null,
    timelineId: "dekanova",
    gallery: [
      {
        src: "/images/mouse-wireframe.png",
        alt: "Mouse wireframe",
        caption: "Mouse enclosure wireframe",
      },
    ],
  },

  "pcb-prototype": {
    id: "pcb-prototype",
    title: "PCB Prototype Bring-up",
    subtitle: "Layout through assembled board validation.",
    category: "engineering",
    status: "published",
    period: "2021 – 2023",
    role: "Hardware design",
    heroImage: "/images/pcb-photo.png",
    problem:
      "Take a peripheral PCB from schematic/layout to a physical board that could be tested on the bench.",
    approach: [
      "PCB layout with attention to connector placement and DFM for assembly.",
      "Prototype order, bring-up, and iteration on physical hardware.",
    ],
    outcomes: [
      "Working prototype assemblies used in product validation.",
    ],
    tools: ["KiCad / PCB tools", "Soldering", "Bench testing"],
    repoUrl: null,
    timelineId: "dekanova",
    gallery: [
      {
        src: "/images/pcb-layout.png",
        alt: "PCB layout",
        caption: "Board layout",
      },
      {
        src: "/images/pcb-photo.png",
        alt: "PCB photo",
        caption: "Assembled prototype",
      },
    ],
  },
};

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies[id];
}

export function getAllCaseStudyIds(): string[] {
  return Object.keys(caseStudies);
}
