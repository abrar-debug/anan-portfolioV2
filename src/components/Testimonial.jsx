import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import imagePlaceholder from "../assets/placeholders/image-placeholder.svg";

const TESTIMONIALS_QUERY = `*[_type == "testimonials" && _id == "testimonials"][0]{
  portraitImage,
  heading,
  items[]{ quote, name, company }
}`;

const DEFAULT_HEADING = "What are\nPeople saying\nAbout me?!?!";
const DEFAULT_ITEMS = [
  {
    quote:
      "Working with Anan has been an absolute pleasure. Their ability to quickly understand our vision and translate it into thoughtful, functional design was impressive. They consistently delivered on time, and their turnaround on revisions was incredibly fast without ever compromising quality.",
    name: "Nina Diaz",
    company: "Action for the Climate Emergency",
  },
  {
    quote:
      "One of the standout aspects of our collaboration was Anan's attention to detail and alignment with our brand and functional needs. The design felt considered, elegant, and genuinely reflected the character we wanted for the space. Communication throughout the process was smooth and timely, and the final result was beautifully executed, capturing our vision perfectly. Overall, the collaboration helped bring our project to life.",
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
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(TESTIMONIALS_QUERY)
      .then(setData)
      .catch((error) => console.error("Failed to load testimonials content:", error));
  }, []);

  const portraitUrl = data?.portraitImage
    ? urlFor(data.portraitImage).width(720).url()
    : imagePlaceholder;
  const headingLines = (data?.heading ?? DEFAULT_HEADING).split("\n");
  const testimonials = data?.items?.length ? data.items : DEFAULT_ITEMS;
  const active = testimonials[index] ?? testimonials[0];

  const go = (dir) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="relative">
            <img
              src={portraitUrl}
              alt="Testimonial portrait"
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="absolute top-6 right-4 w-[80%] max-w-sm sm:right-8">
              <span className="pointer-events-none absolute -top-10 -right-3 h-10 w-px bg-[#c9a24b]" />
              <span className="pointer-events-none absolute -top-11 -right-4 h-2.5 w-2.5 rounded-full bg-[#f2c94c]" />

              <div className="relative border border-[#e91e8c]/70 px-4 pt-4 pb-5">
                <span className="absolute top-0 -left-1 h-2 w-2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute top-0 -right-1 h-2 w-2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute bottom-0 -left-1 h-2 w-2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute bottom-0 -right-1 h-2 w-2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full border border-[#e91e8c]/70 bg-cream" />

                <h2 className="font-display relative text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl">
                  {headingLines.map((line, i) => (
                    <span key={i}>
                      {i === 0 && (
                        <span className="relative z-0 inline-block">
                          <span className="absolute inset-0 z-0 bg-[#ec4fd8]" />
                          <span className="relative z-10">{line}</span>
                        </span>
                      )}
                      {i === 1 && (
                        <span className="relative z-0 inline-block">
                          <span className="absolute inset-0 z-0 translate-x-2 translate-y-1 bg-[#f6b8ef]" />
                          <span className="relative z-10">{line}</span>
                        </span>
                      )}
                      {i > 1 && line}
                      {i < headingLines.length - 1 && <br />}
                    </span>
                  ))}
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
                    key={`${t.name}-${i}`}
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
