import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bazaja.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://bazaja.com/help",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}