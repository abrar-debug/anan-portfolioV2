import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 pt-8 pb-2 md:pt-10">
      <nav className="mx-auto flex max-w-7xl items-start justify-between px-6 md:px-10">
        <a href="#top" className="leading-tight">
          <span className="font-display block text-xs font-bold uppercase tracking-[0.14em] text-ink sm:text-sm">
            Niki Zamora Creative Est. 2021
          </span>
          <span className="block text-xs uppercase tracking-[0.05em] text-ink-soft/80 sm:text-sm">
            nikizamora.business@gmail.com
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="mt-1 flex h-6 w-8 flex-col items-center justify-center gap-1.5 self-center"
        >
          <span className="h-px w-full bg-ink" />
          <span className="h-px w-full bg-ink" />
        </button>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="mailto:nikizamora.business@gmail.com?subject=UGC%20Inquiry"
            className="rounded-full border border-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Email Me
          </a>
          <a
            href="https://calendly.com/nikizamoraugc/ugc-consultation"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-6 max-w-7xl px-6 md:px-10">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href="mailto:nikizamora.business@gmail.com?subject=UGC%20Inquiry"
                className="text-sm font-bold uppercase tracking-[0.12em] text-ink-soft"
              >
                Email Me
              </a>
            </li>
            <li className="sm:hidden">
              <a
                href="https://calendly.com/nikizamoraugc/ugc-consultation"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-bold uppercase tracking-[0.12em] text-ink-soft"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
