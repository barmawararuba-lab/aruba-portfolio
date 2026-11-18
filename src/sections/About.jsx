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
    <section id="about" className="scroll-mt-24 space-y-12 py-8" style={{ width: '100%', boxSizing: 'border-box' }}>
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
          style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
        >
          {/* Engineering Log Card — Native Responsive Component */}
          <div
            className="relative rounded-2xl border-2 border-[#722F45]/30 bg-gradient-to-br from-[#211B20] to-[#30282A] p-3.5 sm:p-5 md:p-6 shadow-xl w-full min-w-0"
            style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
          >
            {/* Top Workspace Header & Editorial Stamp */}
            <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4 min-w-0">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#C49A80] truncate">
                Workspace // Dev Environment
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#722F45] text-[#F8F3EA] text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest uppercase shadow-xs shrink-0">
                ENGINEERING LOG // 2025
              </span>
            </div>

            {/* Code Window Frame */}
            <div
              className="rounded-xl bg-[#1B161A] border border-[#722F45]/60 overflow-hidden w-full min-w-0"
              style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
            >
              {/* Window Header */}
              <div className="bg-[#161215] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 border-b border-[#722F45]/40 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#722F45]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C49A80]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E9DFD5]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-sans text-[#C49A80] truncate min-w-0">
                  mindset.ts — AITM Bhatkal • CSE (Data Science)
                </span>
              </div>

              {/* Code Editor Lines */}
              <div
                className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 w-full min-w-0 text-[#E9DFD5]"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <div>
                  <span className="text-[#C49A80]">interface</span>{' '}
                  <span className="text-[#F8F3EA] font-semibold">DeveloperMindset</span> &#123;
                </div>
                <div className="pl-3 sm:pl-4">
                  developer: <span className="text-[#C49A80]">"Aruba Barmawar"</span>;
                </div>
                <div className="pl-3 sm:pl-4">
                  academicYear: <span className="text-[#C49A80]">"Second Year"</span>;{' '}
                  <span className="text-[#722F45]">// CSE (Data Science)</span>
                </div>
                <div className="pl-3 sm:pl-4">
                  institution: <span className="text-[#C49A80]">"AITM, Bhatkal"</span>;
                </div>
                <div className="pl-3 sm:pl-4">
                  focus: <span className="text-[#C49A80]">"AI/ML &amp; Full-Stack Development"</span>;
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-[#C49A80]">buildSoftware</span>: () =&gt; Promise&lt;
                  <span className="text-[#F8F3EA]">MeaningfulImpact</span>&gt;;
                </div>
                <div>&#125;</div>

                <div
                  className="pt-2 text-[#C49A80]/90 text-[10px] sm:text-[11px] leading-relaxed"
                  style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                  // Driven by curiosity, transforming concepts into practical applications.
                </div>
                <div
                  className="text-[#E9DFD5] text-[10px] sm:text-[11px]"
                  style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                  <span className="text-[#C49A80]">export const</span> engineer ={' '}
                  <span className="text-[#F8F3EA]">new AIMLFullStackDeveloper()</span>;
                </div>
              </div>
            </div>

            {/* Bottom Stat Cards (Year 2, Data Science, AI/ML & Web) */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-3 pt-3.5 sm:pt-4 w-full min-w-0"
              style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
            >
              <div
                className="p-2 sm:p-3 rounded-lg bg-[#261E23] border border-[#722F45]/60 flex flex-col justify-center min-w-0 text-center sm:text-left"
                style={{ boxSizing: 'border-box', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
              >
                <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#F8F3EA] leading-tight block">
                  Year 2
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] md:text-[11px] text-[#C49A80] leading-tight block mt-0.5">
                  Engineering Student
                </span>
              </div>

              <div
                className="p-2 sm:p-3 rounded-lg bg-[#261E23] border border-[#722F45]/60 flex flex-col justify-center min-w-0 text-center sm:text-left"
                style={{ boxSizing: 'border-box', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
              >
                <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#F8F3EA] leading-tight block">
                  Data Science
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] md:text-[11px] text-[#C49A80] leading-tight block mt-0.5">
                  CSE Specialization
                </span>
              </div>

              <div
                className="p-2 sm:p-3 rounded-lg bg-[#261E23] border border-[#722F45]/60 flex flex-col justify-center min-w-0 text-center sm:text-left"
                style={{ boxSizing: 'border-box', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
              >
                <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#F8F3EA] leading-tight block">
                  AI/ML &amp; Web
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] md:text-[11px] text-[#C49A80] leading-tight block mt-0.5">
                  Practical Applications
                </span>
              </div>
            </div>
          </div>

          {/* Quick Technical Summary Cards */}
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4 w-full min-w-0"
            style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
          >
            <div
              className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs min-w-0"
              style={{ boxSizing: 'border-box', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center shrink-0">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="block font-serif text-xs sm:text-sm md:text-base text-[#30282A] font-semibold leading-snug break-words">
                CSE (Data Science)
              </span>
              <p className="text-[10px] sm:text-xs text-[#30282A]/70 leading-relaxed break-words">
                2nd Year · AITM, Bhatkal
              </p>
            </div>

            <div
              className="p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs min-w-0"
              style={{ boxSizing: 'border-box', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center shrink-0">
                <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="block font-serif text-xs sm:text-sm md:text-base text-[#30282A] font-semibold leading-snug break-words">
                AI/ML &amp; Full-Stack
              </span>
              <p className="text-[10px] sm:text-xs text-[#30282A]/70 leading-relaxed break-words">
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
          style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
        >
          {/* Main Statement Quote */}
          <blockquote
            className="border-l-4 border-[#722F45] pl-4 sm:pl-5 py-1 min-w-0"
            style={{ boxSizing: 'border-box' }}
          >
            <p
              className="font-serif text-lg sm:text-xl md:text-2xl text-[#30282A] font-normal leading-snug break-words"
              style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
            >
              &ldquo;{profileData.tagline}&rdquo;
            </p>
          </blockquote>

          {/* Concise Bio — no repetition with Hero tagline */}
          <div
            className="space-y-4 text-sm sm:text-base text-[#30282A]/85 leading-relaxed font-normal break-words"
            style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
          >
            <p>
              I am an engineering student driven by curiosity and a passion for building meaningful technology — exploring how things work and transforming ideas into practical applications through AI, machine learning, and full-stack development.
            </p>
            <p>
              My coursework at {profileData.institution} provides rigorous exposure to algorithms, data structures, and database systems, which I pair with hands-on full-stack web and machine learning projects. I believe in clean code, continuous learning, and creating digital tools that deliver genuine utility.
            </p>
          </div>

          {/* Focus Areas — icon + label only, no long sub-descriptions */}
          <div className="pt-4 border-t border-[#E9DFD5] w-full min-w-0" style={{ boxSizing: 'border-box' }}>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#722F45] font-semibold block mb-3">
              // Core Technical Focus
            </span>
            <div className="flex flex-wrap gap-2 w-full min-w-0" style={{ boxSizing: 'border-box' }}>
              {[
                { icon: Cpu, label: 'AI & Machine Learning' },
                { icon: Code, label: 'Full-Stack Development' },
                { icon: Database, label: 'DB Architecture' },
                { icon: BookOpen, label: 'Data Science' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#FFFFFF] border border-[#E9DFD5] text-xs font-medium text-[#30282A] shadow-2xs min-w-0"
                  style={{ boxSizing: 'border-box' }}
                >
                  <Icon className="w-3.5 h-3.5 text-[#722F45] shrink-0" />
                  <span className="break-words" style={{ overflowWrap: 'anywhere' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
