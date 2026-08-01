import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { archetypes } from '../data/archetypes.js'

function stars(value) {
  return '★'.repeat(value) + '☆'.repeat(5 - value)
}

// matrix order maps to radar positions: 0 top, 1 right, 2 bottom, 3 left
function radarPoints(matrix, radius = 40, center = 50) {
  const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2] // top, right, bottom, left
  return matrix
    .map((stat, i) => {
      const r = radius * (stat.value / 5)
      const x = center + r * Math.sin(angles[i])
      const y = center - r * Math.cos(angles[i])
      return `${x},${y}`
    })
    .join(' ')
}

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

  const [top, right, bottom, left] = archetype.matrix

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent">
      <ShaderBackground />
      <MarketingHeader />

      <main className="mx-auto w-full max-w-7xl flex-grow px-margin-mobile pt-32 md:px-margin-desktop">
        <header className="stagger-1 animate-fade-in-up mb-xl text-center">
          <div className="mb-md inline-block rounded-full border border-secondary/20 bg-secondary-container/30 px-md py-xs">
            <span className="font-label-md text-label-md text-secondary">{archetype.tagline}</span>
          </div>
          <h1 className="mb-md font-display text-headline-lg-mobile text-primary md:text-display">
            {archetype.emoji} {archetype.name}
          </h1>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg italic leading-relaxed text-primary/80">
            "{archetype.quote}"
          </p>
          <p className="mx-auto mt-md max-w-2xl font-body-lg text-body-lg leading-relaxed text-primary">
            {archetype.description}
          </p>
          <div className="mt-lg flex justify-center gap-md">
            <Link
              to="/growth"
              className="flex items-center gap-xs rounded-full bg-primary px-md py-xs font-label-md text-on-primary shadow-lg transition-colors hover:bg-primary/90 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">upgrade</span>
              GROWTH PATH
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
                <h3 className="font-headline-md text-headline-md text-primary">Decision Compass</h3>
                <p className="font-body-md text-body-md text-outline">What shapes how you decide.</p>
              </div>
              <span className="material-symbols-outlined text-3xl text-primary">explore</span>
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
                    points="50,10 90,50 50,90 10,50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <polygon
                    points={radarPoints(archetype.matrix)}
                    fill="rgba(68, 98, 117, 0.15)"
                    stroke="rgba(68, 98, 117, 1)"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 text-center font-label-md text-primary">
                  {top.label}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-center font-label-md text-primary">
                  {bottom.label}
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 -translate-x-full text-right font-label-md text-outline opacity-70">
                  {left.label}
                </div>
                <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 pl-2 text-left font-label-md text-outline opacity-70">
                  {right.label}
                </div>
              </div>
            </div>
            <div className="mt-lg grid grid-cols-2 gap-md border-t border-primary/10 pt-md">
              {archetype.matrix.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary">{stat.label}</span>
                  <span className="tracking-wide text-primary" aria-label={`${stat.value} out of 5`}>
                    {stars(stat.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="stagger-3 animate-fade-in-up flex flex-col gap-gutter md:col-span-5">
            <div className="flex-grow rounded-xl border border-white/30 bg-white/20 p-lg shadow-xl backdrop-blur-xl">
              <h3 className="mb-lg font-headline-md text-headline-md text-primary">✨ What Makes You, You</h3>
              <ul className="space-y-md">
                {archetype.superpowers.map((c) => (
                  <li key={c.title} className="group flex items-start gap-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl transition-colors group-hover:bg-primary/20">
                      <span>{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">{c.title}</p>
                      <p className="font-body-md text-body-md text-outline">{c.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/80 to-primary-container p-lg">
              <span className="font-label-md text-[10px] uppercase tracking-widest text-white/80">Growth Edge</span>
              <p className="mt-2 font-headline-md text-lg leading-snug text-white">{archetype.growthEdge}</p>
            </div>
          </div>
        </section>

        <section className="stagger-4 animate-fade-in-up mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-2">
          <div className="rounded-xl border border-white/30 bg-white/20 p-lg shadow-xl backdrop-blur-xl">
            <h3 className="mb-md font-headline-md text-headline-md text-primary">Your Strengths</h3>
            <ul className="space-y-2">
              {archetype.strengths.map((s) => (
                <li key={s} className="flex items-center gap-2 font-body-md text-body-md text-primary/90">
                  <span className="text-primary">✔</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/20 p-lg shadow-xl backdrop-blur-xl">
            <h3 className="mb-md font-headline-md text-headline-md text-primary">People With Similar Energy</h3>
            <div className="flex flex-wrap gap-2">
              {archetype.similarTo.map((person) => (
                <span
                  key={person}
                  className="rounded-full bg-primary-container/30 px-4 py-1.5 font-label-md text-label-md text-primary"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer tagline="The Pressure Paradox" />
    </div>
  )
}
