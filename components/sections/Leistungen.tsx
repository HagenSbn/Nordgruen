"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const S = 1.75;

const services = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
    title: "Baumpflege",
    subtitle: "KRONENPFLEGE & SCHNITTMASSNAHMEN",
    desc: "Professionelle Kronenpflege, Erziehungsschnitt, Kronensicherung und Lichtraumprofilschnitt – fachgerecht nach FLL-Richtlinien.",
    checks: [
      "Kronenpflege & Erziehungsschnitt",
      "Kronensicherungsschnitt",
      "Lichtraumprofilschnitt",
      "Formschnitt",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Baumkontrollen",
    subtitle: "FLL-ZERTIFIZIERTE GUTACHTEN",
    desc: "Regelmäßige Sichtkontrollen, Baumkataster und Gutachten zur Verkehrssicherungspflicht – zertifiziert nach FLL-Standard.",
    checks: [
      "Regelmäßige Sichtkontrollen",
      "Baumkataster & Gutachten",
      "Schadbilderkennung",
      "Sanierungs- & Pflegepläne",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 12-8.5 8.5a2.12 2.12 0 01-3-3L11 9"/>
        <path d="M15 13 9 7l4-4 6 6h3a8 8 0 01-7 7z"/>
      </svg>
    ),
    title: "Baumfällungen",
    subtitle: "FÄLLUNGEN & RODUNGEN",
    desc: "Sichere Fällungen und Rodungen – von Problemfällungen über Gefahrenbäume bis zur Baufeldfreimachung.",
    checks: [
      "Baufeldfreimachungen",
      "Problemfällungen",
      "Beseitigung von Gefahrenbäumen",
      "Entfernung von Stubben",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12c0-4 4-7 4-7s1 4-1 6-3 1-3 1z"/>
        <path d="M12 16c0-3-4-5-4-5s-1 3 1 5 3 0 3 0z"/>
      </svg>
    ),
    title: "Baumpflanzungen",
    subtitle: "FACHGERECHTE NEUPFLANZUNGEN",
    desc: "Standortgerechte Neupflanzungen mit professioneller Beratung zur Auswahl und Pflege.",
    checks: [
      "Standortanalyse",
      "Artgerechte Pflanzung",
      "Anwuchspflege",
      "Pflegeberatung",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
    title: "Wurzelfräsen",
    subtitle: "STUMPFENTFERNUNG",
    desc: "Professionelle Entfernung von Baumstümpfen mittels Wurzelfräse – sauber, schnell und ohne Aufgraben.",
    checks: [
      "Fräsung bis 30cm Tiefe",
      "Restholzentsorgung",
      "Flächenvorbereitung",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"/>
        <path d="M5 22V16a7 7 0 0 1 14 0v6"/>
        <path d="M9 16a4 4 0 0 1 6 0"/>
      </svg>
    ),
    title: "Landschaftspflege",
    subtitle: "PFLEGE & SCHNITTMASSNAHMEN",
    desc: "Umfassende Pflege von Grünanlagen, Hecken und Gehölzen für Privatgärten und Gewerbeflächen.",
    checks: [
      "Heckenschnitt",
      "Gehölzpflege",
      "Grünanlagenpflege",
      "Saisonale Pflege",
    ],
  },
];

export default function Leistungen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leistungen" className="py-14 sm:py-20 md:py-24 bg-[#f0faf0]">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10 sm:mb-12">
          <div>
            <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-3">
              UNSERE LEISTUNGEN
            </span>
            <h2
              className="font-display font-bold text-[#111827] leading-tight [text-wrap:balance]"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.625rem)" }}
            >
              Alles rund um{" "}
              <span className="text-[#4a9e30]">Baum &amp; Grün</span>
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="text-[#309c30] font-semibold text-sm hover:underline font-body whitespace-nowrap"
          >
            Alle Leistungen →
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-white border border-[#e5e7eb] rounded-[12px] p-5 sm:p-6 lg:p-7 hover:shadow-md hover:border-[#309c30] transition-all"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-[#309c30] mb-5"
                style={{ background: "rgba(48, 156, 48, 0.1)" }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-[20px] text-[#111827] mb-1 break-words">
                {service.title}
              </h3>
              <p className="text-[12px] font-semibold text-[#309c30] uppercase tracking-[0.08em] font-body mb-3 break-words">
                {service.subtitle}
              </p>
              <p className="text-[14px] text-[#6b7280] leading-relaxed font-body mb-5">
                {service.desc}
              </p>
              <ul className="space-y-1.5">
                {service.checks.map((check) => (
                  <li
                    key={check}
                    className="flex items-start gap-2 text-[14px] text-[#374151] font-body"
                  >
                    <span className="text-[#309c30] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
