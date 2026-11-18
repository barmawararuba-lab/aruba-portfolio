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
        'mb-6 sm:mb-10 md:mb-16 w-full max-w-full min-w-0',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
      style={{ boxSizing: 'border-box' }}
    >
      {badge && (
        <div
          className={clsx(
            'inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 transition-colors max-w-full',
            dark
              ? 'bg-[#722F45]/30 text-[#C49A80] border border-[#722F45]/60'
              : 'bg-[#722F45]/10 text-[#722F45] border border-[#722F45]/20'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
          <span className="truncate">{badge}</span>
        </div>
      )}

      {subtitle && (
        <p
          className={clsx(
            'text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-1.5 sm:mb-2 break-words',
            dark ? 'text-[#C49A80]' : 'text-[#722F45]'
          )}
          style={{ overflowWrap: 'anywhere' }}
        >
          {subtitle}
        </p>
      )}

      <h2
        className={clsx(
          'font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight leading-[1.2] mb-3 sm:mb-4 break-words',
          dark ? 'text-[#F8F3EA]' : 'text-[#30282A]'
        )}
        style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={clsx(
            'text-sm sm:text-base md:text-lg font-normal leading-relaxed break-words',
            dark ? 'text-[#E9DFD5]/80' : 'text-[#30282A]/80'
          )}
          style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
