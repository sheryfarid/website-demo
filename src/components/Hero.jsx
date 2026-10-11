import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/data'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setIndex((i) => (i + 1) % heroSlides.length)

  return (
    <section id="home" className="relative h-[86vh] min-h-[560px] w-full overflow-hidden bg-ink-900">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.eyebrow}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/40 to-transparent" />
          <div className="container-x flex h-full items-center">
            <div className="max-w-xl text-white">
              {i === index && (
                <div className="animate-fadeUp">
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] backdrop-blur">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-md text-lg text-white/85">{slide.sub}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href={slide.ctaHref} className="btn-primary bg-white text-brand-700 shadow-none hover:bg-white">
                      {slide.ctaLabel}
                    </a>
                    <a href="#shop" className="btn-outline border-white/40 text-white hover:bg-white/10">
                      Our Services
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-brand-600 sm:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-brand-600 sm:block"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-brand-500' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}