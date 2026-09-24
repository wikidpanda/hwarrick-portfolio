"use client";

import { useState } from "react";
import { dossierTabs, type DossierTab } from "@/data/dossier";
import { BlueprintResume } from "@/components/BlueprintResume";
import { CredentialsPanel } from "@/components/CredentialsPanel";
import { ArtifactsPanel } from "@/components/ArtifactsPanel";

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
            <span className="mr-2 text-[10px] uppercase tracking-[0.2em] opacity-70">
              {tab.figure}
            </span>
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
        {activeTab === "credentials" ? <CredentialsPanel /> : null}
        {activeTab === "artifacts" ? <ArtifactsPanel /> : null}
      </div>
    </div>
  );
}
