import { useEffect, useState } from 'react'
import {
  Apple,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  Download,
  FileText,
  Globe,
  Headphones,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  Menu,
  X,
  Phone,
  RefreshCw,
  Shield,
  Smartphone,
  Users,
  Zap,
  UserPlus,
  Wallet,
  Landmark,
  PiggyBank,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  Calculator,
  CreditCard,
  Banknote,
  Send,
  Radio,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  BarChart3,
  Truck,
  Factory,
  Plane,
  LineChart,
  Handshake,
  Scale,
  Database,
  Cloud,
  MessageSquare,
  QrCode,
  Fingerprint,
  Percent,
  DollarSign,
  Coins,
  Timer,
  Receipt,
  Settings,
} from 'lucide-react'

type ExchangeRate = {
  buying: number
  selling: number
  change: string
}

const exchangeRates: Record<string, ExchangeRate> = {
  USD: { buying: 1280.35, selling: 1305.0, change: '+0.5%' },
  GBP: { buying: 1620.75, selling: 1645.3, change: '+0.3%' },
  EUR: { buying: 1380.2, selling: 1405.45, change: '-0.2%' },
  ZAR: { buying: 68.5, selling: 70.25, change: '+0.8%' },
  CAD: { buying: 945.6, selling: 960.25, change: '+0.1%' },
}

const bankingPillars = [
  {
    image: '/real/personal.png',
    title: 'Retail Banking',
    desc: 'Personal accounts, loans, and everyday banking for individuals.',
  },
  {
    image: '/real/international.png',
    title: 'International Banking',
    desc: 'Cross-border payments and global financial solutions.',
  },
  {
    image: '/real/corporate.png',
    title: 'Corporate Banking',
    desc: 'Sophisticated services for enterprises and institutions.',
  },
  {
    image: '/real/asset.png',
    title: 'Asset Finance',
    desc: 'Expertise across asset classes for investors.',
  },
]

// Retail Banking Products Data
const retailAccounts = [
  { name: 'Savings Account', icon: PiggyBank, description: 'Standard savings account with competitive interest rates', features: ['Interest up to 5% p.a.', 'No ledger fees', 'Mobile banking access'] },
  { name: 'Amayi Angathe Business Savings Account', icon: Briefcase, description: 'Empowering women entrepreneurs with专属 savings solution', features: ['Tailored for women-led businesses', 'Lower minimum balance', 'Business advisory services'] },
  { name: 'Kasupe Finance Product Offering', icon: Sparkles, description: 'Flexible microfinance solution for small-scale enterprises', features: ['Quick disbursement', 'Flexible repayment', 'No collateral required'] },
  { name: 'Fiesta Save Account', icon: Calendar, description: 'Festive savings account with bonus interest', features: ['Higher interest rates', 'Target savings feature', 'Annual bonus payout'] },
  { name: 'Diaspora Account', icon: Globe, description: 'For Malawians living abroad', features: ['Foreign currency options', 'Online account management', 'Competitive remittance rates'] },
  { name: 'Foreign Currency Denominated Account (FCDA)', icon: Banknote, description: 'Hold and transact in foreign currencies', features: ['USD, GBP, EUR options', 'International transfers', 'Competitive exchange rates'] },
  { name: 'Current Account', icon: Wallet, description: 'Everyday transaction account', features: ['Unlimited transactions', 'Cheque book facility', 'Overdraft options'] },
  { name: 'Fixed Term Deposit', icon: Calendar, description: 'Lock savings for higher returns', features: ['Fixed interest rates', 'Terms from 1-24 months', 'Early withdrawal options'] },
  { name: 'Call Account', icon: Phone, description: 'High interest with instant access', features: ['Tiered interest rates', 'Same-day withdrawals', 'No fixed term'] },
  { name: 'Mlimi Account', icon: Landmark, description: 'For farmers and agribusiness', features: ['Seasonal adjustments', 'Agricultural inputs financing', 'Harvest-based repayments'] },
  { name: 'ITF Savings Account', icon: PiggyBank, description: 'Investment Trust Fund savings', features: ['Long-term wealth building', 'Professional fund management', 'Regular statements'] },
  { name: 'Short Term Deposit', icon: Calendar, description: 'Flexible short-term savings', features: ['7-90 day terms', 'Higher than savings rates', 'Auto-renewal options'] },
  { name: 'Special Savers Account', icon: Sparkles, description: 'Premium savings for high balances', features: ['Enhanced interest rates', 'Personal relationship manager', 'Priority service'] },
  { name: 'Student Serve Account', icon: GraduationCap, description: 'For tertiary students', features: ['No monthly fees', 'Free debit card', 'Mobile banking focus'] },
  { name: 'Step Up Entrepreneur', icon: Briefcase, description: 'For growing businesses', features: ['Increasing credit limits', 'Business training', 'Networking opportunities'] },
  { name: 'Step Up Professional', icon: Briefcase, description: 'For career professionals', features: ['Salary-based lending', 'Professional package benefits', 'Mortgage options'] },
  { name: 'Special Package for Accountants', icon: Calculator, description: 'Tailored for accounting professionals', features: ['Professional liability coverage', 'Practice financing', 'Business account benefits'] },
]

const personalLoans = [
  { name: 'Consumer Loans', icon: ShoppingBag, description: 'For personal purchases and expenses', maxAmount: 'MK5 million', term: 'Up to 36 months' },
  { name: 'Employer Guaranteed Loans', icon: Building2, description: 'Backed by employer guarantee', maxAmount: 'MK10 million', term: 'Up to 48 months' },
  { name: 'Share Purchase Loan Scheme', icon: TrendingUp, description: 'For buying shares in companies', maxAmount: 'MK15 million', term: 'Up to 60 months' },
  { name: 'Financial Lease', icon: FileText, description: 'For equipment and asset financing', maxAmount: 'MK20 million', term: 'Up to 60 months' },
  { name: 'Mortgage Finance and Home Improvement Loan', icon: Home, description: 'Buy or renovate your home', maxAmount: 'MK50 million', term: 'Up to 240 months' },
  { name: 'Pay-Day Loan', icon: Calendar, description: 'Short-term salary advance', maxAmount: 'MK500,000', term: 'Up to 30 days' },
  { name: 'Farm Infrastructure and Implements Loan', icon: Landmark, description: 'Agricultural equipment financing', maxAmount: 'MK30 million', term: 'Up to 60 months' },
  { name: 'Premium Gold Finance', icon: Sparkles, description: 'Premium financing for high-net-worth clients', maxAmount: 'MK100 million', term: 'Customized' },
  { name: 'Personal Vehicle Loans', icon: Car, description: 'Finance your dream car', maxAmount: 'MK25 million', term: 'Up to 60 months' },
  { name: 'Asset Based Financing Scheme', icon: Building2, description: 'Secured against business assets', maxAmount: 'MK40 million', term: 'Up to 72 months' },
  { name: 'Insurance Premium Finance', icon: Shield, description: 'Spread insurance premium payments', maxAmount: 'MK10 million', term: 'Up to 12 months' },
]

const electronicBanking = [
  { name: 'Cardless Withdrawal', icon: Smartphone, description: 'Withdraw cash without a physical card' },
  { name: 'BankNet360', icon: Globe, description: 'Full-featured internet banking platform' },
  { name: 'Contactless Card', icon: CreditCard, description: 'Tap and pay for quick transactions' },
  { name: 'Mo626 Digital+', icon: Smartphone, description: 'Mobile banking app for everyday transactions' },
  { name: 'Mo626ice', icon: Radio, description: 'USSD banking for feature phones' },
  { name: 'Visa Debit Card', icon: CreditCard, description: 'Secure debit card for daily purchases' },
  { name: 'Visa Credit Card', icon: CreditCard, description: 'Credit card with rewards program' },
  { name: 'Cash Passport™', icon: Banknote, description: 'Prepaid travel money card' },
  { name: 'Electronic Funds Transfer', icon: Send, description: 'Instant money transfers between accounts' },
]

// SME Banking Products Data
const smeAccounts = [
  { name: 'SME Business Account', icon: Briefcase, description: 'Dedicated account for small and medium enterprises', features: ['Multi-user access', 'Business debit card', 'Monthly e-statements'] },
  { name: 'Business Premium Account', icon: Star, description: 'Premium account for established businesses', features: ['Higher transaction limits', 'Dedicated relationship manager', 'Priority processing'] },
  { name: 'SME Foreign Currency Account', icon: DollarSign, description: 'Multi-currency account for international trade', features: ['USD, GBP, EUR options', 'Competitive exchange rates', 'International payments'] },
]

const smeLoans = [
  { name: 'SME Working Capital Loan', icon: BarChart3, description: 'Finance day-to-day operations', maxAmount: 'MK30 million', term: 'Up to 36 months', rate: 'From 15%' },
  { name: 'SME Equipment Finance', icon: Factory, description: 'Purchase machinery and equipment', maxAmount: 'MK50 million', term: 'Up to 60 months', rate: 'From 14%' },
  { name: 'SME Trade Finance', icon: Truck, description: 'Import/export financing solutions', maxAmount: 'MK100 million', term: 'Up to 12 months', rate: 'Negotiable' },
  { name: 'SME Expansion Loan', icon: TrendingUp, description: 'Finance business growth and expansion', maxAmount: 'MK75 million', term: 'Up to 84 months', rate: 'From 13.5%' },
  { name: 'SME Invoice Discounting', icon: Receipt, description: 'Unlock cash from unpaid invoices', maxAmount: 'MK40 million', term: 'Up to 90 days', rate: 'From 12%' },
  { name: 'SME Asset Finance', icon: Building2, description: 'Finance business assets and property', maxAmount: 'MK200 million', term: 'Up to 120 months', rate: 'From 11.5%' },
]

const smeServices = [
  { name: 'Business Advisory', icon: Handshake, description: 'Expert business advice and mentorship' },
  { name: 'Trade Finance Solutions', icon: Globe, description: 'Letters of credit, bank guarantees' },
  { name: 'Payroll Management', icon: Users, description: 'Automated salary processing' },
  { name: 'Bulk Payment Services', icon: Send, description: 'Process multiple payments efficiently' },
  { name: 'SME Training Programs', icon: GraduationCap, description: 'Financial literacy and business management' },
  { name: 'Business Insurance', icon: Shield, description: 'Coverage for business assets and operations' },
]

// Corporate Banking Products Data
const corporateAccounts = [
  { name: 'Corporate Current Account', icon: Building2, description: 'Primary account for large enterprises', features: ['High transaction limits', 'Treasury management', 'Dedicated relationship manager'] },
  { name: 'Corporate Call Account', icon: Timer, description: 'Earn interest on surplus funds', features: ['Tiered interest rates', 'Instant access', 'No fixed term'] },
  { name: 'Corporate Fixed Deposit', icon: Calendar, description: 'Higher returns on large deposits', features: ['Negotiable rates', 'Terms from 1-36 months', 'Large deposit bonuses'] },
  { name: 'Multinational Account', icon: Globe, description: 'For regional and global operations', features: ['Multi-currency', 'Cross-border pooling', 'International support'] },
]

const corporateLoans = [
  { name: 'Corporate Term Loan', icon: LineChart, description: 'Long-term financing for major projects', maxAmount: 'MK1 billion+', term: 'Up to 120 months', rate: 'Negotiable' },
  { name: 'Project Finance', icon: Factory, description: 'Infrastructure and development projects', maxAmount: 'MK500 million+', term: 'Customized', rate: 'Structured' },
  { name: 'Syndicated Loans', icon: Users, description: 'Large facilities with partner banks', maxAmount: 'MK5 billion+', term: 'Up to 84 months', rate: 'Competitive' },
  { name: 'Working Capital Finance', icon: BarChart3, description: 'Optimize cash flow cycles', maxAmount: 'MK250 million', term: 'Revolving', rate: 'From 12%' },
  { name: 'Acquisition Finance', icon: TrendingUp, description: 'Finance mergers and acquisitions', maxAmount: 'MK750 million', term: 'Up to 96 months', rate: 'Structured' },
]

const corporateServices = [
  { name: 'Treasury Services', icon: LineChart, description: 'Cash management and liquidity solutions' },
  { name: 'Trade Services', icon: Truck, description: 'Letters of credit, collections, guarantees' },
  { name: 'Investor Services', icon: TrendingUp, description: 'Custody, corporate actions, reporting' },
  { name: 'Risk Management', icon: Shield, description: 'Hedging, derivatives, risk advisory' },
  { name: 'Supply Chain Finance', icon: Truck, description: 'Supplier and distributor financing' },
  { name: 'ESG Advisory', icon: Scale, description: 'Sustainable finance and reporting' },
]

// e-Services Data
const eServices = [
  { name: 'BankNet360 Corporate', icon: Globe, description: 'Advanced internet banking for businesses', features: ['Multi-user authorization', 'Bulk payments', 'Treasury dashboard'] },
  { name: 'Mo626 Digital+ Business', icon: Smartphone, description: 'Mobile banking for business owners', features: ['Transaction approvals', 'Balance alerts', 'Payment initiation'] },
  { name: 'API Banking', icon: Database, description: 'Integrate banking into your systems', features: ['Real-time data', 'Automated reconciliation', 'Custom workflows'] },
  { name: 'Host-to-Host', icon: Cloud, description: 'Direct system integration', features: ['Secure connection', 'Batch processing', '24/7 availability'] },
  { name: 'SMS Banking', icon: MessageSquare, description: 'Banking via text messages', features: ['Balance inquiries', 'Mini statements', 'Alert notifications'] },
  { name: 'QR Code Payments', icon: QrCode, description: 'Cashless payment solution', features: ['Merchant payments', 'Person-to-person transfers', 'Fast settlement'] },
  { name: 'Biometric Authentication', icon: Fingerprint, description: 'Secure login with fingerprint', features: ['Enhanced security', 'Quick access', 'Fraud prevention'] },
  { name: 'Digital Onboarding', icon: UserPlus, description: 'Open accounts remotely', features: ['Video verification', 'Instant account opening', 'Paperless process'] },
]

// Rates & Tariffs Data
const lendingRates = [
  { product: 'Base Lending Rate', rate: '20.80%', effective: 'April 7, 2026' },
  { product: 'Personal Loan (Secured)', rate: '15.00% - 18.00%', effective: 'Current' },
  { product: 'Personal Loan (Unsecured)', rate: '22.00% - 25.00%', effective: 'Current' },
  { product: 'SME Loan', rate: '15.00% - 19.00%', effective: 'Current' },
  { product: 'Corporate Loan', rate: 'Negotiable', effective: 'Relationship-based' },
  { product: 'Mortgage Loan', rate: '16.50% - 18.50%', effective: 'Current' },
  { product: 'Agricultural Loan', rate: '14.00% - 16.00%', effective: 'Current' },
  { product: 'Salary Advance', rate: '12.00%', effective: 'Current' },
]

const depositRates = [
  { product: 'Savings Account', rate: '2.50% - 5.00%', tier: 'Tiered' },
  { product: 'Fixed Deposit (3 months)', rate: '7.00%', minAmount: 'MK100,000' },
  { product: 'Fixed Deposit (6 months)', rate: '8.00%', minAmount: 'MK100,000' },
  { product: 'Fixed Deposit (12 months)', rate: '9.50%', minAmount: 'MK100,000' },
  { product: 'Fixed Deposit (24 months)', rate: '11.00%', minAmount: 'MK100,000' },
  { product: 'Call Account', rate: '4.00% - 6.00%', tier: 'Tiered' },
  { product: 'Corporate Fixed Deposit', rate: 'Negotiable', minAmount: 'MK5,000,000' },
]

const serviceCharges = [
  { service: 'ATM Withdrawal (NBM)', fee: 'Free' },
  { service: 'ATM Withdrawal (Other banks)', fee: 'MWK 600' },
  { service: 'Cheque Book (25 leaves)', fee: 'MWK 5,000' },
  { service: 'Account Maintenance (Monthly)', fee: 'MWK 1,500' },
  { service: 'RTGS Transfer (Inward)', fee: 'MWK 500' },
  { service: 'RTGS Transfer (Outward)', fee: 'MWK 5,000' },
  { service: 'International Transfer', fee: 'MWK 15,000 + SWIFT' },
  { service: 'Card Replacement', fee: 'MWK 8,000' },
  { service: 'PIN Reissue', fee: 'MWK 2,500' },
  { service: 'Statement Request (Hard copy)', fee: 'MWK 2,000' },
  { service: 'Stop Payment', fee: 'MWK 3,000' },
  { service: 'Overdraft Arrangement', fee: '1.5% of limit' },
]

const transactionLimits = [
  { channel: 'ATM Withdrawal (Daily)', limit: 'MWK 500,000' },
  { channel: 'POS Transaction (Daily)', limit: 'MWK 2,000,000' },
  { channel: 'BankNet360 (Daily)', limit: 'MWK 10,000,000' },
  { channel: 'Mobile Banking (Daily)', limit: 'MWK 5,000,000' },
  { channel: 'Cardless Withdrawal', limit: 'MWK 200,000' },
]

// Helper icon components
function Star({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}

const latestNews = [
  {
    title: 'NBM plc donates K10 Million to Rotary Club of Blantyre',
    date: 'June 1, 2026',
    category: 'Community',
    readTime: '3 min read',
    image: '/real/news1.jpg',
  },
  {
    title: 'NBM Appoints Bernard Masi as Head of Corporate Banking',
    date: 'May 28, 2026',
    category: 'Corporate',
    readTime: '5 min read',
    image: '/real/news2.jpg',
  },
  {
    title: 'NBM plc launches innovative digital onboarding platform',
    date: 'May 25, 2026',
    category: 'Product',
    readTime: '4 min read',
    image: '/real/hero.jpg',
  },
  {
    title: 'Foreign currency exchange rates update — Kwacha stable',
    date: 'May 22, 2026',
    category: 'Markets',
    readTime: '2 min read',
    image: '/real/mobile.jpg',
  },
]

const newsImages = [
  '/real/news1.jpg',
  '/real/news2.jpg',
  '/real/hero.jpg',
  '/real/mobile.jpg',
]

const standoutFeatures = [
  {
    title: 'Instant Onboarding',
    detail: 'Open an account in minutes with guided digital verification.',
  },
  {
    title: 'Smart Money Tools',
    detail: 'Track spending, savings goals, and transfers in one clean dashboard.',
  },
  {
    title: 'Enterprise Ready',
    detail: 'Bulk payments, approvals, and treasury visibility for growing teams.',
  },
]

// Navigation tabs as specified
const navTabs = [
  'Retail',
  "SME's",
  'Corporate',
  'e-Services',
  'Rates & Tariffs',
  'Forms',
  'Publications',
  'Media',
]

// Publications data
const publicationsData = [
  {
    title: 'Annual Report 2025',
    date: 'March 2026',
    category: 'Annual Report',
    size: '4.2 MB',
    icon: FileText,
    description: 'Comprehensive overview of NBM plc financial performance and strategic achievements in 2025.',
  },
  {
    title: 'Sustainability Report 2025',
    date: 'February 2026',
    category: 'Sustainability',
    size: '3.8 MB',
    icon: FileText,
    description: 'Environmental, Social and Governance (ESG) initiatives and community impact.',
  },
  {
    title: 'Q1 2026 Financial Statement',
    date: 'April 2026',
    category: 'Financial',
    size: '1.5 MB',
    icon: FileText,
    description: 'Unaudited financial results for the first quarter ending March 31, 2026.',
  },
  {
    title: 'Corporate Governance Charter',
    date: 'January 2026',
    category: 'Governance',
    size: '2.1 MB',
    icon: FileText,
    description: 'Board governance framework and principles of the Bank.',
  },
  {
    title: 'NBM Tariff Guide 2026',
    date: 'January 2026',
    category: 'Rates',
    size: '1.2 MB',
    icon: FileText,
    description: 'Complete schedule of fees and charges for all banking services.',
  },
  {
    title: 'Customer Service Charter',
    date: 'December 2025',
    category: 'Service',
    size: '0.9 MB',
    icon: FileText,
    description: 'Commitment to service excellence and customer rights.',
  },
  {
    title: 'Digital Banking User Manual',
    date: 'November 2025',
    category: 'Guides',
    size: '5.3 MB',
    icon: FileText,
    description: 'Step-by-step guide to Mo626 Digital+ and BankNet360.',
  },
  {
    title: 'Financial Inclusion Report',
    date: 'October 2025',
    category: 'Research',
    size: '2.7 MB',
    icon: FileText,
    description: 'Impact assessment of banking access initiatives across Malawi.',
  },
]

const banknetFeatures = [
  'Access your accounts 24/7 from anywhere in the world',
  'Self-service platform for all basic account transactions',
  'Inter-account and third party payments',
  'Pay utility bills online anytime',
  'Establish Fixed Deposit contracts online',
  'Order cheque books and add beneficiaries',
  'Effect stop payment on cheques',
  'Export data to Excel and print statements',
]

function LogoMark({ size = 'lg' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const boxSize = size === 'lg' ? 'h-16 w-30 sm:h-11 sm:w-32' : 'h-17 w-34 sm:h-12 sm:w-40'
  return (
    <div className={`shrink-0 overflow-hidden rounded-xl bg-nbm-blue-dark shadow-md ring-1 ring-white/25 ${boxSize}`}>
      {logoFailed ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm font-extrabold tracking-wide text-white">NBM</span>
        </div>
      ) : (
        <img
          src="/real/nbm-logo.png"
          alt="National Bank of Malawi logo"
          className="h-full w-full object-contain p-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
          decoding="async"
          onError={() => setLogoFailed(true)}
        />
      )}
    </div>
  )
}

function RetailContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [
    { id: 'accounts', name: 'Customer Accounts' },
    { id: 'loans', name: 'Personal Loan Facilities' },
    { id: 'ebanking', name: 'Electronic Banking' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition ${activeSection === section.id ? 'bg-nbm-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Customer Accounts</h3><p className="mt-2 text-gray-500">Choose from our range of account options</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{retailAccounts.map((account, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-nbm-blue/20">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><account.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-nbm-blue transition">{account.name}</h4>
            <p className="mt-2 text-sm text-gray-500">{account.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{account.features.slice(0, 2).map((feature, i) => (<span key={i} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"><CheckCircle className="h-3 w-3 text-nbm-blue" />{feature}</span>))}</div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Open Account <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'loans' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Personal Loan Facilities</h3><p className="mt-2 text-gray-500">Flexible financing options</p></div>
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-nbm-blue to-nbm-blue-light p-6 text-white"><div className="flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-3"><Calculator className="h-10 w-10" /><div><h4 className="text-xl font-bold">Loan Calculator</h4><p className="text-white/80 text-sm">Estimate your monthly repayments</p></div></div><button className="rounded-full bg-white px-6 py-2.5 text-nbm-blue font-semibold transition hover:bg-gray-100">Calculate Now →</button></div></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{personalLoans.map((loan, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><loan.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{loan.name}</h4><p className="mt-2 text-sm text-gray-500">{loan.description}</p>
            <div className="mt-4 space-y-1"><div className="flex justify-between text-sm"><span className="text-gray-500">Maximum Amount:</span><span className="font-semibold">{loan.maxAmount}</span></div><div className="flex justify-between text-sm"><span className="text-gray-500">Repayment Term:</span><span className="font-semibold">{loan.term}</span></div></div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Apply Now <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'ebanking' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Electronic Banking</h3><p className="mt-2 text-gray-500">Bank anytime, anywhere</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{electronicBanking.map((service, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><service.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{service.name}</h4><p className="mt-2 text-sm text-gray-500">{service.description}</p>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Learn More <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}
    </div>
  )
}

function SMEContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [
    { id: 'accounts', name: 'Business Accounts' },
    { id: 'loans', name: 'SME Loans' },
    { id: 'services', name: 'Value Added Services' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition ${activeSection === section.id ? 'bg-nbm-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Business Accounts</h3><p className="mt-2 text-gray-500">Tailored accounts for your business needs</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{smeAccounts.map((account, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><account.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{account.name}</h4><p className="mt-2 text-sm text-gray-500">{account.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{account.features.map((feature, i) => (<span key={i} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"><CheckCircle className="h-3 w-3 text-nbm-blue" />{feature}</span>))}</div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Open Account <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'loans' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">SME Loan Facilities</h3><p className="mt-2 text-gray-500">Financing to grow your business</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{smeLoans.map((loan, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><loan.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{loan.name}</h4><p className="mt-2 text-sm text-gray-500">{loan.description}</p>
            <div className="mt-4 space-y-1"><div className="flex justify-between text-sm"><span className="text-gray-500">Maximum Amount:</span><span className="font-semibold">{loan.maxAmount}</span></div><div className="flex justify-between text-sm"><span className="text-gray-500">Repayment Term:</span><span className="font-semibold">{loan.term}</span></div><div className="flex justify-between text-sm"><span className="text-gray-500">Interest Rate:</span><span className="font-semibold text-nbm-blue">{loan.rate}</span></div></div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Apply Now <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'services' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Value Added Services</h3><p className="mt-2 text-gray-500">Additional services to support your business</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{smeServices.map((service, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><service.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{service.name}</h4><p className="mt-2 text-sm text-gray-500">{service.description}</p>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Learn More <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}
    </div>
  )
}

function CorporateContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [
    { id: 'accounts', name: 'Corporate Accounts' },
    { id: 'loans', name: 'Corporate Loans' },
    { id: 'services', name: 'Specialized Services' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition ${activeSection === section.id ? 'bg-nbm-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Corporate Accounts</h3><p className="mt-2 text-gray-500">Sophisticated banking for large enterprises</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{corporateAccounts.map((account, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><account.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{account.name}</h4><p className="mt-2 text-sm text-gray-500">{account.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{account.features.map((feature, i) => (<span key={i} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"><CheckCircle className="h-3 w-3 text-nbm-blue" />{feature}</span>))}</div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Enquire Now <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'loans' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Corporate Loan Facilities</h3><p className="mt-2 text-gray-500">Large-scale financing solutions</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{corporateLoans.map((loan, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><loan.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{loan.name}</h4><p className="mt-2 text-sm text-gray-500">{loan.description}</p>
            <div className="mt-4 space-y-1"><div className="flex justify-between text-sm"><span className="text-gray-500">Maximum Amount:</span><span className="font-semibold">{loan.maxAmount}</span></div><div className="flex justify-between text-sm"><span className="text-gray-500">Repayment Term:</span><span className="font-semibold">{loan.term}</span></div><div className="flex justify-between text-sm"><span className="text-gray-500">Interest Rate:</span><span className="font-semibold text-nbm-blue">{loan.rate}</span></div></div>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#forms" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Contact RM <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}

      {activeSection === 'services' && (
        <div><div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Specialized Corporate Services</h3><p className="mt-2 text-gray-500">Expert solutions for complex needs</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{corporateServices.map((service, idx) => (
          <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><service.icon className="h-6 w-6" /></div>
            <h4 className="text-lg font-bold text-gray-900">{service.name}</h4><p className="mt-2 text-sm text-gray-500">{service.description}</p>
            <div className="mt-4 pt-3 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Contact Us <ArrowRight className="h-3.5 w-3.5" /></a></div>
          </div>))}</div></div>
      )}
    </div>
  )
}

function EServicesContent() {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', 'Internet Banking', 'Mobile Banking', 'API & Integration', 'Security']

  const filteredServices = activeCategory === 'all' ? eServices : eServices.filter(s => {
    if (activeCategory === 'Internet Banking') return s.name.includes('BankNet360') || s.name.includes('Host-to-Host')
    if (activeCategory === 'Mobile Banking') return s.name.includes('Mo626') || s.name.includes('SMS') || s.name.includes('QR')
    if (activeCategory === 'API & Integration') return s.name.includes('API') || s.name.includes('Host-to-Host')
    if (activeCategory === 'Security') return s.name.includes('Biometric')
    return true
  })

  return (
    <div className="space-y-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue"><Smartphone className="h-4 w-4" />Digital Innovation</div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Electronic Banking Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">Convenient, secure, and innovative digital banking solutions</p>
      </div>

      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition ${activeCategory === cat ? 'bg-nbm-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredServices.map((service, idx) => (
        <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><service.icon className="h-6 w-6" /></div>
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-nbm-blue transition">{service.name}</h4>
          <p className="mt-2 text-sm text-gray-500">{service.description}</p>
          {'features' in service && service.features && (<div className="mt-3 flex flex-wrap gap-1">{service.features.slice(0, 2).map((f, i) => (<span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{f}</span>))}</div>)}
          <div className="mt-4 pt-3 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Learn More <ArrowRight className="h-3.5 w-3.5" /></a></div>
        </div>
      ))}</div>

      <div className="rounded-2xl bg-gradient-to-r from-nbm-blue to-nbm-blue-light p-8 text-white text-center"><h3 className="text-2xl font-bold">Need API Integration?</h3><p className="mt-2 text-white/80">Contact our digital banking team for custom integration solutions</p><button className="mt-4 rounded-full bg-white px-6 py-2.5 text-nbm-blue font-semibold transition hover:bg-gray-100">Contact Technical Team →</button></div>
    </div>
  )
}

function RatesTariffsContent() {
  const [activeTab, setActiveTab] = useState('lending')

  return (
    <div className="space-y-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue"><Percent className="h-4 w-4" />Current Rates</div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Rates & Tariffs</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">Up-to-date interest rates, service charges, and transaction limits</p>
      </div>

      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {['lending', 'deposit', 'service', 'limits'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition ${activeTab === tab ? 'bg-nbm-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {tab === 'lending' && 'Lending Rates'}
            {tab === 'deposit' && 'Deposit Rates'}
            {tab === 'service' && 'Service Charges'}
            {tab === 'limits' && 'Transaction Limits'}
          </button>
        ))}
      </div>

      {activeTab === 'lending' && (<div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-bold text-gray-900">Lending Interest Rates</h3><p className="text-sm text-gray-500">Effective as of April 2026</p></div><div className="overflow-x-auto"><table className="w-full"><thead className="bg-gray-50/50"><tr><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Product</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Interest Rate</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Effective Date</th></tr></thead><tbody className="divide-y">{lendingRates.map((item, i) => (<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3 font-medium text-gray-900">{item.product}</td><td className="px-6 py-3 font-mono text-nbm-blue font-semibold">{item.rate}</td><td className="px-6 py-3 text-gray-500">{item.effective}</td></tr>))}</tbody></table></div></div>)}

      {activeTab === 'deposit' && (<div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-bold text-gray-900">Deposit Interest Rates</h3><p className="text-sm text-gray-500">Annual percentage yield (APY)</p></div><div className="overflow-x-auto"><table className="w-full"><thead className="bg-gray-50/50"><tr><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Product</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Interest Rate</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Minimum Balance</th></tr></thead><tbody className="divide-y">{depositRates.map((item, i) => (<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3 font-medium text-gray-900">{item.product}</td><td className="px-6 py-3 font-mono text-nbm-blue font-semibold">{item.rate}</td><td className="px-6 py-3 text-gray-500">{item.minAmount || item.tier || 'Varies'}</td></tr>))}</tbody></table></div></div>)}

      {activeTab === 'service' && (<div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-bold text-gray-900">Service Charges & Tariffs</h3><p className="text-sm text-gray-500">Effective April 2026 (excluding VAT)</p></div><div className="overflow-x-auto"><table className="w-full"><thead className="bg-gray-50/50"><tr><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Service</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Fee (MWK)</th></tr></thead><tbody className="divide-y">{serviceCharges.map((item, i) => (<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3 font-medium text-gray-900">{item.service}</td><td className="px-6 py-3 font-mono text-nbm-blue font-semibold">{item.fee}</td></tr>))}</tbody></table></div><div className="bg-gray-50 px-6 py-3 text-xs text-gray-500">*International transfers subject to correspondent bank charges</div></div>)}

      {activeTab === 'limits' && (<div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-bold text-gray-900">Transaction Limits</h3><p className="text-sm text-gray-500">Daily transaction limits per channel</p></div><div className="overflow-x-auto"><table className="w-full"><thead className="bg-gray-50/50"><tr><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Channel</th><th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Daily Limit</th></tr></thead><tbody className="divide-y">{transactionLimits.map((item, i) => (<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3 font-medium text-gray-900">{item.channel}</td><td className="px-6 py-3 font-mono text-nbm-blue font-semibold">{item.limit}</td></tr>))}</tbody></table></div></div>)}
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [newsImageTick, setNewsImageTick] = useState(0)
  const [autoRotateNews, setAutoRotateNews] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMainTab, setActiveMainTab] = useState('Retail')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!autoRotateNews) return
    const interval = window.setInterval(() => setNewsImageTick((value) => (value + 1) % newsImages.length), 3000)
    return () => window.clearInterval(interval)
  }, [autoRotateNews])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setAutoRotateNews(false)
  }, [])

  const handleTabClick = () => setMobileMenuOpen(false)

  const renderMainTabContent = () => {
    switch (activeMainTab) {
      case 'Retail': return <RetailContent />
      case "SME's": return <SMEContent />
      case 'Corporate': return <CorporateContent />
      case 'e-Services': return <EServicesContent />
      case 'Rates & Tariffs': return <RatesTariffsContent />
      default: return <RetailContent />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }`}</style>
      <a href="#main-content" className="sr-only z-[70] rounded-md bg-nbm-blue px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to main content</a>

      <header className="fixed z-50 w-full">
        <div className="hidden bg-nbm-blue-dark text-white lg:block">
          <div className="container mx-auto flex items-center justify-between px-6 py-2 text-xs">
            <div className="flex items-center gap-5"><span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-nbm-blue-accent-light" />Secure Banking</span><span className="flex items-center gap-1.5 text-white/80"><Phone className="h-3.5 w-3.5" />24/7 Support: (265) 111 820 622</span></div>
            <div className="flex items-center gap-5 text-white/80"><a href="#privacy" className="transition hover:text-nbm-blue-accent-light">Privacy Policy</a><a href="#terms" className="transition hover:text-nbm-blue-accent-light">Terms &amp; Conditions</a><span className="font-medium text-nbm-blue-accent-light">Inspire Greatness</span></div>
          </div>
        </div>

        <nav className={`w-full transition-all duration-300 ${scrolled ? 'border-b border-gray-100 bg-white/95 py-2 shadow-lg backdrop-blur-md' : 'bg-white py-3 shadow-sm'}`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-3 no-underline"><LogoMark size="sm" /></a>
              <div className="flex items-center gap-3">
                <a href="#login" className="flex items-center gap-2 rounded-full bg-nbm-blue px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-nbm-blue-light sm:px-5"><LayoutDashboard className="h-4 w-4" /><span className="hidden sm:inline">Internet Banking</span><span className="inline sm:hidden">Login</span></a>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-nbm-blue lg:hidden">{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
              </div>
            </div>

            <div className="mt-3 hidden border-t border-gray-100 pt-3 lg:block"><div className="flex flex-wrap items-center gap-x-5 gap-y-2">{navTabs.map((tab) => (<button key={tab} onClick={() => setActiveMainTab(tab)} className={`whitespace-nowrap text-sm font-semibold transition ${activeMainTab === tab ? 'text-nbm-blue border-b-2 border-nbm-blue pb-1' : 'text-gray-700 hover:text-nbm-blue'}`}>{tab}</button>))}</div></div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-gray-100 pt-3 pb-2"><div className="flex flex-col space-y-2">{navTabs.map((tab) => (<button key={tab} onClick={() => { setActiveMainTab(tab); handleTabClick() }} className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${activeMainTab === tab ? 'bg-nbm-blue text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-nbm-blue'}`}>{tab}</button>))}</div>
              <div className="mt-4 border-t border-gray-100 pt-4"><div className="flex flex-col space-y-2"><a href="#privacy" onClick={handleTabClick} className="block rounded-lg px-3 py-1.5 text-xs text-gray-500 transition hover:bg-gray-50 hover:text-nbm-blue">Privacy Policy</a><a href="#terms" onClick={handleTabClick} className="block rounded-lg px-3 py-1.5 text-xs text-gray-500 transition hover:bg-gray-50 hover:text-nbm-blue">Terms & Conditions</a><div className="px-3 py-1.5 text-xs text-nbm-blue-accent-light"><span className="font-medium">Inspire Greatness</span></div></div></div></div>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden bg-gradient-to-br from-nbm-blue-50 via-white to-white px-4 pb-20 pt-40 sm:px-6 lg:pb-24 lg:pt-48">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-nbm-blue/5 blur-3xl" aria-hidden /><div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-nbm-blue-accent/10 blur-3xl" aria-hidden />
          <div className="container relative mx-auto"><div className="flex flex-col items-center justify-between gap-12 lg:flex-row"><div className="space-y-6 lg:w-[52%]"><div className="inline-flex items-center gap-2 rounded-full border border-nbm-blue/20 bg-white px-4 py-2 text-sm font-medium text-nbm-blue shadow-sm"><Globe className="h-4 w-4 text-nbm-blue-accent" />BankNet360 · Internet Banking</div><h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">Bank<span className="mt-1 block bg-gradient-to-r from-nbm-blue to-nbm-blue-light bg-clip-text text-transparent">Anywhere, Anytime</span></h1><p className="max-w-lg text-lg leading-relaxed text-gray-500">Experience the freedom of unlimited banking with BankNet360. Access your accounts 24/7, make payments, and manage your finances from any corner of the globe.</p><div className="flex flex-wrap gap-4"><a href="https://www.banknet360.co.mw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-nbm-blue px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-nbm-blue-light hover:shadow-xl no-underline sm:px-8 sm:py-3.5"><Globe className="h-4 w-4" /> Access BankNet360</a><a href="#forms" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-nbm-blue hover:text-nbm-blue no-underline sm:px-8 sm:py-3.5"><UserPlus className="h-4 w-4" /> Register</a></div><div className="flex items-center gap-4 pt-2"><div className="flex -space-x-2"><div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-nbm-blue/10 text-xs font-bold text-nbm-blue">24</div><div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-nbm-blue/10 text-xs font-bold text-nbm-blue">7</div></div><p className="text-sm text-gray-500"><strong className="text-gray-800">24/7 Access</strong> from anywhere in the world</p></div><div className="flex flex-wrap gap-2 pt-1">{['Digital Certificate', 'Two-Factor Authentication', 'Bank-grade Security'].map((pill) => (<span key={pill} className="rounded-full border border-nbm-blue/15 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue">{pill}</span>))}</div></div><div className="w-full lg:w-[44%]"><div id="rates" className="relative mx-auto max-w-md"><div className="absolute -left-8 -top-8 h-64 w-64 animate-pulse rounded-full bg-nbm-blue/10 blur-3xl" aria-hidden /><div className="relative z-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[var(--shadow-card)]"><img src="/real/hero.jpg" alt="BankNet360 internet banking" className="h-44 w-full object-cover" decoding="async" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/real/news1.jpg' }} /><div className="border-b border-gray-100 bg-gradient-to-r from-nbm-blue to-nbm-blue-light px-6 py-4 text-white"><div className="flex items-center justify-between"><div><h3 className="font-semibold">Foreign Exchange Rates</h3><p className="mt-0.5 text-xs text-white/75">Live indicative rates</p></div><button type="button" className="rounded-lg bg-white/15 p-2 transition hover:bg-white/25"><RefreshCw className="h-4 w-4" /></button></div></div><div className="divide-y divide-gray-50 p-2">{Object.entries(exchangeRates).map(([currency, rates]) => (<div key={currency} className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition hover:bg-nbm-blue-50"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-nbm-blue/10 text-xs font-bold text-nbm-blue">{currency}</div><div><p className="font-semibold text-gray-800">{currency}/MWK</p><p className="text-xs text-gray-400">Indicative</p></div></div><div className="text-right"><p className="font-mono text-sm font-medium text-gray-800">{rates.buying.toFixed(2)}</p><p className="font-mono text-xs text-gray-500">Sell {rates.selling.toFixed(2)}</p><p className={`text-xs font-medium ${rates.change.startsWith('+') ? 'text-nbm-blue' : 'text-red-500'}`}>{rates.change}</p></div></div>))}</div><a href="#rates" className="flex w-full items-center justify-center gap-1 border-t border-gray-100 py-4 text-sm font-semibold text-nbm-blue transition hover:gap-2 no-underline">More foreign exchange details<ChevronRight className="h-4 w-4" /></a></div></div></div></div></div>
        </section>

        <section className="px-4 py-16 sm:px-6 bg-white"><div className="container mx-auto">{renderMainTabContent()}</div></section>

        <section className="bg-white px-4 py-20 sm:px-6 border-t border-gray-100"><div className="container mx-auto"><div className="mb-12 text-center"><div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue"><Zap className="h-4 w-4" />Freedom Unlimited</div><h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose BankNet360?</h2><p className="mx-auto mt-3 max-w-2xl text-gray-500">BankNet360 is National Bank of Malawi's premier internet banking solution.</p></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{banknetFeatures.map((feature, idx) => (<div key={idx} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nbm-blue/10 text-nbm-blue"><CheckCircle className="h-5 w-5" /></div><div><p className="text-gray-700">{feature}</p></div></div>))}</div><div className="mt-10 text-center"><p className="text-sm text-gray-500"><strong className="text-nbm-blue">URL:</strong> www.banknet.co.mw | <strong className="text-nbm-blue">BankNet360:</strong> www.banknet360.co.mw</p></div></div></section>

        <section id="publications" className="px-4 py-20 sm:px-6 bg-gray-50"><div className="container mx-auto"><div className="mb-12 text-center"><div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue"><FileText className="h-4 w-4" />Official Documents</div><h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">Publications & Reports</h2><p className="mx-auto mt-3 max-w-2xl text-gray-500">Access our annual reports, financial statements, policies, and other official publications.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{publicationsData.slice(0, 4).map((pub, idx) => (<div key={idx} className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-nbm-blue/20"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white"><pub.icon className="h-6 w-6" /></div><div className="mb-2"><span className="text-xs font-semibold uppercase tracking-wide text-nbm-blue-accent">{pub.category}</span></div><h3 className="font-bold leading-snug text-gray-900 transition group-hover:text-nbm-blue">{pub.title}</h3><p className="mt-2 text-sm text-gray-500 line-clamp-2">{pub.description}</p><div className="mt-4 flex items-center justify-between text-xs text-gray-400"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{pub.date}</span><span className="flex items-center gap-1"><Download className="h-3 w-3" />{pub.size}</span></div><div className="mt-4 pt-2"><a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2">Download PDF <Download className="h-3.5 w-3.5" /></a></div></div>))}</div><div className="mt-10 text-center"><a href="#" className="inline-flex items-center gap-2 rounded-full border border-nbm-blue/30 bg-white px-6 py-3 text-sm font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white">View All Publications <ArrowRight className="h-4 w-4" /></a></div></div></section>

        <section className="bg-nbm-blue-dark px-4 py-16 text-white sm:px-6"><div className="container mx-auto"><div className="mb-10 text-center"><div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"><Lock className="h-4 w-4" />Bank-Grade Security</div><h2 className="mt-4 text-3xl font-bold">Your Security is Our Priority</h2><p className="mx-auto mt-3 max-w-2xl text-white/70">BankNet360 incorporates comprehensive security features to protect your financial information.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[{ title: 'Digital Certificates', desc: '128-bit SSL encryption with digital certificates and firewalls', icon: Shield },{ title: 'Unique User ID', desc: 'Personal identification number unique to each customer', icon: Lock },{ title: 'Password Protocols', desc: 'Secure password management with regular updates', icon: KeyRound },{ title: 'Two-Factor Auth', desc: 'OTP delivered to mobile phone and/or email inbox', icon: Smartphone }].map((item) => (<div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><item.icon className="mb-4 h-8 w-8 text-nbm-blue-accent-light" /><h3 className="font-bold text-white">{item.title}</h3><p className="mt-2 text-sm text-white/60">{item.desc}</p></div>))}</div><div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center"><p className="text-sm text-yellow-300">⚠️ <strong>Important:</strong> National Bank of Malawi will never request confirmation of your login details via email or phone. Always verify you are on the official BankNet360 website.</p></div></div></section>

        <section id="forms" className="px-4 py-20 sm:px-6"><div className="container mx-auto"><div className="mb-12 text-center"><h2 className="text-3xl font-bold text-gray-900">Register for Internet Banking</h2><p className="mx-auto mt-3 max-w-2xl text-gray-500">Complete the application form to start your BankNet360 journey.</p></div><div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"><div className="border-b border-gray-100 bg-gradient-to-r from-nbm-blue to-nbm-blue-light px-6 py-4 text-white"><h3 className="font-semibold">Internet Banking Application Form</h3><p className="mt-1 text-sm text-white/75">Download, complete, and submit to any NBM Service Centre</p></div><div className="p-6"><div className="mb-6 rounded-lg bg-gray-50 p-4"><p className="text-sm text-gray-600">For assistance, contact:</p><div className="mt-2 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Phone className="h-4 w-4 text-nbm-blue" /> (265) 111 820 622</span><span className="flex items-center gap-2"><Mail className="h-4 w-4 text-nbm-blue" /> ebu@natbankmw.com</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-nbm-blue" /> NBM Towers, Blantyre</span></div></div><div className="flex flex-col gap-4 sm:flex-row"><a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-nbm-blue px-6 py-3 font-semibold text-white transition hover:bg-nbm-blue-light"><Download className="h-4 w-4" /> Download Application Form (PDF)</a><a href="https://www.banknet360.co.mw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-nbm-blue hover:text-nbm-blue"><Globe className="h-4 w-4" /> Visit BankNet360 Portal</a></div><div className="mt-6 text-xs text-gray-400"><p>* Corporate customers require Super-User authorization for multi-user access</p><p className="mt-1">* Terms and conditions apply. Monthly subscription fees as per current tariff.</p></div></div></div></div></section>

        <div className="border-y border-nbm-blue-accent/30 bg-gradient-to-r from-nbm-blue-accent/15 to-nbm-blue-50 px-4 py-4 sm:px-6"><div className="container mx-auto flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center"><p className="text-sm text-gray-700"><strong className="text-nbm-blue-dark">April 2026 Reference Rate:</strong> revised to <strong>20.80%</strong> effective 7 April (prev. 22.40%).</p><a href="#rates" className="text-sm font-semibold text-nbm-blue no-underline hover:underline">Read more →</a></div></div>

        <section className="border-b border-gray-100 bg-white py-14 px-4 sm:px-6"><div className="container mx-auto"><div className="grid grid-cols-2 gap-8 md:grid-cols-4">{[{ value: '500K+', label: 'Active Customers', icon: Users },{ value: '91%', label: 'Digital Transactions', icon: Smartphone },{ value: '29+', label: 'Service Centres', icon: Building2 },{ value: '24/7', label: 'Customer Support', icon: Headphones }].map((stat) => (<div key={stat.label} className="group text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-nbm-blue/10 text-nbm-blue transition group-hover:scale-110 group-hover:bg-nbm-blue group-hover:text-white"><stat.icon className="h-6 w-6" /></div><div className="text-2xl font-extrabold text-gray-900">{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div></div>))}</div></div></section>

        <section id="news" className="px-4 py-20 sm:px-6"><div className="container mx-auto"><div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="text-3xl font-bold text-gray-900">Latest News</h2><p className="mt-2 text-gray-500">Stay updated with NBM announcements</p></div><a href="#" className="inline-flex items-center gap-1 self-start rounded-lg border border-nbm-blue/30 px-4 py-2 text-sm font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white">View All News <ChevronRight className="h-4 w-4" /></a></div><div className="mb-4 flex items-center justify-between rounded-xl border border-nbm-blue/15 bg-nbm-blue-50/50 px-4 py-2"><p className="text-xs font-medium text-gray-600">News images rotate automatically for quick scanning.</p><button onClick={() => setAutoRotateNews((prev) => !prev)} className="rounded-md border border-nbm-blue/25 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white">{autoRotateNews ? 'Pause rotation' : 'Resume rotation'}</button></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{latestNews.map((news, idx) => (<article key={news.title} className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><img src={newsImages[(newsImageTick + idx) % newsImages.length]} alt={news.title} className="mb-4 h-32 w-full rounded-xl object-cover transition-all duration-700" loading="lazy" onError={(e) => { e.currentTarget.src = '/real/news1.jpg' }} /><div className="text-xs font-bold uppercase tracking-wide text-nbm-blue-accent">{news.category}</div><h3 className="mt-2 font-bold leading-snug text-gray-900 transition group-hover:text-nbm-blue">{news.title}</h3><div className="mt-4 flex items-center justify-between text-xs text-gray-400"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{news.date}</span><span>{news.readTime}</span></div></article>))}</div></div></section>

        <section id="open" className="px-4 py-20 sm:px-6"><div className="container mx-auto rounded-3xl bg-gradient-to-r from-nbm-blue-50 via-white to-nbm-blue-50 px-8 py-16 text-center ring-1 ring-nbm-blue/10"><h2 className="text-3xl font-bold text-gray-900">Ready to experience internet banking?</h2><p className="mx-auto mt-3 max-w-md text-gray-500">Join over 500,000 customers who bank with National Bank of Malawi.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="https://www.banknet360.co.mw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-nbm-blue px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105">Login to BankNet360 <ArrowRight className="h-5 w-5" /></a><a href="#forms" className="inline-flex items-center gap-2 rounded-full border-2 border-nbm-blue bg-white px-8 py-4 text-lg font-bold text-nbm-blue shadow-lg transition hover:scale-105">Register Now</a></div></div></section>
      </main>

      <footer className="bg-nbm-blue-dark px-4 py-14 text-gray-400 sm:px-6"><div className="container mx-auto"><div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><div className="mb-4 flex items-center gap-3"><LogoMark size="sm" /></div><p className="text-sm leading-relaxed">Your privacy matters. <a href="#privacy" className="text-nbm-blue-accent-light hover:underline">Read our Privacy Policy</a>.</p></div><div><h4 className="mb-4 font-semibold text-white">Quick Links</h4><ul className="space-y-2 text-sm">{['About Us', 'Contact Us', 'Media', 'Publications'].map((link) => (<li key={link}><a href="#" className="transition hover:text-nbm-blue-accent-light">{link}</a></li>))}</ul></div><div><h4 className="mb-4 font-semibold text-white">Digital Banking</h4><ul className="space-y-2 text-sm"><li><a href="https://www.banknet360.co.mw" target="_blank" className="transition hover:text-nbm-blue-accent-light">BankNet360</a></li><li><a href="#" className="transition hover:text-nbm-blue-accent-light">Mo626 Digital+</a></li><li><a href="#" className="transition hover:text-nbm-blue-accent-light">BankNet Online</a></li><li><a href="#" className="transition hover:text-nbm-blue-accent-light">e-Services</a></li></ul></div><div><h4 className="mb-4 font-semibold text-white">Contact</h4><ul className="space-y-3 text-sm"><li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />(265) 111 820 622</li><li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />ebu@natbankmw.com</li><li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />NBM Towers, 7 Henderson Street, Blantyre</li></ul></div></div><div className="border-t border-white/10 pt-8 text-center text-xs text-white/50"><p>&copy; {new Date().getFullYear()} National Bank of Malawi plc. All rights reserved. Authorised by the Reserve Bank of Malawi.</p></div></div></footer>
    </div>
  )
}

function KeyRound({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="9.5" r="2.5" /></svg>
}