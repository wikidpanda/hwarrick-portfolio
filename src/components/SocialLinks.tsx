import Link from "next/link";
import { socialLinks } from "@/data/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
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
  );
}
