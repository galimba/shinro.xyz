"use client";

import { motion } from "framer-motion";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

const platforms = [
  { name: "NVIDIA", logo: "/images/logos/nvidia.png", width: 110 },
  { name: "Intel", logo: "/images/logos/intel-logo.svg", width: 100 },
  { name: "AMD", logo: "/images/logos/AMD_logo_pre-2013.svg.png", width: 140 },
];

export function HardwareCompatibility() {
  return (
    <section className="py-10 md:py-12 border-y border-shinro-border bg-shinro-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LogoMarquee logos={platforms} duration={120} gap={64} />
      </motion.div>
    </section>
  );
}
