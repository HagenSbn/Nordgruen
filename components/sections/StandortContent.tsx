"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { StandortData } from "@/app/standorte/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: i * 0.07 },
  }),
};

const S = 1.75;

const serviceIcons = [
  {
    label: "Baumschnitt & Kronenpflege",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    label: "Baumfällung",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 12-8.5 8.5a2.12 2.12 0 01-3-3L11 9"/>
        <path d="M15 13 9 7l4-4 6 6h3a8 8 0 01-7 7z"/>
      </svg>
    ),
  },
  {
    label: "Kronenpflege",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "Baumkontrolle",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
  },
  {
    label: "Notfällung",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
];

function AnimSection({
  children,
  className,
}: {
  children: (isInView: boolean) => React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className}>
      {children(isInView)}
    </div>
  );
}

export default function StandortContent({ data }: { data: StandortData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d2b08] pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/standorte"
              className="inline-flex items-center gap-2 text-[#4a9e30] text-[14px] font-body font-medium hover:underline mb-8 block"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Alle Einsatzgebiete
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-3"
          >
            {data.region}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-display font-bold text-[48px] md:text-[56px] text-white leading-tight mb-5"
          >
            Baumpflege in{" "}
            <span className="text-[#4a9e30]">{data.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.17 }}
            className="text-white/70 text-[17px] font-body leading-[1.7] max-w-2xl"
          >
            {data.intro[0]}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <AnimSection className="grid lg:grid-cols-2 gap-12 items-start">
            {(isInView) => (
              <>
                <div className="space-y-5">
                  {data.intro.slice(1).map((p, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-[16px] text-[#374151] leading-[1.8] font-body"
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="bg-[#f0faf0] rounded-[12px] p-8 border border-[#e5e7eb]"
                >
                  <span className="text-[12px] font-semibold text-[#309c30] uppercase tracking-[0.08em] font-body block mb-4">
                    NORDGRÜN IN {data.name.toUpperCase()}
                  </span>
                  <ul className="space-y-3">
                    {[
                      "ETW – European Tree Worker",
                      "FLL-zertifizierter Baumkontrolleur",
                      "Alle Maßnahmen nach ZTV-Baumpflege",
                      "Kostenloser Vor-Ort-Termin",
                      "Antragstellung bei Genehmigungen",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-[#374151] font-body">
                        <span className="text-[#309c30] font-bold flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#kontakt"
                    className="mt-6 inline-flex items-center gap-2 bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold px-5 py-3 rounded-[6px] transition-all hover:scale-[1.02] font-body text-[14px]"
                  >
                    Kostenlosen Termin anfragen
                  </a>
                </motion.div>
              </>
            )}
          </AnimSection>
        </div>
      </section>

      {/* Services – quick-nav grid */}
      <section className="py-16 bg-[#f0faf0] border-b border-[#e5e7eb]">
        <div className="max-w-container mx-auto px-6">
          <AnimSection>
            {(isInView) => (
              <>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
                >
                  <div>
                    <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-2">
                      LEISTUNGEN VOR ORT
                    </span>
                    <h2 className="font-display font-bold text-[30px] text-[#111827] leading-tight">
                      Unsere Leistungen in {data.name}
                    </h2>
                  </div>
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center gap-1.5 text-[#309c30] font-semibold text-[14px] font-body hover:underline whitespace-nowrap"
                  >
                    Alle Leistungen im Detail
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {serviceIcons.map((icon, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <Link
                        href="/leistungen"
                        className="flex flex-col items-center gap-2.5 p-4 rounded-[10px] bg-white border border-[#e5e7eb] hover:border-[#309c30] hover:shadow-sm transition-all group text-center"
                      >
                        <span className="text-[#309c30] group-hover:scale-110 transition-transform">
                          {icon.svg}
                        </span>
                        <span className="text-[12px] font-semibold text-[#374151] font-body leading-tight">
                          {data.services[i]?.title.split(" in ")[0] ?? icon.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </AnimSection>
        </div>
      </section>

      {/* Local Relevance */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <AnimSection className="max-w-3xl">
            {(isInView) => (
              <>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="mb-8"
                >
                  <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-3">
                    LOKALE RELEVANZ
                  </span>
                  <h2 className="font-display font-bold text-[36px] text-[#111827] leading-tight">
                    {data.localSection.title}
                  </h2>
                </motion.div>
                <div className="space-y-5">
                  {data.localSection.paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      custom={i + 1}
                      variants={fadeUp}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-[16px] text-[#374151] leading-[1.8] font-body"
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </>
            )}
          </AnimSection>
        </div>
      </section>

      {/* Why Nordgrün */}
      <section className="py-20 bg-[#0d2b08]">
        <div className="max-w-container mx-auto px-6">
          <AnimSection>
            {(isInView) => (
              <>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-center mb-10"
                >
                  <span className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-3">
                    WARUM NORDGRÜN
                  </span>
                  <h2 className="font-display font-bold text-[36px] text-white leading-tight">
                    Ihr verlässlicher Partner in{" "}
                    <span className="text-[#4a9e30]">{data.name}</span>
                  </h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {[
                    { title: "Inhabergeführt", desc: "Persönliche Betreuung durch den zertifizierten Betriebsleiter – kein Subunternehmer, keine Anonymität." },
                    { title: "ETW & FLL zertifiziert", desc: "European Tree Worker und FLL-Baumkontrolleur – höchste anerkannte Qualifikationen in der Baumpflege." },
                    { title: "Verlässliche Termine", desc: "Absprachen werden eingehalten. Angebote sind transparent und ohne versteckte Kosten." },
                    { title: "Schnelle Reaktion", desc: "Kurze Wege, regionaler Betrieb – bei Notfällen reagieren wir ohne Umwege." },
                    { title: "Saubere Ausführung", desc: "Wir hinterlassen Ihren Garten so, wie wir ihn vorgefunden haben – oder besser." },
                    { title: "Rechtssichere Arbeit", desc: "Alle Maßnahmen nach ZTV-Baumpflege, DIN-Normen und den geltenden Baumschutzvorschriften." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="bg-white/5 border border-white/10 rounded-[10px] px-5 py-5"
                    >
                      <p className="font-display font-bold text-[15px] text-[#4a9e30] mb-1">{item.title}</p>
                      <p className="text-[13px] text-white/60 font-body leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </AnimSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#309c30]">
        <div className="max-w-container mx-auto px-6 text-center">
          <AnimSection>
            {(isInView) => (
              <>
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="font-display font-bold text-[36px] text-white leading-tight mb-4"
                >
                  Baumpflege in {data.name} anfragen
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-white/80 text-[16px] font-body mb-8 max-w-lg mx-auto leading-[1.7]"
                >
                  Kostenloser Vor-Ort-Termin – wir besichtigen, beraten und erstellen
                  ein transparentes Angebot. Ohne Verpflichtung.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Link
                    href="/#kontakt"
                    className="bg-white text-[#309c30] font-semibold px-8 py-4 rounded-[6px] hover:bg-[#f0faf0] transition-all hover:scale-[1.02] font-body text-[15px]"
                  >
                    Kostenlosen Termin anfragen
                  </Link>
                  <a
                    href="tel:041212633100"
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-[6px] hover:bg-white/10 transition-all font-body text-[15px]"
                  >
                    04121 2633100
                  </a>
                </motion.div>
              </>
            )}
          </AnimSection>
        </div>
      </section>
    </>
  );
}
