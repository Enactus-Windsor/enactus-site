import Image from "next/image";
import hero from "@/assets/placeholder.png";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "../join-us/join-us.module.css";

export const metadata: Metadata = {
  title: "Join Us!",
};

const PHRASE = "YOUR FUTURE × ENACTUS WINDSOR";

function PhraseWave() {
  return (
    <span>
      {PHRASE.split("").map((ch, i) => (
        <span
          key={i}
          className={styles.letter}
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
        <div className={styles.marquee}>
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
          <strong>Welcome to Enactus Windsor!</strong> We’re thrilled to invite you to our team
          and to help make a{" "}
          <span className="hl">
            <span className="hlText">lasting impact</span>
            <svg aria-hidden="true" className="hlInk" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M2 14 C 25 10, 75 18, 98 12" fill="none" />
            </svg>
          </span>{" "}
          in Windsor-Essex and beyond.
        </p>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
          <Image src={hero} alt="Join Enactus Windsor" className="h-64 w-96 object-cover" priority />
        </div>

        <h3 className="mt-5 text-2xl font-extrabold">Mentorship Positions</h3>

        <Link href="/mentorship" className="mt-6">
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow hover:shadow-md transition cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
