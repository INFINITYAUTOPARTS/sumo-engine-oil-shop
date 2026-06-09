"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminDisabled } from "@/components/AdminDisabled";
import { AdminNav } from "@/components/AdminNav";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import { createSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase";
import type { Order, OrderItem } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

type OrderWithItems = Order & { order_items: OrderItem[] };
const statuses = ["new", "confirmed", "packed", "delivered", "cancelled"] as const;

export default function AdminOrdersPage() {
  if (!hasSupabaseEnv()) {
    return (
      <section className="container-pad grid min-h-[60vh] place-items-center py-10">
        <div className="max-w-xl rounded-sm border border-neutral-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-black uppercase text-oil-red">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-oil-black">Admin orders disabled for now</h1>
        </div>
      </section>
    );
  }

  return <EnabledAdminOrdersPage />;
}

function EnabledAdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseBrowserClient();

  async function loadOrders() {
    const { data, error } = await supabase.from("orders").select("*, order_items(*)").order("created_at", { ascending: false });
    if (!error) setOrders(data as OrderWithItems[]);
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push("/admin/login");
      else loadOrders().finally(() => setLoading(false));
    });
  }, []);

  async function updateStatus(id: string, status: string) {
    await supabase.from("orders").update({ status }).eq("id", id);
    await loadOrders();
  }

  return (
    <>
      <AdminNav />
      <section className="container-pad py-8">
        <div className="mb-6">
          <p className="text-sm font-black uppercase text-oil-red">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-oil-black">Order management</h1>
        </div>
        <div className="grid gap-4">
          {loading ? (
            <p>Loading orders...</p>
          ) : (
            orders.map((order) => (
              <article key={order.id} className="rounded-sm border border-neutral-200 bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-black">{order.customer_name}</h2>
                      <OrderStatusBadge status={order.status} />
                    </div>
                    <p className="mt-1 text-sm text-neutral-600">{order.phone}</p>
                    <p className="mt-1 text-sm text-neutral-600">{order.delivery_address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase text-neutral-500">Total</p>
                    <p className="text-xl font-black text-oil-red">
                      {order.order_items.some((item) => item.line_total === null) ? "Contact for price" : formatCurrency(order.total_amount)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                  {order.order_items.map((item) => (
                    <div key={item.id} className="flex justify-between gap-4 py-2 text-sm">
                      <span>
                        {item.product_name} x {item.quantity}
                      </span>
                      <span className="font-bold">{item.line_total === null ? "Contact for price" : formatCurrency(item.line_total)}</span>
                    </div>
                  ))}
                </div>
                {order.notes ? <p className="mt-3 text-sm text-neutral-600">Notes: {order.notes}</p> : null}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <select value={order.status} onChange={(event) => updateStatus(order.id, event.target.value)} className="rounded-sm border border-neutral-300 px-3 py-2 text-sm font-bold">
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(order.whatsapp_message)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm bg-green-600 px-4 py-2 text-sm font-black text-white"
                  >
                    Open WhatsApp message
                  </a>
                </div>
              </article>
            ))
          )}
          {!loading && orders.length === 0 ? (
            <div className="rounded-sm border border-dashed border-neutral-300 p-6 text-center text-neutral-600">No orders yet.</div>
          ) : null}
        </div>
      </section>
    </>
  );
}
