import type { Metadata } from "next";
import { FAQAccordion, type FAQItem } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { WA } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Urvi's Biomedical Services — breakdown response, preventive maintenance, ICU and OT equipment service, calibration and installation.",
};

interface FAQCategory { category: string; items: FAQItem[]; }

const FAQ_DATA: FAQCategory[] = [
  {
    category: "General",
    items: [
      { question: "What types of facilities do you service?", answer: "We provide biomedical equipment services to hospitals, nursing homes, clinics, diagnostic centres, ICUs, operating theatres, NICUs and CSSD departments in Pune and surrounding areas." },
      { question: "Where are you located and what areas do you cover?", answer: "We are based in Bhosari, Pune (B25, Basate Building, Mahadev Nagar-1, Sadguru Nagar, Bhosari, Pune – 411039). We service hospitals and healthcare facilities in Pune and nearby areas. Contact us to confirm availability for your location." },
      { question: "How do I request a service?", answer: "The fastest way is to WhatsApp us directly or call. For non-urgent requests you can also use our online Service Request page which opens a pre-filled WhatsApp message for our team." },
      { question: "What are your contact details?", answer: "Phone: +91 90212 61329 / +91 86918 90677. Email: us809595@gmail.com. We are available Monday to Saturday, 9:00 AM – 7:00 PM." },
    ],
  },
  {
    category: "Breakdown & Repair",
    items: [
      { question: "How quickly can you respond to an equipment breakdown?", answer: "We aim to respond to breakdown calls as quickly as possible. For urgent ICU or OT breakdowns, please call or WhatsApp us directly so we can prioritise your request. Response time depends on your location within our service area." },
      { question: "What happens when you arrive for a breakdown call?", answer: "Our engineer carries out a systematic fault diagnosis to identify the root cause, carries out the repair and replaces components where necessary, then verifies equipment performance before handback. A service report is provided after every visit." },
      { question: "Do you carry spare parts?", answer: "We carry common spare parts and consumables for frequently serviced equipment. For specialised or manufacturer-specific parts, we will source them as quickly as possible and advise on expected lead time." },
    ],
  },
  {
    category: "Preventive Maintenance",
    items: [
      { question: "Why is preventive maintenance important for medical equipment?", answer: "Regular preventive maintenance reduces the risk of unexpected equipment failures, extends equipment lifespan, ensures equipment is performing to specification, and supports accreditation requirements. For ICU and OT equipment, PM is essential to patient safety." },
      { question: "How do you carry out preventive maintenance?", answer: "PM visits cover visual inspection, cleaning, functional testing, electrical safety checks, performance assessment, consumable and filter replacement where applicable, and a written PM report." },
      { question: "Do you provide PM reports?", answer: "Yes. A written PM report is provided after every preventive maintenance visit, detailing checks performed, findings, any components replaced, and equipment status at completion." },
      { question: "How often should PM be carried out?", answer: "Frequency depends on equipment type, manufacturer recommendations, and usage intensity. Critical ICU equipment typically requires more frequent PM. We can advise on recommended intervals for your specific equipment." },
    ],
  },
  {
    category: "ICU & OT Equipment",
    items: [
      { question: "Do you specialise in ICU equipment?", answer: "Yes. ICU critical care equipment is one of our core service areas. We service ventilators, patient monitors, infusion and syringe pumps, defibrillators, suction machines, CPAP/BiPAP, oxygen concentrators and other critical care equipment." },
      { question: "Do you service anaesthesia machines?", answer: "Yes. Anaesthesia machine service including gas delivery system checks, vaporiser inspection, alarm verification and safety testing is part of our OT equipment service." },
      { question: "Can you service equipment from any manufacturer?", answer: "We service equipment from a range of manufacturers. Please contact us with your specific equipment details to confirm we can support your make and model." },
    ],
  },
  {
    category: "Installation & Commissioning",
    items: [
      { question: "Do you provide installation services for new equipment?", answer: "Yes. We carry out professional installation and commissioning of medical equipment including site assessment, installation, functional testing and user assistance." },
      { question: "Do you coordinate with equipment suppliers?", answer: "Yes, we can coordinate with equipment suppliers and your facility's engineering or estate team throughout the installation process." },
    ],
  },
  {
    category: "Calibration & Testing",
    items: [
      { question: "Do you carry out electrical safety testing?", answer: "Yes. Electrical safety testing including earth continuity, insulation resistance and leakage current measurement is included in our calibration and testing service." },
      { question: "Do you issue calibration certificates?", answer: "We issue performance test reports and service documentation. For NABL-traceable calibration, we can coordinate with accredited calibration laboratories." },
      { question: "Which equipment types require regular calibration?", answer: "Patient monitors, infusion and syringe pumps, defibrillators, weighing scales, blood pressure equipment and many diagnostic devices require regular performance verification and calibration." },
    ],
  },
  {
    category: "Documentation & Confidentiality",
    items: [
      { question: "Is our facility and equipment information kept confidential?", answer: "Yes. All facility information, equipment details, service history and any data shared with us is treated as strictly confidential." },
      { question: "What service documentation do you provide?", answer: "We provide a written service report after every service visit — breakdown repair, preventive maintenance, installation or calibration. Reports detail work carried out, findings, components replaced, and equipment status." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-secondary">FAQ</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-primary-dark">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-xl text-text-muted">
            Common questions about our services and processes. Can&apos;t find what you need?{" "}
            <a href="/contact" className="font-semibold text-secondary hover:underline">
              Contact us directly.
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {FAQ_DATA.map(({ category, items }) => (
            <div key={category}>
              <h2 className="mb-5 text-xl font-bold text-primary-dark">{category}</h2>
              <FAQAccordion items={items} />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="Call or WhatsApp our team directly — we are happy to help."
        primaryLabel="WhatsApp Us"
        primaryMsg={WA.general}
        secondaryLabel="Request a Service"
        secondaryMsg={WA.breakdown}
        emergency={false}
      />
    </>
  );
}
