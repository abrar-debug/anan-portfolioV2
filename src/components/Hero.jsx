import portraitMain from "../assets/hero/portrait-main.png";
import sigNiki from "../assets/hero/hero-4.png";
import sigZamora from "../assets/hero/hero-2.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:px-10 md:pt-16 md:pb-24">
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
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
        </div>

        <p className="font-display absolute top-[74%] left-[62%] z-10 hidden w-max text-sm font-bold uppercase leading-snug tracking-[0.18em] text-navy sm:block md:top-[70%] md:left-[66%] md:text-base">
          Premium
          <br /> UGC Creator
        </p>
      </div>
    </section>
  );
}
