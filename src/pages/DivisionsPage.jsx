import { createElement } from 'react'
import { Building2, Briefcase, GraduationCap, Handshake, Package } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const divisions = [
  { icon: Briefcase, title: 'Consultancy Division', text: 'Strategic business and workforce advisory tailored to industry demands.' },
  { icon: GraduationCap, title: 'Training Division', text: 'Capacity-building programs focused on leadership, technical, and corporate excellence.' },
  { icon: Handshake, title: 'Placement & Workforce Division', text: 'Recruitment, placement, and workforce transition support across sectors.' },
  { icon: Package, title: 'Commercial Services Division', text: 'Procurement and supply chain solutions for institutions and enterprises.' },
  { icon: Building2, title: 'Corporate Services Division', text: 'Internal quality, operations, compliance, and organizational support services.' },
]

function DivisionsPage() {
  return (
    <>
      <SeoTitle title="Divisions" description="Explore Supertemps divisions in consultancy, training, placement, commercial supply, and corporate services." />
      <PageHero title="Our Divisions" subtitle="Integrated departments delivering coordinated value across people, systems, and services." image="/pictures/team1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {divisions.map(({ icon, title, text }) => (
            <div key={title} className="card-base">
              <div className="w-fit rounded-2xl bg-[#0f1e45]/10 p-3 text-[#0f1e45]">{createElement(icon, { size: 22 })}</div>
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
