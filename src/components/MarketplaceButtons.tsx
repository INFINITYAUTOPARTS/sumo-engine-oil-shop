import { MessageCircle, ShoppingBag, Store } from "lucide-react";
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
      <a
        href={marketplaceLinks.shopee}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} border border-orange-500 bg-white text-orange-600 hover:bg-orange-50 ${compact ? "min-w-10" : ""}`}
      >
        <ShoppingBag className="h-4 w-4" />
        {!compact ? "Buy on Shopee" : <span className="sr-only">Buy on Shopee</span>}
      </a>
      <a
        href={marketplaceLinks.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} border border-neutral-800 bg-white text-neutral-900 hover:bg-neutral-100 ${compact ? "min-w-10" : ""}`}
      >
        <Store className="h-4 w-4" />
        {!compact ? "Buy on TikTok Shop" : <span className="sr-only">Buy on TikTok Shop</span>}
      </a>
    </div>
  );
}
