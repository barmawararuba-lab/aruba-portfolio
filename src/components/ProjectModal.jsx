import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Terminal 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import MagneticButton from './MagneticButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

function ModalStatusBadge({ status, statusType }) {
  switch (statusType) {
    case 'live':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{status}</span>
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>{status}</span>
        </span>
      );
    case 'prototype':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#722F45]/35 text-[#C49A80] border border-[#722F45]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A80]" />
          <span>{status}</span>
        </span>
      );
    case 'working':
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E9DFD5]/10 text-[#E9DFD5]/80 border border-[#E9DFD5]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E9DFD5]/50" />
          <span>{status}</span>
        </span>
      );
  }
}

/**
 * In-depth Interactive Case Study Modal
 * Explores full-stack architecture, relational schemas, API contracts, and engineering challenges.
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 select-text"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#211B20]/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, y: prefersReducedMotion ? 0 : 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#30282A] text-[#F8F3EA] border border-[#722F45]/60 rounded-3xl shadow-2xl overflow-y-auto no-scrollbar z-10 flex flex-col"
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#211B20]/95 backdrop-blur-md border-b border-[#722F45]/40">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#722F45]" />
                <span className="text-xs font-mono tracking-widest text-[#C49A80] uppercase">
                  Engineering Case Study // {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#30282A] hover:bg-[#722F45] text-[#F8F3EA] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-10">
              {/* Top Banner: Project Title & Quick Actions */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <ModalStatusBadge
                        status={project.statusBadge}
                        statusType={project.statusType}
                      />
                      <span className="text-xs font-mono text-[#C49A80]/70">• {project.year}</span>
                    </div>
                    <h2 id="case-study-title" className="font-serif text-3xl sm:text-4xl text-[#F8F3EA]">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#C49A80] font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.links.live && (
                      <MagneticButton
                        variant="primary"
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs !py-2.5 !px-4"
                      >
                        <span>Live Application</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </MagneticButton>
                    )}

                    {project.links.github && (
                      <MagneticButton
                        variant="outlineDark"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs !py-2.5 !px-4"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </MagneticButton>
                    )}
                  </div>
                </div>

                {/* Tags Strip */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#211B20] text-[#E9DFD5] border border-[#722F45]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Preview Image */}
              <div className="rounded-2xl overflow-hidden border border-[#722F45]/40 bg-[#211B20]">
                <img
                  src={project.coverImage}
                  alt={`${project.title} Interface Preview`}
                  className="w-full h-auto max-h-[380px] object-cover"
                />
              </div>

              {/* Problem vs. Solution Editorial Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#211B20] border border-[#722F45]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C49A80] uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-[#C49A80]" />
                    <span>The Problem Statement</span>
                  </div>
                  <p className="text-sm text-[#E9DFD5]/90 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#211B20] border border-[#722F45]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C49A80] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>The Engineering Solution</span>
                  </div>
                  <p className="text-sm text-[#E9DFD5]/90 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deep Architectural Breakdown */}
              <div className="space-y-6">
                <div className="border-b border-[#722F45]/40 pb-3">
                  <h3 className="font-serif text-2xl text-[#F8F3EA] flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-[#C49A80]" />
                    <span>System Architecture &amp; Implementation Details</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Architecture & Flow */}
                  <div className="p-6 rounded-2xl bg-[#211B20]/60 border border-[#722F45]/25 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C49A80] block font-semibold">
                      // System Architecture
                    </span>
                    <p className="text-xs sm:text-sm text-[#E9DFD5]/80 leading-relaxed">
                      {project.caseStudy.architectureOverview}
                    </p>
                  </div>

                  {/* Frontend Implementation */}
                  <div className="p-6 rounded-2xl bg-[#211B20]/60 border border-[#722F45]/25 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C49A80] block font-semibold">
                      // Frontend Implementation
                    </span>
                    <p className="text-xs sm:text-sm text-[#E9DFD5]/80 leading-relaxed">
                      {project.caseStudy.frontendImplementation}
                    </p>
                  </div>

                  {/* Backend & API Implementation */}
                  <div className="p-6 rounded-2xl bg-[#211B20]/60 border border-[#722F45]/25 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C49A80] block font-semibold">
                      // Backend &amp; API Layer
                    </span>
                    <p className="text-xs sm:text-sm text-[#E9DFD5]/80 leading-relaxed">
                      {project.caseStudy.backendImplementation}
                    </p>
                  </div>

                  {/* Database Design */}
                  <div className="p-6 rounded-2xl bg-[#211B20]/60 border border-[#722F45]/25 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C49A80] block font-semibold">
                      // Database Schema Design
                    </span>
                    <p className="text-xs sm:text-sm text-[#E9DFD5]/80 leading-relaxed">
                      {project.caseStudy.databaseDesign}
                    </p>
                  </div>
                </div>

                {/* Security & Authentication */}
                <div className="p-6 rounded-2xl bg-[#211B20] border border-[#722F45]/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C49A80] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#722F45]" />
                    <span>Authentication &amp; Security Measures</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9DFD5]/85 leading-relaxed">
                    {project.caseStudy.securityDetails}
                  </p>
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#F8F3EA]">
                  Technical Challenges &amp; Resolution
                </h3>

                <div className="space-y-3">
                  {project.caseStudy.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#211B20] border border-[#722F45]/30 flex items-start gap-3.5"
                    >
                      <span className="font-mono text-xs text-[#722F45] font-bold mt-0.5">
                        0{index + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#E9DFD5]/85 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Contributions */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-2xl text-[#F8F3EA]">
                  My Technical Contributions
                </h3>

                <ul className="space-y-2.5">
                  {project.myContribution.map((contribution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#E9DFD5]/85 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C49A80] shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#722F45]/40 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#C49A80]">
                  // Status: {project.statusBadge}
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {project.links.live && (
                    <MagneticButton
                      variant="primary"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </MagneticButton>
                  )}
                  {project.links.github && (
                    <MagneticButton
                      variant="outlineDark"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository</span>
                    </MagneticButton>
                  )}
                  <MagneticButton variant="outlineDark" onClick={onClose}>
                    <span>Close Case Study</span>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
