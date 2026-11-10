import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Cinematic Custom Interactive Cursor
 * Features:
 * - Ultra-responsive inner burgundy dot
 * - Smooth trailing outer interaction ring with physics-based spring interpolation
 * - Mode transformations: 'default' | 'hover' | 'view' | 'text'
 * - Strictly enabled on desktop fine-pointer devices (pointer: fine)
 * - Zero pointer-event interference (pointer-events-none)
 * - Complete reduced-motion and touch device fallback
 */
export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'hover' | 'view' | 'text' | 'hidden'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const ringSpringConfig = { damping: 24, stiffness: 220, mass: 0.4 };
  const smoothRingX = useSpring(mouseX, ringSpringConfig);
  const smoothRingY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Check if device uses a fine pointer (mouse / trackpad)
    if (typeof window === 'undefined') return;
    const finePointerQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(finePointerQuery.matches);

    const handlePointerChange = (e) => {
      setIsFinePointer(e.matches);
    };

    if (finePointerQuery.addEventListener) {
      finePointerQuery.addEventListener('change', handlePointerChange);
    } else {
      finePointerQuery.addListener(handlePointerChange);
    }

    return () => {
      if (finePointerQuery.removeEventListener) {
        finePointerQuery.removeEventListener('change', handlePointerChange);
      } else {
        finePointerQuery.removeListener(handlePointerChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    // Apply active cursor styling class to document body
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Inspect target element for cursor mode
      const target = e.target;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      const clickableTarget = target.closest('a, button, [role="button"], input, textarea, select');

      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor') || 'hover';
        const label = cursorTarget.getAttribute('data-cursor-text') || (mode === 'view' ? 'VIEW' : '');
        setCursorMode(mode);
        setCursorText(label);
      } else if (clickableTarget) {
        setCursorMode('hover');
        setCursorText('');
      } else {
        setCursorMode('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorMode('hidden');
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setCursorMode('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isFinePointer, prefersReducedMotion, isVisible, mouseX, mouseY]);

  // If touch device or reduced motion is enabled, render nothing
  if (!isFinePointer || prefersReducedMotion) {
    return null;
  }

  // Ring dimension and style configurations by mode
  const getRingVariants = () => {
    switch (cursorMode) {
      case 'view':
        return {
          width: 84,
          height: 84,
          backgroundColor: '#722F45',
          borderColor: '#C49A80',
          opacity: 0.95,
          scale: 1,
        };
      case 'hover':
        return {
          width: 52,
          height: 52,
          backgroundColor: 'rgba(114, 47, 69, 0.12)',
          borderColor: '#722F45',
          opacity: 1,
          scale: 1.1,
        };
      case 'hidden':
        return {
          opacity: 0,
          scale: 0.2,
        };
      default:
        return {
          width: 34,
          height: 34,
          backgroundColor: 'rgba(114, 47, 69, 0.04)',
          borderColor: 'rgba(114, 47, 69, 0.5)',
          opacity: 0.85,
          scale: 1,
        };
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-300">
      {/* Outer Interpolated Ring */}
      <motion.div
        animate={getRingVariants()}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        style={{
          x: smoothRingX,
          y: smoothRingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 rounded-full border flex items-center justify-center pointer-events-none shadow-xs"
      >
        {cursorMode === 'view' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 text-[10px] font-bold text-[#F8F3EA] tracking-wider uppercase"
          >
            <span>{cursorText || 'VIEW'}</span>
            <ArrowUpRight className="w-3 h-3 text-[#C49A80]" />
          </motion.div>
        )}
      </motion.div>

      {/* Inner Precision Burgundy Dot */}
      <motion.div
        animate={{
          opacity: cursorMode === 'hidden' ? 0 : cursorMode === 'view' ? 0 : 1,
          scale: cursorMode === 'hover' ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#722F45] pointer-events-none"
      />
    </div>
  );
}
