import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setTimeout(() => {
      setDone(false)
      setEmail('')
    }, 3500)
  }

  return (
    <section className="border-y border-ink-900/5 bg-brand-50/50 py-14">
      <div className="container-x mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          Newsletter
        </p>
        <h2 className="mt-1 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
          Subscribe
        </h2>
        <p className="mt-3 text-ink-900/60">
          Get early access to seasonal sales, new treatments and beauty tips.
        </p>

        {done ? (
          <p className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
            Thank you — you're on the list!
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full border border-ink-900/15 bg-white p-1.5 pl-5"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent py-2 text-sm text-ink-900 placeholder-ink-900/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}