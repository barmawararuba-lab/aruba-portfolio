import { useState, useEffect } from 'react';

/**
 * Tracks the active section on scroll based on viewport intersection.
 * 
 * @param {string[]} sectionIds - Array of section DOM element IDs to observe
 * @param {number} offset - Viewport offset threshold (default: 200px)
 * @returns {string} ID of the currently active section
 */
export function useScrollSpy(sectionIds, offset = 180) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      // Default to first section if scrolled to top
      if (window.scrollY < offset) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
