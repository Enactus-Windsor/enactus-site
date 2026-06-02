"use client";

import React from "react";
import Image from "next/image";
import type { EnactusMember } from "@/types/enactus";

const FALLBACK_IMAGE = "/assets/enactusyellow.png";

interface TeamCardProps {
  member: EnactusMember & {
    firstName?: string;
    lastName?: string;
    year?: string;
    joined?: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  const hasCustomImage = !!member.image && member.image.trim() !== "";
  const imgSrc = hasCustomImage ? member.image! : FALLBACK_IMAGE;

  // If you still want first + last line split:
  const firstName = member.firstName ?? member.name.split(" ")[0] ?? "";
  const lastName =
    member.lastName ??
    member.name
      .split(" ")
      .slice(1)
      .join(" ");

  return (
    <div className="w-full bg-white overflow-hidden mx-auto flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          className={
            hasCustomImage
              ? "object-cover object-center"
              : "object-contain object-center p-4 opacity-50"
          }
          src={imgSrc}
          alt={member.name}
          fill
          sizes="(min-width: 1536px) 700px, (min-width: 1024px) 50vw, (min-width: 640px) 67vw, 100vw"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col">
          <h3 className="text-sm font-serif text-primary min-h-12 mb-2 sm:text-base xl:text-lg">
            {member.role}
            {member.department && ` - ${member.department}`}
          </h3>

          <div className="flex flex-col w-full mb-4">
            <h1 className="text-lg font-semibold font-serif sm:text-2xl xl:text-3xl sm:font-medium">
              {firstName || member.name}
            </h1>
            {lastName && (
              <h1 className="text-lg font-semibold font-serif sm:text-2xl xl:text-3xl sm:font-medium">
                {lastName}
              </h1>
            )}
          </div>
        </div>

        {/* LinkedIn Button */}
        {member.linkedin && member.linkedin.trim() !== "" && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center sm:mt-12"
          >
            <div className="p-1 w-8 h-8 sm:w-12 sm:h-12 bg-white text-[#0A66C2] text-sm font-medium rounded hover:bg-[#0A66C2] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                />
              </svg>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
