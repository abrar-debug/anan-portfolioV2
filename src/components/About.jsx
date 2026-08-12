import doodleFrame from "../assets/testimonial/focus.png";
import polaroid from "../assets/footer/rotated.png";

const descriptors = [
  "UGC Creator",
  "Coffee Connoisseur",
  "Cat & Dog Mom",
  "Frequent Traveller",
  "Gen Z (25 y/o)",
  "Professional Dancer",
  "Chicago Based",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="relative order-2 mx-auto w-full max-w-sm md:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-line" />
          <img
            src={polaroid}
            alt="Niki Zamora"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-ink/10"
          />
          <img
            src={doodleFrame}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-10 -right-10 hidden w-32 opacity-90 sm:block sm:w-40"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">
            Get to know me
          </p>
          <h2 className="font-display mt-3 text-5xl font-bold uppercase leading-none tracking-tight text-ink sm:text-6xl">
            Who Am I
          </h2>

          <ul className="mt-8 space-y-3">
            {descriptors.map((item) => (
              <li
                key={item}
                className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-md text-ink-soft">
            I create scripted and off-the-cuff content that sounds like a
            real person talking &mdash; because it is. Four years, 100+
            brands, and a whole lot of iPhone footage later, I still love
            turning a product into a story worth watching.
          </p>
        </div>
      </div>
    </section>
  );
}
