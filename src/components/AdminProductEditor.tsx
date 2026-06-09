"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminDisabled } from "@/components/AdminDisabled";
import { AdminNav } from "@/components/AdminNav";
import { ProductForm } from "@/components/ProductForm";
import { createSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase";
import type { Product } from "@/lib/types";
import { slugify } from "@/lib/utils";

type ProductDraft = Omit<Product, "id"> & { id?: string };

export function AdminProductEditor({ productId }: { productId?: string }) {
  if (!hasSupabaseEnv()) return <AdminDisabled />;

  return <EnabledAdminProductEditor productId={productId} />;
}

function EnabledAdminProductEditor({ productId }: { productId?: string }) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(Boolean(productId));
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function boot() {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        router.push("/admin/login");
        return;
      }

      const { data: adminUser } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", userData.user.id)
        .maybeSingle();

      if (!adminUser) {
        router.push("/admin/login");
        return;
      }

      setAuthorized(true);

      if (productId) {
        const { data, error } = await supabase.from("products").select("*").eq("id", productId).single();
        if (error || !data) {
          router.push("/admin/products");
          return;
        }
        setProduct(data as Product);
      }

      setLoading(false);
    }

    boot();
  }, [productId, router, supabase]);

  async function uploadProductImage(file: File) {
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const baseName = product?.slug || slugify(file.name.replace(/\.[^.]+$/, "")) || "product";
    const filePath = `${baseName}-${crypto.randomUUID()}.${extension}`;
    const { error } = await supabase.storage.from("product-images").upload(filePath, file, {
      cacheControl: "31536000",
      upsert: false
    });

    if (error) {
      window.alert(error.message);
      throw error;
    }

    const { data } = supabase.storage.from("product-images").getPublicUrl(filePath);
    return data.publicUrl;
  }

  async function saveProduct(draft: ProductDraft) {
    const { id, created_at, updated_at, ...payload } = draft;

    if (productId || id) {
      await supabase.from("products").update(payload).eq("id", productId || id);
    } else {
      await supabase.from("products").insert(payload);
    }

    router.push("/admin/products");
    router.refresh();
  }

  if (loading || !authorized) {
    return (
      <>
        <AdminNav />
        <section className="container-pad py-8">
          <p className="text-neutral-600">Loading product editor...</p>
        </section>
      </>
    );
  }

  return (
    <>
      <AdminNav />
      <section className="container-pad py-8">
        <div className="mb-6">
          <p className="text-sm font-black uppercase text-oil-red">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-oil-black">{productId ? "Edit product" : "Add product"}</h1>
        </div>
        <ProductForm selected={product} onSave={saveProduct} onCancel={() => router.push("/admin/products")} onImageUpload={uploadProductImage} />
      </section>
    </>
  );
}
