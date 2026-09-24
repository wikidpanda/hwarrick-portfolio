import { credentials } from "@/data/dossier";

export function CredentialsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-ui text-[10px] uppercase tracking-[0.35em] text-accent">
          Fig 2.0 — Credential Roadmap
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream">
          Certifications in progress
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-sm leading-7 text-white/85">
          Pulled from your portfolio strategy doc — prioritized for design-engineer
          hiring signal without overcommitting while flagship projects are in flight.
        </p>
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
