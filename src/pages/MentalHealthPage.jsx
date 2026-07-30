import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const burnoutSigns = [
  { icon: 'battery_low', title: 'Exhaustion', desc: 'Permanently drained, chronic fatigue state.' },
  { icon: 'sentiment_dissatisfied', title: 'Cynicism', desc: 'Passion turns into cold detachment.' },
  { icon: 'trending_down', title: 'Low Efficacy', desc: 'Doubting impact and personal wins.' },
]

const teenTips = [
  {
    icon: 'fitness_center',
    title: 'Encourage Physical Self-Care',
    desc: 'Healthy eating and regular exercise are proven to boost mental wellbeing.',
  },
  {
    icon: 'palette',
    title: 'Foster Mental & Emotional Care',
    desc: 'Journaling, art, music, or a new hobby can build real inner peace.',
  },
  {
    icon: 'smartphone',
    title: 'Discuss Social Media Usage',
    desc: 'Talk openly about how daily scrolling on YouTube, TikTok, or Instagram affects mood.',
  },
  {
    icon: 'front_hand',
    title: 'Teach Healthy Boundaries',
    desc: 'Practice saying no, like "Thanks, but I can\'t today — maybe next time."',
  },
  {
    icon: 'forum',
    title: 'Talk Openly About Mental Health',
    desc: "Share your own experiences to show it's normal to ask for help.",
  },
]

const faqs = [
  { q: "How do I say 'No' without guilt?", a: 'Saying no protects your capacity.' },
  { q: "What if I can't take a full vacation?", a: 'Micro-sabbaticals restore focus quickly.' },
]

export default function MentalHealthPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

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

        <section className="space-y-lg">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined fill text-primary">diversity_1</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Supporting Your Teen</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {teenTips.map((t) => (
              <div
                key={t.title}
                className="glass-card group flex items-start gap-md rounded-xl p-md transition-colors duration-300 hover:bg-white/70"
              >
                <span className="material-symbols-outlined text-[32px] text-primary">{t.icon}</span>
                <div>
                  <h4 className="mb-xs font-headline-md text-headline-md">{t.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{t.desc}</p>
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
