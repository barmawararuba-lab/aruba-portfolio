import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Layers,
  Cpu,
  Brain,
} from 'lucide-react';

/**
 * Authentic Technology Logos & Metadata Registry
 * Standardized across all categories (AI/ML, Frontend, Backend, Database, Tools).
 * Each technology has an authentic logo path, official brand color, and clean display name.
 */
const techMeta = {
  // ── AI, Machine Learning & Data Science ──
  'Python': {
    name: 'Python',
    shortName: 'Python',
    color: '#3776AB',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05-1.07-.13-.9-.21-.73-.28-.59-.32-.45-.35-.34-.37-.25-.37-.16-.35-.1-.32-.04-.2-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
  },
  'Machine Learning Foundations': {
    name: 'Machine Learning Foundations',
    shortName: 'Scikit-Learn / ML',
    color: '#F7931E',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.012 4.5c1.08 0 1.956.876 1.956 1.956S13.068 8.412 11.988 8.412 10.032 7.536 10.032 6.456s.876-1.956 1.956-1.956zm0 14.988c-1.08 0-1.956-.876-1.956-1.956s.876-1.956 1.956-1.956 1.956.876 1.956 1.956-.876 1.956-1.956 1.956zm7.5-7.5c-1.08 0-1.956-.876-1.956-1.956S18.408 8.076 19.488 8.076s1.956.876 1.956 1.956-.876 1.956-1.956 1.956zm-15 0c-1.08 0-1.956-.876-1.956-1.956S3.408 8.076 4.488 8.076s1.956.876 1.956 1.956-.876 1.956-1.956 1.956z" />
      </svg>
    ),
  },
  'Data Science & Analysis': {
    name: 'Data Science & Analysis',
    shortName: 'Pandas & EDA',
    color: '#150458',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14.976 4.957v4.08H16.5V3.5h-4.08v1.457h2.556zM9.024 19.043v-4.08H7.5V20.5h4.08v-1.457H9.024zM7.5 8.464v7.072c0 .845.655 1.464 1.5 1.464s1.5-.619 1.5-1.464V8.464C10.5 7.619 9.845 7 9 7s-1.5.619-1.5 1.464zm7.5 7.072V8.464C15 7.619 14.345 7 13.5 7s-1.5.619-1.5 1.464v7.072c0 .845.655 1.464 1.5 1.464s1.5-.619 1.5-1.464z" />
      </svg>
    ),
  },

  // ── Frontend Engineering ──
  'React': {
    name: 'React',
    shortName: 'React',
    color: '#61DAFB',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 10.11c1.04 0 1.89.85 1.89 1.89s-.85 1.89-1.89 1.89-1.89-.85-1.89-1.89.85-1.89 1.89-1.89zm0-2.02c-2.16 0-3.91 1.75-3.91 3.91s1.75 3.91 3.91 3.91 3.91-1.75 3.91-3.91-1.75-3.91-3.91-3.91zm10.63 2.51c-.32-1.38-1.56-2.58-3.41-3.32 1.05-1.62 1.58-3.26 1.42-4.57-.25-2.04-2.22-3.1-4.79-2.58-1.42.29-2.89 1.07-4.14 2.22-1.25-1.15-2.72-1.93-4.14-2.22-2.57-.52-4.54.54-4.79 2.58-.16 1.31.37 2.95 1.42 4.57-1.85.74-3.09 1.94-3.41 3.32-.48 2.08.76 4.14 3.08 5.16-.36 1.91-.04 3.65.98 4.72 1.31 1.37 3.44 1.63 5.76.69 1.32.9 2.76 1.42 4.2 1.42.14 0 .28 0 .42-.01 1.44-.09 2.85-.7 4.13-1.67 2.3.89 4.38.58 5.66-.75.99-1.03 1.31-2.73.97-4.6 2.34-.99 3.6-3.03 3.12-5.11zm-1.98 1.43c.27 1.15-.38 2.3-1.75 2.96-.28-.53-.63-1.07-1.04-1.61.43-.53.79-1.06 1.07-1.58 1.12.06 1.57.14 1.72.23zm-7.66 7.64c-.95.73-2.03 1.19-3.11 1.25-.09 0-.19 0-.28 0-.98 0-1.95-.36-2.88-.99.58-.45 1.18-.98 1.79-1.57.82.07 1.66.07 2.51 0 .63.58 1.25 1.11 1.84 1.57l-.37-.26zm-9.33-6.28c-1.39-.62-2.07-1.78-1.8-2.95.14-.62.66-1.14 1.47-1.47.28.53.64 1.07 1.05 1.6-.42.54-.78 1.08-1.06 1.6l.34-1.22zm2.14-8.08c.15-.22.42-.4.81-.5.39-.08.88-.08 1.44.02 1.1.2 2.29.78 3.37 1.62-.64.57-1.27 1.22-1.89 1.94-.85-.03-1.7-.01-2.54.08-.49-.78-.91-1.55-1.19-2.22zm2.25 9.4c.3-.57.65-1.15 1.05-1.72.77-.07 1.55-.1 2.33-.1.78 0 1.56.03 2.33.1.4.57.75 1.15 1.05 1.72-.3.57-.65 1.15-1.05 1.72-.77.07-1.55.1-2.33.1-.78 0-1.56-.03-2.33-.1-.4-.57-.75-1.15-1.05-1.72zm7.98-6.44c1.08-.84 2.27-1.42 3.37-1.62.56-.1 1.05-.1 1.44-.02.39.1.66.28.81.5.28.67-.14 1.44-.63 2.22-.84-.09-1.69-.11-2.54-.08-.62-.72-1.25-1.37-1.89-1.94l-.56-.94z" />
      </svg>
    ),
  },
  'JavaScript (ES6+)': {
    name: 'JavaScript (ES6+)',
    shortName: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    shortName: 'Tailwind CSS',
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  'HTML5 & Semantic Web': {
    name: 'HTML5 & Semantic Web',
    shortName: 'HTML5',
    color: '#E34F26',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.419 4.404l.732 8.041h9.324l-.326 3.539-3.173.857-3.172-.857-.202-2.266H6.237l.385 4.484 5.354 1.488 5.357-1.488.73-8.031H8.531z" />
      </svg>
    ),
  },
  'CSS3 & Modern Motion': {
    name: 'CSS3 & Modern Motion',
    shortName: 'CSS3',
    color: '#1572B6',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.24 2.69 10.31.004-.26 2.653H5.89l.24 2.69h7.45l-.33 3.539-3.27.857-3.27-.857-.21-2.266H4.35l.39 4.484 7.24 2.012 7.24-2.012.98-10.743.08-1.025.31-3.342z" />
      </svg>
    ),
  },

  // ── Backend & Systems ──
  'Node.js': {
    name: 'Node.js',
    shortName: 'Node.js',
    color: '#339933',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,16.997,19.099,15.971,19.099,13.993z" />
      </svg>
    ),
  },
  'Express.js': {
    name: 'Express.js',
    shortName: 'Express.js',
    color: '#30282A',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.284.67.67 0 00-.139-.325zm1.114-.658h9.167c-.086-2.17-1.9-3.839-4.106-3.823-2.404.016-4.753 1.886-5.06 3.823z" />
      </svg>
    ),
  },
  'API Architecture': {
    name: 'API Architecture',
    shortName: 'REST APIs',
    color: '#722F45',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
        <path d="M18 10v4" />
      </svg>
    ),
  },
  'Authentication & Security': {
    name: 'Authentication & Security',
    shortName: 'Auth & Security',
    color: '#9333EA',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v3" />
      </svg>
    ),
  },

  // ── Database Management ──
  'PostgreSQL': {
    name: 'PostgreSQL',
    shortName: 'PostgreSQL',
    color: '#4169E1',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.5594 14.7228a.7777.7777 0 00-.1888-.0566c-.3-1.2-2.0206-6.4866-6.3747-7.6587 1.2-2.0206 1.3313-4.3913 1.0313-6.0747-.0632-.375-.1894-.7294-.375-1.0453-.3178-.5634-.8084-.9028-1.4062-.9566-.4875-.0441-.9469.1125-1.3875.4594-1.3313.9956-2.3297 2.9306-2.775 5.3419-.075-.0066-.1472-.0141-.225-.0141-3.4219 0-6.2016 2.1872-7.3903 5.3813l-.0225-.0028C4.1697 9.9178 3.6 9.7753 3.1725 9.9178c-.4219.1416-.6975.5306-.8156 1.1662-.1584.8597-.0697 2.5088.3703 4.0763.3375 1.1878.9103 2.2922 1.5984 2.9522.3516.3375.7322.5363 1.1297.5906.1181.0141.2353.0216.3516.0216.3225 0 .6319-.0675.9253-.195.0272-.0122.0544-.0244.0816-.0394 1.0416 2.1403 2.9888 3.4697 5.0888 3.4697 1.3875 0 2.7169-.5944 3.8138-1.6819.0113.0075.0225.0141.0338.0225.0169.0113.0338.0225.0516.0338.4716.3141 1.0631.4725 1.7025.4716l.1397-.0038c1.3781-.0666 2.5116-1.1278 3.075-2.9269.3966-1.2609.4209-2.6391.0666-3.9272zm-9.6244-9.0394c.3366-1.9519 1.1297-3.3581 2.0344-4.0547.2991-.225.5747-.3188.8109-.3188.0591 0 .1163.0066.1697.0188.2203.0441.4172.1706.5747.375.1313.1716.2297.4028.2766.6694.2503 1.4063.0938 3.5531-1.0575 5.4178-.5156-.0666-1.0491-.0984-1.5891-.0984-.6703 0-1.3313.0666-1.9697.1894.1125-.7866.3703-1.6069.7472-2.2 h-.0066l.0094-.0003zm-9.4875 11.3822c-.3516-.3141-.8109-1.1559-1.1259-2.2819-.3938-1.3781-.4697-2.8706-.3281-3.6b-.0516.1875-.0516.3141.0188.4406a.3573.3573 0 00.3188.1313c.2578.0066.6422.0975 1.0547.4219.0141.0113.0272.0225.0394.0338-.3375 1.4906-.3853 3.1125.0225 4.8422z" />
      </svg>
    ),
  },
  'MongoDB': {
    name: 'MongoDB',
    shortName: 'MongoDB',
    color: '#47A248',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  'SQL Fundamentals': {
    name: 'SQL Fundamentals',
    shortName: 'SQL (Relational)',
    color: '#00758F',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3C7.589 3 4 4.343 4 6v12c0 1.657 3.589 3 8 3s8-1.343 8-3V6c0-1.657-3.589-3-8-3zm0 2c3.866 0 6 1.07 6 1s-2.134 1-6 1-6-1.07-6-1 2.134-1 6-1zm0 14c-3.866 0-6-1.07-6-1V7.5C7.37 8.4 9.558 9 12 9s4.63-.6 6-1.5V18c0-.07-2.134 1-6 1z" />
      </svg>
    ),
  },

  // ── Tools & Developer Ecosystem ──
  'Git & GitHub': {
    name: 'Git & GitHub',
    shortName: 'Git & GitHub',
    color: '#F05032',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  'Postman': {
    name: 'Postman',
    shortName: 'Postman',
    color: '#FF6C37',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.986 2.054c.712.115 1.564.444 2.09.805 1.018.7 1.487 1.597 1.487 2.849 0 .848-.27 1.58-.838 2.261-.418.5-.96.883-1.637 1.157-.348.14-.52.247-.542.336-.044.18.067.436.312.724.316.372.935.918 1.954 1.724 1.83 1.446 2.839 2.457 3.524 3.525.688 1.074.887 2.072.636 3.197-.245 1.1-.96 2.083-2.077 2.846-1.07.732-2.35 1.168-3.79 1.293-1.636.142-3.14-.14-4.524-.847-1.385-.707-2.39-1.742-2.97-3.07-.375-.858-.466-1.73-.284-2.73.196-1.075.76-2.03 1.745-2.956.34-.32.348-.344.209-.597-.107-.197-.183-.435-.195-.611-.02-.275.053-.526.24-.827.26-.418.713-.88 1.258-1.282.352-.26.39-.323.23-.39-.51-.212-.977-.552-1.34-.984-.526-.626-.782-1.332-.78-2.158.005-.96.347-1.77 1.025-2.43.682-.663 1.56-1.07 2.578-1.201.558-.073 1.393-.058 1.93.033zm-.96 1.92c-.675.115-1.265.46-1.64.958-.335.443-.456.96-.367 1.55.086.574.37 1.037.822 1.346.408.28.9.417 1.516.422.617.006 1.11-.122 1.53-.396.47-.306.77-.77.86-1.333.1-.62-.03-1.17-.38-1.61-.39-.49-1-.83-1.72-.96-.18-.03-.44-.04-.62-.02zm-.2 8.76c-.4.07-.84.28-1.25.61-.63.5-1.06 1.16-1.24 1.88-.17.69-.09 1.38.25 2.05.37.74.99 1.32 1.8 1.68.79.35 1.64.45 2.54.29.98-.18 1.76-.66 2.33-1.42.53-.71.74-1.5.6-2.29-.14-.78-.58-1.47-1.25-1.95-.59-.42-1.3-.7-2.09-.81-.46-.07-1.24-.09-1.69-.04z" />
      </svg>
    ),
  },
  'Vite & Tooling': {
    name: 'Vite & Tooling',
    shortName: 'Vite',
    color: '#646CFF',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.96 2.07c-.12 0-.24.03-.35.09L2.83 10.9a.86.86 0 00-.4.99c.1.28.34.48.64.53l6.57 1.17.48 6.44c.03.35.25.65.58.77a.88.88 0 00.91-.2l10.02-9.69a.87.87 0 00.17-.98.86.86 0 00-.8-.54h-5.26l4.63-7.07c.18-.28.16-.64-.04-.9-.1-.13-.23-.2-.37-.2z" />
      </svg>
    ),
  },
  'Linux & Terminal': {
    name: 'Linux & Terminal',
    shortName: 'Linux & CLI',
    color: '#FCC624',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
};

/**
 * Fallback resolver ensuring every technology gets a consistent logo and color.
 */
function getTechMeta(skillName) {
  return (
    techMeta[skillName] || {
      name: skillName,
      shortName: skillName,
      color: '#722F45',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    }
  );
}

/**
 * Interactive Technical Skills & Architecture Showcase
 * Displays authentic technology logos with clearly visible names across EVERY category.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const prefersReducedMotion = useReducedMotion();

  const tabs = [
    { id: 'all', label: 'All', icon: Layers, count: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0) },
    { id: 'aiml', label: 'AI/ML & Data', icon: Cpu, count: skillCategories.find((c) => c.id === 'aiml')?.skills.length || 0 },
    { id: 'frontend', label: 'Frontend', icon: Code2, count: skillCategories.find((c) => c.id === 'frontend')?.skills.length || 0 },
    { id: 'backend', label: 'Backend', icon: Server, count: skillCategories.find((c) => c.id === 'backend')?.skills.length || 0 },
    { id: 'database', label: 'Database', icon: Database, count: skillCategories.find((c) => c.id === 'database')?.skills.length || 0 },
    { id: 'tools', label: 'Tools', icon: Wrench, count: skillCategories.find((c) => c.id === 'tools')?.skills.length || 0 },
  ];

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="scroll-mt-24 space-y-12 py-8">
      {/* Section Header */}
      <SectionHeading
        badge="Verified Capabilities"
        subtitle="Technical Arsenal"
        title={
          <span className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <Brain className="w-8 h-8 text-[#722F45] transition-transform duration-300 hover:scale-110" />
              <span>AI/ML</span>
            </span>
            <span className="text-[#30282A]/30 font-light">&amp;</span>
            <span className="inline-flex items-center gap-2">
              <Layers className="w-8 h-8 text-[#722F45] transition-transform duration-300 hover:scale-110" />
              <span>Full-Stack</span>
            </span>
          </span>
        }
        description="Domain competencies developed through practical software engineering, independent projects, and data science coursework. Every technology is backed by working code and authentic tools."
      />

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#FFFFFF] border border-[#E9DFD5] shadow-2xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer select-none ${
                  isActive ? 'text-[#F8F3EA]' : 'text-[#30282A]/70 hover:text-[#722F45]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 bg-[#722F45] rounded-full z-0"
                    transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-[#FFFFFF]/20 text-[#F8F3EA]' : 'bg-[#E9DFD5]/60 text-[#722F45]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid Organized by Category */}
      <div className="space-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="space-y-12"
          >
            {displayedCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E9DFD5] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#722F45]" />
                    <h3 className="font-serif text-xl sm:text-2xl text-[#30282A] font-semibold">{category.title}</h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#E9DFD5]/60 text-[#722F45]">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                  <p className="text-xs text-[#30282A]/70 font-medium max-w-md">{category.description}</p>
                </div>

                {/* Category Technology Badges: Icon + Clearly Visible Name — the primary display */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {category.skills.map((skill) => {
                    const meta = getTechMeta(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-[#FFFFFF] border border-[#E9DFD5] hover:border-[#722F45]/50 hover:shadow-sm transition-all duration-200 cursor-default"
                      >
                        <div
                          className="w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                          style={{ color: meta.color }}
                        >
                          {meta.svg}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-mono font-semibold text-[#30282A] group-hover:text-[#722F45] transition-colors block leading-tight truncate">
                            {meta.shortName || skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#722F45]/70 block mt-0.5">
                            {skill.experienceLevel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Zero Arbitrary Progress Bars Notice */}
      <div className="p-5 rounded-2xl bg-[#722F45]/5 border border-[#722F45]/20 flex items-start gap-3.5">
        <CheckCircle2 className="w-5 h-5 text-[#722F45] shrink-0 mt-0.5" />
        <div className="text-xs text-[#30282A]/85 leading-relaxed">
          <strong className="text-[#722F45] font-semibold">Zero Arbitrary Skill Percentages: </strong>
          Technical credibility is proven through working source repositories, applied machine learning projects, and structured problem-solving documented in the Projects section.
        </div>
      </div>
    </section>
  );
}
