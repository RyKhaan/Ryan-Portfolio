import React from 'react';
import { motion } from 'framer-motion';
import { ChatCtaSection } from '../components/ChatCtaSection';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const { personal, toolkit, timeline } = PORTFOLIO_DATA;

  return (
    <div className="pt-14 md:pt-16">
      {/* SECTION 1: HERO */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Main Title Col */}
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-3 py-8 md:col-span-8 md:px-4 md:py-16">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 mb-3">
              about the engineer
            </p>
            <h1 className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              about.
            </h1>
          </div>

          {/* Right Media Col */}
          <div className="relative col-span-4 md:col-span-4 border-l border-brand-primary/50 bg-brand-dark min-h-[300px] md:min-h-0 overflow-hidden">
            <img
              src="/assets/about-hero.webp"
              alt="Ryan Lloyd Genturo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 2: BIOGRAPHY & TOOLKIT */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 items-start">
          {/* Left Column: Sticky Biography */}
          <aside className="col-span-4 md:col-span-5 p-3 md:p-6 flex flex-col gap-6 md:sticky md:top-16 md:h-[calc(100svh-4rem)] md:py-12 border-b md:border-b-0 md:border-r border-brand-primary/50 justify-between">
            <div>
              <p className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                biography
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.9] font-bold tracking-[-0.05em] mb-6">
                This is me.
              </h2>
              <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed text-brand-primary/90">
                {personal.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-primary/30 font-mono text-xs opacity-75">
              <span>LOCATION: {personal.location}</span>
            </div>
          </aside>

          {/* Right Column: Toolkit */}
          <div className="col-span-4 md:col-span-7 p-3 md:p-6 py-12 md:py-16 flex flex-col gap-10">
            <div>
              <p className="mb-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                technical competencies
              </p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] mb-8">
                Toolkit
              </h3>
            </div>

            <div className="flex flex-col gap-10">
              {toolkit.map((cat) => (
                <div key={cat.number} className="border-b border-brand-primary/50 pb-8 last:border-b-0">
                  <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-[-0.02em] mb-4">
                    <span className="font-mono text-sm opacity-60 tabular-nums">
                      {cat.number}
                      <span className="mx-1.5 opacity-40">—</span>
                    </span>
                    {cat.title}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-1.5 border px-2.5 py-1 leading-none lowercase font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] border-brand-primary/50 transition-colors duration-300 hover:bg-brand-primary hover:text-brand-cream cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE / TIMELINE */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 items-start">
          {/* Sticky Aside */}
          <aside className="col-span-4 md:col-span-5 p-3 md:p-6 flex flex-col gap-6 md:sticky md:top-16 md:h-[calc(100svh-4rem)] md:py-12 md:order-2 justify-between">
            <div>
              <p className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                experience & education
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.9] font-bold tracking-[-0.05em]">
                Background.
              </h2>
            </div>

            <figure className="flex min-h-0 flex-1 flex-col pt-6">
              <div className="relative aspect-4/5 w-full overflow-hidden border border-brand-primary/50 md:aspect-auto md:min-h-0 md:flex-1 bg-brand-dark">
                <img
                  alt="Ryan Lloyd Genturo - Educational Background"
                  src="/assets/about-background.webp"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/15 mix-blend-multiply pointer-events-none" />
              </div>
            </figure>
          </aside>

          {/* Timeline List */}
          <div className="col-span-4 md:col-span-7 border-brand-primary/50 pb-0 md:self-stretch md:order-1 md:border-r border-t md:border-t-0">
            <div className="p-3 md:p-6 py-12 md:py-16">
              <ol className="flex flex-col">
                {timeline.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-b border-brand-primary/50 py-6 first:pt-0 last:border-b-0"
                  >
                    <div className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-x-6">
                      <p className="font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] pt-1 leading-[1.5] opacity-60">
                        {item.period}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
                          {item.role}
                        </h4>
                        <p className="mt-1 font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] leading-[1.7] opacity-80">
                          {item.orgUrl && item.orgUrl !== '#' ? (
                            <a
                              href={item.orgUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="underline decoration-from-font underline-offset-4 hover:opacity-60 transition-opacity font-semibold"
                            >
                              {item.organization}
                            </a>
                          ) : (
                            <span className="font-semibold">{item.organization}</span>
                          )}
                          <span className="whitespace-nowrap opacity-60"> · {item.location}</span>
                          <span className="whitespace-nowrap opacity-60"> · {item.type}</span>
                        </p>
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed opacity-75">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WANT TO CHAT? */}
      <ChatCtaSection />
    </div>
  );
};
