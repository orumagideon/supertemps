import { createElement } from 'react'
import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, Package, UserRoundCog } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SeoTitle from '../components/SeoTitle'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'

const serviceCards = [
  {
    icon: GraduationCap,
    title: 'Training Services',
    text: 'Practical, industry-aligned programs for workforce readiness and leadership growth.',
    cardClass: 'bg-blue-50 border-blue-100',
    iconClass: 'bg-blue-100 text-blue-700',
  },
  {
    icon: UserRoundCog,
    title: 'Consultancy Services',
    text: 'Strategic advisory in career growth, compliance, and workforce transition.',
    cardClass: 'bg-emerald-50 border-emerald-100',
    iconClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Industrial Placement Services',
    text: 'Connecting talent to formal and informal sector opportunities across Kenya.',
    cardClass: 'bg-violet-50 border-violet-100',
    iconClass: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Handshake,
    title: 'Apprenticeship/On-the-Job Experience & Learnership Programs',
    text: 'Structured pathways from learning to employability and career progression.',
    cardClass: 'bg-amber-50 border-amber-100',
    iconClass: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Package,
    title: 'Commercial Services',
    text: 'Reliable sourcing and delivery for construction, office, and industrial needs.',
    cardClass: 'bg-cyan-50 border-cyan-100',
    iconClass: 'bg-cyan-100 text-cyan-700',
  },
]

function HomePage() {
  const MotionDiv = motion.div

  return (
    <>
      <SeoTitle
        title="Home"
        description="Supertemps International Ltd empowers youth through training, consultancy, apprenticeships, and workforce development across Kenya and beyond."
      />

      <section className="relative">
        <img src="/pictures/hero1.jpg" alt="Nairobi city skyline" className="h-[88vh] min-h-[600px] w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f1e45]/70" />
        <div className="absolute inset-0">
          <div className="section-shell flex h-full items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="whitespace-nowrap text-[clamp(1.5rem,5vw,3.75rem)] font-bold leading-tight text-white">Supertemps International Ltd</h1>
              <p className="mt-3 block w-fit rounded-full border border-[#e2c67f]/60 bg-[#e2c67f]/10 px-4 py-1 text-center text-sm font-semibold tracking-wide text-[#f9df9f] md:mx-auto">
                "U Imagine We Deliver"
              </p>
              <p className="mt-5 text-lg text-slate-200 md:text-2xl">
                Empowering Youth. Delivering Excellence. Driving Global Impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/services/training-services" className="btn-primary">
                  Explore Services <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact-us" className="btn-secondary">Contact Us</Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <h2 className="section-title">About Supertemps</h2>
        <p className="section-subtitle">
          Supertemps International Ltd is accredited company in Consultancy services, Training Services and Commercial services. Founded in 2018 as a sole proprietorship, the company set out to bridge gaps in skills development and workforce readiness. With over seven years of continuous experience, the company has successfully designed and implemented youth employability and workforce development programmes, including Corporate Trainings, youth job placement, apprenticeship, indentured learnership, and industrial attachment programmes at both local and international levels. These initiatives are implemented through collaboration with accredited agents and strategic partners, ensuring quality compliance with applicable labour laws and migration standards. Through sustained growth, a commitment to excellence, and client-focused innovation, the company has evolved into a fully incorporated entity with an expanding cross-border footprint.
        </p>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <img src="/pictures/about1.jpg" alt="Training session with youth in classroom environment" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h3 className="text-2xl font-semibold text-[#0f1e45]">Professional. Innovative. Impact-Driven.</h3>
            <p className="mt-4 text-slate-600">
              We empower youth and organizations with practical skills, trusted solutions, and sustainable partnerships that strengthen industries and communities.
            </p>
            <Link to="/about-us" className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f3f87] hover:text-[#0f1e45]">
              Learn more about us <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">Key Highlight</h2>
        <div className="mt-6 rounded-2xl border border-[#c8a44f]/30 bg-[#0f1e45] p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-white">The NYOTA Project</h3>
          <p className="mt-3 text-slate-200">
            We are proud to implement the National Youth Opportunities Towards Advancement (NYOTA) Project in collaboration with the World Bank and the Government of Kenya.
          </p>
        </div>
      </AnimatedSection>

      <div className="soft-divider" />

      <AnimatedSection className="section-shell">
        <h2 className="section-title">Core Services</h2>
        <p className="section-subtitle">Built for workforce excellence, business resilience, and youth empowerment.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map(({ icon, title, text, cardClass, iconClass }) => (
            <div key={title} className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${cardClass}`}>
              <div className={`mb-4 w-fit rounded-2xl p-3 ${iconClass}`}>{createElement(icon, { size: 24 })}</div>
              <h3 className="text-xl font-semibold text-[#0f1e45]">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">Our Impact by the Numbers</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter end={300} label="Employers" suffix="+" />
          <AnimatedCounter end={47} label="Counties Covered" suffix="" />
          <AnimatedCounter end={7} label="Years Experience" suffix="+" />
          <AnimatedCounter end={1000} label="Youth Empowered" suffix="+" />
        </div>
      </AnimatedSection>
    </>
  )
}

export default HomePage
