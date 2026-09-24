import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  activePath: string;
  children: ReactNode;
};

export function PageShell({ activePath, children }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-charcoal text-white">
      <div className="relative z-10 mx-auto grid max-w-6xl md:grid-cols-[280px_1fr]">
        <SiteHeader activePath={activePath} />
        <main className="px-6 pb-16 pt-6 md:px-10 md:pt-12">
          {children}
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
