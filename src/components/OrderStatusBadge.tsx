export function OrderStatusBadge({ status }: { status: string }) {
  const color =
    status === "cancelled"
      ? "bg-neutral-800 text-white"
      : status === "delivered"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-oil-red";

  return <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-black uppercase ${color}`}>{status}</span>;
}
