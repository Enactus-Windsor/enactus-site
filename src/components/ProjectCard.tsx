"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import type { EnactusProject } from "@/types/enactus";

import enactusYellow from "@/assets/enactusyellow.png"; 

interface ProjectCardProps {
  project: EnactusProject;
}

const DEFAULT_LOGO: StaticImageData = enactusYellow;

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const rawBanner = project.banner;
  const bannerSrc =
    !rawBanner || (typeof rawBanner === "string" && rawBanner.trim() === "")
      ? DEFAULT_LOGO
      : rawBanner;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
      {/* Collapsed header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        {/* Logo */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={bannerSrc}
            alt={`${project.name} logo`}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
          {project.departmentLead && (
            <p className="text-xs font-medium text-slate-700">
              Department Lead:{" "}
              <span className="text-yellow-500">{project.departmentLead}</span>
            </p>
          )}
          {project.summary && (
            <p className="mt-1 text-sm text-slate-700">{project.summary}</p>
          )}
        </div>

        <span className="ml-3 text-2xl leading-none text-slate-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-slate-200 px-5 pb-5 pt-4">
          {project.overview && (
            <p className="mb-4 text-sm text-slate-800">{project.overview}</p>
          )}

          {project.members?.length ? (
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Team Members
              </h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.members.map((m) => (
                  <li
                    key={m.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                  >
                    {/* <div className="relative h-10 w-10 overflow-hidden rounded-full bg-yellow-400/20 flex-shrink-0" /> */}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {m.name}
                      </p>
                      <p className="truncate text-xs text-slate-600">
                        {m.role}
                        {m.department ? ` • ${m.department}` : ""}
                      </p>
                      {/* {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-0.5 inline-block text-xs font-medium text-yellow-600 hover:text-yellow-500 hover:underline"
                        >
                          LinkedIn →
                        </a>
                      )} */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
