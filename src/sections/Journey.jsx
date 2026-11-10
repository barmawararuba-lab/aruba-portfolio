import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { journeyTimeline } from '../data/experience';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Briefcase
} from 'lucide-react';

/**
 * Animated Engineering Journey & Coding Club Timeline Section
 * 
 * Features:
 * - Scroll-triggered milestone nodes with illuminated burgundy accents
 * - Chronological storytelling: Academics, coding club leadership, hackathons
 * - Honest, verified student milestones
 */
export default function Journey() {
  const prefersReducedMotion = useReducedMotion();

  const getIconForType = (type) => {
    switch (type) {
      case 'Academic':
        return GraduationCap;
      case 'Professional':
        return Briefcase;
      case 'Community & Leadership':
        return Users;
      case 'Competition':
        return Trophy;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="journey" className="scroll-mt-24 space-y-16 py-8">
      {/* Editorial Section Introduction */}
      <SectionHeading
        badge="Academic & Technical Journey"
        subtitle="Chronology"
        title="Engineering Journey & Milestones"
        description="A chronological timeline of undergraduate education at AITM Bhatkal, a data science internship, and key technical milestones."
      />

      {/* Vertical Animated Timeline */}
      <div className="relative max-w-4xl mx-auto space-y-12">
        {/* Central Timeline Spine Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-[#E9DFD5] -translate-x-1/2 hidden sm:block" />

        {journeyTimeline.map((item, index) => {
          const Icon = getIconForType(item.type);
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
            >
              {/* Central Spine Node */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FFFFFF] border-2 border-[#722F45] shadow-xs hidden sm:flex items-center justify-center z-10">
                <span className="w-3 h-3 rounded-full bg-[#722F45]" />
              </div>

              {/* Date & Category Stamp (Desktop Alternates) */}
              <div
                className={`space-y-1 sm:px-6 ${
                  isEven ? 'sm:order-2 sm:text-left' : 'sm:order-1 sm:text-right'
                }`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#722F45]/10 text-[#722F45] border border-[#722F45]/20 mb-1`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </div>
                <div className="font-mono text-sm font-bold text-[#30282A]">
                  {item.period}
                </div>
                <div className="text-xs text-[#722F45] font-medium tracking-wide">
                  {item.year}
                </div>
              </div>

              {/* Milestone Card Content */}
              <div
                className={`p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] shadow-2xs space-y-3.5 ${
                  isEven ? 'sm:order-1' : 'sm:order-2'
                }`}
              >
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#30282A] font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#722F45] font-medium mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#30282A]/80 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Milestone Key Takeaways */}
                <ul className="space-y-2 pt-2 border-t border-[#E9DFD5]/60">
                  {item.milestones.map((milestone, mIdx) => (
                    <li
                      key={mIdx}
                      className="flex items-start gap-2.5 text-xs text-[#30282A]/80 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#722F45] shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
