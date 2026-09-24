import { Metadata } from "next";

export function constructMetadata({
  title = "Rhythmic Gymnastics Blog & Parents Guide | Bravo",
  description = "Explore our rhythmic gymnastics blog for parents and beginners. Discover guides on leotards, equipment, and kids gymnastics classes. Read more!",
  image = "/images/og-default.jpg",
  icons = "/favicon.ico",
  noIndex = false,
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const url = `https://learn.bravorhythmic.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Bravo Rhythmic Gymnastics",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@bravorhythmic",
    },
    icons,
    alternates: {
      canonical: url,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
