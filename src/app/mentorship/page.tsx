import type { Metadata } from "next";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Mentorship Positions",
};

export default function Mentorship() {
  return (
    <div className="relative min-h-screen text-black">
      <Background className="bg-gradient-to-b from-neutral-700/80 via-white/80 to-white" />
      <main className="flex flex-col items-center justify-center px-6 py-12 lg:px-20">
        <div className="max-w-3xl w-full flex flex-col items-center gap-10 text-center">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">Mentorship Positions</h1>
            <p className="text-lg text-left">
              Please review the job desscriptions provided and choose the
              position from the dropdown menu in the Google Forms sheet by
              clicking the button below the posting document. We appreciate your
              interest in joining Enactus Windsor!
            </p>
          </section>
          <section className="w-full">
            <iframe
              src="/mentorshipPdf.pdf"
              className="w-full rounded-xl ring-1 ring-white/10 bg-white"
              style={{ aspectRatio: "4 / 3" }}
              aria-label="Mentorship PDF"
            />
          </section>
          <section>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKKAq0jtJ4ulrt_XKrnrerPX9vE193Cz0KuAhgtzwceRXARg/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="px-6 py-3 rounded-full bg-yellow-400/90 text-black font-semibold hover:bg-yellow-300 transition shadow hover:shadow-md cursor-pointer"
              >
                Apply Here for Mentorship Positions
              </button>
            </a>
          </section>
          <section className="space-y-3">
            <h1 className="text-4xl font-bold">Questions about Applying?</h1>
            <p>
              Send an e-mail to{" "}
              <a
                href="mailto:hr@enactuswindsor.ca"
                className="text-yellow-600 hover:underline"
              >
                hr@enactuswindsor.ca
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
