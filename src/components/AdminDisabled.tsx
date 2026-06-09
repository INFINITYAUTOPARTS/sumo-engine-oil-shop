export function AdminDisabled() {
  return (
    <section className="container-pad grid min-h-[60vh] place-items-center py-10">
      <div className="max-w-xl rounded-sm border border-neutral-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-black uppercase text-oil-red">Admin</p>
        <h1 className="mt-2 text-3xl font-black text-oil-black">Admin disabled for now</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          Supabase is not configured for this deployment yet. The public website still works with fallback product data.
        </p>
      </div>
    </section>
  );
}
