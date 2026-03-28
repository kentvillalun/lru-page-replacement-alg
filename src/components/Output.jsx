import { Card } from "./ui/card";

export const Output = () => {
  return (
    <section className="flex w-full flex-col gap-6 md:max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <Card color={"red"} className="py-2">
            <div className="flex w-full flex-col items-start justify-center gap-2 md:items-center">
              <div className="flex flex-row w-full items-center gap-2">
                <p className="text-xs uppercase tracking-[0.2em] text-red-400">
                  page faults
                </p>
                <div className="h-0.5 w-full bg-red-500/40 md:flex-1" />
              </div>
              <div className="flex flex-row justify-evenly items-center w-full gap-10">
                <p className="text-red-400 text-4xl font-extrabold font-mono ">
                  3
                </p>
                <p className="text-zinc-500 text-xs  font-mono ">Page misses</p>
              </div>
            </div>
          </Card>
          <Card color={"green"}>
            <div className="flex w-full flex-col items-start justify-center gap-2 md:items-center">
              <div className="flex flex-row w-full items-center gap-2">
                <p className="text-xs uppercase tracking-[0.2em] text-lime-400">
                  page faults
                </p>
                <div className="h-0.5 w-full bg-lime-500/40 md:flex-1" />
              </div>
              <div className="flex flex-row justify-evenly items-center w-full gap-10">
                <p className="text-lime-400 text-4xl font-extrabold font-mono ">
                  3
                </p>
                <p className="text-zinc-500 text-xs  font-mono ">Times found in memory</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Table */}
        <Card className="border border-white/10 px-0! py-0! col-span-2">
          <div className="flex flex-row items-center justify-between border-b px-4 py-5 border-b-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
              Page Frame table
            </p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <p className="text-xs tracking-[0.2em] text-zinc-400">Fault</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-2 w-2 bg-lime-500 rounded-full"></div>
                <p className="text-xs tracking-[0.2em] text-zinc-400">Hit</p>
              </div>
            </div>
          </div>
          <div className="min-h-50"></div>
        </Card>
      </div>
    </section>
  );
};
