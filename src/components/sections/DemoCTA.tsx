"use client";

import { motion } from "framer-motion";

export function DemoCTA() {
  return (
    <div className="pb-20 md:pb-28 text-center px-6">
      <motion.button
        type="button"
        disabled
        aria-disabled="true"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-3 rounded-full border border-shinro-border px-5 py-2.5 font-mono text-sm text-shinro-muted cursor-not-allowed"
      >
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-shinro-muted" />
        </span>
        Try Studio Demo
      </motion.button>
    </div>
  );
}
