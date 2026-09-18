// All site copy lives here so components stay presentational.
// Edit this file to update the portfolio — no JSX changes needed.

// Imported (not a bare '/satyam.jpg' string) so Vite resolves, hashes and
// bundles it — this works at any deploy base path, including subfolders.
import satyamPhoto from '../assets/satyam.jpg';

export const profile = {
  firstName: 'Satyam',
  fullName: 'Satyam Raghuvanshi',
  role: 'Aspiring Data Analyst',
  location: 'Bhopal, India',
  degreeLine: 'B.Tech CSE 2027',
  email: 'satyamraghuvanshi220ct@gmail.com',
  phone: '+91 9504394384',
  phoneHref: 'tel:+919504394384',
  github: 'https://github.com/raghuvanshi-sec',
  linkedin: 'https://linkedin.com/in/satyam-0x',
  resumeUrl: 'Satyam_Raghuvanshi_Resume.pdf',
  photo: satyamPhoto,
  heroDesc:
    'Building with Python, SQL, Excel, and Power BI on real analytics problems — from fraud risk scoring to churn prediction to phishing classification.',
};

export const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  'Python',
  'SQL',
  'Power BI',
  'Excel',
  'Pandas',
  'Scikit-learn',
  'XGBoost',
  'SHAP',
  'NLP',
  'Computer Vision',
  'Git',
];

export const capabilities = [
  {
    num: '01',
    title: 'Data Analysis & Reporting',
    desc: 'Turning raw datasets into clear, decision-ready insights using Python, SQL, and Excel — the core workflow behind every project below.',
  },
  {
    num: '02',
    title: 'BI & Dashboards',
    desc: 'Power BI and Excel reporting built for stakeholders — translating channel and revenue performance into recommendations a COO can act on.',
  },
  {
    num: '03',
    title: 'Machine Learning & Applied AI',
    desc: 'XGBoost, SHAP, and classification models built into working systems — fraud risk scoring, churn prediction, and phishing detection.',
  },
  {
    num: '04',
    title: 'Data Cleaning & Pipeline Hygiene',
    desc: 'Deduplication, format standardization, and missing-value handling — took a raw 5,150-row sales dataset to 4,820 analysis-ready records for a simulated COO.',
  },
];

// Replace `github` below with each project's real repo URL once you have them —
// right now every project points at the general GitHub profile as a placeholder.
const GITHUB_PROFILE = 'https://github.com/raghuvanshi-sec';
const GITHUB_RISKORA = 'https://github.com/raghuvanshi-sec/Riskora-AI-Powered-Payment-Risk-Fraud-Decisioning';
const GITHUB_SENTIENT = 'https://github.com/raghuvanshi-sec/Sentient-Retention-Engine';
const GITHUB_PHISHGUARD = 'https://github.com/raghuvanshi-sec/PhishGuard';
const GITHUB_URBANKART = 'https://github.com/raghuvanshi-sec/UrbanKart';

export const projects = [
  {
    id: 'riskora',
    name: 'Riskora',
    meta: 'Personal Project',
    tagline:
      'AI-powered payment risk & fraud decisioning. Combines XGBoost, rule-based logic, and SHAP to score transactions and explain every flag.',
    description: [
      'Riskora is a payment risk and fraud-decisioning platform built to catch suspicious transactions without turning every flag into a black box.',
      'It scores each transaction using a blend of XGBoost classification and rule-based logic, then explains that score with SHAP feature importance — so a risk analyst can see exactly which signals pushed a transaction toward “high risk,” instead of just trusting a number.',
    ],
    bullets: [
      'Combined XGBoost, rule-based logic, and SHAP to detect fraud and score transactions.',
      'Enabled explainable, data-driven decisioning by surfacing SHAP-based feature importance behind each risk score.',
    ],
    tags: ['Python', 'XGBoost', 'SHAP'],
    github: GITHUB_RISKORA,
    visual: 'risk',
  },
  {
    id: 'sentient',
    name: 'Sentient Retention Engine',
    meta: 'May 2026 – Present · Personal Project',
    tagline:
      'Agentic AI platform predicting and preventing SaaS churn, pairing ML with autonomous agents and digital-twin simulation.',
    description: [
      'The Sentient Retention Engine is a production-grade agentic AI platform aimed at predicting and preventing SaaS customer churn before it happens.',
      "It pairs traditional churn-prediction ML with autonomous decision-making agents and digital-twin simulations — modeling how a customer's behavior might evolve, and letting agents propose retention interventions automatically.",
    ],
    bullets: [
      'Built a production-grade agentic AI platform to predict and prevent SaaS customer churn.',
      'Combined machine learning with autonomous decision-making agents and digital-twin simulations to generate churn-prevention insights.',
    ],
    tags: ['Python', 'Agentic AI', 'Simulation'],
    github: GITHUB_SENTIENT,
    visual: 'churn',
  },
  {
    id: 'phishguard',
    name: 'PhishGuard',
    meta: 'Oct – Dec 2025 · Personal Project',
    tagline:
      'Machine learning phishing detector classifying emails, messages, and URLs from language and link patterns.',
    description: [
      'PhishGuard is a phishing-detection system that classifies emails, SMS messages, and URLs as clean or malicious using language and link-pattern analysis.',
      'It combines XGBoost for structured feature classification, NLP for message-content analysis, and computer vision for visual link inspection — aiming for high accuracy with low false positives, since flagging legitimate messages erodes trust as much as missing real attacks does.',
    ],
    bullets: [
      'Built a machine learning-based phishing detection system that classifies emails, messages, and URLs using language and link pattern analysis.',
      'Combined XGBoost, computer vision, and NLP techniques to achieve high accuracy with low false positives.',
    ],
    tags: ['XGBoost', 'NLP', 'Computer Vision'],
    github: GITHUB_PHISHGUARD,
    visual: 'phish',
  },
  {
    id: 'job-simulation',
    name: 'Data Analyst Job Simulation',
    meta: 'OneRoadmap · Sep 2026',
    tagline:
      'Cleaned a messy 5,150-row sales dataset and turned it into a channel strategy recommendation for a simulated COO.',
    description: [
      "Completed as part of OneRoadmap's Data Analyst Job Simulation — a practical exercise modeling a real analytics engagement end-to-end, from messy raw data to an executive-ready recommendation.",
      'The work: clean a real-world-style sales dataset, analyze it for regional and channel performance, then turn that analysis into a recommendation a COO could actually act on.',
    ],
    bullets: [
      'Cleaned and validated a 5,150-row sales dataset into a 4,820-record analysis-ready dataset — removing duplicates, standardizing date/city/product formats, and handling missing values.',
      'Converted mixed-currency revenue fields into a consistent format for analysis.',
      'Analyzed revenue by region, calculated month-on-month growth, and evaluated sales channel performance.',
      'Recommended a channel strategy by weighing revenue trajectory, order volume, and average order value instead of total revenue alone.',
    ],
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Power BI'],
    github: GITHUB_URBANKART,
    visual: 'jobsim',
  },
];

export const stats = [
  { num: '3', label: 'Projects Built' },
  { num: '1', label: 'Internship' },
  { num: '7.20', label: 'CGPA' },
  { num: '’27', label: 'Graduating' },
];

export const experience = [
  {
    date: 'Sep 2026',
    org: 'OneRoadmap',
    loc: 'Data Analyst Job Simulation',
    role: 'Data Analyst Job Simulation',
    bullets: [
      'Cleaned and validated a 5,150-row sales dataset into a 4,820-record analysis-ready dataset — removing duplicates, standardizing formats, and handling missing values.',
      'Analyzed revenue by region, calculated month-on-month growth, and evaluated sales channel performance.',
      'Recommended a channel strategy for a simulated COO by weighing revenue trajectory, order volume, and average order value.',
    ],
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Power BI'],
  },
  {
    date: 'Jun 2026 – Present',
    org: 'Wipro',
    loc: 'Training',
    role: 'AI, ML & Data Science Training',
    bullets: [
      'Ongoing applied training across artificial intelligence, machine learning, and data science fundamentals.',
    ],
    tags: ['Machine Learning', 'AI'],
  },
  {
    date: 'May 2026 – Present',
    org: 'Personal Project',
    loc: 'Sentient Retention Engine',
    role: 'Built the Sentient Retention Engine',
    bullets: [
      'Building a production-grade agentic AI platform that predicts and prevents SaaS customer churn.',
      'Pairs machine learning with autonomous decision-making agents and digital-twin simulations.',
    ],
    tags: ['Python', 'Agentic AI', 'Simulation'],
  },
  {
    date: 'Oct – Dec 2025',
    org: 'Personal Project',
    loc: 'PhishGuard',
    role: 'Built PhishGuard',
    bullets: [
      'Built a phishing detection system classifying emails, messages, and URLs from language and link patterns.',
      'Combined XGBoost, computer vision, and NLP to keep false positives low.',
    ],
    tags: ['XGBoost', 'NLP', 'Computer Vision'],
  },
  {
    date: 'Mar – Jun 2024',
    org: 'Internselite',
    loc: 'Remote',
    role: 'Cybersecurity Intern',
    bullets: [
      'Performed threat analysis to identify vulnerabilities and recommend mitigation strategies.',
      'Conducted network scanning and reconnaissance using Nmap to assess exposed services.',
    ],
    tags: ['Threat Analysis', 'Nmap', 'Network Recon'],
  },
  {
    date: '2023 – 2027',
    org: 'Jai Narain College of Technology',
    loc: 'Bhopal, India',
    role: 'B.Tech, Computer Science & Engineering',
    bullets: [
      'Pursuing a B.Tech in Computer Science & Engineering, currently maintaining a 7.20/10 CGPA.',
      'Coursework spanning data structures, algorithms, databases, and applied statistics — the foundation behind every project above.',
    ],
    tags: ['B.Tech CSE', 'CGPA 7.20'],
  },
];
