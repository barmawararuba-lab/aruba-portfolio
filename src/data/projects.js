/**
 * Verified Projects Data for Aruba Barmawar
 * Accurately represents each project's actual development status:
 *  1. Rental Tracker – Live Web App (Deployed online)
 *  2. NEXUS-CRIME (AXIOM) – In Progress (Almost complete, ongoing development)
 *  3. FixIt Campus – Prototype (Demonstrates core workflow)
 *  4. AI Resume Screening – Working Project · Not Deployed (Functional locally)
 *
 * Real, verified URLs only; no placeholders or fake links.
 */

export const projectsData = [
  {
    id: "rental-tracker",
    title: "Rental Tracker",
    subtitle: "Property Rental, Tenant & Financial Management Web Platform",
    category: "Full-Stack Web Application",
    status: "Live Web App",
    statusBadge: "Live Web App",
    statusType: "live",
    year: "2025 — 2026",
    featured: true,
    isPrimary: true,
    accentColor: "#C49A80",
    coverImage: "/images/projects/rental-tracker.svg",
    tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Cloudinary", "Recharts", "Tailwind CSS"],
    
    overview: "A deployed property rental management web platform built to simplify multi-unit property administration, tenant records, lease timeline tracking, and payment accounting for landlords and property managers.",
    
    problem: "Independent property managers frequently depend on fragmented spreadsheets, handwritten ledgers, and manual messaging to track active leases, fluctuating rent dues, and unit vacancy rates.",
    
    solution: "Engineered and deployed a centralized web application featuring real-time unit availability filtering, automated rent payment ledger tracking, tenant profile administration, and visual occupancy analytics.",

    technicalApproach: "Architected using Next.js and TypeScript with Prisma ORM connecting to a normalized PostgreSQL database for end-to-end type safety. Integrated Cloudinary for property photo asset storage and Recharts for interactive financial and occupancy analytics.",

    keyFeatures: [
      "Multi-property and unit inventory management dashboard.",
      "Tenant profile onboarding and lease timeline administration.",
      "Rent payment ledger tracking and transaction history records.",
      "Unit availability search with dynamic vacancy filtering.",
      "Visual occupancy analytics and revenue breakdown charts via Recharts.",
      "Responsive web interface optimized for desktop and mobile management."
    ],

    myContribution: [
      "Designed the normalized relational database schema in PostgreSQL using Prisma ORM with foreign-key relationships across Properties, Units, Leases, and Payments.",
      "Developed the Next.js and TypeScript frontend application with modular components and Tailwind CSS styling.",
      "Integrated Cloudinary API for secure property asset and lease document storage.",
      "Configured production deployment on Vercel with server-side validation and database connection pooling."
    ],

    caseStudy: {
      architectureOverview: "Production full-stack Next.js web application utilizing React Server and Client Components, Prisma ORM, and a normalized PostgreSQL database hosted with persistent storage.",
      frontendImplementation: "Next.js App Router with TypeScript, custom data tables with sorting and filtering, modal dialogs for unit creation, and interactive financial charts.",
      backendImplementation: "Next.js API route handlers and server actions managing database mutations through Prisma client with strict schema validation.",
      databaseDesign: "Relational schema modeling Properties -> Units -> Leases -> Tenants & Payments, enforcing transactional data integrity.",
      apiIntegration: "Endpoints for property and unit CRUD operations, tenant onboarding, payment record logging, and Cloudinary upload signing.",
      securityDetails: "Server-side input validation, parameterized SQL queries via Prisma ORM preventing injection vulnerabilities, and secure environment configuration.",
      challenges: [
        "Structuring complex relational data flows across units and fluctuating lease timelines while ensuring fast query execution.",
        "Delivering responsive dashboard data views across desktop financial tables and mobile property inspection views."
      ]
    },

    links: {
      github: "https://github.com/barmawararuba-lab/Rental-tracker",
      live: "https://rental-tracker-ten-rho.vercel.app"
    }
  },

  {
    id: "nexus-crime",
    title: "NEXUS-CRIME (AXIOM)",
    subtitle: "AI-Powered Criminal Network Analysis & Knowledge Graph System",
    category: "AI/ML & Investigative System",
    status: "In Progress",
    statusBadge: "In Progress",
    statusType: "in-progress",
    year: "2026",
    featured: true,
    isPrimary: false,
    accentColor: "#722F45",
    coverImage: "/images/projects/nexus-crime.svg",
    tags: ["AI/ML", "Knowledge Graphs", "Network Analysis", "Python", "React", "Node.js"],
    
    overview: "An AI-powered investigative intelligence platform developed by Team AXIOM for Smart India Hackathon (Problem Statement SIH26189). Designed to analyze complex criminal networks, link heterogeneous intelligence sources, and map syndicate relationships.",
    
    problem: "Investigative agencies handle fragmented records across call detail logs, surveillance imagery, vehicle registries, and case reports, making it difficult to uncover syndicate hierarchies and non-obvious inter-suspect connections.",
    
    solution: "Constructed an investigative intelligence prototype that links disparate records using knowledge graph representations and provides investigators with interactive relationship cluster maps. Active development is underway to expand analytical features.",

    technicalApproach: "Developed as a national hackathon initiative addressing SIH26189. Utilizes graph network representations to connect suspects, incidents, and communication logs, coupled with machine learning classification for entity clustering and visual relationship inspection.",

    keyFeatures: [
      "Criminal network graph visualization with relationship cluster mapping.",
      "Knowledge graph-based entity linking across suspects, locations, and vehicles.",
      "Degree-of-separation filtering to uncover hidden associative chains.",
      "Integrated case, incident, and suspect profile management interface.",
      "Analytical dossier generation for investigative reporting (Implemented prototype).",
      "Ongoing development: Expanding multimodal evidence processing and predictive link estimation."
    ],

    myContribution: [
      "Collaborated as a core developer in Team AXIOM representing AITM Bhatkal at the Smart India Hackathon National Round.",
      "Contributed to designing the frontend relationship graph interface and analytical case investigation dashboard.",
      "Assisted in structuring entity nodes and relational edge models for graph traversal.",
      "Participated in iterative prototype presentations during hackathon evaluation rounds."
    ],

    caseStudy: {
      architectureOverview: "Multi-tiered investigative prototype combining graph data structures, machine learning inference routines, and an interactive analytical dashboard.",
      frontendImplementation: "Dark-themed analytical UI built in React displaying interactive network nodes, relationship force graphs, evidence modals, and timeline inspections.",
      backendImplementation: "Python and Node.js backend pipeline executing graph traversal queries, aggregating suspect dossiers, and routing analytical requests.",
      databaseDesign: "Graph representations connecting entity nodes (Suspects, Vehicles, Locations, Phone Numbers) via typed relational edges.",
      apiIntegration: "Endpoints for relationship querying, evidence metadata ingestion, and syndicate cluster analysis.",
      securityDetails: "Role-segregated data access patterns designed to reflect sensitive investigative intelligence handling.",
      challenges: [
        "Visualizing dense multi-node relationship graphs without visual clutter: Implemented dynamic degree-of-separation filtering and cluster grouping.",
        "Managing rapid iterative feature additions within competitive hackathon deadlines while maintaining clean architecture."
      ]
    },

    links: {
      github: null,
      live: null
    }
  },

  {
    id: "fixit-campus",
    title: "FixIt Campus",
    subtitle: "Campus Infrastructure Issue Reporting & Geospatial Resolution Platform",
    category: "Full-Stack Web Application",
    status: "Prototype",
    statusBadge: "Prototype",
    statusType: "prototype",
    year: "2025",
    featured: true,
    isPrimary: false,
    accentColor: "#C49A80",
    coverImage: "/images/projects/fixit-campus.svg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Leaflet", "Tailwind CSS"],
    
    overview: "A campus maintenance issue reporting prototype structured around an end-to-end Report → Track → Resolve workflow. Demonstrates how students and facility staff can log, locate, and monitor physical infrastructure repairs.",
    
    problem: "Campus maintenance issues (damaged lab equipment, electrical faults, plumbing leaks, structural repairs) are often reported informally, leading to lost requests, lack of transparency, and delayed resolutions.",
    
    solution: "Developed an interactive prototype where students can submit geotagged maintenance reports with photos, track ticket status in real-time, and provide administrators with spatial mapping and department filtering.",

    technicalApproach: "Constructed as a prototype using the MERN stack (MongoDB, Express, React, Node.js) with Leaflet for geospatial campus mapping. Validates the core operational lifecycle: Reported → In Progress → Resolved.",

    keyFeatures: [
      "Issue reporting workflow with photo attachment and category tagging (Electrical, Plumbing, Lab).",
      "Three-phase status lifecycle demonstration (Reported → In Progress → Resolved).",
      "Interactive Leaflet campus mapping displaying localized issue pins on campus coordinates.",
      "Facility administrator view for assigning and reviewing maintenance tickets.",
      "Department-level filtering for targeted issue prioritization."
    ],

    myContribution: [
      "Designed the MongoDB document schema for maintenance tickets, status histories, and campus coordinates.",
      "Built the Express/Node.js REST API layer handling ticket submission, status updates, and department queries.",
      "Integrated Leaflet interactive mapping to render issue pins on campus building coordinates.",
      "Created the responsive React user interface using Tailwind CSS."
    ],

    caseStudy: {
      architectureOverview: "Decoupled prototype architecture with a React single-page frontend, an Express/Node.js REST API layer, and a MongoDB database.",
      frontendImplementation: "Responsive React components using Tailwind CSS and react-leaflet for interactive coordinate plotting.",
      backendImplementation: "Express.js API with modular routing for issue tickets, attachment handling via Multer, and administrative status mutations.",
      databaseDesign: "MongoDB schema storing issue descriptions, category tags, geo-coordinates, status enum, and audit timestamps.",
      apiIntegration: "REST endpoints for issue submission (POST /api/issues) and department ticket retrieval (GET /api/issues).",
      securityDetails: "Form validation, file size limits on photo uploads, and input sanitization to safeguard database integrity.",
      challenges: [
        "Plotting custom campus building boundaries and issue pins on Leaflet without commercial mapping dependencies.",
        "Structuring an intuitive status lifecycle that clearly demonstrates accountability between students and staff."
      ]
    },

    links: {
      github: null,
      live: null
    }
  },

  {
    id: "ai-resume-screening",
    title: "AI Resume Screening & Ranking System",
    subtitle: "AI-Powered Recruitment Platform & Candidate Evaluation Engine",
    category: "AI/ML & Full-Stack System",
    status: "Working Project · Not Deployed",
    statusBadge: "Working Project · Not Deployed",
    statusType: "working",
    year: "2025",
    featured: true,
    isPrimary: false,
    accentColor: "#722F45",
    coverImage: "/images/projects/resume-screening.svg",
    tags: ["Python", "Machine Learning", "NLP", "Scikit-Learn", "React", "Node.js", "Tailwind CSS"],
    
    overview: "A functional recruitment evaluation system operating in a development environment. Parses resumes, extracts relevant skills, predicts candidate job categories using machine learning, and ranks applicant profiles objectively.",
    
    problem: "Hiring teams receive large volumes of unstructured resumes for technical positions, making manual resume screening time-consuming, prone to fatigue, and subject to inconsistent evaluation criteria.",
    
    solution: "Engineered a working screening workflow that extracts text from uploaded resumes, applies NLP classification to predict domain alignment, and provides recruiters with a structured evaluation and ranking view.",

    technicalApproach: "Architected as a functional system combining a React frontend with Python text processing and Scikit-Learn machine learning classification pipelines. Implemented feature extraction routines to match candidate profiles against target job requirements.",

    keyFeatures: [
      "Resume document upload and automated textual data extraction.",
      "NLP and machine learning classification to predict candidate domain categories.",
      "Objective candidate qualification scoring based on extracted skill tokens.",
      "Recruiter candidate inspection and comparative ranking table.",
      "Dual interface design for candidate submission and recruiter review."
    ],

    myContribution: [
      "Engineered the resume text extraction and tokenization pipeline using Python and NLP techniques.",
      "Trained and implemented machine learning classification routines using Scikit-Learn to predict job categories.",
      "Developed the responsive React user interface with Tailwind CSS for recruiter inspection.",
      "Constructed the candidate ranking views and local API communication layer."
    ],

    caseStudy: {
      architectureOverview: "Client-server architecture combining a React SPA frontend with backend API endpoints and a Python-powered machine learning inference pipeline.",
      frontendImplementation: "Built in React with custom components for resume dropzone uploads, real-time score indicators, and a clean tabular ranking interface.",
      backendImplementation: "RESTful API handling document upload ingestion, candidate metadata persistence, and routing text to the ML classification pipeline.",
      databaseDesign: "Structured schema modeling Job Openings, Candidate Submissions, Resume Text Metadata, and Predicted Category Scores.",
      apiIntegration: "Endpoints for resume ingest (POST /api/resumes/upload) and candidate score retrieval (GET /api/candidates/ranking).",
      securityDetails: "File upload MIME-type validation, size limits, and sanitization of extracted textual data.",
      challenges: [
        "Normalizing diverse resume document layouts into clean, structured text tokens for machine learning feature extraction.",
        "Designing an objective scoring representation that highlights relevant skills without obscuring original candidate profile data."
      ]
    },

    links: {
      github: "https://github.com/barmawararuba-lab/ai-resume-screening",
      live: null
    }
  }
];
