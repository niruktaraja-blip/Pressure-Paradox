import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#081B3A]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-lg font-semibold uppercase tracking-[0.22em] text-white">
          Pressure Paradox
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/#home" className="transition hover:text-white">Home</a>
          <a href="/#problem" className="transition hover:text-white">Problem</a>
          <a href="/#stories" className="transition hover:text-white">Stories</a>
          <a href="/#quiz" className="transition hover:text-white">Quiz</a>
          <a href="/#resources" className="transition hover:text-white">Resources</a>
        </nav>
        <a href="/#quiz" className="rounded-full bg-gradient-to-r from-brand to-purpleSoft px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
          Start Quiz
        </a>
      </div>
    </header>
  );
}
