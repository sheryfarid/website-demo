import { useEffect, useMemo, useRef, useState } from 'react'
import {
  CalendarCheck,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { CONTACT, formatPKR, navLinks, services } from '../data/data'
import logo from '../assets/logo.webp'

function Logo() {
  return (
    <a href="#home" className="flex shrink-0 items-center">
      <img src={logo} alt="Zebi Salon" className="h-12 w-auto" />
    </a>
  )
}

export default function Navbar({ searchQuery, onSearchChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const { count, openCart } = useCart()

  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return services
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      )
      .slice(0, 5)
  }, [searchQuery])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [mobileOpen])

  const pickSuggestion = (name) => {
    onSearchChange(name)
    setSearchOpen(false)
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white'
      }`}
    >
      <nav className="container-x relative z-30 flex items-center justify-between gap-4 py-3">
        <Logo />

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.category) {
                    e.preventDefault()
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                    window.dispatchEvent(
                      new CustomEvent('filter-category', { detail: link.category }),
                    )
                  }
                }}
                className="flex items-center rounded-full px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-ink-900/80 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <div className="relative">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-full p-2 transition ${
                searchOpen
                  ? 'bg-brand-600 text-white'
                  : 'text-ink-900/80 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              <Search className="h-5 w-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-80 rounded-2xl bg-white p-3 shadow-soft ring-1 ring-ink-900/5">
                <div className="flex items-center gap-2 rounded-xl bg-ink-900/5 px-3 py-2.5">
                  <Search className="h-4 w-4 shrink-0 text-ink-900/40" />
                  <input
                    ref={searchRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search services..."
                    className="w-full bg-transparent text-sm text-ink-900 placeholder-ink-900/40 focus:outline-none"
                  />
                </div>
                {suggestions.length > 0 && (
                  <ul className="mt-2 max-h-72 overflow-y-auto">
                    {suggestions.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => pickSuggestion(s.name)}
                          className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-brand-50"
                        >
                          <img
                            src={s.image}
                            alt={s.name}
                            className="h-11 w-11 rounded-lg object-cover"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-ink-900">
                              {s.name}
                            </span>
                            <span className="block text-xs uppercase tracking-wider text-brand-600">
                              {s.category}
                            </span>
                          </span>
                          <span className="shrink-0 text-sm font-semibold text-ink-900/70">
                            {formatPKR(s.price)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {searchQuery && suggestions.length === 0 && (
                  <p className="px-2 py-4 text-center text-sm text-ink-900/50">
                    No results for “{searchQuery}”
                  </p>
                )}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full p-2 text-ink-900/80 transition hover:bg-brand-50 hover:text-brand-600 lg:flex"
          >
            <User className="h-5 w-5" /> <span className="text-sm font-medium">Sign In</span>
          </a>

          <button
            aria-label="Open cart"
            onClick={openCart}
            className="relative rounded-full p-2 text-ink-900/80 transition hover:bg-brand-50 hover:text-brand-600"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-600 md:flex"
          >
            <CalendarCheck className="h-4 w-4" /> Book
          </a>

          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-ink-900 transition hover:bg-brand-50 xl:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-20 overflow-y-auto bg-white xl:hidden">
          <div className="px-6 pb-10 pt-[5.5rem]">
            <div className="mb-6 flex items-center gap-2 rounded-full bg-ink-900/5 px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-ink-900/40" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-transparent text-sm text-ink-900 placeholder-ink-900/40 focus:outline-none"
              />
            </div>
            {suggestions.length > 0 && (
              <ul className="mb-6 space-y-1">
                {suggestions.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => pickSuggestion(s.name)}
                      className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-brand-50"
                    >
                      <img
                        src={s.image}
                        alt={s.name}
                        className="h-11 w-11 rounded-lg object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-ink-900">
                          {s.name}
                        </span>
                        <span className="block text-xs uppercase tracking-wider text-brand-600">
                          {s.category} · {formatPKR(s.price)}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false)
                      if (link.category) {
                        e.preventDefault()
                        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                        window.dispatchEvent(
                          new CustomEvent('filter-category', { detail: link.category }),
                        )
                      }
                    }}
                    className="block rounded-xl px-4 py-3 font-heading text-2xl font-semibold text-ink-900 transition hover:bg-brand-50 hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-8 w-full"
            >
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </a>

            <div className="mt-8 space-y-2 border-t border-ink-900/10 pt-6 text-sm text-ink-900/70">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-600" /> {CONTACT.phone}
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" /> {CONTACT.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}