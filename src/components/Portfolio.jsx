import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import imagePlaceholder from "../assets/placeholders/image-placeholder.svg";
import doodleMan from "../assets/portfolio/doodle-man.png";
import doodleFlower from "../assets/portfolio/doodle-flower.png";

const PORTFOLIO_QUERY = `{
  "scripted": *[_type == "scriptedPortfolio" && _id == "scriptedPortfolio"][0]{heading, items[]{name, image}},
  "interior": *[_type == "interiorPortfolio" && _id == "interiorPortfolio"][0]{heading, items[]{name, image}},
  "photography": *[_type == "photographyPortfolio" && _id == "photographyPortfolio"][0]{heading, items[]{name, image}}
}`;

const PLACEHOLDER_ITEMS = Array.from({ length: 5 }, () => ({ src: imagePlaceholder }));

const SECTIONS = [
  {
    key: "scripted",
    label: "Scripted",
    defaultHeading: "Architecture",
    doodle: doodleMan,
    doodleClassName: "-top-6 right-6 w-40 rotate-3 md:right-10 md:w-56",
    headingAlign: "left",
  },
  {
    key: "interior",
    label: "Interior",
    defaultHeading: "Interior Design",
    doodle: doodleFlower,
    doodleClassName: "-top-4 left-6 w-32 -rotate-6 md:left-10 md:w-44",
    headingAlign: "right",
  },
  {
    key: "photography",
    label: "Photography",
    defaultHeading: "Photography",
    doodle: doodleMan,
    doodleClassName: "-top-6 right-6 w-40 rotate-3 md:right-10 md:w-56",
    headingAlign: "left",
  },
];

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

function PortfolioSection({ section, data, isFirst }) {
  const heading = data?.heading ?? section.defaultHeading;
  const items = data?.items?.length
    ? data.items.map((item) => ({
        src: item.image ? urlFor(item.image).width(480).url() : imagePlaceholder,
        name: item.name,
      }))
    : PLACEHOLDER_ITEMS;
  const isRightAligned = section.headingAlign === "right";

  return (
    <>
      <div
        className={`relative mx-auto max-w-7xl px-6 md:px-10 ${isFirst ? "" : "mt-16 md:mt-24"}`}
      >
        <img
          src={section.doodle}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute hidden opacity-90 sm:block ${section.doodleClassName}`}
        />
        <h2
          className={`font-display max-w-2xl text-5xl font-bold whitespace-pre-line uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl ${
            isRightAligned ? "ml-auto text-right" : ""
          }`}
        >
          {heading}
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 md:px-10">
        <Gallery items={items} label={section.label} />
      </div>
    </>
  );
}

export default function Portfolio() {
  const [data, setData] = useState({});

  useEffect(() => {
    sanityClient
      .fetch(PORTFOLIO_QUERY)
      .then(setData)
      .catch((error) => console.error("Failed to load portfolio content:", error));
  }, []);

  return (
    <section id="work" className="py-16 md:py-24">
      {SECTIONS.map((section, i) => (
        <PortfolioSection
          key={section.key}
          section={section}
          data={data[section.key]}
          isFirst={i === 0}
        />
      ))}
    </section>
  );
}
