import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Header } from './components/Header';
import { MenuDrawer } from './components/MenuDrawer';
import { IntroOverlay } from './components/IntroOverlay';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      return (
        localStorage.getItem('genturo-theme') === 'dark' ||
        document.documentElement.dataset.theme === 'dark'
      );
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('genturo-theme', 'dark');
      } else {
        delete document.documentElement.dataset.theme;
        localStorage.setItem('genturo-theme', 'light');
      }
      return next;
    });
  };

  // Close menu when route changes
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-primary selection:bg-brand-primary selection:text-brand-cream transition-colors duration-400">
      <ScrollToTop />
      {/* 3D Intro Animation */}
      <IntroOverlay />
      {/* 12-Column Fixed Grid Overlay */}
      <BackgroundGrid />
      {/* Global Header */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      {/* Kinetic Top Scroll Progress Bar */}
      <ScrollProgressBar />
      {/* Navigation Drawer */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Routed Page Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
