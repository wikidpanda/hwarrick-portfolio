"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GlassSurface } from "@/components/visual";
import {
  categoryLabels,
  projectsByCategory,
  type ProjectCategory,
} from "@/data/projects";

const categories: ProjectCategory[] = ["product", "engineering", "creative"];
const ARC_PATH = "M30 190 C 80 40, 140 40, 190 30";

function statusLabel(status: string) {
  if (status === "in-progress") return "In progress";
  if (status === "planned") return "Planned";
  return "Published";
}

export function CategoryExplorer() {
  const [active, setActive] = useState<ProjectCategory>("product");
  const items = projectsByCategory(active).slice(0, 3);

  return (
    <GlassSurface className="mt-10 rounded-[28px] p-6 md:p-8">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.35em] text-cream/70">
            Explore
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream">
            Work by focus
          </h2>
          <p className="mt-3 font-serif text-sm leading-7 text-white/80">
            Arc navigation from the earlier UX / Product / Graphic concept,
            remapped to the work you&apos;re building now.
          </p>

          <div className="relative mt-10 h-56 w-full max-w-[220px]">
            <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden>
              <path
                d={ARC_PATH}
                fill="none"
                stroke="rgba(186, 77, 77, 0.18)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                key={active}
                d={ARC_PATH}
                fill="none"
                stroke="#ba4d4d"
                strokeWidth="3"
                strokeLinecap="round"
                className="arc-line"
              />
              {categories.map((category, index) => {
                const positions = [
                  { cx: 48, cy: 162 },
                  { cx: 110, cy: 72 },
                  { cx: 178, cy: 42 },
                ];
                const { cx, cy } = positions[index];
                const isActive = active === category;

                return (
                  <circle
                    key={category}
                    cx={cx}
                    cy={cy}
                    r={isActive ? 8 : 6}
                    fill={isActive ? "#d6d1cb" : "transparent"}
                    stroke="#d6d1cb"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0">
              {categories.map((category, index) => {
                const positions = [
                  "left-0 top-[58%]",
                  "left-[34%] top-[8%]",
                  "right-0 top-0",
                ];

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    className={`absolute ${positions[index]} font-display text-xl transition md:text-2xl ${
                      active === category
                        ? "text-cream underline decoration-accent decoration-2 underline-offset-8"
                        : "text-white/45 hover:text-white/75"
                    }`}
                  >
                    {categoryLabels[category].label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 font-serif text-sm leading-6 text-white/75">
            {categoryLabels[active].description}
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="glass-link group grid overflow-hidden rounded-xl liquid-glass-subtle md:grid-cols-[180px_1fr]"
            >
              <div className="relative min-h-[140px] bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full min-h-[140px] items-center justify-center bg-[linear-gradient(135deg,rgba(155,141,230,0.18),rgba(186,77,77,0.12))] px-4 text-center font-ui text-xs uppercase tracking-[0.25em] text-cream/80">
                    {project.flagship ? "Flagship build" : "Preview coming"}
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.2em] text-cream/70">
                    {statusLabel(project.status)}
                  </span>
                  {project.flagship ? (
                    <span className="rounded-full bg-accent/20 px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.2em] text-cream">
                      Flagship
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {project.title}
                </h3>
                <p className="mt-2 font-serif text-sm leading-6 text-cream/85">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </GlassSurface>
  );
}
