"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { AdminDisabled } from "@/components/AdminDisabled";
import { AdminNav } from "@/components/AdminNav";
import { createSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase";
import type { Product } from "@/lib/types";
import { formatProductPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  if (!hasSupabaseEnv()) return <AdminDisabled />;

  return <EnabledAdminProductsPage />;
}

function EnabledAdminProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseBrowserClient();

  async function loadProducts() {
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (!error) setProducts(data as Product[]);
  }

  useEffect(() => {
    async function boot() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/admin/login");
        return;
      }

      const { data: adminUser } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (!adminUser) {
        router.push("/admin/login");
        return;
      }

      await loadProducts();
      setLoading(false);
    }

    boot();
  }, []);

  async function deleteProduct(id: string) {
    if (!window.confirm("Delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    await loadProducts();
  }

  return (
    <>
      <AdminNav />
      <section className="container-pad py-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-oil-red">Admin</p>
            <h1 className="mt-2 text-3xl font-black text-oil-black">Product management</h1>
          </div>
          <Link
            href="/admin/products/new"
            className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-oil-red px-4 text-sm font-black text-white hover:bg-red-700"
          >
            <Plus className="h-4 w-4" />
            Add product
          </Link>
        </div>
        <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-neutral-100 text-xs uppercase text-neutral-600">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Active</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {loading ? (
                <tr>
                  <td className="p-4" colSpan={6}>Loading products...</td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="p-3 font-bold">{product.name}</td>
                    <td className="p-3">{product.category}</td>
                    <td className="p-3">{formatProductPrice(product.price)}</td>
                    <td className="p-3">{product.stock}</td>
                    <td className="p-3">{product.is_active ? "Yes" : "No"}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Link href={`/admin/products/${product.id}/edit`} className="grid h-9 w-9 place-items-center rounded-sm border border-neutral-200" aria-label="Edit">
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button onClick={() => deleteProduct(product.id)} className="grid h-9 w-9 place-items-center rounded-sm border border-neutral-200 text-oil-red" aria-label="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
