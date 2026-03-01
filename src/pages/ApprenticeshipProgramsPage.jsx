import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const pathways = [
  'NYOTA program',
  'Graduate Apprenticeship',
  'Informal Apprenticeship',
  'Industrial Attachment',
  'Volunteer Placement',
  'Management Trainee',
  'Indentured Learnership',
]

function ApprenticeshipProgramsPage() {
  return (
    <>
      <SeoTitle title="Apprenticeship Programs" description="Structured apprenticeship and learnership pathways by Supertemps International Ltd." />
      <PageHero
        title="Apprenticeship/On-the-Job Experience & Learnership Programs"
        subtitle="Work-integrated pathways that transform learners into industry-ready professionals."
        image="/pictures/about1.jpg"
      />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/about1.jpg" alt="Youth learning in apprenticeship environment" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Program Pathways</h2>
            <p className="mt-3 text-slate-600">Our apprenticeship model supports skills transfer, mentorship, and practical workplace immersion.</p>
            <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">{pathways.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ApprenticeshipProgramsPage
