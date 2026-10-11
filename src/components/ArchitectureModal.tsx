import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  onClose,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'architecture' | 'prototype'>('architecture');
  const [isFullscreenViewer, setIsFullscreenViewer] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom and pan when project changes
  useEffect(() => {
    if (project) {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
      setActiveTab('architecture');
      setIsFullscreenViewer(false);
    }
  }, [project]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        setZoomLevel((prev) => {
          const next = Math.max(prev - 0.25, 1);
          if (next === 1) setPanPosition({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0') {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.25, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreenViewer((prev) => !prev);
  }, []);

  // Double-click toggle zoom
  const handleDoubleClick = useCallback(() => {
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    } else {
      setZoomLevel(2);
    }
  }, [zoomLevel]);

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch pan handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - panPosition.x,
      y: e.touches[0].clientY - panPosition.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
    setPanPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (!project) return null;

  const currentDisplayImage =
    activeTab === 'architecture'
      ? (project.architectureImage || project.image)
      : project.image;

  const hasDistinctImages =
    Boolean(project.architectureImage && project.architectureImage !== project.image);

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="architecture-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-primary/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-7xl max-h-[92dvh] bg-brand-cream border border-brand-primary/50 text-brand-primary shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Top Control Bar */}
          <header className="flex items-center justify-between border-b border-brand-primary/50 px-4 py-3 bg-brand-cream select-none">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase opacity-75">
                {project.category} · {project.year}
              </span>
              <span className="hidden sm:inline-block h-3 w-[1px] bg-brand-primary/30" />
              <span className="hidden sm:inline-block font-mono text-[0.65rem] tracking-wider uppercase opacity-90 truncate max-w-xs">
                {project.type}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Fullscreen / Split Toggle */}
              <button
                type="button"
                onClick={handleToggleFullscreen}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 border border-brand-primary/50 text-[0.65rem] font-mono uppercase tracking-wider hover:bg-brand-primary hover:text-brand-cream transition-colors cursor-pointer"
                title={isFullscreenViewer ? 'Show Details' : 'Expand Diagram View'}
                aria-label={isFullscreenViewer ? 'Show Details' : 'Expand Diagram View'}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {isFullscreenViewer ? (
                    <>
                      <path d="M4 14h6v6" />
                      <path d="M20 10h-6V4" />
                      <path d="M14 10l7-7" />
                      <path d="M10 14l-7 7" />
                    </>
                  ) : (
                    <>
                      <path d="M15 3h6v6" />
                      <path d="M9 21H3v-6" />
                      <path d="M21 3l-7 7" />
                      <path d="M3 21l7-7" />
                    </>
                  )}
                </svg>
                <span>{isFullscreenViewer ? 'Split View' : 'Focus Diagram'}</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close architecture modal"
                className="px-3 py-1 border border-brand-primary/50 text-xs font-mono uppercase tracking-wider hover:bg-brand-primary hover:text-brand-cream transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Close [×]
              </button>
            </div>
          </header>

          {/* Modal Main Body */}
          <div className="flex-1 overflow-hidden flex flex-col lg:flex-row min-h-0">
            {/* LEFT / PRIMARY: Interactive Image & Architecture Viewer */}
            <div
              className={`relative flex flex-col bg-[#0b0c0e] text-white overflow-hidden transition-all duration-300 ${
                isFullscreenViewer
                  ? 'w-full h-full'
                  : 'w-full lg:w-[65%] xl:w-[68%] min-h-[320px] sm:min-h-[420px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-brand-primary/50'
              }`}
            >
              {/* Viewer Sub-Header / Toolbars */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 p-2.5 sm:px-4 border-b border-white/10 bg-[#121316]/90 backdrop-blur-md">
                {/* View Switcher Tabs (Architecture vs Prototype) */}
                <div className="flex items-center gap-1">
                  {hasDistinctImages ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('architecture');
                          handleResetZoom();
                        }}
                        aria-pressed={activeTab === 'architecture'}
                        className={`px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                          activeTab === 'architecture'
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-transparent text-white/70 border-white/20 hover:text-white hover:border-white/40'
                        }`}
                      >
                        Architecture Schematic
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('prototype');
                          handleResetZoom();
                        }}
                        aria-pressed={activeTab === 'prototype'}
                        className={`px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                          activeTab === 'prototype'
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-transparent text-white/70 border-white/20 hover:text-white hover:border-white/40'
                        }`}
                      >
                        Physical / UI Mockup
                      </button>
                    </>
                  ) : (
                    <span className="font-mono text-[0.62rem] tracking-wider uppercase text-white/60">
                      {project.isConceptualVisual
                        ? 'Hardware Concept Diagram'
                        : 'System Visual Overview'}
                    </span>
                  )}
                </div>

                {/* Interactive Zoom Controls */}
                <div className="flex items-center gap-1.5 font-mono text-[0.65rem]">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    aria-label="Zoom out"
                    className="h-7 w-7 flex items-center justify-center border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-0.5 text-center min-w-[3.2rem] tabular-nums text-white/80 select-none">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    aria-label="Zoom in"
                    className="h-7 w-7 flex items-center justify-center border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer text-sm"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    aria-label="Reset zoom"
                    className="px-2 h-7 flex items-center justify-center border border-white/20 hover:bg-white/10 text-[0.62rem] uppercase tracking-wider transition-colors cursor-pointer text-white/80"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Main Zoom & Pan Stage */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onDoubleClick={handleDoubleClick}
                className={`relative flex-1 w-full h-full min-h-[260px] overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none ${
                  zoomLevel > 1
                    ? isDragging
                      ? 'cursor-grabbing'
                      : 'cursor-grab'
                    : 'cursor-zoom-in'
                }`}
              >
                {/* Subtle Technical Canvas Grid Background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Contained Image with Smooth Transform */}
                <img
                  src={currentDisplayImage}
                  alt={`${project.title} - ${
                    activeTab === 'architecture' ? 'Architecture Diagram' : 'Hardware / UI View'
                  }`}
                  draggable={false}
                  className="max-h-full max-w-full object-contain pointer-events-none transition-transform will-change-transform drop-shadow-md select-none"
                  style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 180ms cubic-bezier(0.2, 0, 0, 1)',
                  }}
                />

                {/* Floating Conceptual Disclaimer Badge */}
                {project.isConceptualVisual && (
                  <div className="absolute bottom-3 left-3 z-20 pointer-events-none border border-amber-500/40 bg-black/85 backdrop-blur-sm px-3 py-1.5 text-left max-w-sm">
                    <p className="font-mono text-[0.62rem] uppercase tracking-wider text-amber-400 font-semibold">
                      Representative Hardware Visualization
                    </p>
                    <p className="text-[0.68rem] text-zinc-300 leading-tight mt-0.5">
                      Arduino Uno breadboard prototype with discrete ultrasonic sensors.
                    </p>
                  </div>
                )}

                {/* Pan Navigation Hint (shown when zoomed in) */}
                {zoomLevel > 1 && (
                  <div className="absolute bottom-3 right-3 z-20 pointer-events-none border border-white/20 bg-black/75 backdrop-blur-xs px-2.5 py-1 font-mono text-[0.58rem] tracking-wider uppercase text-white/70">
                    Click &amp; Drag to Pan · Double-click to Reset
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT / SIDEBAR: Architectural Deep-Dive & Metadata */}
            {(!isFullscreenViewer || window.innerWidth < 1024) && (
              <div className="w-full lg:w-[35%] xl:w-[32%] overflow-y-auto p-4 sm:p-6 lg:p-7 flex flex-col gap-6 bg-brand-cream border-t lg:border-t-0 border-brand-primary/50 text-brand-primary">
                {/* Project Header */}
                <div>
                  <h2
                    id="architecture-modal-title"
                    className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] leading-tight mb-2"
                  >
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 border border-brand-primary/40 bg-brand-primary/5">
                      {project.type}
                    </span>
                    {project.role && (
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 border border-brand-primary/30 opacity-80">
                        {project.role}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conceptual Disclaimer Callout */}
                {project.conceptualDisclaimer && (
                  <div className="border border-brand-primary/40 bg-brand-primary/5 p-3.5 text-xs leading-relaxed font-mono">
                    <p className="font-bold uppercase tracking-wider text-[0.65rem] mb-1 opacity-90">
                      // Notice: Prototype Scope
                    </p>
                    <p className="opacity-80 text-[0.72rem] leading-normal font-sans">
                      {project.conceptualDisclaimer}
                    </p>
                  </div>
                )}

                {/* Overview Description */}
                <div>
                  <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] opacity-70 mb-2">
                    Engineering Overview
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* System Architecture & Subsystems */}
                {project.architectureNotes && project.architectureNotes.length > 0 && (
                  <div className="border-t border-brand-primary/30 pt-4">
                    <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] opacity-70 mb-3">
                      Subsystems &amp; Implementation
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {project.architectureNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                          <span className="font-mono text-[0.65rem] font-bold opacity-60 mt-0.5 shrink-0">
                            0{idx + 1}.
                          </span>
                          <span className="opacity-90">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Verified Technologies Stack */}
                <div className="border-t border-brand-primary/30 pt-4">
                  <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] opacity-70 mb-2.5">
                    Verified Technical Stack
                  </h3>
                  <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-brand-primary/50 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider bg-brand-cream"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Documentation & Engineering Status Footer */}
                <div className="border-t border-brand-primary/30 pt-4 mt-auto">
                  <div className="p-3 border border-brand-primary/30 bg-brand-primary/5 font-mono text-[0.65rem] uppercase tracking-wider opacity-80 text-center">
                    {project.status
                      ? `${project.status} · Academic Project`
                      : 'Academic & Engineering Project Documentation'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
