import { useState } from 'react'
import { findByCategory } from '../data/data'
import ServiceCard from './ServiceCard'

const TABS = [
  { name: 'Skin Care', tabId: 'Skin', image: 'photo-1570172619644-dfd03ed5d881' },
  { name: 'Hair Care', tabId: 'Hair', image: 'photo-1560066984-138dadb4c035' },
  { name: 'Spa', tabId: 'Spa', image: 'photo-1544161515-4ab6ce6db874' },
  { name: 'Makeover', tabId: 'Makeover', image: 'photo-1633681926022-84c23e8cb2d6' },
]

const imgUrl = (id) =>
  `https://images.unsplash.com/${id}?w=900&q=70&auto=format&fit=crop`

export default function WhatsNew({ id, heading }) {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const items = findByCategory(activeTab.tabId)

  return (
    <section
      id={id || 'whats-new'}
      className="container-x py-14 sm:py-16"
      onMouseLeave={() => setActiveTab(TABS[0])}
    >
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          Whats New
        </p>
        <h2 className="mt-1 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
          {heading || 'Explore by Category'}
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.tabId}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition ${
              activeTab.tabId === tab.tabId
                ? 'bg-brand-600 text-white shadow-glow'
                : 'bg-white text-ink-900/70 ring-1 ring-ink-900/10 hover:bg-brand-50'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="relative hidden overflow-hidden rounded-2xl lg:col-span-2 lg:block">
          <img
            src={imgUrl(activeTab.image)}
            alt={activeTab.name}
            className="h-full w-full object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <p className="text-xs uppercase tracking-widest text-white/70">Collection</p>
            <h3 className="font-heading text-3xl font-bold text-white">{activeTab.name}</h3>
            <a
              href="#shop"
              className="mt-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-900 transition hover:bg-brand-50"
            >
              Browse All
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:col-span-3">
          {items.map((service) => (
            <div key={service.id} className="rounded-2xl border border-ink-900/10 bg-white p-3">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}