import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Datenschutz – Nordgrün Baum & Landschaftspflege",
  description: "Datenschutzerklärung der Nordgrün – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4 break-words">{title}</h2>
      <div className="text-[15px] sm:text-[16px] leading-[1.8] text-[#374151] space-y-3 break-words">{children}</div>
    </div>
  );
}

export default function Datenschutz() {
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
            className="font-display font-bold text-white leading-tight [text-wrap:balance]"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
          >
            Datenschutzerklärung
          </h1>
          <p className="text-white/60 font-body text-[14px] sm:text-[15px] mt-3">
            Zuletzt aktualisiert: April 2025
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-10 sm:space-y-12 font-body">

            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p>
                <strong className="text-[#111827]">Nordgrün</strong><br />
                Inhaber: Torben Schönborn<br />
                Schulstraße 8<br />
                25368 Kiebitzreihe<br />
                E-Mail:{" "}
                <a href="mailto:info@nordgruen.com" className="text-[#309c30] hover:underline">
                  info@nordgruen.com
                </a><br />
                Telefon:{" "}
                <a href="tel:041212633100" className="text-[#309c30] hover:underline">
                  04121 2633100
                </a>
              </p>
            </Section>

            <Section title="2. Grundsätzliches zur Datenverarbeitung">
              <p>
                Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich
                nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
                unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung
                personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers
                oder wenn die Verarbeitung durch gesetzliche Vorschriften erlaubt ist.
              </p>
            </Section>

            <Section title="3. Zugriffsdaten und Hosting">
              <p>
                Beim Besuch dieser Website werden automatisch Informationen durch den Webserver
                erhoben, die Ihr Browser übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien
                Betriebs der Website sowie zur Verbesserung unseres Angebots genutzt und
                erlauben uns keinen Rückschluss auf Ihre Person. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
            </Section>

            <Section title="4. Kontaktaufnahme">
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von
                Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer,
                Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert.
              </p>
              <p>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
                Ihrer Anfrage).
              </p>
              <p>
                Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <Section title="5. Cookies">
              <p>
                Diese Website verwendet keine Tracking-Cookies oder Cookies von Drittanbietern
                zu Werbezwecken. Es werden ausschließlich technisch notwendige Cookies
                eingesetzt, die für den Betrieb der Website erforderlich sind.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
                Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                Löschen der Cookies beim Schließen des Browsers aktivieren.
              </p>
            </Section>

            <Section title="6. Externe Dienste und Medien">
              <p>
                Auf unserer Website werden Bilder eingebunden. Diese werden vom eigenen Server
                ausgeliefert. Es werden keine externen Bilddienstleister genutzt, die
                personenbezogene Daten verarbeiten.
              </p>
              <p>
                Eingebundene Schriftarten werden über Google Fonts bezogen. Dabei kann es
                zur Übertragung Ihrer IP-Adresse an Google-Server kommen. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO. Google LLC hat sich dem EU-US Data Privacy
                Framework angeschlossen und bietet damit ein angemessenes Datenschutzniveau.
              </p>
            </Section>

            <Section title="7. Ihre Rechte als betroffene Person">
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@nordgruen.com" className="text-[#309c30] hover:underline">
                  info@nordgruen.com
                </a>
              </p>
            </Section>

            <Section title="8. Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
                Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                Die zuständige Aufsichtsbehörde für Schleswig-Holstein ist:
              </p>
              <p>
                <strong className="text-[#111827]">Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)</strong><br />
                Holstenstraße 98<br />
                24103 Kiel<br />
                <a href="https://www.datenschutzzentrum.de" target="_blank" rel="noopener noreferrer" className="text-[#309c30] hover:underline">
                  www.datenschutzzentrum.de
                </a>
              </p>
            </Section>

            <Section title="9. Aktualität und Änderung dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025.
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
                gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
                Datenschutzerklärung zu ändern. Die jeweils aktuelle Fassung kann jederzeit
                auf dieser Seite abgerufen werden.
              </p>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
