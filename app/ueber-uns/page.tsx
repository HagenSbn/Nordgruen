import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Über Uns – Nordgrün Baum & Landschaftspflege",
  description:
    "Lernen Sie Torben Schönborn und das Team von Nordgrün kennen. ETW- und FLL-zertifizierte Fachkompetenz für Baum- und Landschaftspflege in Schleswig-Holstein & Hamburg.",
};

const qualifications = [
  {
    title: "ETW",
    subtitle: "European Tree Worker",
    desc: "Europaweit anerkannte Fachqualifikation für professionelle Baumpflege und Klettereinsatz.",
  },
  {
    title: "FLL",
    subtitle: "Baumkontrolleur",
    desc: "Zertifizierte Baumkontrolle nach FLL-Richtlinien zur Beurteilung der Verkehrssicherheit.",
  },
  {
    title: "DIN & ZTV",
    subtitle: "Normgerechte Ausführung",
    desc: "Alle Maßnahmen werden nach aktuellen DIN-Normen und ZTV-Baumpflege-Richtlinien ausgeführt.",
  },
  {
    title: "Voll versichert",
    subtitle: "Haftpflicht & Berufsgenossenschaft",
    desc: "Umfassender Versicherungsschutz für alle Arbeiten – auf privaten und öffentlichen Flächen.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Verlässlichkeit",
    desc: "Termine werden eingehalten, Absprachen respektiert und Angebote transparent kalkuliert – ohne versteckte Kosten.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
    title: "Fachkompetenz",
    desc: "Jahrelange Erfahrung, europäische Zertifizierungen und kontinuierliche Weiterbildung sichern höchste Qualität.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Persönliche Betreuung",
    desc: "Als inhabergeführtes Familienunternehmen sind wir persönlich für Sie da – von der ersten Anfrage bis zur fertigen Ausführung.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 013 13C3 9 5 5 11 3a9 9 0 01-1 17z" />
        <path d="M11 20c0-5.5 3.5-10 9-12" />
      </svg>
    ),
    title: "Nachhaltigkeit",
    desc: "Wir arbeiten schonend mit Natur und Umwelt – fachgerechte Pflege erhält wertvolle Bäume und schützt das Ökosystem.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0d2b08] pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#4a9e30] text-[14px] font-body font-medium hover:underline mb-8 block"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zurück zur Startseite
          </Link>
          <span className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-4">
            ÜBER UNS
          </span>
          <h1 className="font-display font-bold text-[48px] md:text-[56px] text-white leading-tight max-w-2xl">
            Fachkompetenz,{" "}
            <span className="text-[#4a9e30]">die Sie spüren.</span>
          </h1>
          <p className="text-white/70 text-[17px] font-body leading-[1.7] mt-6 max-w-xl">
            Nordgrün steht für zertifizierte Baum- und Landschaftspflege –
            inhabergeführt, persönlich und nach höchsten Fachstandards.
          </p>
        </div>
      </section>

      {/* Portrait + Story */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative rounded-[12px] overflow-hidden aspect-[4/5]">
                <Image
                  src="/torben-schoenborn.jpg"
                  alt="Torben Schönborn – Betriebsleiter Nordgrün"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute bottom-6 -right-4 bg-[#0d2b08] rounded-[12px] px-5 py-4 shadow-xl">
                <p className="text-white font-display font-bold text-[16px]">
                  Torben Schönborn
                </p>
                <p className="text-[#4a9e30] text-[13px] font-body mt-0.5">
                  Betriebsleiter · FLL Baumkontrolleur & ETW
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-4">
                DER MENSCH HINTER NORDGRÜN
              </span>
              <h2 className="font-display font-bold text-[36px] text-[#111827] leading-tight mb-6">
                Torben Schönborn –{" "}
                <span className="text-[#4a9e30]">Ihr Ansprechpartner</span>
              </h2>
              <p className="text-[16px] text-[#374151] leading-[1.7] font-body mb-5">
                Als Betriebsleiter und Inhaber von Nordgrün bringe ich jahrelange
                praktische Erfahrung in der Baum- und Landschaftspflege mit. Meine
                Ausbildung und Zertifizierungen als European Tree Worker (ETW) und
                FLL-zertifizierter Baumkontrolleur bilden die fachliche Grundlage
                für jede Maßnahme.
              </p>
              <p className="text-[16px] text-[#374151] leading-[1.7] font-body mb-5">
                Nordgrün ist ein inhabergeführtes Familienunternehmen mit Sitz in
                Kiebitzreihe. Wir betreuen Privatkunden, Kommunen und Gewerbetreibende
                in Schleswig-Holstein und Hamburg – mit persönlichem Einsatz und
                ehrlicher Beratung.
              </p>
              <p className="text-[16px] text-[#374151] leading-[1.7] font-body mb-8">
                Jede Maßnahme führen wir nach aktuellen FLL-Richtlinien, ZTV-Baumpflege
                und DIN-Normen durch. Für uns ist Qualität keine Option – sie ist
                der Anspruch, den wir an jede Arbeit stellen.
              </p>

              <div className="flex flex-wrap gap-3">
                {["ETW zertifiziert", "FLL Baumkontrolleur", "DIN & ZTV", "Voll versichert"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-[#f0faf0] text-[#309c30] font-semibold text-[13px] font-body px-4 py-2 rounded-[6px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-[#f0faf0]">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-3">
              UNSERE WERTE
            </span>
            <h2 className="font-display font-bold text-[42px] text-[#111827] leading-tight">
              Was uns{" "}
              <span className="text-[#4a9e30]">ausmacht</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-[#e5e7eb] rounded-[12px] p-7 hover:shadow-md hover:border-[#309c30] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#309c30] mb-5"
                  style={{ background: "rgba(48, 156, 48, 0.1)" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-[17px] text-[#111827] mb-2">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed font-body">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body block mb-3">
              QUALIFIKATIONEN
            </span>
            <h2 className="font-display font-bold text-[42px] text-[#111827] leading-tight">
              Zertifiziert &{" "}
              <span className="text-[#4a9e30]">fachgerecht</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((q) => (
              <div
                key={q.title}
                className="bg-[#f0faf0] rounded-[12px] p-7 border border-transparent hover:border-[#309c30] hover:shadow-md transition-all"
              >
                <p className="font-display font-bold text-[22px] text-[#309c30] mb-1">
                  {q.title}
                </p>
                <p className="font-semibold text-[13px] text-[#111827] font-body mb-3">
                  {q.subtitle}
                </p>
                <p className="text-[14px] text-[#6b7280] leading-relaxed font-body">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#309c30]">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-[36px] text-white leading-tight mb-4">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-white/80 text-[16px] font-body mb-8 max-w-lg mx-auto leading-[1.7]">
            Kostenloser Vor-Ort-Termin – wir begutachten Ihr Anliegen ehrlich
            und unverbindlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
