import { createElement } from 'react'
import { Building2, Briefcase, GraduationCap, Handshake, Package } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const divisions = [
  {
    icon: Briefcase,
    title: 'Consultancy Division',
    text: 'Strategic business and workforce advisory tailored to industry demands.',
    cardClass: 'bg-blue-50 border-blue-100',
    iconClass: 'bg-blue-100 text-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'Training Division',
    text: 'Capacity-building programs focused on leadership, technical, and corporate excellence.',
    cardClass: 'bg-emerald-50 border-emerald-100',
    iconClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Handshake,
    title: 'Placement & Workforce Division',
    text: 'Recruitment, placement, and workforce transition support across sectors.',
    cardClass: 'bg-violet-50 border-violet-100',
    iconClass: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Package,
    title: 'Commercial Services Division',
    text: 'Procurement and supply chain solutions for institutions and enterprises.',
    cardClass: 'bg-amber-50 border-amber-100',
    iconClass: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Building2,
    title: 'Corporate Services Division',
    text: 'Internal quality, operations, compliance, and organizational support services.',
    cardClass: 'bg-cyan-50 border-cyan-100',
    iconClass: 'bg-cyan-100 text-cyan-700',
  },
]

function DivisionsPage() {
  return (
    <>
      <SeoTitle title="Divisions" description="Explore Supertemps divisions in consultancy, training, placement, commercial supply, and corporate services." />
      <PageHero title="Our Divisions" subtitle="Integrated departments delivering coordinated value across people, systems, and services." image="/pictures/team1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {divisions.map(({ icon, title, text, cardClass, iconClass }) => (
            <div key={title} className={`rounded-2xl border p-6 shadow-sm ${cardClass}`}>
              <div className={`w-fit rounded-2xl p-3 ${iconClass}`}>{createElement(icon, { size: 22 })}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f1e45]">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default DivisionsPage
