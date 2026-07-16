export default function Footer({ tagline = 'The Pressure Paradox' }) {
  return (
    <footer className="glass-nav mt-xl w-full border-t border-primary/10 py-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-md px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="font-headline-md text-headline-md font-bold text-primary">{tagline}</div>
        <div className="flex flex-wrap justify-center gap-md">
          <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline underline-offset-4" href="#">
            Ethical Standards
          </a>
        </div>
        <div className="font-body-md text-body-md text-secondary">© 2024 The Pressure Paradox. All rights reserved.</div>
      </div>
    </footer>
  )
}
