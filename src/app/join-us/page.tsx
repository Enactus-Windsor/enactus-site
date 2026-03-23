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

      <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-32 lg:px-10">
        {/* HERO */}
        <section className="text-center space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Join Enactus Windsor
          </h1>
          <p className="text-white/85 max-w-3xl mx-auto leading-relaxed">
            Review open positions and apply using the link below.
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
              Click Here to Review Open Roles and Apply
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
          <div className="rounded-3xl bg-black/35 backdrop-blur-md ring-1 ring-white/20 p-6 sm:p-8 lg:p-10">
            <header className="text-center space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Join Enactus Windsor
              </h2>
              <p className="text-lg text-white/85 max-w-4xl mx-auto leading-relaxed">
                Enactus Windsor is where ambitious students come to build real
                ventures, create real impact, and become the kind of leaders the
                world actually needs. We’re more than a club, we’re a launchpad
                for innovators, problem solvers, and changemakers who want to
                turn ideas into action.
              </p>
            </header>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Build Something That Matters",
                  body: `At Enactus Windsor, you don’t just talk about problems, you design and launch solutions. Whether you’re passionate about sustainability, community development, entrepreneurship, or innovation, you’ll work on projects that create measurable impact across Windsor-Essex and beyond.`,
                },
                {
                  title: "Learn by Doing (Not by Sitting in a Classroom)",
                  body: `You’ll gain hands-on experience in venture creation and validation, project management and leadership, research/design and real-world problem solving, and pitching/storytelling/professional communication, the skills employers look for and the ones that help you stand out.`,
                },
                {
                  title: "Join a Community of Builders and Leaders",
                  body: `You’ll collaborate with a driven team of students, alumni, mentors, and industry partners who want to see you succeed. Enactus Windsor is a place where you’ll find support, accountability, and lifelong friendships.`,
                },
                {
                  title: "Access Exclusive Opportunities",
                  body: `Members gain access to national and international competitions, mentorship from founders and executives, workshops/networking/career-building experiences, and leadership roles that shape the future of our organization.`,
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200/90">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-white/85 leading-relaxed">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-2xl rounded-2xl border border-yellow-300/40 bg-gradient-to-r from-yellow-300/20 via-yellow-200/10 to-yellow-300/20 p-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  Make Your Degree Mean More
                </h3>
                <p className="mt-3 text-white/90 leading-relaxed">
                  Joining Enactus Windsor transforms your university experience.
                  You will graduate not just with a credential, but with a
                  portfolio of real projects, real impact, and real leadership.
                </p>
              </div>
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
