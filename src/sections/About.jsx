import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  Cpu, 
  Code, 
  Terminal, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2,
  BrainCircuit,
  Database
} from 'lucide-react';

/**
 * Editorial Storytelling About Me Section for Aruba Barmawar
 * 
 * Features:
 * - High-contrast editorial layout on warm cream canvas
 * - Narrative depth: Engineering studies, curiosity-driven mindset, and AI/ML + Full-Stack focus
 * - Asymmetric visual pairing with the secondary architecture illustration
 * - Verified learning roadmap & problem-solving methodology
 */
export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  return (
    <section id="about" className="scroll-mt-24 space-y-12 py-8">
      {/* Editorial Section Introduction */}
      <SectionHeading
        badge="Personal Narrative"
        subtitle="Identity & Mindset"
        title="Curiosity, Engineering & Modern Innovation"
        description="Second Year undergraduate in CSE (Data Science) at AITM, Bhatkal — exploring AI/ML and full-stack development to build practical software."
      />

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Visual Secondary Frame & Metric Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="lg:col-span-5 space-y-5 w-full min-w-0"
        >
          {/* Secondary Visual Container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#722F45]/30 bg-[#211B20] shadow-lg group">
            <img
              src="/images/about-workspace.svg"
              alt="Engineering mindset and coding workspace"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Overlay Editorial Stamp */}
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-[#722F45] text-[#F8F3EA] text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest uppercase shadow-sm max-w-[calc(100%-2rem)] truncate">
              ENGINEERING LOG // 2025
            </div>
          </div>

          {/* Quick Technical Summary Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="block font-serif text-sm sm:text-base text-[#30282A] font-semibold leading-snug break-words">
                CSE (Data Science)
              </span>
              <p className="text-xs text-[#30282A]/70 leading-relaxed break-words">
                2nd Year · AITM, Bhatkal
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center shrink-0">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <span className="block font-serif text-sm sm:text-base text-[#30282A] font-semibold leading-snug break-words">
                AI/ML &amp; Full-Stack
              </span>
              <p className="text-xs text-[#30282A]/70 leading-relaxed break-words">
                Building meaningful digital solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Professional Narrative */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="lg:col-span-7 space-y-6 w-full min-w-0"
        >
          {/* Main Statement Quote */}
          <blockquote className="border-l-4 border-[#722F45] pl-4 sm:pl-5 py-1 min-w-0">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#30282A] font-normal leading-snug break-words">
              &ldquo;{profileData.tagline}&rdquo;
            </p>
          </blockquote>

          {/* Concise Bio — no repetition with Hero tagline */}
          <div className="space-y-4 text-sm sm:text-base text-[#30282A]/85 leading-relaxed font-normal break-words">
            <p>
              I am an engineering student driven by curiosity and a passion for building meaningful technology — exploring how things work and transforming ideas into practical applications through AI, machine learning, and full-stack development.
            </p>
            <p>
              My coursework at {profileData.institution} provides rigorous exposure to algorithms, data structures, and database systems, which I pair with hands-on full-stack web and machine learning projects. I believe in clean code, continuous learning, and creating digital tools that deliver genuine utility.
            </p>
          </div>

          {/* Focus Areas — icon + label only, no long sub-descriptions */}
          <div className="pt-4 border-t border-[#E9DFD5]">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#722F45] font-semibold block mb-3">
              // Core Technical Focus
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Cpu, label: 'AI & Machine Learning' },
                { icon: Code, label: 'Full-Stack Development' },
                { icon: Database, label: 'DB Architecture' },
                { icon: BookOpen, label: 'Data Science' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#FFFFFF] border border-[#E9DFD5] text-xs font-medium text-[#30282A] shadow-2xs"
                >
                  <Icon className="w-3.5 h-3.5 text-[#722F45] shrink-0" />
                  <span className="whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
