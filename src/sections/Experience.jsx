import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Briefcase, Award } from 'lucide-react';

const experienceItems = [
  {
    id: 'internship',
    type: 'Internship',
    icon: Briefcase,
    period: 'June-July 2026',
    title: 'Data Science Internship',
    organization: '1Stop in association with IIT Kharagpur',
    description: 'Built supervised models for classification and regression, and an NLP model for hate speech detection.',
    tags: ['Python', 'Machine Learning', 'NLP'],
  },
  {
    id: 'sih',
    type: 'National Hackathon',
    icon: Award,
    period: '2026',
    title: 'Smart India Hackathon - National Round',
    organization: 'Team AXIOM, AITM Bhatkal',
    orgDetail: 'Problem Statement SIH26189',
    description: 'Selected for the National Round with Team AXIOM. Contributed to NEXUS-CRIME, a graph-based criminal network analysis project.',
    tags: ['SIH26189', 'Team AXIOM', 'Graph Analysis'],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-24 space-y-6 py-3">
      <SectionHeading
        badge="Experience"
        subtitle="Professional &amp; Academic Highlights"
        title="Experience &amp; Highlights"
        description="Internship work and national hackathon contribution."
        className="!mb-0"
      />

      <div className="relative ml-3 space-y-4 border-l-2 border-[#722F45]/35 pl-5 sm:ml-4 sm:pl-8">
        {experienceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08 }}
              className="relative space-y-2 rounded-xl border border-[#722F45]/10 bg-[#F5E8E6]/70 px-4 py-4 shadow-sm sm:px-5 sm:py-4"
            >
              <span className="absolute -left-[29px] top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F8F3EA] bg-[#722F45] text-[#F8F3EA] shadow-sm sm:-left-[37px]" aria-hidden="true">
                <Icon className="h-2.5 w-2.5" />
              </span>

              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl font-semibold text-[#722F45] sm:text-2xl">{item.title}</h3>
                  <span className="text-xs font-medium text-[#722F45]/75">{item.type}</span>
                </div>
                <time className="rounded-full border border-[#722F45]/15 bg-[#F8F3EA]/80 px-2.5 py-1 text-xs font-semibold text-[#722F45]">{item.period}</time>
              </div>

              <p className="text-sm font-semibold text-[#722F45]/90">{item.organization}</p>
              {item.orgDetail && <p className="text-xs text-[#722F45]/75">{item.orgDetail}</p>}

              <p className="max-w-4xl text-sm leading-relaxed text-[#30282A]/75">{item.description}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#722F45]/15 bg-white/60 px-2.5 py-1 text-[10px] font-mono text-[#722F45]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
