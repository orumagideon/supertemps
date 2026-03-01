import { createElement } from 'react'
import { BadgeDollarSign, Bot, Cog, Globe2, Handshake, Medal, Sparkles, UserCheck, Users2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import TestimonialSlider from '../components/TestimonialSlider'
import SeoTitle from '../components/SeoTitle'
import { testimonials } from '../data/testimonials'

const benefits = [
  { icon: Bot, title: 'Latest Technology' },
  { icon: BadgeDollarSign, title: 'Competitive Pricing' },
  { icon: Medal, title: 'Proven Track Record' },
  { icon: Sparkles, title: 'Industry Recognition' },
  { icon: Globe2, title: 'Global Reach' },
  { icon: Cog, title: 'Specialized Expertise' },
  { icon: UserCheck, title: 'Customized Solutions' },
  { icon: Handshake, title: 'Friendly Helpful Team' },
  { icon: Users2, title: 'Career Counseling & Mentorship' },
]

function WhyUsPage() {
  return (
    <>
      <SeoTitle title="Why Us" description="Why clients and partners trust Supertemps International Ltd for quality, innovation, and impact." />
      <PageHero title="Why Choose Supertemps" subtitle="Trusted expertise, innovation, and measurable value in every engagement." image="/pictures/hero1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon, title }) => (
            <div key={title} className="card-base text-center">
              <div className="mx-auto w-fit rounded-2xl bg-[#0f1e45]/10 p-3 text-[#0f1e45]">{createElement(icon, { size: 22 })}</div>
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
