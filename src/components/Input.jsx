import { useState } from "react";
import { Card } from "./ui/card";

function runLRU(pages) {
  const frames = new Array(3).fill(null);
  const recentUse = [];
  const steps = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    if (frames.includes(page)) {
      const idx = recentUse.indexOf(page);
      recentUse.splice(idx, 1);
      recentUse.push(page);
      steps.push({
        page,
        isFault: false,
        frames: [...frames],
        newFrameIndex: null,
      });
    } else {
      let replacedIndex;
      if (frames.includes(null)) {
        replacedIndex = frames.indexOf(null);
      } else {
        const lruPage = recentUse[0];
        replacedIndex = frames.indexOf(lruPage);
        recentUse.shift();
      }
      frames[replacedIndex] = page;
      recentUse.push(page);
      steps.push({
        page,
        isFault: true,
        frames: [...frames],
        newFrameIndex: replacedIndex,
      });
    }
  }

  return {
    steps,
    faults: steps.filter((s) => s.isFault).length,
    hits: steps.filter((s) => !s.isFault).length,
  };
}

export const Input = ({ clickCount, setClickCount, setResult }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setClickCount(0);
    setResult(null);
  };

  const handleRun = () => {
    if (clickCount === 0 || clickCount === 2) {
      // First click or re-run: parse and run LRU
      const pages = inputValue.split("").filter((c) => /[a-zA-Z0-9]/.test(c));
      if (pages.length === 0) return;
      setResult(runLRU(pages));
      setClickCount(1);
    } else if (clickCount === 1) {
      // Second click: reveal frames
      setClickCount(2);
    }
  };

  const buttonLabel = clickCount === 1 ? "Reveal Solution" : "Run LRU";

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
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 rounded-lg border border-transparent bg-[#30302e] px-3 py-2 font-mono text-sm text-white outline-none placeholder-zinc-600 transition-all duration-300 ease-in-out focus:border-amber-400/30"
            placeholder="e.g. 70120304 or ABACBD"
          />
          <button
            onClick={handleRun}
            className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2 font-mono text-sm text-amber-400 transition-all duration-200 hover:border-amber-400/50 hover:bg-amber-400/20 active:scale-95"
          >
            {buttonLabel}
          </button>
        </div>

        {/* Hint */}
        <p className="font-mono text-xs text-zinc-500">3 frames will be used</p>
      </Card>
    </section>
  );
};
