export const SITE_CONFIG = {
  name: 'GENESIS',
  tagline: 'Intelligence. Automation. Transformation.',
  description: 'At GENESIS, we are building intelligent technology that connects artificial intelligence, automation and professional expertise to simplify complexity and redefine how businesses operate.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://genesis.com',
  contactEmail: process.env.CONTACT_EMAIL || 'contact@genesis.com',
  social: {
    linkedin: '',
    twitter: '',
    github: '',
  },
} as const

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Technology', href: '/technology' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Our Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
] as const

export const TECHNOLOGY_PILLARS = [
  {
    title: 'Artificial Intelligence',
    description: 'Intelligent systems designed to analyse, interpret and assist.',
    icon: 'Brain',
  },
  {
    title: 'Intelligent Automation',
    description: 'Reducing repetitive work through structured automated processes.',
    icon: 'Workflow',
  },
  {
    title: 'Financial Intelligence',
    description: 'Making financial information easier to analyse, understand and verify.',
    icon: 'TrendingUp',
  },
  {
    title: 'Advanced Analytics',
    description: 'Transforming complex datasets into meaningful insights.',
    icon: 'BarChart3',
  },
  {
    title: 'Connected Workflows',
    description: 'Bringing information and processes together through integrated systems.',
    icon: 'Network',
  },
  {
    title: 'Enterprise Technology',
    description: 'Developing scalable solutions for evolving business needs.',
    icon: 'Building2',
  },
] as const

export const PRODUCTS = [
  {
    id: 'reconcile',
    name: 'GENESIS RECONCILE',
    shortName: 'Reconcile',
    tagline: 'Bank and Books Reconciliation Automation',
    description: 'Intelligent financial reconciliation designed to simplify transaction matching, identify discrepancies and generate structured reconciliation workpapers.',
    capabilities: [
      'Multi-pass transaction matching',
      'Reference-based matching',
      'Exception identification',
      'Reversal analysis',
      'Reconciliation summaries',
      'Workpaper generation',
    ],
    status: 'Developed',
    category: 'Financial Operations',
    icon: 'Receipt',
  },
  {
    id: 'cce',
    name: 'GENESIS CCE',
    shortName: 'CCE',
    tagline: 'CCE Audit Automation',
    description: 'Structured audit analytics for account classification, confirmations, balance movement and audit workpaper preparation.',
    capabilities: [
      'Account classification',
      'Confirmation management',
      'Balance movement analysis',
      'Audit workpaper generation',
      'Exception tracking',
      'Compliance verification',
    ],
    status: 'Developed',
    category: 'Professional Technology',
    icon: 'FileCheck',
  },
  {
    id: 'payroll',
    name: 'GENESIS PAYROLL',
    shortName: 'Payroll',
    tagline: 'Payroll Audit and Analytics',
    description: 'Technology for analysing employee movements, payroll variations, statutory contributions and payroll-related exceptions.',
    capabilities: [
      'Employee movement tracking',
      'Payroll variation analysis',
      'Statutory contribution verification',
      'Exception identification',
      'Historical comparison',
      'Audit trail generation',
    ],
    status: 'Developed',
    category: 'Professional Technology',
    icon: 'Users',
  },
  {
    id: 'expense',
    name: 'GENESIS EXPENSE',
    shortName: 'Expense',
    tagline: 'Expense Audit Automation',
    description: 'Intelligent expense analytics covering branch-wise expenses, GL reconciliation, sampling and audit risk assessment.',
    capabilities: [
      'Branch-wise expense analysis',
      'GL reconciliation',
      'Statistical sampling',
      'Risk assessment',
      'Policy compliance checking',
      'Exception reporting',
    ],
    status: 'Developed',
    category: 'Professional Technology',
    icon: 'CreditCard',
  },
  {
    id: 'gl',
    name: 'GENESIS GL',
    shortName: 'GL',
    tagline: 'General Ledger Audit Intelligence',
    description: 'An organised audit workspace for financial ledger verification, financial statement mapping, party-wise analysis and audit documentation.',
    capabilities: [
      'Ledger verification',
      'Financial statement mapping',
      'Party-wise analysis',
      'Trial balance reconciliation',
      'Journal entry testing',
      'Documentation management',
    ],
    status: 'Developed',
    category: 'Professional Technology',
    icon: 'BookOpen',
  },
  {
    id: 'revenue',
    name: 'GENESIS REVENUE',
    shortName: 'Revenue',
    tagline: 'Revenue Audit Analytics',
    description: 'Structured revenue testing and analytics designed to identify anomalies, validate transaction data and support revenue audit procedures.',
    capabilities: [
      'Revenue recognition testing',
      'Anomaly detection',
      'Transaction validation',
      'Trend analysis',
      'Cut-off testing',
      'Substantive procedures',
    ],
    status: 'Developed',
    category: 'Professional Technology',
    icon: 'DollarSign',
  },
  {
    id: 'rou',
    name: 'GENESIS ROU',
    shortName: 'ROU',
    tagline: 'Lease Accounting Automation',
    description: 'Lease management and accounting automation supporting Ind AS 116 workflows, reassessments, modifications and structured lease records.',
    capabilities: [
      'Ind AS 116 compliance',
      'Lease modification tracking',
      'Reassessment automation',
      'ROU asset calculation',
      'Lease liability scheduling',
      'Disclosure generation',
    ],
    status: 'Developed',
    category: 'Financial Operations',
    icon: 'FileText',
  },
  {
    id: 'ifc',
    name: 'GENESIS IFC',
    shortName: 'IFC',
    tagline: 'Internal Financial Controls',
    description: 'Collaborative internal financial control workflows with structured checklists, reviews, approvals and audit trails.',
    capabilities: [
      'Control checklist management',
      'Review workflows',
      'Approval tracking',
      'Evidence collection',
      'Audit trail maintenance',
      'Compliance monitoring',
    ],
    status: 'Developed',
    category: 'Enterprise Automation',
    icon: 'Shield',
  },
] as const

export const WHY_GENESIS = [
  {
    title: 'Accuracy by Design',
    description: 'Every system we build is engineered with precision and verification at its core.',
    icon: 'Target',
  },
  {
    title: 'Intelligence at the Core',
    description: 'Artificial intelligence that understands context and learns from patterns.',
    icon: 'Brain',
  },
  {
    title: 'Automation with Purpose',
    description: 'Automating what matters while preserving human judgment where it counts.',
    icon: 'Zap',
  },
  {
    title: 'Simplicity in Complexity',
    description: 'Making complex processes accessible through intuitive technology.',
    icon: 'Layers',
  },
  {
    title: 'Technology That Scales',
    description: 'Built to grow with your organization and adapt to changing needs.',
    icon: 'TrendingUp',
  },
  {
    title: 'Innovation Without Boundaries',
    description: 'Constantly exploring new possibilities in automation and intelligence.',
    icon: 'Rocket',
  },
] as const

export const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Understand Complexity',
    description: 'We study the intricacies of professional workflows to identify pain points and opportunities.',
  },
  {
    number: '02',
    title: 'Identify Opportunities',
    description: 'We pinpoint where technology can create meaningful impact and efficiency.',
  },
  {
    number: '03',
    title: 'Engineer Intelligent Solutions',
    description: 'We design and develop systems that combine AI with automation.',
  },
  {
    number: '04',
    title: 'Automate Repetitive Processes',
    description: 'We implement automation that reduces manual work and increases accuracy.',
  },
  {
    number: '05',
    title: 'Continuously Improve',
    description: 'We refine and enhance our solutions based on real-world usage and feedback.',
  },
] as const

export const SOLUTION_CATEGORIES = [
  {
    title: 'Professional Technology',
    description: 'Intelligent automation for professional services',
    solutions: [
      'Audit Automation',
      'Accounting Automation',
      'Tax Technology',
    ],
    icon: 'Briefcase',
  },
  {
    title: 'Financial Operations',
    description: 'Technology for financial processes and analysis',
    solutions: [
      'Reconciliation',
      'Fixed Asset Management',
      'Financial Analytics',
    ],
    icon: 'TrendingUp',
  },
  {
    title: 'Enterprise Automation',
    description: 'Scalable automation for business processes',
    solutions: [
      'Compliance Workflows',
      'Document Processing',
      'Business Process Automation',
    ],
    icon: 'Building2',
  },
  {
    title: 'AI and Intelligence',
    description: 'Advanced AI capabilities and data intelligence',
    solutions: [
      'Intelligent Analysis',
      'AI Assistance',
      'Data Intelligence',
    ],
    icon: 'Brain',
  },
] as const

export const ENQUIRY_TYPES = [
  'General Enquiry',
  'Product Enquiry',
  'Business Collaboration',
  'Technology Partnership',
  'Career Enquiry',
  'Other',
] as const
