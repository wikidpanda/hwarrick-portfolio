import { resume } from "@/data/resume";
import { site } from "@/data/site";

export function BlueprintResume() {
  return (
    <article className="resume-sheet w-full rounded-sm px-6 py-8 text-neutral-900 md:px-12 md:py-12">
        <header className="border-b border-neutral-300 pb-5">
          <h2 className="font-ui text-3xl font-medium tracking-tight">
            {site.name}
          </h2>
          <p className="mt-2 max-w-xl font-ui text-sm leading-6 text-neutral-700">
            {resume.headline}
          </p>
          <p className="mt-3 font-ui text-xs leading-5 text-neutral-600">
            {site.phone} · {site.email} · {site.domain} · Spokane, WA
          </p>
        </header>

        <section className="mt-6">
          <h3 className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Summary
          </h3>
          <p className="mt-2 max-w-3xl font-ui text-sm leading-6 text-neutral-800">
            {resume.summary}
          </p>
        </section>

        <section className="mt-7">
          <h3 className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Experience
          </h3>
          <div className="mt-3 space-y-5">
            {resume.experience.map((job) => (
              <div key={`${job.company}-${job.title}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-ui text-sm font-medium text-neutral-950">
                    {job.title}
                  </h4>
                  <p className="font-ui text-xs text-neutral-500">{job.dates}</p>
                </div>
                <p className="font-ui text-xs text-neutral-600">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 font-ui text-sm leading-6 text-neutral-800">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h3 className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Selected projects
          </h3>
          <div className="mt-3 space-y-5">
            {resume.projects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-ui text-sm font-medium text-neutral-950">
                    {project.title}
                  </h4>
                  <p className="font-ui text-xs text-neutral-500">{project.context}</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-4 font-ui text-sm leading-6 text-neutral-800">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h3 className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Education
          </h3>
          <div className="mt-3 space-y-3">
            {resume.education.map((school) => (
              <div key={school.degree}>
                <p className="font-ui text-sm font-medium text-neutral-950">
                  {school.degree}
                </p>
                <p className="font-ui text-xs text-neutral-600">
                  {school.school} · {school.years}
                </p>
                {school.coursework ? (
                  <p className="mt-1 font-ui text-xs leading-5 text-neutral-700">
                    {school.coursework}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h3 className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Skills
          </h3>
          <dl className="mt-3 grid gap-4 sm:grid-cols-2">
            {resume.skills.map((group) => (
              <div key={group.category}>
                <dt className="font-ui text-xs font-medium text-neutral-950">
                  {group.category}
                </dt>
                <dd className="mt-1 font-ui text-xs leading-5 text-neutral-700">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>
    </article>
  );
}
