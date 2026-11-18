import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profileData } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Briefcase
} from 'lucide-react';

/**
 * Premium Modern Contact Section
 * 
 * Features:
 * - Direct Email as primary contact channel with functional mailto & 1-click clipboard copy
 * - Direct external links to verified LinkedIn and GitHub profiles
 * - Live "Available for Internships" & Location metadata badges
 * - High-contrast burgundy & dark charcoal aesthetic matching portfolio theme
 * - 100% responsive across desktop, tablet, and mobile
 */
export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email mailto link
  const emailMailto = `mailto:${profileData.socials.email}?subject=${encodeURIComponent("Opportunity / Collaboration Inquiry")}`;

  // Copy email to clipboard with visual confirmation
  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileData.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 p-5 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#722F45] via-[#431B29] to-[#211B20] text-[#F8F3EA] border border-[#722F45]/60 shadow-2xl space-y-8 sm:space-y-12"
    >
      {/* ── Top Header & Context Row ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#722F45]/50 pb-8">
        <SectionHeading
          dark
          badge="Get In Touch"
          subtitle="Direct Dialogue"
          title="Let's Connect"
          description="Have an opportunity, an idea, or a project in mind? I'd love to connect and explore ways to create something meaningful together."
          className="!mb-0"
        />

        {/* Live Availability & Location Badges */}
        <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Internships</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#E9DFD5]/90 bg-[#211B20]/70 border border-[#722F45]/50 shadow-xs backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#C49A80]" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>

      {/* ── Main Contact Options Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ═══════════════════════════════════════════════════════════════
            LEFT COLUMN (7 cols): Primary Channel — Email Contact
           ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="p-7 sm:p-9 rounded-3xl bg-[#211B20]/80 backdrop-blur-xl border-2 border-[#722F45]/60 hover:border-[#C49A80]/70 shadow-xl space-y-6 transition-all duration-300 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#722F45]/40 text-[#C49A80] border border-[#722F45]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49A80] animate-pulse" />
                    <span>Primary Contact Method</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F3EA] leading-tight">
                    Direct Email Correspondence
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#722F45]/30 text-[#C49A80] border border-[#722F45]/50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E9DFD5]/85 leading-relaxed font-normal">
                Whether you are an engineering recruiter with an internship opportunity, a developer interested in technical collaboration, or an organization looking to connect, feel free to write to me directly.
              </p>
            </div>

            {/* Email Address Display & Action Bar */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#30282A]/90 border border-[#722F45]/50">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#C49A80] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#F8F3EA] truncate select-all">
                    {profileData.socials.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono bg-[#211B20] hover:bg-[#722F45] text-[#F8F3EA] border border-[#722F45]/60 transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C49A80]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  variant="cream"
                  href={emailMailto}
                  className="w-full sm:w-auto !py-3.5 !px-6 font-semibold text-sm shadow-md group"
                >
                  <Mail className="w-4 h-4 text-[#722F45] transition-transform group-hover:scale-110" />
                  <span>Email Me</span>
                  <ArrowUpRight className="w-4 h-4 text-[#722F45] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            RIGHT COLUMN (5 cols): Professional Profiles & Details
           ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.12 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#211B20]/70 backdrop-blur-md border border-[#722F45]/50 space-y-6 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#722F45]/40 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C49A80] font-semibold block">
                  // Professional Profiles
                </span>
                <span className="text-[11px] font-mono text-[#E9DFD5]/60">External Links</span>
              </div>

              <p className="text-xs sm:text-sm text-[#E9DFD5]/80 leading-relaxed">
                Connect with me on LinkedIn and explore my code repositories and technical projects on GitHub.
              </p>

              {/* Profiles Action List */}
              <div className="space-y-3 pt-1">
                {/* LinkedIn Action */}
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#30282A]/70 hover:bg-[#722F45]/40 border border-[#722F45]/40 hover:border-[#C49A80]/60 transition-all duration-300 group cursor-pointer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#211B20] text-[#F8F3EA] group-hover:text-[#C49A80] flex items-center justify-center transition-colors">
                      <LinkedinIcon className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-semibold text-[#F8F3EA] block">
                        LinkedIn Network
                      </span>
                      <span className="text-[11px] font-mono text-[#C49A80]">
                        Professional profile &amp; credentials
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C49A80] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* GitHub Action */}
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#30282A]/70 hover:bg-[#722F45]/40 border border-[#722F45]/40 hover:border-[#C49A80]/60 transition-all duration-300 group cursor-pointer"
                  aria-label="Visit GitHub Profile"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#211B20] text-[#F8F3EA] group-hover:text-[#C49A80] flex items-center justify-center transition-colors">
                      <GithubIcon className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-semibold text-[#F8F3EA] block">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] font-mono text-[#C49A80]">
                        Open-source repositories &amp; code
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C49A80] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Turnaround Commitment Meta */}
            <div className="pt-4 border-t border-[#722F45]/40 space-y-3 text-xs text-[#E9DFD5]/80">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#211B20] text-[#C49A80] flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-[#F8F3EA] block">Response Commitment</span>
                  <span className="text-[11px]">Typically responds within 24 business hours.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#211B20] text-[#C49A80] flex items-center justify-center shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-[#F8F3EA] block">Target Opportunities</span>
                  <span className="text-[11px]">AI/ML &amp; Full-Stack Engineering Internships.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
