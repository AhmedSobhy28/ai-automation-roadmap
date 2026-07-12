import {
  FoundationData,
  Group,
  Phase,
  PortfolioProject,
  ResourceLink,
  SpecializationTrack,
  TocItem,
  Week,
} from './types';

const learn = (items: string[]): Group => ({ heading: 'Learn', icon: 'Learn', type: 'list', items });
const build = (items: string[]): Group => ({ heading: 'Build', icon: 'Build', type: 'list', items });
const output = (items: string[]): Group => ({ heading: 'Output', icon: 'Ship', type: 'list', items });
const choose = (items: string[]): Group => ({ heading: 'Choose Your Path', icon: 'Path', type: 'list', items });
const goal = (text: string): Group => ({ heading: 'Goal', icon: 'Goal', type: 'note', text });
const why = (text: string): Group => ({ heading: 'Why It Matters', icon: 'Why', type: 'note', text });

export const foundationData: FoundationData = {
  intro:
    'AI Automation is the practical skill of connecting AI models, apps, APIs, data, and human review into reliable workflows that save time, reduce manual work, and create measurable business outcomes.',
  protects: {
    heading: 'What AI Automation Connects',
    items: [
      'Business apps, forms, CRMs, inboxes, and spreadsheets',
      'AI models for reasoning, extraction, classification, and generation',
      'APIs, webhooks, triggers, queues, and scheduled jobs',
      'Databases, vector stores, documents, and knowledge bases',
      'Human approval steps, logs, alerts, and fallback paths',
    ],
  },
  matters: {
    heading: 'Why It Matters',
    items: [
      'Turns repetitive work into repeatable systems',
      'Helps small teams operate like bigger teams',
      'Creates portfolio-ready projects clients can understand',
      'Combines no-code speed with developer-grade reliability',
      'Builds a practical bridge between AI hype and real business value',
    ],
  },
  coreComponents: [
    { icon: 'Flow', title: 'Workflows', desc: 'Step-by-step automations triggered by events or schedules.', example: 'e.g. lead routing, reminders, approvals' },
    { icon: 'API', title: 'AI APIs', desc: 'Model calls that classify, extract, write, search, or decide.', example: 'e.g. OpenAI API, JSON outputs, tools' },
    { icon: 'Data', title: 'Data Layer', desc: 'Structured records and knowledge sources that workflows depend on.', example: 'e.g. Airtable, Sheets, vector databases' },
    { icon: 'Agent', title: 'Agents', desc: 'AI systems that can plan, call tools, and complete multi-step tasks.', example: 'e.g. research assistant, support copilot' },
    { icon: 'Ops', title: 'Monitoring', desc: 'Logs, retries, alerts, and human review for production reliability.', example: 'e.g. error handling, audit trails, dashboards' },
  ],
  challenges: [
    { icon: 'Scope', text: 'Unclear business processes create fragile automations' },
    { icon: 'Data', text: 'Messy inputs break extraction and routing logic' },
    { icon: 'Trust', text: 'AI outputs need validation before high-impact actions' },
    { icon: 'Ops', text: 'Retries, rate limits, and logs matter once workflows go live' },
  ],
  opportunity: {
    text:
      'AI Automation is a high-leverage skill for builders, operators, freelancers, and founders. The best practitioners understand both the business process and the technical workflow, then package the result as a visible, maintainable system.',
    paths: [
      { icon: 'NoCode', title: 'No-Code Automation Builder' },
      { icon: 'API', title: 'AI API Developer' },
      { icon: 'Agent', title: 'Agent Workflow Designer' },
      { icon: 'Ops', title: 'Business Automation Consultant' },
      { icon: 'RAG', title: 'RAG / Knowledge Systems Builder' },
    ],
  },
};

const basePhases: Phase[] = [
  {
    id: 'phase1',
    number: '01',
    title: 'No-Code / Low-Code Automation',
    weeksRange: 'Weeks 1-4',
    intro: 'Start with visual automation tools so you can think in triggers, actions, data flow, and failure paths before writing code.',
    weeks: [
      { id: 'p1w1', label: 'Week 1', title: 'Automation Foundations', groups: [
        learn(['What triggers, actions, filters, and paths are', 'How chatbots, agents, workflows, and RPA differ', 'How to map a manual process before automating it']),
        build(['A simple trigger-action workflow from a form submission']),
        goal('Explain when to use a workflow, chatbot, agent, or RPA-style automation.'),
      ]},
      { id: 'p1w2', label: 'Week 2', title: 'Zapier and Make', groups: [
        learn(['Zapier Zaps, paths, filters, formatters, and transfers', 'Make scenarios, routers, iterators, and error handlers', 'How to compare no-code platforms by use case']),
        build(['A lead capture workflow that routes different leads to different actions']),
      ]},
      { id: 'p1w3', label: 'Week 3', title: 'n8n and Webhooks', groups: [
        learn(['n8n nodes, credentials, executions, and self-hosted thinking', 'Incoming webhooks and outgoing HTTP requests', 'Secrets, environment variables, and safe test data']),
        build(['A webhook workflow that receives JSON, enriches it, and stores the result']),
      ]},
      { id: 'p1w4', label: 'Week 4', title: 'Airtable and Google Sheets Automation', groups: [
        learn(['Airtable tables, views, forms, interfaces, and automations', 'Google Sheets formulas, Apps Script basics, and scheduled triggers', 'Choosing between spreadsheet, database, and CRM backends']),
        output(['A working mini CRM with automated follow-up tasks']),
      ]},
    ],
  },
  {
    id: 'phase2',
    number: '02',
    title: 'Prompt Engineering',
    weeksRange: 'Weeks 5-7',
    intro: 'Good automations need predictable AI behavior. This phase turns prompting from clever wording into reusable instructions, schemas, and test cases.',
    weeks: [
      { id: 'p2w1', label: 'Week 5', title: 'Strong Prompts and Instructions', groups: [
        learn(['Task, context, constraints, examples, and evaluation criteria', 'System vs user instructions and role boundaries', 'How to reduce ambiguity in business prompts']),
        build(['A reusable prompt for classifying inbound customer messages']),
      ]},
      { id: 'p2w2', label: 'Week 6', title: 'Structured Outputs', groups: [
        learn(['JSON-first prompting and schema thinking', 'Validation, missing fields, and confidence scores', 'How structured outputs connect to workflow branches']),
        build(['A prompt that extracts invoice fields into clean JSON']),
      ]},
      { id: 'p2w3', label: 'Week 7', title: 'Prompt Templates and Testing', groups: [
        learn(['Prompt variables, reusable templates, and example libraries', 'Golden test cases for AI workflow quality', 'Common failure modes: hallucination, overreach, and format drift']),
        output(['A prompt template pack with tests and expected outputs']),
      ]},
    ],
  },
  {
    id: 'phase3',
    number: '03',
    title: 'AI APIs',
    weeksRange: 'Weeks 8-11',
    intro: 'Now move from clicking tools to building programmable AI automations with APIs, structured responses, embeddings, and robust error handling.',
    weeks: [
      { id: 'p3w1', label: 'Week 8', title: 'OpenAI API Basics', groups: [
        learn(['Requests, responses, models, tokens, and cost awareness', 'API keys, environment variables, and basic security', 'How to call AI from a script or backend endpoint']),
        build(['A small CLI or API endpoint that summarizes text']),
      ]},
      { id: 'p3w2', label: 'Week 9', title: 'JSON Outputs and Tool Calling', groups: [
        learn(['Structured outputs for reliable parsing', 'Function calling / tools as typed workflow actions', 'Guardrails for tool arguments and user intent']),
        build(['A lead qualification function that returns score, reason, and next action']),
      ]},
      { id: 'p3w3', label: 'Week 10', title: 'Embeddings and Semantic Search', groups: [
        learn(['What embeddings represent and when to use them', 'Chunking documents and storing vectors', 'Similarity search for FAQs, policies, and product docs']),
        build(['A searchable knowledge base over a small document set']),
      ]},
      { id: 'p3w4', label: 'Week 11', title: 'Error Handling and Reliability', groups: [
        learn(['Retries, timeouts, rate limits, and idempotency', 'Logging AI inputs and outputs safely', 'Fallback paths and human review queues']),
        output(['A reliable AI API wrapper with validation and logs']),
      ]},
    ],
  },
  {
    id: 'phase4',
    number: '04',
    title: 'AI Agents',
    weeksRange: 'Weeks 12-14',
    intro: 'Agents are useful when a task needs planning, tool use, memory, and step-by-step progress. This phase focuses on controlled, auditable agent workflows.',
    weeks: [
      { id: 'p4w1', label: 'Week 12', title: 'Agent Planning', groups: [
        learn(['Planner-executor patterns and task decomposition', 'When an agent is useful vs when a workflow is enough', 'How to set stopping conditions and success criteria']),
        build(['A research planner that breaks a request into actionable steps']),
      ]},
      { id: 'p4w2', label: 'Week 13', title: 'Tool Use and Memory', groups: [
        learn(['Tool definitions, arguments, permissions, and result handling', 'Short-term vs long-term memory in workflows', 'How to avoid unsafe tool execution']),
        build(['An assistant that reads records, drafts an action, and asks before sending']),
      ]},
      { id: 'p4w3', label: 'Week 14', title: 'Human Approval Steps', groups: [
        learn(['Approval checkpoints for email, invoices, CRM updates, and payments', 'Escalation rules and confidence thresholds', 'Audit trails for agent decisions']),
        output(['A multi-step agent workflow with an approval gate']),
      ]},
    ],
  },
  {
    id: 'phase5',
    number: '05',
    title: 'Business Automation Projects',
    weeksRange: 'Weeks 15-18',
    intro: 'This is where the roadmap becomes portfolio material. Build practical automations that match common freelance and business needs.',
    weeks: [
      { id: 'p5w1', label: 'Week 15', title: 'Lead Qualification Bot', groups: [
        learn(['Lead scoring criteria and routing logic', 'CRM fields, enrichment, and follow-up timing', 'How to measure lead quality and conversion']),
        build(['A bot that scores leads and creates CRM tasks']),
      ]},
      { id: 'p5w2', label: 'Week 16', title: 'Email Reply Assistant', groups: [
        learn(['Intent classification, tone matching, and reply drafting', 'Inbox labels, escalation, and approval before send', 'Handling sensitive or angry customer messages']),
        build(['An assistant that drafts replies and waits for human approval']),
      ]},
      { id: 'p5w3', label: 'Week 17', title: 'Invoice and Data Extractor', groups: [
        learn(['Document intake, OCR boundaries, and field extraction', 'Validation against totals, dates, vendors, and missing values', 'Storing clean records in Sheets or Airtable']),
        build(['An invoice extractor that outputs validated structured data']),
      ]},
      { id: 'p5w4', label: 'Week 18', title: 'Support and Content Pipelines', groups: [
        learn(['Customer support triage and knowledge-base suggestions', 'Social media content pipelines from idea to approval', 'Reusing workflow patterns across industries']),
        output(['Two polished business workflow case studies']),
      ]},
    ],
  },
  {
    id: 'phase6',
    number: '06',
    title: 'Advanced Automation',
    weeksRange: 'Weeks 19-21',
    intro: 'Add the production skills that make automations durable: RAG, browser automation, scheduled jobs, monitoring, and logs.',
    weeks: [
      { id: 'p6w1', label: 'Week 19', title: 'Vector Databases and RAG', groups: [
        learn(['Vector database concepts and metadata filters', 'Retrieval augmented generation patterns', 'Evaluating answer quality and source grounding']),
        build(['A RAG assistant over company policy or product docs']),
      ]},
      { id: 'p6w2', label: 'Week 20', title: 'Browser Automation and Scheduled Jobs', groups: [
        learn(['When browser automation is appropriate', 'Playwright basics for controlled browser tasks', 'Cron jobs, queues, and scheduled workflow runs']),
        build(['A scheduled workflow that checks a page or inbox and logs results']),
      ]},
      { id: 'p6w3', label: 'Week 21', title: 'Monitoring, Logs, and Maintenance', groups: [
        learn(['Execution logs, error dashboards, and alerting', 'Versioning prompts and workflows', 'Maintenance plans for client automations']),
        output(['A production readiness checklist for every workflow']),
      ]},
    ],
  },
  {
    id: 'phase7',
    number: '07',
    title: 'Portfolio and Freelancing',
    weeksRange: 'Weeks 22-24',
    intro: 'Package your skills into proof, offers, pricing, discovery calls, case studies, and deployment habits clients can trust.',
    weeks: [
      { id: 'p7w1', label: 'Week 22', title: 'Portfolio Projects', groups: [
        learn(['How to document workflow problem, design, screenshots, and result', 'Writing simple case studies without exposing private data', 'Choosing demo projects that clients instantly understand']),
        output(['A portfolio page with three automation case studies']),
      ]},
      { id: 'p7w2', label: 'Week 23', title: 'Pricing and Client Discovery', groups: [
        learn(['Fixed-price, retainer, and audit offers', 'Discovery questions that reveal automation value', 'Scoping risk, access needs, and maintenance expectations']),
        build(['A discovery checklist and pricing menu']),
      ]},
      { id: 'p7w3', label: 'Week 24', title: 'Deployment and Client Handoff', groups: [
        learn(['Hosting, credentials, ownership, and documentation', 'Client training and approval workflows', 'Post-launch monitoring and improvement cycles']),
        output(['A complete client handoff template and deployment checklist']),
      ]},
    ],
  },
];

type WeekDetails = Pick<Week, 'difficulty' | 'estimatedTime' | 'resources' | 'lab' | 'checkpoints'>;

const resource = (title: string, source: string, url: string): ResourceLink => ({ title, source, url });

const trustedResources = {
  zapierLearn: resource('Automation basics and Zapier guides', 'Zapier Learn', 'https://zapier.com/learn'),
  zapierHelp: resource('Zapier Help Center', 'Zapier', 'https://help.zapier.com/hc/en-us'),
  makeAcademy: resource('Make Academy', 'Make', 'https://www.make.com/en/academy'),
  makeHelp: resource('Make Help Center', 'Make', 'https://www.make.com/en/help'),
  n8nDocs: resource('n8n documentation', 'n8n Docs', 'https://docs.n8n.io/'),
  airtableGuide: resource('Airtable guides', 'Airtable', 'https://www.airtable.com/guides'),
  googleAppsScript: resource('Google Apps Script overview', 'Google Developers', 'https://developers.google.com/apps-script'),
  webhookSite: resource('Webhook testing tool', 'Webhook.site', 'https://webhook.site/'),
  promptGuide: resource('Prompt engineering guide', 'OpenAI Docs', 'https://platform.openai.com/docs/guides/prompt-engineering'),
  structuredOutputs: resource('Structured outputs', 'OpenAI Docs', 'https://platform.openai.com/docs/guides/structured-outputs'),
  openaiApi: resource('OpenAI API documentation', 'OpenAI Docs', 'https://platform.openai.com/docs'),
  openaiTools: resource('Function calling and tools', 'OpenAI Docs', 'https://platform.openai.com/docs/guides/function-calling'),
  embeddings: resource('Embeddings guide', 'OpenAI Docs', 'https://platform.openai.com/docs/guides/embeddings'),
  mdnHttp: resource('HTTP overview', 'MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'),
  restApis: resource('REST API concepts', 'Red Hat', 'https://www.redhat.com/en/topics/api/what-is-a-rest-api'),
  aiSdk: resource('AI SDK documentation', 'Vercel', 'https://sdk.vercel.ai/docs'),
  langGraph: resource('LangGraph documentation', 'LangChain', 'https://langchain-ai.github.io/langgraph/'),
  pineconeLearn: resource('Vector database learning center', 'Pinecone', 'https://www.pinecone.io/learn/'),
  qdrantDocs: resource('Qdrant documentation', 'Qdrant', 'https://qdrant.tech/documentation/'),
  playwrightDocs: resource('Playwright documentation', 'Playwright', 'https://playwright.dev/docs/intro'),
  githubActions: resource('GitHub Actions documentation', 'GitHub Docs', 'https://docs.github.com/en/actions'),
  cronGuide: resource('Cron expression guide', 'crontab guru', 'https://crontab.guru/'),
  postmanLearn: resource('API learning center', 'Postman', 'https://learning.postman.com/'),
  hubspotLead: resource('Lead scoring overview', 'HubSpot', 'https://blog.hubspot.com/marketing/lead-scoring-instructions'),
  gmailHelp: resource('Gmail filters and labels', 'Google Help', 'https://support.google.com/mail/answer/6579'),
  stripeInvoices: resource('Invoice API concepts', 'Stripe Docs', 'https://docs.stripe.com/invoicing'),
  notionHelp: resource('Notion guides', 'Notion', 'https://www.notion.com/help/guides'),
};

const weekDetails: Record<string, WeekDetails> = {
  p1w1: {
    difficulty: 'Beginner',
    estimatedTime: '4-6 hours',
    resources: [trustedResources.zapierLearn, trustedResources.mdnHttp],
    lab: {
      title: 'Map and automate one simple personal process',
      tool: 'Flowchart tool, Google Form, Zapier or Make',
      expectedOutput: 'A process map plus a working trigger-action automation.',
    },
    checkpoints: ['Define trigger, action, filter, and path', 'Explain chatbot vs agent vs workflow vs RPA', 'Document one manual process clearly'],
  },
  p1w2: {
    difficulty: 'Beginner',
    estimatedTime: '6-8 hours',
    resources: [trustedResources.zapierHelp, trustedResources.makeAcademy],
    lab: {
      title: 'Build a lead routing workflow',
      tool: 'Zapier or Make, Google Forms, Gmail or Slack',
      expectedOutput: 'A workflow that routes hot, warm, and low-fit leads to different actions.',
    },
    checkpoints: ['Use filters or routers', 'Format fields before sending them', 'Test success and failure cases'],
  },
  p1w3: {
    difficulty: 'Beginner',
    estimatedTime: '6-8 hours',
    resources: [trustedResources.n8nDocs, trustedResources.webhookSite],
    lab: {
      title: 'Receive and transform webhook data',
      tool: 'n8n, Webhook.site, HTTP Request node',
      expectedOutput: 'A saved execution showing incoming JSON, transformed fields, and stored output.',
    },
    checkpoints: ['Create a webhook endpoint', 'Send a test JSON payload', 'Protect credentials and test data'],
  },
  p1w4: {
    difficulty: 'Beginner',
    estimatedTime: '6-9 hours',
    resources: [trustedResources.airtableGuide, trustedResources.googleAppsScript],
    lab: {
      title: 'Create a mini CRM backend',
      tool: 'Airtable or Google Sheets, automation rules',
      expectedOutput: 'A table with leads, status changes, automated reminders, and owner assignment.',
    },
    checkpoints: ['Choose useful fields and views', 'Trigger automation from a status change', 'Avoid duplicate or messy records'],
  },
  p2w1: {
    difficulty: 'Beginner',
    estimatedTime: '4-6 hours',
    resources: [trustedResources.promptGuide],
    lab: {
      title: 'Write a classification prompt',
      tool: 'ChatGPT or API playground',
      expectedOutput: 'A tested prompt that labels messages by intent, urgency, and department.',
    },
    checkpoints: ['Separate task and context', 'Set clear output rules', 'Test edge cases'],
  },
  p2w2: {
    difficulty: 'Beginner',
    estimatedTime: '5-7 hours',
    resources: [trustedResources.structuredOutputs, trustedResources.openaiApi],
    lab: {
      title: 'Extract structured invoice data',
      tool: 'OpenAI playground or no-code AI step',
      expectedOutput: 'Valid JSON with vendor, date, line items, total, currency, and missing-field notes.',
    },
    checkpoints: ['Define a schema before prompting', 'Handle unknown fields', 'Use confidence or validation notes'],
  },
  p2w3: {
    difficulty: 'Beginner',
    estimatedTime: '5-7 hours',
    resources: [trustedResources.promptGuide, trustedResources.notionHelp],
    lab: {
      title: 'Create a prompt template library',
      tool: 'Notion, Markdown, or Airtable',
      expectedOutput: 'Five templates with variables, examples, and expected outputs.',
    },
    checkpoints: ['Use variables consistently', 'Store test cases beside prompts', 'Version changes when quality improves'],
  },
  p3w1: {
    difficulty: 'Intermediate',
    estimatedTime: '6-9 hours',
    resources: [trustedResources.openaiApi, trustedResources.postmanLearn],
    lab: {
      title: 'Call an AI model from code or Postman',
      tool: 'OpenAI API, Postman, Node.js or Python',
      expectedOutput: 'A working request that returns a summary and logs token/cost notes.',
    },
    checkpoints: ['Keep API keys out of code', 'Read response objects', 'Estimate cost before scaling'],
  },
  p3w2: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.structuredOutputs, trustedResources.openaiTools],
    lab: {
      title: 'Build a lead scoring API function',
      tool: 'OpenAI API, local script, JSON schema',
      expectedOutput: 'A typed JSON result with score, fit reason, risk notes, and next action.',
    },
    checkpoints: ['Validate JSON before using it', 'Constrain tool arguments', 'Route workflow branches from structured fields'],
  },
  p3w3: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.embeddings, trustedResources.pineconeLearn],
    lab: {
      title: 'Build semantic search for a document folder',
      tool: 'Embeddings, local JSON store or vector database',
      expectedOutput: 'A search script that returns relevant chunks with source names.',
    },
    checkpoints: ['Chunk documents intentionally', 'Store source metadata', 'Test search quality with real questions'],
  },
  p3w4: {
    difficulty: 'Intermediate',
    estimatedTime: '6-9 hours',
    resources: [trustedResources.openaiApi, trustedResources.mdnHttp],
    lab: {
      title: 'Wrap an AI API call safely',
      tool: 'Node.js or Python, logger, retry logic',
      expectedOutput: 'A reusable wrapper with timeout, retry, validation, and error messages.',
    },
    checkpoints: ['Handle rate limits', 'Log enough context to debug', 'Create a fallback path for failed calls'],
  },
  p4w1: {
    difficulty: 'Intermediate',
    estimatedTime: '6-8 hours',
    resources: [trustedResources.langGraph, trustedResources.aiSdk],
    lab: {
      title: 'Design a controlled research agent',
      tool: 'LangGraph, AI SDK, or diagramming tool',
      expectedOutput: 'A plan-execute-review loop with stopping rules and success criteria.',
    },
    checkpoints: ['Know when not to use an agent', 'Break tasks into steps', 'Set clear stop conditions'],
  },
  p4w2: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.openaiTools, trustedResources.langGraph],
    lab: {
      title: 'Create an approval-aware tool workflow',
      tool: 'OpenAI tools, Airtable, Gmail draft or mock API',
      expectedOutput: 'An agent drafts an action, records reasoning, and waits for approval.',
    },
    checkpoints: ['Limit tool permissions', 'Record tool results', 'Separate draft actions from final actions'],
  },
  p4w3: {
    difficulty: 'Intermediate',
    estimatedTime: '6-8 hours',
    resources: [trustedResources.n8nDocs, trustedResources.makeHelp],
    lab: {
      title: 'Add human approval to a workflow',
      tool: 'n8n, Make, Slack, Gmail, or Airtable',
      expectedOutput: 'A workflow that pauses for approval before sending or updating records.',
    },
    checkpoints: ['Define approval thresholds', 'Store who approved what', 'Escalate low-confidence cases'],
  },
  p5w1: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.hubspotLead, trustedResources.airtableGuide],
    lab: {
      title: 'Ship a lead qualification bot',
      tool: 'Form, Airtable or CRM, OpenAI, Zapier/Make/n8n',
      expectedOutput: 'A demo where new leads are scored, tagged, assigned, and followed up.',
    },
    checkpoints: ['Define scoring rules', 'Route leads by score', 'Keep explanations visible to the sales owner'],
  },
  p5w2: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.gmailHelp, trustedResources.promptGuide],
    lab: {
      title: 'Draft email replies with approval',
      tool: 'Gmail, OpenAI, Airtable or Sheet review queue',
      expectedOutput: 'Incoming emails are categorized and reply drafts are queued for approval.',
    },
    checkpoints: ['Never auto-send sensitive replies', 'Escalate angry or legal messages', 'Preserve the original message context'],
  },
  p5w3: {
    difficulty: 'Intermediate',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.structuredOutputs, trustedResources.stripeInvoices],
    lab: {
      title: 'Extract invoice fields into a table',
      tool: 'PDF/image input, OpenAI, Airtable or Sheets',
      expectedOutput: 'Validated invoice records with totals, missing fields, and review status.',
    },
    checkpoints: ['Validate totals and dates', 'Mark uncertain fields', 'Keep original file links'],
  },
  p5w4: {
    difficulty: 'Intermediate',
    estimatedTime: '8-12 hours',
    resources: [trustedResources.notionHelp, trustedResources.zapierLearn],
    lab: {
      title: 'Build support and content workflow demos',
      tool: 'Help desk mock data, Notion, Airtable, social scheduler mock',
      expectedOutput: 'Two case studies showing before/after process, screenshots, and result metrics.',
    },
    checkpoints: ['Show the business problem clearly', 'Include screenshots', 'Explain limits and human review points'],
  },
  p6w1: {
    difficulty: 'Advanced',
    estimatedTime: '8-12 hours',
    resources: [trustedResources.pineconeLearn, trustedResources.qdrantDocs],
    lab: {
      title: 'Build a RAG assistant',
      tool: 'Vector database, embeddings, OpenAI API',
      expectedOutput: 'An assistant that answers from sources and shows supporting document references.',
    },
    checkpoints: ['Use metadata filters', 'Return sources with answers', 'Test hallucination-prone questions'],
  },
  p6w2: {
    difficulty: 'Advanced',
    estimatedTime: '7-10 hours',
    resources: [trustedResources.playwrightDocs, trustedResources.githubActions, trustedResources.cronGuide],
    lab: {
      title: 'Run a scheduled browser or data check',
      tool: 'Playwright, GitHub Actions, cron, or n8n scheduler',
      expectedOutput: 'A scheduled job that captures a result, stores logs, and alerts on failure.',
    },
    checkpoints: ['Prefer APIs when available', 'Handle login and selectors carefully', 'Log each run outcome'],
  },
  p6w3: {
    difficulty: 'Advanced',
    estimatedTime: '6-9 hours',
    resources: [trustedResources.githubActions, trustedResources.n8nDocs],
    lab: {
      title: 'Create a production readiness checklist',
      tool: 'Markdown, Notion, or Airtable',
      expectedOutput: 'A reusable checklist covering credentials, logging, retries, owners, and rollback.',
    },
    checkpoints: ['Know who owns failures', 'Version workflow changes', 'Set maintenance and review cadence'],
  },
  p7w1: {
    difficulty: 'Beginner',
    estimatedTime: '5-8 hours',
    resources: [trustedResources.notionHelp, trustedResources.zapierLearn],
    lab: {
      title: 'Publish three portfolio case studies',
      tool: 'Notion, GitHub, personal website, or PDF',
      expectedOutput: 'Case studies with problem, workflow diagram, screenshots, tools, and results.',
    },
    checkpoints: ['Make the value obvious', 'Hide private data', 'Link proof and screenshots'],
  },
  p7w2: {
    difficulty: 'Beginner',
    estimatedTime: '5-8 hours',
    resources: [trustedResources.hubspotLead, trustedResources.airtableGuide],
    lab: {
      title: 'Create a freelance offer kit',
      tool: 'Docs, spreadsheet, CRM tracker',
      expectedOutput: 'Discovery questions, pricing tiers, proposal outline, and client tracker.',
    },
    checkpoints: ['Ask process-first questions', 'Scope access and risk', 'Offer maintenance separately'],
  },
  p7w3: {
    difficulty: 'Intermediate',
    estimatedTime: '6-9 hours',
    resources: [trustedResources.githubActions, trustedResources.makeHelp],
    lab: {
      title: 'Prepare deployment and handoff docs',
      tool: 'Markdown, Loom-style walkthrough, environment checklist',
      expectedOutput: 'A handoff pack with setup, credentials, testing, monitoring, and support notes.',
    },
    checkpoints: ['Document owners and credentials', 'Include test instructions', 'Create a post-launch support plan'],
  },
};

function addLearningDetails(week: Week): Week {
  return { ...week, ...weekDetails[week.id] };
}

export const phases: Phase[] = basePhases.map((phase) => ({
  ...phase,
  lastUpdated: 'July 2026',
  weeks: phase.weeks.map(addLearningDetails),
}));

export const specializationTracks: SpecializationTrack[] = [
  {
    title: 'No-Code Automation Builder',
    focus: 'Build fast client workflows with Zapier, Make, n8n, Airtable, and Sheets.',
    skills: ['Triggers', 'Routers', 'Webhooks', 'Approvals'],
    starterProject: 'A lead routing workflow with CRM updates and approval notes.',
  },
  {
    title: 'AI API Developer',
    focus: 'Use AI APIs, structured outputs, embeddings, and robust backend logic.',
    skills: ['OpenAI API', 'JSON schemas', 'Embeddings', 'Error handling'],
    starterProject: 'A reliable lead qualification API with validation and logs.',
  },
  {
    title: 'Agent Workflow Designer',
    focus: 'Design controlled agents that plan, use tools, remember context, and ask for approval.',
    skills: ['Planning', 'Tool use', 'Memory', 'Human-in-the-loop'],
    starterProject: 'An approval-aware email or research assistant.',
  },
  {
    title: 'Business Automation Consultant',
    focus: 'Find operational bottlenecks, scope automation projects, and deliver measurable outcomes.',
    skills: ['Discovery', 'Process mapping', 'Pricing', 'Client handoff'],
    starterProject: 'A client-ready automation audit with prioritized recommendations.',
  },
  {
    title: 'RAG and Knowledge Systems',
    focus: 'Build assistants grounded in documents, databases, and searchable company knowledge.',
    skills: ['Chunking', 'Vector DBs', 'Retrieval', 'Evaluation'],
    starterProject: 'A source-grounded FAQ assistant for a product or policy library.',
  },
  {
    title: 'Automation Operations',
    focus: 'Make workflows production-ready with monitoring, logs, retries, and maintenance plans.',
    skills: ['Logging', 'Retries', 'Scheduling', 'Runbooks'],
    starterProject: 'A workflow monitoring dashboard plus readiness checklist.',
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Lead Qualification Bot',
    outcome: 'Scores inbound leads, explains fit, assigns owner, and creates the next follow-up step.',
    proof: 'Workflow diagram, scoring rubric, CRM screenshots, and sample lead outputs.',
  },
  {
    title: 'Email Reply Assistant',
    outcome: 'Classifies inbound emails, drafts replies, and queues sensitive messages for review.',
    proof: 'Prompt template, approval queue, before/after inbox screenshots, and safety rules.',
  },
  {
    title: 'Invoice Data Extractor',
    outcome: 'Extracts invoice fields into structured records with validation and review status.',
    proof: 'Sample PDF, JSON output, validation rules, and destination table screenshots.',
  },
  {
    title: 'Customer Support Workflow',
    outcome: 'Triages support requests, suggests knowledge-base answers, and escalates urgent issues.',
    proof: 'Ticket categories, routing logic, response drafts, and escalation examples.',
  },
  {
    title: 'Social Media Content Pipeline',
    outcome: 'Turns content ideas into drafts, approval tasks, publishing assets, and status tracking.',
    proof: 'Editorial board, AI draft examples, approval states, and content calendar.',
  },
  {
    title: 'RAG Knowledge Assistant',
    outcome: 'Answers questions from a source-grounded knowledge base with references.',
    proof: 'Document set, retrieval examples, evaluation questions, and source-linked answers.',
  },
];

export const tocItems: TocItem[] = [
  { id: 'foundation', number: '00', title: 'What is AI Automation?', subtitle: 'Foundations' },
  ...phases.map((p) => ({ id: p.id, number: p.number, title: p.title, subtitle: p.weeksRange })),
  { id: 'tracks', number: '08', title: 'Specialization Tracks', subtitle: 'Choose a direction' },
  { id: 'projects', number: '09', title: 'Portfolio Projects', subtitle: 'Proof of skill' },
];

function countListItems(): number {
  let count = foundationData.protects.items.length + foundationData.matters.items.length;
  phases.forEach((p) =>
    p.weeks.forEach((w) =>
      w.groups.forEach((g) => {
        if (g.type === 'list') count += g.items?.length ?? 0;
      })
    )
  );
  return count;
}

export const TOTAL_ITEMS = countListItems();
