import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const management = [
  'Management & Leadership Training',
  'Supervisory Skills',
  'Leadership & Change Management',
  'Performance Management',
  'Industrial Relations',
]

const statutory = [
  'Occupational Safety and Health (OSH)',
  'First Aid and Emergency Response',
  'Fire Safety and Prevention',
  'Workplace Risk Assessment',
  'Compliance and Regulatory Awareness',
]

const corporate = [
  'Customer Care',
  'Communication Skills',
  'HR Management',
  'Public Relations',
  'Sales & Digital Marketing',
]

const technical = [
  'ICT',
  'Software Development',
  'Data Skills',
  'Technical Certifications',
]

function TrainingPage() {
  return (
    <>
      <SeoTitle title="Training Services" description="Professional training in management, corporate skills, and technical competencies delivered by Supertemps International Ltd." />
      <PageHero title="Training Services" subtitle="Practical, performance-focused learning for professionals and institutions." image="/pictures/training1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/training1.jpg" alt="Corporate training workshop in progress" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0f1e45]">Management & Leadership Training</h2>
              <ul className="mt-4 space-y-2 text-slate-700">{management.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0f1e45]">Statutory Training</h2>
              <ul className="mt-4 space-y-2 text-slate-700">{statutory.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0f1e45]">Corporate Skills</h2>
              <ul className="mt-4 space-y-2 text-slate-700">{corporate.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0f1e45]">Technical Training</h2>
          <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">{technical.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
      </AnimatedSection>
    </>
  )
}

export default TrainingPage
