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

const scripted = [thumb01, thumb02, thumb03, thumb04, thumb05, thumb06];
const creative = [thumb07, thumb08, thumb09, thumb10, thumb11, thumb12, thumb13, thumb14, thumb15];

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-ink"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Gallery({ items, label }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {items.map((src, i) => (
        <div
          key={i}
          className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink/5"
        >
          <img
            src={src}
            alt={`${label} sample ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20">
            <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-cream/90 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
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
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">
            Selected work
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Scripted &amp; Straightforward
          </h2>
          <p className="mt-4 text-ink-soft">
            Clean, product-first videos built around a clear script and a
            confident call to action.
          </p>
        </div>
        <div className="mt-12">
          <Gallery items={scripted} label="Scripted" />
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 md:px-10 md:mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">
            More work
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Creative &amp; Playful
          </h2>
          <p className="mt-4 text-ink-soft">
            Unscripted, trend-driven content that feels native to the feed
            &mdash; playful takes with real personality.
          </p>
        </div>
        <div className="mt-12">
          <Gallery items={creative} label="Creative" />
        </div>
      </div>
    </section>
  );
}
