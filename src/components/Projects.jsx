import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";

const PROJECTS_QUERY = `*[_type == "projects" && _id == "projects"][0]{
  items,
  captionCount,
  captionSuffix
}`;

const DEFAULT_ITEMS = [
  "Headspace",
  "Nike",
  "Nurx",
  "Tofurky",
  "Aescape",
  "Canyon Bakehouse",
  "Upwork",
];
const DEFAULT_CAPTION_COUNT = "100";
const DEFAULT_CAPTION_SUFFIX = "still learning more";

export default function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(PROJECTS_QUERY)
      .then(setData)
      .catch((error) => console.error("Failed to load projects content:", error));
  }, []);

  const items = data?.items?.length ? data.items : DEFAULT_ITEMS;
  const captionCount = data?.captionCount ?? DEFAULT_CAPTION_COUNT;
  const captionSuffix = data?.captionSuffix ?? DEFAULT_CAPTION_SUFFIX;
  const track = [...items, ...items];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 md:px-6">
        <div className="marquee-track flex w-max gap-6 sm:gap-8 md:gap-10">
          {track.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-6 shadow-sm shadow-ink/5"
            >
              <span className="font-display text-sm font-bold whitespace-nowrap uppercase tracking-wide text-ink sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center font-serif text-lg italic">
        <span>(</span>
        <span className="text-[#6b4a8f]">{captionCount}</span>{" "}
        <span className="text-ink">projects</span>{" "}
        <span className="text-[#d9531e]">&amp;</span>{" "}
        <span className="text-navy">{captionSuffix}</span>
        <span>)</span>
      </p>
    </section>
  );
}
