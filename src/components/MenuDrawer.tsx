import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RollText } from './RollText';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  id: string;
  url: string;
  label: string;
  media: string;
  isVideo?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    url: '/',
    label: 'home',
    media: '/assets/__Laptop_Scene_02.mp4',
    isVideo: true,
  },
  {
    id: 'works',
    url: '/works',
    label: 'works',
    media: '/assets/portfolio-snapshot-laptop-1-1.png',
    isVideo: false,
  },
  {
    id: 'about',
    url: '/about',
    label: 'about',
    media: '/assets/DSCF0725_converted-1.webp',
    isVideo: false,
  },
  {
    id: 'contact',
    url: '/contact',
    label: 'contact',
    media: '/assets/DSCF0746_converted-1.webp',
    isVideo: false,
  },
];

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  const activeMedia = hoveredIndex !== null ? NAV_ITEMS[hoveredIndex] : NAV_ITEMS[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-brand-primary/20 backdrop-blur-[2px]"
          />

          {/* Desktop Media Preview Side Panel */}
          <motion.div
            key="menu-media"
            initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 0% 100%)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            onClick={onClose}
            className="fixed inset-y-0 left-0 z-[51] hidden cursor-pointer overflow-hidden md:block md:w-1/2 lg:w-2/3 border-r border-brand-primary/50 bg-brand-dark"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMedia.url}
                initial={{ opacity: 0.4, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
              >
                {activeMedia.isVideo ? (
                  <video
                    className="h-full w-full object-cover"
                    src={activeMedia.media}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={activeMedia.media}
                    alt={activeMedia.label}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Navigation Drawer Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[51] flex w-full flex-col border-l bg-brand-cream text-brand-primary md:w-1/2 lg:w-1/3 border-brand-primary/50 shadow-2xl"
          >
            {/* Top Bar Spacer */}
            <div className="h-14 md:h-16 shrink-0 border-b border-brand-primary/50" />

            {/* Nav Links */}
            <nav className="flex flex-1 flex-col justify-center">
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="border-b border-brand-primary/50"
                  >
                    <Link
                      to={item.url}
                      onClick={onClose}
                      className={`group group/roll flex items-baseline gap-4 p-4 md:p-6 text-4xl sm:text-5xl font-bold tracking-[-0.04em] transition-colors hover:bg-brand-primary hover:text-brand-cream ${
                        isActive ? 'bg-brand-primary text-brand-cream' : ''
                      }`}
                    >
                      <span className="font-mono text-sm tracking-[0.18em] opacity-60 tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <RollText text={item.label} className="leading-none lowercase" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Social / External Links Footer */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 p-4 md:p-6 border-t border-brand-primary/50 text-[0.65rem] tracking-[0.18em] uppercase">
              <a
                href={PORTFOLIO_DATA.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group group/roll transition-opacity hover:opacity-70"
              >
                <RollText text="github" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group group/roll transition-opacity hover:opacity-70"
              >
                <RollText text="linkedin" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                className="group group/roll transition-opacity hover:opacity-70"
              >
                <RollText text="email" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
