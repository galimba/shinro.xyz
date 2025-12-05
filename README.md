# Shinro.xyz

**Spatial intelligence for autonomous systems.**

Dense volumetric foundation that autonomous systems need to navigate complex, unstructured environments with absolute certainty.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.0.7 | React framework (App Router) |
| [React](https://react.dev) | 19.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 12.x | Animations |
| [Formspree](https://formspree.io) | 3.x | Form handling |

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd shinro.xyz

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Design system & animations
│   └── icon.png            # Favicon
├── components/
│   ├── effects/
│   │   └── LidarGrid.tsx   # 3D perspective grid animation
│   ├── layout/
│   │   ├── Navigation.tsx  # Header with nav links
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx        # Main hero with headline
│   │   ├── TheWedge.tsx    # Use cases & capabilities
│   │   ├── ThreePillars.tsx # ANCHOR, DIGITIZE, ADAPT
│   │   ├── TechnicalAuthority.tsx # Metrics & API
│   │   └── LeadGen.tsx     # Email signup form
│   └── ui/
│       └── Button.tsx      # Reusable button component
└── lib/                    # Utilities (if needed)
```

---

## Website Sections

| Section | Purpose |
|---------|---------|
| **Hero** | Main headline, tagline, CTAs, animated LiDAR grid background |
| **TheWedge** | Use cases where dense mapping excels + technical capabilities |
| **ThreePillars** | Core value props: ANCHOR, DIGITIZE, ADAPT |
| **TechnicalAuthority** | Performance metrics, hardware support, API example |
| **LeadGen** | Email waitlist signup with Formspree integration |

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `shinro-black` | `#0A0A0B` | Primary background |
| `shinro-dark` | `#111113` | Section backgrounds |
| `shinro-surface` | `#18181B` | Cards, elevated surfaces |
| `shinro-border` | `#27272A` | Borders, dividers |
| `shinro-light` | `#9CA3AF` | Body text |
| `shinro-muted` | `#6B7280` | Secondary text |
| `shinro-accent` | `#3B82F6` | Primary accent (blue) |
| `shinro-heat` | `#FF4F00` | Warning/alert (orange) |

### Typography

- **Headlines**: Inter (variable weight)
- **Metrics/Code**: JetBrains Mono

### Animations

The site uses CSS animations and Framer Motion for:
- 3D perspective grid (LiDAR-inspired, desktop only)
- Scroll-triggered section reveals
- Hover states and micro-interactions
- Form state transitions

---

### Adding New Sections

1. Create component in `src/components/sections/`
2. Use existing design tokens from `globals.css`
3. Implement scroll-triggered animations with Framer Motion
4. Import and add to `src/app/page.tsx`

---

## Deployment

The site is optimized for static export and can be deployed to:
- [Vercel](https://vercel.com) (recommended)
- Netlify
- Any static hosting provider

```bash
npm run build
# Output in .next/ directory
```

---

## License

Proprietary - All rights reserved.
