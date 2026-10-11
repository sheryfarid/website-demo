import { Clock, MapPin, Phone, PhoneCall } from 'lucide-react'
import { CONTACT, timingBadge } from '../data/data'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons'

const socials = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'YouTube', icon: YoutubeIcon },
]

export default function TopBar() {
  return (
    <div className="relative z-40 bg-ink-900 text-white">
      <div className="container-x flex h-9 items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 font-medium text-white/85 transition hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-brand-400" />
            {CONTACT.phone}
          </a>
          <span className="hidden items-center gap-1.5 text-white/70 md:flex">
            <Clock className="h-3.5 w-3.5 text-brand-400" /> {timingBadge}
          </span>
          <span className="hidden items-center gap-1.5 text-white/70 lg:flex">
            <MapPin className="h-3.5 w-3.5 text-brand-400" /> {CONTACT.address}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open Now
          </span>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 text-white/85 transition hover:text-white sm:flex"
          >
            <PhoneCall className="h-3.5 w-3.5 text-brand-400" /> WhatsApp Us
          </a>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-white/70 transition hover:text-brand-300"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}