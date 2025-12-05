"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    label: "ANCHOR",
    title: "Continuous Volumetric State",
    description:
      "Navigation that never resets. Drift-corrected pose graph optimization maintains spatial awareness indefinitely.",
    icon: "01",
    // Crosshair icon path
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <line x1="12" y1="2" x2="12" y2="6" strokeWidth="1.5" />
        <line x1="12" y1="18" x2="12" y2="22" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="6" y2="12" strokeWidth="1.5" />
        <line x1="18" y1="12" x2="22" y2="12" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "DIGITIZE",
    title: "Dense 3D Geometry",
    description:
      "Maps that catch everything. GPU-accelerated TSDF/ESDF generation captures the chair leg, the hanging cable, and the glass wall.",
    icon: "02",
    // Grid/mesh icon
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="7" height="7" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "ADAPT",
    title: "Context-Aware Streaming",
    description:
      "Intelligence that scales. Dynamic map swapping and ROI loading for bandwidth efficiency without blindness.",
    icon: "03",
    // Layers icon
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <polygon points="12,2 22,8.5 12,15 2,8.5" strokeWidth="1.5" />
        <polyline points="2,15 12,21.5 22,15" strokeWidth="1.5" />
        <polyline points="2,11.5 12,18 22,11.5" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function ThreePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter headline-shadow">
            Three pillars of spatial intelligence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1 } : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.15 * index,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="card card-hover card-tilt group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-shinro-accent font-mono text-sm tracking-wider">
                    {pillar.label}
                  </span>
                  <span className="text-shinro-muted font-mono text-sm opacity-50">
                    {pillar.icon}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {pillar.iconPath}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-shinro-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-shinro-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
