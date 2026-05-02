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
    <section id="ueber-uns" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-4">
              ÜBER UNS
            </span>
            <h2
              className="font-display font-bold text-[#111827] leading-tight mb-5 sm:mb-6 [text-wrap:balance]"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.625rem)" }}
            >
              Fachkompetenz,{" "}
              <span className="text-[#4a9e30]">die Sie spüren.</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#374151] leading-[1.7] font-body mb-4">
              Nordgrün steht für zertifizierte Fachkompetenz in der Baum- und
              Landschaftspflege. Unser Betriebsleiter Torben Schönborn bringt
              als European Tree Worker (ETW) und FLL-zertifizierter Baumkontrolleur
              jahrelange Erfahrung und höchste Qualifikationen mit.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#374151] leading-[1.7] font-body mb-7 sm:mb-8">
              Jede Maßnahme wird nach aktuellen FLL-Richtlinien und DIN-Normen
              durchgeführt. Ehrlichkeit, Transparenz und Qualität sind die
              Grundpfeiler unserer Arbeit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-7 sm:mb-8">
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
                  <p className="font-display font-bold text-[15px] text-[#309c30] break-words">
                    {q.title}
                  </p>
                  <p className="text-[13px] text-[#6b7280] font-body break-words">
                    {q.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="/ueber-uns"
              className="text-[#309c30] font-semibold text-[15px] hover:underline font-body"
            >
              Mehr über uns erfahren →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="relative max-w-md w-full mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative rounded-[12px] overflow-hidden aspect-[4/5]">
              <Image
                src="/torben-schoenborn.jpg"
                alt="Torben Schönborn – Betriebsleiter Nordgrün"
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-2 sm:-left-4 right-2 sm:right-auto bg-[#0d2b08] rounded-[12px] px-4 sm:px-5 py-3 sm:py-4 shadow-xl max-w-[calc(100%-1rem)] sm:max-w-xs">
              <p className="text-white font-display font-bold text-[15px] sm:text-[16px] break-words">
                Torben Schönborn
              </p>
              <p className="text-[#4a9e30] text-[12px] sm:text-[13px] font-body mt-0.5 break-words">
                Betriebsleiter · FLL Baumkontrolleur & ETW
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
