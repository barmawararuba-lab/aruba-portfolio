import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import { profileData } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  FileCheck, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

/**
 * Dedicated Resume Download Experience
 * 
 * Features:
 * - High-end document preview card
 * - Transparent file metadata (format, size, target role)
 * - Direct download and browser preview actions
 */
export default function Resume() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="resume" className="scroll-mt-24 space-y-12 py-8">
      {/* Editorial Section Introduction */}
      <SectionHeading
        badge="Curriculum Vitae"
        subtitle="Official Documentation"
        title="Resume &amp; Technical Profile"
        description="Comprehensive summary of computer science and data science coursework, verified full-stack and machine learning projects, and technical foundations formatted for recruiters."
      />

      {/* Main Resume Showcase Box */}
      <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#FFFFFF] border border-[#E9DFD5] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Document Preview Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Offset decorative paper shadow */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-2 rounded-2xl bg-[#722F45]/15 rotate-1 pointer-events-none" />
              <div className="absolute -inset-3.5 rounded-2xl bg-[#C49A80]/15 -rotate-1 pointer-events-none" />

              {/* Document Sheet */}
              <div className="relative rounded-xl bg-[#F8F3EA] border border-[#E9DFD5] p-6 shadow-lg space-y-4 text-[#30282A]">
                {/* PDF Header Stamp */}
                <div className="flex items-center justify-between border-b border-[#E9DFD5] pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#722F45] font-bold">
                    <FileText className="w-4 h-4" />
                    <span>CURRICULUM VITAE</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#30282A]/60">PDF / A4</span>
                </div>

                {/* Candidate Overview In Miniature */}
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-bold text-[#30282A]">
                    {profileData.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#722F45]">
                    {profileData.title} • {profileData.academicStatus}
                  </p>
                </div>

                {/* Simulated Content Sections */}
                <div className="space-y-3 pt-2 text-[11px] text-[#30282A]/70">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#722F45] block">
                      // Technical Core
                    </span>
                    <p className="line-clamp-2">
                      Python, Machine Learning, React, Node.js, Express, PostgreSQL, MongoDB, SQL, Tailwind CSS.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#722F45] block">
                      // Education &amp; Focus
                    </span>
                    <p className="line-clamp-2">
                      AITM, Bhatkal • B.E. in CSE (Data Science) • Exploring AI/ML &amp; Full-Stack Development.
                    </p>
                  </div>
                </div>

                {/* Verified Document Stamp */}
                <div className="pt-2 border-t border-[#E9DFD5] flex items-center justify-between text-[10px] font-mono text-[#722F45]">
                  <span>{profileData.resume.lastUpdated}</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#722F45] font-semibold block">
                // Fast-Track Review
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#30282A] font-semibold leading-snug">
                Ready for Technical Interviewers &amp; Engineering Hiring Teams
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#30282A]/80 leading-relaxed font-normal">
              Looking for software development engineering internships for Summer &amp; Fall 2025/2026. The resume provides a detailed view of my academic coursework, active technical repositories, and collaborative engineering initiatives.
            </p>

            {/* Document Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#F8F3EA] border border-[#E9DFD5]">
                <span className="text-[#30282A]/60 block text-[10px] uppercase">Format</span>
                <span className="font-bold text-[#722F45]">Standard PDF</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F3EA] border border-[#E9DFD5]">
                <span className="text-[#30282A]/60 block text-[10px] uppercase">Target Scope</span>
                <span className="font-bold text-[#722F45]">SDE Internships</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F3EA] border border-[#E9DFD5] col-span-2 sm:col-span-1">
                <span className="text-[#30282A]/60 block text-[10px] uppercase">Last Updated</span>
                <span className="font-bold text-[#722F45]">{profileData.resume.lastUpdated}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E9DFD5]">
              <MagneticButton
                variant="primary"
                href={profileData.resume.url}
                download={profileData.resume.filename}
                className="shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume</span>
              </MagneticButton>

              <MagneticButton
                variant="outline"
                href={profileData.resume.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View in New Tab</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
