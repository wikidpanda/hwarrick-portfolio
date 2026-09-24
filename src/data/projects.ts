export type ProjectCategory = "product" | "engineering" | "creative";

export type ProjectStatus = "published" | "in-progress" | "planned";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  href: string;
  image?: string;
  featured?: boolean;
  flagship?: boolean;
};

/** Card index — full content lives in src/data/case-studies/ */
export const projects: Project[] = [
  {
    id: "dekanova",
    title: "Dekanova",
    subtitle: "Founder. Mouse, keypad, brand, Discord, and the storefront.",
    category: "product",
    status: "in-progress",
    href: "/projects/dekanova",
    image: "/images/dekanova-case-study.png",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "hwarrick.com Portfolio",
    subtitle: "This site. Figma, Next.js, and the case-study system.",
    category: "creative",
    status: "published",
    href: "/projects/portfolio-website",
    image: "/images/portfolio-design.png",
    featured: true,
  },
  {
    id: "senior-design-process",
    title: "Portfolio Design Process",
    subtitle: "Wireframes, Figma, and visual system development.",
    category: "creative",
    status: "published",
    href: "/projects/senior-design-process",
    image: "/images/design-process.jpg",
    featured: true,
  },
  {
    id: "mini-pc-case",
    title: "SFF PC Case V5.5 Mini",
    subtitle: "Multi-part enclosure CAD — 11 printable components.",
    category: "engineering",
    status: "published",
    href: "/projects/mini-pc-case",
    image: "/images/enclosure-wireframe.png",
    featured: true,
  },
  {
    id: "custom-camera-body",
    title: "Custom Camera Body",
    subtitle: "Flagship surfacing and mechanism study.",
    category: "product",
    status: "in-progress",
    href: "/projects/custom-camera-body",
    featured: true,
    flagship: true,
  },
  {
    id: "custom-lamp",
    title: "Custom Lamp Series",
    subtitle: "Manufacturable lamp forms — printable or mold-ready.",
    category: "product",
    status: "in-progress",
    href: "/projects/custom-lamp",
    featured: true,
    flagship: true,
  },
  {
    id: "mouse-enclosure",
    title: "Custom Mouse Enclosure",
    subtitle: "Peripheral enclosure CAD from the Dekanova era.",
    category: "engineering",
    status: "published",
    href: "/projects/mouse-enclosure",
    image: "/images/mouse-wireframe.png",
    featured: true,
  },
  {
    id: "pcb-prototype",
    title: "PCB Prototype Bring-up",
    subtitle: "Layout through assembled board validation.",
    category: "engineering",
    status: "published",
    href: "/projects/pcb-prototype",
    image: "/images/pcb-photo.png",
    featured: true,
  },
];

export const categoryLabels: Record<
  ProjectCategory,
  { label: string; description: string }
> = {
  product: {
    label: "Product",
    description: "NPD from spec through brand, interface, and manufacture.",
  },
  engineering: {
    label: "Engineering",
    description: "CAD, PCBs, robotics, and hardware validation.",
  },
  creative: {
    label: "Creative",
    description: "UI systems, frontend, and the sites that present the work.",
  },
};

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}

export function featuredProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit);
}
