"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Complex Spaces",
    challenge: "Warehouses, factories, and disaster zones are filled with obstacles, debris, cables, and unstable structures.",
    solution: "Complete spatial awareness captures the geometry of every obstacle, enabling safer navigation in real-world spaces.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Multi-Sensor Fusion",
    challenge: "No single sensor handles every situation. Cameras struggle in darkness, LiDAR misses glass.",
    solution: "Combine cameras, LiDAR, and depth sensors into a unified perception system. Each sensor compensates for the others.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Always-On Operations",
    challenge: "Extended operation without human intervention requires consistent performance. Drift and resets disrupt workflows.",
    solution: "Continuous drift correction maintains consistent maps across hours or days of operation without manual resets.",
  },
];

const capabilities = [
  {
    label: "Response Time",
    stat: "<10ms",
    description: "Obstacle detection to decision",
  },
  {
    label: "Resolution Scaling",
    stat: "Adaptive",
    description: "Detail where it matters",
  },
  {
    label: "Sensor Agnostic",
    stat: "Unified",
    description: "LiDAR, cameras, depth, your choice",
  },
  {
    label: "Hardware Portable",
    stat: "100%",
    description: "Jetson, x86, Orin, same code",
  },
];

export function TheWedge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-shinro-dark relative">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter headline-shadow">
            Built for Real-World Complexity
          </h2>
          <p className="mt-4 text-shinro-light max-w-2xl mx-auto leading-relaxed">
            Shinro Studio enables you to handle environments that challenge traditional approaches.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card relative overflow-hidden group"
            >
              {/* Subtle top glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 60%)",
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div className="text-shinro-accent mb-4">
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3">
                  {useCase.title}
                </h3>

                {/* Challenge */}
                <p className="text-sm text-shinro-muted mb-4 leading-relaxed">
                  {useCase.challenge}
                </p>

                {/* Solution */}
                <p className="text-sm text-shinro-light leading-relaxed">
                  {useCase.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-shinro-border" />
          <span className="text-xs font-mono text-shinro-muted tracking-wider uppercase">
            Enabled by
          </span>
          <div className="flex-1 h-px bg-shinro-border" />
        </motion.div>

        {/* Technical Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {capabilities.map((cap, index) => (
            <div
              key={cap.label}
              className="text-center p-4 rounded-lg bg-shinro-surface/50 border border-shinro-border-subtle"
            >
              <div className="font-mono text-xl md:text-2xl text-shinro-accent font-bold mb-1">
                {cap.stat}
              </div>
              <div className="text-sm font-medium text-white mb-0.5">
                {cap.label}
              </div>
              <div className="text-xs text-shinro-muted">
                {cap.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
