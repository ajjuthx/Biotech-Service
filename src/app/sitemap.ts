import { MetadataRoute } from "next";
import { DEMO_SERVICES } from "@/lib/services/demo-data";

const BASE = "https://www.uvibiomedical.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: new Date(), priority: 1.0,  changeFrequency: "monthly" },
    { url: `${BASE}/services`,          lastModified: new Date(), priority: 0.9,  changeFrequency: "weekly" },
    { url: `${BASE}/icu-equipment`,     lastModified: new Date(), priority: 0.95, changeFrequency: "monthly" },
    { url: `${BASE}/ot-equipment`,      lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/service-request`,   lastModified: new Date(), priority: 0.95, changeFrequency: "monthly" },
    { url: `${BASE}/about`,             lastModified: new Date(), priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/contact`,           lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/faq`,               lastModified: new Date(), priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/resources`,         lastModified: new Date(), priority: 0.7,  changeFrequency: "weekly" },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = DEMO_SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
