# Ryan Lloyd Genturo — Personal Portfolio

[![Ryan-Portfolio](https://img.shields.io/badge/Ryan--Portfolio-rykhaan.github.io%2FRyan--Portfolio-6a0c06?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rykhaan.github.io/Ryan-Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-RyKhaan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RyKhaan)

High-fidelity creative developer portfolio for **Ryan Lloyd Genturo** (Computer Engineering Student, Software Developer, Systems & Networks), reverse-engineered and inspired by the design system, editorial typography, and micro-interactions of `mijobello.com`.

## 🚀 Key Features & Architectural Recreations

1. **Editorial Design System**:
   - Palette: Earthy sage-olive (`#b2c7ab`) & rich oxblood burgundy (`#6a0c06`)
   - Complete inverse Dark/Light mode theme switching with local storage persistence
   - Typography: Space Grotesk & JetBrains Mono with precise tracking and clamp scaling
   - 12-column desktop / 4-column mobile background alignment grid

2. **Observed Motion & Micro-Interactions**:
   - **3D Wireframe Perspective Intro Overlay**: 3D cube perspective tunnel with animated counter (`000` to `100`) and 12-column strip vertical curtain wipe reveal
   - **Live Header World Clocks**: Auto-updating live marquee with Brisbane, Sydney, Tokyo, Berlin, London, New York, and Los Angeles
   - **`RollText` Dual-Span Effect**: Custom `cubic-bezier(0.65, 0, 0.35, 1)` sliding text hover transitions
   - **Slide-out Navigation Drawer**: Side panel with media preview window responding to hovered navigation items
   - **Interactive Selected Works Carousel**: Stacked thumbnail selector, card metadata in burgundy, zoom on hover, and side cutout portrait with parallax shift
   - **Rotating Vinyl Record Hero**: Custom SVG vinyl disk on Works page with concentric groove rings and circular text path
   - **Dynamic Gallery Filtering & Search**: Real-time category filtering, search input, and interactive project modal dialog

3. **Pages Implemented**:
   - **Homepage (`/`)**: Hero media split, personal branding, role titles, engineer intro, selected works showcase, expandable services, contact CTA, footer.
   - **Works Page (`/works`)**: Vinyl record header, featured project showcase, searchable & filterable gallery grid, project modal view.
   - **About Page (`/about`)**: Sticky biography, categorized 3-part technical toolkit (`01 — build`, `02 — hardware & embedded`, `03 — networks & systems`), and sticky experience/education timeline.
   - **Contact Page (`/contact`)**: Interactive transmission message dispatch form, click-to-copy email pill, and network links.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Design Tokens
- **Animation**: Framer Motion + CSS keyframes
- **Icons**: Custom SVG Monograms & Lucide React

## 📦 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
