import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import OrgChart from '../components/OrgChart'
import SeoTitle from '../components/SeoTitle'

const roles = [
  'Chairperson',
  'Team Leader / Director',
  'HR Manager',
  'Quality Assurance Manager',
  'Marketing & Corporate Communication',
  'Finance',
  'Customer Care',
  'Industry Coordinators & Supervisors',
  'Transport Officer',
]

function OrganizationPage() {
  return (
    <>
      <SeoTitle title="Organization" description="Supertemps organizational structure and leadership framework." />
      <PageHero title="Organization Structure" subtitle="A professional team structure designed for efficient service delivery and quality outcomes." image="/pictures/team1.jpg" />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="/pictures/team1.jpg" alt="Professional corporate team group photo" loading="lazy" className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-md" />
          <div className="card-base">
            <h2 className="text-2xl font-semibold text-[#0f1e45]">Key Roles</h2>
            <ul className="mt-4 grid gap-2 text-slate-700">{roles.map((role) => <li key={role}>• {role}</li>)}</ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <h2 className="section-title">Organizational Chart</h2>
        <p className="section-subtitle">Structured leadership and operational reporting lines.</p>
        <div className="mt-8">
          <OrgChart />
        </div>
      </AnimatedSection>
    </>
  )
}

export default OrganizationPage
