import { createElement } from 'react'
import { BadgeCheck, Globe2, Handshake, Lightbulb, Scale, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const values = [
  { icon: ShieldCheck, title: 'Integrity & Transparency', text: 'We uphold ethical standards and clear communication in every engagement.' },
  { icon: Lightbulb, title: 'Creativity & Innovation', text: 'We build practical, forward-looking solutions for changing market needs.' },
  { icon: BadgeCheck, title: 'Customer Focus', text: 'Our programs and services are shaped around client and learner outcomes.' },
  { icon: Handshake, title: 'Collaboration', text: 'We work with partners, institutions, and industry for shared success.' },
  { icon: Scale, title: 'Equity & Access', text: 'We create fair opportunities for diverse communities and young people.' },
  { icon: Globe2, title: 'Lifelong Learning', text: 'We promote continuous growth through training, mentorship, and exposure.' },
]

function AboutPage() {
  return (
    <>
      <SeoTitle title="About Us" description="Learn about Supertemps International Ltd background, mission, vision, values, and corporate growth journey." />
      <PageHero title="About Us" subtitle="Building a trusted bridge between learning, industry, and opportunity since 2018." image="/pictures/company_growth.jpg" />

      <AnimatedSection className="section-shell">
        <h2 className="section-title">Company Background</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ul className="card-base space-y-3 text-slate-700">
            <li>Founded in 2018</li>
            <li>Started as a sole proprietorship</li>
            <li>Now fully incorporated</li>
            <li>Results-Based Financing model capability</li>
            <li>Cross-border operations</li>
            <li>Accredited partners</li>
          </ul>
          <img src="/pictures/company_growth.jpg" alt="Team discussion meeting in a corporate boardroom" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0 grid gap-6 md:grid-cols-2">
        <div className="card-base">
          <h3 className="text-2xl font-semibold text-[#0f1e45]">Mission</h3>
          <p className="mt-3 text-slate-600">Deliver excellence in commercial services, training, consultancy, innovation, integrity, and empowerment.</p>
        </div>
        <div className="card-base">
          <h3 className="text-2xl font-semibold text-[#0f1e45]">Vision</h3>
          <p className="mt-3 text-slate-600">To be a global leader in Commercial Services, Training, and Consultancy.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">Core Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map(({ icon, title, text }) => (
            <div key={title} className="card-base">
              <div className="w-fit rounded-2xl bg-[#0f1e45]/10 p-3 text-[#0f1e45]">{createElement(icon, { size: 22 })}</div>
              <h3 className="mt-4 text-lg font-semibold text-[#0f1e45]">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default AboutPage
