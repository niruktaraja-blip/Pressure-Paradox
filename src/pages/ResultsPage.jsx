import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ShaderBackground from '../components/ShaderBackground.jsx'
import AppHeader from '../components/AppHeader.jsx'
import Footer from '../components/Footer.jsx'
import { archetypes } from '../data/archetypes.js'

export default function ResultsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [archetype, setArchetype] = useState(null)

  useEffect(() => {
    const id = location.state?.archetypeId || localStorage.getItem('pp-archetype')
    if (!id || !archetypes[id]) {
      navigate('/quiz')
      return
    }
    localStorage.setItem('pp-archetype', id)
    setArchetype(archetypes[id])
  }, [location.state, navigate])

  if (!archetype) return null

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent">
      <ShaderBackground />
      <AppHeader />

      <main className="mx-auto w-full max-w-7xl flex-grow px-margin-mobile pt-32 md:px-margin-desktop">
        <header className="stagger-1 animate-fade-in-up mb-xl text-center">
          <div className="mb-md inline-block rounded-full border border-secondary/20 bg-secondary-container/30 px-md py-xs">
            <span className="font-label-md text-label-md text-secondary">{archetype.tagline}</span>
          </div>
          <h1 className="mb-md font-display text-headline-lg-mobile text-primary md:text-display">{archetype.name}</h1>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg leading-relaxed text-primary">
            {archetype.description}
          </p>
          <div className="mt-lg flex justify-center gap-md">
            <Link
              to="/growth"
              className="flex items-center gap-xs rounded-full bg-primary px-md py-xs font-label-md text-on-primary shadow-lg transition-colors hover:bg-primary/90 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">upgrade</span>
              GROWTH MODULE
            </Link>
            <Link
              to="/resources"
              className="flex items-center gap-xs rounded-full bg-primary-container px-md py-xs font-label-md text-primary shadow-lg transition-colors hover:bg-primary-container/80 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">auto_awesome_motion</span>
              RESOURCES
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="stagger-2 animate-fade-in-up flex flex-col rounded-xl border border-white/30 bg-white/20 p-lg shadow-xl backdrop-blur-xl md:col-span-7">
            <div className="mb-lg flex items-start justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Performance Matrix</h3>
                <p className="font-body-md text-body-md text-outline">Cognitive stability under executive load.</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-primary">insights</span>
            </div>
            <div className="flex flex-grow items-center justify-center py-md">
              <div className="relative aspect-square w-full max-w-[320px]">
                <div className="absolute inset-0 rounded-full border border-primary/10" />
                <div className="absolute inset-[25%] rounded-full border border-primary/10" />
                <div className="absolute inset-[50%] rounded-full border border-primary/10" />
                <svg className="absolute inset-0 h-full w-full drop-shadow-xl" viewBox="0 0 100 100">
                  <polygon
                    className="text-primary/20"
                    fill="none"
                    points="50,10 85,30 85,70 50,90 15,70 15,30"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M50 15 L80 35 L75 65 L50 85 L25 60 L20 40 Z"
                    fill="rgba(68, 98, 117, 0.15)"
                    stroke="rgba(68, 98, 117, 1)"
                    strokeWidth="1.5"
                  />
                  <circle className="text-primary" cx="50" cy="15" fill="currentColor" r="2" />
                  <circle className="text-primary" cx="80" cy="35" fill="currentColor" r="2" />
                </svg>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 font-label-md text-primary">
                  {archetype.matrixLabels.top}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-label-md text-primary">
                  {archetype.matrixLabels.bottom}
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rotate-[-90deg] font-label-md text-outline opacity-50">
                  {archetype.matrixLabels.left}
                </div>
                <div className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rotate-90 font-label-md text-outline opacity-50">
                  {archetype.matrixLabels.right}
                </div>
              </div>
            </div>
            <div className="mt-lg flex gap-md border-t border-primary/10 pt-md">
              <div className="flex-1">
                <div className="font-label-md text-primary">Score: {archetype.scorePrimary}/100</div>
                <div className="mt-xs h-1.5 w-full rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-fixed-dim to-primary"
                    style={{ width: `${archetype.scorePrimary}%` }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="font-label-md text-primary">Alignment: High</div>
                <div className="mt-xs h-1.5 w-full rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-fixed-dim to-primary"
                    style={{ width: `${archetype.scoreSecondary}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="stagger-3 animate-fade-in-up flex flex-col gap-gutter md:col-span-5">
            <div className="flex-grow rounded-xl border border-white/30 bg-white/20 p-lg shadow-xl backdrop-blur-xl">
              <h3 className="mb-lg font-headline-md text-headline-md text-primary">Core Competencies</h3>
              <ul className="space-y-md">
                {archetype.competencies.map((c) => (
                  <li key={c.title} className="group flex items-start gap-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">{c.title}</p>
                      <p className="font-body-md text-body-md text-outline">{c.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary/80 to-primary-container">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-md left-md">
                <span className="font-label-md text-[10px] uppercase tracking-widest text-white/90">
                  Archetype Insight
                </span>
                <p className="font-headline-md text-lg text-white">{archetype.insight}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer tagline="The Pressure Paradox" />
    </div>
  )
}
