# Shinro Brandbook v2.0
**Spatial Intelligence Infrastructure**

---

## 0. Strategic Intent

This brandbook recalibrates Shinro from a "SLAM algorithm" to **Spatial Intelligence Infrastructure**.

The market is saturated with "middleware" (ExWayZ, Outsight) and "visual navigation" (Slamcore). Most rely on sparse data—points floating in a void—to save compute. This works for location but fails for interaction.

Shinro’s thesis is distinct: **Density is Safety.**

We do not just track keypoints. We build a dense, volumetric understanding of the world (TSDF/ESDF) using the massive parallel compute of modern GPUs. We do not approximate the environment; we digitize it.

**The Golden Rule:**
If a design or copy choice suggests "approximation" or "probabilistic guessing," remove it. We sell certainty.

---

## 1. Brand Foundations

### 1.1 Company Definition
*   **Name:** Shinro
*   **Category:** Spatial Intelligence Infrastructure
*   **Domain:** `shinro.xyz`
*   **One-line definition:**
    > Shinro provides the dense volumetric foundation that autonomous systems need to navigate complex, unstructured environments with absolute certainty.

### 1.2 Core Identity

**The Vision**
A physical economy where autonomous systems move with the same determinism as digital packets. In this future, "stuck" robots, collisions with "unseen" obstacles, and re-mapping downtime are obsolete concepts.

**The Mission**
To replace the fragile, sparse approximations used in robotics today with a unified, GPU-native volumetric reality. We turn raw sensor noise into a queryable, semantic, solid world state.

**The Enemy: The Sparse Approximation**
The industry standard is Feature-Based SLAM. It tracks sparse keypoints and ignores the "empty space" between them.
*   *The Problem:* That empty space contains chair legs, hanging wires, and glass walls. Sparse maps skip "uninteresting" textures, leading to collisions and uncertainty.
*   *Our Stance:* **The world is solid.** Ignoring data is a safety risk. We process the full density.

**The Wedge**
We do not rip out the client's existing navigation stack on Day 1.
*   *The Hook:* **"The Safety Layer."**
*   *The Pitch:* Keep your existing sparse SLAM for global localization if you wish. Plug Shinro in to handle local navigation and obstacle avoidance. When your robot approaches a complex junction or a dynamic warehouse floor, Shinro’s dense geometry prevents the crash that sparse points miss.

### 1.3 The Three Pillars (Revised)

| Pillar | Concept | Engineering Truth | Customer Value |
| :--- | :--- | :--- | :--- |
| **ANCHOR** | Continuous Volumetric State | Drift-corrected Pose Graph Optimization | **Navigation that never resets.** We don't just know where we are; we know where the solid world is relative to us, indefinitely. |
| **DIGITIZE** | Dense 3D Geometry | GPU-accelerated TSDF/ESDF generation | **Maps that catch everything.** We capture the chair leg, the hanging cable, and the glass wall. No ghost objects. No invisible threats. |
| **ADAPT** | Context-Aware Streaming | Dynamic Map Swapping & ROI (Region of Interest) Loading | **Intelligence that scales.** Load high-fidelity maps for precision docking; swap to low-res collision hulls for transit. Bandwidth efficiency without blindness. |

#### Extended Descriptions (for web/marketing)
*   **ANCHOR:** "Drift-corrected pose graph optimization maintains spatial awareness indefinitely."
*   **DIGITIZE:** "GPU-accelerated TSDF/ESDF captures geometry that sparse methods miss."
*   **ADAPT:** "Dynamic map swapping and ROI loading adapts to operational context."

---

## 2. Narrative & Voice

### 2.1 The Persona Elevator Pitches

**To the Skeptical Roboticist:**
> You are currently maintaining a fragile chain of ROS nodes to convert point clouds into 2D cost maps. It burns CPU cycles and still misses thin obstacles like cables or mesh fences. Shinro is a drop-in GPU-accelerated block. We handle the loop closures and dense reconstruction on a separate thread. You get a real-time Euclidean Signed Distance Field (ESDF) for your motion planner. Stop writing custom CUDA kernels and just query the distance to the nearest surface.

**To the Business Operator (COO/VP of Operations):**
> Your fleet utilization is capped by "stuck" events and manual interventions. Every time a robot gets confused by a change in the warehouse or hits an obstacle it didn't see, your unit economics bleed. Shinro provides the density of data required to navigate messy, changing environments without human rescue. We lower your intervention rate and increase uptime by treating the environment as a solid reality, not a rough sketch.

**To the Venture Capitalist:**
> Sparse SLAM is a commodity; everyone has a library for it. The future of physical automation requires dense, semantic understanding of space, but the compute cost has historically been too high. Shinro has solved the compute bottleneck via proprietary GPU-native data layouts. We are building the "index of the physical world"—the infrastructure layer that allows any machine to understand any environment instantly. We start as the navigation stack; we end as the queryable database of physical reality.

### 2.2 Voice Guidelines

*   **Tone:** Clinical, Architectural, Urgent.
*   **Technique:** State the constraint, then state the solution.
*   **Forbidden Jargon (Marketing):** "Revolutionary," "Seamless," "Empower," "Game-changing," "Synergy," "Unlock."
*   **Allowed Technical Terms:** Latency, Throughput, Drift, Occlusion, Voxel, Topology, Edge Compute.

**Before:**
"Our revolutionary AI-powered solution seamlessly unlocks better navigation for your robots."

**After:**
"Sparse maps miss obstacles. Shinro builds dense volumetric geometry in real-time, eliminating collisions with unmapped features."

#### Call-to-Action (CTA) Guidelines
CTAs should reflect clinical tone—direct, specific, low-hype.

**Approved CTAs:**
*   "Request Access"
*   "See How It Works"
*   "Join the waitlist"
*   "Contact Us"

**Avoid:**
*   "Get Started Free"
*   "Unlock Your Potential"
*   "Try It Now"
*   "Start Your Journey"

---

## 3. Visual System

### 3.1 Logo & Symbolism
(Retained from v1.0, refined meaning)
*   **The Symbol:** The coordinate "S". It represents the intersection of the X, Y, and Z axes—defining volume, not just position.
*   **Usage:** Always on `shinro-black`. The logo must feel heavy and anchored, never floating or ethereal.

**Interactive States (web):**
*   **Default:** Multi-layer blue drop-shadow (`.logo-glow` class)
*   **Hover:** `scale(1.05)` with `transition: 0.3s`
*   The glow effect reinforces "data signal" without compromising the anchored feel.

### 3.2 Color System: The Heat of Compute
Shinro operates at the hardware limit. The palette reflects high-performance computing.

#### Core Semantic Colors

| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `shinro-black` | `--color-shinro-black` | #0A0A0B | Primary background, absolute void |
| `shinro-accent` | `--color-shinro-accent` | #3B82F6 | Valid data, solid geometry, primary CTA |
| `shinro-surface` | `--color-shinro-surface` | #18181B | Cards, unexplored space, elevated elements |
| `shinro-heat` | `--color-shinro-heat` | #FF4F00 | Collision risks, warnings (use sparingly) |

#### Extended Palette

**Backgrounds & Structure:**
| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `shinro-dark` | `--color-shinro-dark` | #111113 | Section backgrounds, subtle elevation |
| `shinro-border` | `--color-shinro-border` | #27272A | Primary borders, dividers |
| `shinro-border-subtle` | `--color-shinro-border-subtle` | #1F1F23 | Fine-grain separation, subtle structure |

**Text Hierarchy:**
| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `white` | — | #FFFFFF | Headlines, primary text |
| `shinro-light` | `--color-shinro-light` | #9CA3AF | Body text, readable content |
| `shinro-muted` | `--color-shinro-muted` | #6B7280 | Secondary text, de-emphasized info |

**Interactive States:**
| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `shinro-accent-hover` | `--color-shinro-accent-hover` | #2563EB | Hover states for accent elements |
| `shinro-accent-subtle` | `--color-shinro-accent-subtle` | rgba(59,130,246,0.1) | Subtle backgrounds, low-emphasis highlights |

#### Color Metaphor
Blue (`shinro-accent`) = valid, solid, certain data. Orange (`shinro-heat`) = danger, collision, warning. The palette moves from absolute void (black) through uncertainty (surface gray) to certainty (accent blue).

### 3.3 Typography

#### Font Families
*   **Headlines & Body (Inter):** Variable weight, loaded via `next/font/google`. Tight tracking (`letter-spacing: -0.02em`). Standard sentence case for readability—no stylistic all-caps.
*   **Data & Code (JetBrains Mono):** All metrics, coordinates, technical claims, and code snippets. If you claim `<10ms latency`, that is data. It goes in Mono.

#### Text Color Hierarchy
| Role | Color Token | Hex | CSS Class |
| :--- | :--- | :--- | :--- |
| Headlines | white | #FFFFFF | `text-white` |
| Body text | shinro-light | #9CA3AF | `text-shinro-light` |
| Secondary | shinro-muted | #6B7280 | `text-shinro-muted` |
| Technical claims | shinro-accent | #3B82F6 | `text-shinro-accent font-mono` |

#### Typography Classes
*   `.tracking-tighter` — Headlines: `-0.02em` letter-spacing
*   `.headline-shadow` — Large headlines: `0 2px 20px` black shadow
*   `.mono-glow` — Technical stats: Blue text-shadow (`0 0 20px rgba(59,130,246,0.5)`)

---

## 4. Imagery: "The LiDAR View"

The visual metaphor is not "what the camera sees." It is "what the machine understands."

### 4.1 The Visual Hierarchy (Literal Approach)
For presentations, pitch decks, video, and static media:
1.  **The Raw Reality:** A dark, muted photograph of a complex environment (e.g., a cluttered loading dock).
2.  **The Interpretation:** Overlaid on this is the **Voxel Grid**. Perfect, glowing cubes (blue) that encase the physical objects.
3.  **The Path:** A distinct, razor-sharp line cutting through the free space.
4.  **The Exclusion:** Dynamic objects (people, birds, moving forklifts) are rendered as "ghosts" or bounding boxes with a distinct texture (scanlines), indicating they are recognized but excluded from the static map topology.

### 4.2 Abstract Representation (Web/Interactive)
For web, interactive contexts, and digital products, an abstracted CSS 3D grid effectively conveys "machine perception" without photographic assets:

*   **3D Perspective Grid:** 500px perspective depth, 75deg rotateX tilt
*   **Horizontal scan lines:** `rgba(shinro-accent, 0.2)` every 82px
*   **Vertical convergence lines:** `rgba(shinro-accent, 0.12)` for depth illusion
*   **Horizon glow:** Pulsing gradient at the vanishing point
*   **Scan beam:** Animated sweep effect moving top-to-bottom

This approach is equally valid as the literal imagery—both represent "what the machine understands."

### 4.3 Data Visualization
*   **Map Swapping:** Visualize this as "Level of Detail" (LOD) shifts. Show a side-by-side of a high-res dense mesh (for inspection) vs. a low-res bounding box representation (for fast transit).
*   **Drift Correction:** Visualized as a "snap" effect. Two slightly misaligned grids (red/blue) snapping into perfect white alignment.

---

## 5. Applications & Specifics

### 5.1 The "Hardware Agnostic" Badge
Shinro runs on the hardware you have.
*   We do not require dedicated FPGAs.
*   We run on standard embedded GPUs (NVIDIA Jetson, Orin) and discrete GPUs.

**Visual Treatment Options:**
1.  **Logo Block (presentations/print):** Visually group hardware logos (NVIDIA, ARM, x86) in a "Supported Infrastructure" block.
2.  **Text-Based (web/digital):** Stat card reading `100%` with label "Hardware Agnostic" and description "Jetson, Orin, x86 GPUs."

Both approaches signal: "We are software. We scale."

### 5.2 Deployment Narratives (Use Cases)
*   **The Drone Swarm:** Highlight the "Low-Res Map Sharing" feature. One master drone builds the HD map; the swarm consumes lightweight versions.
    *   *Visual:* One bright central node connecting to many smaller, dimmer nodes.
*   **The Wire Inspection:** Highlight "Dense Safety." Sparse SLAM misses the wire. Shinro sees the volume of the wire.
    *   *Visual:* A drone navigating extremely close to a high-tension line, with the wire clearly voxelized in blue.
*   **The "Mirror Problem":** Robots crashing into mirrors/glass. Shinro’s sensor fusion and semantic understanding filter out false depth readings.
    *   *Visual:* A robot stopping perfectly in front of a reflective surface.

---

## 6. Governance

**The Litmus Test**
Before shipping any asset, ask:
1.  **Is it dense?** Does it show the world as a volume, or just points?
2.  **Is it definitive?** Does it sound like we are guessing, or does it sound like we know?
3.  **Is it darker?** If the design feels too "SaaS white space," invert it. We operate in the dark processing of the machine's mind.

**Shinro is the ground truth.**

---

## 7. Interactive Components

This section documents the design system components implemented on the website.

### 7.1 Buttons

**Primary Button (`.btn-primary`):**
```css
background: shinro-accent (#3B82F6)
color: white
padding: 0.75rem 1.5rem
border-radius: 0.5rem
transition: 0.4s

/* Hover */
background: shinro-accent-hover (#2563EB)
box-shadow: 0 0 20px rgba(59,130,246,0.4)

/* Active */
transform: scale(0.98)

/* Focus */
ring: 2px shinro-black, 4px shinro-accent rgba
```

**Secondary Button (`.btn-secondary`):**
```css
background: transparent
border: 1px solid shinro-border (#27272A)
color: white

/* Hover */
background: shinro-surface (#18181B)
border-color: shinro-border-subtle
```

### 7.2 Cards

**Base Card (`.card`):**
```css
background: shinro-surface (#18181B)
border: 1px solid shinro-border (#27272A)
border-radius: 1rem
padding: 1.5rem
```

**Hover Card (`.card-hover`):**
```css
/* On hover */
border-color: shinro-accent
box-shadow: 0 0 20px rgba(59,130,246,0.05)
```

**Tilt Card (`.card-tilt`):**
```css
/* On hover */
transform: rotateX(2deg) rotateY(2deg)
transition: transform 0.3s
```

### 7.3 Animation Tokens

```css
--duration-slow: 0.8s    /* Page transitions, complex animations */
--duration-medium: 0.4s  /* Hover effects, state changes */
--duration-fast: 0.15s   /* Micro-interactions, active states */
```

### 7.4 Keyframe Animations

| Animation | Duration | Effect |
| :--- | :--- | :--- |
| `fade-up` | 0.6s | Entry: opacity 0→1, translateY 20px→0 |
| `breathe` | 4s | Scale pulse: 1.0 → 1.02 → 1.0 (infinite) |
| `scan` | 3s | Vertical sweep: translateY -100% → 100vh |
| `glow-pulse` | 2s | Drop-shadow intensity oscillation |
| `border-rotate` | 3s | Background-position shift for gradient borders |

### 7.5 Special Effects

**CRT Scanlines (`.crt-lines`):**
```css
background: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 2px,
  rgba(0,0,0,0.1) 2px,
  rgba(0,0,0,0.1) 4px
)
pointer-events: none
```

**Noise Overlay (`.noise-overlay`):**
```css
background: url("data:image/svg+xml...") /* fractalNoise */
opacity: 0.03
mix-blend-mode: overlay
```

**Edge Fade (`.edge-fade`):**
```css
mask-image: radial-gradient(
  ellipse 80% 80% at center,
  black 60%,
  transparent 100%
)
```

### 7.6 Input Fields

```css
background: shinro-surface (#18181B)
border: 1px solid shinro-border (#27272A)
border-radius: 0.5rem
color: white
placeholder-color: shinro-muted (#6B7280)

/* Focus */
border-color: shinro-accent
box-shadow: 0 0 2px shinro-accent, 0 0 20px rgba(59,130,246,0.2)
```

### 7.7 Glow Effects

**Accent Glow (`.glow-accent`):**
```css
filter: drop-shadow(0 0 20px rgba(59,130,246,0.6))
        drop-shadow(0 0 40px rgba(59,130,246,0.4))
        drop-shadow(0 0 60px rgba(59,130,246,0.2))
```

**Heat Glow (`.glow-heat`):**
```css
filter: drop-shadow(0 0 20px rgba(255,79,0,0.6))
        drop-shadow(0 0 40px rgba(255,79,0,0.4))
        drop-shadow(0 0 60px rgba(255,79,0,0.2))
```