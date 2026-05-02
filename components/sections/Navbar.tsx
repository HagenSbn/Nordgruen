"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einsatzgebiete", href: "/standorte" },
  { label: "Über Uns", href: "/ueber-uns" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled || open ? "border-b border-[#e5e7eb] shadow-sm" : ""
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0"
        >
          <img
            src="/logo-icon.svg"
            alt="Nordgrün Icon"
            className="h-8 sm:h-9 w-auto flex-shrink-0"
          />
          <img
            src="/logo-wordmark.svg"
            alt="Nordgrün"
            className="h-4 sm:h-5 w-auto flex-shrink-0"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[#374151] hover:text-[#309c30] transition-colors font-body whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:041212633100"
            className="hidden lg:flex items-center gap-2 text-[15px] font-medium text-[#309c30] font-body whitespace-nowrap"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            04121 2633100
          </a>
          <a
            href="/#kontakt"
            className="hidden sm:inline-flex items-center bg-[#309c30] hover:bg-[#1e6b1e] text-white text-[14px] sm:text-[15px] font-semibold px-4 sm:px-5 py-2.5 rounded-[6px] transition-colors font-body whitespace-nowrap"
          >
            Termin
          </a>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-[#111827]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white">
          <nav className="max-w-container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[16px] font-medium text-[#111827] hover:text-[#309c30] transition-colors font-body"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:041212633100"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 text-[16px] font-medium text-[#309c30] font-body"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              04121 2633100
            </a>
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 block w-full text-center bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold py-3 rounded-[6px] transition-colors font-body text-[15px]"
            >
              Kostenlosen Termin anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
