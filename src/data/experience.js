/**
 * Engineering Journey, Academic Progression, and Verified Milestones
 * Structured chronologically for Aruba Barmawar: First Year (2025—2026) through Second Year (2026—2027).
 * Verified details only — no fictional claims or embellishments.
 */

export const journeyTimeline = [
  {
    period: "2025 — 2026",
    year: "First Year Engineering",
    role: "Foundational Engineering & Technical Foundations",
    organization: "Anjuman Institute of Technology and Management, Bhatkal",
    type: "Academic",
    badge: "First Year",
    description:
      "Built strong foundations across core engineering disciplines — programming in C and Python, engineering mathematics, data structures, and computer science principles — while exploring personal projects and practical problem-solving.",
    milestones: [
      "Developed core programming proficiency in C and Python alongside engineering mathematics fundamentals.",
      "Achieved 1st Rank in the 2nd Semester Examination (SGPA 9.35 / 10) and received a Token of Appreciation.",
      "Began exploring AI/ML concepts and initiated first independent technical projects.",
    ],
  },
  {
    period: "2026",
    year: "Data Science Program",
    role: "Data Science Internship",
    organization: "1Stop in association with IIT Kharagpur",
    type: "Professional",
    badge: "Internship",
    description:
      "Completed a structured Data Science internship program in collaboration with IIT Kharagpur, gaining hands-on industry exposure to data preprocessing pipelines, statistical modeling, and applied machine learning.",
    milestones: [
      "Completed structured data science curriculum covering statistical concepts, data analysis, and machine learning fundamentals.",
      "Engineered NLP models for hate speech detection and supervised mortality prediction models.",
      "Gained practical exposure to data science workflows under a recognized academic collaboration."
    ],
  },
  {
    period: "2026 — 2027",
    year: "Second Year (Current)",
    role: "B.E. in Computer Science and Engineering (Data Science)",
    organization: "Anjuman Institute of Technology and Management, Bhatkal",
    type: "Academic",
    badge: "Current Year",
    description:
      "Currently pursuing second-year undergraduate engineering with specialized coursework in Data Science, algorithms, database management systems, applied machine learning, and national-level hackathons.",
    milestones: [
      "Selected for the National Round of Smart India Hackathon (SIH) as part of Team AXIOM for NEXUS-CRIME (Problem Statement: SIH26189).",
      "Actively involved in college coding club activities, peer programming discussions, and collaborative algorithmic challenges.",
      "Deepening practical engineering foundations across machine learning workflows and full-stack web applications."
    ],
  },
];

/**
 * Verified achievements data for the Achievements section.
 * Grouped chronologically:
 * - first-year: Academic Year 2025 — 2026
 * - second-year: Academic Year 2026 — 2027
 */
export const achievementsData = [
  // ─── SIH National Round (most prominent — national hackathon selection) ───
  {
    id: "sih-national-round",
    title: "Smart India Hackathon — National Round Selection",
    organization: "Smart India Hackathon • Team AXIOM • AITM, Bhatkal",
    academicYear: "2026 — 2027",
    year: "2026",
    category: "National Hackathon",
    description:
      "Selected for the National Round of Smart India Hackathon as part of Team AXIOM representing Anjuman Institute of Technology and Management, Bhatkal. The team developed NEXUS-CRIME, an AI-powered criminal network analysis system targeting Problem Statement SIH26189.",
    tags: ["National Round", "Team AXIOM", "SIH26189", "NEXUS-CRIME", "AI/ML"],
    isFeatured: true,
    icon: "Award",
  },

  // ─── Data Science Internship — 1Stop × IIT Kharagpur ─────────────────────
  {
    id: "data-science-internship",
    title: "Data Science Internship — 1Stop × IIT Kharagpur",
    organization: "1Stop in association with IIT Kharagpur",
    academicYear: "2026",
    year: "2026",
    category: "Professional Experience",
    description:
      "Completed a structured Data Science program offered by 1Stop in collaboration with IIT Kharagpur. Gained hands-on exposure to data preprocessing, statistical modelling, NLP, and applied machine learning under a recognized academic partnership.",
    tags: ["Data Science", "IIT Kharagpur", "Machine Learning", "NLP", "1Stop"],
    isFeatured: false,
    icon: "FileCheck",
  },

  // ─── Academic Distinction — 1st Rank, SGPA 9.35 ──────────────────────────
  {
    id: "first-rank-sgpa",
    title: "1st Rank — 2nd Semester Examination",
    organization: "Anjuman Institute of Technology and Management, Bhatkal",
    academicYear: "2025 — 2026",
    year: "2025 — 2026",
    category: "Academic",
    description:
      "Secured 1st Rank in the 2nd Semester Engineering Examination with an SGPA of 9.35 / 10. Awarded a Token of Appreciation by the institution in recognition of academic excellence.",
    tags: ["1st Rank", "SGPA 9.35", "Token of Appreciation"],
    isFeatured: false,
    icon: "Trophy",
  },

  // ─── Coding Club ─────────────────────────────────────────────────────────
  {
    id: "coding-club",
    title: "Coding Club — Technical Community",
    organization: "Anjuman Institute of Technology and Management, Bhatkal",
    academicYear: "2025 — Present",
    year: "2025 — Present",
    category: "Community",
    description:
      "Active member of the college coding club, collaborating on technical discussions, peer programming sessions, and practical algorithmic challenges alongside fellow engineering students.",
    tags: ["Coding Club", "Peer Learning", "Algorithms", "Collaboration"],
    isFeatured: false,
    icon: "Code2",
  },
];
