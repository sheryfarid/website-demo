import { ShoppingBag, Star } from 'lucide-react'
import { discountOf, formatPKR } from '../data/data'
import { useCart } from '../context/CartContext'

export default function ServiceCard({ service, layout = 'grid' }) {
  const { addItem } = useCart()
  const discount = discountOf(service)
  const isSquare = layout === 'carousel'

  return (
    <article className="group relative flex h-full flex-col bg-white">
      <div
        className={`relative w-full overflow-hidden ${isSquare ? 'aspect-square' : 'aspect-[4/3]'}`}
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
            service.soldOut ? 'grayscale' : ''
          }`}
        />

        {discount !== null && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 shadow-sm">
            Sale
          </span>
        )}
        {discount !== null && (
          <span className="absolute right-3 top-3 rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
            −{discount}%
          </span>
        )}
        {service.soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50">
            <span className="rounded-full bg-ink-900 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              Sold out
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] uppercase tracking-widest text-ink-900/50">
          Zebi Salon · {service.category}
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold text-ink-900">
          {service.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-ink-900/50">
          <span className="flex items-center gap-0.5 text-gold-500">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            {service.rating}
          </span>
          <span>({service.reviews} reviews)</span>
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-heading text-lg font-bold text-ink-900">
            {formatPKR(service.price)}
          </span>
          {service.oldPrice && (
            <span className="text-sm text-ink-900/40 line-through">
              {formatPKR(service.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3">
          {service.soldOut ? (
            <span className="block w-full rounded-full border border-ink-900/10 px-4 py-2 text-center text-sm font-semibold uppercase tracking-wider text-ink-900/40">
              Sold out
            </span>
          ) : (
            <button
              onClick={() => addItem(service)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              <ShoppingBag className="h-4 w-4" /> Add Service
            </button>
          )}
        </div>
      </div>
    </article>
  )
}