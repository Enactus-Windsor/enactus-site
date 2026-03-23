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
      className="mt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex min-w-full gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className="group min-w-[260px] max-w-[320px] flex-shrink-0 rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col items-center p-5 text-center sm:p-6">
                <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image
                    src={bannerSrc}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain p-2.5"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-4 text-sm text-slate-700">
                  {project.summary}
                </p>
                <span className="mt-4 text-sm font-semibold text-yellow-600 group-hover:text-yellow-500">
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
