import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SchoolCounselorsPage from './pages/SchoolCounselorsPage';
import MentalHealthResourcesPage from './pages/MentalHealthResourcesPage';
import StudyToolsPage from './pages/StudyToolsPage';
import UnconventionalCareersPage from './pages/UnconventionalCareersPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-slate-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counselors" element={<SchoolCounselorsPage />} />
            <Route path="/mental-health" element={<MentalHealthResourcesPage />} />
            <Route path="/study-tools" element={<StudyToolsPage />} />
            <Route path="/unconventional-careers" element={<UnconventionalCareersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
