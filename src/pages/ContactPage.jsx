import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const initialState = { name: '', email: '', phone: '', message: '' }

function ContactPage() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required.'
    if (!/^\+?[0-9\s-]{8,}$/.test(form.phone)) nextErrors.phone = 'Valid phone number is required.'
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    const subject = `Website Contact: ${form.name.trim()}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      '',
      'Message:',
      form.message.trim(),
    ].join('\n')

    const mailtoUrl = `mailto:supertempsinternational@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setSubmitted(true)
    setForm(initialState)
    setErrors({})
  }

  return (
    <>
      <SeoTitle title="Contact Us" description="Contact Supertemps International Ltd in Nairobi via phone, email, or the online contact form." />
      <PageHero title="Contact Us" subtitle="Let’s work together to empower youth, strengthen businesses, and deliver impactful solutions in organizations." image="/pictures/contact1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <img src="/pictures/contact1.jpg" alt="Customer service representative assisting a client" loading="lazy" className="h-[280px] w-full rounded-2xl object-cover shadow-md" />
            <div className="card-base space-y-4 text-slate-700">
              <p className="flex items-start gap-2"><Phone size={18} className="mt-0.5 text-[#0f1e45]" /> +254 708 415 247</p>
              <p className="flex items-start gap-2"><Mail size={18} className="mt-0.5 text-[#0f1e45]" /> supertempsinternational@gmail.com</p>
              <p className="flex items-start gap-2"><MapPin size={18} className="mt-0.5 text-[#0f1e45]" /> Dunga Road Industrial Area<br />P.O. BOX 60584 - 00200<br />Nairobi, Kenya</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Supertemps Map"
                src="https://www.google.com/maps?q=Dunga%20Road%20Industrial%20Area%20Nairobi&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Send a Message</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1f3f87]" />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1f3f87]" />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1f3f87]" />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1f3f87]" />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full">Submit</button>
              {submitted && <p className="text-sm font-medium text-emerald-700">Thanks! Your email draft has been opened and addressed to supertempsinternational@gmail.com.</p>}
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ContactPage
