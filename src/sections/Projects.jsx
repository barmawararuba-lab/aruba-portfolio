import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import MagneticButton from '../components/MagneticButton';
import { GithubIcon } from '../components/SocialIcons';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';

/**
 * Helper to render an elegant, consistent status badge
 */
function ProjectStatusBadge({ status, statusType }) {
  switch (statusType) {
    case 'live':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{status}</span>
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>{status}</span>
        </span>
      );
    case 'prototype':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#722F45]/35 text-[#C49A80] border border-[#722F45]/60 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A80]" />
          <span>{status}</span>
        </span>
      );
    case 'working':
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E9DFD5]/10 text-[#E9DFD5]/80 border border-[#E9DFD5]/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E9DFD5]/50" />
          <span>{status}</span>
        </span>
      );
  }
}

/**
 * Immersive Featured Projects Showcase
 * Accurately displays development status, verified live demo, and source repositories.
 */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const handleOpenCaseStudy = (project) => {
    setActiveProject(project);
  };

  const handleCloseCaseStudy = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 p-4 sm:p-8 md:p-12 lg:p-16 rounded-3xl sm:rounded-[2.5rem] bg-[#211B20] text-[#F8F3EA] border border-[#30282A] space-y-10 sm:space-y-14 lg:space-y-16 w-full min-w-0"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Section Editorial Header */}
      <SectionHeading
        dark
        badge="Engineering Portfolio"
        subtitle="Practical Systems"
        title="Featured Projects &amp; Applications"
        description="Applied software systems across machine learning, geospatial utilities, and modern full-stack web platforms — transparently classified by verified development status."
      />

      {/* Large-Format Distinct Project Cards */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-16 w-full min-w-0">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center p-5 sm:p-7 lg:p-8 rounded-3xl border transition-all duration-300 w-full min-w-0 ${
                project.isPrimary
                  ? 'bg-gradient-to-br from-[#2D2228] to-[#211B20] border-[#722F45]/60 shadow-xl'
                  : 'bg-[#261E23]/70 border-[#722F45]/30 hover:border-[#722F45]/50 shadow-md'
              }`}
              style={{ boxSizing: 'border-box' }}
            >
              {/* Desktop Media Preview Column (hidden on mobile, visible on lg screens) */}
              <div
                className={`hidden lg:block lg:col-span-6 w-full min-w-0 relative group ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
                style={{ boxSizing: 'border-box' }}
              >
                <div
                  data-cursor="view"
                  data-cursor-text="VIEW"
                  onClick={() => handleOpenCaseStudy(project)}
                  className={`relative rounded-2xl overflow-hidden border bg-[#30282A] shadow-xl cursor-pointer aspect-[16/10] w-full ${
                    project.isPrimary
                      ? 'border-[#C49A80]/60 ring-1 ring-[#C49A80]/30'
                      : 'border-[#722F45]/50'
                  }`}
                >
                  <img
                    src={project.coverImage}
                    alt={`${project.title} Preview Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Atmospheric overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211B20] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Callout */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F8F3EA] bg-[#211B20]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#722F45]/40 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs">Click to inspect case study</span>
                    <span className="text-[#C49A80]">→</span>
                  </div>
                </div>
              </div>

              {/* Project Editorial Information Column */}
              <div
                className={`w-full min-w-0 lg:col-span-6 space-y-4 sm:space-y-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
                style={{ boxSizing: 'border-box' }}
              >
                {/* 1. Status Badges Row — separate from headings and images */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono w-full min-w-0">
                  {/* Category & Index Tag */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#30282A] text-[#C49A80] border border-[#722F45]/40 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider shrink-0">
                    0{index + 1} // {project.category}
                  </span>

                  {/* Single Status Badge */}
                  <ProjectStatusBadge
                    status={project.statusBadge}
                    statusType={project.statusType}
                  />

                  {/* Year Tag */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#30282A]/70 text-[#C49A80] border border-[#722F45]/30 text-[10px] sm:text-[11px] font-mono shrink-0">
                    {project.year}
                  </span>
                </div>

                {/* 2. Project Title & Description — given their own space */}
                <div className="space-y-2 min-w-0 pt-0.5">
                  <h3
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F8F3EA] font-semibold leading-snug sm:leading-tight break-words"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base text-[#C49A80] font-normal sm:font-medium leading-relaxed break-words"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* 3. Mobile Preview Image — Placed below project info on mobile, constrained to avoid excessive size */}
                <div
                  className="block lg:hidden w-full min-w-0 my-3"
                  onClick={() => handleOpenCaseStudy(project)}
                >
                  <div
                    className={`relative rounded-xl overflow-hidden border bg-[#30282A] shadow-md cursor-pointer aspect-[16/10] max-h-56 sm:max-h-64 w-full ${
                      project.isPrimary
                        ? 'border-[#C49A80]/60'
                        : 'border-[#722F45]/50'
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt={`${project.title} Preview Screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211B20] via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F8F3EA] bg-[#211B20]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#722F45]/40">
                      <span>Tap to inspect case study</span>
                      <span className="text-[#C49A80]">→</span>
                    </div>
                  </div>
                </div>

                {/* 4. Technology Badges — with sufficient spacing, wrapping naturally */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 w-full min-w-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-[#30282A] text-[#E9DFD5] border border-[#722F45]/40 break-words"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 5. Action Buttons — properly spaced without cramping */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 w-full min-w-0">
                  {project.links.live && (
                    <MagneticButton
                      variant="cream"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs !py-2.5 sm:!py-3 !px-4 sm:!px-5 font-semibold text-[#722F45] shadow-lg group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#722F45] transition-transform group-hover:scale-110" />
                      <span>Live Demo</span>
                    </MagneticButton>
                  )}

                  <MagneticButton
                    variant="primary"
                    onClick={() => handleOpenCaseStudy(project)}
                    className="text-xs !py-2.5 sm:!py-3 !px-4 sm:!px-5"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>

                  {project.links.github && (
                    <MagneticButton
                      variant="outlineDark"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs !py-2.5 sm:!py-3 !px-4 sm:!px-5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Case Study Modal Instance */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={handleCloseCaseStudy}
      />
    </section>
  );
}
