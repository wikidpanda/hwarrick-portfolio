import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies/types";
import { site } from "@/data/site";
import { PageShell } from "@/components/PageShell";

function statusLabel(status: CaseStudy["status"]) {
  if (status === "in-progress") return "In progress";
  if (status === "planned") return "Planned";
  return "Published";
}

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <PageShell activePath="/projects">
      <article className="max-w-3xl">
        <Link
          href="/projects"
          className="font-ui text-sm text-cream/80 underline decoration-cream/30 underline-offset-4 hover:text-white"
        >
          ← Back to projects
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
              {study.category}
            </span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
              · {statusLabel(study.status)}
            </span>
            {study.period ? (
              <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
                · {study.period}
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-3 font-serif text-lg leading-8 text-white/85">
            {study.subtitle}
          </p>
          {study.role ? (
            <p className="mt-2 font-ui text-sm text-white/65">{study.role}</p>
          ) : null}
        </header>

        {study.metrics && study.metrics.length > 0 ? (
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 px-4 py-3"
              >
                <dt className="font-ui text-[10px] uppercase tracking-[0.16em] text-cream/55">
                  {metric.label}
                </dt>
                <dd className="mt-1 font-display text-2xl text-cream">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {study.wipNote ? (
          <div className="mt-8 rounded-xl border border-purple-curve/30 bg-purple-curve/10 px-5 py-4">
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-cream/70">
              Case study in progress
            </p>
            <p className="mt-2 font-serif text-sm leading-7 text-white/85">
              {study.wipNote}
            </p>
          </div>
        ) : null}

        {study.heroImage ? (
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={study.heroImage}
              alt={study.title}
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        ) : null}

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
              Problem
            </h2>
            <p className="mt-3 font-serif text-base leading-8 text-white/90">
              {study.problem}
            </p>
          </section>

          <section>
            <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
              Approach
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/85">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
              Outcomes
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/85">
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {study.sections?.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl text-cream">{section.title}</h2>
              <div className="mt-3 space-y-3 font-serif text-sm leading-7 text-white/85">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/85">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {study.gallery && study.gallery.length > 0 ? (
            <section>
              <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
                Gallery
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {study.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-lg border border-white/10"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="h-48 w-full object-cover"
                    />
                    {image.caption ? (
                      <figcaption className="px-3 py-2 font-ui text-xs text-cream/70">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
              Tools
            </h2>
            <p className="mt-3 font-serif text-sm leading-7 text-white/85">
              {study.tools.join(" · ")}
            </p>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
                GitHub
              </h2>
              {study.repoUrl ? (
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block font-ui text-sm text-cream underline underline-offset-4 hover:text-white"
                >
                  {study.repoUrl.replace("https://", "")}
                </a>
              ) : (
                <p className="mt-3 font-serif text-sm text-white/65">
                  Repo not published yet — track creation in Fleet Manager →
                  portfolio registry.
                </p>
              )}
            </div>

            {study.timelineId ? (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
                  Timeline
                </h2>
                <Link
                  href={`/timeline#${study.timelineId}`}
                  className="mt-3 block font-ui text-sm text-cream underline underline-offset-4 hover:text-white"
                >
                  View on experience timeline →
                </Link>
              </div>
            ) : null}
          </section>

        </div>

        <p className="mt-12 font-ui text-xs text-white/45">
          Questions?{" "}
          <a href={`mailto:${site.email}`} className="text-cream/70 hover:text-white">
            {site.email}
          </a>
        </p>
      </article>
    </PageShell>
  );
}
