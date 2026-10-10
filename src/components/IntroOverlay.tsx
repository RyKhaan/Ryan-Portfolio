import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroOverlayProps {
  onComplete?: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState<'counting' | 'leaving' | 'done'>('counting');

  useEffect(() => {
    // Counter animation from 0 to 100
    const start = performance.now();
    const duration = 900; // ms

    const animateCounter = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const current = Math.floor(progress * 100);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setStage('leaving');
        }, 200);
      }
    };

    const animId = requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (stage === 'leaving') {
      const timer = setTimeout(() => {
        setStage('done');
        if (onComplete) onComplete();
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  if (stage === 'done') return null;

  const isLeaving = stage === 'leaving';
  const gridLineColor = "color-mix(in srgb, var(--color-brand-primary) 38%, transparent)";

  return (
    <div
      id="intro-overlay"
      className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none"
    >
      {/* 12 Vertical Curtain Strips with Staggered Clip-Path Wipe */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full bg-brand-cream border-r border-brand-primary/10"
          style={{
            left: `${(i / 12) * 100}%`,
            width: `${100 / 12 + 0.08}%`,
          }}
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          animate={{
            clipPath: isLeaving ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 0% 0%)',
          }}
          transition={{
            duration: 0.46,
            ease: [0.16, 1, 0.3, 1],
            delay: isLeaving ? (i * 26) / 1000 : 0,
          }}
        />
      ))}

      {/* 3D Wireframe Perspective Tunnel */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%',
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isLeaving ? 0 : 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-260px) rotateX(-3deg) rotateY(7deg)',
          }}
        >
          {/* Floor */}
          <div
            className="absolute backface-hidden left-0 w-full"
            style={{
              top: '100%',
              height: '1100px',
              transformOrigin: '50% 0%',
              transform: 'rotateX(-90deg)',
              backgroundImage: `repeating-linear-gradient(to right, ${gridLineColor} 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, ${gridLineColor} 0 1px, transparent 1px calc(100% / 6))`,
              opacity: 0.85,
            }}
          />

          {/* Ceiling */}
          <div
            className="absolute backface-hidden left-0 w-full"
            style={{
              bottom: '100%',
              height: '1100px',
              transformOrigin: '50% 100%',
              transform: 'rotateX(90deg)',
              backgroundImage: `repeating-linear-gradient(to right, ${gridLineColor} 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, ${gridLineColor} 0 1px, transparent 1px calc(100% / 6))`,
              opacity: 0.85,
            }}
          />

          {/* Left Wall */}
          <div
            className="absolute backface-hidden top-0 left-0 h-full"
            style={{
              width: '1100px',
              transformOrigin: '0% 50%',
              transform: 'rotateY(90deg)',
              backgroundImage: `repeating-linear-gradient(to right, ${gridLineColor} 0 1px, transparent 1px calc(100% / 6)), repeating-linear-gradient(to bottom, ${gridLineColor} 0 1px, transparent 1px calc(100% / 7))`,
              opacity: 0.85,
            }}
          />

          {/* Right Wall */}
          <div
            className="absolute backface-hidden top-0 right-0 h-full"
            style={{
              width: '1100px',
              transformOrigin: '100% 50%',
              transform: 'rotateY(-90deg)',
              backgroundImage: `repeating-linear-gradient(to right, ${gridLineColor} 0 1px, transparent 1px calc(100% / 6)), repeating-linear-gradient(to bottom, ${gridLineColor} 0 1px, transparent 1px calc(100% / 7))`,
              opacity: 0.85,
            }}
          />

          {/* Back Wall */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(-1100px)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(to right, ${gridLineColor} 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, ${gridLineColor} 0 1px, transparent 1px calc(100% / 7))`,
              }}
            />

            {/* Central Monogram */}
            <div
              className="absolute"
              style={{
                left: '8.33%',
                top: '57.14%',
              }}
            >
              <span className="text-4xl md:text-6xl font-bold tracking-[-0.08em] text-brand-primary">
                genturo.
              </span>
            </div>

            {/* Bottom Counter Bar */}
            <div className="absolute inset-x-0 bottom-0 flex h-[calc(100%/7)] flex-col">
              <div className="h-px w-full bg-brand-primary/50" />
              <div className="grid grid-cols-4 md:grid-cols-12 min-h-0 flex-1">
                <div className="col-span-2 md:col-span-3 border-r border-brand-primary/50 p-4 flex items-end">
                  <span className="block text-[clamp(2.5rem,7vw,5rem)] leading-none font-bold tabular-nums text-brand-primary">
                    {String(count).padStart(3, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
