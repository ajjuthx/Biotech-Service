/**
 * URVI'S BIOMEDICAL SERVICES — Equipment & Service Data
 * Serving Pune & Chhatrapati Sambhajinagar
 */
import {
  Wrench, FileCheck2, ShieldCheck, Settings, Gauge,
  Stethoscope, Monitor, Heart, Wind, Zap, Thermometer,
  FlaskConical, Baby, Microscope, Activity,
  type LucideIcon,
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

const PROCESS_DEFAULT = [
  { title: "Request Service",          description: "WhatsApp or call us — describe the equipment and the fault or requirement." },
  { title: "Rapid Response",           description: "Our biomedical engineer is dispatched to your facility." },
  { title: "Diagnosis & Service",      description: "Systematic fault diagnosis, repair or PM carried out as required." },
  { title: "Performance Verification", description: "Equipment tested and verified before being returned to clinical use." },
  { title: "Service Report",           description: "Written service report provided and countersigned by your facility." },
];

export const DEMO_SERVICES: DemoService[] = [
  {
    slug: "breakdown-repair",
    name: "Breakdown & Repair Services",
    categorySlug: "breakdown-repair",
    categoryName: "Breakdown & Repair",
    shortDescription: "Emergency breakdown support, fault diagnosis, repair and performance verification for all medical equipment in Pune and Chhatrapati Sambhajinagar.",
    fullDescription: "When medical equipment fails, it directly impacts patient care. Our breakdown and repair service provides prompt technical support to restore your equipment to operation as quickly as possible — across ICU, OT, NICU, PICU, Emergency and Diagnostic departments.",
    applications: ["ICU", "Operating Theatre", "NICU", "PICU", "Emergency Department", "Diagnostic Centres", "General Wards"],
    capabilities: ["Emergency breakdown response", "Systematic fault diagnosis", "Component repair and replacement", "Performance and safety verification", "Written service report"],
    processSteps: PROCESS_DEFAULT,
    faqs: [
      { question: "How quickly can you respond to a breakdown?", answer: "We aim to respond as quickly as possible. For urgent ICU or OT breakdowns please call or WhatsApp directly so we can prioritise your request. We serve Pune and Chhatrapati Sambhajinagar." },
      { question: "Do you carry spare parts?", answer: "We carry common spare parts and consumables for frequently serviced equipment. Specialised parts are sourced as quickly as possible." },
    ],
    icon: Wrench,
    isFeatured: true,
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    categorySlug: "preventive-maintenance",
    categoryName: "Preventive Maintenance",
    shortDescription: "Scheduled inspection, functional testing, safety checks and performance assessment to prevent equipment failures before they occur.",
    fullDescription: "Regular preventive maintenance reduces unexpected equipment breakdowns, extends equipment lifespan, and ensures equipment performs to specification. Our PM programme covers all ICU, OT, NICU, PICU, Emergency and Diagnostic equipment.",
    applications: ["ICU", "Operating Theatre", "NICU", "PICU", "Emergency", "CSSD", "Diagnostic"],
    capabilities: ["Scheduled inspection and cleaning", "Functional and performance testing", "Electrical safety checks", "Filter and consumable replacement", "Written PM report"],
    processSteps: PROCESS_DEFAULT,
    faqs: [
      { question: "How often should PM be carried out?", answer: "Critical ICU and OT equipment typically requires more frequent PM. We advise on recommended intervals for your specific equipment." },
      { question: "Do you provide PM reports?", answer: "Yes — a written PM report is provided after every visit detailing checks performed, findings, and equipment status." },
    ],
    icon: ShieldCheck,
    isFeatured: true,
  },
  {
    slug: "installation-commissioning",
    name: "Installation & Commissioning",
    categorySlug: "installation-commissioning",
    categoryName: "Installation & Commissioning",
    shortDescription: "Professional medical equipment installation, site readiness assessment, commissioning, functional testing and user assistance.",
    fullDescription: "Correct installation and commissioning of medical equipment is essential for safe clinical use. We carry out professional installation for hospitals and healthcare facilities across Pune and Chhatrapati Sambhajinagar.",
    applications: ["New Hospital Departments", "ICU Setup", "OT Equipment", "NICU Setup", "Ward Equipment", "Diagnostic Equipment"],
    capabilities: ["Site readiness assessment", "Equipment installation and setup", "Commissioning and functional testing", "Integration with existing systems", "User assistance and handover"],
    processSteps: PROCESS_DEFAULT,
    faqs: [
      { question: "Do you coordinate with equipment suppliers?", answer: "Yes, we coordinate with suppliers and your engineering team throughout the installation process." },
    ],
    icon: Settings,
    isFeatured: false,
  },
  {
    slug: "calibration-testing",
    name: "Calibration & Testing",
    categorySlug: "calibration-testing",
    categoryName: "Calibration & Testing",
    shortDescription: "Equipment performance checks, electrical safety testing, accuracy verification and calibration documentation.",
    fullDescription: "Accurate, well-calibrated medical equipment is critical for patient safety. We carry out performance checks, electrical safety testing, and accuracy verification for all equipment types across Pune and Chhatrapati Sambhajinagar.",
    applications: ["Patient Monitors", "Infusion & Syringe Pumps", "Defibrillators", "ECG & Diagnostic Equipment", "Weighing Scales"],
    capabilities: ["Performance checks against specifications", "Electrical safety testing", "Accuracy verification", "Calibration documentation", "Test certificates and records"],
    processSteps: PROCESS_DEFAULT,
    faqs: [
      { question: "Do you issue calibration certificates?", answer: "We issue performance test reports and service documentation. For NABL-traceable calibration we can coordinate with accredited laboratories." },
    ],
    icon: Gauge,
    isFeatured: false,
  },
  {
    slug: "biomedical-consultancy",
    name: "Biomedical Consultancy",
    categorySlug: "biomedical-consultancy",
    categoryName: "Biomedical Consultancy",
    shortDescription: "Equipment evaluation, hospital equipment planning, maintenance strategy and inventory management support.",
    fullDescription: "Planning a new department or improving your equipment maintenance programme? Our biomedical consultancy supports hospitals and healthcare facilities in Pune and Chhatrapati Sambhajinagar with equipment evaluation, procurement advisory and maintenance planning.",
    applications: ["New Hospital Projects", "Department Upgrades", "Equipment Procurement", "Maintenance Programme Development", "Equipment Inventory Management"],
    capabilities: ["Medical equipment evaluation", "Procurement advisory", "Maintenance programme planning", "Equipment inventory management", "Service management support"],
    processSteps: PROCESS_DEFAULT,
    faqs: [
      { question: "Can you help us plan a new ICU or OT?", answer: "Yes — we provide equipment planning support for new departments including specifications, layout considerations and service requirements." },
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

// ─────────────────────────────────────────────────────────────────────────────
// EQUIPMENT LISTS  — exact machine names as specified
// ─────────────────────────────────────────────────────────────────────────────

export interface EquipmentItem {
  icon: LucideIcon;
  name: string;
  desc: string;
}

export const ICU_EQUIPMENT: EquipmentItem[] = [
  { icon: Wind,        name: "Ventilator",      desc: "Invasive and non-invasive ventilator service, calibration and breakdown repair." },
  { icon: Monitor,     name: "Monitor",         desc: "Multiparameter patient monitor — ECG, SpO₂, NIBP, temperature, EtCO₂ servicing." },
  { icon: Heart,       name: "Defibrillator",   desc: "Defibrillator energy output testing, battery checks and preventive maintenance." },
  { icon: FlaskConical,name: "Syringe Pump",    desc: "Precision syringe pump calibration, alarm verification and repair." },
  { icon: Activity,    name: "Infusion Pump",   desc: "IV infusion pump service, flow accuracy calibration and alarm testing." },
  { icon: Microscope,  name: "ABG",             desc: "Arterial Blood Gas analyser maintenance, calibration and consumable support." },
  { icon: Wind,        name: "HFNC",            desc: "High Flow Nasal Cannula therapy device service and flow/temperature calibration." },
];

export const NICU_EQUIPMENT: EquipmentItem[] = [
  { icon: Baby,        name: "Incubator",           desc: "Infant incubator temperature calibration, humidity control and alarm testing." },
  { icon: Thermometer, name: "Radiant Warmer",      desc: "Radiant warmer servo-control calibration and electrical safety checks." },
  { icon: Wind,        name: "Neonatal Ventilator", desc: "Neonatal ventilator service — volume, pressure and flow calibration." },
  { icon: Wind,        name: "CPAP",                desc: "Neonatal CPAP device service and pressure calibration." },
  { icon: Zap,         name: "Phototherapy",        desc: "Phototherapy unit irradiance measurement and lamp condition assessment." },
  { icon: Monitor,     name: "Neonatal Monitor",    desc: "Neonatal multiparameter monitor service and SpO₂ probe calibration." },
];

export const OT_EQUIPMENT: EquipmentItem[] = [
  { icon: Wind,        name: "Anaesthesia Machine", desc: "Full anaesthesia workstation service — gas delivery, vaporiser and alarm checks." },
  { icon: Settings,    name: "OT Table",            desc: "Operating table hydraulic, electrical and positioning system maintenance." },
  { icon: Zap,         name: "OT Light",            desc: "Surgical light maintenance, alignment, intensity and lamp replacement." },
  { icon: Zap,         name: "Cautery",             desc: "Electrosurgical unit (cautery) output testing and patient return electrode check." },
  { icon: Monitor,     name: "Monitor",             desc: "OT-grade multiparameter patient monitor service and calibration." },
  { icon: Wind,        name: "Surgical Suction",    desc: "Surgical suction unit service, vacuum testing and trap maintenance." },
  { icon: Gauge,       name: "C-Arm",               desc: "C-Arm fluoroscopy unit service, image quality checks and safety testing." },
];

export const PICU_EQUIPMENT: EquipmentItem[] = [
  { icon: Wind,        name: "Pediatric Ventilator",      desc: "Paediatric ventilator service — volume, pressure and flow calibration." },
  { icon: Monitor,     name: "Monitor",                   desc: "Paediatric multiparameter monitor service and alarm verification." },
  { icon: Activity,    name: "Infusion / Syringe Pumps",  desc: "Paediatric infusion and syringe pump calibration and repair." },
  { icon: Heart,       name: "Defibrillator",             desc: "Paediatric defibrillator energy output testing and battery maintenance." },
  { icon: Wind,        name: "HFNC",                      desc: "High Flow Nasal Cannula therapy device service and calibration." },
  { icon: Wind,        name: "CPAP",                      desc: "CPAP device service and pressure calibration for paediatric use." },
];

export const CSSD_EQUIPMENT: EquipmentItem[] = [
  { icon: Wind,        name: "Autoclave",           desc: "Autoclave validation, cycle testing, safety valve and door seal inspection." },
  { icon: FlaskConical,name: "Washer Disinfector",  desc: "Washer-disinfector cycle validation, temperature verification and service." },
  { icon: Zap,         name: "Ultrasonic Cleaner",  desc: "Ultrasonic cleaner performance testing and transducer inspection." },
  { icon: Wind,        name: "Plasma Sterilizer",   desc: "Low-temperature plasma sterilizer validation and cycle monitoring." },
  { icon: Settings,    name: "Sealing Machine",     desc: "Pouch sealing machine calibration, seal integrity and temperature checks." },
];

export const EMERGENCY_EQUIPMENT: EquipmentItem[] = [
  { icon: Monitor,     name: "Patient Monitor",  desc: "Emergency department multiparameter monitor service and alarm verification." },
  { icon: Wind,        name: "Ventilator",       desc: "Emergency ventilator service, calibration and breakdown repair." },
  { icon: Heart,       name: "Defibrillator",    desc: "Defibrillator energy output testing, AED readiness and battery maintenance." },
  { icon: FlaskConical,name: "Syringe Pump",     desc: "Emergency syringe pump calibration and alarm testing." },
  { icon: Microscope,  name: "ABG",              desc: "Arterial Blood Gas analyser maintenance and calibration." },
  { icon: Wind,        name: "HFNC",             desc: "High Flow Nasal Cannula therapy device service and calibration." },
];

export const DIAGNOSTIC_EQUIPMENT: EquipmentItem[] = [
  { icon: Activity,    name: "ECG",     desc: "12-lead ECG machine calibration, lead testing and performance verification." },
  { icon: Activity,    name: "TMT",     desc: "Treadmill stress test (TMT) system service — treadmill, ECG and software checks." },
  { icon: Heart,       name: "Holter",  desc: "Holter monitor service, recorder calibration and software validation." },
  { icon: Stethoscope, name: "Echo",    desc: "Echocardiography machine service, transducer testing and image quality checks." },
  { icon: Activity,    name: "ABPM",    desc: "Ambulatory Blood Pressure Monitor calibration and accuracy verification." },
];

// Department tabs for ICU / Equipment pages
export const DEPT_TABS = [
  { key: "icu",        label: "ICU",         equipment: ICU_EQUIPMENT        },
  { key: "nicu",       label: "NICU",        equipment: NICU_EQUIPMENT       },
  { key: "ot",         label: "OT",          equipment: OT_EQUIPMENT         },
  { key: "picu",       label: "PICU",        equipment: PICU_EQUIPMENT       },
  { key: "cssd",       label: "CSSD",        equipment: CSSD_EQUIPMENT       },
  { key: "emergency",  label: "Emergency",   equipment: EMERGENCY_EQUIPMENT  },
  { key: "diagnostic", label: "Diagnostic",  equipment: DIAGNOSTIC_EQUIPMENT },
];
