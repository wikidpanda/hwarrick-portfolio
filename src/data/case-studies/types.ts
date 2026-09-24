import type { ProjectCategory, ProjectStatus } from "@/data/projects";

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  period?: string;
  role?: string;
  heroImage?: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  tools: string[];
  /** Target GitHub repo — null means not created yet */
  repoUrl: string | null;
  /** Local folder with CAD / source files */
  localPath?: string;
  timelineId?: string;
  metrics?: CaseStudyMetric[];
  gallery?: CaseStudyImage[];
  sections?: CaseStudySection[];
  nextSteps?: string[];
  wipNote?: string;
};
