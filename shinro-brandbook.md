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

---

## 3. Visual System

### 3.1 Logo & Symbolism
(Retained from v1.0, refined meaning)
*   **The Symbol:** The coordinate "S". It represents the intersection of the X, Y, and Z axes—defining volume, not just position.
*   **Usage:** Always on `shinro-black`. The logo must feel heavy and anchored, never floating or ethereal.

### 3.2 Color System: The Heat of Compute
Shinro operates at the hardware limit. The palette reflects high-performance computing.

*   **Primary Background:** `shinro-black` (#0A0A0B). Absolute void.
*   **The Signal:** `shinro-accent` (#3B82F6). Represents valid data / solid geometry.
*   **The Noise:** `shinro-surface` (#18181B). Represents unexplored space.
*   **The Warning:** `shinro-heat` (#FF4F00). *New addition.* Used sparingly to denote collision risks or "risky parts" of the map in data viz.

### 3.3 Typography
*   **Headlines (Inter):** Tight tracking. No capitalization for stylistic effect; standard sentence case for readability.
*   **Data (JetBrains Mono):** All metrics, coordinates, and technical claims must be in Mono. If you claim "<10ms latency," that is data. It goes in Mono.

---

## 4. Imagery: "The LiDAR View"

The visual metaphor is not "what the camera sees." It is "what the machine understands."

### 4.1 The Visual Hierarchy
1.  **The Raw Reality:** A dark, muted photograph of a complex environment (e.g., a cluttered loading dock).
2.  **The Interpretation:** Overlaid on this is the **Voxel Grid**. Perfect, glowing cubes (blue) that encase the physical objects.
3.  **The Path:** A distinct, razor-sharp line cutting through the free space.
4.  **The Exclusion:** Dynamic objects (people, birds, moving forklifts) are rendered as "ghosts" or bounding boxes with a distinct texture (scanlines), indicating they are recognized but excluded from the static map topology.

### 4.2 Data Visualization
*   **Map Swapping:** Visualize this as "Level of Detail" (LOD) shifts. Show a side-by-side of a high-res dense mesh (for inspection) vs. a low-res bounding box representation (for fast transit).
*   **Drift Correction:** Visualized as a "snap" effect. Two slightly misaligned grids (red/blue) snapping into perfect white alignment.

---

## 5. Applications & Specifics

### 5.1 The "Hardware Agnostic" Badge
Shinro runs on the hardware you have.
*   We do not require dedicated FPGAs.
*   We run on standard embedded GPUs (NVIDIA Jetson, Orin) and discrete GPUs.
*   **Visual Treatment:** When listing specs, visually group hardware logos (NVIDIA, ARM, x86) in a "Supported Infrastructure" block. This signals: "We are software. We scale."

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