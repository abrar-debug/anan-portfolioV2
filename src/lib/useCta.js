import { useEffect, useState } from "react";
import { sanityClient } from "./sanity";

const CTA_QUERY = `*[_type == "cta" && _id == "cta"][0]{
  heading,
  polaroidImage,
  brandName,
  email,
  bookingUrl
}`;

const DEFAULTS = {
  heading: "Let's\nWork",
  brandName: "Niki Zamora Creative",
  email: "nikizamora.business@gmail.com",
  bookingUrl: "https://calendly.com/nikizamoraugc/ugc-consultation",
};

/**
 * Contact details (brandName, email, bookingUrl) are global: the Navbar and
 * Footer read from this same "cta" document so there is one source of truth.
 */
export function useCta() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(CTA_QUERY)
      .then(setData)
      .catch((error) => console.error("Failed to load contact/CTA content:", error));
  }, []);

  return {
    heading: data?.heading ?? DEFAULTS.heading,
    polaroidImage: data?.polaroidImage ?? null,
    brandName: data?.brandName ?? DEFAULTS.brandName,
    email: data?.email ?? DEFAULTS.email,
    bookingUrl: data?.bookingUrl ?? DEFAULTS.bookingUrl,
  };
}
