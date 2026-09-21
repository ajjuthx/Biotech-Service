import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Urvi's Biomedical Services — Medical Equipment Service & Support",
    template: "%s | Urvi's Biomedical Services",
  },
  description:
    "Professional medical equipment maintenance, breakdown repair, installation and preventive maintenance for hospitals, ICUs, OTs, clinics and diagnostic centres in Pune.",
  keywords: ["biomedical services","medical equipment maintenance","ICU equipment","OT equipment","ventilator service","breakdown repair","preventive maintenance"],
  openGraph: {
    title: "Urvi's Biomedical Services — Your Trusted Biomedical Service Partner",
    description: "Breakdown | Preventive Maintenance | Installation | Calibration. ICU • OT • Hospital Equipment. Based in Bhosari, Pune.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
