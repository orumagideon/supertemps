import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const scope = [
  'Construction Works & Equipment',
  'Furniture',
  'Office Supplies',
  'Generators',
  'Electrical & Plumbing Supplies',
  'Electronics & Computer Components',
  'Audio Equipment',
  'Water Supplies',
  'PPE & Safety Equipment',
  'Car Tracking & Garage Services',
  'Garbage Collection',
]

function CommercialSupplyPage() {
  return (
    <>
      <SeoTitle title="Commercial Services" description="Commercial supply solutions from equipment and office supplies to safety and technical systems." />
      <PageHero title="Commercial Services" subtitle="Reliable sourcing and delivery for industrial, institutional, and commercial operations." image="/pictures/supply1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/supply1.jpg" alt="Warehouse with industrial equipment" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Business Scope</h2>
            <ul className="mt-4 grid gap-2 text-slate-700">{scope.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default CommercialSupplyPage
