import Image from "next/image";
import OurSupporters from "@/components/OurSupporters";
import { Archivo } from "next/font/google";

import enactusyellow from "@/assets/enactusyellow.png";

import odette from "@/assets/odettelogo.png";
import uwindsor from "@/assets/uwindsor.png";
import glier from "@/assets/glier.png";
import highline from "@/assets/highline.png";
import johns from "@/assets/johnsOfoods.png";
import epicentre from "@/assets/uwinEpicentre.png";
import rgGroup from "@/assets/rgGroup.jpeg";

import { fetchEnactusProjects } from "@/data/enactusProjects";
import type { EnactusProject } from "@/types/enactus";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const heroHeadlineFont = Archivo({
  subsets: ["latin"],
  weight: ["800"],
});

export default async function Home() {
  const projects: EnactusProject[] = await fetchEnactusProjects();

  return (
    <div className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden sm:min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/homepagebk.jpg"
            alt="Enactus Windsor Home Background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 brightness-[0.55]"
          />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-12 text-center sm:px-6 sm:pb-16">
          <h1
            className={`${heroHeadlineFont.className} max-w-6xl uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl`}
          >
            <span className="block text-5xl text-[rgba(255,196,0,0.9)] [text-shadow:0_8px_22px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
              Local Solutions To
            </span>
            <span className="mt-1 block text-5xl text-white [text-shadow:0_10px_24px_rgba(0,0,0,0.65)] sm:text-7xl lg:text-8xl">
              Global Problems
            </span>
          </h1>

          <div className="mt-5 flex items-center gap-3 sm:gap-5">
            <span className="h-[3px] w-12 bg-[rgba(255,196,0,0.9)] sm:w-20" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white [text-shadow:0_3px_10px_rgba(0,0,0,0.45)] [-webkit-text-stroke:0.7px_rgba(0,0,0,0.45)] sm:text-sm">
              Through Entrepreneurship
            </p>
            <span className="h-[3px] w-12 bg-[rgba(255,196,0,0.9)] sm:w-20" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          {/* Title */}
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            WHO WE ARE
          </h2>

          {/* Content Row */}
          <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,760px)_auto]">
            {/* Paragraph container */}
            <div className="text-black font-normal">
              <p className="max-w-[760px] text-2xl font-bold leading-[1.45] sm:text-3xl">
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
            <div className="ml-6 flex md:justify-start">
              <Image
                src={enactusyellow}
                alt="Enactus Logo"
                width={144}
                height={144}
                className="h-40 w-40 object-contain sm:h-48 sm:w-48"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10">
            <div className="flex justify-center gap-12 text-gray-900 sm:gap-16">
              <div className="text-center">
                <span className="hlCircle">
                  <span className="hlCircleText text-4xl font-bold sm:text-5xl">
                    2006
                  </span>
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
                <div className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                  FOUNDED IN
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold sm:text-5xl">26+</div>
                <div className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                  PROJECTS CREATED
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold sm:text-5xl">40,000+</div>
                <div className="mt-1 text-sm text-gray-900 sm:text-base">
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
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              OUR PROJECTS
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
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
          <OurSupporters
            supporters={[
              uwindsor,
              odette,
              johns,
              glier,
              highline,
              epicentre,
              rgGroup,
            ]}
          />
        </div>
      </section>
    </div>
  );
}
