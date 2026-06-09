import { Droplets } from "lucide-react";

export function ProductPlaceholder({ name, viscosity, volume }: { name: string; viscosity: string; volume: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center bg-[radial-gradient(circle_at_top,#3a0d12,#080808_58%)] p-6 text-white">
      <div className="w-full max-w-[220px] rounded-sm border border-oil-gold/50 bg-oil-black p-5 text-center shadow-glow">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-oil-red bg-white text-oil-red">
          <Droplets className="h-7 w-7" />
        </div>
        <p className="mt-4 text-2xl font-black text-oil-gold">SUMO</p>
        <p className="mt-1 text-xs font-bold uppercase text-neutral-300">Engine Oil Malaysia</p>
        <div className="mt-4 flex justify-center gap-2 text-xs font-black uppercase">
          <span className="bg-oil-red px-2 py-1 text-white">{viscosity}</span>
          <span className="bg-oil-gold px-2 py-1 text-oil-black">{volume}</span>
        </div>
        <p className="mt-4 line-clamp-2 text-xs font-semibold text-neutral-200">{name}</p>
      </div>
    </div>
  );
}
