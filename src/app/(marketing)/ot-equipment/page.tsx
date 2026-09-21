import { redirect } from "next/navigation";
// OT, NICU, PICU etc. all live in the unified equipment page with tabs
export default function OTPage() {
  redirect("/icu-equipment#ot");
}
