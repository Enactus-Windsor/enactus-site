import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship Positions",
};



export default function Mentorship() {
  return (
    <div className="relative min-h-screen bg-neutral-900 text-white">
      <main className="flex flex-col items-center justify-center px-6 py-12 lg:px-20">
        <div className="max-w-3xl w-full flex flex-col items-center gap-10 text-center">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">Mentorship Positions</h1>
            <p className="text-lg text-gray-200 text-left">
              Please review the job descriptions provided and choose the
              position from the dropdown menu in the Google Forms sheet by
              clicking the button below the posting document. We appreciate your
              interest in joining Enactus Windsor!
            </p>
          </section>
          <section className="w-full">
            <div
              className="w-full rounded-xl ring-1 ring-white/10 bg-white/5 flex items-center justify-center"
              style={{ aspectRatio: "4 / 3" }}
              aria-label="PDF placeholder"
            >
              <span className="text-white/60 text-sm tracking-wide">
                PDF Placeholder
              </span>
            </div>
          </section>
          <section>
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-yellow-400/90 text-black font-semibold hover:bg-yellow-300 transition shadow hover:shadow-md transition cursor-pointer"
            >
              Apply Here for Mentorship Positions
            </button>
          </section>
          <section className="space-y-3">
            <h1 className="text-4xl font-bold">Questions about Applying?</h1>
            <p className="text-gray-300">
              Send an e-mail to{" "}
              <a
                href="mailto:hr@enactuswindsor.ca"
                className="text-yellow-400 hover:underline"
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
