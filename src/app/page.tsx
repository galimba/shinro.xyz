import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HardwareCompatibility } from "@/components/sections/HardwareCompatibility";
import { TheWedge } from "@/components/sections/TheWedge";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { BuiltFor } from "@/components/sections/BuiltFor";
import { TechnicalAuthority } from "@/components/sections/TechnicalAuthority";
import { LeadGen } from "@/components/sections/LeadGen";

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main">
        <Hero />
        <HardwareCompatibility />
        <TheWedge />
        <ThreePillars />
        <BuiltFor />
        <TechnicalAuthority />
        <LeadGen />
      </main>
      <Footer />
    </>
  );
}
