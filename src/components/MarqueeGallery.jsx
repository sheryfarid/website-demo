import { galleryMarquee, img } from '../data/data'

export default function MarqueeGallery() {
  const loop = [...galleryMarquee, ...galleryMarquee]

  return (
    <section className="overflow-hidden border-y border-ink-900/5 bg-ink-900 py-14">
      <div className="container-x mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
          Inside the Studio
        </p>
        <h2 className="mt-1 font-heading text-3xl font-bold text-white sm:text-4xl">
          The Zebi Experience
        </h2>
      </div>

      <div className="relative flex w-max animate-marquee gap-4">
        {loop.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="h-52 w-40 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-52"
          >
            <img
              src={img(id, 500)}
              alt="Zebi Salon"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}