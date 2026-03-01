import { createElement } from 'react'
import { BadgeCheck, Globe2, Handshake, Lightbulb, Scale, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Transparency',
    text: 'We uphold ethical standards and clear communication in every engagement.',
    cardClass: 'bg-blue-50 border-blue-100',
    iconClass: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Lightbulb,
    title: 'Creativity & Innovation',
    text: 'We build practical, forward-looking solutions for changing market needs.',
    cardClass: 'bg-amber-50 border-amber-100',
    iconClass: 'bg-amber-100 text-amber-700',
  },
  {
    icon: BadgeCheck,
    title: 'Customer Focus',
    text: 'Our programs and services are shaped around client and learner outcomes.',
    cardClass: 'bg-emerald-50 border-emerald-100',
    iconClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    text: 'We work with partners, institutions, and industry for shared success.',
    cardClass: 'bg-violet-50 border-violet-100',
    iconClass: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Scale,
    title: 'Equity & Access',
    text: 'We create fair opportunities for diverse communities and young people.',
    cardClass: 'bg-rose-50 border-rose-100',
    iconClass: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Globe2,
    title: 'Lifelong Learning',
    text: 'We promote continuous growth through training, mentorship, and exposure.',
    cardClass: 'bg-cyan-50 border-cyan-100',
    iconClass: 'bg-cyan-100 text-cyan-700',
  },
]

function AboutPage() {
  return (
    <>
      <SeoTitle title="About Us" description="Learn about Supertemps International Ltd background, mission, vision, values, and corporate growth journey." />
      <PageHero title="About Us" subtitle="Building a trusted bridge between learning, industry, and opportunity since 2018." image="/pictures/company_growth.jpg" />

      <AnimatedSection className="section-shell">
        <h2 className="section-title">Company Background</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="card-base space-y-4 text-slate-700">
            <p>
              Supertemps International Ltd is an accredited consultancy and training company that was founded in 2018 as a sole proprietorship under the name of Supertemps Investments. The company set out to bridge the gap in skills development and workplace readiness by conducting job related trainings and matching skills with opportunities in the job market.
            </p>
            <p>
              In the year 2021, Supertemps Investments went through name change to Supertemps International Ltd performing the same roles in the job market.
            </p>
            <p>
              2018 to 2025, the company has successfully designed and implemented employability and workforce development programmes for various organizations as per the attached list. The company has undertaken capacity building of employees of various organizations in the Republic of Kenya, placement of youth in apprenticeship, indentured learnership, industrial attachments, and into employment at both local and international levels.
            </p>
            <p>
              The company has established linkages and signed collaboration agreements with various organizations across the country and internationally to achieve its objective of skills development and matching of skills with employment opportunities. The company ensures quality compliance with applicable labour laws and migration standards in during placements both locally and internationally.
            </p>
            <p>
              The company has also engaged the services of qualified staff who support the delivery of its objectives. The managing director is the overall team leader and is responsible for the provision of direction general coordination of all heads of departments for delivery of organizational objectives.
            </p>
          </div>
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
          {values.map(({ icon, title, text, cardClass, iconClass }) => (
            <div key={title} className={`rounded-2xl border p-6 shadow-sm ${cardClass}`}>
              <div className={`w-fit rounded-2xl p-3 ${iconClass}`}>{createElement(icon, { size: 22 })}</div>
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
