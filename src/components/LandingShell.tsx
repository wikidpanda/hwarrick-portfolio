import Link from "next/link";
import { navItems, pillNavItems, site } from "@/data/site";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";

type LandingShellProps = {
  children: React.ReactNode;
};

export function LandingShell({ children }: LandingShellProps) {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-8">
          <Link href="/" className="font-display text-2xl text-cream">
            {site.name}
          </Link>

          <nav aria-label="Quick links" className="hidden gap-2 md:flex">
            {pillNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-4 py-2 font-ui text-sm text-cream/85 transition hover:border-cream/30 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-[200px_1fr] md:px-8">
        <aside className="hidden md:block">
          <p className="font-ui text-sm text-white/70">{site.title}</p>

          <nav aria-label="Primary" className="mt-8">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-xl text-white/90 transition hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="mt-10 flex-col items-start gap-3" />
        </aside>

        <main>
          {children}
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
