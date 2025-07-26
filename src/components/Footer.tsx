import React from "react";
import { TablerBrandInstagram } from "../components/icons/Instagram";
import { TablerBrandLinkedin } from "../components/icons/Linkedin";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-center py-8 px-4 text-black">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Logo placeholder */}
        <img src={logo.src} alt="Enactus Logo" className="h-12" />

        {/* Organization Name */}
        <p className="text-sm font-medium">University of Windsor</p>

        {/* Social Icons */}
        <div className="flex space-x-4 my-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <TablerBrandInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <TablerBrandLinkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Tagline */}
        <p className="italic">
          <span className="underline font-semibold">Local Solutions</span>{" "}
          <span className="font-semibold">to Global Problems</span>
        </p>

        {/* Address */}
        <div className="text-sm mt-4 leading-5">
          <p className="font-semibold">Odette School of</p>
          <p className="font-semibold">Business</p>
          <p>401 Sunset Avenue,</p>
          <p>Room B09</p>
          <p>Windsor, Ontario,</p>
          <p>Canada, N9B 3P4</p>
        </div>
      </div>
    </footer>
  );
}
