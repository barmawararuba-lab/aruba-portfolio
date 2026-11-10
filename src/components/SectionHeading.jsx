import React from 'react';
import { clsx } from 'clsx';

/**
 * Reusable Editorial Section Heading Component
 * Features Playfair Display serif typography with sophisticated letter-spaced badges.
 * Automatically adapts between warm cream and dark charcoal environments.
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  dark = false,
  align = 'left',
  className = '',
}) {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
    >
      {badge && (
        <div
          className={clsx(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 transition-colors',
            dark
              ? 'bg-[#722F45]/30 text-[#C49A80] border border-[#722F45]/60'
              : 'bg-[#722F45]/10 text-[#722F45] border border-[#722F45]/20'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
      )}

      {subtitle && (
        <p
          className={clsx(
            'text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2',
            dark ? 'text-[#C49A80]' : 'text-[#722F45]'
          )}
        >
          {subtitle}
        </p>
      )}

      <h2
        className={clsx(
          'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] mb-4',
          dark ? 'text-[#F8F3EA]' : 'text-[#30282A]'
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={clsx(
            'text-sm sm:text-base md:text-lg font-normal leading-relaxed',
            dark ? 'text-[#E9DFD5]/80' : 'text-[#30282A]/80'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
