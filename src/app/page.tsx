import Image from "next/image";
import heroImage from "@/assets/artboard.png";
import Link from "next/link";
import OurSupporters from "@/components/OurSupporters";
import Background from "@/components/Background";

import people from "@/assets/people.jpg";
import enactusyellow from "@/assets/enactusyellow.png";

import odette from "@/assets/odettelogo.png";
import uwindsor from "@/assets/uwindsor.png";

import { fetchEnactusProjects } from "@/data/enactusProjects";
import type { EnactusProject } from "@/types/enactus";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default async function Home() {
  const projects: EnactusProject[] = await fetchEnactusProjects();

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
          <div className="bg-white text-gray-900 font-semibold py-3 px-24 rounded-full shadow hover:shadow-md hover:bg-gray-300 transition cursor-pointer">
            Join Us!
          </div>
        </Link>
      </div>

      {/* WHO WE ARE */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            WHO WE ARE
          </h2>

          {/* Content Row */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[minmax(0,600px)_auto] gap-8 items-start">
            {/* Paragraph container */}
            <div className="text-black font-normal">
              <p className="text-2xl leading-8 max-w-[600px] font-bold">
                Enactus Windsor is a non-profit organization run{" "}
                <span className="hl">
                  <span className="hlText">entirely by students</span>
                  <svg
                    aria-hidden="true"
                    className="hlInk"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 14 C 25 10, 75 18, 98 12" fill="none" />
                  </svg>
                </span>{" "}
                that passionately addresses social, environmental, and economic
                issues in our Windsor community. Our goal is to identify needs
                and solve problems to better our Windsor community through
                entrepreneurship.
              </p>
            </div>

            {/* Logo */}
            <div className="flex md:justify-start ml-10">
              <Image
                src={enactusyellow}
                alt="Enactus Logo"
                width={144}
                height={144}
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8">
            <div className="flex justify-center gap-14 text-gray-900">
              <div className="text-center">
                <span className="hlCircle">
                  <span className="hlCircleText text-3xl font-bold">2006</span>
                  <svg
                    className="hlCircleInk"
                    viewBox="0 0 260 140"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="130"
                      cy="70"
                      rx="120"
                      ry="60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                  </svg>
                </span>
                <div className="text-sm text-gray-900 mt-1 font-bold">
                  FOUNDED IN
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">11+</div>
                <div className="text-sm text-gray-900 mt-1 font-bold">
                  PROJECTS CREATED
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm text-gray-900 mt-1">
                  <span className="hl">
                    <span className="hlText font-bold">STUDENTS IMPACTED</span>
                    <svg
                      aria-hidden="true"
                      className="hlInk"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 14 C 25 10, 75 18, 98 12"
                        fill="none"
                        stroke="#171717"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="drop-shadow(0 0 0.5px rgba(0,0,0,0.15))"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR PROJECTS – carousel */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              OUR PROJECTS
            </h2>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
              Discover the student-led projects creating real impact in Windsor.
              Tap a project to learn more on our projects page.
            </p>
          </div>

          <ProjectsCarousel projects={projects} />
        </div>

        {/* OUR SUPPORTERS */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight pb-15">
            OUR SUPPORTERS
          </h2>
          <OurSupporters supporters={[uwindsor, odette]} />
        </div>
      </section>
    </div>
  );
}
