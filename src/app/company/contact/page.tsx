"use client";

import { Contact2 } from "@/components/ui/contact-2";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Contact2 
        title="Contact Us"
        description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
        phone="(+91) 999999999"  
        email="contact@livnsense.com"
        web={{ label: "livnsense.com", url: "https://livnsense.com" }}
      />
    </main>
  );
}
 