"use client";

import { useEffect, useRef } from "react";

const CURVE_PATH =
  "M0 10 C209.5 10 354.5 227.5 346 447 C337.5 666.5 219.5 793 309 1019.5 C398.5 1246 570.5 1300 570.5 1300";

type AnimatedTimelineCurveProps = {
  className?: string;
};

export function AnimatedTimelineCurve({
  className = "",
}: AnimatedTimelineCurveProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    if (!path || !glow) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    glow.style.strokeDasharray = `${length}`;
    glow.style.strokeDashoffset = `${length}`;

    const timeout = window.setTimeout(() => {
      path.style.transition = "stroke-dashoffset 2.8s cubic-bezier(0.4, 0, 0.2, 1)";
      glow.style.transition = "stroke-dashoffset 3.2s cubic-bezier(0.4, 0, 0.2, 1)";
      path.style.strokeDashoffset = "0";
      glow.style.strokeDashoffset = "0";
    }, 180);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 573.508 1309.54"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={glowRef}
          d={CURVE_PATH}
          stroke="rgba(155, 141, 230, 0.22)"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          d={CURVE_PATH}
          stroke="url(#curveGradient)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6d1cb" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#9b8de6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ba4d4d" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
