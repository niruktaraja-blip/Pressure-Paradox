export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#081B3A] py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Contact</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">Need support? Reach out for guidance, counseling, or resources to manage pressure more effectively.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p>Email: support@pressureparadox.org</p>
          <p>Phone: (555) 311-2026</p>
          <p>© 2026 Pressure Paradox</p>
        </div>
      </div>
    </footer>
  );
}
