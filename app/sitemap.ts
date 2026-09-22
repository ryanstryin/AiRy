import type { MetadataRoute } from "next";
import { releasedChildren } from "@/content/blueprint/children";

const SITE = "https://airytransformation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/blueprint", priority: 0.9 },
    { path: "/accelerator", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/case-studies", priority: 0.7 },
    { path: "/brand-portfolio", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...releasedChildren().map((c) => ({
      url: `${SITE}/blueprint/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
