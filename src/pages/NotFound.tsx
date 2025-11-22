import { Link } from "react-router-dom";
import AuroraShader from "@/components/AuroraShader";

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <AuroraShader className="opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">Route not found</p>
          <h1 className="mt-3 text-5xl font-semibold">404</h1>
          <p className="mt-2 text-white/70 max-w-xl">
            This mini app hasn&apos;t shipped yet. Head back to the launch pad or jump straight into the prompt studio.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link
              to="/"
              className="rounded-full bg-white text-black px-5 py-3 shadow-[0_18px_50px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5"
            >
              Go to launch pad
            </Link>
            <Link
              to="/apps/prompts"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white/80 backdrop-blur transition hover:border-white/50 hover:text-white"
            >
              Open prompt studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
