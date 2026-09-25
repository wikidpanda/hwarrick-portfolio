import type { CaseStudy } from "./types";

export const caseStudies: Record<string, CaseStudy> = {
  dekanova: {
    id: "dekanova",
    title: "Dekanova",
    subtitle:
      "Solo founder. Mouse, keypad, brand, Discord, and the commerce site.",
    category: "product",
    status: "in-progress",
    period: "September 2021 – September 2023",
    role: "Founder · UI · Frontend · Backend · Product engineering",
    heroImage: "/images/dekanova-case-study.png",
    problem:
      "Ship two open-source peripherals — an 8 kHz mouse and a compact osu! keypad — with a brand, a storefront, and a public build log, without an OEM behind it.",
    approach: [
      "Defined Axion and Muon, then ran enclosure CAD, PCB fitment, and prototype cycles through sample production.",
      "Designed the visual system in Figma and built the marketing site in Zola: landing, shop, both product pages, FAQ, and support.",
      "Started hosted checkout with Helcim and a Cloudflare Worker for the payment token handoff.",
      "Used Discord for betas, firmware notes, and launch posts from November 2021 through March 2025.",
    ],
    outcomes: [
      "Two SKUs taken from concept to sample-ready hardware: Axion (PAW3399 mouse) and Muon (3-key keypad).",
      "A full UI system: wireframe brand, motion specs, and a static commerce site.",
      "A public Discord where I posted through the bring-up: 426 of my messages in a server of 3,153.",
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
      { value: "426", label: "My Discord posts" },
      { value: "3,153", label: "Discord messages" },
      { value: "66", label: "People who wrote" },
      { value: "198", label: "Images shared" },
    ],
    wipNote: "",
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
        alt: "SolidWorks enclosure model",
        caption: "Enclosure, modeled in SolidWorks",
      },
      {
        src: "/images/pcb-photo.png",
        alt: "Assembled PCB prototype",
        caption: "Prototype bring-up",
      },
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Keypad PCB layout",
        caption: "Keypad PCB layout",
      },
      {
        src: "/images/case-study-wireframe.png",
        alt: "Dekanova panel and volume study",
        caption: "Panel and volume study",
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
          "Discord was the lab notebook from November 2021 through March 2025. I wrote 426 messages. The server held 3,153 across eight channels.",
          "Busiest rooms: #general (2,455), #kbd-things (221), #dev-chat (163), #dev-log (38), #announcements (37).",
        ],
      },
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
    ],
  },

  "senior-design-process": {
    id: "senior-design-process",
    title: "hwarrick.com",
    subtitle: "Senior project. The portfolio, designed and built to be shown.",
    category: "creative",
    status: "published",
    period: "TECH 491 · 2024",
    role: "Design and front-end",
    heroImage: "/images/about-layout.png",
    problem:
      "Employers were not going to read a folder of CAD. The work needed one site: case studies, a resume, and a way to move between UX, product, and engineering without looking like a template.",
    approach: [
      "Chose Namecheap and the domain hwarrick.com so the site could stay up without me running a server.",
      "Sketched structure first, then locked the layout in Figma: a dark about page with crop marks, and a light grid with a red arc for UX, Product, and Graphic.",
      "Coded the interface in HTML, CSS, and JavaScript. Built a separate portrait layout when the desktop grid did not survive on a phone.",
      "Made 2D assets in Photoshop and Illustrator. Built interactive 3D in Spline and cut polygon weight so the models would load.",
      "Checked contrast, alt text, and keyboard order against WCAG. Added Google Analytics events for resume and case-study views.",
    ],
    outcomes: [
      "A hosted portfolio with two case studies, a resume view, and a navigation model that is now the home page of this site.",
      "A written process: host, wireframes, assets, mobile, accessibility, analytics, and backups.",
    ],
    tools: [
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "Spline",
      "Photoshop",
      "Illustrator",
      "Namecheap",
    ],
    repoUrl: "https://github.com/wikidpanda/hwarrick-portfolio",
    sections: [
      {
        title: "Layout",
        paragraphs: [
          "The about page is a dark field. The name sits large on the left. A short bio sits on the right, inside a grid, with red crop marks. Case Studies, Creative, and Contact are pills in the corner.",
          "The work page is a light grid. A red arc carries three stops. Each stop swaps the panels: UX for the site, Product for Dekanova, Engineering for hardware.",
        ],
      },
      {
        title: "Build",
        paragraphs: [
          "I managed the schedule on a Kanban board. Early milestones were navigation and the desktop grid. Later ones were the mobile layout, SEO, and accessibility.",
          "3D models were the slow part. I reduced polygons before they went on the page, and I wrote a text alternative because a screen reader cannot read a Spline scene.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/about-layout.png",
        alt: "Dark about page with crop marks",
        caption: "About page",
      },
      {
        src: "/images/portfolio-design.png",
        alt: "Light grid with a red arc and project panels",
        caption: "Work page — UX, Product, Graphic",
      },
      {
        src: "/images/Case Study 2.png",
        alt: "Case study layout",
        caption: "Case study layout",
      },
      {
        src: "/images/Case Study 3.png",
        alt: "Case study layout variant",
        caption: "Case study layout",
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
    role: "Personal project · OnShape",
    problem:
      "Design a compact PC enclosure with separate printable panels, mesh intakes, and internal support geometry.",
    approach: [
      "Modeled the case in OnShape as an assembly: front and rear panels, bottom plate, cover, feet, mesh, LED bar, power button, and GPU/PSU support.",
      "Iterated on panel interfaces and internal clearance for a small-form-factor build.",
      "Exported print-ready geometry. Photos of the printed case are not on the site yet.",
    ],
    outcomes: [
      "Complete multi-part enclosure assembly (11 components) ready for print or further DFM.",
      "Demonstrates assembly thinking, panel breaks, and SFF mechanical layout.",
    ],
    tools: ["OnShape", "STL export", "3D printing", "DFM"],
    repoUrl: null,
    localPath: "C:\\Users\\Huston\\Documents\\- Adult engineer\\Full Case",
    gallery: [],
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
    tools: ["Plasticity", "SolidWorks", "GD&T"],
    repoUrl: null,
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
  },

  "mouse-enclosure": {
    id: "mouse-enclosure",
    title: "Axion",
    subtitle: "The Dekanova mouse. Shell, sensor, switches, and the board they sit on.",
    category: "engineering",
    status: "published",
    period: "2021 – 2023",
    role: "Product design · SolidWorks",
    heroImage: "/images/mouse-wireframe.png",
    problem:
      "An enthusiast mouse at a sane price had to be light, poll at 8 kHz, and still be something I could mold and assemble by hand.",
    approach: [
      "Modeled the shell in SolidWorks around a 55 g PBT target, with room for the sensor, switches, encoder, and skates.",
      "Specified a PixArt PAW3399, binned Japanese Omron switches, a hardware debounce IC, and a Japanese ALPS encoder.",
      "Laid the board to that stack, then brought it up on the bench before the injection-molded shells existed.",
    ],
    outcomes: [
      "A defined product: 55 g PBT shell, PAW3399, Omron switches, ALPS encoder, PTFE skates, custom cable, open firmware.",
      "Shell and board matched well enough to assemble sample units.",
    ],
    tools: ["SolidWorks", "PCB layout", "Injection molding", "Firmware"],
    repoUrl: null,
    timelineId: "dekanova",
    sections: [
      {
        title: "Spec",
        paragraphs: [
          "The Axion was specified to run at 8,000 Hz. The sensor is a PixArt PAW3399. Switches are binned Japanese Omrons with a hardware IC for latched debounce, so the click is not left to a software timer.",
        ],
        bullets: [
          "Shell: about 55 g, PBT, injection molded, unique outer shape",
          "Sensor: PixArt PAW3399",
          "Switches: binned Japanese Omron, hardware debounce",
          "Encoder: Japanese ALPS",
          "Skates: custom PTFE. Cable: custom. Firmware: open",
          "Assembly: hand built and checked before it left",
        ],
      },
      {
        title: "Build",
        paragraphs: [
          "The shell came first as a SolidWorks model: wall thickness, button stems, and the volume the board had to live in. The board followed that envelope.",
          "Early firmware ran on a dummy mouse with no sensor, so the rest of the stack could be proven before a PAW3399 was on the board. After that, boards were built, brought up, and fitted to printed and then molded shells.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/mouse-wireframe.png",
        alt: "Axion shell wireframe",
        caption: "Shell study, SolidWorks",
      },
      {
        src: "/images/pcb-layout.png",
        alt: "Enclosure model",
        caption: "Enclosure model",
      },
      {
        src: "/images/pcb-photo.png",
        alt: "Assembled prototype board",
        caption: "Board on the bench",
      },
    ],
  },

  "pcb-prototype": {
    id: "pcb-prototype",
    title: "Boards",
    subtitle: "Axion and Muon, from layout to a board that could be tested.",
    category: "engineering",
    status: "published",
    period: "2021 – 2023",
    role: "Hardware",
    heroImage: "/images/pcb-photo.png",
    problem:
      "The mouse and the keypad each needed a custom board: the sensor and switches on one, three hotswap keys and lights on the other.",
    approach: [
      "Axion board: PAW3399, Omron pads, ALPS encoder, debounce IC, and a connector for the cable. Placement followed the SolidWorks shell, not the other way around.",
      "Muon board: a 3-key PCB with RGB backlighting and underglow, MX hotswap sockets, and a path to Kailh low-profile. Firmware was ours.",
      "Boards were ordered, soldered, and brought up on the bench. The keypad layout was checked against the acrylic stack before a full sample run.",
    ],
    outcomes: [
      "Working mouse and keypad boards used to prove firmware, switch feel, and fit in the mechanical stack.",
    ],
    tools: ["PCB layout", "Soldering", "Bench testing", "Firmware"],
    repoUrl: null,
    timelineId: "dekanova",
    sections: [
      {
        title: "Axion board",
        paragraphs: [
          "The chip people notice is the PAW3399. Around it: the switch matrix with hardware debounce, the encoder, and power for an 8 kHz device in a 55 g shell. The first live code did not include the sensor. That dummy board proved the rest of the circuit.",
        ],
      },
      {
        title: "Muon board",
        paragraphs: [
          "Three keys, hotswap, lights in the key and under the board, in an acrylic stack that comes apart. The PCB had to match the plate openings. Sample units were planned as a small factory run, then hand finished.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Keypad PCB layout",
        caption: "Muon keypad PCB",
      },
      {
        src: "/images/pcb-photo.png",
        alt: "Assembled prototype board",
        caption: "Assembled board",
      },
      {
        src: "/images/case-study-wireframe.png",
        alt: "Panel and volume study",
        caption: "Panel and volume study",
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
