import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

function statusLabel(status: Project["status"]) {
  if (status === "in-progress") return "In progress";
  if (status === "planned") return "Planned";
  return "Published";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="glass-link group block overflow-hidden rounded-xl liquid-glass-subtle"
    >
      {project.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,rgba(155,141,230,0.18),rgba(186,77,77,0.12))] px-6 text-center">
          <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/80">
            {project.flagship ? "Flagship build in progress" : "Preview coming soon"}
          </p>
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/70">
            {project.category}
          </p>
          <span className="rounded-full border border-white/10 px-2 py-0.5 font-ui text-[10px] uppercase tracking-[0.15em] text-cream/70">
            {statusLabel(project.status)}
          </span>
          {project.flagship ? (
            <span className="rounded-full bg-accent/20 px-2 py-0.5 font-ui text-[10px] uppercase tracking-[0.15em] text-cream">
              Flagship
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 font-display text-2xl text-white">{project.title}</h3>
        <p className="mt-2 font-serif text-sm leading-6 text-cream/90">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
