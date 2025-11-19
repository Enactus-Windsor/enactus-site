"use client";

import React from "react";
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
    <div className="w-full bg-white overflow-hidden mx-auto flex flex-col h-full">
      {/* Image */}
      <img
        className={`w-full min-h-[10rem] max-h-[10rem] sm:min-h-[14rem] sm:max-h-[14rem] object-cover object-center ${
          !hasCustomImage ? "opacity-50 object-scale-down" : ""
        }`}
        src={imgSrc}
        alt={member.name}
      />

      {/* Content */}
      <div className="flex flex-col justify-between mt-4 h-full">
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-xl font-serif text-primary min-h-12 sm:min-h-14 mb-2">
            {member.role}
            {member.department && ` - ${member.department}`}
          </h3>

          <div className="flex flex-col w-full mb-4">
            <h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
              {firstName || member.name}
            </h1>
            {lastName && (
              <h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
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
            className="inline-flex items-center mt-4"
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
