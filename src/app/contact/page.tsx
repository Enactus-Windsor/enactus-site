// src/app/contact/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};

import contactbg from "@/assets/odettecontact.jpg";
import Background from "@/components/Background";
import ContactFormClient from "./ContactFormClient"; // <- import the client form

export default function Contact() {
  return (
    <div className="relative min-h-screen text-white">
      <Background src={contactbg} overlay />

      <main className="flex flex-col items-center justify-center px-6 py-12 lg:px-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
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

          {/* Contact Form (Client Component with toast) */}
          <ContactFormClient />
        </div>
      </main>
    </div>
  );
}
