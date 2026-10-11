import { shopTiles } from '../data/data'

export default function ShopTiles() {
  return (
    <section className="border-y border-ink-900/5 bg-white py-14 sm:py-16">
      <div className="container-x">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            Quick Links
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Shop by Need
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {shopTiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src={tile.image}
                alt={tile.label}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="font-heading text-sm font-bold text-white">{tile.label}</h3>
                <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-white/70 group-hover:text-brand-300">
                  Shop now
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}