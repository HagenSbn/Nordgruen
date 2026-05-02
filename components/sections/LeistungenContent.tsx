"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const S = 1.75;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    id: "baumpflege",
    number: "01",
    title: "Baumpflege",
    subtitle: "KRONENPFLEGE & SCHNITTMASSNAHMEN",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
    intro: "Alle Baumpflegemaßnahmen werden fachgerecht nach den Richtlinien der ZTV-Baumpflege (Zusätzliche Technische Vertragsbedingungen und Richtlinien für Baumpflege) der FLL (Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau e.V.) ausgeführt. Die Durchführung erfolgt unterstützt durch moderne Seilklettertechnik und Hubarbeitsbühne.",
    badge: "ZTV-Baumpflege · FLL-Standard",
    groups: [
      {
        title: "Kronenpflege",
        note: "Alle Schnittmaßnahmen gemäß ZTV-Baumpflege",
        checks: ["Erziehungs- und Aufbauschnitt bei Jungbäumen", "Kronenpflege", "Kroneinkürzung", "Kronensicherungsschnitt", "Kronensicherung", "Lichtraumprofilschnitt", "Formschnitt"],
      },
      {
        title: "Baubegleitung",
        note: "Baumschutz gemäß ZTV/R-SBB und DIN 18920",
        checks: ["Baumschutz auf und an Baustellen", "Schutzmaßnahmen nach ZTV/R-SBB", "DIN 18920 – Schutz von Bäumen, Pflanzenbeständen und Vegetationsflächen", "Überwachung und Dokumentation"],
      },
    ],
  },
  {
    id: "baumkontrollen",
    number: "02",
    title: "Baumkontrollen & Gutachten",
    subtitle: "FLL-ZERTIFIZIERTE KONTROLLEN",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    intro: "Als FLL-zertifizierte Baumkontrolleure können wir jeden Baum fachgerecht überprüfen. Die FLL ist ein ehrenamtlicher Zusammenschluss von rund 500 Baumpflege-Spezialisten und steht für Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau. Sie repräsentiert sich anhand einer Baumkontrollrichtlinie, die den genauen Ablauf einer korrekten Baumkontrolle definiert. Bei genehmigungspflichtigen Eingriffen kümmern wir uns um die Antragstellung.",
    badge: "FLL-Zertifizierter Baumkontrolleur",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Verkehrssicherungspflicht nach FLL-Richtlinie",
        checks: ["Regelmäßige Sichtkontrollen", "Baumkataster", "Baumgutachten", "Schadbilderkennung", "Mehrjährige Kontrolle anhand Kartierung", "Sanierungs- und Pflegepläne", "Verkehrssicherungspflicht (nach FLL)"],
      },
    ],
  },
  {
    id: "baumfaellungen",
    number: "03",
    title: "Baumfällungen & Rodungen",
    subtitle: "FÄLLUNGEN, RODUNGEN & ENTSORGUNG",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 12-8.5 8.5a2.12 2.12 0 01-3-3L11 9"/>
        <path d="M15 13 9 7l4-4 6 6h3a8 8 0 01-7 7z"/>
      </svg>
    ),
    intro: "Wir führen Baumfällungen und Rodungen aller Art sicher und fachgerecht durch – von der einfachen Fällung bis zur Problemfällung in engen Verhältnissen. Bei genehmigungspflichtigen Fällungen übernehmen wir die Antragstellung bei der zuständigen Behörde gemäß der regionalen Baumschutzverordnung.",
    badge: "Baumschutzverordnung · Antragstellung",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Inkl. fachgerechter Entsorgung des Schnittguts",
        checks: ["Baufeldfreimachungen", "Standard-Fällungen", "Problemfällungen in schwierigem Gelände", "Beseitigung von Gefahrenbäumen", "Entfernung von Stubben", "Abtransport und Entsorgung des Holzes"],
      },
    ],
  },
  {
    id: "baumpflanzungen",
    number: "04",
    title: "Baumpflanzungen",
    subtitle: "FACHGERECHTE NEUPFLANZUNGEN",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12c0-4 4-7 4-7s1 4-1 6-3 1-3 1z"/>
        <path d="M12 16c0-3-4-5-4-5s-1 3 1 5 3 0 3 0z"/>
      </svg>
    ),
    intro: "Standortgerechte Neupflanzungen sind die Grundlage für einen gesunden und langlebigen Baumbestand. Wir beraten Sie fachkundig bei der Artenwahl, übernehmen die Pflanzung nach anerkannten Regeln der Technik und begleiten das Anwachsen der neuen Bäume.",
    badge: "Standortgerechte Artenwahl · Anwuchsbegleitung",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Inkl. Standortanalyse und Pflegeberatung",
        checks: ["Standortanalyse und Bodenbeurteilung", "Fachkundige Beratung zur Artenwahl", "Artgerechte Pflanzung nach DIN-Norm", "Anwuchspflege und Bewässerung", "Verankerung und Schutzmaßnahmen", "Langfristige Pflegeberatung"],
      },
    ],
  },
  {
    id: "wurzelfraesen",
    number: "05",
    title: "Wurzelfräsen",
    subtitle: "STUMPFENTFERNUNG OHNE AUFGRABEN",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
    intro: "Nach einer Fällung verbleiben Baumstümpfe oft als Hindernis oder Stolperfalle. Mit professioneller Wurzelfräse entfernen wir Stümpfe sauber bis in die Tiefe – ohne aufwendiges Ausgraben, schonend für angrenzende Flächen und schnell einsatzbereit für Neubepflanzung oder Flächengestaltung.",
    badge: "Bis 30 cm Frästiefe · Flächenvorbereitung",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Sauber, schnell und ohne Aufgraben",
        checks: ["Fräsung bis 30 cm Tiefe", "Schonendes Arbeiten an angrenzenden Flächen", "Restholz und Späne-Entsorgung", "Flächenvorbereitung für Neubepflanzung", "Einsatz in engen und schwer zugänglichen Bereichen"],
      },
    ],
  },
  {
    id: "schredderarbeiten",
    number: "06",
    title: "Schredderarbeiten",
    subtitle: "HÄCKSELN & MATERIALENTSORGUNG",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8"/>
        <rect x="1" y="3" width="22" height="5"/>
        <line x1="10" y1="12" x2="14" y2="12"/>
      </svg>
    ),
    intro: "Anfallende Äste, Kronenteile und Grünschnitt werden direkt vor Ort professionell gehäckselt. Das reduziert das Volumen erheblich und ermöglicht eine platzsparende Entsorgung oder die Weiterverwendung als Mulch. Auf Wunsch belassen wir das Häckselgut als natürliche Bodenbedeckung auf Ihrer Fläche.",
    badge: "Direkthäckslung vor Ort · Mulchnutzung möglich",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Inkl. Abtransport auf Wunsch",
        checks: ["Häckseln von Ästen und Kronenmaterial", "Verarbeitung von Grünschnitt aller Art", "Erhebliche Volumenreduzierung", "Mulchmaterial für Gartennutzung", "Abtransport und fachgerechte Entsorgung"],
      },
    ],
  },
  {
    id: "landschaftspflege",
    number: "07",
    title: "Landschaftspflege",
    subtitle: "PFLEGE & SCHNITTMASSNAHMEN",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"/>
        <path d="M5 22V16a7 7 0 0 1 14 0v6"/>
        <path d="M9 16a4 4 0 0 1 6 0"/>
      </svg>
    ),
    intro: "Nordgrün übernimmt die professionelle Pflege von Grünanlagen, Gehölzen und Landschaftsstrukturen – für Privatgärten ebenso wie für Kommunen, Wohnungsbaugesellschaften und Gewerbekunden. Alle Maßnahmen werden nach den anerkannten Regeln der Technik gemäß ZTV-Baumpflege und der regionalen Baumschutzverordnungen durchgeführt.",
    badge: "Privat · Kommunal · Gewerblich",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Saisonal und ganzjährig verfügbar",
        checks: ["Landschaftspflege und Grünanlagenpflege", "Schnittmaßnahmen an Gehölzen", "Knickpflege (schleswig-holsteinische Knicks)", "Trassenpflege von Versorgungsleitungen", "Pflege öffentlichen Straßenbegleitgrüns", "Heckenschnitt und Formgehölzpflege", "Saisonale Pflegeeinsätze"],
      },
    ],
  },
  {
    id: "kaminholz",
    number: "08",
    title: "Kaminholz",
    subtitle: "BRENNHOLZ AUS EIGENEM EINSCHLAG",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 0-4 4-4 9a4 4 0 008 0c0-5-4-9-4-9z"/>
        <path d="M12 11c0 0-2 2-2 4a2 2 0 004 0c0-2-2-4-2-4z"/>
      </svg>
    ),
    intro: "Bei Fällarbeiten anfallendes Holz verarbeiten wir auf Wunsch direkt zu hochwertigem Kaminholz. Das Holz wird gespalten, trocken gelagert und bei Bedarf geliefert. So entsteht aus Baumfällungen ein nachhaltiges Nebenprodukt, das Sie direkt nutzen können.",
    badge: "Aus eigenem Einschlag · Auf Anfrage lieferbar",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Auf Wunsch mit Lieferung",
        checks: ["Verarbeitung von Fällholz zu Brennholz", "Gespalten oder ungespalten erhältlich", "Verschiedene heimische Holzarten", "Trocken gelagert", "Lieferung auf Anfrage", "Selbstabholung möglich"],
      },
    ],
  },
  {
    id: "baumschutz",
    number: "09",
    title: "Baumschutz auf Baustellen",
    subtitle: "SCHUTZ NACH DIN 18920 & ZTV/R-SBB",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={S} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
    intro: "Bäume auf und im Umfeld von Baustellen sind besonderen Gefährdungen ausgesetzt. Wir planen und realisieren fachgerechte Schutzmaßnahmen nach DIN 18920 und ZTV/R-SBB, überwachen deren Einhaltung und dokumentieren den Zustand der Bäume vor, während und nach der Baumaßnahme. So schützen Sie sich vor Haftungsrisiken und erhalten wertvolle Gehölze.",
    badge: "DIN 18920 · ZTV/R-SBB · Dokumentation",
    groups: [
      {
        title: "Leistungsumfang",
        note: "Planung, Ausführung & Dokumentation",
        checks: ["Zustandserfassung vor Baubeginn", "Planung von Schutzmaßnahmen nach DIN 18920", "Einbau von Baumschutzgittern und Wurzelschutz", "Schutzmaßnahmen nach ZTV/R-SBB", "Bodenlockerung und Belüftung nach Verdichtung", "Baumpflegerische Begleitmaßnahmen", "Überwachung während der gesamten Bauphase", "Fotodokumentation und Abschlussbericht"],
      },
    ],
  },
];

function QuickNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#f0faf0] py-8 sm:py-10 border-b border-[#e5e7eb]">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col items-center gap-2 p-2.5 sm:p-3 rounded-[10px] bg-white border border-[#e5e7eb] hover:border-[#309c30] hover:shadow-sm transition-all group text-center min-h-[88px]"
            >
              <span className="text-[#309c30] group-hover:scale-110 transition-transform">
                {s.icon}
              </span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#374151] font-body leading-tight break-words">
                {s.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceSection({ service, idx }: { service: typeof services[0]; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={service.id}
      className={`py-14 sm:py-20 md:py-24 scroll-mt-16 ${idx % 2 === 0 ? "bg-white" : "bg-[#f0faf0]"}`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#309c30] flex items-center justify-center text-white flex-shrink-0">
                  {service.icon}
                </div>
                <span
                  className="font-display font-extrabold text-[#e5e7eb]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)" }}
                >
                  {service.number}
                </span>
              </div>
              <span className="text-[12px] font-semibold text-[#309c30] uppercase tracking-[0.08em] font-body block mb-2 break-words">
                {service.subtitle}
              </span>
              <h2
                className="font-display font-bold text-[#111827] leading-tight mb-4 [text-wrap:balance]"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.875rem)" }}
              >
                {service.title}
              </h2>
              <p className="text-[15px] text-[#374151] leading-[1.75] font-body mb-6">
                {service.intro}
              </p>
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-[6px] text-[12px] font-semibold text-[#309c30] font-body"
                style={{ background: "rgba(48, 156, 48, 0.1)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                {service.badge}
              </div>
              <div className="mt-7 sm:mt-8">
                <a
                  href="#kontakt-leistungen"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold px-5 py-3 min-h-[48px] rounded-[6px] transition-all hover:scale-[1.02] font-body text-[14px]"
                >
                  Angebot anfragen
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {service.groups.map((group, gi) => (
              <motion.div
                key={group.title}
                custom={gi}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-white rounded-[12px] border border-[#e5e7eb] p-5 sm:p-6 lg:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-5 gap-2 sm:gap-4">
                  <h3 className="font-display font-bold text-[19px] sm:text-[20px] text-[#111827] break-words">
                    {group.title}
                  </h3>
                  {group.note && (
                    <span className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-[0.06em] font-body bg-[#f0faf0] px-2.5 py-1 rounded-[4px] sm:flex-shrink-0 self-start">
                      {group.note}
                    </span>
                  )}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {group.checks.map((check, ci) => (
                    <motion.li
                      key={check}
                      custom={ci * 0.5}
                      variants={fadeUp}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="flex items-start gap-2.5 text-[14px] text-[#374151] font-body"
                    >
                      <span className="text-[#309c30] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {check}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="kontakt-leistungen" className="bg-[#309c30] py-12 sm:py-16">
      <div ref={ref} className="max-w-container mx-auto px-4 sm:px-6 text-center">
        <motion.span
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white/70 text-[13px] font-semibold uppercase tracking-[0.1em] font-body block mb-3"
        >
          KOSTENLOS & UNVERBINDLICH
        </motion.span>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display font-bold text-white leading-tight mb-4 [text-wrap:balance]"
          style={{ fontSize: "clamp(1.625rem, 4vw, 2.25rem)" }}
        >
          Kostenlosen Vor-Ort-Termin anfragen
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white/80 text-[15px] sm:text-[16px] font-body mb-7 sm:mb-8 max-w-xl mx-auto leading-[1.7]"
        >
          Wir besichtigen Ihr Grundstück kostenlos, beraten Sie fachkundig
          und erstellen ein transparentes Angebot ohne versteckte Kosten.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/#kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#309c30] font-semibold px-7 sm:px-8 py-3.5 min-h-[48px] rounded-[6px] hover:bg-[#f0faf0] transition-all hover:scale-[1.02] font-body text-[15px]"
          >
            Termin anfragen
          </Link>
          <a
            href="tel:041212633100"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-7 sm:px-8 py-3.5 min-h-[48px] rounded-[6px] hover:bg-white/10 transition-all font-body text-[15px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            04121 2633100
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function LeistungenContent() {
  return (
    <main>
      {/* Hero – animates on load */}
      <section className="bg-[#0d2b08] pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-body mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
              Zurück zur Startseite
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-3"
          >
            UNSERE LEISTUNGEN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display font-extrabold text-white leading-[1.1] mb-4 [text-wrap:balance]"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Alles rund um{" "}
            <span className="text-[#4a9e30]">Baum &amp; Grün</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="text-white/70 font-body leading-[1.7] max-w-2xl"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)" }}
          >
            Von der Kronenpflege bis zur Landschaftspflege – alle unsere
            Leistungen werden nach FLL-Richtlinien und ZTV-Baumpflege von
            zertifizierten Fachleuten erbracht.
          </motion.p>
        </div>
      </section>

      <QuickNav />

      {services.map((service, idx) => (
        <ServiceSection key={service.id} service={service} idx={idx} />
      ))}

      <CtaSection />
    </main>
  );
}
