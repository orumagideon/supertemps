import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const sectors = [
  'Agriculture',
  'Mining',
  'Manufacturing',
  'Financial Institutions',
  'Government Agencies',
  'Commercial Enterprises',
  'Energy Sector',
]

function PartnersPage() {
  return (
    <>
      <SeoTitle title="Partners" description="Supertemps partner ecosystem across agriculture, mining, manufacturing, finance, government, and energy sectors." />
      <PageHero title="Our Partners" subtitle="Collaborating across sectors to deliver skills, services, and sustainable growth." image="/pictures/hero1.jpg" />

      <AnimatedSection className="section-shell">
        <h2 className="section-title">Partner Sectors</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div key={sector} className="card-base text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-xs font-semibold text-slate-500">LOGO</div>
              <h3 className="font-semibold text-[#0f1e45]">{sector}</h3>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default PartnersPage
