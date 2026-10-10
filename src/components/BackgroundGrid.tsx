import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-1 grid grid-cols-4 md:grid-cols-12"
    >
      <span className="h-full border-l border-transparent"></span>
      <span className="h-full border-l border-brand-primary/25"></span>
      <span className="h-full border-l border-brand-primary/25"></span>
      <span className="h-full border-l border-brand-primary/25"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
      <span className="h-full border-l border-brand-primary/25 hidden md:block"></span>
    </div>
  );
};
