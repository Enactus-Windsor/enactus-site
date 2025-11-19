import React from "react";
import { TablerBrandInstagram } from "../components/icons/Instagram";
import { TablerBrandLinkedin } from "../components/icons/Linkedin";
import logo from "../assets/enactuswindsorblack.png";
export default function Footer() {
  return (
    <footer className="bg-yellow-500 border-t-2 border-blacktext-center py-8 px-4 text-black">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Logo placeholder */}
        <img src={logo.src} alt="Enactus Logo" className="h-18 w-auto" />

        {/* Organization Name */}
        <p className="text-sm font-medium">University of Windsor</p>

        {/* Social Icons */}
        <div className="flex space-x-4 my-2">
          <a
            href="https://www.instagram.com/enactus_windsor/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <TablerBrandInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/enactus-windsor-canada/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <TablerBrandLinkedin className="h-6 w-6" />
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
          <p>Room 102</p>
          <p>Windsor, Ontario,</p>
          <p>Canada, N9B 3P4</p>
        </div>
      </div>
    </footer>
  );
}
