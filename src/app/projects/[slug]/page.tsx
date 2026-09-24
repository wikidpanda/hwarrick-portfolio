import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getAllCaseStudyIds, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return getAllCaseStudyIds().map((slug) => ({ slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectCaseStudyRoute({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}
