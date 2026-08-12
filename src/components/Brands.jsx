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

export default function Brands() {
  const track = [...logos, ...logos];

  return (
    <section className="border-y border-line bg-white/40 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">
          Trusted by
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          100 Brands &amp; Counting
        </h2>
      </div>

      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-16">
          {track.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              aria-hidden={i >= logos.length}
              className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
