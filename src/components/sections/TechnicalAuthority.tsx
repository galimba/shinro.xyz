"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "<10ms", label: "Reaction Time", description: "Sensor to action" },
  {
    value: "100%",
    label: "Portable",
    description: "Jetson, Orin, x86 GPUs",
  },
  {
    value: "No-Code",
    label: "Hybrid Approach",
    description: "Drag and connect nodes or write code",
  },
];

export function TechnicalAuthority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="technology"
      className="py-24 md:py-32 bg-shinro-dark relative"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-shinro-surface border border-shinro-border rounded-lg">
            <span className="w-3 h-3 rounded-full bg-shinro-heat" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-sm text-shinro-muted">
              shinro-sdk --status
            </span>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center md:text-left"
            >
              <div className="font-mono text-4xl md:text-5xl font-bold text-shinro-accent mono-glow">
                {stat.value}
              </div>
              <div className="mt-2 text-xl font-semibold">{stat.label}</div>
              <div className="mt-1 text-shinro-light">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Code snippet preview with CRT effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 bg-shinro-surface border border-shinro-border rounded-xl overflow-x-auto crt-lines relative"
        >
          {/* Terminal glow effect */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.05), transparent 50%)",
            }}
          />

          <pre className="font-mono text-sm relative">
            <code>
              <span className="text-shinro-muted">
                {"// Inside a custom CrackDetector node"}
              </span>
              {"\n"}
              <span className="text-purple-400">class</span>{" "}
              <span className="text-yellow-300">CrackDetector</span>{" "}
              <span className="text-purple-400">extends</span>{" "}
              <span className="text-shinro-accent">ShinroNode</span>{" "}
              <span className="text-white">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-yellow-300">process</span>
              <span className="text-white">(</span>
              <span className="text-orange-400">input</span>
              <span className="text-white">) {"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-white">voxels</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-orange-400">input</span>
              <span className="text-white">.</span>
              <span className="text-white">map</span>
              <span className="text-white">.</span>
              <span className="text-yellow-300">getVoxelsInFront</span>
              <span className="text-white">();</span>
              {"\n"}
              {"    "}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-white">cracks</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-purple-400">this</span>
              <span className="text-white">.</span>
              <span className="text-yellow-300">analyzeSurface</span>
              <span className="text-white">(</span>
              <span className="text-white">voxels</span>
              <span className="text-white">);</span>
              {"\n\n"}
              {"    "}
              <span className="text-purple-400">if</span>{" "}
              <span className="text-white">(</span>
              <span className="text-white">cracks</span>
              <span className="text-white">.</span>
              <span className="text-white">length</span>{" "}
              <span className="text-white">&gt;</span>{" "}
              <span className="text-orange-400">0</span>
              <span className="text-white">) {"{"}</span>
              {"\n"}
              {"      "}
              <span className="text-purple-400">return</span>{" "}
              <span className="text-white">{"{"}</span>{" "}
              <span className="text-green-400">action</span>
              <span className="text-white">:</span>{" "}
              <span className="text-green-400">&apos;flag&apos;</span>
              <span className="text-white">,</span>{" "}
              <span className="text-green-400">data</span>
              <span className="text-white">:</span>{" "}
              <span className="text-white">cracks</span>{" "}
              <span className="text-white">{"}"}</span>
              <span className="text-white">;</span>
              {"\n"}
              {"    "}
              <span className="text-white">{"}"}</span>
              {"\n"}
              {"  "}
              <span className="text-white">{"}"}</span>
              {"\n"}
              <span className="text-white">{"}"}</span>
              <span className="cursor-blink" />
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
