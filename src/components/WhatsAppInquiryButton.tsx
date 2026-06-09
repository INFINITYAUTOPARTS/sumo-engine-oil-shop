"use client";

import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/types";
import { buildProductOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppOrderButton({ product }: { product: Product }) {
  const message = buildProductOrderMessage(product, 1);

  return (
    <a
      className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-green-600 px-4 text-sm font-black text-white hover:bg-green-700"
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp Order
    </a>
  );
}
