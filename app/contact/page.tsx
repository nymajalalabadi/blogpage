import ContactForm from "@/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me. I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.",
  keywords: ["contact", "get in touch", "message", "email"],
  openGraph: {
    title: "Contact Me | My Blog",
    description: "Get in touch with me. I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.",
    type: "website",
  },
  twitter: {
    title: "Contact Me | My Blog",
    description: "Get in touch with me. I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.",
  },
};

export default function Contact() {
  return (
      <ContactForm />
  );
}