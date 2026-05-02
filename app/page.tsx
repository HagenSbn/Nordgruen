import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Prozess from "@/components/sections/Prozess";
import Leistungen from "@/components/sections/Leistungen";
import UeberUns from "@/components/sections/UeberUns";
import Vorteile from "@/components/sections/Vorteile";
import ErgebnisCTA from "@/components/sections/ErgebnisCTA";
import Kontakt from "@/components/sections/Kontakt";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Prozess />
      <Leistungen />
      <UeberUns />
      <Vorteile />
      <ErgebnisCTA />
      <Kontakt />
      <Footer />
    </main>
  );
}
