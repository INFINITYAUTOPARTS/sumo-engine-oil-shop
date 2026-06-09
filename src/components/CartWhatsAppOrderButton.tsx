"use client";

import { MessageCircle } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { buildQuoteRequestMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartWhatsAppOrderButton() {
  const { items } = useCart();
  const message = buildQuoteRequestMessage(items);

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="focus-ring inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-green-600 px-5 text-sm font-black text-white hover:bg-green-700"
    >
      <MessageCircle className="h-5 w-5" />
      Request Quote via WhatsApp
    </a>
  );
}
