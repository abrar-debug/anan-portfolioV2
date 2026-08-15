import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import imagePlaceholder from "../assets/placeholders/image-placeholder.svg";
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

const SCRIPTED_QUERY = `*[_type == "scriptedPortfolio" && _id == "scriptedPortfolio"][0]{
  heading,
  items[]{ name, image }
}`;

const DEFAULT_HEADING = "Architecture";
const DEFAULT_SCRIPTED_ITEMS = Array.from({ length: 5 }, () => ({
  src: imagePlaceholder,
}));

const creative = [
  thumb06, thumb07, thumb08, thumb09, thumb10,
  thumb11, thumb12, thumb13, thumb14, thumb15,
].map((src) => ({ src }));

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
      {items.map((item, i) => (
        <div key={i} className="group relative aspect-[9/16] overflow-hidden bg-ink/5">
          <img
            src={item.src}
            alt={item.name || `${label} sample ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 backdrop-blur-sm">
              <PlayIcon />
            </span>
          </div>
          {item.name && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pt-10 pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-display text-xs leading-tight font-bold tracking-wide text-white uppercase sm:text-sm">
                {item.name}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [scripted, setScripted] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(SCRIPTED_QUERY)
      .then(setScripted)
      .catch((error) => console.error("Failed to load portfolio content:", error));
  }, []);

  const heading = scripted?.heading ?? DEFAULT_HEADING;
  const scriptedItems = scripted?.items?.length
    ? scripted.items.map((item) => ({
        src: item.image ? urlFor(item.image).width(480).url() : imagePlaceholder,
        name: item.name,
      }))
    : DEFAULT_SCRIPTED_ITEMS;

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <img
          src={doodleMan}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-6 hidden w-40 rotate-3 opacity-90 sm:block md:right-10 md:w-56"
        />
        <h2 className="font-display max-w-2xl text-5xl font-bold whitespace-pre-line uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {heading}
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 md:px-10">
        <Gallery items={scriptedItems} label="Scripted" />
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
