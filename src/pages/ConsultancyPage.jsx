import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const focusAreas = [
  'Career Growth & Guidance',
  'Financial Risk Management',
  'Regulatory Compliance',
  'Workforce Transition Programs',
]

const programs = [
  'Graduate Apprenticeship',
  'Informal Apprenticeship',
  'Industrial Attachment',
  'Volunteer Placement',
  'Management Trainee',
  'Indentured Learnership',
]

const guidedPrograms = [
  'Government Trade Test (I, II, III)',
  'Recognition of Prior Learning (RPL)',
  'CV Writing & Interview Preparation',
  'Life Skills & Coaching',
  'Financial Literacy',
]

function ConsultancyPage() {
  return (
    <>
      <SeoTitle title="Consultancy Services" description="Explore Supertemps consultancy services in career growth, compliance, risk management, and guided workforce programs." />
      <PageHero title="Consultancy Services" subtitle="Strategic guidance for careers, compliance, growth, and workforce transformation." image="/pictures/consultancy1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/consultancy1.jpg" alt="Professional consultation meeting" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="space-y-6">
            <div className="card-base">
              <h2 className="text-2xl font-semibold text-[#0f1e45]">Focus Areas</h2>
              <ul className="mt-4 space-y-2 text-slate-700">{focusAreas.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="card-base">
              <h2 className="text-2xl font-semibold text-[#0f1e45]">Programs</h2>
              <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">{programs.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <div className="card-base">
          <h2 className="text-2xl font-semibold text-[#0f1e45]">Guided Programs</h2>
          <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">{guidedPrograms.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ConsultancyPage
