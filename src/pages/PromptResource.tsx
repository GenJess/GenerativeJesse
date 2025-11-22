import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookmarkPlus,
  Check,
  Copy,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react";
import AuroraShader from "@/components/AuroraShader";

const categories = ["All", "Ideation", "Research", "Marketing", "Systems"] as const;

const promptCards = [
  {
    title: "Design Sprint Kickoff",
    summary: "Shape a one-week sprint with checkpoints, rituals, and a bold objective.",
    body:
      "You are a product strategist running a five-day design sprint. Draft a day-by-day plan with objectives, rituals, and timeboxed exercises. Emphasize momentum, clarity, and a visible goal for the team.",
    accent: "from-amber-300 to-orange-400",
    tags: ["Ideation", "Sprints"],
    pills: ["Day 1: Map", "Day 2: Diverge"],
  },
  {
    title: "Voice of Customer Digest",
    summary: "Condense multiple calls into crisp insights and experiments.",
    body:
      "You are a research synthesizer. Summarize the top pains, desired outcomes, and exact phrases customers used. Provide three experiment ideas and one risky assumption to test this week.",
    accent: "from-purple-500 to-indigo-600",
    tags: ["Research"],
    pills: ["Insights", "Experiments"],
  },
  {
    title: "Landing Page Angles",
    summary: "Spin three headline angles and hero copy for a launch landing page.",
    body:
      "Generate three distinct landing page hero sections. Include headline, subheadline, CTA text, and the emotional trigger each version leans on. Keep it concise and A/B friendly.",
    accent: "from-emerald-400 to-teal-500",
    tags: ["Marketing", "Launch"],
    pills: ["Hero", "CTA"],
  },
  {
    title: "Systems Prompt: Guardrails",
    summary: "Set the tone, guardrails, and personality for your assistant.",
    body:
      "You are a calm, opinionated copilot. Describe your style, boundaries, and when you will push back. Specify how you format answers and how you ask clarifying questions before acting.",
    accent: "from-sky-300 to-blue-500",
    tags: ["Systems"],
    pills: ["Tone", "Formatting"],
  },
];

const promptPacks = [
  {
    title: "Launch day ops",
    detail: "Checklists for release notes, socials, and a single source of truth.",
    accent: "bg-gradient-to-r from-amber-200/40 via-orange-400/30 to-amber-400/40",
  },
  {
    title: "Workshop facilitation",
    detail: "Icebreakers, silent brainstorms, and decision rituals that travel well.",
    accent: "bg-gradient-to-r from-purple-300/30 via-indigo-400/30 to-blue-400/30",
  },
  {
    title: "Content remix",
    detail: "Turn transcripts into carousels, email drafts, and short hooks in one go.",
    accent: "bg-gradient-to-r from-emerald-300/30 via-teal-400/30 to-emerald-400/30",
  },
];

const PromptResource = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredPrompts = useMemo(
    () =>
      activeFilter === "All"
        ? promptCards
        : promptCards.filter((card) => card.tags.includes(activeFilter)),
    [activeFilter]
  );

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1200);
    } catch (error) {
      console.error("Unable to copy prompt", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <AuroraShader className="opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-20 space-y-10">
        <header className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 sm:px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:border-white/40"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">App</p>
              <h1 className="text-xl font-semibold">Prompt Studio</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-amber-300" />
            curated for mobile
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> mobile prompt board
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Keep your best prompts close
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-purple-300">
                with tappable cards and filters.
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl">
              Built to look like the inspiration shots: big rounded cards, saturated gradients, and quick filters so you can
              jump to the right prompt with one thumb.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition backdrop-blur border ${
                    activeFilter === category
                      ? "border-white/70 bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.25)]"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-amber-300/60 via-orange-500/50 to-purple-500/60 p-4 text-black shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-black/10 px-3 py-1 font-semibold text-black/70">Today&apos;s stack</span>
              <Wand2 className="h-4 w-4" />
            </div>
            <div className="mt-3 grid gap-3">
              <div className="rounded-3xl bg-white/70 p-4 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/70">Warmup</p>
                <p className="mt-1 text-lg font-semibold">Sprint primer</p>
                <p className="text-sm text-black/70">Align on the week&apos;s outcome and guardrails.</p>
              </div>
              <div className="rounded-3xl bg-white/70 p-4 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/70">Research</p>
                <p className="mt-1 text-lg font-semibold">VOC digest</p>
                <p className="text-sm text-black/70">Three quotes, three experiments.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl bg-white/70 p-4 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/70">Launch</p>
                  <p className="mt-1 text-lg font-semibold">Hero angles</p>
                </div>
                <div className="rounded-3xl bg-white/70 p-4 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/70">Follow up</p>
                  <p className="mt-1 text-lg font-semibold">DM hooks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-[1.3fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredPrompts.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-70 transition duration-500 group-hover:opacity-90`} />
                <div className="relative z-10 flex h-full flex-col gap-3 text-black">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-black/20 px-3 py-1 font-semibold text-black/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <BookmarkPlus className="h-4 w-4 text-black/70" />
                  </div>
                  <h3 className="text-xl font-semibold drop-shadow-sm">{card.title}</h3>
                  <p className="text-sm text-black/75 drop-shadow-sm">{card.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-black/70">
                    {card.pills.map((pill) => (
                      <span key={pill} className="rounded-full bg-white/60 px-3 py-1 shadow-sm">
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-1 text-sm font-semibold text-black/80">
                    <button
                      onClick={() => handleCopy(card.body, card.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-black/10 px-3 py-2 transition hover:bg-black/20"
                    >
                      {copied === card.title ? (
                        <>
                          <Check className="h-4 w-4" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy prompt
                        </>
                      )}
                    </button>
                    <Send className="h-4 w-4 text-black/70" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Prompt packs</h3>
              <ArrowUpRight className="h-4 w-4 text-white/70" />
            </div>
            <p className="text-sm text-white/70">Stacks of prompts grouped by intent. Save them, remix them, and launch a new mini app from any pack.</p>
            <div className="grid gap-3">
              {promptPacks.map((pack) => (
                <div
                  key={pack.title}
                  className={`rounded-3xl border border-white/10 ${pack.accent} p-4 text-black shadow-[0_12px_35px_rgba(0,0,0,0.25)]`}
                >
                  <p className="text-sm font-semibold">{pack.title}</p>
                  <p className="text-xs text-black/70 mt-1 leading-relaxed">{pack.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
              <p className="font-semibold">Tip</p>
              <p className="text-white/70">Swipe cards on mobile to keep one hand free while you run a session.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PromptResource;
