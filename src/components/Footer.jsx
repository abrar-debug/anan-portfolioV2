export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-ink">
          Niki Zamora Creative &copy; {new Date().getFullYear()}
        </p>

        <a
          href="mailto:nikizamoraugc@gmail.com"
          className="text-sm text-ink-soft transition-colors hover:text-ink"
        >
          nikizamoraugc@gmail.com
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
