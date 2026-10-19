"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Alumnus } from "@/data/alumni";
import { SERIF } from "./AlumniCard";

type AlumniModalProps = {
  alumnus: Alumnus;
  onClose: () => void;
};

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <dt className="mb-1 text-[11px] font-semibold uppercase tracking-[.13em] text-zinc-600">
        {label}
      </dt>
      <dd className="m-0 text-[15px] font-medium text-neutral-900">{value}</dd>
    </div>
  );
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function AlumniModal({ alumnus, onClose }: AlumniModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pressStartedOnOverlay = useRef(false);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep keyboard focus cycling inside the dialog.
      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !dialogRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialogRef.current.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div
      // Only a press that both starts and ends on the backdrop closes the dialog,
      // so drag-selecting text out of the panel doesn't dismiss it.
      onMouseDown={(e) => {
        pressStartedOnOverlay.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (pressStartedOnOverlay.current && e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-neutral-900/55 px-5 pb-10 pt-[5vh] backdrop-blur-[3px] animate-[almFadeIn_.18s_ease]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="alumni-modal-name"
        ref={dialogRef}
        // overflow-clip (not hidden) keeps the rounded corners without making the
        // dialog a scroll container, so the sticky close button tracks the overlay.
        className="relative w-full max-w-[880px] overflow-clip rounded-[14px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.5)] animate-[almPop_.28s_cubic-bezier(.16,.84,.44,1)]"
      >
        {/* The opaque rail keeps the close button visible without covering profile text. */}
        <div className="sticky top-0 z-10 flex h-16 items-center justify-end border-b border-[#ececec] bg-white px-4">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border border-[#ececec] bg-white text-[19px] leading-none text-zinc-700 shadow-sm transition-colors hover:bg-neutral-900 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
          {/* Left: photo + facts */}
          <div className="border-[#ececec] bg-neutral-50 sm:border-r">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-50">
              <Image
                src={alumnus.imageSrc}
                alt={alumnus.name}
                fill
                sizes="(min-width: 640px) 280px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border-t border-[#ececec] px-6 pb-[26px] pt-[22px]">
              <dl className="m-0 flex flex-col gap-[15px]">
                <Fact label="Class of" value={alumnus.year} />
                <Fact label="Program" value={alumnus.program} />
                <Fact label="Enactus Team" value={alumnus.team} />
              </dl>
            </div>
          </div>

          {/* Right: bio + quote + linkedin + spotlight Q&A */}
          <div className="px-6 pb-11 pt-[52px] sm:px-11">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="inline-block h-[3px] w-[22px] rounded-sm bg-yellow-400" />
              <span className={`${SERIF} text-sm font-semibold text-yellow-800`}>
                {alumnus.role} · {alumnus.company}
              </span>
            </div>
            <h2
              id="alumni-modal-name"
              className={`${SERIF} mb-[22px] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-neutral-900`}
            >
              {alumnus.name}
            </h2>

            <p className="mb-[26px] text-base leading-[1.68] text-zinc-700">{alumnus.bio}</p>

            <blockquote className="mb-[30px] rounded-r-lg border-l-[3px] border-yellow-400 bg-[#fdfaf0] px-6 py-5">
              <p className={`${SERIF} m-0 text-[17px] italic leading-[1.55] text-neutral-900`}>
                “{alumnus.quote}”
              </p>
            </blockquote>

            {alumnus.linkedin && (
              <a
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#0A66C2] px-[18px] py-[11px] text-[14.5px] font-semibold text-white no-underline transition-colors hover:bg-[#084f96]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                </svg>
                Connect on LinkedIn
              </a>
            )}

            <section className="mt-10 border-t border-[#ececec] pt-8">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="inline-block h-[3px] w-[22px] rounded-sm bg-yellow-400" />
                <span className="text-[13px] font-semibold uppercase tracking-[.14em] text-zinc-600">
                  Alumni Spotlight
                </span>
              </div>
              <div className="flex flex-col gap-7">
                {alumnus.spotlight.map((item) => (
                  <div key={item.question}>
                    <h3 className={`${SERIF} mb-2 text-lg font-semibold leading-snug text-neutral-900`}>
                      {item.question}
                    </h3>
                    {item.answer.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="mt-2 text-[15px] leading-[1.65] text-zinc-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
