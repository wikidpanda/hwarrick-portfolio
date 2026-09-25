import { site } from "@/data/site";

export type DossierTab = "resume" | "wip" | "artifacts";

export const dossierTabs: { id: DossierTab; label: string }[] = [
  { id: "resume", label: "Resume" },
  { id: "wip", label: "WIP" },
  { id: "artifacts", label: "Index" },
];

export const credentials = [
  {
    title: "CSWP",
    status: "Target",
    note: "Not earned yet.",
  },
  {
    title: "CSWP Surfacing",
    status: "Stretch",
    note: "Surfacing specialty after CSWP. Not a current credential.",
  },
  {
    title: "GDTP Technologist",
    status: "Stretch",
    note: "ASME Y14.5 GD&T literacy signal that travels across tools and companies.",
  },
  {
    title: "LSSGB",
    status: "In progress",
    note: "Lean Six Sigma Green Belt. Self-paced study, not listed as earned.",
  },
] as const;

export const artifacts = [
  {
    title: "Timeline",
    description: "Roles in order, matching the resume.",
    href: "/timeline",
    tag: "Experience",
  },
  {
    title: "Portfolio Website",
    description: "Senior project case study — design through deployment.",
    href: "/projects/portfolio-website",
    tag: "Case Study",
  },
  {
    title: "CAD Portfolio",
    description: "Wireframes, PCB work, and hardware visuals.",
    href: "/portfolio",
    tag: "Work Samples",
  },
  {
    title: "GitHub",
    description: "Code repositories and project READMEs.",
    href: site.github,
    tag: "External",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Professional profile and role history.",
    href: site.linkedin,
    tag: "External",
    external: true,
  },
] as const;

export const contactChannels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\D/g, "")}` },
  { label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
  { label: "LinkedIn", value: "Profile", href: site.linkedin },
] as const;
