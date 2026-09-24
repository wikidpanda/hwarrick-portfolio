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
  logo?: { src: string; alt: string };
  projectLinks: TimelineProjectLink[];
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "amazon-robotics",
    period: "May 2026 – Present",
    company: "TEKsystems (Amazon Robotics)",
    title: "Robotics Field Engineer — Vulcan Stow",
    headline:
      "Process improvement and reliability engineering on a live automated stow platform.",
    bullets: [
      "Embedded on Amazon's Vulcan Stow system — force sensing, vision, and multi-axis manipulation in high-volume production.",
      "Root-cause analysis and informal factorial studies on grip force, approach velocity, and item geometry.",
      "Monitoring for cycle success, throughput, and downtime to support data-backed process changes.",
    ],
    body: [
      "This role rewards structured experimentation: characterizing process windows instead of guessing at fixes.",
    ],
    images: [],
    projectLinks: [],
  },
  {
    id: "power-handling",
    period: "October 2024 – May 2026",
    company: "Power Handling Inc.",
    title: "Manufacturing Engineer → Lead Engineering Technician",
    headline: "NPD, process optimization, and hands-on prototyping.",
    bullets: [
      "Led process optimization that improved OEE by 37%.",
      "PDR/CDR reviews with DFM analysis; controlled trials for new product introductions.",
      "DFMEA, test fixtures, and CAD/CAM prototyping for BLDC and production tooling.",
    ],
    body: [
      "Combined production engineering with fixture design and cross-functional launch work.",
    ],
    images: [
      {
        src: "/images/case-study-wireframe.png",
        alt: "Product wireframe study",
        width: 400,
        height: 300,
      },
    ],
    projectLinks: [
      { label: "SFF PC Case V5.5", href: "/projects/mini-pc-case" },
    ],
  },
  {
    id: "dekanova",
    period: "2021 – 2025",
    company: "Dekanova LLC",
    title: "Founder · moon",
    headline:
      "Founded Dekanova and ran product, brand, site, and community.",
    bullets: [
      "Axion mouse and Muon keypad: enclosure CAD, PCB bring-up, and sample production.",
      "Figma system and Zola storefront, plus a Helcim and Cloudflare Worker checkout start.",
      "426 Discord posts as moon. Public build log through March 2025.",
    ],
    body: [
      "One founder across UI, frontend, backend, and hardware. Supplier coordination was part of the job. The case study uses raw Discord counts.",
    ],
    logo: {
      src: "/images/dekanova-logo-white.svg",
      alt: "Dekanova logo",
    },
    images: [
      {
        src: "/images/pcb-layout.png",
        alt: "PCB layout drawing",
        width: 184,
        height: 116,
      },
      {
        src: "/images/mouse-wireframe.png",
        alt: "Mouse enclosure wireframe",
        width: 216,
        height: 153,
      },
      {
        src: "/images/pcb-photo.png",
        alt: "PCB prototype photo",
        width: 132,
        height: 176,
      },
      {
        src: "/images/enclosure-wireframe.png",
        alt: "Enclosure wireframe",
        width: 243,
        height: 209,
      },
    ],
    projectLinks: [
      { label: "Dekanova case study", href: "/projects/dekanova" },
      { label: "Mouse enclosure", href: "/projects/mouse-enclosure" },
      { label: "PCB bring-up", href: "/projects/pcb-prototype" },
    ],
  },
];
