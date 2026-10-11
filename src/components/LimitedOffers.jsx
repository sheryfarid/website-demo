import { ArrowRight, Zap } from 'lucide-react'
import { offers } from '../data/data'
import ServiceCard from './ServiceCard'

export default function LimitedOffers() {
  return (
    <section id="offers" className="border-y border-ink-900/5 bg-brand-50/40 py-14 sm:py-16">
      <div className="container-x">
        <div className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            <Zap className="h-4 w-4 fill-brand-600 text-brand-600" /> Shop More, Pay Less
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            ⚡ Limited Time Salon Offers
          </h2>
          <a
            href="#shop"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-brand-600 hover:text-brand-700"
          >
            See More <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-2xl border border-ink-900/10 bg-white p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {offers.map((service) => (
            <div key={service.id} className="rounded-2xl border border-ink-900/10 p-3">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}