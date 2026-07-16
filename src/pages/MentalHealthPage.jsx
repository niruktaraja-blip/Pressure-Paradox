import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const burnoutSigns = [
  { icon: 'battery_low', title: 'Exhaustion', desc: 'Permanently drained, chronic fatigue state.' },
  { icon: 'sentiment_dissatisfied', title: 'Cynicism', desc: 'Passion turns into cold detachment.' },
  { icon: 'trending_down', title: 'Low Efficacy', desc: 'Doubting impact and personal wins.' },
]

const resets = [
  { icon: 'air', title: 'Box Breathing', desc: 'Inhale, hold, exhale, hold. Reset.' },
  { icon: 'accessibility_new', title: 'Body Scan', desc: 'Track and release physical tension.' },
]

const rituals = [
  { title: "The 'Off' Ritual", desc: 'Closing the laptop to open the mind.' },
  { title: 'Digital Detox', desc: 'Leaving the devices behind for an hour.' },
]

const faqs = [
  { q: "How do I say 'No' without guilt?", a: 'Saying no protects your capacity.' },
  { q: "What if I can't take a full vacation?", a: 'Micro-sabbaticals restore focus quickly.' },
]

export default function MentalHealthPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/quiz" />

      <main className="relative z-10 mx-auto w-full max-w-7xl flex-grow space-y-xl px-margin-mobile pb-xl pt-32 md:px-margin-desktop">
        <section className="animate-fade-in-up space-y-md text-center">
          <h1 className="font-display text-display text-primary">Find Peace.</h1>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Mental resilience for modern leaders.
          </p>
        </section>

        <section className="space-y-lg">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined fill text-primary">warning</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Spotting Burnout</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {burnoutSigns.map((s) => (
              <div key={s.title} className="glass-card space-y-sm rounded-xl p-md transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/50 text-primary">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
          <div className="space-y-lg">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined fill text-primary">timer</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">5-Minute Resets</h2>
            </div>
            <div className="space-y-md">
              {resets.map((r) => (
                <div
                  key={r.title}
                  className="glass-card group flex cursor-pointer items-start gap-md rounded-xl p-md transition-colors duration-300 hover:bg-white/70"
                >
                  <span className="material-symbols-outlined text-[32px] text-primary">{r.icon}</span>
                  <div>
                    <h4 className="mb-xs font-headline-md text-headline-md">{r.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-container via-primary/40 to-primary shadow-2xl transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </section>

        <section className="space-y-lg">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined fill text-primary">auto_awesome</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Self-Care Rituals</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {rituals.map((r, i) => (
              <div key={r.title} className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 ${
                    i === 0 ? 'from-tertiary to-primary-container' : 'from-primary to-tertiary-container'
                  }`}
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 p-md text-white">
                  <h3 className="font-headline-md text-headline-md">{r.title}</h3>
                  <p className="font-label-md text-label-md opacity-90">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-lg">
          <div className="space-y-sm text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary">Mindset Maintenance</h2>
            <p className="text-on-surface-variant">Common questions on navigating high-pressure environments.</p>
          </div>
          <div className="space-y-sm">
            {faqs.map((f) => (
              <details key={f.q} className="glass-card group overflow-hidden rounded-xl">
                <summary className="flex cursor-pointer select-none list-none items-center justify-between p-md [&::-webkit-details-marker]:hidden">
                  <span className="font-headline-md text-headline-md text-primary">{f.q}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-md pb-md font-body-md text-on-surface-variant">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="glass-card space-y-lg rounded-3xl border-white/40 p-xl text-center">
          <h2 className="font-display text-headline-lg text-primary">Ready to redefine your boundaries?</h2>
          <div className="flex flex-col justify-center gap-md sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-tertiary px-xl py-md font-label-md text-label-md text-on-tertiary shadow-lg transition-all duration-300 hover:bg-primary"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Book a Session
            </button>
            <Link
              to="/resources"
              className="flex items-center justify-center gap-2 rounded-full border border-primary px-xl py-md font-label-md text-label-md text-primary transition-all duration-300 hover:bg-primary/10"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Resources
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
