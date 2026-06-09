import type { CartItem } from "@/lib/types";
import type { Product } from "@/lib/types";
import { formatCurrency, formatProductPrice } from "@/lib/utils";

export const SELLER_WHATSAPP_NUMBER = "60169133412";

export type WhatsAppOrderDetails = {
  customerName: string;
  phone: string;
  deliveryAddress: string;
  notes?: string;
  items: CartItem[];
};

export function buildOrderMessage(details: WhatsAppOrderDetails) {
  const pricedItems = details.items.filter((item) => item.product.price !== null);
  const total = pricedItems.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
  const lines = details.items.map((item) => {
    const linePrice = item.product.price === null ? "Contact for price" : formatCurrency(item.product.price * item.quantity);
    return `${item.product.name} x ${item.quantity} (${linePrice})`;
  });

  return buildWhatsAppOrderMessage({
    product: lines.join(", "),
    quantity: String(details.items.reduce((sum, item) => sum + item.quantity, 0)),
    totalPrice: pricedItems.length === details.items.length ? formatCurrency(total) : "Contact for price",
    name: details.customerName,
    phone: details.phone,
    deliveryArea: details.deliveryAddress,
    notes: details.notes || ""
  });
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteRequestMessage(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const productLines = items.length
    ? items.map((item) => `${item.product.name} x ${item.quantity}`).join("\n")
    : "";

  return [
    "Hello, I would like a quotation for:",
    "",
    productLines,
    "",
    `Total Items: ${totalItems}`,
    "",
    "Name:",
    "Phone:",
    "Delivery Location:",
    "",
    "Please contact me."
  ].join("\n");
}

export type WhatsAppOrderMessageInput = {
  product?: string;
  quantity?: string;
  totalPrice?: string;
  name?: string;
  phone?: string;
  deliveryArea?: string;
  notes?: string;
};

export function buildWhatsAppOrderMessage(input: WhatsAppOrderMessageInput = {}) {
  return [
    "Hi, I want to order SUMO Engine Oil.",
    "",
    `Product: ${input.product || ""}`,
    `Quantity: ${input.quantity || ""}`,
    `Total Price: ${input.totalPrice || ""}`,
    `Name: ${input.name || ""}`,
    `Phone: ${input.phone || ""}`,
    `Delivery Area: ${input.deliveryArea || ""}`,
    `Notes: ${input.notes || ""}`
  ].join("\n");
}

export function buildProductOrderMessage(product: Product, quantity = 1) {
  const totalPrice = product.price === null ? "Contact for price" : formatCurrency(product.price * quantity);

  return buildWhatsAppOrderMessage({
    product: product.name,
    quantity: String(quantity),
    totalPrice
  });
}

export function summarizeCartForWhatsApp(items: CartItem[]) {
  return items.map((item) => `${item.product.name} x ${item.quantity}`).join(", ");
}

export function getCartTotalForWhatsApp(items: CartItem[]) {
  if (items.length === 0) return "";
  if (items.some((item) => item.product.price === null)) return "Contact for price";

  const total = items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
  return formatProductPrice(total);
}
