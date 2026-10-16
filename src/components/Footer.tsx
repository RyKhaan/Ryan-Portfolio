import React from 'react';
import { Link } from 'react-router-dom';
import { RollText } from './RollText';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { asset } from '../utils/asset';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-cream/40 bg-brand-primary text-brand-cream">
      {/* Top Media Banner */}
      <div className="relative h-36 overflow-hidden border-b md:h-52 border-brand-cream/40">
        <video
          className="h-full w-full object-cover opacity-85"
          src={asset('/assets/walking_through_japanese_village.mp4')}
          muted
          loop
          autoPlay
          playsInline
        />
        <div className="absolute inset-0 bg-brand-primary/20 pointer-events-none" />
      </div>

      {/* Main Nav Links Row */}
      <nav className="flex border-b border-brand-cream/40">
        <Link
          to="/about"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <RollText text="about" />
        </Link>
        <Link
          to="/works"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <RollText text="works" />
        </Link>
        <Link
          to="/contact"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <RollText text="contact" />
        </Link>
      </nav>

      {/* Grid Container */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-cream/40">
          <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-cream/40">
            {/* Elsewhere Column */}
            <div className="col-span-4 md:col-span-6 p-3 md:p-4 flex flex-col justify-between gap-8 py-10 md:min-h-[18rem] md:py-14 md:border-r border-brand-cream/40">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                elsewhere
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase hover:opacity-75 transition-opacity"
                  >
                    <RollText text="github" />
                    <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.contact.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase hover:opacity-75 transition-opacity"
                  >
                    <RollText text="facebook" />
                    <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.contact.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase hover:opacity-75 transition-opacity"
                  >
                    <RollText text="instagram" />
                    <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                    className="group group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase hover:opacity-75 transition-opacity"
                  >
                    <RollText text="email" />
                    <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Details & Back To Top */}
            <div className="col-span-4 md:col-span-4 p-3 md:p-4 flex flex-col justify-between gap-8 py-10 md:min-h-[18rem] md:py-14">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                details
              </p>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base">{PORTFOLIO_DATA.personal.name}</span>
                <span className="text-xs font-mono opacity-70 tracking-wide uppercase">
                  {PORTFOLIO_DATA.personal.tagline}
                </span>
                <span className="text-xs font-mono opacity-50 tracking-wide uppercase">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group group/roll inline-flex items-center gap-2 self-start text-[0.65rem] tracking-[0.18em] uppercase cursor-pointer hover:opacity-75"
              >
                <RollText text="back to top" />
                <span aria-hidden="true">↑</span>
              </button>
            </div>
          </div>

          {/* Bottom Colophon Bar */}
          <div className="p-3 md:p-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase opacity-65">
            <span>© {currentYear} {PORTFOLIO_DATA.personal.name}. All Rights Reserved.</span>
            <span>Computer Engineering & Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
