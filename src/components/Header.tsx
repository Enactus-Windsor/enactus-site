"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/teams", label: "Our Team" },
    { href: "/our-projects", label: "Our Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/join-us", label: "Join Us" },

  ];

  return (
    <header className="bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Logo" className="h-34 w-34 object-contain" />
        </Link>
        <ul className="mt-1 flex gap-8 list-none font-bold text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`hover:underline  ${
                  pathname === link.href
                    ? "underline underline-offset-4 decoration-2 decoration-white"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
