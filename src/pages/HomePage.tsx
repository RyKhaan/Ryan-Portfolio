import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SelectedWorksCarousel } from '../components/SelectedWorksCarousel';
import { ServicesSection } from '../components/ServicesSection';
import { ChatCtaSection } from '../components/ChatCtaSection';
import { EngineeringTelemetry } from '../components/EngineeringTelemetry';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="pt-14 md:pt-16">
      {/* SECTION 1: HERO */}
      <section className="flex flex-col border-b md:min-h-[calc(100svh-4rem)] border-brand-primary/50">
        {/* Media Split Row */}
        <div className="grid grid-cols-4 md:grid-cols-12 md:min-h-[40svh] md:flex-1 border-b border-brand-primary/50">
          {/* Main Video / Showcase Card */}
          <div
            id="hero-media-card"
            className="relative col-span-4 md:col-span-8 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-brand-primary/50 bg-brand-dark"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              src="/assets/Laptop_displaying_student_portfolio_1080p.mp4"
            />
            <div className="pointer-events-none absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
          </div>

          {/* Secondary Portrait / Hardware Media Card */}
          <div className="relative col-span-4 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-full overflow-hidden bg-brand-dark">
            <div className="absolute inset-0">
              <img
                alt="Ryan Lloyd Genturo"
                className="object-cover h-full w-full"
                src="/assets/image1.png"
              />
              <div className="absolute inset-0 bg-brand-primary/15 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Hero Branding & Roles Bottom Row */}
        <div className="grid grid-cols-4 md:grid-cols-12 items-stretch">
          {/* Col 1-7: Huge Typography Title */}
          <div className="col-span-4 flex items-end px-3 py-3 md:col-span-7 md:px-4 md:py-4 overflow-hidden">
            <h1
              id="hero-heading"
              className="text-[clamp(2.75rem,14.6vw,13.2rem)] leading-[0.8] font-bold tracking-[-0.09em] text-brand-primary select-none whitespace-nowrap"
              aria-label="genturo."
            >
              {'genturo.'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.04, duration: 0.45 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Col 8-10: Professional Roles */}
          <ul className="col-span-3 md:col-span-3 md:border-l border-brand-primary/50 p-3 md:p-4 flex flex-col justify-end gap-1 text-base leading-[1.15] font-medium tracking-[-0.02em] md:text-xl lg:text-2xl text-brand-primary">
            {personal.roles.map((role, idx) => (
              <motion.li
                key={role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.08, duration: 0.4 }}
              >
                {role}
              </motion.li>
            ))}
          </ul>

          {/* Col 11-12: Custom Emblem Mark */}
          <div className="col-span-1 md:col-span-2 md:border-l border-brand-primary/50 p-3 md:p-4 flex items-center justify-center">
            <motion.img
              src="/genturo-branding-primary.svg"
              alt="genturo-branding"
              className="h-20 w-auto md:h-32 text-brand-primary opacity-90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45 }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ENGINEER / BIO */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40 pb-0"
          >
            {/* Header */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <p className="mb-3 md:mb-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  the
                </p>
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  engineer.
                </h2>
              </div>
            </div>

            {/* Split Bio & Media Container */}
            <div className="relative">
              <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
                <div className="col-span-4 md:col-span-4 border-r border-brand-primary/50 p-3 md:p-4 flex flex-col items-start gap-8 py-14 md:py-20 justify-center">
                  <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed">
                    {personal.bio}
                  </p>
                  <Link
                    to="/about"
                    className="group/cta relative inline-block overflow-hidden border border-brand-primary/50 px-4 py-2 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-primary hover:text-brand-cream active:scale-[0.97]"
                  >
                    <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[200%]">
                      learn more
                    </span>
                    <span
                      className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
                      aria-hidden="true"
                    >
                      learn more
                    </span>
                  </Link>
                </div>

                {/* Side Graphic / Interactive Live Telemetry Console */}
                <div className="col-span-4 md:col-span-6 min-h-[220px] md:min-h-[300px] bg-brand-primary/5 flex flex-col justify-center p-3 sm:p-5 md:p-6 font-mono">
                  <EngineeringTelemetry />
                </div>
              </div>

              {/* Banner Media Block */}
              <div className="grid grid-cols-4 md:grid-cols-10">
                <div className="col-span-4 md:col-span-10 aspect-4/3 md:aspect-16/9 bg-brand-dark overflow-hidden relative group">
                  <img
                    src="/assets/image3.png"
                    alt="Engineering Architecture"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-brand-primary/15 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORKS CAROUSEL */}
      <SelectedWorksCarousel sideImage="/assets/image4.png" />

      {/* SECTION 4: SERVICES */}
      <ServicesSection />

      {/* SECTION 5: WANT TO CHAT? */}
      <ChatCtaSection image="/assets/want-to-chat.webp" />
    </div>
  );
};
