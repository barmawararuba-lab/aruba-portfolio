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
    <section id="about" className="scroll-mt-24 space-y-16 py-8">
      {/* Editorial Section Introduction */}
      <SectionHeading
        badge="Personal Narrative"
        subtitle="Identity &amp; Mindset"
        title="Curiosity, Engineering &amp; Modern Innovation"
        description="A look inside my undergraduate studies in Computer Science and Engineering (Data Science), technical curiosity, and practical approach to software development."
      />

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Visual Secondary Frame & Metric Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="lg:col-span-5 space-y-6"
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
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#722F45] text-[#F8F3EA] text-[10px] font-mono tracking-widest uppercase shadow-sm">
              ENGINEERING LOG // 2025
            </div>
          </div>

          {/* Quick Technical Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="block font-serif text-lg text-[#30282A] font-semibold">
                CSE (Data Science)
              </span>
              <p className="text-xs text-[#30282A]/70 leading-relaxed">
                Second Year student at AITM, Bhatkal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] space-y-2 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#722F45]/10 text-[#722F45] flex items-center justify-center">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <span className="block font-serif text-lg text-[#30282A] font-semibold">
                AI/ML &amp; Full-Stack
              </span>
              <p className="text-xs text-[#30282A]/70 leading-relaxed">
                Transforming ideas into practical digital solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Deep Editorial Storytelling */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="lg:col-span-7 space-y-8"
        >
          {/* Main Statement Quote */}
          <blockquote className="border-l-4 border-[#722F45] pl-6 py-2">
            <p className="font-serif text-2xl sm:text-3xl text-[#30282A] font-normal leading-snug">
              "{profileData.tagline}"
            </p>
          </blockquote>

          {/* Structured Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-[#30282A]/85 leading-relaxed font-normal">
            <p>
              I am an engineering student driven by curiosity and a passion for building meaningful technology. I enjoy exploring how things work, experimenting with new ideas, and transforming concepts into practical applications through AI, machine learning and full-stack development.
            </p>
            <p>
              Currently pursuing my undergraduate studies in Computer Science and Engineering (Data Science) at {profileData.institution}, I focus on understanding foundational engineering principles while building real-world software. My coursework provides rigorous exposure to algorithms, data structures, and database systems, which I actively pair with self-directed full-stack web and machine learning projects.
            </p>
            <p>
              I believe in clean code, continuous learning, and combining analytical rigor with intentional user experience to create digital tools that deliver genuine utility.
            </p>
          </div>

          {/* Current Focus & Learning Areas */}
          <div className="pt-4 border-t border-[#E9DFD5] space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#722F45] font-semibold block">
              // Core Technical Focus &amp; Growth Pillars
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E9DFD5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#722F45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#30282A] block">AI &amp; Machine Learning</span>
                  <span className="text-[11px] text-[#30282A]/70">Model training, data preprocessing, Python libraries, and practical prediction workflows.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E9DFD5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#722F45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#30282A] block">Full-Stack Web Development</span>
                  <span className="text-[11px] text-[#30282A]/70">React component architectures, Node.js/Express APIs, and responsive Tailwind styling.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E9DFD5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#722F45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#30282A] block">Database Architecture</span>
                  <span className="text-[11px] text-[#30282A]/70">Relational schema design, SQL fundamentals, PostgreSQL, and document databases with MongoDB.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E9DFD5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#722F45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#30282A] block">Data Science &amp; Algorithms</span>
                  <span className="text-[11px] text-[#30282A]/70">Analytical problem solving, data preprocessing, and algorithmic optimization.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
