import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const methodology = [
  { icon: 'timer', title: 'Pomodoro Technique', desc: 'Timed sprints for peak focus.', cta: 'Learn Protocol' },
  { icon: 'psychology', title: 'Active Recall', desc: 'Active retrieval strengthens neural pathways.', cta: 'Explore Strategy' },
  { icon: 'update', title: 'Spaced Repetition', desc: 'Review intervals for long-term memory.', cta: 'View Schedule' },
]

const tools = [
  { icon: 'inventory_2', title: 'Notion', cta: 'Get Setup Template', dark: true },
  { icon: 'hub', title: 'Obsidian', cta: 'View Graph Tutorial', dark: false },
]

const auditItems = [
  { label: 'Digital Minimalism', desc: 'Eliminate digital distractions.' },
  { label: 'Cognitive Sprints', desc: 'Use timed work blocks.' },
  { label: 'Strategic Review', desc: 'Scheduled material review.' },
]

export default function StudyToolsPage() {
  const [checked, setChecked] = useState(() => auditItems.map(() => false))

  const percentage = Math.round((checked.filter(Boolean).length / auditItems.length) * 100)
  const complete = percentage === 100

  function toggle(index) {
    setChecked((prev) => prev.map((c, i) => (i === index ? !c : c)))
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/quiz" />

      <header className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32">
        <div className="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-margin-desktop">
          <span className="mb-6 inline-block rounded-full bg-primary-container/30 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
            Efficiency Redefined
          </span>
          <h1 className="mb-6 font-display text-headline-lg-mobile leading-tight text-on-surface md:text-display">
            Master Your Focus.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Optimize your cognitive output with executive-grade study frameworks.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-xl py-4 font-label-md text-label-md text-on-primary transition-all hover:shadow-lg"
            >
              <span className="material-symbols-outlined">download</span> Download PDF Guide
            </button>
            <Link
              to="/resources"
              className="flex items-center justify-center gap-2 rounded-lg border border-primary px-xl py-4 font-label-md text-label-md text-primary transition-all hover:bg-primary/5"
            >
              <span className="material-symbols-outlined">arrow_back</span> Back to Resources
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-margin-mobile py-xl md:px-margin-desktop">
        <div className="mb-lg">
          <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">The Methodology</h2>
          <div className="h-1 w-24 rounded-full bg-primary-container" />
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {methodology.map((m) => (
            <div key={m.title} className="glass-card group rounded-xl border border-white/40 p-md transition-transform hover:-translate-y-1">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">{m.icon}</span>
              </div>
              <h3 className="mb-3 font-headline-md text-headline-md text-on-surface">{m.title}</h3>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">{m.desc}</p>
              <div className="flex cursor-pointer items-center gap-2 font-label-md text-label-md text-primary group-hover:underline">
                {m.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-xl px-margin-mobile md:px-margin-desktop lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">Time Management</h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Prioritize high-impact tasks using the Eisenhower Matrix.
            </p>
            <div className="space-y-4">
              <div className="glass-card flex items-center gap-4 rounded-lg border-l-4 border-primary p-4">
                <span className="material-symbols-outlined text-primary">priority_high</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Quadrant 1: Do It Now</p>
                  <p className="text-label-sm text-on-surface-variant">Urgent and Important tasks.</p>
                </div>
              </div>
              <div className="glass-card flex items-center gap-4 rounded-lg border-l-4 border-tertiary p-4">
                <span className="material-symbols-outlined text-tertiary">schedule</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Quadrant 2: Schedule It</p>
                  <p className="text-label-sm text-on-surface-variant">Non-Urgent but Important deep work.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="glass-card mx-auto grid aspect-square w-full max-w-lg grid-cols-2 grid-rows-2 gap-4 rounded-2xl p-md">
              <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-4 text-center">
                <span className="mb-2 font-label-sm uppercase text-primary">Urgent</span>
                <div className="mb-2 h-px w-full bg-primary/20" />
                <span className="font-headline-md text-on-surface">Do</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-secondary-container/30 p-4 text-center">
                <span className="mb-2 font-label-sm uppercase text-secondary">Decide</span>
                <div className="mb-2 h-px w-full bg-secondary/20" />
                <span className="font-headline-md text-on-surface">Plan</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-surface-container-highest/50 p-4 text-center">
                <span className="mb-2 font-label-sm uppercase text-outline">Delegate</span>
                <div className="mb-2 h-px w-full bg-outline/20" />
                <span className="font-headline-md text-on-surface">Assign</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-error-container/20 p-4 text-center">
                <span className="mb-2 font-label-sm uppercase text-error">Eliminate</span>
                <div className="mb-2 h-px w-full bg-error/20" />
                <span className="font-headline-md text-on-surface">Delete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-margin-mobile py-xl md:px-margin-desktop">
        <div className="mb-xl text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">The Tool Stack</h2>
          <p className="mx-auto max-w-xl font-body-md text-body-md text-on-surface-variant">
            Essential tools for networked thinking.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
          {tools.map((t) => (
            <div key={t.title} className="glass-card group flex gap-md rounded-xl p-md transition-shadow hover:shadow-md">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
                  t.dark ? 'bg-on-surface text-surface' : 'bg-[#34208c] text-white'
                }`}
              >
                <span className="material-symbols-outlined text-4xl">{t.icon}</span>
              </div>
              <div>
                <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">{t.title}</h3>
                <a className="flex items-center gap-1 font-label-md text-label-md text-primary group-hover:underline" href="#">
                  {t.cta} <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile py-xl md:px-margin-desktop">
        <div className="glass-card mx-auto max-w-4xl rounded-2xl p-lg">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Study Audit</h2>
              <p className="text-label-md text-on-surface-variant">Benchmark your current efficiency baseline.</p>
            </div>
            <div className="text-right">
              <div className="font-display text-headline-lg text-primary">{percentage}%</div>
              <div className="text-label-sm uppercase text-on-surface-variant">Efficiency Score</div>
            </div>
          </div>
          <div className="space-y-6">
            {auditItems.map((item, i) => (
              <label
                key={item.label}
                className="group flex cursor-pointer items-start gap-4 rounded-lg bg-white/20 p-4 transition-colors hover:bg-white/40"
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="mt-1 h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-label-md text-label-md text-on-surface transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                  <span className="text-label-sm text-on-surface-variant">{item.desc}</span>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-lg flex flex-col items-center justify-between gap-md border-t border-white/20 pt-lg md:flex-row">
            <p className="font-body-md italic text-on-surface-variant">
              Complete the audit to unlock your customized PDF action plan.
            </p>
            <button
              type="button"
              disabled={!complete}
              className={`rounded-lg px-lg py-3 font-label-md text-label-md text-on-primary transition-all ${
                complete ? 'bg-primary' : 'cursor-not-allowed bg-primary opacity-50'
              }`}
            >
              {complete ? 'Download Personalized Guide' : 'Unlock Results'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
