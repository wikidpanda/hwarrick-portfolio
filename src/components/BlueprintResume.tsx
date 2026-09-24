import { resume } from "@/data/resume";
import { site } from "@/data/site";

function FigureLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-ui text-[10px] uppercase tracking-[0.35em] text-accent">
      {children}
    </p>
  );
}

export function BlueprintResume() {
  return (
    <article className="blueprint-paper rounded-xl border border-white/10 p-6 md:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <FigureLabel>Fig 1.0 — Resume Sheet</FigureLabel>
          <h2 className="mt-3 font-display text-4xl text-cream">{site.name}</h2>
          <p className="mt-2 font-ui text-sm text-white/80">{site.title}</p>
        </div>
        <div className="text-right font-ui text-sm leading-7 text-cream/80">
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.domain}</p>
        </div>
      </div>

      <section className="mt-8">
        <FigureLabel>Fig 1.1 — Summary</FigureLabel>
        <p className="mt-3 max-w-3xl font-serif text-base leading-8 text-white/90">
          {resume.summary}
        </p>
      </section>

      <section className="mt-10">
        <FigureLabel>Fig 1.2 — Experience</FigureLabel>
        <div className="mt-4 space-y-8">
          {resume.experience.map((job) => (
            <div
              key={`${job.company}-${job.title}`}
              className="border-l border-accent/40 pl-5"
            >
              <h3 className="font-display text-xl text-white">{job.title}</h3>
              <p className="mt-1 font-ui text-sm text-cream/75">
                {job.company} · {job.dates} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/90">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <FigureLabel>Fig 1.3 — Education</FigureLabel>
          <p className="mt-3 font-serif text-base text-white">
            {resume.education.degree}
          </p>
          <p className="mt-1 font-ui text-sm text-cream/75">
            {resume.education.school} ({resume.education.years})
          </p>
          <p className="mt-3 font-serif text-sm leading-7 text-white/85">
            {resume.education.coursework}
          </p>
        </div>

        <div>
          <FigureLabel>Fig 1.4 — Skills Matrix</FigureLabel>
          <div className="mt-3 space-y-4">
            {resume.skills.map((group) => (
              <div key={group.category}>
                <h4 className="font-ui text-sm text-white">{group.category}</h4>
                <p className="mt-1 font-serif text-sm leading-6 text-white/85">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
