"use client";

import { useCallback, useMemo, useState } from "react";
import { alumni } from "@/data/alumni";
import AlumniCard, { SERIF } from "./AlumniCard";
import AlumniModal from "./AlumniModal";

const ALL = "All";

export default function AlumniDirectory() {
  const [year, setYear] = useState(ALL);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const years = useMemo(
    () =>
      Array.from(new Set(alumni.flatMap((a) => (a.year ? [a.year] : [])))).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [],
  );

  const filtered = alumni.filter((a) => year === ALL || a.year === year);
  const selected = alumni.find((a) => a.slug === selectedSlug) ?? null;
  const closeModal = useCallback(() => setSelectedSlug(null), []);

  const selectYear = (y: string) => {
    setYear(y);
    setSelectedSlug(null);
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-neutral-900 antialiased">
      {/* Header band */}
      <header className="border-b border-[#ececec] bg-white">
        <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-44 sm:px-10 sm:pt-40">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="inline-block h-[3px] w-7 rounded-sm bg-yellow-400" />
            <span className="text-[13px] font-semibold uppercase tracking-[.22em] text-zinc-400">
              Enactus Windsor
            </span>
          </div>
          <h1
            className={`${SERIF} m-0 text-[clamp(34px,5vw,60px)] font-bold leading-[1.02] tracking-[-0.02em] text-neutral-900`}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-[2]">Alumni</span>
              <span className="absolute -left-0.5 -right-0.5 bottom-[.1em] z-[1] h-[.42em] rounded-[3px] bg-yellow-400" />
            </span>
          </h1>
          <p className="mt-[22px] max-w-[640px] text-[17px] leading-[1.6] text-zinc-600">
            The people who built Enactus Windsor and carried its mission forward. Explore
            where our members are now — and the ventures they helped launch along the way.
          </p>
        </div>
      </header>

      {/* Filter bar */}
      <div className="sticky top-[var(--site-header-h,98px)] z-20 border-b border-[#ececec] bg-white/90 backdrop-blur-[8px]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-5 py-4 sm:px-10">
          {years.length > 0 && (
            <>
              <span className="mr-0.5 text-[13px] font-semibold uppercase tracking-[.14em] text-zinc-400">
                Class of
              </span>
              <div className="flex flex-wrap gap-2">
                {[ALL, ...years].map((y) => {
                  const active = y === year;
                  return (
                    <button
                      key={y}
                      type="button"
                      onClick={() => selectYear(y)}
                      aria-pressed={active}
                      className={[
                        "cursor-pointer rounded-full border px-[15px] py-[7px] text-sm font-medium transition-all duration-150",
                        active
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400",
                      ].join(" ")}
                    >
                      {y === ALL ? "All years" : y}
                    </button>
                  );
                })}
              </div>
            </>
          )}
          <span className="ml-auto text-sm text-zinc-400">
            {filtered.length} {filtered.length === 1 ? "alum" : "alumni"}
          </span>
        </div>
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-[1500px] px-5 pb-24 pt-11 sm:px-10">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-x-6 gap-y-7">
          {filtered.map((a) => (
            <AlumniCard key={a.slug} alumnus={a} onSelect={() => setSelectedSlug(a.slug)} />
          ))}
        </div>
      </main>

      {selected && <AlumniModal alumnus={selected} onClose={closeModal} />}
    </div>
  );
}
