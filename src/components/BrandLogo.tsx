import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Infinity Auto Parts home">
      <span className="relative block h-12 w-24 shrink-0 md:h-14 md:w-28">
        <Image
          src="/brand/infinity-auto-parts-logo.png"
          alt="Infinity Auto Parts"
          fill
          priority
          sizes="(min-width: 768px) 112px, 96px"
          className="object-contain"
        />
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-wide text-oil-black">Infinity Auto Parts</span>
          <span className="block text-xs font-semibold uppercase text-neutral-500">Authorized SUMO Engine Oil Supplier</span>
        </span>
      ) : null}
    </Link>
  );
}
