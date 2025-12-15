import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    siteConfig.pages.home.path,
    siteConfig.pages.contact.path,
    ...Object.values(siteConfig.pages.services).map((s) => s.path),
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
