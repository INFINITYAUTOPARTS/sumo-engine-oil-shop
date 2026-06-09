"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppOrderButton({ message }: { message: string }) {
  return (
    <a
      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-green-600 px-5 text-sm font-black text-white hover:bg-green-700"
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-5 w-5" />
      Send WhatsApp order
    </a>
  );
}
