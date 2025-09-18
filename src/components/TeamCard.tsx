"use client";

import React from "react";

interface TeamCardProps {
  member: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    program: string;
    year: string;
    joined: string;
    image: string;
    linkedin: string;
    department?: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="w-full bg-white overflow-hidden mx-auto flex flex-col h-full">
      {/* Image */}
      <img
        className={`w-full min-h-[12rem] max-h-[12rem] sm:min-h-[20rem] sm:max-h-[20rem] object-cover object-center ${
          !member.image && "opacity-50 object-scale-down"
        }`}
        src={member.image ? member.image : "/images/jsosificonblue.webp"}
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
              {member.firstName}
            </h1>
            <h1 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl font-semibold sm:font-medium font-serif">
              {member.lastName}
            </h1>
          </div>
          <p className="sm:mt-2 text-sm sm:text-base text-gray-600">
            <strong>Program:</strong> {member.program}
          </p>
        </div>
        {/* LinkedIn Button */}
        {member.linkedin && (
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
