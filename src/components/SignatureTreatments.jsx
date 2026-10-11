import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { signature } from '../data/data'
import ServiceCard from './ServiceCard'

export default function SignatureTreatments() {
  const track = useRef(null)

  const scroll = (dir) =>
    track.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section id="just-launched" className="container-x py-14 sm:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            Freshly Added
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Just Launched
          </h2>
        </div>
        <a
          href="#shop"
          className="hidden items-center gap-1 text-sm font-semibold uppercase tracking-wider text-brand-600 hover:text-brand-700 sm:flex"
        >
          See More <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="relative">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {signature.map((service) => (
            <div
              key={service.id}
              className="w-64 shrink-0 snap-start rounded-2xl border border-ink-900/10 bg-white p-3 transition hover:shadow-soft sm:w-72"
            >
              <ServiceCard service={service} layout="carousel" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="rounded-full border border-ink-900/15 p-2.5 text-ink-900 transition hover:bg-brand-600 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="rounded-full border border-ink-900/15 p-2.5 text-ink-900 transition hover:bg-brand-600 hover:text-white"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}