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
  brandName: "Anan Hoque Creative",
  email: "hello@ananhoque.com",
  bookingUrl: "https://calendly.com/ananhoque/consultation",
};

/**
 * Contact details are global: Navbar, Footer, and CTA all read from this
 * same "cta" document so there is one source of truth. Footer only uses
 * `email` (its copyright line is a fixed developer credit, not brandName).
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
