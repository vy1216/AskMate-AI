export type Feature = {
  id: string
  title: string
  description: string
}

export type Endpoint = {
  id: string
  method: 'GET' | 'POST'
  path: string
  description: string
}

export const appOverview = {
  name: 'AskMate – Your AI Knowledge Buddy',
  summary:
    'Multi-channel AI knowledge buddy that answers questions from your team docs, suggests related info, learns gaps, and works on Web + Slack. Includes voice search, proactive suggestions, and analytics.',
  stack: {
    frontend: 'React (Vite + TS), TailwindCSS v4, daisyUI',
    backend: 'Node.js (TypeScript, Express) or Streamlit (Python) options',
    vectorStore: 'Chroma or in-memory store',
    models: 'OpenAI or Gemini (optional) with local fallback embeddings',
  },
}

export const features: Feature[] = [
  { id: 'web-app', title: 'Web App UI', description: 'Beautiful multi-page UI with gradient design and responsive layout.' },
  { id: 'voice-search', title: 'Voice Search', description: 'Microphone input with transcription to ask questions hands-free.' },
  { id: 'rag', title: 'RAG over Docs', description: 'Ask questions over PDFs, Notion exports, and Google Docs.' },
  { id: 'idk-mode', title: "I Don't Know Mode", description: 'Flags missing FAQs to help you fill knowledge gaps.' },
  { id: 'suggestions', title: 'Smart Suggestions', description: 'Related-question suggestions to deepen context.' },
  { id: 'analytics', title: 'Analytics Dashboard', description: 'Top questions, unanswered items, and source insights.' },
  { id: 'slack', title: 'Slack Bot', description: 'Ask from Slack using /askmate with Socket Mode.' },
]

export const endpoints: Endpoint[] = [
  { id: 'ask', method: 'POST', path: '/api/ask', description: 'Q&A with sources and I-Don’t-Know mode' },
  { id: 'ingest-pdf', method: 'POST', path: '/api/ingest/pdf', description: 'Upload PDF to index' },
  { id: 'ingest-notion', method: 'POST', path: '/api/ingest/notion', description: 'Ingest Notion data (requires key)' },
  { id: 'ingest-google', method: 'POST', path: '/api/ingest/google', description: 'Ingest Google Docs (requires OAuth)' },
  { id: 'analytics-summary', method: 'GET', path: '/api/analytics/summary', description: 'Analytics summary' },
  { id: 'analytics-top-questions', method: 'GET', path: '/api/analytics/top-questions', description: 'Top user questions' },
  { id: 'analytics-top-sources', method: 'GET', path: '/api/analytics/top-sources', description: 'Top source documents' },
  { id: 'analytics-unanswered', method: 'GET', path: '/api/analytics/unanswered', description: 'Unanswered questions list' },
]

export const setupSteps = {
  backend: [
    'cd node-backend',
    'cp .env.example .env and fill OPENAI/GEMINI keys (optional)',
    'npm install',
    'npm run dev  # http://localhost:4000',
  ],
  frontend: [
    'cd react-frontend',
    'echo "VITE_API_BASE=http://localhost:4000" > .env  # optional',
    'npm install',
    'npm run dev  # http://localhost:5173',
  ],
}

