import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { achievementsData } from '../data/experience';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Trophy,
  Award,
  FileCheck,
  Code2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

/** Map icon string names from data to Lucide components */
const iconMap = {
  Trophy,
  Award,
  FileCheck,
  Code2,
};

/**
 * Professional Milestones & Recognition Section
 *
 * Clean, industry-oriented card grid. No oversized stat banners.
 * SIH national selection is prominently featured; other items are equal-weight cards.
 */
export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();

  const featured = achievementsData.filter((a) => a.isFeatured);
  const standard = achievementsData.filter((a) => !a.isFeatured);

  return (
    <section id="achievements" className="scroll-mt-24 space-y-12 py-4">
      {/* ── Section Header ── */}
      <SectionHeading
        badge="Milestones & Recognition"
        subtitle="Verified Experience"
        title="Achievements & Milestones"
        description="National hackathon selection, professional internship experience, academic distinction, and community involvement — focused on practical growth and technical impact."
      />

      {/* ── Featured Card: SIH National Round ── */}
      {featured.map((item, index) => {
        const Icon = iconMap[item.icon] || Award;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
            className="relative overflow-hidden rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row gap-6 items-start border border-[#30282A] bg-[#30282A] text-[#F8F3EA] shadow-md"
          >
            {/* Subtle decorative circle */}
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#722F45]/20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-8 w-40 h-40 rounded-full bg-[#C49A80]/10 pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-[#722F45]/40 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#F8F3EA]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#722F45]/40 text-[#C49A80]">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-[#F8F3EA]/50">{item.year}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C49A80] font-medium">{item.organization}</p>
              <p className="text-sm text-[#F8F3EA]/80 leading-relaxed">{item.description}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#722F45]/30 text-[#C49A80]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F8F3EA]/10 flex items-center gap-2 text-xs font-mono text-[#F8F3EA]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified National Selection · {item.academicYear}</span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* ── Standard Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {standard.map((item, index) => {
          const Icon = iconMap[item.icon] || FileCheck;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E9DFD5] hover:border-[#722F45]/40 hover:shadow-sm transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#722F45]/10 text-[#722F45] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#F8F3EA] text-[#722F45] border border-[#E9DFD5]">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-[#30282A] font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#722F45] font-medium mt-0.5">{item.organization}</p>
                </div>

                <p className="text-xs text-[#30282A]/75 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-[#F8F3EA] text-[#30282A]/70 border border-[#E9DFD5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E9DFD5]/60 flex items-center justify-between text-xs font-mono text-[#722F45]/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
                <span>{item.academicYear}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
