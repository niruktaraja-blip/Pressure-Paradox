import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const faqs = [
  { q: 'How often can we meet?', a: 'We offer flexible sessions ranging from quarterly to bi-weekly check-ins.' },
  { q: 'Is our conversation confidential?', a: 'All sessions are strictly confidential within professional ethical standards.' },
]

export default function SchoolCounselorsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/quiz" />

      <main className="relative flex-grow pt-24">
        <section className="relative flex min-h-[70vh] items-center justify-center">
          <div className="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-margin-desktop">
            <h1 className="mb-md font-display text-headline-lg-mobile text-primary md:text-display">Navigate Your Future.</h1>
            <p className="mx-auto mb-lg max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Strategic guidance for high-achieving students to balance excellence and well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              <button
                type="button"
                className="rounded-lg bg-primary px-xl py-md font-label-md text-label-md text-on-primary transition-all hover:shadow-lg"
              >
                Schedule a Check-in
              </button>
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter md:grid-cols-12">
            <div className="glass-card flex flex-col justify-between rounded-xl p-lg shadow-sm md:col-span-8">
              <div>
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
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-primary-container to-primary shadow-sm md:col-span-4">
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 to-transparent p-md">
                <p className="font-label-md text-label-md italic text-white">Structured paths for sustainable growth.</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-lg shadow-sm md:col-span-4">
              <h3 className="mb-md font-headline-md text-headline-md text-primary">Academic Planning</h3>
              <p className="mb-md text-body-md text-on-surface-variant">Tailored workload and curriculum strategy.</p>
              <ul className="space-y-sm">
                <li className="flex items-center gap-xs text-label-md">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Course Load Audits
                </li>
                <li className="flex items-center gap-xs text-label-md">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Time Management
                </li>
              </ul>
            </div>

            <div className="glass-card flex flex-col items-center gap-lg rounded-xl p-lg shadow-sm md:col-span-8 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-md font-headline-md text-headline-md text-tertiary">College &amp; Career Guidance</h3>
                <p className="mb-lg leading-relaxed text-on-surface-variant">
                  Data-driven insights and personalized timelines for your next chapter.
                </p>
                <Link to="/resources/career-paths" className="inline-block rounded-lg bg-primary px-md py-2 font-label-md text-label-md text-on-primary">
                  Explore Pathways
                </Link>
              </div>
              <div className="aspect-square w-full rounded-lg border border-white/30 bg-gradient-to-br from-tertiary-container to-primary/50 p-sm md:w-1/3" />
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-4xl px-margin-mobile py-xl md:px-margin-desktop">
          <h2 className="mb-xl text-center font-headline-lg text-headline-lg text-primary">Frequently Asked Questions</h2>
          <div className="space-y-gutter">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-primary/20 pb-md">
                <summary className="flex cursor-pointer list-none items-center justify-between py-md [&::-webkit-details-marker]:hidden">
                  <h4 className="font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">{f.q}</h4>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="pb-md pt-sm leading-relaxed text-on-surface-variant">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative z-10 px-margin-mobile py-xl md:px-margin-desktop">
          <div className="glass-card mx-auto max-w-4xl rounded-2xl p-xl text-center">
            <h2 className="mb-md font-headline-lg text-headline-lg text-primary">Ready to optimize your journey?</h2>
            <p className="mb-xl font-body-lg text-body-lg text-on-surface-variant">
              Map out your sustainable path to success today.
            </p>
            <div className="flex flex-col justify-center gap-md sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-primary px-xl py-md font-label-md text-label-md text-on-primary shadow-md transition-all hover:scale-[1.02]"
              >
                Schedule a Check-in
              </button>
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
