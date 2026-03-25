# GreenOps Developer Guide

> Complete onboarding guide for the GreenOps / LivNSense corporate website.

---

## 1. Project Overview

**GreenOps** is the corporate website for **LivNSense GreenOps Private Limited**, an AI-driven safety and sustainability company. The website showcases two core products:

- **VICAS** — Real-Time EHS (Environment, Health & Safety) Risk Intelligence platform
- **GreenOps** — AI-Driven Carbon Intelligence platform for manufacturing decarbonization

The website serves as a marketing and company information portal with sections for landing, products, company info (about, careers), and resources (events, awards, podcasts).

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.3.4 | React framework with App Router, SSR, standalone output |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Static typing |
| **TailwindCSS** | 4.x | Utility-first CSS framework (via `@tailwindcss/postcss`) |
| **Framer Motion** | 12.x | Animation library for page transitions and interactions |
| **Poppins** | Google Font | Primary typeface loaded via `next/font/google` |
| **Lucide React** | 0.525.x | Icon library (used for Menu/X hamburger icons) |
| **React Icons** | 5.x | Additional icon set |
| **Lenis** | 1.3.x | Smooth scrolling |
| **react-intersection-observer** | 9.x | Scroll-triggered animations |
| **react-countup** | 6.x | Animated number counters |
| **react-fast-marquee** | 1.6.x | Marquee/scrolling text effects |
| **PostCSS** | 8.x | CSS processing (with autoprefixer) |
| **ESLint** | 9.x | Linting (`next/core-web-vitals`, `next/typescript`) |
| **Docker** | Multi-stage | Production deployment via standalone build |
| **pnpm** | — | Package manager (lockfile: `pnpm-lock.yaml`) |

---

## 3. Project Architecture

### Folder Structure

```
website-new-website/
├── public/                  # Static assets
│   ├── icons/               # SVG icons
│   ├── images/              # Static images (hero backgrounds, etc.)
│   ├── partners/            # Partner logo SVGs (10 partners)
│   ├── avatars/             # Team/user avatar images
│   ├── ninjas/              # Team member photos
│   ├── videos/              # Video assets served via API route
│   ├── Greenops Logo.svg    # Primary logo
│   └── WorldMap.svg         # Global presence map
│
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout (Header, Submenu, Footer, ContentWrapper)
│   │   ├── page.tsx         # Home route → renders Landing page
│   │   ├── globals.css      # Global styles + TailwindCSS import + BEM-style sections
│   │   │
│   │   ├── landing/         # Landing page
│   │   │   ├── Page.tsx     # Landing page composition
│   │   │   └── components/  # Landing-specific sections
│   │   │       ├── Landinghero.tsx
│   │   │       ├── GreenOpsSection.tsx
│   │   │       ├── VicasSection.tsx
│   │   │       ├── KeyCapabilities.tsx
│   │   │       ├── IndustriesSection.tsx
│   │   │       ├── TestimonialSection.tsx
│   │   │       └── CoreIntelligenceSection.tsx
│   │   │
│   │   ├── company/         # Company section
│   │   │   ├── page.tsx     # Redirects to /company/about
│   │   │   ├── about/page.tsx
│   │   │   ├── careers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── components/
│   │   │   └── components/  # Shared company section components
│   │   │       ├── AboutHero.tsx
│   │   │       ├── NinjaSquadsSection.tsx
│   │   │       ├── OfficesSection.tsx
│   │   │       ├── OurApproach.tsx
│   │   │       └── PhotoMarquee.tsx
│   │   │
│   │   ├── resources/       # Resources section
│   │   │   ├── page.tsx     # Redirects to /resources/all_resource
│   │   │   ├── all_resource/
│   │   │   ├── events/
│   │   │   ├── awards/
│   │   │   ├── prodcasts/
│   │   │   └── components/  # Shared resource components
│   │   │       ├── AllResource.tsx
│   │   │       ├── Events.tsx
│   │   │       ├── Prodcasts.tsx
│   │   │       ├── awards.tsx
│   │   │       ├── recognition.tsx
│   │   │       └── Breadcrumb.tsx
│   │   │
│   │   ├── products/        # Products page (placeholder)
│   │   │   └── Page.tsx
│   │   │
│   │   └── api/             # API routes
│   │       └── videos/[file]/  # Dynamic video serving endpoint
│   │
│   ├── components/          # Shared/reusable global components
│   │   ├── Header.tsx       # Fixed top navbar with desktop pill nav + mobile drawer
│   │   ├── Submenu.tsx      # Context-aware sub-navigation bar
│   │   ├── Footer.tsx       # Site footer with nav links + copyright
│   │   ├── ContentWrapper.tsx # Smart padding wrapper (adds pt-16 when submenu visible)
│   │   ├── Hero.tsx         # Video-based hero section (generic)
│   │   ├── HowItWorks.tsx   # 3-step feature cards
│   │   ├── PPECompliance.tsx # PPE compliance comparison cards
│   │   ├── Sif.tsx          # Dual-video scroll connector section
│   │   ├── PartnerMarquee.tsx # Auto-scrolling partner logos
│   │   ├── Map.tsx          # World map with scroll-reveal animation
│   │   ├── CardDemo.tsx     # Reusable gradient demo card
│   │   └── ScheduleDemo.tsx # VICAS + GreenOps demo CTA cards
│   │
│   └── utils/
│       └── service.ts       # Centralized data: nav items, submenus, partners,
│                            # events, podcasts, awards, recognition, jobs
│
├── package.json
├── tsconfig.json            # Path alias: @/* → ./src/*
├── next.config.ts           # Standalone output, ESLint ignored in build
├── postcss.config.mjs       # TailwindCSS v4 via @tailwindcss/postcss
├── eslint.config.mjs        # Flat config: next/core-web-vitals + next/typescript
└── Dockerfile               # Multi-stage: node:18-alpine → standalone build
```

### Folder Responsibilities

| Folder | Responsibility |
|---|---|
| `src/app/` | Page routes using Next.js App Router conventions |
| `src/app/[route]/components/` | Section-level components specific to that route |
| `src/components/` | Globally reusable components shared across pages |
| `src/utils/` | Centralized data, constants, and type definitions |
| `public/` | Static assets (images, SVGs, videos) |

### Key Architectural Patterns

1. **Two-Layer Component Structure**: Global reusable components live in `src/components/`. Route-specific section components live in `src/app/[route]/components/`.

2. **Centralized Data Layer**: All navigation, partner data, events, awards, podcasts, and jobs data is centralized in `src/utils/service.ts`. Components import from here rather than hardcoding data.

3. **Root Layout Composition**: The root `layout.tsx` assembles the persistent shell: `Header → Submenu → ContentWrapper(children + Footer)`.

4. **Route Redirects**: Parent routes like `/company` and `/resources` redirect to their default sub-routes (`/company/about`, `/resources/all_resource`).

5. **Dynamic Submenu**: The `Submenu` component reads the current pathname and shows relevant sub-navigation links from `SUBMENUS` map in `service.ts`.

---

## 4. Component Guidelines

### Component Structure

Each component follows this pattern:

```tsx
"use client";  // Required for components using hooks, animations, or browser APIs

import { motion } from "framer-motion";      // Animation imports
import Image from "next/image";               // Next.js optimized images
import { someData } from "@/utils/service";   // Centralized data

// Props interface (for reusable components)
interface MyComponentProps {
  title: string;
  description: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Component content */}
    </section>
  );
}
```

### Component Rules

1. **Naming**: PascalCase for files and component names (e.g., `HowItWorks.tsx`, `PPECompliance.tsx`)
2. **Exports**: Use `export default function` for all components
3. **"use client" Directive**: Add at the top of any component that uses React hooks, Framer Motion, or browser APIs
4. **Props Typing**: Define TypeScript interfaces or inline types for component props (see `CardDemo.tsx` as reference)
5. **Section Wrapping**: Each page section should be wrapped in a `<section>` element with appropriate padding
6. **Animations**: Use Framer Motion's `motion.*` components with `initial`, `animate`, `whileInView`, and `whileHover` props
7. **Images**: Use `next/image` (`Image`) component for optimized images with proper `alt`, `width`, `height`, and `sizes` props
8. **Links**: Use `next/link` (`Link`) for internal navigation

### Reusable Component Examples

- `CardDemo` — Props-driven card with gradient background (used by `ScheduleDemo`)
- `Hero` — Configurable video hero accepting `videoFile` prop
- `PartnerMarquee` — Data-driven partner logo scroller from `service.ts`

---

## 5. Styling Guidelines

### TailwindCSS Usage

This project uses **TailwindCSS v4** via the `@tailwindcss/postcss` PostCSS plugin. Styles are imported in `globals.css`:

```css
@import "tailwindcss";
```

### Design Approach

The project uses a **hybrid styling approach**:

1. **Tailwind Utility Classes** — Primary styling method for components (inline in JSX)
2. **BEM-Style CSS in `globals.css`** — Used for complex sections like footer, offices, careers, and about pages
3. **Inline Styles** — Occasionally used for one-off dynamic values (e.g., `CardDemo.tsx`)

### Spacing System

| Usage | Values |
|---|---|
| Section padding | `py-20 px-6` (vertical: 5rem, horizontal: 1.5rem) |
| Max content width | `max-w-6xl` (72rem), `max-w-3xl`, `max-w-7xl` |
| Grid gaps | `gap-8` (2rem), `gap-12` (3rem) |
| Component padding | `p-6` (1.5rem) |
| Container centering | `mx-auto` |

### Typography

| Element | Classes |
|---|---|
| Font family | Poppins (loaded via `next/font/google`, applied via `--font-poppins` CSS variable) |
| Main headings (h1) | `text-[30px] sm:text-[34px] md:text-[40px] font-bold` |
| Section headings (h2) | `text-3xl md:text-4xl font-bold` or `text-4xl md:text-5xl font-bold` |
| Sub-headings (h3) | `text-xl font-semibold` or `text-[30px] font-semibold` |
| Body text | `text-[16px] sm:text-[18px]` or `text-sm`, `text-lg` |
| Label/tag text | `text-sm font-semibold uppercase tracking-wider` |

### Responsive Design

The project follows a **mobile-first** approach with Tailwind breakpoints:

| Breakpoint | Prefix | Size |
|---|---|---|
| Default | — | < 640px (mobile) |
| Small | `sm:` | ≥ 640px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |

**Common responsive patterns:**
- `grid-cols-1 sm:grid-cols-3` — Stack on mobile, 3-column on tablet+
- `hidden md:flex` / `block md:hidden` — Show/hide content per breakpoint
- `text-[14px] sm:text-[16px] md:text-[18px]` — Progressive font sizing
- `h-[300px] sm:h-[400px] md:h-[500px]` — Progressive hero heights
- `px-6 sm:px-12 md:px-20` — Progressive padding

---

## 6. Color System

### Color Palette

| Color Name | Hex Code | CSS Variable / Usage |
|---|---|---|
| **Background** | `#010206` | `var(--background)`, `bg-[#010206]`, `bg-black` |
| **Foreground** | `#ffffff` | `var(--foreground)`, `text-white` |
| **Brand Green (Primary)** | `#00A755` | Primary CTA buttons, nav bar, headings, hover states |
| **Light Green** | `#00FFB2` | Accent highlights, data viz positive values |
| **Mint/Neon Green** | `#3effa8` | CTA borders, box shadows, hover glows |
| **Green 500** | `text-green-500` | Inline accent color (Tailwind default) |
| **Green 300** | `text-green-300` | Subtle green text highlights |
| **Orange/Red** | `#FF4000` / `#FF6700` | VICAS product gradient, demo cards |
| **Red Accent** | `#FF5A5F` | Data viz negative values (e.g., PPE non-compliance) |
| **Dark Surface** | `#0f0f0f` / `#111` | Card backgrounds |
| **Dark Surface Alt** | `#0a0f14` | Gradient card backgrounds |
| **Muted Text** | `#b8b8b8` / `#bbb` | Secondary/descriptive text |
| **Light Text** | `#ededed` / `#e3e3e3` | Body text on dark backgrounds |
| **Gray Text** | `text-gray-200`, `text-gray-300`, `text-gray-400` | Various text dimming levels |
| **Border** | `border-white/10`, `border-neutral-800` | Subtle card borders |

### Color Usage Rules

| Purpose | Color |
|---|---|
| **Primary CTA buttons** | `bg-[#00A755]` with `hover:bg-green-700` |
| **Nav bar background** | `bg-[#00A755]` (pill-shaped desktop nav) |
| **Active nav item** | `bg-white` text on green nav bar |
| **Section headings** | `text-[#00A755]` for emphasis, white for primary |
| **Page backgrounds** | `bg-black` or `bg-[#010206]` |
| **Card backgrounds** | `bg-[#0f0f0f]` or `bg-[#111]` with `border-white/10` |
| **Footer column titles** | `color: #00A755` |
| **Body text** | White (`#fff`) or muted gray (`#b8b8b8`, `gray-300/400`) |
| **VICAS product** | Orange/red gradient (`#FF6700 → #FF4000`) |
| **GreenOps product** | Green gradient (`#00C88F → #00A755`) |

---

## 7. Developer Workflow

### Creating a New Page

1. Create a new folder under `src/app/` matching your desired route (e.g., `src/app/solutions/`)
2. Add a `page.tsx` file inside with a default export component
3. If the page has multiple sections, create a `components/` subfolder for section components
4. If the page needs a submenu, add entries to `SUBMENUS` in `src/utils/service.ts`
5. Add the route to `NAV_ITEMS` in `src/utils/service.ts` if it should appear in the main navigation

### Adding a New Component

1. **Shared/reusable component** → Place in `src/components/ComponentName.tsx`
2. **Route-specific section** → Place in `src/app/[route]/components/SectionName.tsx`
3. Add `"use client"` directive if using hooks, animations, or browser APIs
4. Use TypeScript interface for props
5. Import data from `src/utils/service.ts` rather than hardcoding
6. Use TailwindCSS for styling
7. Use Framer Motion for animations

### Adding a New Feature

1. **Data first**: If the feature requires data (e.g., new testimonials, team members), add the data array and TypeScript interfaces to `src/utils/service.ts`
2. **Component**: Create the section component in the appropriate `components/` directory
3. **Compose**: Import and add the component to the relevant page's composition file
4. **Style**: Use TailwindCSS classes consistent with the existing design system
5. **Responsive**: Ensure the component is responsive using the mobile-first approach
6. **Animate**: Add Framer Motion animations consistent with existing sections

### Maintaining Consistency

- Always check existing components before creating new ones
- Follow the same animation patterns (fade-in, slide-up via Framer Motion)
- Maintain the dark theme aesthetic across all new sections
- Use the established color palette — never introduce new brand colors without approval
- Keep component files focused — one exported component per file
- Use `@/*` path alias for imports (maps to `src/*`)

---

## 8. Example: Adding a New Section

Here's how to add a **"Why Choose Us"** section to the landing page:

### Step 1: Define Data (if needed)

```ts
// src/utils/service.ts
export const whyChooseUs = [
  { title: "Real-Time Monitoring", desc: "24/7 AI-powered safety surveillance" },
  { title: "Proven Results", desc: "96% PPE compliance rate with VICAS" },
  { title: "Industry Leaders", desc: "Trusted by top manufacturing companies" },
];
```

### Step 2: Create Section Component

```tsx
// src/app/landing/components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/utils/service";

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#00A755]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose GreenOps
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#00A755]">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 3: Add to Landing Page

```tsx
// src/app/landing/Page.tsx
import WhyChooseUs from "./components/WhyChooseUs";

export default function Landing() {
  return (
    <>
      <Landinghero />
      <PartnerMarquee />
      <GreenOpsSection />
      <VicasSection />
      <WhyChooseUs />          {/* ← New section */}
      <KeyCapabilities />
      <IndustriesSection />
      <TestimonialCarousel />
      <Map />
    </>
  );
}
```

---

## 9. Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint

# Docker build (skips lint)
pnpm build:docker
```

### Path Alias

The project uses `@/*` as a path alias that maps to `./src/*`:

```ts
import Header from "@/components/Header";
import { NAV_ITEMS } from "@/utils/service";
```

---

## 10. Deployment

The project is Docker-ready with a multi-stage Dockerfile:

1. **Build stage**: `node:18-alpine`, installs dependencies, runs `next build`
2. **Production stage**: Copies standalone output, static files, and public assets
3. **Runtime**: `node server.js` serves the standalone Next.js server

The `next.config.ts` sets `output: "standalone"` for Docker-optimized builds.
