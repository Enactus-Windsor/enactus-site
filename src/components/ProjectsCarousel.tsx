// src/components/ProjectsCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import type { EnactusProject } from "@/types/enactus";
import enactusyellow from "@/assets/enactusyellow.png";

interface ProjectsCarouselProps {
  projects: EnactusProject[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let timer: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (timer) return;
      timer = setInterval(() => {
        const el = scrollRef.current;
        if (!el) return;

        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) return;

        if (el.scrollLeft >= maxScroll - 1) {
          // loop back to start
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 1; 
        }
      }, 20); 
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    if (!isHovered) start();
    else stop();

    return () => {
      stop();
    };
  }, [isHovered]);

  return (
    <div
      className="mt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-4 pb-2 overflow-x-auto min-w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => {
          const rawBanner = project.banner;
          const bannerSrc: StaticImageData | string =
            !rawBanner ||
            (typeof rawBanner === "string" && rawBanner.trim() === "")
              ? (enactusyellow as StaticImageData)
              : rawBanner;

          return (
            <Link
              key={project.name}
              href="/our-projects"
              className="group min-w-[220px] max-w-[260px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
            >
              <div className="p-4 flex flex-col items-center text-center">
                <div className="relative h-16 w-16 mb-3 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                  <Image
                    src={bannerSrc}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-slate-700 line-clamp-3">
                  {project.summary}
                </p>
                <span className="mt-3 text-xs font-semibold text-yellow-600 group-hover:text-yellow-500">
                  View on Our Projects →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
