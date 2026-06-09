"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { AdminDisabled } from "@/components/AdminDisabled";
import { createSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!hasSupabaseEnv()) return <AdminDisabled />;

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createSupabaseBrowserClient();
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (loginError) {
      setError(loginError.message);
      return;
    }
    router.push("/admin/products");
  }

  return (
    <section className="container-pad grid min-h-[70vh] place-items-center py-10">
      <form onSubmit={login} className="w-full max-w-md rounded-sm border border-neutral-200 bg-white p-6 shadow-sm">
        <Lock className="h-8 w-8 text-oil-red" />
        <h1 className="mt-4 text-3xl font-black text-oil-black">INFINITY AUTO PARTS admin login</h1>
        <label className="mt-6 block text-sm font-bold">
          Email
          <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
        </label>
        <label className="mt-4 block text-sm font-bold">
          Password
          <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-sm border border-neutral-300 px-3 py-3" />
        </label>
        <button disabled={loading} className="focus-ring mt-6 h-12 w-full rounded-sm bg-oil-red px-5 text-sm font-black text-white disabled:opacity-60">
          {loading ? "Signing in" : "Sign in"}
        </button>
        {error ? <p className="mt-4 rounded-sm bg-red-50 p-3 text-sm font-semibold text-oil-red">{error}</p> : null}
      </form>
    </section>
  );
}
