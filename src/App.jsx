import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ConsultancyPage = lazy(() => import('./pages/ConsultancyPage'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))
const IndustrialPlacementPage = lazy(() => import('./pages/IndustrialPlacementPage'))
const ApprenticeshipProgramsPage = lazy(() => import('./pages/ApprenticeshipProgramsPage'))
const CommercialSupplyPage = lazy(() => import('./pages/CommercialSupplyPage'))
const DefensiveDrivingPage = lazy(() => import('./pages/DefensiveDrivingPage'))
const DivisionsPage = lazy(() => import('./pages/DivisionsPage'))
const OrganizationPage = lazy(() => import('./pages/OrganizationPage'))
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="section-shell flex min-h-[50vh] items-center justify-center">
            <div className="h-11 w-11 animate-spin rounded-full border-4 border-[#0f1e45]/20 border-t-[#c8a44f]" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services/consultancy-services" element={<ConsultancyPage />} />
          <Route path="/services/training-services" element={<TrainingPage />} />
          <Route path="/services/industrial-placement" element={<IndustrialPlacementPage />} />
          <Route path="/services/apprenticeship-programs" element={<ApprenticeshipProgramsPage />} />
          <Route path="/services/commercial-supply" element={<CommercialSupplyPage />} />
          <Route path="/services/defensive-driving" element={<DefensiveDrivingPage />} />
          <Route path="/divisions" element={<DivisionsPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
