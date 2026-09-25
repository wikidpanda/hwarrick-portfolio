import Image from "next/image";
import Link from "next/link";
import type { TimelineEntry } from "@/data/timeline";
import { timelineEntries } from "@/data/timeline";

function TimelineEntryCard({ entry }: { entry: TimelineEntry }) {
  return (
    <article id={entry.id} className="scroll-mt-28 border-t border-white/10 py-14">
      <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
        {entry.period}
      </p>
      <p className="mt-2 font-ui text-sm text-white/65">
        {entry.company} · {entry.title}
      </p>

      <h3 className="mt-4 font-display text-3xl text-cream md:text-4xl">
        {entry.headline}
      </h3>

      <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/90">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      {entry.body.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 max-w-2xl font-serif text-sm leading-7 text-white/75"
        >
          {paragraph}
        </p>
      ))}

      {entry.projectLinks.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {entry.projectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/15 px-3 py-1.5 font-ui text-xs text-cream/85 transition hover:border-cream/35 hover:text-white"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      ) : null}

      {entry.logo || entry.images.length > 0 || entry.photoNote ? (
        <div className="mt-8">
          {entry.logo ? (
            <Image
              src={entry.logo.src}
              alt={entry.logo.alt}
              width={80}
              height={100}
              className="mb-5 h-auto w-16 opacity-90"
            />
          ) : null}

          {entry.photoNote && entry.images.length === 0 ? (
            <p className="max-w-md border border-dashed border-white/20 px-4 py-6 font-ui text-xs leading-5 text-cream/55">
              {entry.photoNote}
            </p>
          ) : null}

          {entry.images.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {entry.images.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-white/10 bg-black/20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-36 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function TimelineExperience() {
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
          Timeline
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Experience
        </h2>
        <p className="mt-4 font-serif text-base leading-7 text-white/80">
          The same roles as the resume. Case studies are linked where there is a page.
        </p>
      </div>

      <div className="max-w-3xl">
        {timelineEntries.map((entry) => (
          <TimelineEntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
