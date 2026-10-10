import React from 'react';

interface RollTextProps {
  text: string;
  className?: string;
  groupClass?: string;
}

export const RollText: React.FC<RollTextProps> = ({ text, className = '', groupClass = 'group-hover/roll' }) => {
  const transition = "transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)]";
  
  return (
    <span className={`relative block shrink-0 overflow-hidden leading-[1.3] ${className}`}>
      <span className={`block ${transition} ${groupClass}:translate-y-full`}>
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 block -translate-y-full ${transition} ${groupClass}:translate-y-0`}
      >
        {text}
      </span>
    </span>
  );
};
