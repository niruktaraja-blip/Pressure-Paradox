import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const careers = [
  { icon: 'brush', title: 'UX Design', desc: 'Shaping human-digital interaction through structural logic.' },
  { icon: 'policy', title: 'AI Ethics', desc: 'Navigating the moral landscape of machine intelligence.' },
  { icon: 'forest', title: 'Conservation', desc: 'Protecting global biodiversity with data-driven precision.' },
  { icon: 'eco', title: 'Sustainability', desc: 'Reimagining long-term value through environmental stewardship.' },
  { icon: 'volunteer_activism', title: 'Social Impact', desc: 'Prioritizing community wellness and societal resilience.' },
  { icon: 'monitoring', title: 'Data Narrative', desc: 'Turning complex datasets into stories of meaningful change.' },
]

const mythsFacts = [
  { myth: '"Gaps on a resume are career suicide."', fact: 'Strategic recalibration and self-awareness read as maturity, not weakness.' },
  { myth: 'Stability requires a linear ladder.', fact: 'Adaptability is the new executive security.' },
  { myth: 'Unconventional means "less than".', fact: 'Impact is the ultimate executive metric.' },
]

const reflectionQuestions = [
  'What makes you lose track of time?',
  "What would you do if prestige wasn't a factor?",
  "Which of your 'hidden' skills feels most effortless?",
  'When was the last time you felt genuinely curious at work?',
  'If your job title vanished tomorrow, how would you describe your value?',
  'What problem in the world actually keeps you awake?',
]

export default function CareerPathsPage() {
  const [qIndex, setQIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [note, setNote] = useState('')

  function nextQuestion() {
    setVisible(false)
    setTimeout(() => {
      setQIndex((i) => (i + 1) % reflectionQuestions.length)
      setVisible(true)
    }, 300)
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/quiz" />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-margin-mobile pt-xl md:px-margin-desktop">
        <div className="glass-card relative z-10 mx-auto max-w-4xl rounded-[2.5rem] p-xl text-center">
          <span className="mb-md inline-block rounded-full bg-primary-container/20 px-4 py-1.5 font-label-sm text-label-sm tracking-wider text-primary">
            CAREER EVOLUTION
          </span>
          <h1 className="animate-fade-in-up font-display text-headline-lg-mobile text-on-surface md:text-display">
            Success Doesn&rsquo;t Have One Path.
          </h1>
          <p className="mx-auto mb-xl mt-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Stop following expectations. Start finding fulfillment through clinical logic and strategic clarity.
          </p>
          <div className="flex flex-col items-center justify-center gap-md md:flex-row">
            <a
              href="#emerging-paths"
              className="w-full rounded-full bg-tertiary px-8 py-4 font-label-md text-label-md text-on-tertiary shadow-lg transition-all hover:shadow-xl md:w-auto"
            >
              Explore Your Path
            </a>
            <Link
              to="/resources"
              className="w-full rounded-full border border-outline-variant/30 bg-white/50 px-8 py-4 font-label-md text-label-md text-primary backdrop-blur-sm transition-all hover:bg-white md:w-auto"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-xl md:px-margin-desktop">
        <div className="glass-card mx-auto grid max-w-7xl grid-cols-1 items-center gap-xl rounded-[3rem] p-xl md:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container to-primary shadow-2xl">
            <span className="material-symbols-outlined text-[140px] text-white/30">psychology</span>
          </div>
          <div className="p-md">
            <h2 className="mb-md font-headline-lg text-headline-lg text-tertiary">The Paradox</h2>
            <p className="mb-gutter font-body-lg text-body-lg text-on-surface-variant">
              External success often leads to internal drift. We engineer the mental framework to realign your path.
            </p>
            <div className="space-y-sm">
              <div className="flex items-start gap-md">
                <span className="material-symbols-outlined mt-1 text-primary">waves</span>
                <h4 className="font-label-md text-label-md font-bold text-on-surface">Cognitive Overload</h4>
              </div>
              <div className="flex items-start gap-md">
                <span className="material-symbols-outlined mt-1 text-primary">compass_calibration</span>
                <h4 className="font-label-md text-label-md font-bold text-on-surface">Blueprint Bias</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="emerging-paths" className="px-margin-mobile py-xl md:px-margin-desktop">
        <div className="mx-auto max-w-7xl">
          <div className="mb-xl text-center">
            <h2 className="mb-sm font-headline-lg text-headline-lg text-tertiary">Emerging Paths</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              High-impact careers engineered for the modern executive landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {careers.map((c) => (
              <div key={c.title} className="glass-card group space-y-6 rounded-xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/60">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-xl md:px-margin-desktop">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-xl text-center font-headline-lg text-headline-lg text-tertiary">Myths vs. Facts</h2>
          <div className="space-y-gutter">
            {mythsFacts.map((mf) => (
              <div key={mf.myth} className="grid items-stretch gap-gutter md:grid-cols-2">
                <div className="rounded-3xl border-l-4 border-error bg-error-container/10 p-xl backdrop-blur-sm">
                  <h4 className="mb-2 font-label-md text-label-md uppercase tracking-widest text-error">Myth</h4>
                  <p className="font-headline-md text-headline-md text-on-surface">{mf.myth}</p>
                </div>
                <div className="rounded-3xl border-l-4 border-primary bg-primary-container/10 p-xl backdrop-blur-sm">
                  <h4 className="mb-2 font-label-md text-label-md uppercase tracking-widest text-primary">Fact</h4>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">{mf.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-xl md:px-margin-desktop">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-xl font-headline-lg text-headline-lg text-tertiary">A Moment for Reflection</h2>
          <div className="glass-card rounded-[2rem] p-xl shadow-xl">
            <div className="mb-xl flex min-h-[160px] items-center justify-center">
              <h3
                className={`px-md font-display text-headline-lg italic text-primary transition-all duration-300 ${
                  visible ? 'opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                {reflectionQuestions[qIndex]}
              </h3>
            </div>
            <div className="flex justify-center gap-md">
              <button
                type="button"
                onClick={nextQuestion}
                className="rounded-full bg-primary p-4 text-white transition-colors hover:bg-tertiary"
                aria-label="Next reflection question"
              >
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
            <div className="mt-xl border-t border-white/20 pt-xl">
              <p className="mb-md font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                Jot down your thought
              </p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="h-32 w-full resize-none rounded-2xl border-none bg-white/30 p-md placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary"
                placeholder="No judgment here. Just your thoughts..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-xl text-center md:px-margin-desktop">
        <div className="glass-card mx-auto max-w-3xl rounded-[3rem] p-xl">
          <h2 className="mb-md font-headline-lg text-headline-lg text-primary">Define Your Own Success.</h2>
          <Link
            to="/quiz"
            className="inline-block rounded-xl bg-gradient-to-br from-primary to-primary-container px-12 py-6 font-extrabold text-xl text-on-primary shadow-lg transition-all active:scale-95"
          >
            Retake the Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
