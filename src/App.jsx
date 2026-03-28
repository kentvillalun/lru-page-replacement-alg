import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";


function App() {
  const [result, setResult] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-950 px-6  md:px-10 pt-30 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[26vh] w-full max-w-480 bg-[radial-gradient(ellipse_at_center_top,rgba(234,147,39,0.12)_0%,transparent_70%)] sm:h-[32vh] md:h-[50vh]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 pb-10 sm:gap-10">
        <Header />
        <Input
          clickCount={clickCount}
          setClickCount={setClickCount}
          setResult={setResult}
        />
        {/* {result && (
          <Output
            steps={result.steps}
            faults={result.faults}
            hits={result.hits}
            clickCount={clickCount}
          />
        )} */}
      </div>
    </main>
  );
}

export default App;
