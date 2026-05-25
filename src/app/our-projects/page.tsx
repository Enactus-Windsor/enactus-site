import Image from "next/image";
import { fetchEnactusProjects } from "@/data/enactusProjects";
import ProjectCard from "@/components/ProjectCard";
import enactusYellow from "@/assets/enactusyellow.png";

export default async function OurProjects() {
  const projects = await fetchEnactusProjects();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-950">
      <section className="relative isolate overflow-hidden bg-black px-4 pb-14 pt-36 text-white sm:px-6 sm:pb-16 sm:pt-40">
        <Image
          src="/images/projectsBk.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />

        <div className="relative mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[rgba(255,196,0,0.9)]">
              Student-Led Impact
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-7xl">
              Our Projects
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Enactus Windsor is powered by student-led projects that turn
              entrepreneurship into practical action for social, environmental,
              and economic challenges in our community.
            </p>
          </div>

          <div className="mt-12 grid border-y border-white/20 text-center sm:grid-cols-3">
            <div className="py-5">
              <p className="text-4xl font-extrabold text-[rgba(255,196,0,0.9)]">
                {projects.length}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Active Projects
              </p>
            </div>
            <div className="border-y border-white/20 py-5 sm:border-x sm:border-y-0">
              <p className="text-4xl font-extrabold text-[rgba(255,196,0,0.9)]">
                23+
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Projects Created
              </p>
            </div>
            <div className="py-5">
              <p className="text-4xl font-extrabold text-[rgba(255,196,0,0.9)]">
                40,000+
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Students Impacted
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,196,0,0.9)] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-[0.24em] text-black/75">
            Current Projects
          </p>
          <div className="grid grid-cols-2 gap-px bg-black/15 sm:grid-cols-3 lg:grid-cols-6">
            {projects.map((project) => {
              const logoSrc = project.banner || enactusYellow;

              return (
                <div
                  key={project.name}
                  className="flex min-h-36 flex-col items-center justify-center bg-white px-4 py-5 text-center"
                >
                  <div className="relative h-16 w-16">
                    <Image
                      src={logoSrc}
                      alt={`${project.name.trim()} logo`}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-bold text-gray-950">
                    {project.name.trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-6 border-b-4 border-black pb-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-yellow-600">
                Explore the work
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950 md:text-5xl">
                Project Directory
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-700">
              Open a project to learn what it does, who leads it, and how it
              contributes to Enactus Windsor&apos;s impact portfolio.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index + 1}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
