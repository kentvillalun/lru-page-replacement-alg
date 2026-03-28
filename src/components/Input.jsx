import { RevealOnScroll } from "./RevealOnScroll";
import { Card } from "./ui/card";

export const Input = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 md:max-w-5xl">
      <Card color="yellow" className="flex flex-col gap-5">
        {/* Section label */}
        <div className="flex w-full flex-col items-start justify-center gap-2 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
            Reference String Input
          </p>
          <div className="h-0.5 w-full bg-amber-500/40 md:flex-1" />
        </div>

        {/* Input + Button */}
        <div className="flex flex-row gap-3 sm:gap-4">
          <input
            type="text"
            className="flex-1 rounded-lg border border-transparent bg-[#30302e] px-3 py-2 font-mono text-sm text-white outline-none placeholder-zinc-600 transition-all duration-300 ease-in-out focus:border-amber-400/30"
            placeholder="e.g. 70120304 or ABACBD"
          />
          <button className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2 font-mono text-sm text-amber-400 transition-all duration-200 hover:border-amber-400/50 hover:bg-amber-400/20 active:scale-95 hover:cursor-pointer">
            Run LRU
          </button>
        </div>

        {/* Hint */}
        <p className="font-mono text-xs text-zinc-500">3 frames will be used</p>
      </Card>
    </section>
  );
};
