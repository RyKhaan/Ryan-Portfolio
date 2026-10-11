import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RollText } from './RollText';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SelectedWorksCarouselProps {
  sideImage?: string;
}

export const SelectedWorksCarousel: React.FC<SelectedWorksCarouselProps> = ({
  sideImage = '/assets/works-portrait-cutout.webp',
}) => {
  const projects = PORTFOLIO_DATA.projects.filter((p) => p.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const renderViewAllMarquee = () => (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center whitespace-nowrap">
          view all works
          <span className="px-6 opacity-40">/</span>
        </span>
      ))}
    </span>
  );

  return (
    <section className="border-b border-brand-primary/50 text-brand-primary">
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
          {/* Section Header */}
          <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
            <div className="col-span-4 md:col-span-10 p-3 md:p-4">
              <p className="mb-2 md:mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                selected
              </p>
              <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                works.
              </h2>
            </div>
          </div>

          {/* Carousel & Cutout Grid */}
          <div className="grid grid-cols-4 md:grid-cols-10">
            {/* Interactive Showcase */}
            <div className="relative z-10 col-span-4 md:col-span-10 lg:col-span-6 lg:border-r border-brand-primary/50 flex flex-col justify-between">
              <div className="flex border-b border-brand-primary/50 flex-1">
                {/* Left Stacked Thumbnails */}
                <div className="flex w-20 sm:w-28 shrink-0 flex-col border-r md:w-36 lg:w-40 border-brand-primary/50">
                  {projects.map((item, index) => {
                    const isSelected = index === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${item.title}`}
                        aria-current={isSelected}
                        className={`relative w-full flex-1 min-h-[70px] md:min-h-[90px] cursor-pointer overflow-hidden border-b last:border-b-0 border-brand-primary/50 transition-all duration-300 ${
                          isSelected ? 'opacity-100 ring-2 ring-inset ring-brand-primary' : 'opacity-40 hover:opacity-80'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Main Project Card */}
                <div className="min-w-0 flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.article
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-full flex-col"
                    >
                      {/* Top Header Card */}
                      <div className="bg-brand-primary text-brand-cream p-3 md:p-5 flex flex-col gap-4 py-6 md:py-8">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl lg:text-4xl">
                            {activeProject.title}
                          </h3>
                          <ul className="text-[0.65rem] tracking-[0.18em] uppercase opacity-75 sm:shrink-0 sm:text-right">
                            <li>{activeProject.type}</li>
                          </ul>
                        </div>

                        {/* Tech Tag Pills */}
                        <ul className="flex flex-wrap gap-1.5 md:gap-2">
                          {activeProject.tags.map((tag) => (
                            <li
                              key={tag}
                              className="border border-brand-cream/50 px-2.5 py-0.5 md:px-3 md:py-1 text-[0.65rem] tracking-[0.18em] uppercase"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>

                        {/* CTA Link to Works */}
                        <Link
                          to="/works"
                          className="group group/roll mt-auto inline-flex items-center gap-2 self-end text-base md:text-lg leading-[1.3] tracking-[0.06em] uppercase hover:opacity-80"
                        >
                          <RollText text="explore project" />
                          <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">
                            &gt;
                          </span>
                        </Link>
                      </div>

                      {/* Large Preview Media Card */}
                      <div className="relative block w-full flex-1 overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[480px] bg-brand-dark">
                        {activeProject.video ? (
                          <video
                            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                            src={activeProject.video}
                            muted
                            loop
                            autoPlay
                            playsInline
                          />
                        ) : (
                          <img
                            src={activeProject.image}
                            alt={activeProject.title}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                          />
                        )}
                        {activeProject.isConceptualVisual && (
                          <div className="absolute bottom-3 left-3 z-10 border border-brand-cream/40 bg-brand-primary/85 backdrop-blur-xs px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-brand-cream">
                            Representative Concept Mockup
                          </div>
                        )}
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex h-16 md:h-20 border-t border-brand-primary/50">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous work"
                  className="flex flex-1 cursor-pointer items-center justify-center border-r border-brand-primary/50 text-xl font-bold transition-colors hover:bg-brand-primary hover:text-brand-cream"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next work"
                  className="flex flex-1 cursor-pointer items-center justify-center text-xl font-bold transition-colors hover:bg-brand-primary hover:text-brand-cream"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Side Cutout Portrait with Hover Parallax */}
            <div className="group/side relative z-0 hidden min-h-[320px] lg:col-span-4 lg:block overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  transform: sideImage.includes('Transparent_') ? 'scale(1.8)' : undefined,
                  transformOrigin: 'right bottom',
                }}
              >
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/side:-translate-x-[4%]">
                  <img
                    alt="Ryan Portrait Silhouette"
                    src={sideImage}
                    className="h-full w-full object-contain"
                    style={{ objectPosition: 'right bottom' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <Link
        to="/works"
        aria-label="view all works"
        className="group/marquee relative block h-10 overflow-hidden border-t md:h-12 border-brand-primary/50 transition-colors hover:bg-brand-primary hover:text-brand-cream"
      >
        <div
          aria-hidden="true"
          className="animate-marquee-view-all flex h-full w-max items-center text-[0.65rem] tracking-[0.18em] uppercase group-hover/marquee:[animation-play-state:paused]"
        >
          {renderViewAllMarquee()}
          {renderViewAllMarquee()}
        </div>
      </Link>
    </section>
  );
};
