import { practices } from "@/data/site";

export function PracticeBand() {
  return (
    <section id="practice" className="mt-14">
      <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
        Practice
      </p>
      <h2 className="mt-3 font-display text-3xl text-cream">How the work splits</h2>
      <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {practices.map((practice) => (
          <div key={practice.id} className="bg-charcoal px-5 py-5">
            <dt className="font-ui text-sm uppercase tracking-[0.18em] text-cream">
              {practice.label}
            </dt>
            <dd className="mt-2 font-serif text-sm leading-7 text-white/75">
              {practice.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
