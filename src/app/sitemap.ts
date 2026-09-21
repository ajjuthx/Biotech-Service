import { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/config";
import { DEMO_SERVICES } from "@/lib/services/demo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    // Highest priority — homepage and main conversion pages
    { url: DOMAIN,                          lastModified: now, priority: 1.0,  changeFrequency: "monthly"  },
    { url: `${DOMAIN}/service-request`,     lastModified: now, priority: 0.95, changeFrequency: "monthly"  },
    { url: `${DOMAIN}/icu-equipment`,       lastModified: now, priority: 0.95, changeFrequency: "monthly"  },
    { url: `${DOMAIN}/ot-equipment`,        lastModified: now, priority: 0.9,  changeFrequency: "monthly"  },
    { url: `${DOMAIN}/services`,            lastModified: now, priority: 0.9,  changeFrequency: "weekly"   },
    // Supporting pages
    { url: `${DOMAIN}/contact`,             lastModified: now, priority: 0.85, changeFrequency: "monthly"  },
    { url: `${DOMAIN}/about`,               lastModified: now, priority: 0.75, changeFrequency: "monthly"  },
    { url: `${DOMAIN}/faq`,                 lastModified: now, priority: 0.75, changeFrequency: "monthly"  },
    { url: `${DOMAIN}/resources`,           lastModified: now, priority: 0.7,  changeFrequency: "weekly"   },
  ];

  // Individual service pages — strong SEO targets
  const serviceRoutes: MetadataRoute.Sitemap = DEMO_SERVICES.map((s) => ({
    url: `${DOMAIN}/services/${s.slug}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
