import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user has requested reduced motion in their system settings.
 * Ensures the website respects accessibility preferences by disabling heavy animations,
 * smooth scroll overrides, and high-frequency transforms.
 * 
 * @returns {boolean} Whether reduced motion is preferred
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers support addEventListener, fallback to addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
}
