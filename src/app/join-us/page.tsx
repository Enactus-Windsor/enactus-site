import type { Metadata } from "next";
import Image from "next/image";
import teamPicture from "@/assets/teamPicture.jpg";

export const metadata: Metadata = {
  title: "Join Us",
};

const SHOW_OPEN_ROLES_PDF = false;

const applicationUrl =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=szP5EmE9GUuaTWiQId6MycYSMRX1kTpPv32GVYl5RiFUODRTMFI0U1MzQVIxTk9EV1pMMVhDQzFIMSQlQCN0PWcu";

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative isolate flex min-h-[76vh] items-end overflow-hidden bg-black pt-32 sm:min-h-[82vh]">
        <Image
          src={teamPicture}
          alt="Join Enactus Windsor"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-6 pb-14 sm:px-8 sm:pb-16 lg:px-10">
          <div className="max-w-3xl border-l-8 border-[rgba(255,196,0,0.9)] bg-black px-6 py-7 text-left shadow-[0_18px_50px_-28px_rgba(0,0,0,0.95)] sm:px-8 sm:py-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Join Enactus Windsor
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
              Review open positions and apply using the link below.
            </p>

            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded bg-[rgba(255,196,0,0.95)] px-8 py-4 text-base font-bold text-black shadow-[0_16px_36px_-20px_rgba(0,0,0,0.9)] transition hover:bg-yellow-300 sm:px-10 sm:text-lg"
            >
              Click Here to Review Open Roles and Apply
            </a>
          </div>
        </div>
      </section>

      <main className="w-full">
        {SHOW_OPEN_ROLES_PDF && (
          <section className="bg-white px-6 py-14 sm:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl">
              <div className="mb-6 border-l-8 border-[rgba(255,196,0,0.9)] pl-5">
                <p className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                  Open Roles
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-600 sm:text-base">
                  View the posting document below.
                </p>
              </div>

              <div className="overflow-hidden rounded border border-neutral-200 bg-white shadow-[0_18px_45px_-32px_rgba(0,0,0,0.55)]">
                <div className="h-2 bg-[rgba(255,196,0,0.9)]" />
                <iframe
                  src="/openRoles.pdf"
                  className="h-[600px] w-full bg-white md:h-[720px]"
                  aria-label="Mentorship PDF"
                />
              </div>
            </div>
          </section>
        )}

        {/* WHY JOIN */}
        <section className="bg-neutral-50 px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <header className="max-w-4xl">
              <div className="mb-5 h-2 w-24 bg-[rgba(255,196,0,0.9)]" />
              <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                Why Join Enactus Windsor
              </h2>
              <p className="mt-5 text-lg font-medium leading-relaxed text-neutral-700 sm:text-xl">
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
                  className="h-full rounded border border-neutral-200 bg-white p-6 shadow-[0_16px_34px_-30px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[rgba(255,196,0,0.95)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-700">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 border-l-8 border-[rgba(255,196,0,0.9)] bg-black p-6 text-white sm:p-8">
              <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Make Your Degree Mean More
                </h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  Joining Enactus Windsor transforms your university experience.
                  You will graduate not just with a credential, but with a
                  portfolio of real projects, real impact, and real leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-black px-6 py-16 text-center text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Questions about Applying?
            </h2>
            <p className="mt-4 text-white/85">
              Send an e-mail to{" "}
              <a
                href="mailto:enactus@uwindsor.ca"
                className="font-semibold text-[rgba(255,196,0,0.95)] hover:underline"
              >
                enactus@uwindsor.ca
              </a>
            </p>
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded bg-[rgba(255,196,0,0.95)] px-8 py-4 text-base font-bold text-black transition hover:bg-yellow-300 sm:px-10 sm:text-lg"
            >
              Click Here to Review Open Roles and Apply
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
