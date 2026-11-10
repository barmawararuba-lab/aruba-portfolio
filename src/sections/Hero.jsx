import React from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';
import MagneticButton from '../components/MagneticButton';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  ChevronDown 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

/**
 * Cinematic Editorial Hero Section
 * 
 * Features:
 * - Oversized Playfair Display editorial typography
 * - Integrated architectural portrait frame with geometric badge overlays
 * - Live glowing SDE internship availability badge
 * - Asymmetric layout balancing high-fashion minimalism with engineering credibility
 * - Magnetic interactive CTAs and social links
 * - Refined kinetic scroll indicator
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-30">
        <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[1px] bg-[#E9DFD5]" />
        <div className="absolute right-8 md:right-24 top-0 bottom-0 w-[1px] bg-[#E9DFD5]" />
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#E9DFD5]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Positioning & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Internship Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#722F45]/10 text-[#722F45] border border-[#722F45]/20 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="tracking-wide">{profileData.availability.status}</span>
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-[#30282A]/60">
                // {profileData.academicStatus}
              </span>
            </motion.div>

            {/* Oversized Editorial Name & Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="block text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#722F45] font-semibold">
                {profileData.title}
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#30282A] leading-[1.05]">
                {profileData.name}
              </h1>
            </motion.div>

            {/* Short Personal Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-[#30282A]/85 font-normal leading-relaxed max-w-xl"
            >
              "{profileData.tagline}"
            </motion.p>

            {/* Sub-text highlighting engineering & academic context */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-[#30282A]/70 leading-relaxed max-w-lg border-l-2 border-[#722F45]/40 pl-4 py-0.5"
            >
              Undergraduate engineer at {profileData.institution} • {profileData.academicStatus}.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                variant="primary"
                onClick={() => handleScrollTo('contact')}
                className="shadow-md"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                variant="outline"
                onClick={() => handleScrollTo('projects')}
              >
                <span>View Projects</span>
              </MagneticButton>
            </motion.div>

            {/* Social Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-2 text-xs font-medium text-[#30282A]/70"
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#722F45]">
                Connect //
              </span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#722F45] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#722F45] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center gap-1.5 hover:text-[#722F45] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Integrated Portrait Frame */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Outer Decorative Backdrop Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Geometric offset frame in burgundy */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#722F45]/30 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-4 rounded-3xl border border-[#C49A80]/20 rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#211B20] border-2 border-[#722F45]/40 shadow-xl aspect-[4/5]">
                <img
                  src={profileData.avatar || '/images/aruba-profile.png'}
                  alt={`Portrait of ${profileData.name}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211B20] via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Top Corner Technical Stamp */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#211B20]/80 backdrop-blur-md border border-[#722F45]/50 text-[10px] font-mono text-[#C49A80] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#722F45]" />
                  <span>2ND YR • CSE (DATA SCIENCE)</span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#211B20]/90 backdrop-blur-md border border-[#722F45]/40 text-[#F8F3EA] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#C49A80]">
                    <span>AITM BHATKAL</span>
                    <span>CSE (DATA SCIENCE)</span>
                  </div>
                  <p className="text-xs text-[#E9DFD5]/90 font-medium">
                    Exploring AI, machine learning and full-stack development to build meaningful digital experiences.
                  </p>
                </div>
              </div>

              {/* Floating Architectural Coordinates */}
              <div className="hidden sm:flex items-center justify-between mt-3 text-[10px] font-mono text-[#722F45]/70 tracking-widest uppercase">
                <span>COORD // {profileData.location}</span>
                <span>STATUS // AI/ML &amp; SDE CANDIDATE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Kinetic Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-[#722F45]/80 select-none">
        <button
          onClick={() => handleScrollTo('about')}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#30282A]/60 group-hover:text-[#722F45] transition-colors">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-[#722F45]/50 flex items-start justify-center p-1 group-hover:border-[#722F45] transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#722F45]"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
