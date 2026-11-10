import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Standard animation curves and durations for cohesive cinematic pacing
 */
export const MOTION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    cinematic: 1.4,
  },
  ease: {
    cinematic: [0.25, 1, 0.5, 1], // Cubic-bezier equivalent for smooth deceleration
    editorial: [0.16, 1, 0.3, 1],
    smooth: [0.4, 0, 0.2, 1],
  },
  colors: {
    burgundy: '#722F45',
    cream: '#F8F3EA',
    charcoal: '#30282A',
    dramatic: '#211B20',
    rose: '#C49A80',
    beige: '#E9DFD5',
    white: '#FFFFFF',
  }
};
