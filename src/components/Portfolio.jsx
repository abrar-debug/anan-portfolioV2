import thumb01 from "../assets/portfolio/thumb-01.jpg";
import thumb02 from "../assets/portfolio/thumb-02.jpg";
import thumb03 from "../assets/portfolio/thumb-03.jpg";
import thumb04 from "../assets/portfolio/thumb-04.jpg";
import thumb05 from "../assets/portfolio/thumb-05.jpg";
import thumb06 from "../assets/portfolio/thumb-06.jpg";
import thumb07 from "../assets/portfolio/thumb-07.jpg";
import thumb08 from "../assets/portfolio/thumb-08.jpg";
import thumb09 from "../assets/portfolio/thumb-09.jpg";
import thumb10 from "../assets/portfolio/thumb-10.jpg";
import thumb11 from "../assets/portfolio/thumb-11.jpg";
import thumb12 from "../assets/portfolio/thumb-12.jpg";
import thumb13 from "../assets/portfolio/thumb-13.jpg";
import thumb14 from "../assets/portfolio/thumb-14.jpg";
import thumb15 from "../assets/portfolio/thumb-15.jpg";
import doodleMan from "../assets/portfolio/doodle-man.png";
import doodleFlower from "../assets/portfolio/doodle-flower.png";

const scripted = [thumb01, thumb02, thumb03, thumb04, thumb05];
const creative = [thumb06, thumb07, thumb08, thumb09, thumb10, thumb11, thumb12, thumb13, thumb14, thumb15];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Gallery({ items, label }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((src, i) => (
        <div key={i} className="group relative aspect-[9/16] overflow-hidden bg-ink/5">
          <img
            src={src}
            alt={`${label} sample ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 backdrop-blur-sm">
              <PlayIcon />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <img
          src={doodleMan}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-6 hidden w-40 rotate-3 opacity-90 sm:block md:right-10 md:w-56"
        />
        <h2 className="font-display max-w-2xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Scripted &amp;
          <br /> Straightforward
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 md:px-10">
        <Gallery items={scripted} label="Scripted" />
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <img
          src={doodleFlower}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 left-6 hidden w-32 -rotate-6 opacity-90 sm:block md:left-10 md:w-44"
        />
        <h2 className="font-display ml-auto max-w-2xl text-right text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Creative &amp;
          <br /> Playful
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 md:px-10">
        <Gallery items={creative} label="Creative" />
      </div>
    </section>
  );
}
