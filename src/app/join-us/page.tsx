import Image from "next/image";
import hero from "@/assets/placeholder.png";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./join-us.module.css";
import joinusbg from "@/assets/joinusbg.jpg"
import Background from "@/components/Background";
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap" rel="stylesheet" />


export const metadata: Metadata = {
  title: "Join Us!",
};

/** Add spaces around the bullet to avoid tight joins */
const PHRASE = "YOUR FUTURE × ENACTUS WINDSOR  •  ";

function WaveMarquee({
  text = PHRASE,
  speed = "300s",        // slower = larger number
  height = 120,         // px
  intensity = "s" as "s" | "m" | "l",
}) {

  const pathId = intensity === "l" ? "waveL" : intensity === "m" ? "waveM" : "waveS";

  return (
    <div className={styles.waveMarquee} style={{ ["--h" as any]: `${height}px` }}>
      <svg
        className={styles.waveSvg}
        viewBox="0 0 2000 180"
        width ="100%"
        height = {height}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden
      >
        <defs>
          {/* WAVE PATHS — make shallower by moving Y values toward 60 */}
          <path
            id="waveS"
            d="M0,60 C150,54 300,66 450,60 S750,54 900,60 S1200,66 1350,60 S1650,54 1800,60 S2000,60 2000,60"
            pathLength={100}
          />
          <path
            id="waveM"
            d="M0,60 C120,48 240,72 360,60 S600,48 720,60 S960,72 1080,60 S1320,48 1440,60 S1680,72 1800,60 S2000,60 2000,60"
            pathLength={100}
          />
          <path
            id="waveL"
            d="M0,60 C100,42 260,78 360,60 S620,42 720,60 S980,78 1080,60 S1340,42 1440,60 S1700,78 1800,60 S2000,60 2000,60"
            pathLength={100}
          />
        </defs>

        {/* Multiple copies for seamless scrolling */}
        <text
          className={styles.tp}
          aria-hidden="true"
          style={{ 
          fontSize: "150px",
          letterSpacing: "5px",
          fontFamily: '"Source Sans" Pro, Arial, sans-serif,', // set your desired font
          fontWeight: "bold", // or "bold"
          fontStretch: "expanded" ,
          transform: "scaleY(0.8)",
          }}
        >
          {/* First copy - starts visible */}
          <textPath
            xlinkHref={`#${pathId}`}
            startOffset="0%"
            method="align"
            spacing="auto"
          >
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur={speed}
              repeatCount="indefinite"
            />
            {text.repeat(15)}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
export default function JoinUsPage() {
  return (
    <div className="min-h-screen w-ful text-white">
      <Background src={joinusbg} overlay />
      <WaveMarquee text={PHRASE} speed="28s" height={180} intensity="s" />

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
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow hover:shadow-md transition cursor-pointer hover:bg-gray-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
