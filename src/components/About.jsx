import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import videoPlaceholder from "../assets/hero/video-placeholder.svg";

const ABOUT_QUERY = `*[_type == "about" && _id == "about"][0]{
  "videoUrl": video.asset->url,
  posterImage,
  heading,
  descriptors
}`;

const DEFAULT_HEADING = "Who Am I";
const DEFAULT_DESCRIPTORS = [
  "Architect",
  "Design-Led Thinker",
  "Detail-Oriented",
  "Sustainable Design Advocate",
  "Collaborative Problem Solver",
  "Craft-Focused",
  "Lifelong Learner",
];

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(ABOUT_QUERY)
      .then(setAbout)
      .catch((error) => console.error("Failed to load about content:", error));
  }, []);

  const posterUrl = about?.posterImage
    ? urlFor(about.posterImage).width(1600).url()
    : videoPlaceholder;
  const heading = about?.heading ?? DEFAULT_HEADING;
  const descriptors = about?.descriptors?.length
    ? about.descriptors
    : DEFAULT_DESCRIPTORS;

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] md:aspect-[31/16]">
          {about?.videoUrl ? (
            <video
              src={about.videoUrl}
              poster={posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <img
              src={posterUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-ink/15" />

          <p className="font-display absolute left-1/2 top-[8%] w-full -translate-x-1/2 text-center text-2xl font-bold uppercase tracking-tight text-white sm:top-[30%] sm:w-auto sm:text-4xl md:left-[46%] md:text-5xl">
            &ldquo; {heading} &rdquo;
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
