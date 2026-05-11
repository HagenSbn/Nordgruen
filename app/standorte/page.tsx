import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StandorteOverview from "@/components/sections/StandorteOverview";

export const metadata: Metadata = {
  alternates: { canonical: "/standorte" },
  title: "Einsatzgebiete – Nordgrün Baum- und Landschaftspflege",
  description:
    "Nordgrün ist in Schleswig-Holstein und Hamburg aktiv: Hamburg, Kiel, Lübeck, Elmshorn, Pinneberg, Neumünster, Norderstedt, Itzehoe und Kiebitzreihe.",
};

export default function StandortePage() {
  return (
    <>
      <Navbar />
      <StandorteOverview />
      <Footer />
    </>
  );
}
