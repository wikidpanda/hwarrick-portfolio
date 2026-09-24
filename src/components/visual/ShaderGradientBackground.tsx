"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

type ShaderGradientBackgroundProps = {
  className?: string;
};

export function ShaderGradientBackground({
  className = "",
}: ShaderGradientBackgroundProps) {
  return (
    <div className={`pointer-events-none relative h-full w-full overflow-hidden ${className}`} aria-hidden>
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        pixelDensity={1.25}
        fov={45}
      >
        <ShaderGradient
          control="props"
          animate="on"
          type="waterPlane"
          color1="#141416"
          color2="#9b8de6"
          color3="#ba4d4d"
          uSpeed={0.22}
          uStrength={1.8}
          uDensity={1.1}
          uFrequency={5.5}
          brightness={0.85}
          cDistance={4.2}
          cPolarAngle={88}
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,141,230,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(186,77,77,0.14),transparent_38%),linear-gradient(180deg,rgba(40,38,40,0.15),rgba(40,38,40,0.82))]" />
    </div>
  );
}
