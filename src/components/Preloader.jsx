import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { profileData } from '../data/profile';

/**
 * Cinematic Opening Experience Preloader
 * 
 * Features:
 * - High-fashion typography with staggered identity reveals
 * - Smooth, non-blocking kinetic progress sequence (~1.2s total)
 * - Burgundy & cream split-curtain exit reveal
 * - Hard safety timeout and click/escape skip to prevent trapping users
 * - Full reduced-motion bypass for accessibility
 * - Mobile responsive without layout shift
 */
export default function Preloader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Immediate bypass if user prefers reduced motion
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      setIsFinished(true);
      return;
    }

    // Lock page scrolling during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Smooth kinetic progress interval (~1.2s total)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 14) + 8;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          triggerExit();
        }, 250);
      } else {
        setProgress(currentProgress);
      }
    }, 45);

    // Hard safety timeout: Ensure user is never trapped even on slow devices
    const safetyTimeout = setTimeout(() => {
      triggerExit();
    }, 2400);

    // Allow user to click or hit any key to immediately skip intro
    const handleSkip = () => {
      triggerExit();
    };

    window.addEventListener('keydown', handleSkip, { once: true });
    window.addEventListener('click', handleSkip, { once: true });

    function triggerExit() {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      setIsExiting(true);
      
      // Delay before unmounting completely to allow curtain animation to finish
      setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 850);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
      document.body.style.overflow = originalOverflow;
    };
  }, [prefersReducedMotion, onComplete]);

  if (isFinished || prefersReducedMotion) {
    return null;
  }

  // Cinematic curtain ease
  const curtainTransition = {
    duration: 0.85,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center select-none overflow-hidden"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Loading portfolio experience"
    >
      {/* Top Split Curtain Panel */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '-100%' : '0%' }}
        transition={curtainTransition}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#211B20] border-b border-[#722F45]/30 z-10"
      />

      {/* Bottom Split Curtain Panel */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '100%' : '0%' }}
        transition={curtainTransition}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#211B20] border-t border-[#722F45]/30 z-10"
      />

      {/* Preloader Foreground Content */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.95 : 1,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-md w-full"
      >
        {/* Monogram Initials */}
        <div className="relative mb-6">
          <span className="font-serif text-6xl sm:text-7xl font-bold tracking-wider text-[#F8F3EA] block">
            {profileData.initials}
          </span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#722F45]" />
        </div>

        {/* Identity & Career Focus */}
        <div className="space-y-1 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C49A80]">
            {profileData.name}
          </p>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#E9DFD5]/60">
            {profileData.title} • {profileData.availability.status}
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full max-w-xs space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
            <span className="text-[#C49A80]/80 uppercase">Loading Experience</span>
            <span className="text-[#F8F3EA] font-semibold">{progress}%</span>
          </div>

          <div className="w-full h-[2px] bg-[#30282A] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#722F45] relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            >
              {/* Glowing leading head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C49A80] blur-[3px]" />
            </motion.div>
          </div>
        </div>

        {/* Subtle Skip Hint */}
        <p className="mt-8 text-[10px] uppercase tracking-widest text-[#E9DFD5]/40 hover:text-[#C49A80] cursor-pointer transition-colors">
          Click or press any key to skip
        </p>
      </motion.div>
    </div>
  );
}
