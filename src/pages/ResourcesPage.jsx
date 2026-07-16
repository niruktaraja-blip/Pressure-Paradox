import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const categories = [
  {
    to: '/resources/career-paths',
    icon: 'work',
    title: 'Career Paths',
    description: 'Navigate career evolution beyond the traditional ladder.',
  },
  {
    to: '/resources/mental-health',
    icon: 'self_improvement',
    title: 'Mental Health',
    description: 'Mental resilience and 5-minute resets for modern leaders.',
  },
  {
    to: '/resources/school-counselors',
    icon: 'school',
    title: 'School Counselors',
    description: 'Strategic guidance for high-achieving students.',
  },
  {
    to: '/resources/study-tools',
    icon: 'menu_book',
    title: 'Study Tools',
    description: 'Executive-grade frameworks to master your focus.',
  },
]

export default function ResourcesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/quiz" />

      <main className="mx-auto w-full max-w-6xl flex-grow px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
        <section className="mb-xl text-center">
          <span className="mb-md inline-block rounded-full bg-primary-container/20 px-4 py-1.5 font-label-sm text-label-sm tracking-wider text-primary">
            RESOURCE LIBRARY
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile text-primary md:text-display">
            Resources for every pressure point.
          </h1>
          <p className="mx-auto mt-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Whichever archetype you land on, these guides meet you where the pressure actually shows up.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              className="glass-card group flex items-start gap-md rounded-xl p-lg transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">{cat.title}</h3>
                <p className="mt-1 font-body-md text-body-md text-on-surface-variant">{cat.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-label-md text-label-md text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
