import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Briefcase, Award, CheckCircle2, CalendarDays, Building2 } from 'lucide-react';

/**
 * Professional Experience & Highlights Section
 *
 * Displays only verified, non-duplicate professional experience:
 *  1. Data Science Internship — 1Stop × IIT Kharagpur (2026)
 *  2. SIH National Round Selection — Team AXIOM (2026)
 */

const experienceItems = [
  {
    id: 'internship',
    type: 'Professional Experience',
    icon: Briefcase,
    year: '2026',
    period: 'June – July 2026',
    title: 'Data Science Internship',
    organization: '1Stop × IIT Kharagpur',
    orgDetail: 'Structured programme offered by 1Stop in collaboration with IIT Kharagpur',
    description:
      'Completed a structured Data Science program in collaboration with IIT Kharagpur, gaining hands-on exposure to data preprocessing, statistical modelling, NLP pipelines, and applied machine learning methods.',
    highlights: [
      'Built and evaluated supervised machine learning models for classification and regression tasks.',
      'Developed NLP pipelines including hate-speech detection using Python, Pandas, and Scikit-Learn.',
      'Gained practical experience with end-to-end data science workflows under an industry-academic partnership.',
    ],
    tags: ['Python', 'Machine Learning', 'NLP', 'Data Science', 'IIT Kharagpur', '1Stop'],
    accentColor: 'bg-[#722F45]',
    featured: true,
  },
  {
    id: 'sih',
    type: 'National Hackathon',
    icon: Award,
    year: '2026',
    period: '2026',
    title: 'Smart India Hackathon — National Round',
    organization: 'Team AXIOM · AITM, Bhatkal',
    orgDetail: 'Smart India Hackathon (SIH) — Problem Statement SIH26189',
    description:
      'Selected for the National Round of Smart India Hackathon as part of Team AXIOM, representing Anjuman Institute of Technology and Management, Bhatkal. Developed NEXUS-CRIME, an AI-powered criminal network analysis system.',
    highlights: [
      'Advanced to National Round among thousands of competing teams across India.',
      'Led development of NEXUS-CRIME — an AI system for analysing criminal network structures using graph analysis and machine learning.',
      'Collaborated with a cross-functional team to deliver a full working prototype within hackathon constraints.',
    ],
    tags: ['SIH26189', 'Team AXIOM', 'AI/ML', 'Graph Analysis', 'National Round', 'NEXUS-CRIME'],
    accentColor: 'bg-[#30282A]',
    featured: false,
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-24 space-y-12 py-4">
      <SectionHeading
        badge="Professional Experience"
        subtitle="Verified Background"
        title="Experience & Highlights"
        description="Professional internship and national-level hackathon achievements — practical experience beyond the classroom."
      />

      <div className="space-y-6">
        {experienceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E9DFD5] bg-[#FFFFFF] hover:border-[#722F45]/40 hover:shadow-sm transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.accentColor} rounded-l-2xl`} />

              <div className="pl-8 pr-6 sm:pr-8 py-7 sm:py-8 flex flex-col sm:flex-row gap-6">
                {/* Icon + Meta column */}
                <div className="shrink-0 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-40">
                  <div className={`w-12 h-12 rounded-xl ${item.accentColor} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-[#F8F3EA]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#722F45]">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-[#30282A]/60">
                      <CalendarDays className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-[#30282A]/60">
                      <Building2 className="w-3 h-3" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#30282A] font-semibold leading-tight group-hover:text-[#722F45] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#722F45] font-medium mt-0.5">{item.organization}</p>
                    <p className="text-xs text-[#30282A]/50 font-normal mt-0.5">{item.orgDetail}</p>
                  </div>

                  <p className="text-sm text-[#30282A]/80 leading-relaxed">{item.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#30282A]/75 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#722F45] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#E9DFD5]/60">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F8F3EA] text-[#722F45] border border-[#E9DFD5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
