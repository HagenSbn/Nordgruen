"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { standorte } from "@/app/standorte/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: i * 0.07 },
  }),
};

export default function StandorteOverview() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d2b08] pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#4a9e30] text-[14px] font-body font-medium hover:underline mb-8 block"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Zurück zur Startseite
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-3"
          >
            EINSATZGEBIETE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] mb-5 [text-wrap:balance]"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Unsere{" "}
            <span className="text-[#4a9e30]">Einsatzgebiete</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.17 }}
            className="text-white/70 font-body leading-[1.7] max-w-2xl"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)" }}
          >
            Nordgrün ist in Schleswig-Holstein und Hamburg aktiv. Wählen Sie Ihre
            Stadt, um lokale Informationen, Leistungen und Kontaktmöglichkeiten
            zu erhalten.
          </motion.p>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {standorte.map((s, i) => (
              <motion.div
                key={s.slug}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
              >
                <Link
                  href={`/standorte/${s.slug}`}
                  className="group flex flex-col h-full bg-white border border-[#e5e7eb] rounded-[12px] p-5 sm:p-6 lg:p-7 hover:border-[#309c30] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-[#309c30] flex-shrink-0"
                      style={{ background: "rgba(48, 156, 48, 0.1)" }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    {s.slug === "kiebitzreihe" && (
                      <span className="text-[11px] font-semibold text-[#309c30] bg-[#f0faf0] px-2.5 py-1 rounded-[4px] font-body">
                        Heimatstandort
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-1 group-hover:text-[#309c30] transition-colors break-words">
                    {s.name}
                  </h2>
                  <p className="text-[13px] text-[#6b7280] font-body mb-4">
                    {s.region}
                  </p>

                  <p className="text-[14px] text-[#374151] font-body leading-relaxed flex-1 mb-5">
                    {s.intro[0].slice(0, 120)}…
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[#309c30] font-semibold text-[14px] font-body group-hover:gap-2.5 transition-all">
                    Baumpflege in {s.name}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area note */}
      <section className="py-12 sm:py-16 bg-[#f0faf0]">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-display font-bold text-[#111827] mb-4 leading-tight [text-wrap:balance]"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)" }}
            >
              Ihre Stadt ist nicht dabei?
            </h2>
            <p className="text-[15px] text-[#374151] font-body leading-[1.8] mb-6">
              Nordgrün ist grundsätzlich im gesamten Raum Schleswig-Holstein und
              Hamburg tätig. Wenn Ihre Gemeinde nicht aufgeführt ist, sprechen
              Sie uns direkt an – wir prüfen, ob ein Einsatz möglich ist.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/#kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold px-6 sm:px-7 py-3.5 min-h-[48px] rounded-[6px] transition-all hover:scale-[1.02] font-body text-[15px]"
              >
                Anfrage stellen
              </Link>
              <a
                href="tel:041212633100"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#309c30] text-[#309c30] font-semibold px-6 sm:px-7 py-3.5 min-h-[48px] rounded-[6px] hover:bg-[#f0faf0] transition-all font-body text-[15px]"
              >
                04121 2633100
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
