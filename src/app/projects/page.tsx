import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const published = projects.filter((p) => p.status === "published");
  const inProgress = projects.filter((p) => p.status !== "published");

  return (
    <PageShell activePath="/projects">
      <div className="max-w-4xl">
        <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
          Case studies
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-white/80">
          Full write-ups live locally under{" "}
          <code className="text-cream/90">src/data/case-studies/</code>. GitHub
          repos are tracked in the Fleet Manager portfolio registry — create
          them as you publish each project.
        </p>
      </div>

      <section className="mt-10">
        <h3 className="font-display text-2xl text-cream">Published</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {published.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-2xl text-cream">In progress</h3>
        <p className="mt-2 font-serif text-sm text-white/65">
          Dekanova has a written baseline. Archive photos are the next pass.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {inProgress.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
