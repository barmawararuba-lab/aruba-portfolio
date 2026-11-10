import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

/**
 * Main Cinematic Full Stack Developer Portfolio Orchestrator
 */
export default function App() {
  const [preloaderKey, setPreloaderKey] = useState(0);

  // Initialize Lenis Smooth Scrolling synchronized with GSAP ScrollTrigger
  useLenis();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#30282A] selection:bg-[#722F45] selection:text-[#F8F3EA]">
      {/* Cinematic Custom Interactive Cursor (Desktop Fine-Pointer Only) */}
      <CustomCursor />

      {/* Cinematic Opening Preloader (Split-curtain reveal with escape skip) */}
      <Preloader key={preloaderKey} />

      {/* Floating Editorial Navigation System */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Infinite Horizontal Typographic Ribbon */}
      <Marquee variant="burgundy" />

      {/* Main Editorial & Engineering Sections Flow */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">
        {/* About Me Section */}
        <About />

        {/* Technical Skills Showcase */}
        <Skills />

        {/* Featured Projects */}
        <Projects />

        {/* Professional Experience & Highlights */}
        <Experience />

        {/* Dedicated Resume Download Experience */}
        <Resume />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Editorial Studio Closing Footer */}
      <Footer />
    </div>
  );
}
