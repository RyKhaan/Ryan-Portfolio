import React from 'react';
import { Link } from 'react-router-dom';

interface ChatCtaProps {
  headingSubtitle?: string;
  headingTitle?: string;
  bodyText?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export const ChatCtaSection: React.FC<ChatCtaProps> = ({
  headingSubtitle = 'want to',
  headingTitle = 'chat?',
  bodyText = "Have an interesting engineering problem, software project, or research opportunity? Let's connect.",
  ctaText = 'contact me',
  ctaLink = '/contact',
  image = '/assets/DSCF0746_converted-1.webp',
}) => {
  return (
    <section className="text-brand-primary">
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40 pb-0">
          {/* Header */}
          <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
            <div className="col-span-4 md:col-span-10 p-3 md:p-4">
              <p className="mb-3 md:mb-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                {headingSubtitle}
              </p>
              <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                {headingTitle}
              </h2>
            </div>
          </div>

          {/* Content Split */}
          <div className="relative">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-4 border-r border-brand-primary/50 p-3 md:p-4 flex flex-col items-start gap-8 py-14 md:py-20 justify-center">
                <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed">
                  {bodyText}
                </p>
                <Link
                  to={ctaLink}
                  className="group/cta relative inline-block overflow-hidden border border-brand-primary/50 px-4 py-2 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-primary hover:text-brand-cream"
                >
                  <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[200%]">
                    {ctaText}
                  </span>
                  <span
                    className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
                    aria-hidden="true"
                  >
                    {ctaText}
                  </span>
                </Link>
              </div>

              {/* Right Media Image */}
              <div className="col-span-4 md:col-span-6 min-h-[360px] md:min-h-[560px] bg-brand-dark overflow-hidden">
                <div className="relative h-full w-full">
                  <img
                    alt="Engineering Workspace"
                    src={image}
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
