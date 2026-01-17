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

  // only black on these routes
  const darkHeaderRoutes = new Set(["/teams", "/our-projects"]);
  const isDarkHeader = darkHeaderRoutes.has(pathname);

  return (
    <header
      className={[
        "text-white pb-[20px]",
        isDarkHeader ? "bg-black/85 backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Logo" className="h-34 w-34 object-contain" />
        </Link>

        <ul className="mt-1 flex gap-8 list-none font-bold text-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "hover:underline",
                    isActive
                      ? "underline underline-offset-4 decoration-2 decoration-white"
                      : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
