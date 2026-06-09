"use client";

import { MessageCircle } from "lucide-react";
import { buildQuoteRequestMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(buildQuoteRequestMessage([]))}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-glow transition hover:bg-green-700"
      aria-label="Order through WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
