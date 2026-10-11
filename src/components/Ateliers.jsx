import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { ateliers } from '../data/data'

export default function Ateliers() {
  return (
    <section id="ateliers" className="container-x py-14 sm:py-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          Visit Us
        </p>
        <h2 className="mt-1 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
          Zebi's Ateliers
        </h2>
        <p className="section-subtitle">
          Three prime branches across Karachi — walk in for a free consultation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {ateliers.map((b) => (
          <div key={b.name} className="card">
            <div className="relative h-52 overflow-hidden">
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                Karachi
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-ink-900">{b.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-ink-900/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {b.address}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink-900/70">
                <Clock className="h-4 w-4 shrink-0 text-brand-600" />
                {b.timings}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink-900/70">
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                {b.phone}
              </p>
              <a href="#contact" className="btn-outline mt-5 w-full text-xs">
                <Navigation className="h-4 w-4" /> Get Direction
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}