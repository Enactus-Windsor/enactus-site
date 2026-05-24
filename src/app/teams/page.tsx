// src/app/enactus/teams/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import TeamCard from "@/components/TeamCard"; // your existing card
import { fetchEnactusTeams } from "@/data/enactusApi";
import { toTeamCardMember } from "@/utils/enactusAdapter";

type EnactusTeam = Awaited<ReturnType<typeof fetchEnactusTeams>>[number];

const teamHeadlineFont = Archivo({
  subsets: ["latin"],
  weight: ["800"],
});

export default function EnactusTeams() {
  const [teams, setTeams] = useState<EnactusTeam[]>([]);

  useEffect(() => {
    (async () => setTeams(await fetchEnactusTeams()))();
  }, []);

  const enactusBlack = "/images/teambanner.jpg";
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-white pt-24 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-[520px] sm:h-[700px] lg:h-[760px] z-0 pointer-events-none">
        <Image
          src={enactusBlack}
          alt="Enactus Team Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Overlay header */}
      <div className="mt-12 mb-64 flex items-start justify-center overflow-hidden z-10 sm:mt-16 sm:mb-[28rem] lg:mb-[32rem]">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center w-fit bg-[rgba(255,196,0,0.9)] bg-opacity-20">
            <h1
              className={`${teamHeadlineFont.className} px-16 py-2 text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              Enactus Windsor – Our Team
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-screen bg-primary h-0.5 mb-1" />
            <div className="w-screen bg-primary h-1" />
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="relative z-10 bg-white flex justify-center">
        <div className="my-12 overflow-hidden">
          <div className="flex flex-col justify-center w-full">
            {teams.map((team, index) => (
              <section
                key={index}
                id={team.name.replace(/\s+/g, "-").toLowerCase()}
                className="mb-12"
              >
                {/* Team header */}
                <div className="relative w-screen mb-20 h-24">
                  <Image
                    src={team.banner ?? "/images/test2.svg"}
                    alt={team.name}
                    fill
                    sizes="100vw"
                    className="z-0 object-cover"
                  />
                  <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-semibold tracking-[0.25em] text-2xl sm:text-4xl text-white">
                    {team.name}
                  </h2>
                </div>

                {/* Members (adapter -> TeamCard) */}
                <div className="flex justify-center">
                  <div className="grid w-full max-w-[1830px] grid-cols-2 gap-10 px-6 text-black sm:gap-20 sm:px-10 md:px-16 lg:grid-cols-3 xl:px-20 2xl:px-0">
                    {team.members.map((m, idx) => (
                      <TeamCard key={idx} member={toTeamCardMember(m)} />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
