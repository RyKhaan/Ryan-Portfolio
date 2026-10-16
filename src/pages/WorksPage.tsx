import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChatCtaSection } from '../components/ChatCtaSection';
import { RollText } from '../components/RollText';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const WorksPage: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, [projects]);

  const featuredProject = projects[0];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="pt-14 md:pt-16">
      {/* SECTION 1: HERO WITH SPINNING VINYL DISC */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Main Title Col */}
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-3 py-8 md:col-span-8 md:px-4 md:py-16">
            <h1 className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              works.
            </h1>
          </div>

          {/* Right Media Col */}
          <div className="relative col-span-4 md:col-span-4 border-t md:border-t-0 md:border-l border-brand-primary/50 bg-brand-dark aspect-[4/3] md:aspect-auto md:min-h-0 overflow-hidden">
            <img
              src="/assets/works-portrait-cutout.webp"
              alt="Ryan Lloyd Genturo - Selected Works"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED PROJECT */}
      <section className="text-brand-primary border-b border-brand-primary/50">
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-10 md:pt-40">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <h2 className="text-4xl sm:text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  featured.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="grid grid-cols-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50"
          >
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Media Col */}
              <div className="col-span-4 aspect-[4/3] border-b md:col-span-5 md:aspect-auto md:min-h-[40rem] md:border-b-0 md:border-r border-brand-primary/50 bg-brand-dark overflow-hidden flex items-center justify-center relative">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="block h-full w-full cursor-pointer group text-left relative"
                  aria-label={`View architecture for ${featuredProject.title}`}
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-full w-full object-contain p-4 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
                </button>
              </div>

              {/* Text Info Col */}
              <div className="col-span-4 md:col-span-5 p-4 md:p-8 flex flex-col justify-center gap-5 md:gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase opacity-70">
                      {featuredProject.category} · {featuredProject.year}
                    </span>
                    {featuredProject.status && (
                      <span className="font-mono text-[0.62rem] uppercase tracking-wider px-2 py-0.5 border border-amber-600/50 bg-amber-500/10 text-brand-primary">
                        {featuredProject.status}
                      </span>
                    )}
                    {featuredProject.role && (
                      <span className="font-mono text-[0.62rem] uppercase tracking-wider px-2 py-0.5 border border-brand-primary/30 opacity-80">
                        {featuredProject.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed opacity-90 mb-6">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-brand-primary/50 px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase font-mono"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="group group/roll mt-4 inline-flex items-center gap-2 self-start text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase cursor-pointer active:scale-[0.97]"
                >
                  <RollText text="view architecture" />
                  <span aria-hidden="true" className="transition-transform group-hover/roll:translate-x-1">
                    &gt;
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE REST (GALLERY & FILTERS) */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-10 md:pt-40">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <h2 className="text-4xl sm:text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  the rest.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Search input */}
              <label className="col-span-4 md:col-span-3 border-r border-brand-primary/50 p-3 md:p-4 flex cursor-text items-center gap-3 transition-colors focus-within:bg-brand-primary focus-within:text-brand-cream border-b md:border-b-0">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M20 20 15.2 15.2" />
                </svg>
                <input
                  type="search"
                  placeholder="Search works"
                  aria-label="Search works"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[0.65rem] tracking-[0.18em] uppercase placeholder:text-current placeholder:opacity-70 focus:outline-none"
                />
              </label>

              {/* Category pills */}
              <div className="col-span-4 md:col-span-7 p-3 md:p-4 flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      aria-pressed={isActive}
                      className={`p-3 md:p-4 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase border border-brand-primary/50 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-brand-primary text-brand-cream'
                          : 'hover:bg-brand-primary hover:text-brand-cream'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {filteredProjects.map((project, index) => {
                // 2 columns or 3 columns in the 10-col grid (col-span-5 on md)
                const isRightCol = index % 2 === 1;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                    onClick={() => setActiveModalProject(project)}
                    className={`group/item col-span-4 md:col-span-5 flex flex-col border-b border-brand-primary/50 cursor-pointer transition-colors hover:bg-brand-primary/5 ${
                      !isRightCol ? 'md:border-r' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full grow overflow-hidden aspect-[16/10] bg-brand-dark flex items-center justify-center">
                      <img
                        alt={project.title}
                        src={project.image}
                        className={`h-full w-full ${
                          project.id === 'synced-n' ? 'object-contain p-3.5' : 'object-cover'
                        } transition-transform duration-700 ease-out group-hover/item:scale-[1.04]`}
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
                      {project.isConceptualVisual && (
                        <div className="absolute bottom-2.5 left-2.5 z-10 border border-brand-cream/40 bg-brand-primary/85 backdrop-blur-xs px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider text-brand-cream">
                          Representative Concept Mockup
                        </div>
                      )}
                    </div>

                    {/* Card Meta */}
                    <div className="p-3 md:p-4 mt-auto border-t border-brand-primary/50 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold tracking-[-0.02em] md:text-xl">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs opacity-60 group-hover/item:translate-x-1 transition-transform">
                          &gt;
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-[0.65rem] tracking-[0.18em] uppercase opacity-70">
                          {project.category} · {project.year}
                        </span>
                        {project.status && (
                          <span className="font-mono text-[0.58rem] tracking-wider px-1.5 py-0.5 border border-amber-600/40 bg-amber-500/10 uppercase">
                            {project.status}
                          </span>
                        )}
                      </div>
                      {project.role && (
                        <p className="font-mono text-[0.62rem] uppercase tracking-wider opacity-65">
                          {project.role}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {filteredProjects.length === 0 && (
                <div className="col-span-4 md:col-span-10 p-12 text-center">
                  <p className="text-base opacity-75 font-mono">
                    No engineering projects match the current search query or category filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WANT TO CHAT? */}
      <ChatCtaSection />

      {/* ENHANCED ARCHITECTURE & SUBSYSTEMS MODAL */}
      <ArchitectureModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
