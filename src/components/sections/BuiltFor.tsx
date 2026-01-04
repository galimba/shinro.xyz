"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Tier 1: Industry Verticals
const industries = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Warehouse Automation",
    description: "Navigate cluttered aisles and dynamic inventory without downtime.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: "Aerial Systems",
    description: "Coordinate drones across urban environments in real time.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Autonomous Vehicles",
    description: "Navigate roads and off-road terrain with complete scene understanding.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Underwater Systems",
    description: "Map subsea environments where GPS fails and visibility is limited.",
  },
];

// Tier 2: Developer Workflow
const workflowSteps = [
  { step: "01", label: "DRAFT", description: "Drag nodes to canvas. Your system moves." },
  { step: "02", label: "CODE", description: "Write C++ or Python in any node." },
  { step: "03", label: "PACKAGE", description: "Wrap logic into a reusable node." },
  { step: "04", label: "TEST", description: "Simulate in the Viewport." },
  { step: "05", label: "DEPLOY", description: "Sync to onboard hardware." },
];

// Tier 3: Example Nodes
const exampleNodes = [
  {
    name: "CrackDetector",
    type: "INSPECTION",
    useCase: "Civil infrastructure. Analyze voxel surfaces for structural damage.",
    code: "const cracks = this.analyzeSurface(voxels);",
  },
  {
    name: "PersonAvoidance",
    type: "SAFETY",
    useCase: "Safety compliance. Detect humans and pause operations automatically.",
    code: "if (humans.length > 0) return { action: 'pause' };",
  },
  {
    name: "CropAnalysis",
    type: "AGRICULTURE",
    useCase: "Agricultural automation. Map field health and coordinate equipment.",
    code: "const health = this.analyzeVegetation(region);",
  },
];

export function BuiltFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="use-cases" className="py-24 md:py-32 bg-shinro-black relative">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ===== TIER 1: Industry Verticals ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter headline-shadow">
            Build autonomous systems that see, think, and move as one.
          </h2>
          <p className="mt-4 text-shinro-light max-w-2xl mx-auto leading-relaxed">
            Spatial intelligence for every domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-shinro-surface border border-shinro-border rounded-xl p-6 group hover:border-shinro-accent/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-shinro-accent mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-sm text-shinro-light leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 my-16"
        >
          <div className="flex-1 h-px bg-shinro-border" />
          <span className="text-xs font-mono text-shinro-muted tracking-wider uppercase">
            Developer Experience
          </span>
          <div className="flex-1 h-px bg-shinro-border" />
        </motion.div>

        {/* ===== TIER 2: Developer Workflow ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter headline-shadow">
            From Idea to Production
          </h3>
          <p className="mt-4 text-shinro-light max-w-2xl mx-auto leading-relaxed">
            Five steps from concept to deployment.
          </p>
        </motion.div>

        {/* Workflow Flow - Desktop: Horizontal, Mobile: Vertical */}
        <div className="mb-16">
          {/* Desktop Flow */}
          <div className="hidden md:flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-shinro-accent/20 -translate-y-1/2 z-0" />

            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Node Card */}
                <div className="bg-shinro-surface/80 border border-shinro-border-subtle rounded-lg p-4 w-32 group hover:border-shinro-accent transition-colors">
                  {/* Input port */}
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-shinro-border bg-shinro-black group-hover:border-shinro-accent group-hover:bg-shinro-accent transition-colors" />
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-shinro-muted">{step.step}</span>
                  </div>
                  <div className="font-mono text-sm text-shinro-accent tracking-wider mb-2">{step.label}</div>
                  <p className="text-xs text-shinro-light leading-relaxed">{step.description}</p>

                  {/* Output port */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-shinro-border bg-shinro-black group-hover:border-shinro-accent group-hover:bg-shinro-accent transition-colors" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="md:hidden space-y-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-shinro-surface border border-shinro-border flex items-center justify-center">
                    <span className="font-mono text-xs text-shinro-accent">{step.step}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-px h-8 bg-shinro-border mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="font-mono text-sm text-shinro-accent tracking-wider">{step.label}</div>
                  <p className="text-sm text-shinro-light mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-4 my-16"
        >
          <div className="flex-1 h-px bg-shinro-border" />
          <span className="text-xs font-mono text-shinro-muted tracking-wider uppercase">
            Example Capabilities
          </span>
          <div className="flex-1 h-px bg-shinro-border" />
        </motion.div>

        {/* ===== TIER 3: Example Nodes ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter headline-shadow">
            Example Nodes
          </h3>
          <p className="mt-4 text-shinro-light max-w-2xl mx-auto leading-relaxed">
            Real capabilities. Ready to deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {exampleNodes.map((node, index) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-shinro-surface border border-shinro-border rounded-xl overflow-hidden group hover:border-shinro-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Terminal header */}
              <div className="bg-shinro-dark px-4 py-2 border-b border-shinro-border flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-shinro-heat" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-xs text-shinro-muted uppercase tracking-wider">
                  {node.type}
                </span>
              </div>

              {/* Node content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">{node.name}</h4>
                <p className="text-sm text-shinro-light leading-relaxed mb-4">{node.useCase}</p>
              </div>

              {/* Code preview */}
              <div className="bg-shinro-black/50 px-4 py-3 border-t border-shinro-border crt-lines relative">
                <code className="font-mono text-xs text-shinro-light">
                  <span className="text-shinro-muted">// </span>
                  {node.code}
                  <span className="cursor-blink" />
                </code>
              </div>

              {/* Port indicators */}
              <div className="flex justify-between px-4 py-2 text-xs text-shinro-muted">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full border border-shinro-border" />
                  <span>IN</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>OUT</span>
                  <div className="w-2 h-2 rounded-full border border-shinro-border" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
