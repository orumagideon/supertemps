import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const modules = [
  'Road Safety & Signs',
  'Driving Techniques',
  'First Aid',
  'Mechanical Basics',
  'Emergency Procedures',
  'Work Ethics',
]

function DefensiveDrivingPage() {
  return (
    <>
      <SeoTitle title="Defensive Driving" description="Defensive driving and road safety training by Supertemps International Ltd." />
      <PageHero title="Defensive Driving" subtitle="Safety-focused practical training for responsible, skilled, and ethical drivers." image="/pictures/driving1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/driving1.jpg" alt="Driving safety training session" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Course Modules</h2>
            <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">{modules.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default DefensiveDrivingPage
