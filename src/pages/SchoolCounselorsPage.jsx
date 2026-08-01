import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const supportAreas = [
  {
    icon: 'school',
    title: 'Academic Support',
    items: [
      'Setting goals and building strong study habits',
      'Managing time, organization, and test anxiety',
      'Choosing classes and tracking graduation requirements',
    ],
  },
  {
    icon: 'self_improvement',
    title: 'Mental Health & Social-Emotional Support',
    items: [
      'Confidential support for stress, anxiety, or sadness',
      'Coping skills, conflict resolution, and emotional regulation',
      'Crisis intervention and referrals when needed',
    ],
  },
  {
    icon: 'explore',
    title: 'College & Career Planning',
    items: [
      'Exploring careers that match your interests',
      'Help with applications, resumes, and essays',
      'Finding scholarship and financial aid info',
    ],
  },
]

export default function SchoolCounselorsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <main className="relative flex-grow pt-24">
        <section className="relative flex min-h-[70vh] items-center justify-center">
          <div className="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-margin-desktop">
            <h1 className="mb-md font-display text-headline-lg-mobile text-primary md:text-display">Navigate Your Future.</h1>
            <p className="mx-auto mb-lg max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Strategic guidance for high-achieving students to balance excellence and well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              <Link
                to="/resources"
                className="rounded-lg border border-primary px-xl py-md font-label-md text-label-md text-primary transition-all hover:bg-white/40"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-margin-mobile py-xl md:px-margin-desktop">
          <div className="mx-auto max-w-7xl space-y-gutter">
            <div className="glass-card rounded-xl p-lg shadow-sm">
              <span className="material-symbols-outlined mb-md text-4xl text-primary">sync_alt</span>
              <h2 className="mb-md font-headline-lg text-headline-lg text-primary">When to Connect</h2>
              <p className="mb-lg leading-relaxed text-on-surface-variant">
                Recognize signs of stress before they become obstacles.
              </p>
              <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary">warning</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface">Burnout Prevention</h4>
                    <p className="text-label-sm text-on-surface-variant">Recognize signs of stress before they become obstacles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary">trending_up</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface">Major Transitions</h4>
                    <p className="text-label-sm text-on-surface-variant">Recognize signs of stress before they become obstacles.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {supportAreas.map((area) => (
                <div key={area.title} className="glass-card rounded-xl p-lg shadow-sm">
                  <span className="material-symbols-outlined mb-md text-3xl text-primary">{area.icon}</span>
                  <h3 className="mb-md font-headline-md text-headline-md text-primary">{area.title}</h3>
                  <ul className="space-y-sm">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-xs text-label-md text-on-surface-variant">
                        <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-margin-mobile py-xl md:px-margin-desktop">
          <div className="glass-card mx-auto max-w-4xl rounded-2xl p-xl text-center">
            <h2 className="mb-md font-headline-lg text-headline-lg text-primary">Ready to optimize your journey?</h2>
            <p className="mb-xl font-body-lg text-body-lg text-on-surface-variant">
              Map out your sustainable path to success today.
            </p>
            <div className="flex flex-col justify-center gap-md sm:flex-row">
              <Link
                to="/resources"
                className="rounded-lg border border-primary px-xl py-md font-label-md text-label-md text-primary transition-all hover:bg-white/40"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
