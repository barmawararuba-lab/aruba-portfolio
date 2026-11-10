/**
 * Verified Technical Skills Architecture
 * Organized strictly by functional domains for Aruba Barmawar.
 * No arbitrary percentages or fake progress bars.
 */

export const skillCategories = [
  {
    id: "aiml",
    title: "AI, Machine Learning & Data Science",
    description: "Foundational machine learning workflows, data analysis, and intelligent system exploration.",
    skills: [
      {
        name: "Python",
        highlight: "Core programming, object-oriented paradigms, scripting, and analytical computing.",
        experienceLevel: "Core Focus",
        tags: ["Python 3", "OOP", "Data Structures"]
      },
      {
        name: "Machine Learning Foundations",
        highlight: "Supervised and unsupervised algorithms, regression, classification, clustering, and model evaluation metrics.",
        experienceLevel: "Core Focus",
        tags: ["Scikit-Learn", "Model Training", "Evaluation"]
      },
      {
        name: "Data Science & Analysis",
        highlight: "Exploratory data analysis (EDA), data cleaning, feature engineering, and statistical modeling.",
        experienceLevel: "Proficient",
        tags: ["NumPy", "Pandas", "EDA"]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Architecting responsive, high-performance user interfaces with modern component standards.",
    skills: [
      {
        name: "React",
        highlight: "Component lifecycle, custom hooks, state synchronization, and reactive patterns.",
        experienceLevel: "Core Focus",
        tags: ["v18/19", "Hooks", "Context API"]
      },
      {
        name: "JavaScript (ES6+)",
        highlight: "Asynchronous programming, closures, event loop, DOM manipulation, modular architecture.",
        experienceLevel: "Core Focus",
        tags: ["ESNext", "Async/Await", "Promises"]
      },
      {
        name: "Tailwind CSS",
        highlight: "Utility-first design systems, custom configuration, responsive typography, and mobile-first layouts.",
        experienceLevel: "Proficient",
        tags: ["Tailwind v4", "Design Tokens", "Flexbox/Grid"]
      },
      {
        name: "HTML5 & Semantic Web",
        highlight: "Accessible DOM tree construction, ARIA landmarks, WCAG standards, and SEO compliance.",
        experienceLevel: "Proficient",
        tags: ["Semantic HTML", "Accessibility", "A11y"]
      },
      {
        name: "CSS3 & Modern Motion",
        highlight: "CSS Grid, Flexbox, custom properties, responsive breakpoints, keyframe choreography.",
        experienceLevel: "Proficient",
        tags: ["CSS Grid", "Transforms", "Variables"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Developing robust server-side APIs, routing layers, and secure authentication workflows.",
    skills: [
      {
        name: "Node.js",
        highlight: "Event-driven runtime execution, asynchronous I/O, file system operations, and package workflows.",
        experienceLevel: "Core Focus",
        tags: ["V8 Runtime", "Event Loop", "Streams"]
      },
      {
        name: "Express.js",
        highlight: "RESTful API design, modular routing, middleware pipelines, error handling, and request validation.",
        experienceLevel: "Core Focus",
        tags: ["REST APIs", "Middleware", "CORS"]
      },
      {
        name: "API Architecture",
        highlight: "HTTP status protocols, JSON payload structuring, pagination, rate limiting, and endpoint contracts.",
        experienceLevel: "Proficient",
        tags: ["HTTP/HTTPS", "CRUD", "JSON"]
      },
      {
        name: "Authentication & Security",
        highlight: "Token-based authentication (JWT), password hashing with bcrypt, secure cookies, and CORS protection.",
        experienceLevel: "Working Knowledge",
        tags: ["JWT", "bcrypt", "Sessions"]
      }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Modeling structured and document data schemas with query optimization and integrity constraints.",
    skills: [
      {
        name: "PostgreSQL",
        highlight: "Relational database schema modeling, primary/foreign keys, joins, indexation, and ACID transactions.",
        experienceLevel: "Core Focus",
        tags: ["Relational", "SQL", "Foreign Keys"]
      },
      {
        name: "MongoDB",
        highlight: "Document-oriented schema design, aggregation pipelines, dynamic collections, and Mongoose ODM.",
        experienceLevel: "Proficient",
        tags: ["NoSQL", "Mongoose", "Aggregations"]
      },
      {
        name: "SQL Fundamentals",
        highlight: "Complex queries, filtering, grouping, aggregate functions, schema migrations, and relational integrity.",
        experienceLevel: "Proficient",
        tags: ["DML", "DDL", "Subqueries"]
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Developer Ecosystem",
    description: "Industry-standard version control, API testing, and collaborative engineering tooling.",
    skills: [
      {
        name: "Git & GitHub",
        highlight: "Branch management, pull request reviews, merge conflict resolution, semantic commit conventions.",
        experienceLevel: "Daily Driver",
        tags: ["Git Flow", "PRs", "Version Control"]
      },
      {
        name: "Postman",
        highlight: "API endpoint testing, environment variable configuration, automated test scripts, mock servers.",
        experienceLevel: "Proficient",
        tags: ["Testing", "Documentation", "Environments"]
      },
      {
        name: "Vite & Tooling",
        highlight: "Next-generation frontend tooling, Hot Module Replacement (HMR), build optimizations, and bundle analysis.",
        experienceLevel: "Daily Driver",
        tags: ["Bundler", "HMR", "ESM"]
      },
      {
        name: "Linux & Terminal",
        highlight: "Shell scripting basics, bash navigation, process management, SSH keys, package managers.",
        experienceLevel: "Working Knowledge",
        tags: ["CLI", "Bash", "POSIX"]
      }
    ]
  }
];

export const skillsMarqueeList = [
  "Python",
  "Machine Learning",
  "Data Science",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Express.js",
  "JavaScript ES6+",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
  "SQL",
  "Pandas"
];
