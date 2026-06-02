"use client";

import { useEffect, useId, useState } from "react";
import Image, { StaticImageData } from "next/image";
import type { EnactusProject } from "@/types/enactus";

import enactusYellow from "@/assets/enactusyellow.png";

interface ProjectCardProps {
  project: EnactusProject;
  index?: number;
  defaultOpen?: boolean;
  anchorId?: string;
}

const DEFAULT_LOGO: StaticImageData = enactusYellow;

export default function ProjectCard({
  project,
  index,
  defaultOpen = false,
  anchorId,
}: ProjectCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();
  const displayName = project.name.trim();

  useEffect(() => {
    if (!anchorId) return;

    const openFromHash = () => {
      if (window.location.hash === `#${anchorId}`) {
        setOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => window.removeEventListener("hashchange", openFromHash);
  }, [anchorId]);

  const rawBanner = project.banner;
  const bannerSrc =
    !rawBanner || (typeof rawBanner === "string" && rawBanner.trim() === "")
      ? DEFAULT_LOGO
      : rawBanner;

  return (
    <article
      id={anchorId}
      className="scroll-mt-28 border border-gray-200 bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={contentId}
        className="grid w-full gap-5 border-l-4 border-[rgba(255,196,0,0.9)] p-5 text-left transition-colors hover:bg-gray-50 sm:grid-cols-[6rem_minmax(0,1fr)_3rem] sm:items-center sm:p-6"
      >
        <div className="relative h-20 w-20 overflow-hidden border border-gray-200 bg-white p-2.5">
          <Image
            src={bannerSrc}
            alt={`${displayName} logo`}
            fill
            sizes="80px"
            className="object-contain p-2.5"
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {index && (
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-600">
                Project {String(index).padStart(2, "0")}
              </span>
            )}
            {project.departmentLead && (
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                Led by {project.departmentLead}
              </span>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-extrabold leading-tight text-gray-950 sm:text-4xl">
            {displayName}
          </h3>
          {project.summary && (
            <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
              {project.summary}
            </p>
          )}
        </div>

        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center justify-self-start border border-gray-300 text-3xl font-light leading-none text-gray-950 sm:justify-self-end"
        >
          {open ? "-" : "+"}
        </span>
      </button>

      {open && (
        <div
          id={contentId}
          className="grid gap-8 border-t border-gray-200 px-5 pb-6 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-600">
              Overview
            </p>
            {project.overview && (
              <p className="mt-3 max-w-3xl text-base leading-7 text-gray-800">
                {project.overview}
              </p>
            )}
          </div>

          {project.members?.length ? (
            <aside className="border-l-4 border-[rgba(255,196,0,0.9)] bg-gray-50 p-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
                Project Leadership
              </h4>
              <ul className="mt-4 space-y-4">
                {project.members.map((member) => (
                  <li
                    key={member.name}
                    className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-base font-bold text-gray-950">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {member.role}
                      {member.department ? ` / ${member.department.trim()}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      )}
    </article>
  );
}
