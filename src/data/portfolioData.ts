import { TelemetryMetric, ExperienceItem, SkillItem, DeploymentItem, EducationItem } from '../types';

export const BANNER_DATA = {
  headline: 'SUMAIR',
  accentLetter: 'X',
  credo: 'FOCUSED • DISCIPLINED • RELENTLESS',
  tagline: 'BUILDING THE FUTURE. ONE IDEA AT A TIME.',
  whatsapp: '+92 312 2382331',
  whatsappRaw: '923122382331',
  businessEmail: 'nexoraxsolutions@gmail.com',
  personalEmail: 'sumairjawwad5@gmail.com',
  quote: "THE FUTURE IS NOT SOMETHING WE WAIT FOR. IT'S SOMETHING WE BUILD.",
  signature: 'Sumair X',
  pillars: [
    { label: 'DEVELOPER', icon: 'code' },
    { label: 'AI ENTHUSIAST', icon: 'brain' },
    { label: 'DREAMER', icon: 'rocket' },
  ],
  bannerImage: '/assets/sumair_banner.jpg',
  sideCoordinates: 'DEVELOPER • DEEP MINDSET • DREAMER',
};

export const PERSONAL_INFO = {
  name: 'M. SUMAIR',
  lastName: 'JAWWAD',
  fullName: 'M. Sumair Jawwad',
  handle: 'M. SUMAIR JAWWAD // ARCHITECT',
  role: 'JUNIOR DIGITAL MARKETER & CUSTOMER SALES EXECUTIVE',
  status: 'SYS.STATUS // RECRUITMENT_MODE: OPERATIONAL | KARACHI, PK',
  availability: 'Available for Hire',
  bio: 'Enthusiastic and creative junior marketer with a passion for crafting impactful campaigns and driving brand growth. Skilled in social media management, content creation, and market research, eager to contribute fresh ideas and energy to a dynamic marketing team.',
  email: 'sumairjawwad5@gmail.com',
  phone: '+92 303-2754202',
  location: 'Karachi, Sindh, PK',
  locationDetailed: 'Karachi, Sindh, Pakistan',
  workPreference: 'REMOTE / HYBRID',
  epoch: '2023.07 -> PRESENT ACTIVE',
};

export const TELEMETRY_METRICS: TelemetryMetric[] = [
  {
    category: 'PIPELINE // DEPLOYMENTS',
    value: '04',
    description: 'Verified Production Web Apps & AI Platforms',
    subtext: 'AI-BOS • AI-BOS Web • ClientPulse • Raahi Fleet',
    iconName: 'rocket',
  },
  {
    category: 'SYSTEM ARCHITECTURE // DOMAINS',
    value: '04',
    description: 'Autonomous Swarms, Lead Pipelines & Fleet FinOps',
    subtext: 'Python FastAPI • React SPAs • Workflow Automation',
    iconName: 'cpu',
  },
  {
    category: 'RUNTIME STATUS // ENDPOINTS',
    value: '100%',
    description: 'Active & Operational Live Cloud Deployments',
    subtext: 'Verified Live on Render & Cloud Infrastructure',
    iconName: 'shield',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    tag: 'INDEPENDENT CONTRACTOR',
    dateRange: '[ PRESENT PROTOCOL ]',
    title: 'Freelancing — Digital Marketing & SEO',
    description: 'Direct management of comprehensive digital marketing funnels, organic positioning, and cross-channel growth loops.',
    capsules: [
      {
        id: 'c1-1',
        text: 'Assist in the planning and execution of dynamic digital marketing campaigns.',
        iconName: 'search',
      },
      {
        id: 'c1-2',
        text: 'Manage company social media platforms, audience interactions, & publication cadence.',
        iconName: 'share',
      },
      {
        id: 'c1-3',
        text: 'Conduct targeted keyword research and on-page/off-page SEO optimization cycles.',
        iconName: 'search',
      },
      {
        id: 'c1-4',
        text: 'Analyze campaign performance metrics & perform baseline conversion tracking for Google Ads.',
        iconName: 'trending',
      },
    ],
  },
  {
    id: 'exp-2',
    tag: 'COMMERCIAL OUTREACH',
    dateRange: '[ 01 MAR, 24 — 19 SEP, 24 ]',
    title: 'Social Media Outreach Coordinator',
    description: 'Coordinated front-facing sales operations and digital prospect communication streams for residential service suites.',
    capsules: [
      {
        id: 'c2-1',
        text: 'Assisted senior sales representatives in presenting and explaining comprehensive house cleaning packages.',
        iconName: 'userCheck',
      },
      {
        id: 'c2-2',
        text: 'Addressed high-touch customer inquiries and structured personalized solutions aligned with explicit requirements.',
        iconName: 'refresh',
      },
    ],
  },
  {
    id: 'exp-3',
    tag: 'INSIDE SALES',
    dateRange: '[ 19 NOV, 23 — 10 FEB, 24 ]',
    title: 'Customer Sales Representative',
    description: undefined,
    capsules: [
      {
        id: 'c3-1',
        text: 'Assisted senior sales representatives in presenting and demonstrating specialized duct cleaning service packages.',
        iconName: 'userCheck',
      },
      {
        id: 'c3-2',
        text: 'Addressed technical customer inquiries and resolved blockers aligned precisely with building specifications.',
        iconName: 'tool',
      },
      {
        id: 'c3-3',
        text: 'Collaborated directly with the frontline sales team to surpass collective monthly revenue benchmarks.',
        iconName: 'users',
      },
    ],
  },
  {
    id: 'exp-4',
    tag: 'OUTBOUND TELEPHONY',
    dateRange: '[ 03 JULY, 23 — 07 NOV, 23 ]',
    title: 'Customer Sales Representative',
    description: undefined,
    capsules: [
      {
        id: 'c4-1',
        text: 'Proactively engaged with prospective clients via outbound cold telephony to assess ventilation & duct maintenance needs.',
        iconName: 'phone',
      },
      {
        id: 'c4-2',
        text: 'Educated residential homeowners on health advantages and efficiency benefits of modern sanitation protocols.',
        iconName: 'leaf',
      },
    ],
  },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'skill-1',
    title: 'Customer Sales Executive',
    percentage: 95,
    subdescriptors: 'OBJECTION HANDLING // CLOSING // ENGAGEMENT',
    category: 'sales',
  },
  {
    id: 'skill-2',
    title: 'High-Volume Outreach',
    percentage: 94,
    subdescriptors: 'CALL PACING // CRM PIPELINE LOGGING',
    category: 'outreach',
  },
  {
    id: 'skill-3',
    title: 'MS PowerPoint & Decks',
    percentage: 92,
    subdescriptors: 'PITCH DECKS // VISUAL STORYTELLING',
    category: 'tools',
  },
  {
    id: 'skill-4',
    title: 'MS Word & Documentation',
    percentage: 98,
    subdescriptors: 'PROPOSALS // CLIENT REPORTS // BRIEFINGS',
    category: 'tools',
  },
  {
    id: 'skill-5',
    title: 'MS Excel & Data Analytics',
    percentage: 88,
    subdescriptors: 'FORMULAS // PIVOT LOGIC // METRIC LOGS',
    category: 'tools',
  },
  {
    id: 'skill-6',
    title: 'Social Media Strategy',
    percentage: 85,
    subdescriptors: 'PLATFORM AUDITING // CONTENT CADENCE',
    category: 'marketing',
  },
  {
    id: 'skill-7',
    title: 'SEO Keyword Research & Basic Google Ads',
    percentage: 82,
    subdescriptors: 'SERP RECONNAISSANCE // CONVERSION PIXELS // BID BUDGETING',
    category: 'marketing',
  },
];

export const DEPLOYMENTS: DeploymentItem[] = [
  {
    id: 'node-01',
    node: 'NODE_01',
    status: 'DEPLOYED // LIVE PROTOCOL',
    code: 'WDDE_01',
    title: 'AI-BOS',
    subtitle: 'Software + Autonomous AI Agent Platform',
    description:
      'Next-gen intelligent autonomous agent architecture engineered for enterprise workflows, task orchestration, and automated intelligence pipelines.',
    tags: ['AI Agent', 'Autonomous Systems', 'Fullstack', 'Python / FastAPI', 'React'],
    url: 'ai-bos-frontend.onrender.com',
    fullUrl: 'https://ai-bos-frontend.onrender.com',
    metric: 'AUTONOMOUS SWARM // LIVE',
    systemTag: 'AGENT_FRAMEWORK',
    iconName: 'bot',
    kpis: [
      { label: 'Architecture', value: 'Multi-Agent Swarm' },
      { label: 'Backend Stack', value: 'Python / FastAPI' },
      { label: 'Client Layer', value: 'React / Vite SPA' },
      { label: 'Runtime Status', value: 'Live & Operational' },
    ],
    details: [
      'Engineered multi-agent orchestration pipelines with stateful memory and autonomous task routing.',
      'Constructed asynchronous FastAPI backend endpoints with real-time streaming agent telemetry.',
      'Designed high-density responsive control deck with interactive pipeline monitoring and agent logs.',
    ],
  },
  {
    id: 'node-02',
    node: 'NODE_02',
    status: 'DEPLOYED // LIVE PROTOCOL',
    code: 'WDDE_02',
    title: 'AI-BOS Web',
    subtitle: 'Official Product & Brand Showcase Hub',
    description:
      'The dedicated digital landing portal and ecosystem representation for the AI-BOS platform, showcasing capabilities, interactive telemetry, and client onboarding.',
    tags: ['Web Platform', 'SaaS Landing', 'Product Ecosystem', 'UI/UX'],
    url: 'ai-bos-web.onrender.com',
    fullUrl: 'https://ai-bos-web.onrender.com',
    metric: 'PRODUCT PORTAL // VERIFIED',
    systemTag: 'BRAND_ECOSYSTEM',
    iconName: 'globe',
    kpis: [
      { label: 'Platform Type', value: 'Enterprise SaaS Hub' },
      { label: 'Client Onboarding', value: 'Streamlined Interactive Funnel' },
      { label: 'Performance Metric', value: '< 1.2s First Paint' },
      { label: 'UI Architecture', value: 'Dark Cybernetic Aesthetic' },
    ],
    details: [
      'Crafted high-impact visual storytelling showcasing autonomous system capabilities and architectures.',
      'Integrated interactive product telemetry calculators and capability demonstration modules.',
      'Built seamless client lead capture hooks directly feeding sales qualification cadences.',
    ],
  },
  {
    id: 'node-03',
    node: 'NODE_03',
    status: 'DEPLOYED // LIVE PROTOCOL',
    code: 'WDDE_03',
    title: 'ClientPulse',
    subtitle: 'Intelligent Email Harvesting & Automated Follow-Up Engine',
    description:
      'High-yield lead acquisition and automated email outreach pipeline designed for automated scraping, prospect enrichment, and intelligent dynamic follow-up cadences.',
    tags: ['Email Harvesting', 'Outreach Automation', 'Lead Gen Pipeline', 'CRM Automation'],
    url: 'clientpulse-bos.ai.studio',
    fullUrl: 'https://clientpulse-bos.ai.studio',
    metric: 'HARVESTING PIPELINE // 64% OPEN',
    systemTag: 'OUTREACH_ENGINE',
    iconName: 'mail',
    kpis: [
      { label: 'Prospect Enrichment', value: 'Multi-Signal Verification' },
      { label: 'Lead Velocity', value: '1,200+ leads/wk' },
      { label: 'Dynamic Follow-Ups', value: 'Adaptive Multi-Touch' },
      { label: 'CRM Sync Status', value: 'Direct Webhook Integration' },
    ],
    details: [
      'Architected end-to-end automated scraping and data enrichment pipelines targeting high-value accounts.',
      'Formulated dynamic email sequencing logic adjusting cadence based on recipient engagement signals.',
      'Automated inbox rotation, SPF/DKIM verification checkpoints, and deliverability monitoring.',
    ],
  },
  {
    id: 'node-04',
    node: 'NODE_04',
    status: 'DEPLOYED // LIVE PROTOCOL',
    code: 'WDDE_04',
    title: 'Raahi Fleet',
    subtitle: 'Bus Business & Fleet Financial Management Suite',
    description:
      'Comprehensive fleet logistics and transit management ecosystem enabling bus operators to monitor daily ticketing, route expenditures, fuel metrics, maintenance tracking, and profitability analytics.',
    tags: ['Fleet Management', 'Expense Analytics', 'Logistics ERP', 'FinOps'],
    url: 'raahi-fleet.ai.studio',
    fullUrl: 'https://raahi-fleet.ai.studio',
    metric: 'TRANSIT FINOPS // ZERO-VARIANCE',
    systemTag: 'LOGISTICS_ERP',
    iconName: 'bus',
    kpis: [
      { label: 'Ledger Audit', value: 'Daily Ticketing Reconciliation' },
      { label: 'Operational Tracking', value: 'Fuel Burn & Route Costs' },
      { label: 'Maintenance Alerts', value: 'Predictive Lifecycle Scheduling' },
      { label: 'Margin Analytics', value: 'Real-Time Route P&L' },
    ],
    details: [
      'Constructed complete transit business operations ledger tracking cash flow, routes, and ticketing tallies.',
      'Implemented fuel consumption analytics to detect routing anomalies and mitigate operational leakage.',
      'Built executive dashboard with route-level profitability metrics and maintenance forecast schedules.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    levelTag: 'COLLEGIATE LEVEL // CURRENT',
    institution: 'Bufferzone Degree Boys College',
    subtitle: 'Higher Secondary Certificate (HSC Part II)',
    period: '2023 – Present',
    gradeBadge: 'In Progress',
    focusArea: 'Pre-Engineering & Analytical Sciences',
    location: 'Karachi, Sindh, Pakistan',
    highlights: [
      'Advanced Mathematics & Analytical Reasoning',
      'Physics & Empirical Problem Formulation',
      'Continuous Academic Merit Standing',
    ],
    iconName: 'school',
  },
  {
    id: 'edu-2',
    levelTag: 'SECONDARY SCHOOL CERTIFICATE',
    institution: 'White House Grammar School',
    subtitle: 'Secondary School Certificate (Matriculation)',
    period: 'Completed',
    gradeBadge: 'Grade "B" Achieved',
    focusArea: 'General Sciences & Technical Foundations',
    location: 'Karachi, Sindh, Pakistan',
    highlights: [
      'Rigorous General Science Curriculum',
      'Computer & Digital Literacy Foundations',
      'Consistent Extracurricular & Academic Discipline',
    ],
    iconName: 'award',
  },
];
