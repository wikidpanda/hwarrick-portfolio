export type TimelineImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TimelineProjectLink = {
  label: string;
  href: string;
};

export type TimelineEntry = {
  id: string;
  period: string;
  company: string;
  title: string;
  headline: string;
  bullets: string[];
  body: string[];
  images: TimelineImage[];
  photoNote?: string;
  logo?: { src: string; alt: string };
  projectLinks: TimelineProjectLink[];
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "amazon-robotics",
    period: "May 2026 – Present",
    company: "TEKsystems",
    title: "Field Engineer · Amazon Robotics",
    headline: "On the floor with the robots, not in a slide deck.",
    bullets: [
      "On-site support for automated systems and robotics infrastructure in Spokane.",
      "Maintenance, root-cause analysis, and continuous improvement in a high-volume building.",
      "Process studies on a live stow platform: grip force, approach, and what the item actually is.",
    ],
    body: [],
    images: [],
    photoNote:
      "Add photos to public/images/amazon, then list them in src/data/timeline.ts.",
    projectLinks: [],
  },
  {
    id: "power-handling-me",
    period: "March 2025 – May 2026",
    company: "Power Handling",
    title: "Manufacturing Engineer",
    headline: "New product, tooling, and a line that had to run.",
    bullets: [
      "Cut prototype lead time by 40% on a BLDC paper-roll mover. Faster loops, and DFM before the tool was cut.",
      "Raised OEE by 37% through process mapping, waste, and ERP planning in Odoo and SAP.",
      "Designed tooling and fixtures in CAD/CAM. Ran PDR and CDR before release.",
      "Owned the handoff from a drawing to something the floor could set up and repeat.",
    ],
    body: [],
    images: [],
    projectLinks: [],
  },
  {
    id: "power-handling-tech",
    period: "October 2024 – March 2025",
    company: "Power Handling",
    title: "Lead Engineering Technician",
    headline: "The bench that the engineering changes had to survive.",
    bullets: [
      "Built test fixtures and cut test cycle time by 25% with one procedure instead of tribal knowledge.",
      "Prototyped assemblies in CAD/CAM and on the printer. Electrical and mechanical checks on the same parts.",
      "DFMEA, test reports, and engineering-change paperwork before a design was allowed into production.",
    ],
    body: [],
    images: [],
    projectLinks: [],
  },
  {
    id: "sff-case",
    period: "Personal",
    company: "Independent",
    title: "Design · OnShape",
    headline: "A small PC case, drawn and broken into parts I could print.",
    bullets: [
      "SFF PC Case V5.5. Eleven parts: panels, mesh, feet, LED bar, power button, GPU and PSU support.",
      "Modeled in OnShape. Clearance, panel breaks, and print-ready exports. Not a Power Handling job.",
    ],
    body: [],
    images: [],
    photoNote: "Photos from the case build can be added here when you have them.",
    projectLinks: [{ label: "SFF PC Case V5.5", href: "/projects/mini-pc-case" }],
  },
  {
    id: "dekanova",
    period: "September 2021 – September 2023",
    company: "Dekanova LLC",
    title: "Founder · Design engineer",
    headline: "Two products. I designed them, built the boards, and put them on a site.",
    bullets: [
      "Axion: 55 g PBT shell in SolidWorks, PixArt PAW3399, binned Japanese Omron switches, hardware debounce, Japanese ALPS encoder, 8 kHz, open firmware.",
      "Muon: 3-key osu! keypad, acrylic stack, RGB, MX hotswap with a low-profile option, our firmware.",
      "Boards laid out to the mechanical stack, ordered, soldered, and brought up. Early mouse firmware ran with no sensor so the rest of the circuit could be proven.",
      "Brand, Figma, and the Zola storefront. Discord carried the build from late 2021 through 2025. I wrote 426 of the messages.",
    ],
    body: [],
    logo: {
      src: "/images/dekanova-logo-white.svg",
      alt: "Dekanova logo",
    },
    images: [
      {
        src: "/images/mouse-wireframe.png",
        alt: "Axion shell",
        width: 216,
        height: 153,
      },
      {
        src: "/images/pcb-photo.png",
        alt: "Assembled board",
        width: 132,
        height: 176,
      },
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Keypad PCB",
        width: 243,
        height: 209,
      },
      {
        src: "/images/pcb-layout.png",
        alt: "Enclosure model",
        width: 184,
        height: 116,
      },
    ],
    projectLinks: [
      { label: "Dekanova", href: "/projects/dekanova" },
      { label: "Axion", href: "/projects/mouse-enclosure" },
      { label: "Boards", href: "/projects/pcb-prototype" },
    ],
  },
  {
    id: "hwarrick-site",
    period: "2024",
    company: "Eastern Washington University",
    title: "Senior project · TECH 491",
    headline: "The portfolio, as a product.",
    bullets: [
      "Designed hwarrick.com: dark about page, light work grid, red arc for UX, Product, and Engineering.",
      "Built it in HTML, CSS, and JavaScript. Figma for layout. Spline for 3D. Hosted on Namecheap.",
      "Mobile layout, WCAG contrast and keyboard access, analytics on the resume and the case studies.",
    ],
    body: [],
    images: [
      {
        src: "/images/about-layout.png",
        alt: "About page layout",
        width: 400,
        height: 300,
      },
      {
        src: "/images/portfolio-design.png",
        alt: "Work page with arc navigation",
        width: 400,
        height: 220,
      },
    ],
    projectLinks: [
      { label: "hwarrick.com case study", href: "/projects/senior-design-process" },
    ],
  },
];
