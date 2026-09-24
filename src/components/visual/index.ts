"use client";

import dynamic from "next/dynamic";

export const ShaderGradientBackground = dynamic(
  () =>
    import("@/components/visual/ShaderGradientBackground").then(
      (mod) => mod.ShaderGradientBackground,
    ),
  { ssr: false },
);

export const HeroWireframeScene = dynamic(
  () =>
    import("@/components/visual/HeroWireframeScene").then(
      (mod) => mod.HeroWireframeScene,
    ),
  { ssr: false },
);

export const LiquidLogoMark = dynamic(
  () =>
    import("@/components/visual/LiquidLogoMark").then((mod) => mod.LiquidLogoMark),
  { ssr: false },
);

export const AnimatedTimelineCurve = dynamic(
  () =>
    import("@/components/visual/AnimatedTimelineCurve").then(
      (mod) => mod.AnimatedTimelineCurve,
    ),
  { ssr: false },
);

export { GlassSurface } from "@/components/visual/GlassSurface";
