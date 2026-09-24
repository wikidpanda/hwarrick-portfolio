import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

function statusLabel(status: string) {
  if (status === "in-progress") return "In progress";
  if (status === "planned") return "Planned";
  return "Published";
}

export function FeaturedWork() {
  const items = featuredProjects(4);

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream">Case studies</h2>
        </div>
        <Link
          href="/projects"
          className="font-ui text-sm text-cream/75 transition hover:text-white"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cream/25"
          >
            <div className="relative aspect-[16/10] bg-black/30">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(155,141,230,0.12),rgba(40,38,40,0.9))] font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
                  {project.flagship ? "Flagship build" : "In progress"}
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  {project.category}
                </span>
                <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  · {statusLabel(project.status)}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl text-white">
                {project.title}
              </h3>
              <p className="mt-2 font-serif text-sm leading-6 text-white/75">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
