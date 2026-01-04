"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    label: "ANCHOR",
    title: "The Viewport",
    description:
      "See what your system sees. A high-fidelity 3D visualization with toggleable layers: raw sensor data, safe zones, and semantic objects.",
    icon: "01",
    // Eye/viewport icon
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "DIGITIZE",
    title: "The Flow Editor",
    description:
      "Wire up intelligence visually. Drag sensor inputs to processing nodes to action outputs. Double-click any node to write custom code.",
    icon: "02",
    // Node/flow icon
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="7" height="7" strokeWidth="1.5" rx="1" />
        <rect x="14" y="14" width="7" height="7" strokeWidth="1.5" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6.5h4M14 6.5l-2 2M14 6.5l-2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 10v4M6.5 14l2-2M6.5 14l-2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 17.5h4" />
      </svg>
    ),
  },
  {
    label: "ADAPT",
    title: "Hardware Abstraction",
    description:
      "Plug in your sensors. They just work. Standardized data layout means your logic runs on any hardware without rewriting drivers.",
    icon: "03",
    // Plug/USB icon
    iconPath: (
      <svg
        className="w-8 h-8 text-shinro-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
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
            Shinro Studio
          </h2>
          <p className="mt-4 text-shinro-light max-w-2xl mx-auto leading-relaxed">
            Your visual development environment for autonomous systems.
          </p>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#request-access" className="btn-primary">
            Request Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}
