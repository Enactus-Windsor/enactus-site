// src/app/join-us/page.tsx
"use client";

import Image from "next/image";
import hero from "@/assets/placeholder.png";
import Link from "next/link";

const PHRASE = "YOUR FUTURE × ENACTUS WINDSOR";

function PhraseWave() {
  // map every character to a span so we can stagger per-letter animation
  // not working yet 
  return (
    <span className="inline-block">
      {PHRASE.split("").map((ch, i) => (
        <span
          key={i}
          className="letter"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export default function JoinUsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* MARQUEE */}
      <div className="relative overflow-hidden">
        <div className="marquee">
          {/* repeat 3x to fill the strip */}
          <PhraseWave />
          <span className="mx-8" />
          <PhraseWave />
          <span className="mx-8" />
          <PhraseWave />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center text-center">
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Welcome to Enactus Windsor! We’re thrilled to invite you to our team
          and to help make a lasting impact in Windsor-Essex and beyond.
        </p>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
          <Image src={hero} alt="Join Enactus Windsor" className="h-64 w-96 object-cover" priority />
        </div>

        <h3 className="mt-5 text-2xl font-extrabold">Mentorship Positions</h3>

        <Link href="#learn-more" className="mt-6">
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow hover:shadow-md transition">
            Learn More
          </button>
        </Link>
      </div>

      <style jsx>{`
        /* Horizontal scroll on the whole strip */
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* Per-letter wave + slight bend (rotate/skew) */
        @keyframes bob-bend {
          0%, 100% { transform: translateY(0) rotate(0deg) skewX(0deg); }
          25%      { transform: translateY(-10px) rotate(-2deg) skewX(-2deg); }
          50%      { transform: translateY(0) rotate(0.6deg) skewX(1deg); }
          75%      { transform: translateY(8px) rotate(2deg) skewX(2deg); }
        }

        .marquee {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
          animation: marquee-scroll 16s linear infinite;
          padding: 0.75rem 0;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          font-size: clamp(2rem, 6vw, 4.5rem);
        }

        .letter {
          display: inline-block;
          animation: bob-bend 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
