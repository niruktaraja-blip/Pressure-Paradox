import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAvatarById, getStoredAvatarId } from '../data/avatars.js'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { label: 'About', to: '/#about' },
  { label: 'Stories', to: '/stories' },
  { label: 'Resources', to: '/resources' },
]

export default function MarketingHeader() {
  const location = useLocation()
  const { user } = useAuth()
  const [avatarId, setAvatarId] = useState(() => getStoredAvatarId())

  useEffect(() => {
    function onAvatarChange() {
      setAvatarId(getStoredAvatarId())
    }
    window.addEventListener('pp-avatar-changed', onAvatarChange)
    return () => window.removeEventListener('pp-avatar-changed', onAvatarChange)
  }, [])

  const avatar = getAvatarById(avatarId)

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-primary/10 shadow-[0_10px_40px_rgba(156,187,208,0.1)]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold text-primary transition-colors hover:text-primary/80 active:scale-95"
        >
          The Pressure Paradox
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-xl md:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`font-label-md text-label-md transition-colors duration-300 ${
                  isActive
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {user ? (
          <Link
            to="/profile"
            aria-label="Your profile"
            className="flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/10 active:scale-95"
          >
            {avatar ? (
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-base ${avatar.bg}`}>
                {avatar.emoji}
              </span>
            ) : (
              <span className="material-symbols-outlined">account_circle</span>
            )}
          </Link>
        ) : (
          <Link
            to="/login"
            className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  )
}
