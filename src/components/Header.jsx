import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const navigation = ['Home', 'About', 'Quiz', 'Resources', 'Stories', 'Contact'];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="text-lg font-semibold text-brand">
            The Pressure Paradox
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <Link to="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <a href="/#about" className="hover:text-brand transition-colors">
            About
          </a>
          <a href="/#quiz" className="hover:text-brand transition-colors">
            Quiz
          </a>
          <a href="/#resources" className="hover:text-brand transition-colors">
            Resources
          </a>
          <a href="/#stories" className="hover:text-brand transition-colors">
            Stories
          </a>
          <a href="/#contact" className="hover:text-brand transition-colors">
            Contact
          </a>
          <a href="/#quiz" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft">
            Take the Quiz
          </a>
        </nav>
      </div>
    </header>
  );
}
