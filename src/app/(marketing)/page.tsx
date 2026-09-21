import { Hero } from "@/components/marketing/hero";
import { TrustSection } from "@/components/marketing/trust-section";
import { ServicesShowcase } from "@/components/marketing/services-showcase";
import { ICUSection } from "@/components/marketing/icu-section";
import { CTASection } from "@/components/marketing/cta-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesShowcase />
      <ICUSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
