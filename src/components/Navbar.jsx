import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { profileData } from '../data/profile';
import MagneticButton from './MagneticButton';
import { Menu, X, FileText, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Floating Editorial Navbar with Active Indicator and Responsive Mobile Menu
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id), 220);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = targetId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Floating Desktop & Tablet Header Bar */}
      <header
        className={`fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-sm max-w-4xl w-full ${
            isScrolled
              ? 'bg-[#FFFFFF]/90 backdrop-blur-md border-[#E9DFD5] shadow-md'
              : 'bg-[#F8F3EA]/80 backdrop-blur-md border-[#E9DFD5]/80'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            aria-label="Return to top"
          >
            <div className="w-8 h-8 rounded-full bg-[#722F45] text-[#F8F3EA] flex items-center justify-center font-serif font-bold text-xs tracking-wider transition-transform duration-300 group-hover:scale-105">
              {profileData.initials}
            </div>
            <span className="font-serif font-semibold text-sm tracking-tight text-[#30282A] hidden sm:inline-block">
              {profileData.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#E9DFD5]/40 p-1 rounded-full border border-[#E9DFD5]/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#F8F3EA]'
                      : 'text-[#30282A]/80 hover:text-[#722F45]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#722F45] rounded-full z-0"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={profileData.resume.url}
              download={profileData.resume.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#722F45] text-[#F8F3EA] hover:bg-[#5b2537] transition-all duration-200 shadow-2xs group"
              aria-label="Download Resume PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#C49A80] transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#30282A] hover:bg-[#E9DFD5]/60 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-[#722F45]" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#211B20]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-24 text-[#F8F3EA]"
          >
            {/* Navigation Links */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#C49A80] uppercase block mb-2">
                // Navigation Index
              </span>
              <nav className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-[#30282A] group"
                  >
                    <span className="font-serif text-2xl text-[#F8F3EA] group-hover:text-[#C49A80] transition-colors">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[#C49A80]/60">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer & Socials */}
            <div className="space-y-5 pt-6 border-t border-[#30282A]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#F8F3EA]">{profileData.name}</p>
                  <p className="text-[11px] text-[#C49A80]">{profileData.availability.status}</p>
                </div>
                <a
                  href={profileData.resume.url}
                  download={profileData.resume.filename}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#722F45] text-[#F8F3EA] flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C49A80]" />
                  <span>Get Resume</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#E9DFD5]/80">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#C49A80] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#C49A80] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-1 hover:text-[#C49A80] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
