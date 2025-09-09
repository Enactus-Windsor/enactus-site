"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactFormClient() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwpnybby", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Thanks! Your message has been sent.", {
          position: "bottom-right",
        });
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "bottom-right",
        });
      }
    } catch {
      toast.error("Network error. Please try again later.", {
        position: "bottom-right",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 space-y-6 w-full">
        {/* Hidden config fields */}
        <input
          type="hidden"
          name="_subject"
          value="New Enactus Windsor contact form submission"
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-white">
            Name <span className="text-xs text-gray-300">(required)</span>
          </label>
          <div className="flex gap-4 mt-1">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="flex-1 bg-transparent border border-white/40 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              name="last_name"
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
            name="email"
            placeholder="Email"
            className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-white">
            Subject <span className="text-xs text-gray-300">(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-white">
            Message <span className="text-xs text-gray-300">(required)</span>
          </label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            className="w-full bg-transparent border border-white/40 text-white px-4 py-2 rounded-md mt-1 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 px-12 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-200 border-2 border-transparent hover:cursor-pointer disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}
