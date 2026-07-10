import { MessageCircle } from "lucide-react";
import { marketplaceLinks } from "@/lib/marketplace";

type MarketplaceButtonsProps = {
  compact?: boolean;
  vertical?: boolean;
  includeWhatsApp?: boolean;
};

export function MarketplaceButtons({ compact = false, vertical = false, includeWhatsApp = true }: MarketplaceButtonsProps) {
  const baseClass =
    "focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-sm px-3 text-xs font-black transition";
  const layoutClass = vertical ? "grid gap-2" : "flex flex-wrap gap-2";

  return (
    <div className={layoutClass}>
      {includeWhatsApp ? (
        <a
          href={marketplaceLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} bg-green-600 text-white hover:bg-green-700 ${compact ? "min-w-10" : ""}`}
        >
          <MessageCircle className="h-4 w-4" />
          {!compact ? "Order via WhatsApp" : <span className="sr-only">Order via WhatsApp</span>}
        </a>
      ) : null}
      
    </div>
  );
}
