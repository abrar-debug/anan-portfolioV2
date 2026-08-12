import { useState } from "react";
import portrait from "../assets/testimonial/portrait.png";

const testimonials = [
  {
    quote:
      "Working with Niki has been an absolute pleasure. Her ability to quickly understand our mission and translate it into engaging, high-quality short-form videos was impressive. She consistently delivered on time, and her turnaround on edits was incredibly fast without ever compromising quality.",
    name: "Nina Diaz",
    company: "Action for the Climate Emergency",
  },
  {
    quote:
      "One of the standout aspects of our UGC collaboration was the creator's authenticity and alignment with our brand values. The content felt natural, engaging, and genuinely demonstrated the benefits of Batanaful's products. Communication throughout the process was smooth and timely, and the final visuals were beautifully executed, capturing our brand aesthetic perfectly. Overall, the collaboration helped drive meaningful engagement and awareness.",
    name: "Toyah Agard",
    company: "Batanaful",
  },
];

function ChevronIcon({ flip }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`h-6 w-6 ${flip ? "rotate-180" : ""}`}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="relative">
            <img
              src={portrait}
              alt="Niki Zamora"
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="absolute right-4 top-6 w-[80%] max-w-sm sm:right-8">
              <span className="pointer-events-none absolute -right-3 -top-10 h-10 w-px bg-[#c9a24b]" />
              <span className="pointer-events-none absolute -right-4 -top-11 h-2.5 w-2.5 rounded-full bg-[#f2c94c]" />

              <div className="relative border border-[#e91e8c]/70 px-4 pb-5 pt-4">
                <span className="absolute -left-1 top-0 h-2 w-2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute -right-1 top-0 h-2 w-2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute -left-1 bottom-0 h-2 w-2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute -right-1 bottom-0 h-2 w-2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />

                <h2 className="font-display relative text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl">
                  <span className="relative z-0 inline-block">
                    <span className="absolute inset-0 z-0 bg-[#ec4fd8]" />
                    <span className="relative z-10">What are</span>
                  </span>
                  <br />
                  <span className="relative z-0 inline-block">
                    <span className="absolute inset-0 z-0 translate-x-2 translate-y-1 bg-[#f6b8ef]" />
                    <span className="relative z-10">People saying</span>
                  </span>
                  <br />
                  About me?!?!
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="hidden shrink-0 text-ink-soft transition-colors hover:text-ink md:block"
            >
              <ChevronIcon />
            </button>

            <div className="mx-auto max-w-xl text-center md:px-8">
              <p className="text-lg leading-relaxed text-navy/90 sm:text-xl">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="mt-6">
                <p className="text-ink-soft">
                  {active.name}, {active.company}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full border border-ink transition-colors ${
                      i === index ? "bg-transparent" : "bg-ink"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="hidden shrink-0 text-ink-soft transition-colors hover:text-ink md:block"
            >
              <ChevronIcon flip />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
