import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Impressum – Nordgrün Baum & Landschaftspflege",
  description: "Impressum der Nordgrün GmbH – Angaben gemäß § 5 DDG und § 55 Abs. 2 RStV.",
};

export default function Impressum() {
  return (
    <>
      <Navbar />

      <section className="bg-[#0d2b08] pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#4a9e30] text-[14px] font-body font-medium hover:underline mb-6 sm:mb-8 block"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zurück zur Startseite
          </Link>
          <h1
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
          >
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-8 sm:space-y-10 font-body text-[#374151]">

            <div>
              <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4 break-words">
                Angaben gemäß § 5 DDG und § 55 Abs. 2 RStV
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] break-words">
                <strong className="text-[#111827]">Nordgrün</strong><br />
                Inhaber: Torben Schönborn<br />
                Dipl.-Ing. (FH)<br />
                Zertifizierter European Tree Worker<br />
                FLL-Baumkontrolleur<br />
                Schulstraße 8<br />
                25368 Kiebitzreihe
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4 break-words">
                Kontakt
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] break-words">
                E-Mail:{" "}
                <a
                  href="mailto:info@nordgruen.com"
                  className="text-[#309c30] hover:underline"
                >
                  info@nordgruen.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4 break-words">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] break-words">
                Torben Schönborn<br />
                Schulstraße 8, 25368 Kiebitzreihe
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4 break-words">
                Online-Streitbeilegung
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] break-words">
                Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
                <a
                  href="https://ec.europa.eu/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#309c30] hover:underline"
                >
                  https://ec.europa.eu/odr
                </a>
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] mt-3">
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
