/**
 * Single source of truth for the whole site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const site = {
  // Change this to your real domain once deployed. Used for SEO / OG tags / sitemap.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dipalkharva.dev",
  title: "Dipal Kharva — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 7+ years building scalable, secure Node.js, NestJS and React platforms. Module Lead at PMC India.",
};

export const profile = {
  name: "Dipal Kharva",
  firstName: "Dipal",
  role: "Senior Full Stack Engineer",
  subRole: "Module Lead · Node.js · React · TypeScript",
  location: "Vadodara, India",
  available: "Open to senior & lead engineering roles",
  email: "dipalkharva1@gmail.com",
  // Remove this line if you'd rather not publish your number.
  phone: "+91 97732 83074",
  linkedin: "https://www.linkedin.com/in/dipalkharva",
  github: "https://github.com/dipalkharva", // update if your handle differs
  resumeFile: "/Dipal_Kharva_Resume.pdf",
  summary:
    "Results-driven Senior Full Stack Engineer with 7+ years of experience building highly scalable, secure, and automated web applications. Deep expertise in Node.js, React, and TypeScript, with a strong track record of designing robust server-side services, RESTful and WebSocket APIs, PostgreSQL-backed systems, and event-driven pipelines using RabbitMQ and Redis.",
  summaryTwo:
    "I lead Agile teams, mentor engineers, champion CI/CD best practices, and ship enterprise-grade ad-tech and SaaS platforms serving 10K+ users. I care about performance, clean architecture, and automation that removes toil.",
};

export const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "10K+", label: "Users served" },
  { value: "99.9%", label: "System uptime" },
  { value: "50+", label: "Data sources integrated" },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Node.js & Backend",
    items: [
      "Node.js (7+ yrs)",
      "NestJS",
      "REST APIs",
      "WebSocket",
      "Microservices",
      "RabbitMQ",
      "Redis",
      "CORS / HTTP",
    ],
  },
  {
    title: "Frontend Engineering",
    items: [
      "React.js",
      "Hooks / HOC / Render Props",
      "Next.js",
      "Angular",
      "Atomic Design",
      "Shared UX libraries",
      "Responsive UI",
    ],
  },
  {
    title: "TypeScript & JavaScript",
    items: [
      "TypeScript",
      "Advanced JavaScript",
      "Clean & secure code",
      "Module-based architecture",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "ORM tooling",
      "Query optimization",
      "Data modeling",
    ],
  },
  {
    title: "DevOps & CI/CD",
    items: [
      "Docker",
      "Kubernetes",
      "AWS ECS",
      "CI/CD pipelines",
      "Git-flow",
      "GitHub / Bitbucket",
    ],
  },
  {
    title: "Security",
    items: [
      "Auth & AuthZ",
      "RBAC",
      "Data encryption",
      "Secure API design",
      "Cybersecurity principles",
    ],
  },
  {
    title: "State Management",
    items: ["Redux", "Context API", "NgRx"],
  },
  {
    title: "Agile & Leadership",
    items: [
      "Agile / Scrum",
      "Sprint planning",
      "Code reviews",
      "Mentoring",
      "Cross-functional collaboration",
    ],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Module Lead",
    company: "PMC India",
    location: "Vadodara, India",
    period: "May 2025 — Present",
    current: true,
    points: [
      "Spearheaded the end-to-end migration of legacy Software AG webMethods integrations to containerized Node.js microservices on AWS ECS, enabling scalable Google Ads campaign automation pipelines for 10K+ users.",
      "Architected event-driven, highly available Node.js/NestJS services following REST and WebSocket standards, using RabbitMQ for async messaging and Redis for caching — sustaining 99.9% uptime.",
      "Designed and optimized PostgreSQL schemas with ORM tooling, improving query performance and supporting complex campaign data models.",
      "Built reusable React component libraries and core UI workflows aligned with Atomic Design principles, optimizing performance across devices and browsers.",
      "Established automated CI/CD pipelines using Docker, Kubernetes, and AWS ECS for production-grade build, test, and deployment workflows.",
      "Designed and enforced cybersecurity principles — RBAC, data encryption, and secure API standards — across all services.",
      "Mentored engineers, led peer code reviews, and drove Agile sprint planning and engineering best practices across the team.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "AWS ECS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    role: "Team Lead & Full Stack Developer",
    company: "Skill Quotient (Remote)",
    location: "Kuala Lumpur, Malaysia",
    period: "Nov 2021 — Mar 2025",
    points: [
      "Led design and delivery of enterprise-grade SaaS applications serving 10K+ concurrent users with high availability and performance.",
      "Designed and maintained RESTful APIs and microservices with deep expertise in CORS, HTTP, WebSocket, and third-party platform integration.",
      "Authored advanced React components using Hooks, HOC, and Render Props; built shared UX libraries following Atomic Design and translated wireframes into high-performance, cross-browser interfaces.",
      "Implemented and evaluated multiple state management systems (Redux, Context API) to select the optimal solution per feature use case.",
      "Modeled and optimized complex relational databases, enforcing query performance and schema best practices.",
      "Reviewed code systematically, gave structured feedback, and mentored junior and mid-level developers to grow team capability.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Angular",
      "Redux",
    ],
  },
  {
    role: "Team Lead & Full Stack Developer",
    company: "AKCESS (Remote)",
    location: "London, England",
    period: "Mar 2020 — Nov 2021",
    points: [
      "Built digital identity, onboarding, and verification platforms on MEAN/MERN stacks with 99.9%-accuracy OCR and AI face matching, accelerating customer onboarding by 50%.",
      "Implemented secure eKYC, digital ID, and e-signature systems with 100% encrypted document storage and secure data-sharing APIs.",
      "Delivered multi-domain portals (banking, education, SME) that cut administrative overhead by 30–40% through automation and real-time notifications.",
      "Enforced API security standards, secure authentication, and performance optimization across all services.",
    ],
    stack: ["MEAN", "MERN", "MongoDB", "Angular", "React", "Node.js"],
  },
  {
    role: "Full Stack Developer",
    company: "Rigel Networks",
    location: "Vadodara, India",
    period: "Sep 2019 — Apr 2020",
    points: [
      "Built scalable e-commerce and ERP applications on MERN/MEAN stacks, reducing operational complexity by 50% through automation and centralized workflows.",
      "Developed and documented RESTful APIs; performed performance tuning and code reviews to maintain clean, reliable codebases.",
    ],
    stack: ["MERN", "MEAN", "Node.js", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "Adrixus Tech Studio",
    location: "Vadodara, India",
    period: "May 2019 — Sep 2019",
    points: [
      "Developed a real-time GPS vehicle tracking system with 99.9% location accuracy, geofencing alerts, route history, and fleet analytics.",
    ],
    stack: ["Node.js", "Angular", "MongoDB", "Socket.IO"],
  },
  {
    role: "Junior Node.js Developer",
    company: "Vistaura",
    location: "Vadodara, India",
    period: "May 2017 — May 2019",
    points: [
      "Designed RESTful APIs and optimized SQL/NoSQL databases, improving system performance by 30%.",
      "Implemented security best practices ensuring 99.9% system uptime and reliability.",
      "Built ERP, student visa processing, expense management, and vehicle auction platforms with measurable efficiency gains across every solution.",
    ],
    stack: ["Node.js", "Express", "MySQL", "MongoDB"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  company: string;
};

export const projects: Project[] = [
  {
    name: "Google Ads Automation Platform",
    tagline: "Campaign services at scale",
    description:
      "Migration of legacy Software AG webMethods integrations into containerized Node.js microservices on AWS ECS, with event-driven campaign automation pipelines backed by RabbitMQ and Redis.",
    impact: "10K+ users · 99.9% uptime",
    stack: ["Node.js", "NestJS", "AWS ECS", "RabbitMQ", "Redis", "PostgreSQL"],
    company: "PMC India",
  },
  {
    name: "SQe-IMS",
    tagline: "Secure Invoice Management System",
    description:
      "A secure, scalable invoice automation platform with advanced role-based access control, built end-to-end on Node.js, NestJS, React, and PostgreSQL.",
    impact: "Enterprise-grade RBAC",
    stack: ["Node.js", "NestJS", "React", "TypeScript", "PostgreSQL"],
    company: "Skill Quotient",
  },
  {
    name: "Cerebro / Wizard",
    tagline: "Enterprise analytics portal",
    description:
      "Self-service analytics platform integrating 50+ enterprise data sources, enabling faster data-driven decisions across PETRONAS divisions.",
    impact: "50+ data sources integrated",
    stack: ["React", "Node.js", "PostgreSQL", "Analytics"],
    company: "Skill Quotient",
  },
  {
    name: "Repotomatic",
    tagline: "Reporting & document automation",
    description:
      "Internal reporting platform that automates document generation and streamlines collaboration across teams.",
    impact: "10,000+ documents generated annually",
    stack: ["Node.js", "React", "MySQL"],
    company: "Skill Quotient",
  },
  {
    name: "My Expert Plugin",
    tagline: "Outlook productivity tool",
    description:
      "An Angular/.NET Outlook plugin that surfaces meeting context ahead of time, optimized for enterprise communication workflows.",
    impact: "40% less meeting prep time",
    stack: ["Angular", ".NET", "Microsoft Graph"],
    company: "Skill Quotient",
  },
  {
    name: "Document Verification Portal",
    tagline: "OCR + AI face matching",
    description:
      "Online identity verification portal using OCR and AI-based face matching to validate documents and onboard customers digitally.",
    impact: "50% faster onboarding · 99.9% accuracy",
    stack: ["MEAN", "OCR", "AI face match", "MongoDB"],
    company: "AKCESS",
  },
  {
    name: "Banking & eKYC Portal",
    tagline: "Digital identity for financial services",
    description:
      "Secure eKYC and digital identity solution supporting digital IDs, e-signatures, and encrypted document sharing.",
    impact: "100% encrypted document storage",
    stack: ["MERN", "React", "Node.js", "MongoDB"],
    company: "AKCESS",
  },
  {
    name: "Jewel Cloud",
    tagline: "Jewelry ERP & e-commerce",
    description:
      "End-to-end jewelry ERP and e-commerce solution centralizing inventory, orders, and storefront workflows.",
    impact: "50% less operational complexity",
    stack: ["MERN", "Node.js", "React", "MongoDB"],
    company: "Rigel Networks",
  },
  {
    name: "Trailx",
    tagline: "Real-time vehicle tracking",
    description:
      "GPS fleet tracking with live monitoring, geofencing alerts, route history, and performance analytics.",
    impact: "99.9% location accuracy",
    stack: ["Node.js", "Socket.IO", "Angular", "MongoDB"],
    company: "Adrixus Tech Studio",
  },
];

export type Education = {
  degree: string;
  short: string;
  school: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "The Maharaja Sayajirao University of Baroda",
    period: "2015 — 2018",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "The Maharaja Sayajirao University of Baroda",
    period: "2011 — 2015",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
