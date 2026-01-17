import type { Metadata } from "next";
import Background from "@/components/Background";
import teamPicture from "@/assets/teamPicture.png";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinUs() {
  return (
    <div className="relative min-h-screen text-white">
      <Background
        src={teamPicture}
        overlay
        className="bg-gradient-to-b from-black/60 via-black/40 to-black/60"
      />

      <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-10">
        {/* HERO */}
        <section className="text-center space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Mentorship Positions
          </h1>
          <p className="text-white/85 max-w-3xl mx-auto leading-relaxed">
            Please review the job descriptions provided and choose the position
            from the dropdown menu in the Google Forms sheet by clicking the
            button below the posting document. We appreciate your interest in
            joining Enactus Windsor!
          </p>

          <div className="pt-2">
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=szP5EmE9GUuaTWiQId6MycYSMRX1kTpPv32GVYl5RiFUODRTMFI0U1MzQVIxTk9EV1pMMVhDQzFIMSQlQCN0PWcu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-semibold
                         bg-yellow-400 text-black shadow-lg shadow-black/20
                         hover:bg-yellow-300 transition"
            >
              Apply here to Join Our Team
            </a>
          </div>
        </section>

        {/* PDF CARD */}
        <section className="mt-10">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10">
              <p className="font-semibold">Open Roles</p>
              <p className="text-sm text-white/70">
                View the posting document below.
              </p>
            </div>

            <div className="p-4">
              <iframe
                src="/openRoles.pdf"
                className="w-full h-[600px] md:h-[720px] rounded-xl bg-white"
                aria-label="Mentorship PDF"
              />
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="mt-16">
          <header className="text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Join Enactus Windsor
            </h2>
            <p className="text-lg text-white/85 max-w-4xl mx-auto leading-relaxed">
              Enactus Windsor is where ambitious students come to build real
              ventures, create real impact, and become the kind of leaders the
              world actually needs. We’re more than a club — we’re a launchpad
              for innovators, problem solvers, and changemakers who want to turn
              ideas into action.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Build Something That Matters",
                body: `At Enactus Windsor, you don’t just talk about problems — you design and launch solutions. Whether you’re passionate about sustainability, community development, entrepreneurship, or innovation, you’ll work on projects that create measurable impact across Windsor-Essex and beyond.`,
              },
              {
                title: "Learn by Doing (Not by Sitting in a Classroom)",
                body: `You’ll gain hands-on experience in venture creation and validation, project management and leadership, research/design and real-world problem solving, and pitching/storytelling/professional communication — the skills employers look for and the ones that help you stand out.`,
              },
              {
                title: "Join a Community of Builders and Leaders",
                body: `You’ll collaborate with a driven team of students, alumni, mentors, and industry partners who want to see you succeed. Enactus Windsor is a place where you’ll find support, accountability, and lifelong friendships.`,
              },
              {
                title: "Access Exclusive Opportunities",
                body: `Members gain access to national and international competitions, mentorship from founders and executives, workshops/networking/career-building experiences, and leadership roles that shape the future of our organization.`,
              },

            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/85 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-6 max-w-lg w-full">
              <h3 className="text-xl font-semibold">Make Your Degree Mean More</h3>
              <p className="mt-3 text-white/85 leading-relaxed">Joining Enactus Windsor transforms your university experience. You'll graduate not just with a credential — but with a portfolio of real projects, real impact, and real leadership.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-16 text-center">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Questions about Applying?
            </h2>
            <p className="mt-3 text-white/85">
              Send an e-mail to{" "}
              <a
                href="mailto:enactus@uwindsor.ca"
                className="text-yellow-300 hover:underline"
              >
                enactus@uwindsor.ca
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
