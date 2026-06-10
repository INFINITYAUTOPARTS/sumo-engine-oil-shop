export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function formatProductPrice(value: number | null) {
  return value === null ? "Contact for price" : formatCurrency(value);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.infinityautoparts.my";
}
