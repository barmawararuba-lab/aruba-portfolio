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
      className="scroll-mt-24 p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-[#211B20] text-[#F8F3EA] border border-[#30282A] space-y-16"
    >
      {/* Section Editorial Header */}
      <SectionHeading
        dark
        badge="Engineering Portfolio"
        subtitle="Practical Systems"
        title="Featured Projects &amp; Applications"
        description="Applied software systems across machine learning, geospatial utilities, and modern full-stack web platforms — transparently classified by verified development status."
      />

      {/* Large-Format Alternating Project Presentations */}
      <div className="space-y-24">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-20 border-b border-[#30282A] last:border-b-0 last:pb-0 ${
                project.isPrimary
                  ? 'p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#2D2228] to-[#211B20] border border-[#722F45]/50 shadow-2xl'
                  : ''
              }`}
            >
              {/* Media Preview Container */}
              <div
                className={`lg:col-span-6 relative group ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div
                  data-cursor="view"
                  data-cursor-text="VIEW"
                  onClick={() => handleOpenCaseStudy(project)}
                  className={`relative rounded-2xl overflow-hidden border bg-[#30282A] shadow-xl cursor-pointer aspect-[16/10] ${
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

                  {/* Corner Index Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#211B20]/80 backdrop-blur-md border border-[#722F45]/60 text-[11px] font-mono text-[#C49A80] uppercase tracking-wider">
                    0{index + 1} // {project.category}
                  </div>

                  {/* Status Badge Tag on Top-Right */}
                  <div className="absolute top-4 right-4">
                    <ProjectStatusBadge
                      status={project.statusBadge}
                      statusType={project.statusType}
                    />
                  </div>

                  {/* Bottom Hover Callout */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F8F3EA] bg-[#211B20]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#722F45]/40 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Click to inspect case study</span>
                    <span className="text-[#C49A80]">→</span>
                  </div>
                </div>
              </div>

              {/* Project Editorial Information */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <ProjectStatusBadge
                      status={project.statusBadge}
                      statusType={project.statusType}
                    />
                    <span className="text-[#C49A80]/50">•</span>
                    <span className="text-[#C49A80]">{project.year}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F3EA] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#C49A80] font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#30282A] text-[#E9DFD5] border border-[#722F45]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.links.live && (
                    <MagneticButton
                      variant="cream"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs !py-3 !px-5 font-semibold text-[#722F45] shadow-lg group"
                    >
                      <ExternalLink className="w-4 h-4 text-[#722F45] transition-transform group-hover:scale-110" />
                      <span>Live Demo</span>
                    </MagneticButton>
                  )}

                  <MagneticButton
                    variant="primary"
                    onClick={() => handleOpenCaseStudy(project)}
                    className="text-xs"
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
                      className="text-xs"
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
