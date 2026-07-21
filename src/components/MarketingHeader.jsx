import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Stories', to: '/#stories' },
  { label: 'Quiz', to: '/quiz' },
  { label: 'Resources', to: '/resources' },
]

export default function MarketingHeader({ cta = 'Start Quiz', ctaTo = '/quiz' }) {
  const location = useLocation()

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-primary/10 shadow-[0_10px_40px_rgba(156,187,208,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold text-primary transition-colors hover:text-primary/80 active:scale-95"
        >
          The Pressure Paradox
        </Link>
        <div className="hidden items-center gap-xl md:flex">
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
        <Link
          to={ctaTo}
          className="rounded-full bg-primary px-6 py-2 font-label-md text-label-md text-on-primary shadow-md transition-all hover:opacity-90 active:scale-95"
        >
          {cta}
        </Link>
      </div>
    </nav>
  )
}
