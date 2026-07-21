import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <header className="relative flex min-h-screen items-center justify-center overflow-hidden pb-section-gap pt-24">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-margin-mobile text-center md:px-margin-desktop">
          <h1 className="animate-fade-in-up font-headline-display text-headline-display text-primary drop-shadow-sm">
            Mission Statement
          </h1>
          <p className="animate-fade-in-up stagger-1 mt-stack-lg max-w-2xl font-body-lg text-body-lg font-medium text-on-surface-variant/90">
            Find your balance. Discover your path. Thrive under pressure.
          </p>
          <div className="animate-fade-in-up stagger-2 mt-stack-lg">
            <Link
              to="/quiz"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/50 bg-white/80 px-8 py-4 font-label-md text-label-md text-primary shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              Start Quiz
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </header>

      <section id="about" className="relative z-10 mx-auto max-w-5xl px-margin-mobile pb-xl md:px-margin-desktop">
        <div className="glass-card rounded-xl p-lg text-center md:p-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary">A framework, not a verdict.</h2>
          <p className="mx-auto mt-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            The Pressure Paradox is a short assessment that maps how you actually operate under pressure, then hands
            you a growth pathway and resources built around that pattern — not a generic list.
          </p>
        </div>
      </section>

      <section id="stories" className="relative z-10 mx-auto max-w-5xl px-margin-mobile pb-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {[
            { icon: 'psychology', title: 'Understand your pattern', desc: 'Twelve questions, two axes, one clear archetype.' },
            { icon: 'route', title: 'Follow a growth pathway', desc: 'A blueprint built specifically for how you handle pressure.' },
            { icon: 'menu_book', title: 'Explore real resources', desc: 'Career paths, mental health, and study tools tailored to you.' },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-lg text-center">
              <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
              <h3 className="mt-md font-headline-md text-headline-md text-primary">{item.title}</h3>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
