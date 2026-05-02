"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const qualifications = [
  { title: "Verlässliche Ausführung", subtitle: "Termine, Absprachen & Angebote ohne Überraschungen" },
  { title: "FLL & ETW zertifiziert", subtitle: "Arbeiten nach geprüften Standards" },
  { title: "Arbeiten nach DIN & ZTV", subtitle: "Rechtssicher & fachgerecht ausgeführt" },
  { title: "Jahrelange Erfahrung", subtitle: "Zahlreiche Projekte im Raum Hamburg" },
];

export default function UeberUns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber-uns" className="py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[13px] font-semibold text-[#2d6a1f] uppercase tracking-[0.1em] font-body block mb-4">
              ÜBER UNS
            </span>
            <h2 className="font-display font-bold text-[42px] text-[#111827] leading-tight mb-6">
              Fachkompetenz,{" "}
              <span className="text-[#4a9e30]">die Sie spüren.</span>
            </h2>
            <p className="text-[16px] text-[#374151] leading-[1.7] font-body mb-4">
              Nordgrün steht für zertifizierte Fachkompetenz in der Baum- und
              Landschaftspflege. Unser Betriebsleiter Torben Schönborn bringt
              als European Tree Worker (ETW) und FLL-zertifizierter Baumkontrolleur
              jahrelange Erfahrung und höchste Qualifikationen mit.
            </p>
            <p className="text-[16px] text-[#374151] leading-[1.7] font-body mb-8">
              Jede Maßnahme wird nach aktuellen FLL-Richtlinien und DIN-Normen
              durchgeführt. Ehrlichkeit, Transparenz und Qualität sind die
              Grundpfeiler unserer Arbeit.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {qualifications.map((q, i) => (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="bg-[#f0faf0] rounded-[8px] px-4 py-3"
                >
                  <p className="font-display font-bold text-[15px] text-[#2d6a1f]">
                    {q.title}
                  </p>
                  <p className="text-[13px] text-[#6b7280] font-body">
                    {q.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="text-[#2d6a1f] font-semibold text-[15px] hover:underline font-body"
            >
              Mehr über uns erfahren →
            </a>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[12px] overflow-hidden aspect-[4/5]">
              <Image
                src="/torben-schoenborn.jpg"
                alt="Torben Schönborn – Betriebsleiter Nordgrün"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Name card overlay */}
            <div className="absolute bottom-6 -left-4 bg-[#0d2b08] rounded-[12px] px-5 py-4 shadow-xl">
              <p className="text-white font-display font-bold text-[16px]">
                Torben Schönborn
              </p>
              <p className="text-[#4a9e30] text-[13px] font-body mt-0.5">
                Betriebsleiter · FLL Baumkontrolleur & ETW
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
