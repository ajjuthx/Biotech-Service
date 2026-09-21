/**
 * URVI'S BIOMEDICAL SERVICES — Site Config
 * Single source of truth for all contact details, domain, and WhatsApp messages.
 *
 * When your .in domain is ready → update DOMAIN below.
 * Everything else (sitemap, robots, metadata, structured data) updates automatically.
 */

// ← UPDATE THIS when your .in domain is live
export const DOMAIN = "https://www.urvisbiomedical.in";

export const WHATSAPP_NUMBER = "919021261329";

// Service cities — shown in navbar, hero, footer, metadata
export const SERVICE_CITIES = ["Pune", "Chhatrapati Sambhajinagar"];

export const COMPANY = {
  name:         "Urvi's Biomedical Services",
  tagline:      "Your Trusted Biomedical Service Partner",
  phone1:       "+91 90212 61329",
  phone1Raw:    "+919021261329",
  phone2:       "+91 86918 90677",
  phone2Raw:    "+918691890677",
  email:        "urvibiomedicalservices2705@gmail.com",
  address:      "B25, Basate Building, Mahadev Nagar-1, Behind Roshal Garden Hotel, Sadguru Nagar, Bhosari, Pune – 411039",
  addressShort: "Bhosari, Pune – 411039",
  city:         "Pune",
  state:        "Maharashtra",
  country:      "India",
  pincode:      "411039",
  hours:        "Mon–Sat, 9:00 AM – 7:00 PM",
  hoursSchema:  "Mo-Sa 09:00-19:00",
  serviceArea:  "ICU • OT • NICU • PICU • Hospital Equipment",
  serviceCities: "Pune & Chhatrapati Sambhajinagar",
  geo: { lat: 18.6298, lng: 73.8474 }, // Bhosari, Pune
};

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general:
    `Hello, I would like to enquire about Urvi's Biomedical Services. Please get in touch.`,

  breakdown:
    `🚨 *BREAKDOWN REQUEST*\n\nHello, we have a medical equipment breakdown and need urgent support.\n\nFacility Name: \nEquipment Name: \nProblem / Fault: \nLocation: \n\nPlease contact us as soon as possible.`,

  service: (serviceName: string) =>
    `Hello, I am interested in your *${serviceName}* service.\n\nFacility Name: \nRequirement: \n\nPlease get in touch.`,

  icu:
    `Hello, I need service support for ICU equipment.\n\nFacility Name: \nEquipment: \nRequirement (Breakdown / PM / Other): \n\nPlease contact us.`,

  ot:
    `Hello, I need service support for OT equipment.\n\nFacility Name: \nEquipment: \nRequirement (Breakdown / PM / Other): \n\nPlease contact us.`,

  pm:
    `Hello, I would like to schedule a Preventive Maintenance visit for our medical equipment.\n\nFacility Name: \nEquipment List: \nPreferred Dates: \n\nPlease get in touch.`,

  installation:
    `Hello, I need Installation & Commissioning support for new medical equipment.\n\nFacility Name: \nEquipment: \nExpected Installation Date: \n\nPlease contact us.`,

  calibration:
    `Hello, I need Calibration & Testing services for our medical equipment.\n\nFacility Name: \nEquipment List: \n\nPlease share details.`,

  consultancy:
    `Hello, I am interested in Biomedical Consultancy services.\n\nFacility Name: \nRequirement: \n\nPlease get in touch.`,

  contact:
    `Hello, I have an enquiry for Urvi's Biomedical Services.\n\nName: \nFacility: \nEnquiry: `,
};
