"use client";

import { motion } from "framer-motion";

export function DemoCTA() {
  return (
    <div className="pb-20 md:pb-28 text-center px-6">
      <motion.a
        href="https://shinro-studio-web.vercel.app/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group inline-flex items-center gap-3 rounded-full border border-shinro-border px-5 py-2.5 font-mono text-sm text-shinro-light transition-all duration-200 hover:border-shinro-accent hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
      >
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-shinro-accent opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-shinro-accent" />
        </span>
        Try Studio Demo
        <span
          aria-hidden="true"
          className="text-shinro-muted transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-shinro-accent"
        >
          →
        </span>
      </motion.a>
    </div>
  );
}
