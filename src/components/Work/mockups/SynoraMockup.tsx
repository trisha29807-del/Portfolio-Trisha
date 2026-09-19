import { LayoutDashboard, GitBranch, TrendingUp, FolderKanban, BarChart3 } from "lucide-react";

export function SynoraMockup() {
  const nav = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: GitBranch, label: "Knowledge Graph" },
    { icon: TrendingUp, label: "Growth Path" },
    { icon: FolderKanban, label: "Projects" },
    { icon: BarChart3, label: "Analytics" },
  ];

  const stats = [
    { label: "Knowledge Nodes", value: "1,248" },
    { label: "Active Projects", value: "8" },
    { label: "Learning Streak", value: "21 days" },
  ];

  return (
    <div className="flex h-full w-full bg-[#1c1210] text-[#f1e6da]">
      <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-white/10 p-4 sm:flex">
        <span className="mb-4 font-serif text-lg italic text-[#c7495c]">
          Synora
        </span>
        {nav.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
              item.active
                ? "bg-[#c7495c]/15 text-[#c7495c]"
                : "text-[#f1e6da]/50"
            }`}
          >
            <item.icon size={13} strokeWidth={1.75} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 p-5 sm:p-6">
        <div className="text-sm font-medium text-[#f1e6da]/80">
          Welcome back, Trisha.
        </div>
        <div className="mt-1 text-[11px] text-[#f1e6da]/40">
          Your engineering journey, powered by intelligence.
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-md border border-white/10 bg-white/5 p-3"
            >
              <div className="text-[9px] uppercase tracking-[0.16em] text-[#f1e6da]/40">
                {s.label}
              </div>
              <div className="mt-1.5 font-serif text-xl text-[#f1e6da]">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-[#f1e6da]/40">
            Growth overview
          </div>
          <svg viewBox="0 0 300 60" className="mt-3 h-14 w-full">
            <polyline
              points="0,45 30,30 60,38 90,15 120,25 150,10 180,22 210,8 240,18 270,5 300,14"
              fill="none"
              stroke="#c7495c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
