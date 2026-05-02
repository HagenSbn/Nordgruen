"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "border-b border-[#e5e7eb] shadow-sm" : ""
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-icon.svg" alt="Nordgrün Icon" className="h-9 w-auto" />
          <img src="/logo-wordmark.svg" alt="Nordgrün" className="h-5 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[15px] font-medium text-[#374151] hover:text-[#309c30] transition-colors font-body"
          >
            Start
          </Link>
          <Link
            href="/leistungen"
            className="text-[15px] font-medium text-[#374151] hover:text-[#309c30] transition-colors font-body"
          >
            Leistungen
          </Link>
          <Link
            href="/standorte"
            className="text-[15px] font-medium text-[#374151] hover:text-[#309c30] transition-colors font-body"
          >
            Einsatzgebiete
          </Link>
          <Link
            href="/ueber-uns"
            className="text-[15px] font-medium text-[#374151] hover:text-[#309c30] transition-colors font-body"
          >
            Über Uns
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:041212633100"
            className="hidden md:flex items-center gap-2 text-[15px] font-medium text-[#309c30] font-body"
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
            className="bg-[#309c30] hover:bg-[#1e6b1e] text-white text-[15px] font-semibold px-5 py-2.5 rounded-[6px] transition-colors font-body"
          >
            Kostenloser Termin
          </a>
        </div>
      </div>
    </header>
  );
}
