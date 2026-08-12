import polaroid from "../assets/footer/rotated.png";
import notepad from "../assets/footer/hehe.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbebd8] to-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-7xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-8xl">
            Let&apos;s
            <br /> Work
          </h2>
          <div className="mt-10 space-y-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a3402c]">
              nikizamora.business@gmail.com
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a3402c]">
              Niki Zamora Creative Est. 2021
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]">
          <img
            src={polaroid}
            alt="Niki Zamora"
            className="absolute left-0 top-4 w-56 -rotate-6 object-contain drop-shadow-xl sm:w-64"
          />
          <img
            src={notepad}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 w-56 rotate-6 object-contain drop-shadow-xl sm:w-64"
          />
          <div className="absolute right-10 top-32 flex w-32 flex-col gap-3 sm:right-12 sm:top-36 sm:w-36">
            <a
              href="mailto:nikizamora.business@gmail.com?subject=UGC%20Inquiry"
              className="rounded-full border border-ink/80 bg-transparent px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Email Me
            </a>
            <a
              href="https://calendly.com/nikizamoraugc/ugc-consultation"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-ink/80 bg-transparent px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
