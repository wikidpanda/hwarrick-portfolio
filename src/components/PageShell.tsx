import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  activePath: string;
  children: ReactNode;
  wide?: boolean;
};

export function PageShell({ activePath, children, wide = false }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-charcoal text-white">
      <div
        className={`relative z-10 mx-auto grid md:grid-cols-[220px_1fr] ${
          wide ? "max-w-[88rem]" : "max-w-6xl"
        }`}
      >
        <SiteHeader activePath={activePath} />
        <main className="px-6 pb-16 pt-6 md:px-10 md:pt-12">
          {children}
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
