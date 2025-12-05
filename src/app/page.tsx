import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TheWedge } from "@/components/sections/TheWedge";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { TechnicalAuthority } from "@/components/sections/TechnicalAuthority";
import { LeadGen } from "@/components/sections/LeadGen";

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main">
        <Hero />
        <TheWedge />
        <ThreePillars />
        <TechnicalAuthority />
        <LeadGen />
      </main>
      <Footer />
    </>
  );
}
