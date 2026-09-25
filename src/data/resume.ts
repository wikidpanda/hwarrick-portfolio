export const resume = {
  headline:
    "Field engineer, robotics and automation. Manufacturing and product development.",
  summary:
    "Manufacturing and field engineer with a B.S. in Manufacturing Engineering Technology. On site with Amazon Robotics through TEKsystems. Before that, nearly two years at Power Handling on OEE, tooling, and new-product work, and Dekanova, a consumer-electronics company I founded.",
  education: [
    {
      degree: "B.S. Manufacturing Engineering Technology",
      school: "Eastern Washington University, Cheney, WA",
      years: "2019–2024",
      coursework: "Six Sigma, Lean, CNC, GD&T, RPA, ERP",
    },
    {
      degree: "A.A. General Studies",
      school: "Spokane Falls Community College",
      years: "2018–2019",
      coursework: "",
    },
  ],
  experience: [
    {
      title: "Field Engineer",
      company: "TEKsystems · Amazon Robotics",
      dates: "May 2026 – Present",
      location: "Spokane, WA · On-site",
      bullets: [
        "On-site technical support for automated systems and robotics infrastructure at Amazon in Spokane.",
        "Field maintenance, root-cause analysis, and continuous improvement in high-volume operations.",
        "Process studies on a live stow platform: grip force, approach, and item geometry.",
      ],
    },
    {
      title: "Manufacturing Engineer",
      company: "Power Handling",
      dates: "March 2025 – May 2026",
      location: "Post Falls, ID · Hybrid",
      bullets: [
        "Cut prototype lead time by 40% on a BLDC paper-roll mover through faster iteration and DFM.",
        "Raised OEE by 37% with process mapping, waste reduction, and ERP planning.",
        "Designed tooling and fixtures in CAD/CAM. Ran PDR and CDR before tooling release.",
      ],
    },
    {
      title: "Lead Engineering Technician",
      company: "Power Handling",
      dates: "October 2024 – March 2025",
      location: "Post Falls, ID · On-site",
      bullets: [
        "Built test fixtures and cut test cycle time by 25% with a standard procedure.",
        "Prototyped assemblies in CAD/CAM and on the printer, including electrical and mechanical checks.",
        "Ran DFMEA, wrote test reports, and managed engineering-change paperwork before production.",
      ],
    },
    {
      title: "Founder · Product Design Engineer",
      company: "Dekanova LLC",
      dates: "September 2021 – September 2023",
      location: "Spokane, WA",
      bullets: [
        "Founded the company. Took the Axion mouse and Muon keypad from concept through sample production.",
        "Enclosure CAD in SolidWorks, PCB bring-up, and overseas suppliers. Cut BOM cost by 22% with material changes and DFM.",
        "Brand, Figma system, and the Zola storefront, plus a public Discord build log.",
      ],
    },
  ],
  projects: [
    {
      title: "hwarrick.com",
      context: "Senior project · EWU TECH 491 · August 2024",
      bullets: [
        "Designed and coded a personal portfolio in HTML, CSS, and JavaScript, and hosted it on Namecheap.",
        "Wireframes in Figma. 2D assets in Photoshop and Illustrator. Interactive 3D in Spline, optimized for the browser.",
        "Separate mobile layout, WCAG contrast and keyboard access, and Google Analytics events for resume and case-study views.",
      ],
    },
    {
      title: "SFF PC Case V5.5",
      context: "Personal project · OnShape",
      bullets: [
        "Modeled an 11-part small-form-factor enclosure: panels, mesh, feet, and GPU/PSU support.",
        "Exported print-ready geometry for a validation build.",
      ],
    },
  ],
  skills: [
    {
      category: "CAD and product design",
      items: [
        "SolidWorks",
        "OnShape",
        "New product development",
        "GD&T",
        "DFM",
        "Hardware design",
      ],
    },
    {
      category: "Manufacturing",
      items: [
        "CNC",
        "Tooling and fixtures",
        "5S",
        "Kaizen",
        "Lean / OEE",
        "DFMEA",
        "Odoo",
        "SAP",
      ],
    },
    {
      category: "Robotics, test, and electronics",
      items: [
        "Robotics",
        "RPA",
        "Validation and testing",
        "Electronics testing",
        "Embedded",
        "Root-cause analysis",
      ],
    },
    {
      category: "Software",
      items: [
        "HTML / CSS / JavaScript",
        "C",
        "Python",
        "React",
        "TypeScript",
        "Next.js",
        "Full stack",
        "AI automation",
      ],
    },
  ],
} as const;
