import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const services = PORTFOLIO_DATA.services;

  return (
    <section className="text-brand-primary pb-0">
      {/* Header Container */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
          <div className="grid grid-cols-4 md:grid-cols-10">
            <div className="col-span-4 md:col-span-10 p-3 md:p-4">
              <p className="mb-2 md:mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                my
              </p>
              <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                services.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Rows */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`group grid grid-cols-4 md:grid-cols-12 border-b transition-[min-height] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-[250px] md:hover:min-h-[360px] border-brand-primary/50 ${
            index === 0 ? 'border-t' : ''
          }`}
        >
          {/* Number Column */}
          <span className="col-span-1 p-3 md:p-4 flex items-start tabular-nums opacity-60 text-[0.65rem] tracking-[0.18em] uppercase font-mono">
            {service.number}
          </span>

          {/* Title Column */}
          <h3 className="col-span-3 md:col-span-6 border-l border-brand-primary/50 md:border-r p-3 md:p-4 flex items-center text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
            {service.title}
          </h3>

          {/* Sub-skills Column */}
          <ul className="col-span-3 col-start-2 md:col-span-2 md:col-start-auto border-l border-brand-primary/50 md:border-r md:border-l-0 p-3 md:p-4 flex flex-col justify-center gap-1 text-[0.65rem] tracking-[0.18em] uppercase font-mono">
            {service.skills.map((skill) => (
              <li key={skill} className="opacity-80">
                {skill}
              </li>
            ))}
          </ul>

          {/* Media Reveal Column */}
          <div className="relative col-span-4 h-48 overflow-hidden md:col-span-3 md:h-auto bg-brand-dark">
            <div className="absolute inset-0 -translate-y-[3%] scale-110 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:scale-100">
              {service.isVideo ? (
                <video
                  className="h-full w-full object-cover"
                  src={service.media}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={service.media}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
