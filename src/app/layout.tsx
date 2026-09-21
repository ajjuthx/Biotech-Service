import type { Metadata } from "next";
import "./globals.css";
import { DOMAIN, COMPANY } from "@/lib/config";

export const metadata: Metadata = {
  // metadataBase is REQUIRED for Vercel — without it, OG images and
  // canonical URLs are relative and break on deployment.
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Urvi's Biomedical Services | Medical Equipment Service & Repair in Pune",
    template: "%s | Urvi's Biomedical Services, Pune",
  },

  description:
    "Urvi's Biomedical Services — professional medical equipment breakdown repair, preventive maintenance, installation and calibration for hospitals, ICUs, NICUs, OTs in Pune and Chhatrapati Sambhajinagar. Call +91 90212 61329.",

  keywords: [
    // Service keywords
    "biomedical services pune",
    "medical equipment repair pune",
    "biomedical equipment maintenance pune",
    "medical equipment breakdown repair pune",
    "preventive maintenance medical equipment pune",
    "medical equipment installation pune",
    "medical equipment calibration pune",
    // Equipment keywords
    "ventilator repair pune",
    "patient monitor service pune",
    "ICU equipment service pune",
    "OT equipment service pune",
    "defibrillator service pune",
    "infusion pump repair pune",
    "syringe pump service pune",
    "anaesthesia machine service pune",
    // Location keywords
    "biomedical engineer pune",
    "biomedical services bhosari pune",
    "hospital equipment service pune",
    "medical equipment technician pune",
    "biomedical equipment repair pimpri chinchwad",
  ],

  authors: [{ name: "Urvi's Biomedical Services" }],
  creator: "Urvi's Biomedical Services",
  publisher: "Urvi's Biomedical Services",

  // Canonical + alternates
  alternates: {
    canonical: "/",
  },

  // Open Graph (WhatsApp, Facebook, LinkedIn previews)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: DOMAIN,
    siteName: "Urvi's Biomedical Services",
    title: "Urvi's Biomedical Services | Medical Equipment Service in Pune",
    description:
      "Breakdown repair, preventive maintenance, installation & calibration for ICU, OT and hospital equipment. Based in Bhosari, Pune. Call +91 90212 61329.",
    images: [
      {
        url: "/og-image.png", // add a 1200×630 image to /public later
        width: 1200,
        height: 630,
        alt: "Urvi's Biomedical Services — Medical Equipment Service in Pune",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Urvi's Biomedical Services | Medical Equipment Service in Pune",
    description:
      "Breakdown repair, preventive maintenance & calibration for ICU, OT and hospital equipment in Pune. +91 90212 61329.",
  },

  // Verification tags — add your Search Console code when ready
  // verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data — LocalBusiness + MedicalBusiness schema
// This tells Google exactly who you are, where you are, and what you do.
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": `${DOMAIN}/#business`,
  name: COMPANY.name,
  description:
    "Professional biomedical equipment service and support — breakdown repair, preventive maintenance, installation and calibration for hospitals, ICUs, NICUs, OTs and PICUs in Pune and Chhatrapati Sambhajinagar.",
  url: DOMAIN,
  telephone: [COMPANY.phone1Raw, COMPANY.phone2Raw],
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "B25, Basate Building, Mahadev Nagar-1, Behind Roshal Garden Hotel, Sadguru Nagar",
    addressLocality: "Bhosari, Pune",
    addressRegion: "Maharashtra",
    postalCode: COMPANY.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Chhatrapati Sambhajinagar" },
  ],
  serviceType: [
    "Medical Equipment Repair",
    "Biomedical Equipment Maintenance",
    "ICU Equipment Service",
    "OT Equipment Service",
    "Medical Equipment Installation",
    "Medical Equipment Calibration",
    "Preventive Maintenance",
  ],
  hasMap: `https://www.google.com/maps/search/${encodeURIComponent(COMPANY.address)}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone1Raw,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone2Raw,
      contactType: "technical support",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
  sameAs: [
    `https://wa.me/${COMPANY.phone1Raw.replace("+", "")}`,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
