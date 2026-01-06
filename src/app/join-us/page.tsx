import Image from "next/image";
import hero from "@/assets/placeholder.png";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./join-us.module.css";
import joinusbg from "@/assets/joinusbg.jpg"
import Background from "@/components/Background";
import joinusoverhead from "@/assets/joinusoverhead.jpg";
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap" rel="stylesheet" />


export const metadata: Metadata = {
  title: "Join Us!",
};


const PHRASE = "YOUR FUTURE × ENACTUS WINDSOR  •  ";

function WaveMarquee({
  text = PHRASE,
  speed = "300s",        
  height = 120,         
  intensity = "s" as "s" | "m" | "l",
}) {

  const pathId = intensity === "l" ? "waveL" : intensity === "m" ? "waveM" : "waveS";

  return (
    <div className={styles.waveMarquee} style={{ ["--h" as any]: `${height}px` }}>
      <svg
        className={styles.waveSvg}
        viewBox="0 0 3000 180"
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
            d="M0,60 C150,58 300,62 450,60 S750,58 900,60 S1200,62 1350,60 S1650,58 1800,60 S2250,58 2700,60 S3000,60 3000,60"
            pathLength={100}
          />
          <path
            id="waveM"
            d="M0,60 C120,57 240,63 360,60 S600,57 720,60 S960,63 1080,60 S1320,57 1440,60 S1680,63 1800,60 S2160,57 2520,60 S3000,60 3000,60"
            pathLength={100}
          />
          <path
            id="waveL"
            d="M0,60 C100,55 260,65 360,60 S620,55 720,60 S980,65 1080,60 S1340,55 1440,60 S1700,65 1800,60 S2320,55 2520,60 S3000,60 3000,60"
            pathLength={100}
          />

          {/* Fade mask for smooth text appearance */}
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0"/>
            <stop offset="40%" stopColor="white" stopOpacity="1"/>
            <stop offset="60%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>
        </defs>

        {/* Multiple copies for seamless scrolling */}
        <text
          className={styles.tp}
          mask="url(#fadeMask)"
          aria-hidden="true"
          style={{ 
          fontSize: "150px",
          letterSpacing: "5px",
          fontFamily: '"Source Sans" Pro, Arial, sans-serif,', 
          fontWeight: "bold", 
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
            {text.repeat(30)}
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
          <Image src={joinusoverhead} alt="Join Enactus Windsor" className="h-64 w-96 object-cover" priority />
        </div>

        <h3 className="mt-5 text-2xl font-extrabold">Join Our Team!</h3>

        <Link href="/mentorship" className="mt-6">
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow hover:shadow-md transition cursor-pointer hover:bg-gray-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
