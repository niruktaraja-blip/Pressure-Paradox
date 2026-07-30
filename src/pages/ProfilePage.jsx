import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { AVATARS, getAvatarById, getStoredAvatarId, setStoredAvatarId } from '../data/avatars.js'
import { archetypes } from '../data/archetypes.js'

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [avatarId, setAvatarId] = useState(null)
  const [archetype, setArchetype] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('pp-user')
    setUser(storedUser ? JSON.parse(storedUser) : null)
    setAvatarId(getStoredAvatarId())

    const archetypeId = localStorage.getItem('pp-archetype')
    setArchetype(archetypeId && archetypes[archetypeId] ? archetypes[archetypeId] : null)
  }, [])

  function selectAvatar(id) {
    setStoredAvatarId(id)
    setAvatarId(id)
  }

  const avatar = getAvatarById(avatarId)

  if (user === null) {
    return (
      <div className="relative flex min-h-screen flex-col">
        <ShaderBackground />
        <MarketingHeader />
        <main className="flex flex-grow items-center justify-center px-margin-mobile pt-32 md:px-margin-desktop">
          <div className="glass-card max-w-md rounded-xl p-xl text-center">
            <h1 className="mb-md font-headline-lg text-headline-lg text-primary">No Account Yet</h1>
            <p className="mb-lg font-body-md text-body-md text-on-surface-variant">
              Take the assessment and create an account to see your profile here.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-xs rounded-full bg-primary px-8 py-4 font-label-md text-label-md text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
            >
              Take the Quiz
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <main className="mx-auto w-full max-w-3xl flex-grow px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
        <section className="glass-card mb-gutter rounded-xl p-lg text-center md:p-xl">
          <div
            className={`mx-auto mb-md flex h-20 w-20 items-center justify-center rounded-full text-4xl ${
              avatar ? avatar.bg : 'bg-primary/10'
            }`}
          >
            {avatar ? avatar.emoji : '🙂'}
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary">{user.name}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">{user.email}</p>

          {archetype && (
            <Link
              to="/results"
              className="mt-md inline-flex items-center gap-xs rounded-full bg-primary-container/30 px-md py-xs font-label-md text-label-md text-primary transition-colors hover:bg-primary-container/50"
            >
              {archetype.emoji} {archetype.name}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          )}
        </section>

        <section className="glass-card rounded-xl p-lg md:p-xl">
          <h2 className="mb-1 font-headline-md text-headline-md text-primary">Choose Your Avatar</h2>
          <p className="mb-lg font-body-md text-body-md text-on-surface-variant">
            Pick the picture that shows up next to your profile.
          </p>
          <div className="grid grid-cols-5 gap-md">
            {AVATARS.map((a) => {
              const isSelected = a.id === avatarId
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => selectAvatar(a.id)}
                  aria-label={`Use ${a.id} avatar`}
                  aria-pressed={isSelected}
                  className={`flex aspect-square items-center justify-center rounded-full text-3xl transition-all ${a.bg} ${
                    isSelected
                      ? 'ring-4 ring-primary ring-offset-2 ring-offset-white'
                      : 'opacity-80 hover:scale-105 hover:opacity-100'
                  }`}
                >
                  {a.emoji}
                </button>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
