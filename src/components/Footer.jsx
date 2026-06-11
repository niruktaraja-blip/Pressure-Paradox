export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-10 mt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Contact</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">Reach out for guidance, counseling, or mental health support resources.</p>
        </div>
        <div className="grid gap-2 text-sm text-slate-600 sm:text-right">
          <p>Email: support@pressureparadox.org</p>
          <p>Phone: (555) 311-2026</p>
          <p>© 2026 The Pressure Paradox</p>
        </div>
      </div>
    </footer>
  );
}
