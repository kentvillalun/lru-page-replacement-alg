export const Footer = () => {
  return (
    <footer className="w-full py-6 text-center ">
      <p className="font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} LRU Page Replacement Simulator
      </p>
    </footer>
  );
};
