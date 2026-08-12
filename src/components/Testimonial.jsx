import portrait from "../assets/testimonial/portrait.png";

const quote =
  "Working with Niki has been an absolute pleasure. Her ability to quickly understand our mission and translate it into engaging, high-quality short-form videos was impressive. She consistently delivered on time, and her turnaround on edits was incredibly fast without ever compromising quality.";

export default function Testimonial() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <img
          src={portrait}
          alt="Niki Zamora"
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-xl shadow-ink/10"
        />

        <div>
          <svg
            viewBox="0 0 32 24"
            fill="currentColor"
            className="h-10 w-10 text-line"
          >
            <path d="M0 24V14.4C0 6.4 4.8 1.2 13.2 0l1.6 3.6C9.6 5.2 7.2 8.4 6.8 12.8h6.8V24H0Zm17.2 0V14.4c0-8 4.8-13.2 13.2-14.4L32 3.6c-5.2 1.6-7.6 4.8-8 9.2H30.8V24H17.2Z" />
          </svg>

          <p className="font-display mt-6 text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
            {quote}
          </p>

          <div className="mt-8">
            <p className="font-display text-lg font-bold text-ink">
              Nina Diaz
            </p>
            <p className="text-sm uppercase tracking-[0.12em] text-muted">
              Action for the Climate Emergency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
