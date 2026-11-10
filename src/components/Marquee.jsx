import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const DEFAULT_ITEMS = [
  'AI & MACHINE LEARNING',
  'FULL STACK DEVELOPMENT',
  'DATA SCIENCE & ANALYTICS',
  'CREATIVE PROBLEM SOLVING',
  'BUILDING DIGITAL EXPERIENCES',
  'CONTINUOUS LEARNING',
];

/**
 * Refined Cinematic Infinite Horizontal Marquee
 * Features:
 * - Fluid infinite kinetic scrolling using GPU transforms
 * - Pause on hover interaction
 * - Elegant editorial typography with burgundy and muted rose accents
 * - Respects prefers-reduced-motion
 */
export default function Marquee({
  items = DEFAULT_ITEMS,
  speed = 28,
  variant = 'burgundy', // 'burgundy' | 'dark' | 'cream'
  className = '',
}) {
  const prefersReducedMotion = useReducedMotion();

  const variantStyles = {
    burgundy: 'bg-[#722F45] text-[#F8F3EA] border-y border-[#5b2537]',
    dark: 'bg-[#211B20] text-[#F8F3EA] border-y border-[#30282A]',
    cream: 'bg-[#F8F3EA] text-[#722F45] border-y border-[#E9DFD5]',
  };

  // Duplicate items array to guarantee continuous uninterrupted scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 sm:py-5 ${variantStyles[variant]} ${className}`}
      aria-label="Scrolling Highlights"
    >
      {/* Left/Right Vignette Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center w-max whitespace-nowrap will-change-transform"
        animate={
          prefersReducedMotion
            ? { x: 0 }
            : { x: ['0%', '-50%'] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                ease: 'linear',
                duration: speed,
              }
        }
        whileHover={prefersReducedMotion ? {} : { animationPlayState: 'paused' }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5">
            <span className="font-serif text-lg sm:text-2xl md:text-3xl tracking-wider uppercase font-normal">
              {item}
            </span>
            <span className="text-[#C49A80] text-xs sm:text-sm font-serif select-none">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
