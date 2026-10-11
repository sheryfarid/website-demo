import { useState } from 'react'
import { beforeAfter } from '../data/data'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)

  return (
    <section id="before-after" className="container-x py-16 sm:py-20">
      <div className="mb-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          Real Results
        </p>
        <h2 className="section-title mt-2">Magical Transformations</h2>
        <p className="section-subtitle">
          Drag the slider to see before and after results from our signature facial and makeup
          treatments.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-[16/9] select-none overflow-hidden rounded-3xl shadow-glow">
          <img
            src={beforeAfter.after}
            alt="After treatment"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={beforeAfter.before}
              alt="Before treatment"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ width: '100vw', maxWidth: 'none' }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-1 bg-white"
            style={{ left: `${pos}%` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pos}%` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink-900 shadow-glow">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            After
          </span>

          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}