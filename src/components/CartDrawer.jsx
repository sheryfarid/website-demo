import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPKR } from '../data/data'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, removeItem, setQty } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-5">
          <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-ink-900">
            <ShoppingBag className="h-5 w-5 text-brand-600" />
            Your Booking Cart
          </h3>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="rounded-full p-2 text-ink-900/60 transition hover:bg-ink-900/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <ShoppingBag className="h-9 w-9" />
            </span>
            <p className="font-heading text-lg font-bold text-ink-900">Your cart is empty</p>
            <p className="text-sm text-ink-900/60">
              Browse our services and add treatments to begin your booking.
            </p>
            <a href="#services" onClick={closeCart} className="btn-primary mt-2">
              Explore Services
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-ink-900">{item.name}</p>
                      <button
                        aria-label="Remove item"
                        onClick={() => removeItem(item.id)}
                        className="text-ink-900/40 transition hover:text-brand-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-brand-600">
                      {item.category}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink-900/10 px-2 py-1">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="text-ink-900/60 hover:text-brand-600"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm font-semibold">{item.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="text-ink-900/60 hover:text-brand-600"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-heading font-bold text-brand-700">
                        {formatPKR(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-ink-900/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-widest text-ink-900/60">Total</p>
                <p className="font-heading text-2xl font-bold text-ink-900">{formatPKR(total)}</p>
              </div>
              <a
                href="#contact"
                onClick={closeCart}
                className="btn-primary mt-4 w-full"
              >
                Proceed to Book
              </a>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}