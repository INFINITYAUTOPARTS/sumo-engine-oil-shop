import type { Metadata } from "next";

type EngineOilMetadataOptions = {
  car: string;
  description?: string;
  slug: string;
};

export function createEngineOilMetadata({
  car,
  description,
  slug,
}: EngineOilMetadataOptions): Metadata {
  const title = `Best Engine Oil for ${car} Malaysia`;
  const finalDescription =
    description ??
    `Learn the recommended engine oil viscosity for ${car} in Malaysia and discover a suitable SUMO engine oil.`;

  const url = `https://www.infinityautoparts.my/blog/${slug}`;

  return {
    title,
    description: finalDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description: finalDescription,
      url,
      siteName: "Infinity Auto Parts",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: finalDescription,
    },
  };
}