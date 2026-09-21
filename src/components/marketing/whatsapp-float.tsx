"use client";
import { waLink, WA, COMPANY } from "@/lib/config";
import { Phone } from "lucide-react";

/**
 * Mobile-only floating action buttons:
 *  - WhatsApp (green) → opens WhatsApp chat
 *  - Call (blue)      → tel: link, calls directly
 *
 * On desktop these are hidden (the navbar already shows both CTAs).
 */
export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-4 z-60 flex flex-col gap-2.5 sm:hidden" aria-label="Quick contact">
      {/* Call button — directly dials phone */}
      <a
        href={`tel:${COMPANY.phone1Raw}`}
        aria-label={`Call ${COMPANY.phone1}`}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ width: "52px", height: "52px" }}
      >
        <Phone className="h-6 w-6 text-white" strokeWidth={2} />
      </a>

      {/* WhatsApp button */}
      <a
        href={waLink(WA.breakdown)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ width: "52px", height: "52px", background: "#25d366", boxShadow: "0 4px 16px rgba(37,211,102,0.45)" }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2C6.478 2 2 6.478 2 12c0 1.74.455 3.37 1.234 4.792L2.1 21.9l5.19-1.12A9.94 9.94 0 0012 22c5.522 0 10-4.478 10-10S17.522 2 12 2zm0 18a7.96 7.96 0 01-4.062-1.113l-.29-.174-3.082.665.69-3.005-.19-.308A7.954 7.954 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      </a>
    </div>
  );
}
