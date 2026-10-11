import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

interface CityTime {
  city: string;
  tz: string;
  abbr: string;
  isPrimary?: boolean;
}

const CITIES: CityTime[] = [
  { city: 'Manila', tz: 'Asia/Manila', abbr: 'PHT', isPrimary: true },
  { city: 'Tokyo', tz: 'Asia/Tokyo', abbr: 'JST' },
  { city: 'Sydney', tz: 'Australia/Sydney', abbr: 'AEST' },
  { city: 'London', tz: 'Europe/London', abbr: 'GMT' },
  { city: 'New York', tz: 'America/New_York', abbr: 'EST' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', abbr: 'PST' },
];

export const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isDark,
  toggleTheme,
}) => {
  const [times, setTimes] = useState<Record<string, string>>({});
  const [isHoveredMenu, setIsHoveredMenu] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const updated: Record<string, string> = {};
      CITIES.forEach((c) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: c.tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          });
          updated[c.city] = formatter.format(now);
        } catch {
          updated[c.city] = now.toTimeString().split(' ')[0];
        }
      });
      setTimes(updated);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const themeLabel = isDark ? 'Dark' : 'Light';

  const renderMarqueeContent = () => (
    <span className="flex shrink-0 items-center">
      {CITIES.map((c) => (
        <span key={c.city} className="flex shrink-0 items-center whitespace-nowrap">
          {c.isPrimary ? (
            <span className="flex items-center gap-2 bg-brand-primary px-2.5 py-1 font-bold text-brand-cream">
              <span>{c.city}</span>
              <span className="tabular-nums">{times[c.city] || '--:--:--'}</span>
              <span className="opacity-70">{c.abbr}</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>{c.city}</span>
              <span className="tabular-nums">{times[c.city] || '--:--:--'}</span>
              <span className="opacity-40">{c.abbr}</span>
            </span>
          )}
          <span aria-hidden="true" className="px-5 opacity-40">
            /
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b bg-brand-cream h-14 md:h-16 border-brand-primary/50 grid grid-cols-4 md:grid-cols-12">
        {/* Logo */}
        <Link
          to="/"
          className="col-span-2 md:col-span-3 flex items-center border-r px-3 text-2xl font-bold tracking-[-0.06em] md:px-4 md:text-3xl border-brand-primary/50 text-brand-primary hover:opacity-85 transition-opacity"
        >
          <span className="font-bold tracking-[-0.08em] text-2xl md:text-3xl leading-none">genturo.</span>
        </Link>

        {/* Local times marquee ticker */}
        <div className="hidden md:col-span-6 md:block border-r border-brand-primary/50">
          <div
            className="group relative h-full overflow-hidden"
            role="status"
            aria-label="World Times Marquee"
          >
            <div
              className="animate-marquee flex h-full w-max items-center text-[0.65rem] tracking-[0.18em] uppercase group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {renderMarqueeContent()}
              {renderMarqueeContent()}
            </div>
          </div>
        </div>

        {/* Theme switcher */}
        <div className="col-span-2 md:col-span-3 flex items-stretch justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="group group/roll flex h-full cursor-pointer items-center gap-2.5 px-4 transition-colors hover:bg-brand-primary hover:text-brand-cream disabled:cursor-default mr-14 md:mr-16"
          >
            <span className="relative block shrink-0 overflow-hidden leading-[1.4] text-[0.65rem] tracking-[0.18em] uppercase">
              <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                {themeLabel}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
              >
                {themeLabel}
              </span>
            </span>
            <span
              className="relative block h-3 w-3 overflow-hidden border border-brand-primary transition-colors group-hover:border-brand-cream"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 bg-brand-primary transition-transform duration-300 group-hover:bg-brand-cream"
                style={{
                  transform: isDark ? 'translateX(0%)' : 'translateX(-100%)',
                }}
              ></span>
            </span>
          </button>
        </div>
      </header>

      {/* Hamburger / Close Menu Button */}
      <button
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        onMouseEnter={() => setIsHoveredMenu(true)}
        onMouseLeave={() => setIsHoveredMenu(false)}
        className="group fixed top-0 right-0 z-[52] flex h-14 md:h-16 w-14 md:w-16 cursor-pointer items-center justify-center border-b border-l bg-brand-cream transition-colors hover:bg-brand-primary border-brand-primary/50"
      >
        <span className="relative block h-4 w-6">
          <span
            className="absolute left-0 block h-px w-full bg-brand-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-cream"
            style={{
              top: isMenuOpen ? '50%' : isHoveredMenu ? '22%' : '0%',
              transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          ></span>
          <span
            className="absolute top-1/2 left-0 block h-px w-full bg-brand-primary transition-opacity duration-200 group-hover:bg-brand-cream"
            style={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          ></span>
          <span
            className="absolute left-0 block h-px w-full bg-brand-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-cream"
            style={{
              top: isMenuOpen ? '50%' : isHoveredMenu ? '78%' : '100%',
              transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
            }}
          ></span>
        </span>
      </button>
    </>
  );
};
