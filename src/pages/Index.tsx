import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Rocket, PanelsTopLeft, Smartphone, LucideIcon } from "lucide-react";
import AuroraShader from "@/components/AuroraShader";

const launcherApps: { name: string; description: string; href: string; pill: string; colors: string; icon: LucideIcon }[] = [
  {
    name: "Prompt Studio",
    description: "Save, remix, and launch the prompts you use most. Perfect for sprinting on ideas.",
    href: "/apps/prompts",
    pill: "Live",
    colors: "from-amber-400/80 via-orange-500/70 to-amber-600/70",
    icon: Sparkles,
  },
  {
    name: "Idea Sprint Timer",
    description: "Guided seven-day ship sprint with daily focus checks and shareable recaps.",
    href: "#",
    pill: "Soon",
    colors: "from-indigo-400/80 via-purple-500/70 to-blue-500/70",
    icon: Rocket,
  },
  {
    name: "Micro Notes",
    description: "Tiny notes, mood boards, and voice snippets synced into your flow.",
    href: "#",
    pill: "Drafting",
    colors: "from-emerald-400/70 via-teal-500/70 to-emerald-600/60",
    icon: PanelsTopLeft,
  },
];

const quickTiles = [
  {
    title: "Sprint-ready",
    detail: "Prebuilt cards and prompts designed for motion-first storytelling.",
  },
  {
    title: "Mobile-first",
    detail: "Thumb-friendly layouts with soft glassmorphism, inspired by the preview shots.",
  },
  {
    title: "Modular",
    detail: "Every app launches as its own page so you can grow the lab without clutter.",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <AuroraShader className="opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(112,92,255,0.08),transparent_25%),radial-gradient(circle_at_40%_80%,rgba(255,185,100,0.09),transparent_25%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-20 space-y-14">
        <header className="flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-4 sm:px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600 shadow-[0_10px_45px_rgba(255,193,103,0.35)]">
              <Smartphone className="h-5 w-5 text-black" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Launch Pad</p>
              <h1 className="text-xl font-semibold">Jesse&apos;s pocket studio</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/apps/prompts"
              className="group flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold shadow-[0_15px_45px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5"
            >
              Open prompt app
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </header>

        <section className="grid items-center gap-10 md:grid-cols-[1.2fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Always-on launcher
            </p>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
                A calm home for experiments
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-purple-300">
                  with a cinematic shader backdrop.
                </span>
              </h2>
              <p className="text-base text-white/70 max-w-2xl">
                Drop in, pick a mini app, and get building. The home view keeps things minimal while the
                aurora shader sets a bold, futuristic mood inspired by the shots you shared.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/apps/prompts"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 px-5 py-3 text-sm font-semibold text-black shadow-[0_20px_50px_rgba(255,193,103,0.35)] transition hover:-translate-y-0.5"
              >
                Launch Prompt Studio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#apps"
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/50 hover:text-white"
              >
                See all tiles
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {quickTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-white">{tile.title}</p>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">{tile.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[320px] sm:w-[360px] rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">Pocket feed</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-amber-300" /> live
                </span>
              </div>
              <div className="grid gap-3">
                <div className="rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 p-4 text-black shadow-lg">
                  <p className="text-xs uppercase tracking-wide">Today</p>
                  <p className="mt-2 text-xl font-semibold leading-snug">Design Sprint Kickoff</p>
                  <p className="mt-1 text-sm text-black/80">Ideate, prototype, validate — in one week.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-gradient-to-br from-red-400 to-orange-400 p-4 text-black shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wide">Stack</p>
                    <p className="mt-1 text-lg font-semibold">Idea Bank</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-amber-200 to-yellow-300 p-4 text-black shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wide">Focus</p>
                    <p className="mt-1 text-lg font-semibold">Micro notes</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 text-white shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Audio</p>
                  <p className="mt-1 text-lg font-semibold">Voice capture</p>
                  <p className="text-sm text-white/80">Drop-in microphone for future mini apps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="apps" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Mini apps</p>
              <h3 className="text-2xl font-semibold">Pick a tile and launch</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> curated for mobile
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {launcherApps.map((app) => (
              <Link
                key={app.name}
                to={app.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.colors} opacity-60 transition duration-500 group-hover:opacity-90`} />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-black/50 px-3 py-1 font-semibold text-white/80">{app.pill}</span>
                    <app.icon className="h-5 w-5 text-black drop-shadow" />
                  </div>
                  <h4 className="text-xl font-semibold text-black drop-shadow">{app.name}</h4>
                  <p className="text-sm text-black/70 drop-shadow-sm">{app.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
                    Open tile
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-5 w-5 text-amber-300" />
              Prompt Studio preview
            </div>
            <h3 className="text-3xl font-semibold leading-tight">Stay organized with a prompt control center</h3>
            <p className="text-white/70">
              Curated prompt stacks, filters, and quick copy buttons make it easy to move from idea to execution.
              The page is tuned for thumbs with rounded cards and bold, legible type.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-2 text-white/80">Filters for ideation, research, launch</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-white/80">Gradient cards inspired by the shots</span>
            </div>
            <Link
              to="/apps/prompts"
              className="inline-flex items-center gap-2 self-start rounded-full bg-white text-black px-4 py-2 text-sm font-semibold shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5"
            >
              Try the prompt resource page
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 rounded-3xl bg-gradient-to-br from-black/40 via-black/30 to-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="rounded-3xl bg-gradient-to-br from-amber-300 to-orange-400 p-4 text-black shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-black/10 px-3 py-1 font-semibold">Ideation</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <p className="mt-2 text-lg font-semibold leading-snug">Design Sprint Starter</p>
              <p className="text-sm text-black/70">Kick off a sprint with clarity, milestones, and tone.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 text-white shadow-lg">
                <p className="text-xs uppercase tracking-wide text-white/80">Research</p>
                <p className="mt-2 text-base font-semibold">Voice of customer</p>
                <p className="text-sm text-white/70">Condense calls into next steps.</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 p-4 text-black shadow-lg">
                <p className="text-xs uppercase tracking-wide">Launch</p>
                <p className="mt-2 text-base font-semibold">Landing angles</p>
                <p className="text-sm text-black/70">Variant writing for campaigns.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
              <p className="text-sm font-semibold">Mobile ready</p>
              <p className="text-xs mt-1 leading-relaxed">
                Cards are tall, tappable, and ready for dark mode. Perfect for referencing prompts on the go.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
