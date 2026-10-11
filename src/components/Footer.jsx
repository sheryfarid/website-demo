import { useState } from 'react'
import { ArrowRight, ChevronDown, Globe, Mail, MapPin, Phone, Star } from 'lucide-react'
import { CONTACT, navLinks } from '../data/data'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons'
import logo from '../assets/logo.webp'

const CURRENT_YEAR = new Date().getFullYear()

const menuLinks = [
  { label: 'About Us', href: '#home' },
  { label: 'Shop Services', href: '#shop' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Our Branches', href: '#ateliers' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', handle: '@zebisalon', icon: InstagramIcon },
  { label: 'Facebook', handle: '/zebisalon', icon: FacebookIcon },
  { label: 'YouTube', handle: '/zebisalon', icon: YoutubeIcon },
]

const policies = ['Terms of Service', 'Shipping Policy', 'Privacy Policy', 'Refund Policy']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 3000)
  }

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-2 xl:grid-cols-4">
        <div>
          <a href="#home" className="inline-flex items-center">
            <img src={logo} alt="Zebi Salon" className="h-16 w-auto" />
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Zebi Salon is a leading beauty destination in Karachi — known for signature bridal
            makeovers, professional salon services for hair, skin and spa, and premium care for
            every occasion.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
            ))}
            <span className="ml-2 text-xs text-white/60">4.9 · 2,400+ reviews</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Menu</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {menuLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-2 text-white/60 transition hover:translate-x-1 hover:text-brand-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-brand-400" /> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Social Media</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href="#" className="flex items-center gap-3 text-white/60 transition hover:text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-600">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-white/80">{s.label}</span>
                    <span className="block text-xs text-white/40">{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-400" /> {CONTACT.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-400" /> {CONTACT.email}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {CONTACT.address}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Subscribe</h4>
          <p className="mt-5 text-sm text-white/60">
            Join our mailing list for early access to sales, new services and promotions.
          </p>
          {done ? (
            <p className="mt-4 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold">
              Thank you — you're subscribed!
            </p>
          ) : (
            <form
              onSubmit={submit}
              className="mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1.5 pl-5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent py-2 text-sm text-white placeholder-white/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition hover:bg-brand-500"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white/70">
              <Globe className="h-4 w-4" /> English <ChevronDown className="h-3 w-3" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white/70">
              🇵🇰 PKR <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap justify-center gap-x-6 gap-y-2 py-4 text-xs">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-white/50 transition hover:text-brand-300">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {CURRENT_YEAR} Zebi Salon. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-white/50">
            {policies.map((p) => (
              <a key={p} href="#" className="transition hover:text-white">
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}