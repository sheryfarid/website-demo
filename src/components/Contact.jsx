import { useState } from 'react'
import { CalendarCheck, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, services } from '../data/data'

const INPUT =
  'w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-900/40 focus:outline-none focus:ring-2 focus:ring-brand-200'

export default function Contact() {
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    service: '',
    branch: '',
    date: '',
    time: '',
  })
  const [confirmed, setConfirmed] = useState(false)

  const update = (e) => setBooking({ ...booking, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setConfirmed(true)
    setTimeout(() => {
      setConfirmed(false)
      setBooking({ name: '', phone: '', service: '', date: '', time: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="bg-brand-50/40 py-16 sm:py-20">
      <div className="container-x">
        <div className="mb-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Book Appointment
          </p>
          <h2 className="section-title mt-2">Reserve Your Slot</h2>
          <p className="section-subtitle">
            Fill the form below and our team will confirm your appointment on WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Phone, label: 'Call Us', value: CONTACT.phone },
              { icon: Mail, label: 'Email', value: CONTACT.email },
              { icon: MapPin, label: 'Address', value: CONTACT.address },
              { icon: Clock, label: 'Timings', value: 'Mon–Sun: 10:00 AM – 10:00 PM' },
            ].map((c) => (
              <div key={c.label} className="card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-900/50">{c.label}</p>
                  <p className="font-medium text-ink-900">{c.value}</p>
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={submit} className="card p-6 sm:p-8 lg:col-span-3">
            {confirmed ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CalendarCheck className="h-8 w-8" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-ink-900">
                  Booking Received!
                </h3>
                <p className="mt-2 max-w-sm text-ink-900/60">
                  Thank you — we will confirm your appointment on WhatsApp shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Full Name</label>
                  <input required name="name" value={booking.name} onChange={update} placeholder="Your name" className={INPUT} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Phone / WhatsApp</label>
                  <input required name="phone" value={booking.phone} onChange={update} placeholder="03xx xxxxxxx" className={INPUT} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Service</label>
                  <select required name="service" value={booking.service} onChange={update} className={INPUT}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} — {s.category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Branch</label>
                  <select required name="branch" value={booking.branch} onChange={update} className={INPUT}>
                    <option value="">Select a branch</option>
                    <option>Zebi Salon — Clifton</option>
                    <option>Zebi Salon — Gulshan</option>
                    <option>Zebi Salon — DHA Phase 5</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Date</label>
                  <input required type="date" name="date" value={booking.date} onChange={update} className={INPUT} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-900">Time</label>
                  <input required type="time" name="time" value={booking.time} onChange={update} className={INPUT} />
                </div>
                <button type="submit" className="btn-primary w-full sm:col-span-2">
                  Confirm Appointment
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}