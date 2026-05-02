"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-[#2d6a1f] flex-shrink-0"
      style={{ background: "rgba(45, 106, 31, 0.1)" }}
    >
      {children}
    </div>
  );
}

export default function Kontakt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-display font-bold text-[42px] text-[#111827] leading-tight mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-[16px] text-[#374151] font-body leading-[1.7] mb-8">
              Wir freuen uns auf Ihre Anfrage. Rufen Sie uns an oder senden Sie
              uns eine Nachricht – wir melden uns innerhalb von 24 Stunden.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="font-semibold text-[#111827] font-body text-[15px]">Adresse</p>
                  <p className="text-[#6b7280] text-[14px] font-body mt-0.5 leading-relaxed">
                    Nordgrün GmbH<br />
                    Musterstraße 12<br />
                    25421 Pinneberg
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="font-semibold text-[#111827] font-body text-[15px]">Telefon</p>
                  <a
                    href="tel:041212633100"
                    className="text-[#2d6a1f] text-[14px] font-body hover:underline mt-0.5 block"
                  >
                    04121 2633100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="font-semibold text-[#111827] font-body text-[15px]">E-Mail</p>
                  <a
                    href="mailto:info@nordgruen-hamburg.de"
                    className="text-[#2d6a1f] text-[14px] font-body hover:underline mt-0.5 block"
                  >
                    info@nordgruen-hamburg.de
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full border border-[#e5e7eb] rounded-[6px] px-4 py-3 text-[15px] text-[#111827] font-body focus:outline-none focus:border-[#2d6a1f] focus:ring-1 focus:ring-[#2d6a1f] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full border border-[#e5e7eb] rounded-[6px] px-4 py-3 text-[15px] text-[#111827] font-body focus:outline-none focus:border-[#2d6a1f] focus:ring-1 focus:ring-[#2d6a1f] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full border border-[#e5e7eb] rounded-[6px] px-4 py-3 text-[15px] text-[#111827] font-body focus:outline-none focus:border-[#2d6a1f] focus:ring-1 focus:ring-[#2d6a1f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  className="w-full border border-[#e5e7eb] rounded-[6px] px-4 py-3 text-[15px] text-[#111827] font-body focus:outline-none focus:border-[#2d6a1f] focus:ring-1 focus:ring-[#2d6a1f] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2d6a1f] hover:bg-[#1a3d12] text-white font-semibold py-4 px-8 rounded-[6px] transition-all hover:scale-[1.01] font-body text-[15px] flex items-center justify-center gap-2"
              >
                📅 Kostenlosen Termin anfragen
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
