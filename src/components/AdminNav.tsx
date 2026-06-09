"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export function AdminNav() {
  const router = useRouter();

  async function signOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="container-pad flex flex-wrap items-center justify-between gap-3 py-4">
        <div className="flex gap-4 text-sm font-bold">
          <Link href="/admin/products" className="text-oil-red">
            Products
          </Link>
          <Link href="/admin/orders" className="text-neutral-700 hover:text-oil-red">
            Orders
          </Link>
        </div>
        <button onClick={signOut} className="focus-ring inline-flex h-10 items-center gap-2 rounded-sm border border-neutral-200 px-3 text-sm font-bold">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  );
}
