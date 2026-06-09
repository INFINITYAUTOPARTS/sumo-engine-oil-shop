import { createSupabaseServerClient, hasSupabaseEnv } from "@/lib/supabase";
import type { Product } from "@/lib/types";

const officialProductImages: Record<string, string> = {
  "sumo-5w30-r4-semi-synthetic-engine-oil": "/product-images/sumo-r4.png",
  "sumo-10w40-r3-semi-synthetic-engine-oil": "/product-images/sumo-r3.png",
  "sumo-5w40-r1-fully-synthetic-engine-oil": "/product-images/sumo-r1.png",
  "sumo-10w40-m2-ultra-performance-engine-oil": "/product-images/sumo-m2.png",
  "sumo-20w50-m3-m-power-engine-oil": "/product-images/sumo-m3.png",
  "sumo-4x4-15w50-diesel-engine-oil": "/product-images/sumo-4x4.jpg"
};

function withOfficialProductImages(products: Product[]) {
  return products.map((product) => ({
    ...product,
    image_url: officialProductImages[product.slug] || product.image_url
  }));
}

export const fallbackProducts: Product[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    name: "SUMO 5W30 R4 Semi Synthetic Engine Oil",
    slug: "sumo-5w30-r4-semi-synthetic-engine-oil",
    short_description: "Suitable for daily passenger cars with good fuel economy and engine protection.",
    description: "SUMO 5W30 R4 Semi Synthetic Engine Oil is suitable for daily passenger cars. It is formulated for good fuel economy, smooth daily driving, and dependable engine protection.",
    viscosity: "5W-30",
    category: "Semi Synthetic",
    volume: "4L",
    price: 139,
    stock: 24,
    image_url: "/product-images/sumo-r4.png",
    is_active: true,
    featured: true
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    name: "SUMO 10W40 R3 Semi Synthetic Engine Oil",
    slug: "sumo-10w40-r3-semi-synthetic-engine-oil",
    short_description: "Suitable for daily driving and high mileage vehicles.",
    description: "SUMO 10W40 R3 Semi Synthetic Engine Oil is suitable for daily driving and high mileage vehicles that need reliable protection for regular service intervals.",
    viscosity: "10W-40",
    category: "Semi Synthetic",
    volume: "4L",
    price: 139,
    stock: 18,
    image_url: "/product-images/sumo-r3.png",
    is_active: true,
    featured: true
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    name: "SUMO 5W40 R1 Fully Synthetic Engine Oil",
    slug: "sumo-5w40-r1-fully-synthetic-engine-oil",
    short_description: "Premium engine protection for modern petrol engines.",
    description: "SUMO 5W40 R1 Fully Synthetic Engine Oil delivers premium engine protection and is suitable for modern petrol engines used in Malaysian driving conditions.",
    viscosity: "5W-40",
    category: "Fully Synthetic",
    volume: "4L",
    price: 198,
    stock: 36,
    image_url: "/product-images/sumo-r1.png",
    is_active: true,
    featured: true
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    name: "SUMO 10W40 M2 Ultra Performance Engine Oil",
    slug: "sumo-10w40-m2-ultra-performance-engine-oil",
    short_description: "Suitable for workshop and fleet customers.",
    description: "SUMO 10W40 M2 Ultra Performance Engine Oil is designed for workshop and fleet customers who need practical, reliable engine oil supply.",
    viscosity: "10W-40",
    category: "Performance Series",
    volume: "4L",
    price: 110,
    stock: 36,
    image_url: "/product-images/sumo-m2.png",
    is_active: true,
    featured: false
  },
  {
    id: "55555555-5555-4555-8555-555555555555",
    name: "SUMO 20W50 M3 M-Power Engine Oil",
    slug: "sumo-20w50-m3-m-power-engine-oil",
    short_description: "Suitable for older and high mileage engines.",
    description: "SUMO 20W50 M3 M-Power Engine Oil is suitable for older and high mileage engines that need thicker oil support and dependable protection.",
    viscosity: "20W-50",
    category: "M-Power Series",
    volume: "4L",
    price: 108,
    stock: 30,
    image_url: "/product-images/sumo-m3.png",
    is_active: true,
    featured: false
  },
  {
    id: "66666666-6666-4666-8666-666666666666",
    name: "SUMO 4X4 15W50 Diesel Engine Oil",
    slug: "sumo-4x4-15w50-diesel-engine-oil",
    short_description: "Suitable for pickup trucks, 4x4 and diesel vehicles.",
    description: "SUMO 4X4 15W50 Diesel Engine Oil is suitable for pickup trucks, 4x4 vehicles, and diesel engine applications.",
    viscosity: "15W-50",
    category: "Diesel Engine Oil",
    volume: "6L",
    price: 190,
    stock: 20,
    image_url: "/product-images/sumo-4x4.jpg",
    is_active: true,
    featured: false
  }
];

export async function getProducts() {
  if (!hasSupabaseEnv()) return withOfficialProductImages(fallbackProducts);

  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("featured", { ascending: false })
      .order("name");

    if (error || !data) return withOfficialProductImages(fallbackProducts);
    return withOfficialProductImages(data as Product[]);
  } catch {
    return withOfficialProductImages(fallbackProducts);
  }
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.filter((product) => product.featured).slice(0, 3);
}

export async function getProductBySlug(slug: string) {
  if (!hasSupabaseEnv()) {
    return withOfficialProductImages(fallbackProducts).find((product) => product.slug === slug) || null;
  }

  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error || !data) return withOfficialProductImages(fallbackProducts).find((product) => product.slug === slug) || null;
    return withOfficialProductImages([data as Product])[0];
  } catch {
    return withOfficialProductImages(fallbackProducts).find((product) => product.slug === slug) || null;
  }
}
