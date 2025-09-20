import React from "react";
import Intro from "@/components/visitors/contact/Intro";
import ContactForm from "@/components/visitors/contact/ContactForm";

export default function Contact() {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col sm:flex-row justify-center pt-24 sm:pt-32 gap-10">
      <Intro />

      <ContactForm />
    </div>
  );
}
