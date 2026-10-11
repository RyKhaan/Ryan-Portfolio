# Portfolio Update & Real Projects Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Analyze the existing portfolio, incorporate the user's verified projects from Google Drive (Smart Management Parking System, Synced N, Palengke.com, and Smart 3-Ball Incentive Spirometer), align the About and Skills sections with verified background (ICCT Colleges Computer Engineering), and verify visual fidelity and responsiveness.

**Architecture:** Update `src/data/portfolioData.ts` as the single source of truth for all projects, personal biography, education, toolkit, and services. Integrate generated and verified visual assets into `public/assets/`. Update `SelectedWorksCarousel.tsx` to handle featured projects cleanly. Ensure all links, project cards, and categories render with zero TypeScript or build errors.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide React, Puppeteer (testing).

**Spec:** User prompt: 8-Phase Developer Portfolio Analysis, Real Projects Integration, and Grounded Technical Refinement.

## Global Constraints
- Current Git branch: `develop` (Strict: Do not switch to `main`, do not merge to `main`, do not push to remote).
- Ground all project features and technical claims in actual evidence from verified files (no hallucinated AI/sensor integrations).
- Maintain Mijo Bello minimalist editorial aesthetic: `#ede8d0` cream, `#1a1918` ink primary, fine hairline borders (`border-brand-primary/50`), uppercase metadata eyebrows, running marquee tickers, tabular numbers.
- Zero TypeScript compile errors (`npm run build` must pass cleanly).

## Review Focus
1. Project card aspect ratios and image responsiveness across mobile (375px), tablet (768px), and desktop (1440px).
2. Category filter tabs in `WorksPage.tsx` must correctly accommodate new project categories ("Systems", "Software", "Embedded Systems", "Hardware").
3. Homepage `SelectedWorksCarousel.tsx` thumbnail list must render smoothly without vertical overflow or distortion.
4. About section education and background must accurately reflect ICCT Colleges Foundation Inc., College of Engineering and Digital Technology, Computer Engineering.
5. All project modal drawers in `WorksPage.tsx` must display the full verified project technical stack, architecture, role, and problem statement.

---

### Task 1: Update Portfolio Data (`src/data/portfolioData.ts`)

**Files:**
- Modify: `src/data/portfolioData.ts`

**Interfaces:**
- Produces: Updated `PORTFOLIO_DATA` containing:
  - `personal`: Ryan Lloyd Genturo, Computer Engineering Student at ICCT Colleges Foundation Inc., Cainta, Rizal, Philippines.
  - `projects`:
    1. `smart-parking-system` (Lead Featured, Smart Management Parking System, IoT & Facility Telemetry)
    2. `synced-n` (Featured, Synced N: Church Music Ministry Schedule & Lineup Management System, Kotlin/Android/Firebase)
    3. `palengke-marketplace` (Featured, Palengke.com: Farm-to-Table Agri-Fishery E-Marketplace, OOP Web Architecture)
    4. `smart-spirometer` (Featured, Smart 3-Ball Incentive Spirometer System, ESP32, ToF Laser Ranging, MAX30102)
    5. `netscope-analyzer` (NetScope Packet Analyzer, C++20/Rust)
    6. `riscv-omnicore` (RISC-V OmniCore Processor, SystemVerilog/FPGA)
  - `toolkit`: Updated with verified technologies (Kotlin, Android Studio, Firebase, ESP32, ToF Sensors, MAX30102, OOP, TypeScript, React, Tailwind CSS, Git, Agile/Scrum).
  - `timeline`: Updated with ICCT Colleges Bachelor of Science in Computer Engineering, Project Nexus Team Lead, etc.

- [ ] **Step 1: Edit `src/data/portfolioData.ts` to replace placeholder data with verified project specs and biography.**
- [ ] **Step 2: Verify TypeScript compiles without type mismatch (`npx tsc --noEmit`).**

---

### Task 2: Verify & Refine Showcase Components

**Files:**
- Modify: `src/components/SelectedWorksCarousel.tsx`
- Modify: `src/pages/WorksPage.tsx`

**Interfaces:**
- Consumes: `PORTFOLIO_DATA.projects`
- Produces: Responsive project grid, filter buttons, and homepage carousel highlighting featured projects.

- [ ] **Step 1: Check `SelectedWorksCarousel.tsx` to ensure thumbnail list scrolls or fits cleanly when 4-6 featured projects are displayed.**
- [ ] **Step 2: Check `WorksPage.tsx` category tabs to ensure all project categories ('All', 'Systems', 'Software', 'Embedded Systems', 'Hardware') filter correctly.**
- [ ] **Step 3: Test modal drawer in `WorksPage.tsx` to verify detailed project information displays properly.**

---

### Task 3: Build Verification & Automated Responsive Testing

**Files:**
- Test script: `scratch/verify_portfolio_update.mjs`

- [ ] **Step 1: Run `npm run build` to verify production bundle builds cleanly.**
- [ ] **Step 2: Launch Vite preview server and execute Puppeteer headless tests across desktop (1440x900) and mobile (375x812).**
- [ ] **Step 3: Capture screenshots of Homepage, WorksPage (showing Smart Parking System, Synced N, Palengke, and Spirometer), and AboutPage.**
- [ ] **Step 4: Verify 0 console errors, 0 broken images, and smooth interactions.**

---

### Task 4: Git Commit & Comprehensive Phase 8 Report

**Files:**
- Target Branch: `develop`

- [ ] **Step 1: Review git diff and git status.**
- [ ] **Step 2: Commit changes to `develop` branch with clear descriptive message.**
- [ ] **Step 3: Output the Phase 8 Comprehensive Final Report addressing all 8 phases requested by the user.**
