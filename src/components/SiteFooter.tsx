import Link from "next/link";
import { site, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-cream">{site.name}</p>
          <p className="mt-1 font-ui text-sm text-white/70">{site.title}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noreferrer"}
              className="font-ui text-sm text-cream/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-6 font-ui text-xs text-white/45">
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </p>
    </footer>
  );
}
