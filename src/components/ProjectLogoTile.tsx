"use client";

import Image, { StaticImageData } from "next/image";
import type { MouseEvent } from "react";

interface ProjectLogoTileProps {
  anchorId: string;
  logoSrc: string | StaticImageData;
  projectName: string;
}

export default function ProjectLogoTile({
  anchorId,
  logoSrc,
  projectName,
}: ProjectLogoTileProps) {
  const href = `#${anchorId}`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(anchorId);

    if (!target) return;

    event.preventDefault();
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
    window.dispatchEvent(new Event("hashchange"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex min-h-36 basis-1/2 flex-col items-center justify-center bg-white px-4 py-5 text-center ring-1 ring-inset ring-black/15 sm:basis-1/3 lg:basis-1/4"
    >
      <div className="relative h-16 w-16">
        <Image
          src={logoSrc}
          alt={`${projectName} logo`}
          fill
          sizes="64px"
          className="object-contain"
        />
      </div>
      <p className="mt-3 text-sm font-bold text-gray-950">{projectName}</p>
    </a>
  );
}
