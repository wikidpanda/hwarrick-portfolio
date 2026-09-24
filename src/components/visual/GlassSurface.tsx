import type { ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  className?: string;
  variant?: "panel" | "pill" | "subtle";
};

export function GlassSurface({
  children,
  className = "",
  variant = "panel",
}: GlassSurfaceProps) {
  const variantClass =
    variant === "pill"
      ? "liquid-glass-pill"
      : variant === "subtle"
        ? "liquid-glass-subtle"
        : "liquid-glass";

  return <div className={`${variantClass} ${className}`}>{children}</div>;
}
