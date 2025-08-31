// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/artboard.png";
import ProjectCard from "@/components/ProjectCard";
import OurSupporters from "@/components/OurSupporters";
import Background from "@/components/Background";

import bgImage from "@/assets/placeholder.png";
import logoImage from "@/assets/placeholder.png";

import uniLogo from "@/assets/logoplace.png";
import odetteLogo from "@/assets/logoplace.png";
import altairixLogo from "@/assets/logoplace.png";
import people from "@/assets/people.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Background src={people} overlay />
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center">
        <img
          src={heroImage.src}
          alt="Local Solutions to Global Problems"
          className="max-w-full h-auto"
        />

        <Link href="/join-us" className="mt-6">
          <div className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow hover:shadow-md transition cursor-pointer">
            Join Us!
          </div>
        </Link>
      </div>

      {/* WHO WE ARE */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Title (left aligned with container) */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            WHO WE ARE
          </h2>

          {/* Content Row: paragraph left-aligned with a max-width, logo to its right */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[minmax(0,600px)_auto] gap-8 items-start">
            {/* Paragraph with constrained width */}
            <p className="text-lg leading-8 text-gray-700 text-left max-w-[600px]">
              Enactus Windsor is a non-profit organization run{" "}
              <span className="hl">
                <span className="hlText">entirely by students</span>
                <svg aria-hidden="true" className="hlInk" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2 14 C 25 10, 75 18, 98 12" fill="none" />
                </svg>
              </span>
              {" "}that passionately addresses social, environmental, and economic issues in our Windsor community. Our goal is to identify needs and solve problems to better our Windsor community through entrepreneurship.
            </p>

            {/* Logo to the right */}
            <div className="flex md:justify-start ml-10">
              <div className="w-36 h-36 border border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
                LOGO HERE
              </div>
            </div>
          </div>

          {/* Stats remain centered below */}
          <div className="mt-8">
            <div className="flex justify-center gap-14 text-gray-900">
              <div className="text-center">
                <div className="text-3xl font-bold">2006</div>
                <div className="text-sm text-gray-500 mt-1">FOUNDED IN</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">11+</div>
                <div className="text-sm text-gray-500 mt-1">PROJECTS CREATED</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm text-gray-500 mt-1">
                  STUDENTS IMPACTED
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR PROJECTS */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            OUR PROJECTS
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            <ProjectCard
              backgroundImage={bgImage}
              logo={logoImage}
              title="Placeholder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ProjectCard
              backgroundImage={bgImage}
              logo={logoImage}
              title="Placeholder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ProjectCard
              backgroundImage={bgImage}
              logo={logoImage}
              title="Placeholder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>

        {/* OUR SUPPORTERS (title left-aligned, same line-up as projects) */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight pb-15 ">
            OUR SUPPORTERS
          </h2>
          <OurSupporters supporters={[uniLogo, odetteLogo, altairixLogo]} />
        </div>
      </section>
    </div>
  );
}
