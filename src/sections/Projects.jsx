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
} from 'lucide-react';

/**
 * Helper to render an elegant, consistent status badge
 */
function ProjectStatusBadge({ status, statusType }) {
  const styles = {
    live: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'in-progress': 'bg-amber-50 text-amber-800 border-amber-200',
    prototype: 'bg-[#722F45]/5 text-[#722F45] border-[#722F45]/20',
    working: 'bg-[#E9DFD5]/50 text-[#30282A]/70 border-[#E9DFD5]',
  };
  const dotStyles = {
    live: 'bg-emerald-600 animate-pulse',
    'in-progress': 'bg-amber-600',
    prototype: 'bg-[#722F45]',
    working: 'bg-[#30282A]/40',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles[statusType] || styles.working}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[statusType] || dotStyles.working}`} />
      <span>{status}</span>
    </span>
  );
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
      className="scroll-mt-24 space-y-8 sm:space-y-10 w-full min-w-0"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Section Editorial Header */}
      <SectionHeading
        badge="Engineering Portfolio"
        subtitle="Practical Systems"
        title="Featured Projects &amp; Applications"
        className="!mb-0"
        description="Selected projects across full-stack development and machine learning."
      />

      {/* Project Details */}
      <div className="space-y-8 sm:space-y-10 lg:space-y-12 w-full min-w-0">
        {projectsData.map((project, index) => (
          <motion.article
              key={project.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 sm:gap-5 border-b border-[#722F45]/15 pb-8 sm:pb-10 last:border-b-0 w-full min-w-0"
              style={{ boxSizing: 'border-box' }}
            >
              {/* Project Information */}
              <div className="w-full min-w-0 space-y-4 sm:space-y-5" style={{ boxSizing: 'border-box' }}>
                {/* Category, status, and date */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono w-full min-w-0">
                  {/* Category & Index Tag */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#722F45]/5 text-[#722F45] border border-[#722F45]/15 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider shrink-0">
                    0{index + 1} | {project.category}
                  </span>

                  {/* Single Status Badge */}
                  <ProjectStatusBadge
                    status={project.statusBadge}
                    statusType={project.statusType}
                  />

                  {/* Year Tag */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E9DFD5]/45 text-[#30282A]/65 border border-[#E9DFD5] text-[10px] sm:text-[11px] font-mono shrink-0">
                    {project.year}
                  </span>
                </div>

                {/* 2. Project Title & Description — given their own space */}
                <div className="space-y-2 min-w-0 pt-0.5">
                  <h3
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#30282A] font-semibold leading-snug sm:leading-tight break-words"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#30282A]/75 leading-relaxed">{project.overview}</p>
                </div>

                {/* 4. Technology Badges — with sufficient spacing, wrapping naturally */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 w-full min-w-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-white/70 text-[#722F45] border border-[#722F45]/15 break-words"
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
                      variant="outline"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs !py-2.5 sm:!py-3 !px-4 sm:!px-5 font-semibold group"
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
                      variant="outline"
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
        ))}
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
