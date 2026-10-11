import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { CONTACT } from '../data/data'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi Zebi Salon, I would like to book an appointment.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[5.5rem] right-7 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/80 text-white backdrop-blur transition hover:bg-brand-600"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}