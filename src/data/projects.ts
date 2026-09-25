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
    title: "hwarrick.com",
    subtitle: "Senior project. About page, arc navigation, and the case studies.",
    category: "creative",
    status: "published",
    href: "/projects/senior-design-process",
    image: "/images/about-layout.png",
    featured: true,
  },
  {
    id: "mini-pc-case",
    title: "SFF PC Case V5.5 Mini",
    subtitle: "Personal project. Multi-part enclosure in OnShape.",
    category: "engineering",
    status: "published",
    href: "/projects/mini-pc-case",
    featured: true,
  },
  {
    id: "custom-camera-body",
    title: "Custom Camera Body",
    subtitle: "Surfacing and mechanism study. Not on the main list yet.",
    category: "product",
    status: "planned",
    href: "/projects/custom-camera-body",
    featured: false,
  },
  {
    id: "custom-lamp",
    title: "Custom Lamp Series",
    subtitle: "Lamp forms. Not on the main list yet.",
    category: "product",
    status: "planned",
    href: "/projects/custom-lamp",
    featured: false,
  },
  {
    id: "mouse-enclosure",
    title: "Axion",
    subtitle: "55 g mouse. PAW3399, Omron switches, SolidWorks shell.",
    category: "engineering",
    status: "published",
    href: "/projects/mouse-enclosure",
    image: "/images/mouse-wireframe.png",
    featured: true,
  },
  {
    id: "pcb-prototype",
    title: "Axion and Muon boards",
    subtitle: "Sensor, switches, and the keypad PCB, through bench bring-up.",
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
    description: "SolidWorks, OnShape, boards, and the hardware that had to be built.",
  },
  creative: {
    label: "UX",
    description: "The site itself: layout, case studies, and the interface.",
  },
};

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}

export function featuredProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit);
}
