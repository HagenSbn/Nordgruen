import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LeistungenContent from "@/components/sections/LeistungenContent";

export const metadata: Metadata = {
  title: "Leistungen – Nordgrün Baum & Landschaftspflege",
  description:
    "Alle Leistungen im Überblick: Baumpflege nach ZTV-Standard, FLL-zertifizierte Baumkontrollen, Baumfällungen, Pflanzungen, Wurzelfräsen, Schredderarbeiten, Landschaftspflege, Kaminholz und Baumschutz auf Baustellen in Schleswig-Holstein & Hamburg.",
};

export default function LeistungenPage() {
  return (
    <>
      <Navbar />
      <LeistungenContent />
      <Footer />
    </>
  );
}
