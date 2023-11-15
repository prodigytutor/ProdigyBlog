import { Maybe } from "graphql/jsutils/Maybe";
import { IGenSeoInformation } from "../graphql/__generated/sdk";
import { Metadata } from "next";

const publicURL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const getMetadataProps = (seo: Maybe<IGenSeoInformation>): Metadata => {
  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;
  const metadata: Metadata = {
    metadataBase: new URL(publicURL),
    openGraph: {
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    // robots: { index: true, googleBot: { index: true } },
  };
  if (!seo) return metadata;
  if (metadata.openGraph && metadata.twitter) {
    if (seo.title) {
      metadata["title"] = seo.title;
      metadata.openGraph["title"] = seo.title;
      metadata.twitter["title"] = seo.title;
    }

    if (seo.description) {
      metadata["description"] = seo.description;
      metadata.openGraph["description"] = seo.description;
      metadata.twitter["description"] = seo.description;
    }

    if (ogImageSrc) {
      metadata.openGraph["images"] = {
        type: "image/jpeg",
        url: ogImageSrc,
        width: 1200,
        height: 630,
        secureUrl: `${ogImageSrc}?f=jpeg&w=1200&h=630`,
      };

      metadata.twitter["images"] = ogImageSrc;
    }

    if (ogImageAlt && metadata.openGraph["images"]) {
      metadata.openGraph["images"]["alt"] = ogImageAlt;
    }
  }
  return metadata;
};
