"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/data/timeline";
import { timelineEntries } from "@/data/timeline";

const CURVE_PATH =
  "M0 10 C209.5 10 354.5 227.5 346 447 C337.5 666.5 219.5 793 309 1019.5 C398.5 1246 570.5 1300 570.5 1300";

const MARKER_OFFSETS = [0.12, 0.48, 0.86];

function TimelineEntryCard({
  entry,
  active,
}: {
  entry: TimelineEntry;
  active: boolean;
}) {
  return (
    <article
      id={entry.id}
      data-timeline-entry={entry.id}
      className={`scroll-mt-28 border-t border-white/10 py-14 transition-opacity duration-500 md:py-20 ${
        active ? "opacity-100" : "opacity-50"
      }`}
    >
      <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
        {entry.period}
      </p>
      <p className="mt-2 font-ui text-sm text-white/65">
        {entry.company} · {entry.title}
      </p>

      <h3 className="mt-4 font-display text-3xl text-cream md:text-4xl">
        {entry.headline}
      </h3>

      <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 font-serif text-sm leading-7 text-white/90">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      {entry.body.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 max-w-2xl font-serif text-sm leading-7 text-white/75"
        >
          {paragraph}
        </p>
      ))}

      {entry.projectLinks.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {entry.projectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/15 px-3 py-1.5 font-ui text-xs text-cream/85 transition hover:border-cream/35 hover:text-white"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      ) : null}

      {(entry.logo || entry.images.length > 0) && (
        <div className="mt-8">
          {entry.logo ? (
            <Image
              src={entry.logo.src}
              alt={entry.logo.alt}
              width={80}
              height={100}
              className="mb-5 h-auto w-16 opacity-90"
            />
          ) : null}

          {entry.images.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {entry.images.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-white/10 bg-black/20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-36 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}

export function TimelineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const [activeId, setActiveId] = useState(timelineEntries[0]?.id ?? "");
  const [markerPoints, setMarkerPoints] = useState<
    { x: number; y: number; id: string }[]
  >([]);

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    if (!path || !glow) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    glow.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    glow.style.strokeDashoffset = `${length}`;

    const points = timelineEntries.map((entry, index) => {
      const point = path.getPointAtLength(length * MARKER_OFFSETS[index]);
      return { x: point.x, y: point.y, id: entry.id };
    });
    setMarkerPoints(points);

    const updateDraw = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = container.offsetHeight - viewport * 0.35;
      const scrolled = Math.min(
        Math.max(viewport * 0.25 - rect.top, 0),
        Math.max(total, 1),
      );
      const progress = scrolled / Math.max(total, 1);
      const offset = length * (1 - progress);

      path.style.strokeDashoffset = `${offset}`;
      glow.style.strokeDashoffset = `${offset}`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          const id = visible[0].target.dataset.timelineEntry;
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    containerRef.current
      ?.querySelectorAll("[data-timeline-entry]")
      .forEach((node) => observer.observe(node));

    window.addEventListener("scroll", updateDraw, { passive: true });
    window.addEventListener("resize", updateDraw);
    updateDraw();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateDraw);
      window.removeEventListener("resize", updateDraw);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="mb-10 max-w-3xl">
        <p className="font-ui text-xs uppercase tracking-[0.25em] text-cream/70">
          Timeline
        </p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
          Experience
        </h2>
        <p className="mt-4 font-serif text-base leading-7 text-white/80">
          Scroll to draw the path. Each stop links to case studies where
          available — aligned with my resume.
        </p>
      </div>

      <div className="relative md:pl-28">
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-20 md:block">
          <svg
            viewBox="0 0 573.508 1309.54"
            className="sticky top-28 h-[calc(100vh-8rem)] w-full"
            fill="none"
            aria-hidden
          >
            <path
              ref={glowRef}
              d={CURVE_PATH}
              stroke="rgba(155, 141, 230, 0.15)"
              strokeWidth="34"
              strokeLinecap="round"
            />
            <path
              ref={pathRef}
              d={CURVE_PATH}
              stroke="url(#timelineCurveGradient)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {markerPoints.map((point) => (
              <circle
                key={point.id}
                cx={point.x}
                cy={point.y}
                r={activeId === point.id ? 10 : 7}
                fill={activeId === point.id ? "#d6d1cb" : "#282628"}
                stroke={activeId === point.id ? "#9b8de6" : "#d6d1cb"}
                strokeWidth="2"
                className="transition-all duration-300"
              />
            ))}
            <defs>
              <linearGradient
                id="timelineCurveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d6d1cb" stopOpacity="0.35" />
                <stop offset="45%" stopColor="#9b8de6" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ba4d4d" stopOpacity="0.75" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-3xl">
          {timelineEntries.map((entry) => (
            <TimelineEntryCard
              key={entry.id}
              entry={entry}
              active={activeId === entry.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
