import whoAmIVideo from "../assets/video/who-am-i.mp4";
import poster from "../assets/hero/hero-wide.jpg";

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
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] md:aspect-[31/16]">
          <video
            src={whoAmIVideo}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/15" />

          <p className="font-display absolute left-1/2 top-[8%] w-full -translate-x-1/2 text-center text-2xl font-bold uppercase tracking-tight text-white sm:top-[30%] sm:w-auto sm:text-4xl md:left-[46%] md:text-5xl">
            &ldquo; Who Am I &rdquo;
          </p>

          <ul className="absolute bottom-[6%] left-[6%] space-y-0.5 sm:bottom-[10%] sm:left-[8%] sm:space-y-1">
            {descriptors.map((item) => (
              <li
                key={item}
                className="font-display text-base font-bold uppercase leading-tight tracking-tight text-white sm:text-xl md:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
