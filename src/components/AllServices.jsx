import { useEffect, useMemo, useState } from 'react'
import { services } from '../data/data'
import ServiceCard from './ServiceCard'

const FILTERS = ['All', 'Hair', 'Skin', 'Spa', 'Makeover']

export default function AllServices({ searchQuery }) {
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const handler = (e) => setFilter(e.detail)
    window.addEventListener('filter-category', handler)
    return () => window.removeEventListener('filter-category', handler)
  }, [])

  const list = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return services
      .filter((s) => filter === 'All' || s.category === filter)
      .filter(
        (s) =>
          !q ||
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      )
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [filter, searchQuery])

  return (
    <section id="shop" className="py-14 sm:py-16">
      <div className="container-x">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            Complete Price List
          </p>
          <div className="mt-1 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
              Shop More — {list.length} Services
            </h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    filter === f
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-ink-900/70 ring-1 ring-ink-900/10 hover:bg-brand-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {list.length === 0 ? (
          <p className="py-16 text-center text-ink-900/50">
            No services match “{searchQuery}”. Try another search.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {list.map((service) => (
              <div key={service.id} className="rounded-2xl border border-ink-900/10 bg-white p-3">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}