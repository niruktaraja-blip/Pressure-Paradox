import { useEffect, useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { archetypes } from '../data/archetypes.js'

export default function GrowthModulePage() {
  const navigate = useNavigate()
  const [archetype, setArchetype] = useState(null)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const id = localStorage.getItem('pp-archetype')
    if (!id || !archetypes[id]) {
      navigate('/quiz')
      return
    }
    const a = archetypes[id]
    setArchetype(a)
    const inProgress = a.growth.milestones.find((m) => m.status === 'in-progress')
    setTasks(inProgress?.tasks ? inProgress.tasks.map((t) => ({ ...t })) : [])
  }, [navigate])

  const progressPct = useMemo(() => {
    if (!archetype) return 0
    const milestones = archetype.growth.milestones
    const unit = 100 / milestones.length
    let total = 0
    milestones.forEach((m) => {
      if (m.status === 'completed') total += unit
      else if (m.status === 'in-progress') {
        const t = tasks.length ? tasks : m.tasks || []
        const done = t.filter((task) => task.done).length
        total += unit * (t.length ? done / t.length : 0.5)
      }
    })
    return Math.round(total)
  }, [archetype, tasks])

  function toggleTask(index) {
    setTasks((prev) => prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t)))
  }

  if (!archetype) return null

  const { milestones, tips } = archetype.growth

  return (
    <div className="relative min-h-screen text-on-background">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-xl pt-32 md:px-margin-desktop">
        <section className="mb-xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/10 bg-primary-container/20 px-4 py-1.5">
            <span className="material-symbols-outlined mr-2 text-[18px] text-primary">verified</span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">Growth Journey</span>
          </div>
          <h1 className="mb-6 max-w-3xl font-display text-headline-lg-mobile leading-tight text-primary md:text-display">
            {archetype.growth.title}
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-primary/80">
            {archetype.growth.description}
          </p>
        </section>

        <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="space-y-md lg:col-span-8">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-headline-lg text-headline-lg text-primary">The Blueprint</h2>
              <span className="rounded-lg bg-primary-container/30 px-3 py-1 font-label-md text-label-md text-primary">
                {progressPct}% Completed
              </span>
            </div>

            <div className="glass-card relative overflow-hidden rounded-xl p-8">
              <div className="absolute bottom-20 left-[39px] top-20 w-0.5 bg-primary/20" />

              {milestones.map((m, idx) => {
                const isCompleted = m.status === 'completed'
                const isInProgress = m.status === 'in-progress'
                const isLocked = m.status === 'locked'
                return (
                  <div
                    key={m.title}
                    className={`group relative mb-12 flex items-start last:mb-0 ${isLocked ? 'opacity-50' : ''}`}
                  >
                    <div
                      className={`z-10 mr-6 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isCompleted
                          ? 'bg-primary text-white shadow-lg shadow-primary/30'
                          : isInProgress
                            ? 'ring-4 ring-primary/10 border-2 border-primary bg-white/20 text-primary'
                            : 'border-2 border-primary/30 bg-white/20 text-primary/40'
                      }`}
                    >
                      {isCompleted && <span className="material-symbols-outlined fill text-[16px]">check</span>}
                      {isInProgress && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                      {isLocked && <span className="material-symbols-outlined text-[16px]">lock</span>}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center">
                        <h3
                          className={`font-headline-md text-headline-md transition-transform group-hover:translate-x-1 ${
                            isLocked ? 'text-primary/60' : 'text-primary'
                          }`}
                        >
                          {m.title}
                        </h3>
                        {isInProgress && (
                          <span className="ml-4 rounded bg-primary-container/40 px-2 py-0.5 text-[10px] font-bold text-primary">
                            IN PROGRESS
                          </span>
                        )}
                      </div>
                      <p className={`mb-4 font-body-md text-body-md ${isLocked ? 'text-primary/50' : 'text-primary/70'}`}>
                        {m.description}
                      </p>

                      {isCompleted && (
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-primary-container/40 px-3 py-1 text-[12px] font-bold tracking-tighter text-primary">
                            COMPLETED
                          </span>
                          <span className="rounded-full bg-white/30 px-3 py-1 text-[12px] font-medium text-primary/60">
                            {m.date}
                          </span>
                        </div>
                      )}

                      {isInProgress && (
                        <div className="space-y-3 rounded-lg border border-white/30 bg-white/20 p-4">
                          {tasks.map((task, i) => (
                            <label key={task.label} className="flex cursor-pointer items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleTask(i)}
                                className="h-4 w-4 rounded border-primary/30 bg-white/50 text-primary focus:ring-primary"
                              />
                              <span className={task.done ? 'text-body-md text-primary/50 line-through' : 'text-body-md text-primary'}>
                                {task.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center justify-between pt-6">
              <Link
                to="/results"
                className="flex items-center space-x-2 rounded-xl border border-primary px-8 py-4 font-label-md text-label-md text-primary transition-all hover:bg-white/40 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span>Back to Reveal</span>
              </Link>
              <Link
                to="/resources"
                className="flex items-center space-x-2 rounded-xl bg-primary px-8 py-4 font-label-md text-label-md text-white shadow-lg shadow-primary/30 transition-all hover:opacity-90 active:scale-95"
              >
                <span>Next Milestone</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="space-y-md lg:col-span-4">
            <h2 className="px-1 font-headline-md text-headline-md text-primary">Little Reminders</h2>
            <div className="space-y-4">
              {tips.map((tip) => (
                <div key={tip.title} className="glass-card group cursor-pointer rounded-xl p-6 transition-colors hover:border-primary/40">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[24px]">{tip.icon}</span>
                    <span className="material-symbols-outlined text-[16px] text-primary/40 transition-colors group-hover:text-primary">
                      open_in_new
                    </span>
                  </div>
                  <h4 className="mb-2 font-label-md text-label-md text-primary">{tip.title}</h4>
                  <p className="text-[13px] leading-relaxed text-primary/70">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {archetype.challenges && (
          <div className="glass-card mt-gutter rounded-xl p-lg">
            <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
              <div>
                <h2 className="mb-md font-headline-lg text-headline-lg text-primary">Where This Can Work Against You</h2>
                <div className="space-y-md">
                  {archetype.challenges.traits.map((trait) => (
                    <div key={trait.title}>
                      <h4 className="font-label-md text-label-md text-primary">{trait.title}</h4>
                      <p className="mt-1 font-body-md text-body-md text-primary/70">{trait.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-md font-headline-lg text-headline-lg text-primary">What Helps</h2>
                <ul className="space-y-md">
                  {archetype.challenges.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 font-body-md text-body-md text-primary/80">
                      <span className="mt-1 text-primary">✔</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-lg border-t border-primary/10 pt-lg">
              <h2 className="mb-md font-headline-lg text-headline-lg text-primary">Careers Worth Exploring</h2>
              <div className="flex flex-wrap gap-2">
                {archetype.challenges.careers.map((career) => (
                  <span
                    key={career}
                    className="rounded-full bg-primary-container/30 px-4 py-1.5 font-label-md text-label-md text-primary"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer tagline={archetype.name} />
    </div>
  )
}
