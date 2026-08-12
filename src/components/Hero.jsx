import portraitMain from "../assets/hero/portrait-main.png";
import heroWide from "../assets/hero/hero-wide.jpg";
import sigNiki from "../assets/hero/hero-4.png";
import sigZamora from "../assets/hero/hero-2.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 md:pb-28">
      <div className="relative mx-auto flex max-w-6xl justify-center px-6 pt-10 md:px-10 md:pt-16">
        <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
          <img
            src={sigNiki}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[46%] right-[78%] z-0 w-[220px] -rotate-3 opacity-90 sm:w-[280px] md:w-[340px]"
          />
          <img
            src={sigZamora}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[38%] left-[70%] z-0 w-[240px] -rotate-3 opacity-90 sm:w-[300px] md:w-[380px]"
          />

          <img
            src={portraitMain}
            alt="Niki Zamora"
            className="relative z-10 aspect-[4/5] w-full object-cover"
          />

          <p className="font-display absolute -bottom-8 left-1/2 z-10 w-max -translate-x-1/2 text-sm font-bold uppercase tracking-[0.18em] text-navy sm:-right-4 sm:bottom-8 sm:left-auto sm:translate-x-0 sm:text-right md:text-base">
            Premium
            <br className="hidden sm:block" /> UGC Creator
          </p>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-2xl px-6 text-center md:mt-16 md:px-10">
        <p className="text-ink-soft">
          Premium UGC creator making scroll-stopping, high-converting
          short-form content for brands that want to feel real.
        </p>

        <div className="mt-10 flex items-center justify-center gap-10 border-t border-line pt-6">
          <div>
            <p className="font-display text-3xl font-bold text-ink">100+</p>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              Brands
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-ink">25</p>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              Gen Z, Chicago
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-ink">5★</p>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              Client Reviews
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <img
          src={heroWide}
          alt="Niki Zamora on set"
          className="h-56 w-full rounded-[2rem] object-cover sm:h-72 md:h-96"
        />
      </div>
    </section>
  );
}
