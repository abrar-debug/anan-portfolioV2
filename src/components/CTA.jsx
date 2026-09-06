import { useCta } from "../lib/useCta";
import { urlFor } from "../lib/sanity";
import imagePlaceholder from "../assets/placeholders/image-placeholder.svg";
import notepad from "../assets/footer/hehe.png";

export default function CTA() {
  const { heading, polaroidImage, brandName, email, bookingUrl } = useCta();
  const polaroidUrl = polaroidImage
    ? urlFor(polaroidImage).width(480).url()
    : imagePlaceholder;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbebd8] to-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-7xl font-bold whitespace-pre-line uppercase leading-[0.95] tracking-tight text-ink sm:text-8xl">
            {heading}
          </h2>
          <div className="mt-10 space-y-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a3402c]">
              {email}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a3402c]">
              {brandName} Est. 2021
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]">
          <img
            src={polaroidUrl}
            alt={brandName}
            className="absolute top-4 left-0 w-56 -rotate-6 object-contain drop-shadow-xl sm:w-64"
          />
          <img
            src={notepad}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-56 rotate-6 object-contain drop-shadow-xl sm:w-64"
          />
          <div className="absolute top-32 right-10 flex w-32 flex-col gap-3 sm:top-36 sm:right-12 sm:w-36">
            <a
              href={`mailto:${email}?subject=UGC%20Inquiry`}
              className="rounded-full border border-ink/80 bg-transparent px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Email Me
            </a>
            <a
              href={bookingUrl}
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
