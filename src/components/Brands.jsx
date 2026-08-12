import { useRef } from "react";
import logo01 from "../assets/logos/logo-01.png";
import logo02 from "../assets/logos/logo-02.jpg";
import logo03 from "../assets/logos/logo-03.webp";
import logo04 from "../assets/logos/logo-04.jpeg";
import logo05 from "../assets/logos/logo-05.jpg";
import logo06 from "../assets/logos/logo-06.png";
import logo07 from "../assets/logos/logo-07.png";
import logo08 from "../assets/logos/logo-08.png";
import logo09 from "../assets/logos/logo-09.png";
import logo10 from "../assets/logos/logo-10.png";
import logo11 from "../assets/logos/logo-11.png";
import logo12 from "../assets/logos/logo-12.jpeg";
import logo13 from "../assets/logos/logo-13.png";
import logo14 from "../assets/logos/logo-14.png";

const logos = [
  logo01, logo02, logo03, logo04, logo05, logo06, logo07,
  logo08, logo09, logo10, logo11, logo12, logo13, logo14,
];

function ArrowIcon({ flip }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`h-5 w-5 ${flip ? "rotate-180" : ""}`}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Brands() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 md:px-6">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous brands"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowIcon />
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] sm:gap-8 md:gap-10 [&::-webkit-scrollbar]:hidden"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex aspect-square w-24 shrink-0 snap-start items-center justify-center overflow-hidden rounded-full bg-white shadow-sm shadow-ink/5 sm:w-28 md:w-32"
            >
              <img
                src={logo}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next brands"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowIcon flip />
        </button>
      </div>

      <p className="mt-8 text-center font-serif text-lg italic">
        <span>(</span>
        <span className="text-[#6b4a8f]">100</span>{" "}
        <span className="text-ink">brands</span>{" "}
        <span className="text-[#d9531e]">&amp;</span>{" "}
        <span className="text-navy">counting</span>
        <span>)</span>
      </p>
    </section>
  );
}
