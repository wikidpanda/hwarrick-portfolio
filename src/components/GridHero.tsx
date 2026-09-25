import Link from "next/link";
import { site } from "@/data/site";

export function GridHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-80" />
      <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr] md:px-10 md:py-16">
        <div>
          <h1 className="max-w-xl font-display text-4xl leading-[1.05] text-cream md:text-6xl">
            Hi, I’m Huston.
          </h1>
          <p className="mt-4 max-w-lg font-display text-3xl leading-tight text-cream/90 md:text-4xl">
            Manufacturing, product, and the interface around them.
          </p>
        </div>
        <div className="relative border-l border-white/15 pl-6 md:pl-8">
          <span className="absolute -left-px -top-3 h-6 w-6 border-l-2 border-t-2 border-accent" />
          <span className="absolute -bottom-3 -left-px h-6 w-6 border-b-2 border-l-2 border-accent" />
          <p className="font-serif text-base leading-7 text-white/85">
            {site.intro}
          </p>
          <p className="mt-4 font-serif text-sm leading-7 text-white/65">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-4 py-2 font-ui text-sm text-white"
            >
              Case studies
            </Link>
            <Link
              href="/dossier"
              className="rounded-full border border-white/20 px-4 py-2 font-ui text-sm text-cream"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
