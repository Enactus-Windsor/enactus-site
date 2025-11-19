import { fetchEnactusProjects } from "@/data/enactusProjects";
import ProjectCard from "@/components/ProjectCard";

export default async function OurProjects() {
  const projects = await fetchEnactusProjects();

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Our Projects</h1>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            Enactus Windsor is powered by innovative student-led projects that
            tackle real problems in our community. Explore each initiative and
            meet the teams behind them.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
