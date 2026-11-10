import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { clsx } from 'clsx';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Premium Magnetic Interactive Button / Anchor Component
 * Calculates cursor distance from component center to produce a subtle magnetic pull.
 * Falls back gracefully to standard interaction if reduced motion is preferred.
 */
export default function MagneticButton({
  children,
  className = '',
  variant = 'primary', // 'primary' | 'outline' | 'cream' | 'dark' | 'ghost'
  href,
  onClick,
  target,
  rel,
  strength = 0.25,
  ...props
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Motion values for smooth spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Variant styling
  const variantStyles = {
    primary:
      'bg-[#722F45] text-[#F8F3EA] border border-[#722F45] hover:bg-[#5b2537] hover:border-[#5b2537] shadow-sm',
    outline:
      'bg-transparent text-[#722F45] border border-[#722F45] hover:bg-[#722F45] hover:text-[#F8F3EA]',
    outlineDark:
      'bg-transparent text-[#F8F3EA] border border-[#C49A80]/60 hover:bg-[#C49A80] hover:text-[#211B20]',
    cream:
      'bg-[#F8F3EA] text-[#722F45] border border-[#F8F3EA] hover:bg-[#FFFFFF] shadow-sm',
    dark:
      'bg-[#211B20] text-[#F8F3EA] border border-[#30282A] hover:bg-[#30282A] hover:border-[#722F45]',
    ghost:
      'bg-transparent text-current hover:text-[#722F45] border border-transparent'
  };

  const baseClasses = clsx(
    'relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors cursor-pointer select-none group',
    variantStyles[variant] || variantStyles.primary,
    className
  );

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileTap={{ scale: 0.97 }}
      className={baseClasses}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
