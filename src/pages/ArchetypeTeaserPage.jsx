import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { archetypes } from '../data/archetypes.js'

export default function ArchetypeTeaserPage() {
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
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <main className="flex flex-grow items-center justify-center px-margin-mobile pt-32 md:px-margin-desktop">
        <div className="glass-card animate-fade-in-up mx-auto max-w-2xl rounded-[2rem] p-xl text-center">
          <span className="mb-md inline-block rounded-full border border-secondary/20 bg-secondary-container/30 px-md py-xs font-label-md text-label-md text-secondary">
            {archetype.tagline}
          </span>
          <h1 className="mb-md font-display text-headline-lg-mobile text-primary md:text-display">
            {archetype.emoji} {archetype.name}
          </h1>
          <p className="mx-auto max-w-xl font-body-lg text-body-lg italic leading-relaxed text-primary/80">
            "{archetype.quote}"
          </p>

          <Link
            to="/signup"
            className="mt-xl inline-flex items-center gap-xs rounded-full bg-primary px-8 py-4 font-label-md text-label-md text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
          >
            Learn More
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
