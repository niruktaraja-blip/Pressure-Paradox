import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Dashboard', to: '/growth' },
  { label: 'Assessment', to: '/results' },
  { label: 'Resources', to: '/resources' },
  { label: 'Community', to: '/#community' },
]

export default function AppHeader() {
  const location = useLocation()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/30 bg-white/60 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="font-headline-md text-headline-md font-semibold tracking-tight text-primary">
          The Pressure Paradox
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`font-label-md text-label-md transition-all duration-300 ${
                  isActive ? 'border-b-2 border-primary text-primary' : 'text-primary/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="material-symbols-outlined rounded-full p-2 text-primary transition-transform active:scale-95"
            aria-label="Notifications"
          >
            notifications
          </button>
          <Link
            to="/results"
            className="flex items-center gap-2 rounded-full px-1 py-1 text-primary transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined">account_circle</span>
            <span className="hidden font-label-md text-label-md sm:inline">Profile</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
