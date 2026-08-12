import notepad from "../assets/footer/hehe.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cream/60">
          Got a brand in mind?
        </p>
        <h2 className="font-display mt-4 text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-8xl">
          Let&apos;s Work
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:nikizamora.business@gmail.com?subject=UGC%20Inquiry"
            className="rounded-full bg-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Email Me
          </a>
          <a
            href="https://calendly.com/nikizamoraugc/ugc-consultation"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Book a Call
          </a>
        </div>
      </div>

      <img
        src={notepad}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 hidden w-40 -translate-y-1/2 rotate-[8deg] object-contain opacity-80 lg:block"
      />
    </section>
  );
}
