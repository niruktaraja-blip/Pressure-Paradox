import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ArchetypeTeaserPage from './pages/ArchetypeTeaserPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import GrowthModulePage from './pages/GrowthModulePage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import StoriesPage from './pages/StoriesPage.jsx'
import CareerPathsPage from './pages/CareerPathsPage.jsx'
import MentalHealthPage from './pages/MentalHealthPage.jsx'
import SchoolCounselorsPage from './pages/SchoolCounselorsPage.jsx'
import StudyToolsPage from './pages/StudyToolsPage.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/archetype" element={<ArchetypeTeaserPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/growth" element={<GrowthModulePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/resources/career-paths" element={<CareerPathsPage />} />
        <Route path="/resources/mental-health" element={<MentalHealthPage />} />
        <Route path="/resources/school-counselors" element={<SchoolCounselorsPage />} />
        <Route path="/resources/study-tools" element={<StudyToolsPage />} />
      </Routes>
    </>
  )
}
