import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp, Mail, Heart, Globe, Terminal } from 'lucide-react';

/**
 * Editorial Studio Closing Footer
 * 
 * Features:
 * - Dynamic live ticking local time clock
 * - Smooth "Back to Top" scroll action
 * - Quick anchor navigation and social links
 * - Minimalist engineering manifesto
 */
export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  // Live ticking local time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as 12-hour with seconds and AM/PM
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-24 border-t border-[#E9DFD5] bg-[#F8F3EA] text-[#30282A] py-14 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Tier: Monogram & Back-to-Top Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-[#E9DFD5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#722F45] text-[#F8F3EA] flex items-center justify-center font-serif font-bold text-sm tracking-wider">
              {profileData.initials}
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-[#30282A] tracking-tight block">
                {profileData.name}
              </span>
              <span className="text-xs text-[#722F45] font-medium tracking-wide">
                {profileData.title} • {profileData.academicStatus}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Clock */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9DFD5] text-xs font-mono text-[#30282A]/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LOCAL: {currentTime || '12:00:00 PM'}</span>
            </div>

            {/* Back to top magnetic button */}
            <MagneticButton
              variant="outline"
              onClick={handleScrollToTop}
              className="text-xs !py-2 !px-3.5"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </MagneticButton>
          </div>
        </div>

        {/* Middle Tier: Navigation Links & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          {/* Column 1: Index Links */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#722F45] font-semibold block">
              // Navigation Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#30282A]/80">
              <a href="#hero" className="hover:text-[#722F45] transition-colors">01 / Home</a>
              <a href="#about" className="hover:text-[#722F45] transition-colors">02 / About</a>
              <a href="#skills" className="hover:text-[#722F45] transition-colors">03 / Skills</a>
              <a href="#projects" className="hover:text-[#722F45] transition-colors">04 / Projects</a>
              <a href="#experience" className="hover:text-[#722F45] transition-colors">05 / Experience</a>
              <a href="#resume" className="hover:text-[#722F45] transition-colors">06 / Resume</a>
              <a href="#contact" className="hover:text-[#722F45] transition-colors">07 / Contact</a>
            </div>
          </div>

          {/* Column 2: Academic & Focus Context */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#722F45] font-semibold block">
              // Academic &amp; Engineering Focus
            </span>
            <p className="text-[#30282A]/80 leading-relaxed font-normal">
              {profileData.department} at {profileData.institution}. Driven by curiosity, exploring the intersection of AI, machine learning and full-stack development to build practical digital experiences.
            </p>
          </div>

          {/* Column 3: Profiles & Contact */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#722F45] font-semibold block">
              // Connect &amp; Network
            </span>
            <div className="flex flex-col space-y-2 text-[#30282A]/80">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#722F45] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#722F45]" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#722F45] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#722F45]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center gap-2 hover:text-[#722F45] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#722F45]" />
                <span>{profileData.socials.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Manifesto & Copyright */}
        <div className="pt-8 border-t border-[#E9DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#30282A]/60">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All engineering rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19, Tailwind v4, Motion, GSAP &amp; Lenis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
