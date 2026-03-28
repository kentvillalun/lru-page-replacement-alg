import { RevealOnScroll } from "./RevealOnScroll";
import { Pill } from "./ui/Pill";

export const Header = () => {
  return (
    <header className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 pt-10 text-center sm:gap-7 sm:pt-14">
      <Pill name={"OS ALGORITHM SIMULATION"} />
      <div className="font-display flex flex-col items-center gap-1 text-4xl font-extrabold leading-none text-white sm:text-5xl md:flex-row md:gap-4 md:text-6xl">
        <h1>LRU Page</h1>
        <h1 className="text-amber-500">Replacement</h1>
      </div>

      <p className="hidden max-w-3xl px-2 font-mono text-sm leading-7 text-zinc-500 md:flex md:px-0 md:text-lg">
        LRU Page Replacement tracks which pages you've used and, when memory is
        full, swaps out the one you haven't touched in the longest time. The
        logic is simple: if you haven't needed it recently, you probably won't
        need it soon.
      </p>
      <p className="max-w-md px-2 font-mono text-sm leading-6 text-zinc-500 md:hidden">
        Least Recently Used - evicts the page that hasn't been accessed for the
        longest time.
      </p>
    </header>
  );
};
