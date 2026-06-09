"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import { slugify } from "@/lib/utils";

type Draft = Omit<Product, "id"> & { id?: string };

const emptyProduct: Draft = {
  name: "",
  slug: "",
  short_description: "",
  description: "",
  viscosity: "",
  category: "Fully Synthetic",
  volume: "4L",
  price: null,
  stock: 0,
  image_url: "",
  is_active: true,
  featured: false
};

export function ProductForm({
  selected,
  onSave,
  onCancel,
  onImageUpload
}: {
  selected: Product | null;
  onSave: (draft: Draft) => Promise<void>;
  onCancel: () => void;
  onImageUpload?: (file: File) => Promise<string>;
}) {
  const [draft, setDraft] = useState<Draft>(emptyProduct);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setDraft(selected || emptyProduct);
  }, [selected]);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  return (
    <form
      className="grid gap-4 rounded-sm border border-neutral-200 bg-white p-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setSaving(true);
        await onSave({ ...draft, slug: draft.slug || slugify(draft.name), image_url: draft.image_url || null, price: draft.price === null ? null : Number(draft.price) });
        setSaving(false);
        setDraft(emptyProduct);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold">
          Product name
          <input required value={draft.name} onChange={(event) => update("name", event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Slug
          <input value={draft.slug} onChange={(event) => update("slug", event.target.value)} placeholder="auto-generated if blank" className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Viscosity
          <input required value={draft.viscosity} onChange={(event) => update("viscosity", event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Category
          <input required value={draft.category} onChange={(event) => update("category", event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Volume
          <input required value={draft.volume} onChange={(event) => update("volume", event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Image URL
          <input value={draft.image_url || ""} onChange={(event) => update("image_url", event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Upload product image
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            disabled={!onImageUpload || uploading}
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file || !onImageUpload) return;
              setUploading(true);
              try {
                const imageUrl = await onImageUpload(file);
                update("image_url", imageUrl);
              } finally {
                setUploading(false);
              }
            }}
            className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2"
          />
          <span className="mt-1 block text-xs font-semibold text-neutral-500">
            {uploading ? "Uploading image..." : "PNG, JPG or WebP"}
          </span>
        </label>
        <label className="text-sm font-bold">
          Price MYR
          <input type="number" min="0" step="0.01" value={draft.price ?? ""} placeholder="Leave blank for Contact for price" onChange={(event) => update("price", event.target.value === "" ? null : Number(event.target.value))} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
        <label className="text-sm font-bold">
          Stock
          <input required type="number" min="0" value={draft.stock} onChange={(event) => update("stock", Number(event.target.value))} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-2" />
        </label>
      </div>
      <label className="text-sm font-bold">
        Short description
        <textarea required value={draft.short_description} onChange={(event) => update("short_description", event.target.value)} className="mt-1 min-h-20 w-full rounded-sm border border-neutral-300 px-3 py-2" />
      </label>
      <label className="text-sm font-bold">
        Description
        <textarea required value={draft.description} onChange={(event) => update("description", event.target.value)} className="mt-1 min-h-28 w-full rounded-sm border border-neutral-300 px-3 py-2" />
      </label>
      <div className="flex flex-wrap gap-4 text-sm font-bold">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={draft.is_active} onChange={(event) => update("is_active", event.target.checked)} /> Active
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={draft.featured} onChange={(event) => update("featured", event.target.checked)} /> Featured
        </label>
      </div>
      <div className="flex gap-3">
        <button disabled={saving} className="focus-ring rounded-sm bg-oil-red px-4 py-2 text-sm font-black text-white disabled:opacity-60">
          {saving ? "Saving" : selected ? "Update product" : "Add product"}
        </button>
        <button type="button" onClick={onCancel} className="focus-ring rounded-sm border border-neutral-300 px-4 py-2 text-sm font-bold">
          Cancel
        </button>
      </div>
    </form>
  );
}
