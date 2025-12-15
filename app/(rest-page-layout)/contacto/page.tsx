"use client";

import ContactInfoSection from "@/components/sections/contact-info";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/sections/contact-map"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "600px", width: "100%", background: "#f0f0f0" }} />
  ),
});

export default function Contact() {
  return (
    <main className="bg-white">
      <h1 className="sr-only">Información de contacto</h1>
      <ContactMap />
      <ContactInfoSection />
    </main>
  );
}
