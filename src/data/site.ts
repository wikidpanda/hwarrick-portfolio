export const site = {
  name: "Huston Warrick",
  title: "UI · Frontend · Backend · Engineering",
  tagline:
    "I design interfaces, build the software around them, and take hardware from CAD to a bench.",
  intro:
    "Founder of Dekanova. I work across product UI, frontend, backend, and hardware engineering — from Figma and Next.js to PCBs, enclosures, and factory samples.",
  email: "hustonwarrick@gmail.com",
  phone: "+1 (425) 221-4171",
  linkedin: "https://linkedin.com/in/huston-warrick-86457a301",
  github: "https://github.com/wikidpanda",
  domain: "hwarrick.com",
  tools: [
    "Figma",
    "Next.js",
    "TypeScript",
    "Zola",
    "SolidWorks",
    "KiCad",
    "GD&T",
  ],
} as const;

export const practices = [
  {
    id: "ui",
    label: "UI",
    detail:
      "Design systems, Figma handoff, motion, and commerce states. Dekanova’s wireframe brand and this site’s visual system.",
  },
  {
    id: "frontend",
    label: "Frontend",
    detail:
      "Zola and SCSS for the product site. Next.js, TypeScript, and Tailwind for hwarrick.com.",
  },
  {
    id: "backend",
    label: "Backend",
    detail:
      "Static generation, a Helcim checkout start, and a Cloudflare Worker for payment tokens.",
  },
  {
    id: "engineering",
    label: "Engineering",
    detail:
      "Axion and Muon NPD, PCB bring-up, enclosure CAD, and manufacturing process work.",
  },
] as const;

export const navItems = [
  { href: "/timeline", label: "Timeline" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/dossier", label: "Dossier" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Email", href: `mailto:${site.email}` },
] as const;

export const pillNavItems = [
  { href: "/projects", label: "Case Studies" },
  { href: "/#work", label: "Creative" },
  { href: "/dossier#contact", label: "Contact" },
] as const;
