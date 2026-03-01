import { createElement } from 'react'
import { BadgeDollarSign, Bot, Cog, Globe2, Handshake, Medal, Sparkles, UserCheck, Users2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import TestimonialSlider from '../components/TestimonialSlider'
import SeoTitle from '../components/SeoTitle'
import { testimonials } from '../data/testimonials'

const benefits = [
  { icon: Bot, title: 'Latest Technology', cardClass: 'bg-indigo-50 border-indigo-100', iconClass: 'bg-indigo-100 text-indigo-700' },
  { icon: BadgeDollarSign, title: 'Competitive Pricing', cardClass: 'bg-emerald-50 border-emerald-100', iconClass: 'bg-emerald-100 text-emerald-700' },
  { icon: Medal, title: 'Proven Track Record', cardClass: 'bg-amber-50 border-amber-100', iconClass: 'bg-amber-100 text-amber-700' },
  { icon: Sparkles, title: 'Industry Recognition', cardClass: 'bg-purple-50 border-purple-100', iconClass: 'bg-purple-100 text-purple-700' },
  { icon: Globe2, title: 'Global Reach', cardClass: 'bg-cyan-50 border-cyan-100', iconClass: 'bg-cyan-100 text-cyan-700' },
  { icon: Cog, title: 'Specialized Expertise', cardClass: 'bg-slate-100 border-slate-200', iconClass: 'bg-slate-200 text-slate-700' },
  { icon: UserCheck, title: 'Customized Solutions', cardClass: 'bg-rose-50 border-rose-100', iconClass: 'bg-rose-100 text-rose-700' },
  { icon: Handshake, title: 'Friendly Helpful Team', cardClass: 'bg-teal-50 border-teal-100', iconClass: 'bg-teal-100 text-teal-700' },
  { icon: Users2, title: 'Career Counseling & Mentorship', cardClass: 'bg-orange-50 border-orange-100', iconClass: 'bg-orange-100 text-orange-700' },
]

function WhyUsPage() {
  return (
    <>
      <SeoTitle title="Why Us" description="Why clients and partners trust Supertemps International Ltd for quality, innovation, and impact." />
      <PageHero title="Why Choose Supertemps" subtitle="Trusted expertise, innovation, and measurable value in every engagement." image="/pictures/hero1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon, title, cardClass, iconClass }) => (
            <div key={title} className={`rounded-2xl border p-6 text-center shadow-sm ${cardClass}`}>
              <div className={`mx-auto w-fit rounded-2xl p-3 ${iconClass}`}>{createElement(icon, { size: 22 })}</div>
              <h3 className="mt-3 font-semibold text-[#0f1e45]">{title}</h3>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">What Our Partners Say</h2>
        <div className="mt-8">
          <TestimonialSlider items={testimonials} />
        </div>
      </AnimatedSection>
    </>
  )
}

export default WhyUsPage
