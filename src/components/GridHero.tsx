import Link from "next/link";
import { site } from "@/data/site";
import { ShaderGradientBackground } from "@/components/visual";
import { SocialLinks } from "@/components/SocialLinks";

export function GridHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10">
      <ShaderGradientBackground className="absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-cream/70">
          {site.title}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-cream md:text-5xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-white/85">
          {site.intro}
        </p>
        <p className="mt-3 max-w-2xl font-serif text-sm leading-7 text-white/65">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-2.5 font-ui text-sm text-white transition hover:bg-accent/90"
          >
            Case studies
          </Link>
          <Link
            href="/timeline"
            className="rounded-full border border-white/15 px-5 py-2.5 font-ui text-sm text-cream transition hover:border-cream/35"
          >
            Timeline
          </Link>
          <Link
            href="/dossier"
            className="rounded-full border border-white/15 px-5 py-2.5 font-ui text-sm text-cream transition hover:border-cream/35"
          >
            Resume
          </Link>
        </div>

        <SocialLinks className="mt-8 border-t border-white/10 pt-6" />
      </div>
    </section>
  );
}
