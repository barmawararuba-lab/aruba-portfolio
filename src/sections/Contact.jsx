import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profileData } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Mail, MapPin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailMailto = 'mailto:' + profileData.socials.email + '?subject=' + encodeURIComponent('Opportunity / Collaboration Inquiry');

  const handleCopyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(profileData.socials.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }).catch(() => setCopiedEmail(false));
  };

  return (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden rounded-2xl border border-[#722F45]/15 bg-gradient-to-br from-[#F5E8E6] via-[#F8F3EA] to-[#EFE4DC] px-5 py-6 shadow-sm sm:px-8 sm:py-8">
      <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-8 hidden h-44 w-44 rounded-full border border-[#722F45]/15 sm:block">
        <div className="absolute inset-5 rounded-full border border-[#722F45]/10" />
        <span className="absolute right-8 top-9 h-3 w-3 rounded-full bg-[#722F45]/20" />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <SectionHeading
            badge="Contact"
            title="Let's Connect"
            description="I'm open to internship opportunities and professional collaboration."
            className="!mb-0"
          />
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#30282A]/70">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Available for internships
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#722F45]" />
              {profileData.location}
            </span>
          </div>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          aria-label="Contact links"
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:justify-end"
        >
          <a
            href={emailMailto}
            className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-[#722F45] bg-[#722F45] px-4 py-2.5 text-sm font-medium text-[#F8F3EA] shadow-sm transition-colors hover:bg-[#5B2537]"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="break-all">{profileData.socials.email}</span>
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#722F45]/25 bg-white/75 px-4 py-2.5 text-sm font-medium text-[#722F45] shadow-sm transition-all hover:border-[#722F45]/50 hover:bg-white"
          >
            <LinkedinIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#722F45]/25 bg-white/75 px-4 py-2.5 text-sm font-medium text-[#722F45] shadow-sm transition-all hover:border-[#722F45]/50 hover:bg-white"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#722F45]/15 bg-[#F8F3EA]/70 px-3.5 py-2.5 text-xs text-[#30282A]/70 transition-colors hover:border-[#722F45]/35 hover:text-[#722F45]"
            aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
            title={copiedEmail ? 'Copied' : 'Copy email address'}
          >
            {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-700" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedEmail ? 'Copied' : 'Copy email'}</span>
          </button>
        </motion.nav>
      </div>
    </section>
  );
}
