import { AdminProductEditor } from "@/components/AdminProductEditor";

export default function EditProductPage({ params }: { params: { id: string } }) {
  return <AdminProductEditor productId={params.id} />;
}
