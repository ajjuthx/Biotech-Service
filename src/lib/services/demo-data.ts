/**
 * URVI'S BIOMEDICAL SERVICES — Demo / seed-shaped data
 */
import {
  Wrench, FileCheck2, ShieldCheck, Settings, Gauge,
  Stethoscope, Monitor, Heart, Wind, Zap, Thermometer,
  FlaskConical, Baby, Microscope, Truck, type LucideIcon,
} from "lucide-react";

export interface DemoCategory {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface DemoService {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  applications: string[];
  capabilities: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  icon: LucideIcon;
  isFeatured: boolean;
}

export const DEMO_CATEGORIES: DemoCategory[] = [
  { slug: "breakdown-repair",           name: "Breakdown & Repair",           icon: Wrench,      description: "Emergency fault diagnosis and repair for all medical equipment." },
  { slug: "preventive-maintenance",     name: "Preventive Maintenance",       icon: ShieldCheck, description: "Scheduled inspections, functional testing and safety checks." },
  { slug: "installation-commissioning", name: "Installation & Commissioning", icon: Settings,    description: "Professional equipment installation, site readiness and commissioning." },
  { slug: "calibration-testing",        name: "Calibration & Testing",        icon: Gauge,       description: "Performance checks, electrical safety and accuracy verification." },
  { slug: "biomedical-consultancy",     name: "Biomedical Consultancy",       icon: Stethoscope, description: "Equipment evaluation, hospital planning and maintenance strategy." },
];

const PROCESS_STEPS_BREAKDOWN = [
  { title: "Log Breakdown Call",      description: "Contact us by phone, WhatsApp, or our service request form. We acknowledge all breakdown requests promptly." },
  { title: "Rapid Response",          description: "Our biomedical engineer is dispatched to your facility as quickly as possible." },
  { title: "Fault Diagnosis",         description: "We identify the root cause of the equipment failure using systematic diagnostic procedures." },
  { title: "Repair & Replacement",    description: "We carry out the repair, replacing components where necessary to restore full functionality." },
  { title: "Performance Verification",description: "Equipment is tested and verified before being returned to clinical use." },
];


const FAQS_BREAKDOWN = [
  { question: "How quickly can you respond to a breakdown?", answer: "Response time depends on your location and contract type. Please contact us for specific response commitments for your facility." },
  { question: "Do you carry spare parts?", answer: "We maintain a stock of common spare parts and consumables for frequently serviced equipment. For specialised components, we source them as quickly as possible." },
  { question: "What equipment do you service?", answer: "We service a wide range of medical equipment including ventilators, patient monitors, infusion pumps, defibrillators, anaesthesia machines, ECG machines, and more." },
];


export const DEMO_SERVICES: DemoService[] = [
  {
    slug: "breakdown-repair",
    name: "Breakdown & Repair Services",
    categorySlug: "breakdown-repair",
    categoryName: "Breakdown & Repair",
    shortDescription: "Emergency breakdown support, fault diagnosis, repair and performance verification for all medical equipment.",
    fullDescription: "When medical equipment fails, it directly impacts patient care. Our breakdown and repair service provides prompt technical support to get your equipment back in operation as quickly as possible. We handle emergency fault diagnosis, component-level repair, and full performance verification before returning equipment to clinical service.",
    applications: ["ICU", "Operating Theatre", "Emergency Department", "General Wards", "Diagnostic Centres", "Clinics"],
    capabilities: ["Emergency breakdown response", "Systematic fault diagnosis", "Component repair and replacement", "Performance and safety verification", "Service documentation"],
    processSteps: PROCESS_STEPS_BREAKDOWN,
    faqs: FAQS_BREAKDOWN,
    icon: Wrench,
    isFeatured: true,
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    categorySlug: "preventive-maintenance",
    categoryName: "Preventive Maintenance",
    shortDescription: "Scheduled inspection, functional testing, safety checks and performance assessment to prevent equipment failures before they occur.",
    fullDescription: "Regular preventive maintenance is the most effective way to reduce unexpected equipment breakdowns and extend equipment lifespan. Our structured PM programme covers detailed inspection, cleaning, functional testing, electrical safety checks, and performance assessment, with a written maintenance report after each visit.",
    applications: ["Ventilators", "Patient Monitors", "Infusion Pumps", "Defibrillators", "Anaesthesia Machines", "All Medical Equipment"],
    capabilities: ["Scheduled inspection and cleaning", "Functional and performance testing", "Electrical safety checks", "Filter and consumable replacement", "Written PM report"],
    processSteps: [
      { title: "Schedule PM Visit", description: "PM visits are planned in advance to minimise disruption to clinical operations." },
      { title: "Equipment Inspection", description: "Detailed visual and physical inspection of all equipment components." },
      { title: "Functional Testing", description: "Equipment is tested against manufacturer specifications and clinical performance requirements." },
      { title: "Safety Checks", description: "Electrical safety and performance checks are carried out as per applicable standards." },
      { title: "PM Report & Sign-off", description: "A written PM report is provided and countersigned by the facility's biomedical or engineering department." },
    ],
    faqs: [
      { question: "How often should preventive maintenance be carried out?", answer: "Frequency depends on equipment type, manufacturer recommendations, and usage intensity. Critical ICU equipment typically requires more frequent PM than general ward equipment." },
      { question: "What documentation do you provide?", answer: "We provide a written PM report for every visit, detailing checks performed, findings, components replaced, and equipment status at completion." },
    ],
    icon: ShieldCheck,
    isFeatured: true,
  },
  {
    slug: "installation-commissioning",
    name: "Installation & Commissioning",
    categorySlug: "installation-commissioning",
    categoryName: "Installation & Commissioning",
    shortDescription: "Professional medical equipment installation, site readiness assessment, commissioning, and user assistance.",
    fullDescription: "Correct installation and commissioning of medical equipment is essential for safe and effective clinical use. We provide professional installation services including site readiness assessment, equipment installation, commissioning, functional testing, and user assistance to ensure equipment is ready for clinical deployment.",
    applications: ["New Hospital Departments", "ICU Setup", "OT Equipment", "Ward Equipment", "Diagnostic Equipment", "Equipment Upgrades"],
    capabilities: ["Site readiness assessment", "Equipment installation and setup", "Commissioning and functional testing", "Integration with existing systems", "User assistance and handover"],
    processSteps: [
      { title: "Site Assessment", description: "We assess the installation site for space, power, gas supply, and environmental requirements." },
      { title: "Equipment Delivery Coordination", description: "We coordinate with suppliers and your facility team for equipment delivery and unpacking." },
      { title: "Installation", description: "Professional installation is carried out as per manufacturer guidelines and site requirements." },
      { title: "Commissioning & Testing", description: "Equipment is commissioned and fully tested before clinical handover." },
      { title: "User Assistance & Handover", description: "We provide basic user assistance and complete the formal handover with documentation." },
    ],
    faqs: [
      { question: "Do you coordinate with equipment suppliers?", answer: "Yes, we can coordinate with equipment suppliers and your facility's engineering or estate team throughout the installation process." },
    ],
    icon: Settings,
    isFeatured: false,
  },
  {
    slug: "calibration-testing",
    name: "Calibration & Testing",
    categorySlug: "calibration-testing",
    categoryName: "Calibration & Testing",
    shortDescription: "Equipment performance checks, electrical safety testing, accuracy verification and calibration coordination.",
    fullDescription: "Accurate, well-calibrated medical equipment is critical for patient safety and reliable clinical results. We carry out equipment performance checks, electrical safety testing, and accuracy verification, and can coordinate calibration documentation requirements for accreditation and regulatory purposes.",
    applications: ["Patient Monitors", "Infusion Pumps", "Syringe Pumps", "Defibrillators", "Blood Pressure Equipment", "Weighing Scales"],
    capabilities: ["Performance checks against specifications", "Electrical safety testing", "Accuracy verification", "Calibration coordination and documentation", "Certificates and records"],
    processSteps: [
      { title: "Equipment Identification", description: "We identify the equipment, applicable standards, and calibration requirements." },
      { title: "Performance Testing", description: "Equipment is tested against manufacturer specifications and applicable performance standards." },
      { title: "Electrical Safety Testing", description: "Earth continuity, insulation, and leakage current checks are performed." },
      { title: "Accuracy Verification", description: "Measurement accuracy is verified using reference standards or calibrated test equipment." },
      { title: "Certificate & Documentation", description: "A calibration certificate or performance test report is issued for each item tested." },
    ],
    faqs: [
      { question: "Do you issue calibration certificates?", answer: "We issue performance test reports and calibration documentation. For NABL-traceable calibration, we can coordinate with accredited calibration laboratories." },
    ],
    icon: Gauge,
    isFeatured: false,
  },
  {
    slug: "biomedical-consultancy",
    name: "Biomedical Consultancy",
    categorySlug: "biomedical-consultancy",
    categoryName: "Biomedical Consultancy",
    shortDescription: "Equipment evaluation, hospital equipment planning, maintenance strategy, and inventory management support.",
    fullDescription: "Planning a new department, upgrading equipment, or looking to improve your equipment maintenance programme? Our biomedical consultancy service supports hospitals and healthcare facilities with equipment evaluation, procurement advisory, maintenance planning, and equipment inventory management.",
    applications: ["New Hospital Projects", "Department Upgrades", "Equipment Procurement Planning", "Maintenance Programme Development", "Equipment Inventory Management"],
    capabilities: ["Medical equipment evaluation", "Procurement advisory support", "Maintenance programme planning", "Equipment inventory management", "Service management support"],
    processSteps: [
      { title: "Initial Consultation", description: "We understand your facility's requirements, existing equipment, and consultancy objectives." },
      { title: "Assessment & Evaluation", description: "We assess relevant equipment, departments, or maintenance processes as required." },
      { title: "Report & Recommendations", description: "We provide a structured report with clear findings and practical recommendations." },
      { title: "Implementation Support", description: "Where required, we can provide ongoing support during implementation of recommendations." },
    ],
    faqs: [
      { question: "Can you help us plan a new ICU or OT?", answer: "Yes. We can provide equipment planning support for new departments, including equipment specifications, layout considerations, and service requirements." },
    ],
    icon: Stethoscope,
    isFeatured: false,
  },
];

export function getFeaturedDemoServices(): DemoService[] {
  return DEMO_SERVICES.filter((s) => s.isFeatured);
}
export function getDemoServiceBySlug(slug: string): DemoService | undefined {
  return DEMO_SERVICES.find((s) => s.slug === slug);
}

// Equipment categories for ICU/OT pages
export const ICU_EQUIPMENT = [
  { icon: Wind,        name: "Ventilators",               desc: "Invasive and non-invasive ventilation systems maintenance and repair." },
  { icon: Monitor,     name: "Multiparameter Monitors",   desc: "Patient monitoring systems — ECG, SpO₂, NIBP, temperature, EtCO₂." },
  { icon: FlaskConical,name: "Syringe Pumps",             desc: "Precision syringe pump calibration, repair and preventive maintenance." },
  { icon: Truck,       name: "Infusion Pumps",            desc: "IV infusion pump service, calibration and alarm verification." },
  { icon: Heart,       name: "Defibrillators",            desc: "Defibrillator energy output testing, battery checks and servicing." },
  { icon: Zap,         name: "ECG Machines",              desc: "ECG machine calibration, lead testing and performance verification." },
  { icon: Wind,        name: "Suction Machines",          desc: "Suction unit service, vacuum testing and consumable replacement." },
  { icon: Thermometer, name: "CPAP / BiPAP",              desc: "CPAP and BiPAP therapy device maintenance and pressure calibration." },
  { icon: Stethoscope, name: "Oxygen Concentrators",      desc: "Oxygen concentrator service, output testing and filter maintenance." },
  { icon: Thermometer, name: "Patient Warming Equipment", desc: "Warming blanket and fluid warmer maintenance and temperature verification." },
];

export const OT_EQUIPMENT = [
  { icon: Wind,        name: "Anaesthesia Machines",      desc: "Full anaesthesia workstation service, gas delivery and alarm checks." },
  { icon: Settings,    name: "OT Tables",                 desc: "Operating table hydraulic and electrical system maintenance." },
  { icon: Zap,         name: "Electrosurgical Units",     desc: "ESU output testing, patient return electrode monitoring and servicing." },
  { icon: Stethoscope, name: "OT Lights",                 desc: "Surgical light maintenance, alignment and lamp replacement." },
  { icon: Monitor,     name: "Patient Monitors",          desc: "OT-grade multiparameter monitor service and calibration." },
  { icon: Wind,        name: "Surgical Suction",          desc: "Surgical suction unit service, trap maintenance and vacuum testing." },
  { icon: FlaskConical,name: "Medical Gas Equipment",     desc: "Medical gas outlet, flowmeter and regulator testing and maintenance." },
  { icon: Baby,        name: "Warming & Recovery Equip.", desc: "Warming cabinets and post-op recovery equipment service." },
];

export const DEPT_EQUIPMENT: Record<string, { icon: LucideIcon; name: string; desc: string }[]> = {
  emergency: [
    { icon: Heart,       name: "Defibrillators / AEDs",  desc: "Energy output testing, AED readiness checks and battery maintenance." },
    { icon: Zap,         name: "ECG Machines",            desc: "12-lead ECG machine service and calibration." },
    { icon: Monitor,     name: "Patient Monitors",        desc: "Emergency department monitor service and alarm verification." },
    { icon: Wind,        name: "Suction Equipment",       desc: "Emergency suction unit service and vacuum testing." },
  ],
  nicu: [
    { icon: Baby,        name: "Incubators",              desc: "Infant incubator temperature calibration, humidity control and alarm testing." },
    { icon: Thermometer, name: "Radiant Warmers",         desc: "Radiant warmer servo-control calibration and safety checks." },
    { icon: Stethoscope, name: "Phototherapy Units",      desc: "Phototherapy irradiance measurement and lamp condition assessment." },
    { icon: Monitor,     name: "Neonatal Monitors",       desc: "Neonatal multiparameter monitor service and SpO₂ calibration." },
  ],
  diagnostic: [
    { icon: Zap,         name: "ECG Machines",            desc: "ECG machine calibration and performance verification." },
    { icon: Microscope,  name: "Ultrasound Systems",      desc: "Ultrasound transducer testing and image quality assessment." },
    { icon: Gauge,       name: "Laboratory Equipment",    desc: "Centrifuge calibration, analyser performance checks." },
  ],
  cssd: [
    { icon: Wind,        name: "Autoclaves",              desc: "Autoclave validation, cycle testing, safety valve and seal inspection." },
    { icon: Settings,    name: "Sterilizers",             desc: "Low-temperature and dry-heat sterilizer performance verification." },
    { icon: FlaskConical,name: "Washer Disinfectors",     desc: "Washer-disinfector cycle validation and temperature verification." },
  ],
};
