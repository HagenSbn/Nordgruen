"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Voll versichert",
    desc: "Alle Arbeiten sind vollständig versichert – für Ihre Sicherheit und unsere Verantwortung.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Höchste Qualifikation",
    desc: "FLL-zertifiziert und ETW – wir bringen die höchsten Branchenqualifikationen mit.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Transparent & fair",
    desc: "Klare Angebote ohne versteckte Kosten. Was wir sagen, das halten wir auch.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Kostenloser Termin",
    desc: "Kein Risiko: Wir kommen kostenlos zu Ihnen und erstellen ein unverbindliches Angebot.",
  },
];

export default function Vorteile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#0d2b08]" id="vorteile">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-3">
            WARUM NORDGRÜN
          </span>
          <h2
            className="font-display font-bold text-white leading-tight [text-wrap:balance]"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.625rem)" }}
          >
            Vorteile unserer Baumpflege in Hamburg
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-[#4a9e30] mb-5"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                {adv.icon}
              </div>
              <h3 className="font-display font-bold text-[18px] text-white mb-3 break-words">
                {adv.title}
              </h3>
              <p className="text-[14px] text-white/70 leading-relaxed font-body">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
