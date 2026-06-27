import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://feenixs.com";
  
  const routes = [
    "",
    "/about",
    "/technology",
    "/research",
    "/research/experiments",
    "/developers",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    "/cookie-policy",
    "/community",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
