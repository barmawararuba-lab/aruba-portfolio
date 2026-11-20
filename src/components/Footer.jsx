import React from 'react';
import { profileData } from '../data/profile';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp, Mail } from 'lucide-react';

/**
 * Editorial Studio Closing Footer
 * 
 * Footer navigation, social links, and back-to-top action.
 */
export default function Footer() {
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
              <span className="text-xs text-[#722F45] font-medium tracking-wide">{profileData.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          {/* Column 1: Index Links */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#722F45] font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#30282A]/80">
              <a href="#hero" className="hover:text-[#722F45] transition-colors">Home</a>
              <a href="#skills" className="hover:text-[#722F45] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#722F45] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#722F45] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#722F45] transition-colors">Contact</a>
            </div>
          </div>

          {/* Profiles & Contact */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#722F45] font-semibold block">
              Connect
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
            © {new Date().getFullYear()} {profileData.name}.
          </div>

        </div>
      </div>
    </footer>
  );
}
