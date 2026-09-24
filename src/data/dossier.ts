import { site } from "@/data/site";

export type DossierTab = "resume" | "credentials" | "artifacts";

export const dossierTabs: { id: DossierTab; label: string; figure: string }[] = [
  { id: "resume", label: "Resume", figure: "FIG 1.0" },
  { id: "credentials", label: "Credentials", figure: "FIG 2.0" },
  { id: "artifacts", label: "Artifacts", figure: "FIG 3.0" },
];

export const credentials = [
  {
    title: "CSWP",
    status: "Target",
    note: "Certified SolidWorks Professional — top priority cert for design-engineer roles.",
  },
  {
    title: "CSWP Surfacing",
    status: "Stretch",
    note: "Advanced surfacing specialty to reinforce the camera-body flagship work.",
  },
  {
    title: "GDTP Technologist",
    status: "Stretch",
    note: "ASME Y14.5 GD&T literacy signal that travels across tools and companies.",
  },
] as const;

export const artifacts = [
  {
    title: "Timeline",
    description: "Scroll-driven experience aligned with resume roles.",
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
