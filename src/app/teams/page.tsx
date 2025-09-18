// src/app/enactus/teams/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TeamCard from "@/components/TeamCard"; // your existing card
import { fetchEnactusTeams } from "@/data/enactusApi";
import { toTeamCardMember } from "@/utils/enactusAdapter";

type EnactusTeam = Awaited<ReturnType<typeof fetchEnactusTeams>>[number];

export default function EnactusTeams() {
  const [teams, setTeams] = useState<EnactusTeam[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    (async () => setTeams(await fetchEnactusTeams()))();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enactusBlack = "/images/teambanner.jpg";
  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Image
        src={enactusBlack}
        alt="Enactus Team Banner"
        width={2400}
        height={800}
        priority
        className={`w-full object-cover -z-0 ${
          scrollPosition > 0 ? "fixed" : "absolute"
        } ${scrollPosition > 400 && "hidden"}`}
        style={{ height: scrollPosition / 8 + 400 }}
      />

      {/* Overlay header */}
      <div className="flex items-start justify-center mt-10 mb-40 sm:mb-64 z-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center w-fit bg-white opacity-95">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black px-16 py-2 rounded-sm shadow-md">
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
                  <img
                    src={team.banner ?? "/images/enactus-default-banner.jpg"}
                    alt={team.name}
                    className="w-full h-24 z-0 object-cover"
                  />
                  <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-semibold tracking-[0.25em] text-2xl sm:text-4xl text-white">
                    {team.name}
                  </h2>
                </div>

                {/* Members (adapter -> TeamCard) */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20 w-full px-4 sm:px-10 md:px-40 xl:px-64 2xl:px-0 2xl:w-[50vw] h-full text-black">
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
