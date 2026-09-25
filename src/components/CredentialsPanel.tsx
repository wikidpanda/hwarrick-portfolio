import Link from "next/link";
import { credentials } from "@/data/dossier";
import { projects } from "@/data/projects";

export function CredentialsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-cream">
          In progress
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-sm leading-7 text-white/85">
          Credentials and projects that are not ready to lead the site.
        </p>
      </div>

      <div>
        <h3 className="font-ui text-xs uppercase tracking-[0.2em] text-cream/60">
          Projects
        </h3>
        <ul className="mt-3 space-y-2">
          {projects
            .filter((project) => project.status === "planned")
            .map((project) => (
              <li key={project.id}>
                <Link
                  href={project.href}
                  className="font-serif text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:text-white"
                >
                  {project.title}
                </Link>
                <span className="font-serif text-sm text-white/60">
                  {" "}
                  — {project.subtitle}
                </span>
              </li>
            ))}
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {credentials.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-black/20 p-5"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-cream/60">
              {item.status}
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-3 font-serif text-sm leading-6 text-white/80">
              {item.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
