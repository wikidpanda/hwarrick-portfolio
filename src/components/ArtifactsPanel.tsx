import Link from "next/link";
import { artifacts, contactChannels } from "@/data/dossier";
import { site } from "@/data/site";

export function ArtifactsPanel() {
  return (
    <div className="space-y-10">
      <div>
        <p className="font-ui text-[10px] uppercase tracking-[0.35em] text-accent">
          Fig 3.0 — Artifact Index
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream">
          Things worth opening
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-sm leading-7 text-white/85">
          A dossier-style index for resume-adjacent material — case studies, CAD
          samples, timeline, and contact channels.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {artifacts.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target={"external" in item && item.external ? "_blank" : undefined}
            rel={"external" in item && item.external ? "noreferrer" : undefined}
            className="rounded-xl border border-white/10 bg-black/20 p-5 transition hover:border-cream/30"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-cream/60">
              {item.tag}
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-2 font-serif text-sm leading-6 text-white/80">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      <div id="contact" className="rounded-xl border border-accent/20 bg-accent/5 p-6">
        <p className="font-ui text-[10px] uppercase tracking-[0.35em] text-accent">
          Fig 3.1 — Contact Block
        </p>
        <h3 className="mt-3 font-display text-2xl text-cream">Get in touch</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 transition hover:border-cream/30"
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60">
                {channel.label}
              </p>
              <p className="mt-2 font-serif text-sm text-white">{channel.value}</p>
            </a>
          ))}
        </div>
        <p className="mt-4 font-ui text-sm text-white/70">
          LinkedIn:{" "}
          <a href={site.linkedin} className="text-cream underline underline-offset-4">
            {site.linkedin.replace("https://", "")}
          </a>
        </p>
      </div>
    </div>
  );
}
