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

// Publications data - official documents and reports
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

// BankNet360 Features from official website 
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
  const boxSize =
    size === 'lg'
      ? 'h-16 w-30 sm:h-11 sm:w-32'
      : 'h-17 w-34 sm:h-12 sm:w-40'
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-xl bg-nbm-blue-dark shadow-md ring-1 ring-white/25 ${boxSize}`}
    >
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

// Helper function to get href for tab
const getTabHref = (tab: string) => {
  if (tab === 'Rates & Tariffs') return '#rates'
  if (tab === 'Forms') return '#forms'
  if (tab === 'Publications') return '#publications'
  if (tab === 'Media') return '#news'
  return '#retail'
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [newsImageTick, setNewsImageTick] = useState(0)
  const [autoRotateNews, setAutoRotateNews] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!autoRotateNews) return

    const interval = window.setInterval(() => {
      setNewsImageTick((value) => (value + 1) % newsImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [autoRotateNews])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setAutoRotateNews(false)
  }, [])

  // Close mobile menu when clicking a link
  const handleTabClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only z-[70] rounded-md bg-nbm-blue px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Skip to main content
      </a>

      <header className="fixed z-50 w-full">
        {/* Top utility bar */}
        <div className="hidden bg-nbm-blue-dark text-white lg:block">
          <div className="container mx-auto flex items-center justify-between px-6 py-2 text-xs">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-nbm-blue-accent-light" />
                Secure Banking
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Phone className="h-3.5 w-3.5" />
                24/7 Support: (265) 111 820 622
              </span>
            </div>
            <div className="flex items-center gap-5 text-white/80">
              <a href="#privacy" className="transition hover:text-nbm-blue-accent-light">
                Privacy Policy
              </a>
              <a href="#terms" className="transition hover:text-nbm-blue-accent-light">
                Terms &amp; Conditions
              </a>
              <span className="font-medium text-nbm-blue-accent-light">Inspire Greatness</span>
            </div>
          </div>
        </div>

        {/* Navigation - Logo and tabs horizontally */}
        <nav
          aria-label="Primary navigation"
          className={`w-full transition-all duration-300 ${
            scrolled
              ? 'border-b border-gray-100 bg-white/95 py-2 shadow-lg backdrop-blur-md'
              : 'bg-white py-3 shadow-sm'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            {/* First row: Logo, Internet Banking CTA, and Mobile Menu Button */}
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-3 no-underline" aria-label="National Bank of Malawi home">
                <LogoMark size="sm" />
                {/* <div className="hidden sm:block">
                  <span className="text-base font-bold leading-tight text-gray-900">
                    National Bank
                  </span>
                  <span className="block text-xs font-medium text-nbm-blue">
                    of Malawi plc · The bank of the Nation
                  </span>
                </div> */}
              </a>
              
              <div className="flex items-center gap-3">
                <a
                  href="#login"
                  className="flex items-center gap-2 rounded-full bg-nbm-blue px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-nbm-blue-light sm:px-5"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Internet Banking</span>
                  <span className="inline sm:hidden">Login</span>
                </a>
                
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-nbm-blue lg:hidden"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Desktop Navigation Tabs - hidden on mobile, visible on large screens */}
            <div className="mt-3 hidden border-t border-gray-100 pt-3 lg:block">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {navTabs.map((tab) => (
                  <a
                    key={tab}
                    href={getTabHref(tab)}
                    className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-nbm-blue"
                  >
                    {tab}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Dropdown - visible when menu is open */}
            <div
              className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                mobileMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-100 pt-3 pb-2">
                <div className="flex flex-col space-y-2">
                  {navTabs.map((tab) => (
                    <a
                      key={tab}
                      href={getTabHref(tab)}
                      onClick={handleTabClick}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-nbm-blue"
                    >
                      {tab}
                    </a>
                  ))}
                </div>
                {/* Mobile-only utility links */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex flex-col space-y-2">
                    <a href="#privacy" onClick={handleTabClick} className="block rounded-lg px-3 py-1.5 text-xs text-gray-500 transition hover:bg-gray-50 hover:text-nbm-blue">
                      Privacy Policy
                    </a>
                    <a href="#terms" onClick={handleTabClick} className="block rounded-lg px-3 py-1.5 text-xs text-gray-500 transition hover:bg-gray-50 hover:text-nbm-blue">
                      Terms & Conditions
                    </a>
                    <div className="px-3 py-1.5 text-xs text-nbm-blue-accent-light">
                      <span className="font-medium">Inspire Greatness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero section with internet banking focus */}
        <section className="relative overflow-hidden bg-gradient-to-br from-nbm-blue-50 via-white to-white px-4 pb-20 pt-40 sm:px-6 lg:pb-24 lg:pt-48">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-nbm-blue/5 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-nbm-blue-accent/10 blur-3xl" aria-hidden />
          <div className="container relative mx-auto">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="space-y-6 lg:w-[52%]">
                <div className="inline-flex items-center gap-2 rounded-full border border-nbm-blue/20 bg-white px-4 py-2 text-sm font-medium text-nbm-blue shadow-sm">
                  <Globe className="h-4 w-4 text-nbm-blue-accent" />
                  BankNet360 · Internet Banking
                </div>
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                  Bank
                  <span className="mt-1 block bg-gradient-to-r from-nbm-blue to-nbm-blue-light bg-clip-text text-transparent">
                    Anywhere, Anytime
                  </span>
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-gray-500">
                  Experience the freedom of unlimited banking with BankNet360. Access your accounts 24/7, make payments, and manage your finances from any corner of the globe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.banknet360.co.mw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-nbm-blue px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-nbm-blue-light hover:shadow-xl no-underline sm:px-8 sm:py-3.5"
                  >
                    <Globe className="h-4 w-4" /> Access BankNet360
                  </a>
                  <a
                    href="#forms"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-nbm-blue hover:text-nbm-blue no-underline sm:px-8 sm:py-3.5"
                  >
                    <UserPlus className="h-4 w-4" /> Register
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-nbm-blue/10 text-xs font-bold text-nbm-blue">24</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-nbm-blue/10 text-xs font-bold text-nbm-blue">7</div>
                  </div>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-800">24/7 Access</strong> from anywhere in the world
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Digital Certificate', 'Two-Factor Authentication', 'Bank-grade Security'].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-nbm-blue/15 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exchange rates card */}
              <div className="w-full lg:w-[44%]">
                <div id="rates" className="relative mx-auto max-w-md">
                  <div className="absolute -left-8 -top-8 h-64 w-64 animate-pulse rounded-full bg-nbm-blue/10 blur-3xl" aria-hidden />
                  <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[var(--shadow-card)]">
                    <img
                      src="/real/hero.jpg"
                      alt="BankNet360 internet banking"
                      className="h-44 w-full object-cover"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/real/news1.jpg'
                      }}
                    />
                    <div className="border-b border-gray-100 bg-gradient-to-r from-nbm-blue to-nbm-blue-light px-6 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Foreign Exchange Rates</h3>
                          <p className="mt-0.5 text-xs text-white/75">Live indicative rates</p>
                        </div>
                        <button
                          type="button"
                          className="rounded-lg bg-white/15 p-2 transition hover:bg-white/25"
                          aria-label="Refresh rates"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-50 p-2">
                      {Object.entries(exchangeRates).map(([currency, rates]) => (
                        <div
                          key={currency}
                          className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition hover:bg-nbm-blue-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nbm-blue/10 text-xs font-bold text-nbm-blue">
                              {currency}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{currency}/MWK</p>
                              <p className="text-xs text-gray-400">Indicative</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-mono text-sm font-medium text-gray-800">
                              {rates.buying.toFixed(2)}
                            </p>
                            <p className="font-mono text-xs text-gray-500">
                              Sell {rates.selling.toFixed(2)}
                            </p>
                            <p
                              className={`text-xs font-medium ${
                                rates.change.startsWith('+') ? 'text-nbm-blue' : 'text-red-500'
                              }`}
                            >
                              {rates.change}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#rates"
                      className="flex w-full items-center justify-center gap-1 border-t border-gray-100 py-4 text-sm font-semibold text-nbm-blue transition hover:gap-2 no-underline"
                    >
                      More foreign exchange details
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BankNet360 Features Section - Official Content */}
        <section className="bg-white px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue">
                <Zap className="h-4 w-4" />
                Freedom Unlimited
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Why Choose BankNet360?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                BankNet360 is National Bank of Malawi's premier internet banking solution, offering around-the-clock access to your accounts from anywhere in the world. 
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {banknetFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nbm-blue/10 text-nbm-blue">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                <strong className="text-nbm-blue">URL:</strong> www.banknet.co.mw | <strong className="text-nbm-blue">BankNet360:</strong> www.banknet360.co.mw 
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section - Official Rates  */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Subscription Fees</h2>
              <p className="mt-2 text-gray-500">Affordable internet banking for all customers</p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-nbm-blue/10">
                  <Users className="h-8 w-8 text-nbm-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Retail Customers</h3>
                <p className="mt-4 text-3xl font-extrabold text-nbm-blue">MK2,000<span className="text-base font-normal text-gray-500">/month</span></p>
                <p className="mt-2 text-sm text-gray-500">Personal accounts, 24/7 access, unlimited transactions</p>
              </div>
              <div className="rounded-2xl border-2 border-nbm-blue/30 bg-gradient-to-br from-white to-nbm-blue-50 p-8 text-center shadow-sm transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-nbm-blue">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Corporate / SME</h3>
                <p className="mt-4 text-3xl font-extrabold text-nbm-blue">MK5,500<span className="text-base font-normal text-gray-500">/month</span></p>
                <p className="mt-2 text-sm text-gray-500">Bulk payments, multi-user access, treasury features</p>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              *Selected transactions attract additional fees per NBM Tariff Schedule 
            </p>
          </div>
        </section>

        {/* Publications Section - NEW */}
        <section id="publications" className="px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-nbm-blue-50 px-4 py-1.5 text-sm font-medium text-nbm-blue">
                <FileText className="h-4 w-4" />
                Official Documents
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Publications & Reports
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                Access our annual reports, financial statements, policies, and other official publications.
              </p>
            </div>

            {/* Search and filter bar */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Search publications..."
                  className="w-full rounded-xl border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-nbm-blue focus:outline-none focus:ring-1 focus:ring-nbm-blue"
                />
                <FileText className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-nbm-blue px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-nbm-blue-light">All</button>
                <button className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-nbm-blue hover:text-nbm-blue">Annual Reports</button>
                <button className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-nbm-blue hover:text-nbm-blue">Financial</button>
                <button className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-nbm-blue hover:text-nbm-blue">Policies</button>
                <button className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-nbm-blue hover:text-nbm-blue">Guides</button>
              </div>
            </div>

            {/* Publications grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {publicationsData.map((pub, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-nbm-blue/20 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nbm-blue/10 text-nbm-blue transition group-hover:bg-nbm-blue group-hover:text-white">
                    <pub.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-nbm-blue-accent">
                      {pub.category}
                    </span>
                  </div>
                  <h3 className="font-bold leading-snug text-gray-900 transition group-hover:text-nbm-blue">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {pub.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {pub.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {pub.size}
                    </span>
                  </div>
                  <div className="mt-4 pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition hover:gap-2 no-underline"
                    >
                      Download PDF <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View all link */}
            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-nbm-blue/30 bg-white px-6 py-3 text-sm font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white no-underline"
              >
                View All Publications <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Archive note */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
              <p className="text-xs text-gray-500">
                Archived publications prior to 2020 are available upon request. Contact our corporate communications team at <a href="mailto:corporatecomms@nbm.mw" className="text-nbm-blue hover:underline">corporatecomms@nbm.mw</a>
              </p>
            </div>
          </div>
        </section>

        {/* Security Section - Official Content */}
        <section className="bg-nbm-blue-dark px-4 py-16 text-white sm:px-6">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <Lock className="h-4 w-4" />
                Bank-Grade Security
              </div>
              <h2 className="mt-4 text-3xl font-bold">Your Security is Our Priority</h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/70">
                BankNet360 incorporates comprehensive security features to protect your financial information. 
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Digital Certificates', desc: '128-bit SSL encryption with digital certificates and firewalls', icon: Shield },
                { title: 'Unique User ID', desc: 'Personal identification number unique to each customer', icon: Lock },
                { title: 'Password Protocols', desc: 'Secure password management with regular updates', icon: KeyRound },
                { title: 'Two-Factor Auth', desc: 'OTP delivered to mobile phone and/or email inbox', icon: Smartphone },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <item.icon className="mb-4 h-8 w-8 text-nbm-blue-accent-light" />
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
              <p className="text-sm text-yellow-300">
                ⚠️ <strong>Important:</strong> National Bank of Malawi will never request confirmation of your login details via email or phone. Always verify you are on the official BankNet360 website. 
              </p>
            </div>
          </div>
        </section>

        {/* Forms Section for Registration */}
        <section id="forms" className="px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Register for Internet Banking</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                Complete the application form to start your BankNet360 journey. Available to all National Bank of Malawi account holders. 
              </p>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
              <div className="border-b border-gray-100 bg-gradient-to-r from-nbm-blue to-nbm-blue-light px-6 py-4 text-white">
                <h3 className="font-semibold">Internet Banking Application Form</h3>
                <p className="mt-1 text-sm text-white/75">Download, complete, and submit to any NBM Service Centre</p>
              </div>
              <div className="p-6">
                <div className="mb-6 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">For assistance, contact:</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-nbm-blue" /> (265) 111 820 622</span>
                    <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-nbm-blue" /> ebu@natbankmw.com </span>
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-nbm-blue" /> NBM Towers, Blantyre</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-nbm-blue px-6 py-3 font-semibold text-white transition hover:bg-nbm-blue-light"
                  >
                    <Download className="h-4 w-4" /> Download Application Form (PDF)
                  </a>
                  <a
                    href="https://www.banknet360.co.mw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-nbm-blue hover:text-nbm-blue"
                  >
                    <Globe className="h-4 w-4" /> Visit BankNet360 Portal
                  </a>
                </div>
                <div className="mt-6 text-xs text-gray-400">
                  <p>* Corporate customers require Super-User authorization for multi-user access </p>
                  <p className="mt-1">* Terms and conditions apply. Monthly subscription fees as per current tariff.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain similar to original */}
        {/* Premium differentiator band */}
        <section className="bg-[#050b1a] px-4 py-16 text-white sm:px-6">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nbm-blue-accent-light">
                  Digital Innovation Leader
                </p>
                <h2 className="mt-2 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
                  91% of transactions are now done on digital platforms 
                </h2>
              </div>
              <a
                href="#forms"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050b1a] no-underline transition hover:bg-nbm-blue-accent-light"
              >
                Register Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {standoutFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-nbm-blue-accent/50 hover:bg-white/10"
                >
                  <p className="mb-3 text-xs font-bold text-nbm-blue-accent-light">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reference rate banner */}
        <div className="border-y border-nbm-blue-accent/30 bg-gradient-to-r from-nbm-blue-accent/15 to-nbm-blue-50 px-4 py-4 sm:px-6">
          <div className="container mx-auto flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-700">
              <strong className="text-nbm-blue-dark">April 2026 Reference Rate:</strong>{' '}
              revised to <strong>20.80%</strong> effective 7 April (prev. 22.40%).
            </p>
            <a href="#rates" className="text-sm font-semibold text-nbm-blue no-underline hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Stats */}
        <section className="border-b border-gray-100 bg-white py-14 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '500K+', label: 'Active Customers', icon: Users },
                { value: '91%', label: 'Digital Transactions', icon: Smartphone },
                { value: '29+', label: 'Service Centres', icon: Building2 },
                { value: '24/7', label: 'Customer Support', icon: Headphones },
              ].map((stat) => (
                <div key={stat.label} className="group text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-nbm-blue/10 text-nbm-blue transition group-hover:scale-110 group-hover:bg-nbm-blue group-hover:text-white">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banking pillars */}
        <section id="retail" className="bg-nbm-blue-dark px-4 py-16 text-white sm:px-6">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold lg:text-3xl">How we serve you</h2>
              <p className="mt-2 text-white/70">Comprehensive banking for every need</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {bankingPillars.map((pillar) => (
                <a
                  key={pillar.title}
                  href="#"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-nbm-blue-accent/50 hover:bg-white/10 no-underline"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 transition group-hover:scale-105">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full bg-white p-1 object-contain"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/real/personal.png'
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{pillar.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nbm-blue-accent-light group-hover:gap-2">
                    Explore <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile app promo */}
        <section id="app" className="relative overflow-hidden bg-gradient-to-br from-nbm-blue-dark via-nbm-blue to-nbm-blue-light px-4 py-20 text-white sm:px-6">
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.18),transparent_60%)]"
            aria-hidden
          />
          <div className="container relative mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <Smartphone className="h-4 w-4 text-nbm-blue-accent-light" />
                  Mo626 Digital+ Mobile App
                </div>
                <h2 className="text-3xl font-bold lg:text-4xl">Banking at your fingertips</h2>
                <p className="text-lg text-white/80">
                  Download Mo626 Digital+ for seamless transactions, bill pay, and account
                  management — running on both Android and iOS systems. 
                </p>
                <ul className="space-y-3">
                  {['Send money to any bank account', 'Push money to mobile wallets', 'Pay utility bills & buy electricity', 'Cardless withdrawals', 'Buy airtime instantly'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-nbm-blue-accent-light" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button type="button" className="flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 transition hover:bg-black">
                    <Apple className="h-6 w-6" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase opacity-80">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  <button type="button" className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20">
                    <Smartphone className="h-6 w-6" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase opacity-80">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-72 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur">
                  <img
                    src="/real/mobile.jpg"
                    alt="Mo626 Digital+ mobile app"
                    className="h-[28rem] w-full rounded-[1.25rem] object-cover"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/real/hero.jpg'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
                <p className="mt-2 text-gray-500">Stay updated with NBM announcements</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1 self-start rounded-lg border border-nbm-blue/30 px-4 py-2 text-sm font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white no-underline sm:self-auto"
              >
                View All News <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mb-4 flex items-center justify-between rounded-xl border border-nbm-blue/15 bg-nbm-blue-50/50 px-4 py-2">
              <p className="text-xs font-medium text-gray-600">
                News images rotate automatically for quick scanning.
              </p>
              <button
                type="button"
                onClick={() => setAutoRotateNews((prev) => !prev)}
                className="rounded-md border border-nbm-blue/25 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white"
                aria-pressed={autoRotateNews}
              >
                {autoRotateNews ? 'Pause rotation' : 'Resume rotation'}
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {latestNews.map((news, idx) => (
                <article
                  key={news.title}
                  className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-nbm-blue/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <img
                    src={newsImages[(newsImageTick + idx) % newsImages.length]}
                    alt={news.title}
                    className="mb-4 h-32 w-full rounded-xl object-cover transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/real/news1.jpg'
                    }}
                  />
                  <div className="text-xs font-bold uppercase tracking-wide text-nbm-blue-accent">
                    {news.category}
                  </div>
                  <h3 className="mt-2 font-bold leading-snug text-gray-900 transition group-hover:text-nbm-blue">
                    {news.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {news.date}
                    </span>
                    <span>{news.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="open" className="px-4 py-20 sm:px-6">
          <div className="container mx-auto rounded-3xl bg-gradient-to-r from-nbm-blue-50 via-white to-nbm-blue-50 px-8 py-16 text-center ring-1 ring-nbm-blue/10">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to experience internet banking?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-gray-500">
              Join over 500,000 customers who bank with National Bank of Malawi.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.banknet360.co.mw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-nbm-blue px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-nbm-blue-light hover:shadow-xl no-underline"
              >
                Login to BankNet360 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#forms"
                className="inline-flex items-center gap-2 rounded-full border-2 border-nbm-blue bg-white px-8 py-4 text-lg font-bold text-nbm-blue shadow-lg transition hover:scale-105 hover:bg-nbm-blue-50 no-underline"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-nbm-blue-dark px-4 py-14 text-gray-400 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <LogoMark size="sm" />
                {/* <span className="font-semibold leading-tight text-white">
                  National Bank
                  <br />
                  of Malawi plc
                </span> */}
              </div>
              <p className="text-sm leading-relaxed">
                Your privacy matters.{' '}
                <a href="#privacy" className="text-nbm-blue-accent-light hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Contact Us', 'Media', 'Publications'].map((link) => (
                  <li key={link}>
                    <a href={link === 'Publications' ? '#publications' : '#'} className="transition hover:text-nbm-blue-accent-light">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Digital Banking</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.banknet360.co.mw" target="_blank" rel="noopener noreferrer" className="transition hover:text-nbm-blue-accent-light">BankNet360</a></li>
                <li><a href="#" className="transition hover:text-nbm-blue-accent-light">Mo626 Digital+</a></li>
                <li><a href="#" className="transition hover:text-nbm-blue-accent-light">BankNet Online</a></li>
                <li><a href="#" className="transition hover:text-nbm-blue-accent-light">e-Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  (265) 111 820 622
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  ebu@natbankmw.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  NBM Towers, 7 Henderson Street, Blantyre
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} National Bank of Malawi plc. All rights
              reserved. Authorised by the Reserve Bank of Malawi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Missing icon component
function KeyRound({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
      <circle cx="16.5" cy="9.5" r="2.5" />
    </svg>
  )
}