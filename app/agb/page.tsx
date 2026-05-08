import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AGB – Nordgrün Baum & Landschaftspflege",
  description: "Allgemeine Geschäftsbedingungen der Nordgrün Baum- und Landschaftspflege, Inhaber Torben Schönborn, Kiebitzreihe.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111827] mb-4">
        {title}
      </h2>
      <div className="text-[15px] sm:text-[16px] leading-[1.8] text-[#374151] space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function AGB() {
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
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-white/50 font-body text-[15px] mt-3">
            Stand: Mai 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-10 sm:space-y-12 font-body">

            <Section title="§ 1 Geltungsbereich">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
              </p>
              <p>
                <strong className="text-[#111827]">Nordgrün</strong><br />
                Inhaber: Torben Schönborn<br />
                Schulstraße 8, 25368 Kiebitzreihe<br />
                E-Mail: info@nordgruen.com<br />
                Telefon: 04121 2633100
              </p>
              <p>
                &ndash; nachfolgend &bdquo;Nordgrün&ldquo; &ndash; und dem Auftraggeber über die Erbringung von Baum-
                und Landschaftspflegeleistungen. Abweichende Bedingungen des Auftraggebers
                werden nur anerkannt, wenn Nordgrün diesen ausdrücklich schriftlich zugestimmt hat.
              </p>
            </Section>

            <Section title="§ 2 Vertragsschluss">
              <p>
                Angebote von Nordgrün sind freibleibend und unverbindlich. Ein Vertrag kommt
                erst zustande durch die schriftliche oder mündliche Auftragsbestätigung von Nordgrün
                oder durch den Beginn der Leistungserbringung.
              </p>
              <p>
                Kostenvoranschläge werden nach vorheriger Besichtigung vor Ort erstellt und sind
                für 30 Tage gültig, sofern nichts anderes vereinbart wurde. Änderungen des
                Leistungsumfangs nach Vertragsschluss bedürfen einer schriftlichen Vereinbarung.
              </p>
            </Section>

            <Section title="§ 3 Leistungsumfang">
              <p>
                Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der
                Auftragsbestätigung. Nordgrün erbringt Leistungen in den Bereichen:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Baumpflege und Kronenpflege nach ZTV-Baumpflege und FLL-Richtlinien</li>
                <li>Baumfällung und Problemfällung</li>
                <li>Baumkontrolle und Verkehrssicherungsprüfung nach FLL-Standard</li>
                <li>Landschafts- und Gehölzpflege</li>
                <li>Knickpflege gemäß schleswig-holsteinischem Landesnaturschutzgesetz</li>
                <li>Sturmschadenbeseitigung und Notfällungen</li>
              </ul>
              <p>
                Leistungen, die nicht ausdrücklich im Angebot enthalten sind, werden gesondert
                berechnet. Nordgrün ist berechtigt, Nachunternehmer einzusetzen.
              </p>
            </Section>

            <Section title="§ 4 Mitwirkungspflichten des Auftraggebers">
              <p>
                Der Auftraggeber ist verpflichtet, Nordgrün alle für die Ausführung der Arbeiten
                erforderlichen Informationen rechtzeitig zur Verfügung zu stellen, insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Lage und Verlauf von Versorgungsleitungen auf dem Grundstück</li>
                <li>Bestehende behördliche Genehmigungen oder Auflagen</li>
                <li>Besondere Bodenbeschaffenheiten oder Hindernisse</li>
              </ul>
              <p>
                Der Auftraggeber hat für einen freien und sicheren Zugang zum Arbeitsbereich zu
                sorgen. Mehrkosten durch fehlerhafte oder fehlende Angaben des Auftraggebers
                trägt dieser selbst.
              </p>
            </Section>

            <Section title="§ 5 Genehmigungspflichten">
              <p>
                Der Auftraggeber ist selbst dafür verantwortlich, erforderliche behördliche
                Genehmigungen – insbesondere nach kommunalen Baumschutzsatzungen oder dem
                Hamburgischen Baumschutzgesetz – vor Beginn der Arbeiten einzuholen. Nordgrün
                unterstützt auf Wunsch bei der Antragstellung, übernimmt jedoch keine Haftung
                für Verzögerungen oder Ablehnungen durch Behörden.
              </p>
            </Section>

            <Section title="§ 6 Preise und Zahlungsbedingungen">
              <p>
                Es gelten die im Angebot oder der Auftragsbestätigung genannten Preise. Alle
                Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer, sofern nicht
                anderes angegeben.
              </p>
              <p>
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu
                begleichen, sofern keine andere Zahlungsfrist vereinbart wurde. Bei Zahlungsverzug
                ist Nordgrün berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.
              </p>
              <p>
                Bei größeren Aufträgen (ab 1.000 € netto) kann Nordgrün eine Vorauszahlung von
                bis zu 50 % des Auftragswertes verlangen.
              </p>
            </Section>

            <Section title="§ 7 Ausführung der Arbeiten">
              <p>
                Nordgrün führt alle Arbeiten nach den anerkannten Regeln der Technik, insbesondere
                nach ZTV-Baumpflege und den Richtlinien der FLL (Forschungsgesellschaft
                Landschaftsentwicklung Landschaftsbau e.V.), durch.
              </p>
              <p>
                Anfallende Schnittmengen und Holz verbleiben, sofern nicht anders vereinbart,
                beim Auftraggeber oder werden gegen gesonderte Berechnung entsorgt. Der
                Arbeitsbereich wird nach Abschluss der Arbeiten besenrein hinterlassen.
              </p>
              <p>
                Witterungsbedingte Verschiebungen von Terminen berechtigen nicht zur
                Geltendmachung von Schadensersatzansprüchen.
              </p>
            </Section>

            <Section title="§ 8 Gewährleistung">
              <p>
                Nordgrün gewährleistet die fachgerechte Ausführung der vereinbarten Leistungen.
                Mängel sind unverzüglich, spätestens jedoch innerhalb von 7 Werktagen nach
                Feststellung schriftlich anzuzeigen. Nordgrün hat das Recht zur Nacherfüllung.
              </p>
              <p>
                Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung. Für
                Vitalitätsentwicklungen von Bäumen nach durchgeführten Pflegemaßnahmen wird
                keine Gewährleistung übernommen, sofern diese auf natürliche Ursachen oder
                bereits vor der Maßnahme bestehende Schäden zurückzuführen sind.
              </p>
            </Section>

            <Section title="§ 9 Haftung">
              <p>
                Nordgrün haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
                Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte
                Schäden.
              </p>
              <p>
                Im Übrigen ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden
                begrenzt. Eine Haftung für Folgeschäden, entgangenen Gewinn oder mittelbare
                Schäden ist ausgeschlossen, soweit gesetzlich zulässig.
              </p>
              <p>
                Nordgrün ist vollumfänglich betriebshaftpflichtversichert.
              </p>
            </Section>

            <Section title="§ 10 Kündigung">
              <p>
                Daueraufträge und Rahmenvereinbarungen können von beiden Seiten mit einer Frist
                von 4 Wochen zum Monatsende schriftlich gekündigt werden. Das Recht zur
                außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
              <p>
                Storniert der Auftraggeber einen bereits bestätigten Einzelauftrag, kann Nordgrün
                eine Stornogebühr von bis zu 30 % des Auftragswertes in Rechnung stellen, sofern
                die Kündigung weniger als 5 Werktage vor dem vereinbarten Ausführungstermin erfolgt.
              </p>
            </Section>

            <Section title="§ 11 Datenschutz">
              <p>
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt ausschließlich
                zur Vertragsabwicklung und im Rahmen der gesetzlichen Vorgaben. Weitere
                Informationen entnehmen Sie bitte unserer{" "}
                <Link href="/datenschutz" className="text-[#309c30] hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </Section>

            <Section title="§ 12 Salvatorische Klausel">
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
                Wirksamkeit der übrigen Bestimmungen hiervon unberührt. An die Stelle der
                unwirksamen Bestimmung tritt die gesetzliche Regelung.
              </p>
            </Section>

            <Section title="§ 13 Gerichtsstand und anwendbares Recht">
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle
                Streitigkeiten aus dem Vertragsverhältnis ist, sofern der Auftraggeber Kaufmann,
                juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
                Sondervermögen ist, Elmshorn.
              </p>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
