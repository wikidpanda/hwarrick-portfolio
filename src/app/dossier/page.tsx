import { PageShell } from "@/components/PageShell";
import { DossierView } from "@/components/DossierView";

export default function DossierPage() {
  return (
    <PageShell activePath="/dossier">
      <div className="max-w-4xl">
        <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
          Dossier
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Resume & artifacts
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-white/90">
          A blueprint-style presentation for hiring managers — resume sheet,
          credential roadmap, and a linked index of case studies and contact
          channels. Use Export PDF for a print-ready version.
        </p>
      </div>

      <div className="mt-10">
        <DossierView />
      </div>
    </PageShell>
  );
}
