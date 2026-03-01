import { useState } from 'react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SeoTitle from '../components/SeoTitle'

const partners = [
  { name: 'World Bank', logoFile: 'world-bank.png' },
  { name: 'State Department for Youth Affairs and Creative Economy', logoFile: 'state-department-youth-affairs-creative-economy.png' },
  { name: 'NITA', logoFile: 'nita.png' },
  { name: 'Palma Recruitment Agencies', logoFile: 'palma-recruitment-agencies.png' },
  { name: 'Timeline Recruitment Agency', logoFile: 'timeline-recruitment-agency.png' },
  { name: 'SSL Recruitment Agency', logoFile: 'ssl-recruitment-agency.png' },
  { name: 'Skyways Recruitment Agency', logoFile: 'skyways-recruitment-agency.png' },
  { name: 'Nairobi Aviation College', logoFile: 'nairobi-aviation-college.png' },
  { name: 'TIBS College', logoFile: 'tibs-college.png' },
  { name: 'United States International University (USIU–Africa)', logoFile: 'usiu-africa.png' },
  { name: 'Timaflor Ltd', logoFile: 'timaflor-ltd.png' },
  { name: 'KEDA Ceramics', logoFile: 'keda-ceramics.png' },
  { name: 'Busia Sugar Industries', logoFile: 'busia-sugar-industries.png' },
  { name: 'PG Bison Ltd', logoFile: 'pg-bison-ltd.png' },
  { name: 'BoxLeo Courier Services', logoFile: 'boxleo-courier-services.png' },
  { name: 'Jumuia Resorts Ltd', logoFile: 'jumuia-resorts-ltd.png' },
  { name: 'Cyka Group', logoFile: 'cyka-group.png' },
  { name: 'National Museums of Kenya', logoFile: 'national-museums-of-kenya.png' },
  { name: 'Brackenhurst Int.', logoFile: 'brackenhurst-int.png' },
]

function PartnersPage() {
  const [missingLogos, setMissingLogos] = useState({})

  return (
    <>
      <SeoTitle title="Partners" description="Some of our partners include institutions in development, education, recruitment, manufacturing, hospitality, and public service." />
      <PageHero title="Our Partners" subtitle="Some of our partners include organizations across public, private, and international sectors." image="/pictures/hero1.jpg" />

      <AnimatedSection className="section-shell">
        <h2 className="section-title">Some of Our Partners Include</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map(({ name, logoFile }) => (
            <div key={name} className="card-base text-center">
              {!missingLogos[logoFile] ? (
                <div className="mx-auto mb-4 flex h-16 items-center justify-center">
                  <img
                    src={`/pictures/${logoFile}`}
                    alt={`${name} logo`}
                    className="h-full max-w-[140px] object-contain"
                    loading="lazy"
                    onError={() => setMissingLogos((prev) => ({ ...prev, [logoFile]: true }))}
                  />
                </div>
              ) : (
                <div className="mx-auto mb-4 flex h-16 w-36 items-center justify-center rounded-2xl border border-dashed border-slate-300 px-2 text-[10px] font-semibold text-slate-500">
                  LOGO COMING SOON
                </div>
              )}
              <h3 className="font-semibold text-[#0f1e45]">{name}</h3>
              {missingLogos[logoFile] && <p className="mt-2 text-xs text-slate-500">Expected file: {logoFile}</p>}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default PartnersPage
