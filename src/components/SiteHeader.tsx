import Link from "next/link";
import { navItems, site } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";

type SiteHeaderProps = {
  activePath?: string;
};

export function SiteHeader({ activePath = "/" }: SiteHeaderProps) {
  return (
    <header className="relative z-20 flex flex-col gap-6 px-6 pt-10 md:px-10 md:pt-12">
      <div>
        <Link href="/">
          <h1 className="font-display text-3xl text-cream transition-colors hover:text-white md:text-4xl">
            {site.name}
          </h1>
        </Link>
        <p className="mt-2 font-ui text-sm text-white/75">{site.title}</p>
      </div>

      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activePath === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-display text-xl transition md:text-2xl ${
                    isActive
                      ? "text-cream underline decoration-cream/40 underline-offset-8"
                      : "text-white/90 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SocialLinks className="mt-4 flex-col items-start gap-3" />
    </header>
  );
}
