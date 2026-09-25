"use client";

import { useState } from "react";
import { dossierTabs, type DossierTab } from "@/data/dossier";
import { ArtifactsPanel } from "@/components/ArtifactsPanel";
import { BlueprintResume } from "@/components/BlueprintResume";
import { CredentialsPanel } from "@/components/CredentialsPanel";

export function DossierView() {
  const [activeTab, setActiveTab] = useState<DossierTab>("resume");

  return (
    <div>
      <div className="no-print flex flex-wrap gap-3">
        {dossierTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`glass-link rounded-full border px-4 py-2 font-ui text-sm transition ${
              activeTab === tab.id
                ? "border-cream bg-cream text-charcoal"
                : "liquid-glass-subtle border-white/15 text-cream hover:border-cream/40"
            }`}
          >
            {tab.label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => window.print()}
          className="glass-link ml-auto rounded-full liquid-glass-pill px-4 py-2 font-ui text-sm text-cream"
        >
          Export PDF
        </button>
      </div>

      <div className="print-sheet mt-8 rounded-[28px] liquid-glass p-6 md:p-10">
        {activeTab === "resume" ? <BlueprintResume /> : null}
        {activeTab === "wip" ? <CredentialsPanel /> : null}
        {activeTab === "artifacts" ? <ArtifactsPanel /> : null}
      </div>
    </div>
  );
}
