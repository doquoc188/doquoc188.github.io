// All site content lives here — edit this file to update the portfolio.

export type Metric = { value: number; decimals?: number; suffix?: string; prefix?: string; label: string }
export type Project = {
  title: string
  date: string
  pitch: string
  details: string[]
  metrics: Metric[]
  tags: string[]
  github: string
  demo?: string
}

export const config = {
  brand: 'Do Trong Quoc',
  name: 'Do Trong Quoc',
  role: 'AI Engineer',
  location: 'Hanoi, Vietnam',
  email: 'dotrongquoc1808@gmail.com',
  github: 'https://github.com/doquoc188',
  siteUrl: 'https://doquoc188.github.io',
  description:
    'Do Trong Quoc — AI Engineer in Hanoi focused on RAG, agentic workflows and AI evaluation. Projects, research and skills.',
  videoSrc:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4',
  intro: ["Hey there, I'm Do Trong Quoc,", 'AI Engineer: RAG, agents & evaluation'],
  typewriter:
    'Glad you stopped in. I build RAG systems and AI agents you can actually measure. Now, what are we building?',
  navLinks: [
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Get in touch', href: 'mailto:dotrongquoc1808@gmail.com' },
  pills: [
    { label: 'See my projects', href: '#projects' },
    { label: 'Research & papers', href: '#research' },
    { label: 'Skills & stack', href: '#skills' },
    { label: 'GitHub profile', href: 'https://github.com/doquoc188' },
  ],

  summary:
    'Final-year Information Technology student at FPT University focused on RAG, agentic workflows and AI evaluation. Co-author of an accepted ICWS 2026 Vietnamese LLM safety benchmark.',

  projects: [
    {
      title: 'Agentic Data Analyst',
      date: 'Aug – Oct 2026',
      pitch: 'A natural-language analyst for unfamiliar PostgreSQL schemas, read-only by design.',
      details: [
        'Runtime table / PK / FK / comment discovery, guarded SELECT/WITH generation, SQL/tool self-correction and evidence-grounded answers.',
        'Read-only architecture: SELECT/WITH validation, READ ONLY transactions, SELECT-only role, 5-second timeout, 100-row cap.',
        'On real-world Olist (8 tables, 550,759 rows): 14/20 (70%) unseen baseline → 17/20 (85%) after tuning, no regressions on the 14 baseline passes; a weaker 16/20 experiment was reverted.',
        'Diagnosed many-to-many join row multiplication and added pre-aggregation / deduplication.',
      ],
      metrics: [
        { value: 91.67, decimals: 2, suffix: '%', label: 'Sales set · 22/24' },
        { value: 87.5, decimals: 2, suffix: '%', label: 'Unseen SaaS · 14/16' },
        { value: 85, suffix: '%', label: 'Olist after tuning · 17/20' },
        { value: 15, prefix: '+', suffix: ' pp', label: 'Olist gain vs. 70% baseline' },
      ],
      tags: ['Python', 'Gemini', 'LangChain', 'PostgreSQL', 'FastAPI', 'React/TypeScript', 'MCP', 'Vercel/Render/Neon'],
      github: 'https://github.com/doquoc188/Agentic-Data-Analyst',
      demo: 'https://agentic-data-analyst-nine.vercel.app',
    },
    {
      title: 'Finance_RAG — Financial Research Assistant',
      date: 'Aug – Oct 2026',
      pitch: 'End-to-end financial-report QA with deterministic numeric verification.',
      details: [
        'Ingestion → stable chunk IDs → Qdrant dense + BM25 → RRF fusion → optional BGE reranking → evidence grading / bounded LangGraph query rewrite → grounded generation.',
        'Decimal-based numeric verification labels claims SUPPORTED / CONTRADICTED / NOT_FOUND.',
        'SHA-256 fingerprints + manifest for incremental re-indexing: unchanged files trigger 0 embedding / upsert / delete operations.',
        'Live Microsoft GraphRAG 3.3.0 GLOBAL smoke test across 4 curated documents.',
      ],
      metrics: [
        { value: 408, label: 'Offline tests, CI green' },
        { value: 75.93, decimals: 2, suffix: '%', label: 'BM25 Recall@5' },
        { value: 81.48, decimals: 2, suffix: '%', label: 'BM25 Recall@10' },
        { value: 70.25, decimals: 2, suffix: '%', label: 'BM25 MRR@10' },
      ],
      tags: ['Python', 'LangChain', 'LangGraph', 'Qdrant', 'BM25/RRF', 'BGE Reranker', 'Microsoft GraphRAG', 'GitHub Actions'],
      github: 'https://github.com/doquoc188/Finance_Rag',
    },
    {
      title: 'Student Scores Prediction System',
      date: 'Apr 2026',
      pitch: 'Regression workflow from preprocessing to a served model with dashboard and API.',
      details: [
        'Preprocessing / feature engineering → 5-fold CV over 8+ models → best-pipeline serialization → Streamlit dashboard + FastAPI inference.',
        'Fixed inconsistent ordinal/nominal handling with a rebuilt ColumnTransformer plus interaction features.',
        'Ridge won (holdout RMSE 6.25). /predict and /predict-batch APIs, covered by pytest.',
      ],
      metrics: [
        { value: 0.8688, decimals: 4, label: 'CV R²' },
        { value: 4.36, decimals: 2, label: 'CV MAE' },
        { value: 0.8397, decimals: 4, label: 'Holdout R²' },
        { value: 4.83, decimals: 2, label: 'Holdout MAE' },
      ],
      tags: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'LightGBM', 'CatBoost', 'Streamlit', 'FastAPI', 'Pytest'],
      github: 'https://github.com/doquoc188/StudentScores_Prediction',
    },
  ] as Project[],

  program: {
    viName: 'Chương trình đào tạo nhân tài AI thực chiến',
    enName: 'Hands-on AI Talent Training Program',
    enNote: 'English name translated from the Vietnamese title; not an official title.',
    org: 'VinUni x Vingroup',
    orgFull: 'VinUniversity (VinUni) in partnership with Vingroup',
    status: 'Admitted, 2026',
  },

  research: {
    title: 'A Vietnamese Benchmark for Auditing Large Language Model Safety in Eating Disorder-Related Conversations',
    role: 'Co-author',
    venue: 'ICWS 2026',
    status: 'Accepted Jul 2026',
    blurb:
      'Designed automated audit tests and evaluation metrics across 1,000+ Vietnamese edge cases for safety guardrails.',
    stat: { value: 1000, suffix: '+', label: 'Vietnamese edge cases' },
  },

  skills: [
    {
      group: 'Programming & Data',
      items: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      group: 'ML & DL',
      items: [
        'Scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face',
        'Computer Vision', 'NLP', 'Model evaluation', 'Transfer learning',
      ],
    },
    {
      group: 'GenAI, RAG & Agents',
      items: [
        'LangChain', 'LangGraph', 'Gemini/OpenAI APIs', 'Qdrant', 'BM25/RRF',
        'BGE reranking', 'Microsoft GraphRAG', 'RAG evaluation', 'MCP',
      ],
    },
    {
      group: 'Backend, DB & MLOps',
      items: ['FastAPI', 'Streamlit', 'PostgreSQL', 'Docker', 'Git/GitHub', 'GitHub Actions', 'React', 'TypeScript'],
    },
    {
      group: 'Languages',
      items: ['Vietnamese (Native)', 'English (Professional Working)'],
    },
  ],

  certifications: [
    { name: 'AWS GenAI: RAG, AI Agents and Responsible AI', by: 'KodeKloud / Coursera' },
    { name: 'Deep Learning Specialization', by: 'DeepLearning.AI / Coursera' },
    { name: 'Machine Learning Specialization', by: 'DeepLearning.AI / Coursera' },
    { name: 'TensorFlow Developer Professional Certificate', by: 'DeepLearning.AI / Coursera' },
    { name: 'Mathematics for Machine Learning Specialization', by: 'Imperial College London / Coursera' },
  ],

  education: [
    {
      school: 'FPT University',
      degree: 'B.S. Information Technology (Artificial Intelligence)',
      period: '2024 – 2027',
      note: '100% full-tuition scholarship for four-year undergraduate studies.',
    },
    {
      school: 'Kasem Bundit University',
      degree: 'Intensive English Program (Passed)',
      period: '2024',
      note: '',
    },
  ],
}
