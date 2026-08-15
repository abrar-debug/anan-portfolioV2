import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import portraitPlaceholder from "../assets/placeholders/image-placeholder.svg";
import signaturePlaceholder from "../assets/hero/signature-placeholder.svg";

const HERO_QUERY = `*[_type == "hero" && _id == "hero"][0]{mainImage, signatureImage, subheading}`;
const DEFAULT_SUBHEADING = "Premium\nUGC Creator";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(HERO_QUERY)
      .then(setHero)
      .catch((error) => console.error("Failed to load hero content:", error));
  }, []);

  const mainImageUrl = hero?.mainImage
    ? urlFor(hero.mainImage).width(840).url()
    : portraitPlaceholder;
  const signatureImageUrl = hero?.signatureImage
    ? urlFor(hero.signatureImage).width(600).url()
    : signaturePlaceholder;
  const subheading = hero?.subheading ?? DEFAULT_SUBHEADING;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:px-10 md:pt-16 md:pb-24">
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
          <img
            src={signatureImageUrl}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[42%] left-1/2 z-0 w-[240px] -translate-x-1/2 -rotate-3 opacity-90 sm:w-[300px] md:w-[360px]"
          />

          <img
            src={mainImageUrl}
            alt="Niki Zamora"
            className="relative z-10 aspect-[4/5] w-full object-cover"
          />
        </div>

        <p className="font-display absolute top-[74%] left-[62%] z-10 hidden w-max text-sm font-bold uppercase leading-snug tracking-[0.18em] whitespace-pre-line text-navy sm:block md:top-[70%] md:left-[66%] md:text-base">
          {subheading}
        </p>
      </div>
    </section>
  );
}
