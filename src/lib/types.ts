export type Product = {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  viscosity: string;
  category: string;
  volume: string;
  price: number | null;
  stock: number;
  image_url: string | null;
  is_active: boolean;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  customer_name: string;
  phone: string;
  delivery_address: string;
  notes: string | null;
  status: "new" | "confirmed" | "packed" | "delivered" | "cancelled";
  total_amount: number;
  whatsapp_message: string;
  created_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string | null;
  product_name: string;
  quantity: number;
  unit_price: number | null;
  line_total: number | null;
};
