import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact", 
};

import contactbg from "@/assets/odettecontact.jpg"
import Background from "@/components/Background";
export default function Contact() {
  return (
    <div className="relative min-h-screen text-white">
      <Background src={contactbg} overlay />

      <main className="flex flex-col items-center justify-center px-6 py-12 lg:px-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/*Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-lg">
              Have questions or suggestions? Contact us! Whether you're a
              student, community member, or potential partner, we value your
              insights for Enactus Windsor's mission of positive social impact.
            </p>
            <hr className="border-white/30 my-4 w-3/4" />
            <div className="text-base leading-7 space-y-1">
              <p className="font-semibold">Odette School of Business</p>
              <p>401 Sunset Avenue, Room B06</p>
              <p>Windsor, Ontario, Canada, N9B 3P4</p>
              <a
                href="mailto:enactus@uwindsor.ca"
                className="text-yellow-400 underline hover:underline block mt-3"
              >
                enactus@uwindsor.ca
              </a>
            </div>
          </div>

          {/*Contact Form */}
          <form className="p-6 space-y-6 w-full">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white">
                Name <span className="text-xs text-gray-300">(required)</span>
              </label>
              <div className="flex gap-4 mt-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 bg-transparent border border-white/40 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 bg-transparent border border-white/40 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white">
                Email <span className="text-xs text-gray-300">(required)</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-white">
                Subject{" "}
                <span className="text-xs text-gray-300">(required)</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white">
                Message{" "}
                <span className="text-xs text-gray-300">(required)</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
              type="submit"
              className="mt-4 px-12 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-200 border-2 border-transparent hover:cursor-pointer"
              >
              Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
