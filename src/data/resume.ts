export const resume = {
  summary:
    "Engineer and founder who ships across UI, frontend, backend, and hardware. Background spans Dekanova (open-source peripherals), manufacturing process work, and robotics field support.",
  education: {
    degree: "Bachelor of Science in Manufacturing Technology",
    school: "Eastern Washington University, Cheney, WA",
    years: "2019–2024",
    coursework:
      "Six Sigma Principles, Lean Manufacturing, CNC Programming & Optimization, GD&T, Robotic Process Automation (RPA), ERP Systems",
  },
  experience: [
    {
      title: "Robotics Field Engineer — Vulcan Stow System",
      company: "TEKsystems (Contract, Amazon Robotics)",
      dates: "May 2026 – Present",
      location: "Spokane, WA",
      bullets: [
        "Embedded process-improvement engineer on Amazon's Vulcan Stow robotic system.",
        "Conducted root-cause analysis and factorial process studies on live robotic systems.",
        "Built process monitoring dashboards for cycle success, throughput, and downtime.",
      ],
    },
    {
      title: "Manufacturing Engineer",
      company: "Power Handling Inc.",
      dates: "March 2025 – May 2026",
      location: "Post Falls, ID",
      bullets: [
        "Led a data-driven process optimization initiative that improved OEE by 37%.",
        "Designed controlled process trials for new product introductions.",
        "Led PDR/CDR reviews with DFM analysis and process-capability assessment.",
      ],
    },
    {
      title: "Lead Engineering Technician",
      company: "Power Handling Inc.",
      dates: "October 2024 – March 2025",
      location: "Post Falls, ID",
      bullets: [
        "Conducted DFMEA to identify failure modes and validate corrective actions.",
        "Designed test fixtures for electrical and mechanical validation.",
        "Prototyped assemblies and tooling using CAD/CAM and 3D printing.",
      ],
    },
    {
      title: "Founder",
      company: "Dekanova LLC",
      dates: "September 2021 – 2025",
      location: "Spokane, WA",
      bullets: [
        "Founded the company and defined Axion (PAW3399 mouse) and Muon (osu! keypad) through sample production.",
        "Designed the brand and built the Zola storefront; started Helcim checkout and a Cloudflare Worker.",
        "Ran the public Discord as moon — 426 posts in a 3,153-message export — and coordinated overseas suppliers on DFM.",
      ],
    },
  ],
  skills: [
    {
      category: "Design & Programming",
      items: [
        "CNC Programming",
        "CAD Design (2D & 3D)",
        "Drafting",
        "UI/UX",
        "TypeScript / Next.js",
        "Photography",
      ],
    },
    {
      category: "Manufacturing & Machining",
      items: [
        "Manual and CNC Machining",
        "SolidWorks CAM + DFM",
        "Welding and Soldering",
        "Injection Molding",
        "GD&T",
      ],
    },
    {
      category: "Operational & Compliance",
      items: [
        "OSHA compliance",
        "QA/QC",
        "Lean/Six Sigma",
        "SAP HANA ERP",
        "Digital Marketing",
      ],
    },
  ],
} as const;
