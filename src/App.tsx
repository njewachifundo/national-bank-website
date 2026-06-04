import { useEffect, useState } from 'react'
import {
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
  Timer,
  Receipt,
  Newspaper,
  Video,
  Camera,
  Mic,
  ExternalLink,
  Twitter,
  Linkedin,
  Search,
  BookOpen,
  PieChart,
  Clock,
  Star,
  Award,
  Gem,
  Rocket,
  Target,
  Heart,
  Globe2,
  Chrome,
  CircleDollarSign,
  Sparkles as SparklesIcon,
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

// Retail Banking Products Data
const retailAccounts = [
  { name: 'Savings Account', icon: PiggyBank, description: 'Standard savings account with competitive interest rates', features: ['Interest up to 5% p.a.', 'No ledger fees', 'Mobile banking access'] },
  { name: 'Amayi Angathe Business Savings Account', icon: Briefcase, description: 'Empowering women entrepreneurs', features: ['Tailored for women-led businesses', 'Lower minimum balance', 'Business advisory services'] },
  { name: 'Kasupe Finance Product Offering', icon: SparklesIcon, description: 'Flexible microfinance solution for small-scale enterprises', features: ['Quick disbursement', 'Flexible repayment', 'No collateral required'] },
  { name: 'Fiesta Save Account', icon: Calendar, description: 'Festive savings with bonus interest', features: ['Higher interest rates', 'Target savings', 'Annual bonus payout'] },
  { name: 'Diaspora Account', icon: Globe, description: 'For Malawians living abroad', features: ['Foreign currency options', 'Online management', 'Competitive remittance'] },
  { name: 'Foreign Currency Account (FCDA)', icon: Banknote, description: 'Hold and transact in foreign currencies', features: ['USD, GBP, EUR options', 'International transfers', 'Competitive rates'] },
  { name: 'Current Account', icon: Wallet, description: 'Everyday transaction account', features: ['Unlimited transactions', 'Cheque book', 'Overdraft options'] },
  { name: 'Fixed Term Deposit', icon: Calendar, description: 'Lock savings for higher returns', features: ['Fixed interest rates', 'Terms 1-24 months', 'Early withdrawal options'] },
  { name: 'Call Account', icon: Phone, description: 'High interest with instant access', features: ['Tiered interest rates', 'Same-day withdrawals', 'No fixed term'] },
  { name: 'Mlimi Account', icon: Landmark, description: 'For farmers and agribusiness', features: ['Seasonal adjustments', 'Inputs financing', 'Harvest-based repayments'] },
  { name: 'Student Serve Account', icon: GraduationCap, description: 'For tertiary students', features: ['No monthly fees', 'Free debit card', 'Mobile banking focus'] },
]

const personalLoans = [
  { name: 'Consumer Loans', icon: ShoppingBag, description: 'For personal purchases', maxAmount: 'MK5 million', term: 'Up to 36 months' },
  { name: 'Employer Guaranteed', icon: Building2, description: 'Backed by employer guarantee', maxAmount: 'MK10 million', term: 'Up to 48 months' },
  { name: 'Mortgage Finance', icon: Home, description: 'Buy or renovate your home', maxAmount: 'MK50 million', term: 'Up to 240 months' },
  { name: 'Pay-Day Loan', icon: Calendar, description: 'Short-term salary advance', maxAmount: 'MK500,000', term: 'Up to 30 days' },
  { name: 'Personal Vehicle Loans', icon: Car, description: 'Finance your dream car', maxAmount: 'MK25 million', term: 'Up to 60 months' },
]

const electronicBanking = [
  { name: 'Cardless Withdrawal', icon: Smartphone, description: 'Withdraw cash without a physical card' },
  { name: 'BankNet360', icon: Globe, description: 'Full-featured internet banking platform' },
  { name: 'Contactless Card', icon: CreditCard, description: 'Tap and pay for quick transactions' },
  { name: 'Mo626 Digital+', icon: Smartphone, description: 'Mobile banking app' },
  { name: 'Mo626ice', icon: Radio, description: 'USSD banking for feature phones' },
  { name: 'Visa Debit Card', icon: CreditCard, description: 'Secure debit card' },
  { name: 'Visa Credit Card', icon: CreditCard, description: 'Credit card with rewards' },
  { name: 'Electronic Funds Transfer', icon: Send, description: 'Instant money transfers' },
]

// SME Banking Products Data
const smeAccounts = [
  { name: 'SME Business Account', icon: Briefcase, description: 'Dedicated account for SMEs', features: ['Multi-user access', 'Business debit card', 'Monthly e-statements'] },
  { name: 'Business Premium Account', icon: Award, description: 'Premium for established businesses', features: ['Higher limits', 'Dedicated RM', 'Priority processing'] },
]

const smeLoans = [
  { name: 'Working Capital Loan', icon: BarChart3, description: 'Finance day-to-day operations', maxAmount: 'MK30 million', term: 'Up to 36 months', rate: 'From 15%' },
  { name: 'Equipment Finance', icon: Factory, description: 'Purchase machinery', maxAmount: 'MK50 million', term: 'Up to 60 months', rate: 'From 14%' },
  { name: 'Trade Finance', icon: Truck, description: 'Import/export financing', maxAmount: 'MK100 million', term: 'Up to 12 months', rate: 'Negotiable' },
]

const smeServices = [
  { name: 'Business Advisory', icon: Handshake, description: 'Expert business advice' },
  { name: 'Trade Finance Solutions', icon: Globe, description: 'Letters of credit' },
  { name: 'Payroll Management', icon: Users, description: 'Automated salary processing' },
]

// Corporate Banking Products Data
const corporateAccounts = [
  { name: 'Corporate Current Account', icon: Building2, description: 'Primary account for large enterprises', features: ['High limits', 'Treasury management', 'Dedicated RM'] },
  { name: 'Corporate Fixed Deposit', icon: Calendar, description: 'Higher returns on large deposits', features: ['Negotiable rates', 'Terms 1-36 months'] },
]

const corporateLoans = [
  { name: 'Corporate Term Loan', icon: LineChart, description: 'Long-term financing', maxAmount: 'MK1 billion+', term: 'Up to 120 months', rate: 'Negotiable' },
  { name: 'Project Finance', icon: Factory, description: 'Infrastructure projects', maxAmount: 'MK500 million+', term: 'Customized', rate: 'Structured' },
]

const corporateServices = [
  { name: 'Treasury Services', icon: LineChart, description: 'Cash management' },
  { name: 'Trade Services', icon: Truck, description: 'Letters of credit' },
  { name: 'Risk Management', icon: Shield, description: 'Hedging solutions' },
]

// e-Services Data
const eServices = [
  { name: 'BankNet360 Corporate', icon: Globe, description: 'Advanced internet banking', features: ['Multi-user authorization', 'Bulk payments'] },
  { name: 'Mo626 Digital+ Business', icon: Smartphone, description: 'Mobile banking', features: ['Transaction approvals', 'Balance alerts'] },
  { name: 'API Banking', icon: Database, description: 'Integrate banking', features: ['Real-time data', 'Automated reconciliation'] },
  { name: 'QR Code Payments', icon: QrCode, description: 'Cashless payment', features: ['Merchant payments', 'Fast settlement'] },
  { name: 'Biometric Authentication', icon: Fingerprint, description: 'Secure login', features: ['Enhanced security', 'Quick access'] },
]

// Rates & Tariffs Data
const lendingRates = [
  { product: 'Base Lending Rate', rate: '20.80%', effective: 'April 7, 2026' },
  { product: 'Personal Loan (Secured)', rate: '15.00% - 18.00%', effective: 'Current' },
  { product: 'SME Loan', rate: '15.00% - 19.00%', effective: 'Current' },
  { product: 'Mortgage Loan', rate: '16.50% - 18.50%', effective: 'Current' },
]

const depositRates = [
  { product: 'Savings Account', rate: '2.50% - 5.00%', tier: 'Tiered' },
  { product: 'Fixed Deposit (3 months)', rate: '7.00%', minAmount: 'MK100,000' },
  { product: 'Fixed Deposit (6 months)', rate: '8.00%', minAmount: 'MK100,000' },
  { product: 'Fixed Deposit (12 months)', rate: '9.50%', minAmount: 'MK100,000' },
]

const serviceCharges = [
  { service: 'ATM Withdrawal (NBM)', fee: 'Free' },
  { service: 'ATM Withdrawal (Other banks)', fee: 'MWK 600' },
  { service: 'Cheque Book (25 leaves)', fee: 'MWK 5,000' },
  { service: 'Account Maintenance', fee: 'MWK 1,500' },
  { service: 'RTGS Transfer', fee: 'MWK 5,000' },
  { service: 'International Transfer', fee: 'MWK 15,000 + SWIFT' },
]

const transactionLimits = [
  { channel: 'ATM Withdrawal (Daily)', limit: 'MWK 500,000' },
  { channel: 'POS Transaction (Daily)', limit: 'MWK 2,000,000' },
  { channel: 'BankNet360 (Daily)', limit: 'MWK 10,000,000' },
]

// Publications Data
const publicationsData = [
  { title: 'Annual Report 2025', date: 'March 2026', category: 'Annual Report', size: '4.2 MB', icon: FileText, description: 'Comprehensive overview of NBM plc financial performance.', coverImage: '/real/news1.jpg', downloads: 1245 },
  { title: 'Sustainability Report 2025', date: 'February 2026', category: 'Sustainability', size: '3.8 MB', icon: FileText, description: 'ESG initiatives and community impact.', coverImage: '/real/news2.jpg', downloads: 892 },
  { title: 'Q1 2026 Financial Statement', date: 'April 2026', category: 'Financial', size: '1.5 MB', icon: FileText, description: 'Unaudited financial results for Q1 2026.', coverImage: '/real/hero.jpg', downloads: 2100 },
  { title: 'Corporate Governance Charter', date: 'January 2026', category: 'Governance', size: '2.1 MB', icon: FileText, description: 'Board governance framework.', coverImage: '/real/mobile.jpg', downloads: 456 },
  { title: 'NBM Tariff Guide 2026', date: 'January 2026', category: 'Rates', size: '1.2 MB', icon: FileText, description: 'Complete fee schedule.', coverImage: '/real/news1.jpg', downloads: 3456 },
  { title: 'Customer Service Charter', date: 'December 2025', category: 'Service', size: '0.9 MB', icon: FileText, description: 'Commitment to service excellence.', coverImage: '/real/news2.jpg', downloads: 678 },
  { title: 'Digital Banking User Manual', date: 'November 2025', category: 'Guides', size: '5.3 MB', icon: FileText, description: 'Step-by-step digital banking guide.', coverImage: '/real/hero.jpg', downloads: 5234 },
]

const publicationCategories = ['All', 'Annual Report', 'Sustainability', 'Financial', 'Governance', 'Rates', 'Service', 'Guides']

// Media Data
const pressReleases = [
  { title: 'NBM plc reports strong Q1 2026 results', date: 'May 15, 2026', category: 'Financial Results', summary: 'Net profit increases by 15% to K18.5 billion.', image: '/real/news1.jpg', readTime: '4 min read', author: 'Chikondi Malunga' },
  { title: 'NBM launches financial literacy program', date: 'May 10, 2026', category: 'CSR', summary: 'Bank partners with Ministry of Education.', image: '/real/news2.jpg', readTime: '3 min read', author: 'Tiya Mwale' },
  { title: 'NBM announces new Board Chairman', date: 'May 5, 2026', category: 'Corporate', summary: 'Mr. James Kachale appointed as new Board Chairman.', image: '/real/hero.jpg', readTime: '2 min read', author: 'Chikondi Malunga' },
  { title: 'Mo626 Digital+ surpasses 500,000 users', date: 'April 28, 2026', category: 'Digital Banking', summary: 'Mobile banking app adoption accelerates.', image: '/real/mobile.jpg', readTime: '3 min read', author: 'Tiya Mwale' },
]

const inTheNews = [
  { title: 'NBM leads digital transformation in Malawi', source: 'The Nation', date: 'May 20, 2026', icon: Newspaper, summary: 'How the bank is revolutionizing financial services.' },
  { title: 'How NBM is empowering women entrepreneurs', source: 'Malawi Daily Times', date: 'May 15, 2026', icon: Newspaper, summary: 'Special fund and mentorship program yields results.' },
]

const mediaResources = [
  { title: 'Media Kit 2026', type: 'Brand Assets', icon: FileText, size: '8.5 MB', description: 'Official NBM brand guidelines.', format: 'ZIP' },
  { title: 'Corporate Video', type: 'Video', icon: Video, size: '45 MB', description: 'Overview of NBM\'s journey.', format: 'MP4' },
  { title: 'CEO Interview', type: 'Audio', icon: Mic, size: '12 MB', description: 'Digital transformation interview.', format: 'MP3' },
]

const mediaContacts = [
  { name: 'Chikondi Malunga', title: 'Head of Corporate Communications', email: 'chikondi.malunga@nbm.mw', phone: '+265 111 820 622' },
  { name: 'Tiya Mwale', title: 'Media Relations Manager', email: 'tiya.mwale@nbm.mw', phone: '+265 111 820 623' },
]

// Internet Banking Data
const internetBankingFeatures = [
  { icon: Globe, title: '24/7 Global Access', description: 'Access your accounts anytime, anywhere.', benefits: ['View balances', 'Transaction history', 'Download statements'] },
  { icon: Send, title: 'Instant Transfers', description: 'Send money to any bank account instantly.', benefits: ['Inter-account transfers', 'Third party payments', 'Scheduled payments'] },
  { icon: CreditCard, title: 'Smart Bill Payments', description: 'Pay utility bills online with ease.', benefits: ['Electricity bills', 'Water bills', 'TV subscriptions'] },
  { icon: Shield, title: 'Bank-Grade Security', description: '128-bit SSL encryption and 2FA.', benefits: ['Digital certificates', 'OTP verification', 'Transaction alerts'] },
]

const banknetFeatures = [
  '24/7 global account access',
  'Self-service platform for all transactions',
  'Inter-account and third party payments',
  'Utility bill payments online',
  'Online fixed deposit contracts',
  'Cheque book ordering and beneficiary management',
]

const latestNews = [
  { title: 'NBM plc donates K10 Million to Rotary Club', date: 'June 1, 2026', category: 'Community', readTime: '3 min read', image: '/real/news1.jpg' },
  { title: 'NBM Appoints Bernard Masi as Head of Corporate Banking', date: 'May 28, 2026', category: 'Corporate', readTime: '5 min read', image: '/real/news2.jpg' },
  { title: 'NBM launches digital onboarding platform', date: 'May 25, 2026', category: 'Product', readTime: '4 min read', image: '/real/hero.jpg' },
]

const newsImages = ['/real/news1.jpg', '/real/news2.jpg', '/real/hero.jpg', '/real/mobile.jpg']

const navTabs = ['Retail', "SME's", 'Corporate', 'e-Services', 'Rates & Tariffs', 'Publications', 'Media', 'Internet Banking']

// Helper Components

function LogoMark({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const boxSize = size === 'sm' ? 'h-10 w-auto' : 'h-12 w-auto'
  return (
    <div className={`shrink-0 ${boxSize}`}>
      {logoFailed ? (
        <div className="flex h-full items-center justify-center">
          <span className="text-xl font-extrabold tracking-tight text-navy-900">NBM</span>
          <span className="ml-1 text-xs font-medium text-navy-600">plc</span>
        </div>
      ) : (
        <img
          src="/real/nbm-logo.png"
          alt="National Bank of Malawi logo"
          className="h-full w-auto object-contain"
          decoding="async"
          onError={() => setLogoFailed(true)}
        />
      )}
    </div>
  )
}

// ==================== TAB COMPONENTS ====================

function RetailContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [{ id: 'accounts', name: 'Accounts' }, { id: 'loans', name: 'Loans' }, { id: 'ebanking', name: 'Digital Banking' }]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${activeSection === section.id ? 'bg-navy-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {retailAccounts.map((account, idx) => (
            <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-navy-200">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 group-hover:bg-navy-700 group-hover:text-white transition-colors"><account.icon className="h-6 w-6" /></div>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-navy-700">{account.name}</h4>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{account.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{account.features.slice(0, 2).map((feature, i) => (<span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600"><CheckCircle className="h-3 w-3 text-green-600" />{feature}</span>))}</div>
              <div className="mt-6 pt-4 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3 transition-all">Open Account <ArrowRight className="h-4 w-4" /></a></div>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'loans' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {personalLoans.map((loan, idx) => (
            <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><loan.icon className="h-6 w-6" /></div>
              <h4 className="text-xl font-semibold text-gray-900">{loan.name}</h4>
              <p className="mt-2 text-gray-500 text-sm">{loan.description}</p>
              <div className="mt-4 space-y-2 text-sm"><div className="flex justify-between"><span className="text-gray-500">Max Amount:</span><span className="font-semibold text-gray-900">{loan.maxAmount}</span></div><div className="flex justify-between"><span className="text-gray-500">Term:</span><span className="font-semibold text-gray-900">{loan.term}</span></div></div>
              <div className="mt-6 pt-4 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3">Apply Now <ArrowRight className="h-4 w-4" /></a></div>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'ebanking' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {electronicBanking.map((service, idx) => (
            <div key={idx} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><service.icon className="h-6 w-6" /></div>
              <h4 className="text-xl font-semibold text-gray-900">{service.name}</h4>
              <p className="mt-2 text-gray-500 text-sm">{service.description}</p>
              <div className="mt-6 pt-4 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></a></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SMEContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [{ id: 'accounts', name: 'Accounts' }, { id: 'loans', name: 'Loans' }, { id: 'services', name: 'Services' }]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${activeSection === section.id ? 'bg-navy-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smeAccounts.map((acc, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><acc.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold text-gray-900">{acc.name}</h3><p className="mt-2 text-gray-500 text-sm">{acc.description}</p><div className="mt-4 flex flex-wrap gap-2">{acc.features.map((f, i) => (<span key={i} className="text-xs bg-gray-50 px-2 py-1 rounded-full">{f}</span>))}</div></div>
          ))}
        </div>
      )}

      {activeSection === 'loans' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smeLoans.map((loan, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold">{loan.name}</h3><p className="mt-2 text-gray-500 text-sm">{loan.description}</p><div className="mt-4 space-y-2 text-sm"><div><span className="text-gray-500">Amount:</span> <span className="font-semibold">{loan.maxAmount}</span></div><div><span className="text-gray-500">Term:</span> <span className="font-semibold">{loan.term}</span></div><div><span className="text-gray-500">Rate:</span> <span className="font-semibold text-green-700">{loan.rate}</span></div></div></div>
          ))}
        </div>
      )}

      {activeSection === 'services' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smeServices.map((service, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><service.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{service.name}</h3><p className="mt-2 text-gray-500 text-sm">{service.description}</p></div>
          ))}
        </div>
      )}
    </div>
  )
}

function CorporateContent() {
  const [activeSection, setActiveSection] = useState('accounts')
  const sections = [{ id: 'accounts', name: 'Accounts' }, { id: 'loans', name: 'Loans' }, { id: 'services', name: 'Services' }]

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${activeSection === section.id ? 'bg-navy-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            {section.name}
          </button>
        ))}
      </div>

      {activeSection === 'accounts' && (
        <div className="grid gap-8 md:grid-cols-2">
          {corporateAccounts.map((acc, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><acc.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{acc.name}</h3><p className="mt-2 text-gray-500 text-sm">{acc.description}</p><div className="mt-4 flex flex-wrap gap-2">{acc.features.map((f, i) => (<span key={i} className="text-xs bg-gray-50 px-2 py-1 rounded-full">{f}</span>))}</div></div>
          ))}
        </div>
      )}

      {activeSection === 'loans' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {corporateLoans.map((loan, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold">{loan.name}</h3><p className="mt-2 text-gray-500 text-sm">{loan.description}</p><div className="mt-4 space-y-2 text-sm"><div><span className="text-gray-500">Amount:</span> <span className="font-semibold">{loan.maxAmount}</span></div><div><span className="text-gray-500">Term:</span> <span className="font-semibold">{loan.term}</span></div></div></div>
          ))}
        </div>
      )}

      {activeSection === 'services' && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {corporateServices.map((service, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><service.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{service.name}</h3><p className="mt-2 text-gray-500 text-sm">{service.description}</p></div>
          ))}
        </div>
      )}
    </div>
  )
}

function EServicesContent() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto"><h2 className="text-3xl font-semibold text-gray-900">Digital Ecosystem</h2><p className="mt-3 text-gray-500">Seamless, secure, and innovative banking tools for the modern world.</p></div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eServices.map((service, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><service.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{service.name}</h3><p className="mt-2 text-gray-500 text-sm">{service.description}</p><div className="mt-4 flex flex-wrap gap-1">{service.features?.map((f, j) => (<span key={j} className="text-xs bg-gray-50 px-2 py-1 rounded-full">{f}</span>))}</div></div>
        ))}
      </div>
      <div className="rounded-2xl bg-navy-50 p-8 text-center"><h3 className="text-2xl font-semibold text-navy-900">Need API Integration?</h3><p className="mt-2 text-gray-600">Contact our dedicated technical team for custom solutions.</p><button className="mt-4 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition">Contact Technical Team →</button></div>
    </div>
  )
}

function RatesTariffsContent() {
  const [activeTab, setActiveTab] = useState('lending')
  const tabs = ['lending', 'deposit', 'service', 'limits']

  return (
    <div className="space-y-12">
      <div className="text-center"><h2 className="text-3xl font-semibold text-gray-900">Rates & Tariffs</h2><p className="mt-2 text-gray-500">Transparent, up-to-date information on our products.</p></div>
      <div className="flex flex-wrap gap-3 justify-center border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 text-sm font-semibold rounded-full transition ${activeTab === tab ? 'bg-navy-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            {tab === 'lending' && 'Lending Rates'}{tab === 'deposit' && 'Deposit Rates'}{tab === 'service' && 'Service Charges'}{tab === 'limits' && 'Transaction Limits'}
          </button>
        ))}
      </div>
      {activeTab === 'lending' && (<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-semibold">Lending Interest Rates</h3></div><div className="divide-y">{lendingRates.map((item, i) => (<div key={i} className="flex justify-between px-6 py-4 hover:bg-gray-50"><span className="font-medium text-gray-900">{item.product}</span><span className="font-semibold text-navy-700">{item.rate}</span></div>))}</div></div>)}
      {activeTab === 'deposit' && (<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-semibold">Deposit Rates</h3></div><div className="divide-y">{depositRates.map((item, i) => (<div key={i} className="flex justify-between px-6 py-4 hover:bg-gray-50"><span className="font-medium text-gray-900">{item.product}</span><span className="font-semibold text-navy-700">{item.rate}</span></div>))}</div></div>)}
      {activeTab === 'service' && (<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-semibold">Service Charges</h3></div><div className="divide-y">{serviceCharges.map((item, i) => (<div key={i} className="flex justify-between px-6 py-4 hover:bg-gray-50"><span className="font-medium text-gray-900">{item.service}</span><span className="font-semibold text-navy-700">{item.fee}</span></div>))}</div></div>)}
      {activeTab === 'limits' && (<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white"><div className="bg-gray-50 px-6 py-4 border-b"><h3 className="text-xl font-semibold">Transaction Limits</h3></div><div className="divide-y">{transactionLimits.map((item, i) => (<div key={i} className="flex justify-between px-6 py-4 hover:bg-gray-50"><span className="font-medium text-gray-900">{item.channel}</span><span className="font-semibold text-navy-700">{item.limit}</span></div>))}</div></div>)}
    </div>
  )
}

function PublicationsSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || pub.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto"><div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 text-sm font-medium text-navy-700 mb-4"><BookOpen className="h-4 w-4" />Knowledge Hub</div><h2 className="text-3xl font-semibold text-gray-900">Insights & Research</h2><p className="mt-3 text-gray-500">In-depth reports, financial data, and thought leadership.</p></div>
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search by title or keyword..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-navy-500 focus:ring-1 focus:ring-navy-500" /></div><div className="mt-4 flex flex-wrap gap-2">{publicationCategories.map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${selectedCategory === cat ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{cat}</button>))}</div></div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{filteredPublications.map((pub, idx) => (<div key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative h-48 overflow-hidden bg-gray-100"><img src={pub.coverImage} alt={pub.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><div className="absolute bottom-3 left-3"><span className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-navy-900">{pub.category}</span></div></div><div className="p-6"><div className="flex items-center justify-between text-xs text-gray-500 mb-3"><span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{pub.date}</span><span className="flex items-center gap-1.5"><Download className="h-3.5 w-3.5" />{pub.downloads}</span></div><h3 className="text-xl font-semibold text-gray-900 group-hover:text-navy-700 transition-colors">{pub.title}</h3><p className="mt-2 text-gray-500 text-sm line-clamp-2">{pub.description}</p><div className="mt-6 flex items-center justify-between"><span className="text-xs text-gray-400">{pub.size}</span><a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3 transition-all">Download <Download className="h-4 w-4" /></a></div></div></div>))}</div>
    </div>
  )
}

function MediaSection() {
  const [activeTab, setActiveTab] = useState('press')
  const tabs = [{ id: 'press', name: 'Press Releases', icon: Newspaper }, { id: 'news', name: 'In the News', icon: ExternalLink }, { id: 'resources', name: 'Media Resources', icon: Download }, { id: 'contacts', name: 'Media Contacts', icon: Users }]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto"><div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 text-sm font-medium text-navy-700 mb-4"><Newspaper className="h-4 w-4" />Media Centre</div><h2 className="text-3xl font-semibold text-gray-900">News & Media</h2><p className="mt-3 text-gray-500">Latest announcements, stories, and resources.</p></div>
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">{tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-t-xl transition ${activeTab === tab.id ? 'bg-navy-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}><tab.icon className="h-4 w-4" />{tab.name}</button>))}</div>
      {activeTab === 'press' && (<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{pressReleases.map((release, idx) => (<div key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"><div className="relative h-52 overflow-hidden bg-gray-100"><img src={release.image} alt={release.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" /><div className="absolute top-3 left-3"><span className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-navy-900">{release.category}</span></div></div><div className="p-6"><div className="flex items-center justify-between text-xs text-gray-500 mb-3"><span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{release.date}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{release.readTime}</span></div><h3 className="text-xl font-semibold text-gray-900 group-hover:text-navy-700">{release.title}</h3><p className="mt-2 text-gray-500 text-sm line-clamp-2">{release.summary}</p><div className="mt-6 flex items-center justify-between"><span className="text-xs text-gray-400">By {release.author}</span><a href="#" className="text-sm font-semibold text-navy-700">Read More →</a></div></div></div>))}</div>)}
      {activeTab === 'news' && (<div className="grid gap-6 md:grid-cols-2">{inTheNews.map((article, idx) => (<div key={idx} className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"><article.icon className="h-6 w-6" /></div><div><h3 className="text-lg font-semibold text-gray-900">{article.title}</h3><div className="mt-1 flex items-center gap-2 text-xs text-gray-500"><span>{article.source}</span><span>•</span><span>{article.date}</span></div><p className="mt-2 text-gray-500 text-sm">{article.summary}</p></div></div>))}</div>)}
      {activeTab === 'resources' && (<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{mediaResources.map((resource, idx) => (<div key={idx} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><resource.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{resource.title}</h3><div className="mt-1 flex items-center gap-2 text-xs text-gray-500"><span className="font-medium text-navy-600">{resource.type}</span><span>{resource.size}</span><span>• {resource.format}</span></div><p className="mt-2 text-gray-500 text-sm">{resource.description}</p><div className="mt-6 pt-4 border-t border-gray-100"><a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700">Download <Download className="h-4 w-4" /></a></div></div>))}</div>)}
      {activeTab === 'contacts' && (<div className="grid gap-8 md:grid-cols-2">{mediaContacts.map((contact, idx) => (<div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><div className="flex items-start gap-5"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-50 text-navy-700"><Users className="h-8 w-8" /></div><div><h3 className="text-xl font-semibold text-gray-900">{contact.name}</h3><p className="text-navy-700 text-sm font-medium">{contact.title}</p><div className="mt-4 space-y-2 text-sm"><div className="flex items-center gap-2 text-gray-600"><Mail className="h-4 w-4 text-gray-400" /><a href={`mailto:${contact.email}`} className="hover:text-navy-700">{contact.email}</a></div><div className="flex items-center gap-2 text-gray-600"><Phone className="h-4 w-4 text-gray-400" /><a href={`tel:${contact.phone}`}>{contact.phone}</a></div></div></div></div></div>))}</div>)}
    </div>
  )
}

function InternetBankingPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section - Premium Global Style */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-12 text-white shadow-xl">
        <div className="absolute right-0 top-0 -mr-24 -mt-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium mb-6"><Globe className="h-4 w-4" />BankNet360</div>
          <h1 className="text-4xl font-bold lg:text-5xl tracking-tight">Banking, reimagined for a digital world.</h1>
          <p className="mt-4 text-lg text-white/80">Experience the freedom of unlimited banking. 24/7 access, instant transfers, and bank-grade security.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="https://www.banknet360.co.mw" target="_blank" className="rounded-xl bg-white px-8 py-3 font-semibold text-navy-900 shadow-md hover:bg-gray-100 transition">Login to BankNet360 →</a><a href="#forms" className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition">Register Now</a></div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {internetBankingFeatures.map((feature, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><feature.icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3><p className="mt-2 text-gray-500 text-sm">{feature.description}</p><ul className="mt-4 space-y-1.5">{feature.benefits.map((benefit, i) => (<li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-3.5 w-3.5 text-green-600" />{benefit}</li>))}</ul></div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="rounded-2xl bg-navy-50 p-10 text-center"><h3 className="text-2xl font-semibold text-gray-900">Why choose BankNet360?</h3><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">{banknetFeatures.map((feature, idx) => (<div key={idx} className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-4 shadow-sm"><CheckCircle className="h-5 w-5 text-green-600" /><span>{feature}</span></div>))}</div></div>
    </div>
  )
}

// ==================== MAIN APP ====================
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [newsImageTick, setNewsImageTick] = useState(0)
  const [autoRotateNews, setAutoRotateNews] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMainTab, setActiveMainTab] = useState('Internet Banking')

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

  const handleTabClick = () => setMobileMenuOpen(false)

  const renderMainTabContent = () => {
    switch (activeMainTab) {
      case 'Retail': return <RetailContent />
      case "SME's": return <SMEContent />
      case 'Corporate': return <CorporateContent />
      case 'e-Services': return <EServicesContent />
      case 'Rates & Tariffs': return <RatesTariffsContent />
      case 'Publications': return <PublicationsSection />
      case 'Media': return <MediaSection />
      case 'Internet Banking': return <InternetBankingPage />
      default: return <InternetBankingPage />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }`}</style>
      <a href="#main-content" className="sr-only z-[70] rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to main content</a>

      {/* Header - Clean, Premium Navigation */}
      <header className="fixed z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <a href="#" className="flex items-center gap-3"><LogoMark size="sm" /></a>
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navTabs.map((tab) => (
                <button key={tab} onClick={() => setActiveMainTab(tab)} className={`text-sm font-semibold transition-colors hover:text-navy-700 ${activeMainTab === tab ? 'text-navy-900 border-b-2 border-navy-900 pb-1' : 'text-gray-600'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#login" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition">Internet Banking</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden">{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-1 border-t border-gray-100 pt-4">
              {navTabs.map((tab) => (
                <button key={tab} onClick={() => { setActiveMainTab(tab); handleTabClick() }} className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${activeMainTab === tab ? 'bg-navy-50 text-navy-900' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {tab}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-100"><a href="#login" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-700">Login</a></div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="pt-20 lg:pt-24">
        {/* Hero Section - Only for non-Internet Banking tabs */}
        {activeMainTab !== 'Internet Banking' && (
          <section className="relative bg-gradient-to-br from-navy-50 via-white to-white py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5 text-sm font-medium text-navy-800 mb-6"><Globe className="h-4 w-4" />BankNet360</div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">Bank<span className="text-navy-800"> anywhere, anytime.</span></h1>
                  <p className="mt-4 text-lg text-gray-500">Secure, instant, and 24/7 access to your finances.</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"><a href="https://www.banknet360.co.mw" target="_blank" className="rounded-full bg-navy-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-navy-800">Access BankNet360</a><a href="#forms" className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:border-navy-300 hover:text-navy-700">Register</a></div>
                </div>
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl">
                  <div className="border-b border-gray-100 bg-gradient-to-r from-navy-800 to-navy-900 p-4 text-white rounded-t-2xl"><h3 className="font-semibold">Foreign Exchange Rates</h3></div>
                  <div className="divide-y divide-gray-100">{Object.entries(exchangeRates).map(([currency, rates]) => (<div key={currency} className="flex justify-between p-4 hover:bg-gray-50"><div><span className="font-semibold">{currency}/MWK</span></div><div className="text-right"><span className="font-mono">{rates.buying.toFixed(2)}</span><p className="text-xs text-gray-500">Sell {rates.selling.toFixed(2)}</p></div></div>))}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Tab Content */}
        <section className="px-4 py-16 sm:px-6"><div className="container mx-auto">{renderMainTabContent()}</div></section>

        {/* Forms Section */}
        <section id="forms" className="px-4 py-20 bg-gray-50"><div className="container mx-auto text-center"><h2 className="text-3xl font-semibold text-gray-900">Get started today</h2><div className="mx-auto max-w-3xl mt-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-200"><div className="flex flex-col gap-4 sm:flex-row justify-center"><a href="#" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-white font-semibold hover:bg-navy-800"><Download className="h-4 w-4" /> Download Application</a><a href="https://www.banknet360.co.mw" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-navy-300">Visit BankNet360</a></div></div></div></section>

        {/* Latest News Section */}
        <section className="px-4 py-20"><div className="container mx-auto"><h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Latest insights</h2><div className="grid gap-8 md:grid-cols-3">{latestNews.map((news, idx) => (<article key={news.title} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"><img src={newsImages[(newsImageTick + idx) % newsImages.length]} alt={news.title} className="h-48 w-full object-cover" /><div className="p-6"><div className="text-xs font-semibold uppercase tracking-wide text-navy-600">{news.category}</div><h3 className="mt-2 text-xl font-semibold text-gray-900">{news.title}</h3><div className="mt-4 flex items-center justify-between text-sm text-gray-500"><span>{news.date}</span><span>{news.readTime}</span></div></div></article>))}</div></div></section>

        {/* Final CTA */}
        <section className="px-4 py-20 bg-navy-900"><div className="container mx-auto text-center text-white"><h2 className="text-3xl font-semibold">Ready to experience the future of banking?</h2><p className="mt-3 text-white/80">Join over 500,000 customers who trust NBM.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><a href="https://www.banknet360.co.mw" target="_blank" className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-navy-900 shadow-md hover:bg-gray-100 transition">Login to BankNet360</a><a href="#forms" className="rounded-full border border-white/30 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">Register Now</a></div></div></section>
      </main>

      <footer className="bg-gray-900 px-4 py-14 text-gray-400"><div className="container mx-auto"><div className="mb-10 grid gap-10 md:grid-cols-4"><div><LogoMark size="sm" /><p className="mt-4 text-sm">Your privacy matters. <a href="#" className="text-white hover:underline">Read our Privacy Policy</a>.</p></div><div><h4 className="font-semibold text-white mb-4">Explore</h4><ul className="space-y-2 text-sm"><li><a href="#">About Us</a></li><li><a href="#">Contact Us</a></li><li><a href="#">Media</a></li></ul></div><div><h4 className="font-semibold text-white mb-4">Digital</h4><ul className="space-y-2 text-sm"><li><a href="#">BankNet360</a></li><li><a href="#">Mo626 Digital+</a></li></ul></div><div><h4 className="font-semibold text-white mb-4">Support</h4><ul className="space-y-2 text-sm"><li className="flex items-center gap-2"><Phone className="h-4 w-4" />(265) 111 820 622</li><li className="flex items-center gap-2"><Mail className="h-4 w-4" />ebu@natbankmw.com</li></ul></div></div><div className="border-t border-gray-800 pt-8 text-center text-xs"><p>&copy; {new Date().getFullYear()} National Bank of Malawi plc. All rights reserved.</p></div></div></footer>
    </div>
  )
}