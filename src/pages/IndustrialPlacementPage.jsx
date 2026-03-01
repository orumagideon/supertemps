import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const sectors = [
  'Agriculture',
  'Mining',
  'Manufacturing',
  'Financial Sector',
  'Government Agencies',
  'Energy Sector',
  'SMEs & Juakali sector',
]

const categories = [
  { title: 'Unskilled Labour', text: 'Simple duties, factory work, warehouse work.' },
  { title: 'Semi-Skilled Labour', text: 'Machine operators, assistants, certificate holders.' },
  { title: 'Skilled Labour', text: 'Diploma/Degree holders, technicians, professionals.' },
]

function IndustrialPlacementPage() {
  return (
    <>
      <SeoTitle title="Industrial Placement" description="Supertemps connects job seekers with formal and informal sector opportunities across key industries." />
      <PageHero title="Industrial Placement" subtitle="Connecting skilled, semi-skilled, and unskilled labor to high-impact sectors, both locally and abroad." image="/pictures/placement1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/placement1.jpg" alt="Workers in a manufacturing plant environment" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Sectors We Serve</h2>
            <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">{sectors.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">Labour Categories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="card-base">
              <h3 className="text-xl font-semibold text-[#0f1e45]">{category.title}</h3>
              <p className="mt-3 text-slate-600">{category.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default IndustrialPlacementPage
