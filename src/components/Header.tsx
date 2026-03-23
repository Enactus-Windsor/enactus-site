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
    { href: "/news", label: "News" },
  ];
  const isJoinMenuActive = pathname === "/join-us" || pathname === "/contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/15 backdrop-blur-[2px]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 pb-3 pt-3 sm:flex-row sm:gap-8 sm:px-6 sm:pb-4 sm:pt-4">
        <Link href="/" aria-label="Home" className="inline-flex flex-shrink-0 items-center">
          <Image src={logo} alt="Logo" className="h-14 w-auto object-contain sm:h-16" />
        </Link>

        <nav className="w-full sm:ml-auto sm:w-auto">
          <ul className="flex list-none flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold sm:justify-end sm:gap-x-7 sm:text-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "inline-flex whitespace-nowrap px-1 py-1 transition-colors",
                      isActive
                        ? "text-white underline decoration-2 underline-offset-4"
                        : "text-white/90 hover:text-yellow-200",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="group relative">
              <Link
                href="/join-us"
                className={[
                  "inline-flex whitespace-nowrap px-1 py-1 transition-colors",
                  isJoinMenuActive
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-yellow-200",
                ].join(" ")}
              >
                Join Us
              </Link>

              <div className="hidden min-w-[170px] bg-black/70 p-2 backdrop-blur-md sm:absolute sm:right-0 sm:top-full sm:mt-0 sm:block sm:translate-y-1 sm:invisible sm:opacity-0 sm:pointer-events-none sm:transition-all sm:duration-200 sm:group-hover:visible sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto">
                <Link
                  href="/contact"
                  className={[
                    "block px-3 py-2 text-base transition-colors",
                    pathname === "/contact"
                      ? "text-yellow-200"
                      : "text-white hover:text-yellow-200",
                  ].join(" ")}
                >
                  Contact
                </Link>
              </div>
            </li>

            <li className="sm:hidden">
              <Link
                href="/contact"
                className={[
                  "inline-flex whitespace-nowrap px-1 py-1 transition-colors",
                  pathname === "/contact"
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-yellow-200",
                ].join(" ")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto h-[2px] w-full max-w-7xl bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
    </header>
  );
}
