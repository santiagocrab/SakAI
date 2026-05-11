import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BusFront,
  CalendarRange,
  ChevronDown,
  ChevronRight,
  Flag,
  MessageCircle,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  adminActivityDayLabels,
  adminActivitySeries,
  adminDateRangeLabel,
  adminKpiCards,
  adminRecentPosts,
  adminReportBreakdown,
  adminReportsNotice,
  adminTopRoutes,
} from "../data/mockData"

const postCategoryClass = {
  Traffic: "bg-red-50 text-red-800 ring-1 ring-red-200",
  Rerouting: "bg-orange-50 text-orange-900 ring-1 ring-orange-200",
  Construction: "bg-amber-50 text-amber-900 ring-1 ring-amber-200",
  Flooding: "bg-sky-50 text-sky-900 ring-1 ring-sky-200",
  General: "bg-[var(--cream)] text-[var(--navy)] ring-1 ring-[var(--light-gray)]",
}

function KpiIcon({ type }) {
  const c = "h-5 w-5"
  switch (type) {
    case "users":
      return <Users className={c} strokeWidth={2} />
    case "bus":
      return <BusFront className={c} strokeWidth={2} />
    case "jeepney":
      return <BusFront className={c} strokeWidth={2} />
    case "messages":
      return <MessageCircle className={c} strokeWidth={2} />
    case "flag":
      return <Flag className={c} strokeWidth={2} fill="currentColor" />
    default:
      return null
  }
}

function UserActivityChart() {
  const W = 640
  const H = 220
  const padL = 44
  const padR = 16
  const padT = 16
  const padB = 36
  const innerW = W - padL - padR
  const innerH = H - padT - padB
  const maxY = 5000
  const n = adminActivityDayLabels.length

  const xAt = (i) => padL + (innerW * i) / (n - 1)
  const yAt = (v) => padT + innerH - (v / maxY) * innerH

  const yTicks = [0, 1000, 2000, 3000, 4000, 5000]

  return (
    <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-lg font-bold text-[var(--navy)]">User Activity Overview</h2>
        <div className="relative">
          <select
            aria-label="Chart range"
            className="cursor-pointer appearance-none rounded-xl border border-[var(--light-gray)] bg-[var(--cream)] py-2 pr-9 pl-3 text-xs font-bold text-[var(--navy)] outline-none focus:border-[var(--navy)]"
            defaultValue="7d"
          >
            <option value="7d">7 Days</option>
            <option value="30d">30 Days</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-[var(--text-gray)]" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 border-b border-[var(--light-gray)] pb-4">
        {adminActivitySeries.map((s) => (
          <span key={s.id} className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--charcoal)]">
            <span className="h-2 w-3 rounded-sm" style={{ backgroundColor: s.color }} />
            {s.name}
          </span>
        ))}
      </div>

      <div className="mt-2 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto min-w-[520px] w-full" role="img" aria-label="User activity line chart">
          {yTicks.map((tick) => {
            const y = yAt(tick)
            return (
              <g key={tick}>
                <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="var(--light-gray)" strokeWidth={1} strokeDasharray="4 4" />
                <text x={padL - 8} y={y + 4} textAnchor="end" className="fill-[var(--text-gray)] text-[10px] font-medium">
                  {tick === 0 ? "0" : `${tick / 1000}K`}
                </text>
              </g>
            )
          })}
          {adminActivityDayLabels.map((label, i) => (
            <text
              key={label}
              x={xAt(i)}
              y={H - 10}
              textAnchor="middle"
              className="fill-[var(--text-gray)] text-[10px] font-semibold"
            >
              {label}
            </text>
          ))}
          {adminActivitySeries.map((s) => {
            const pts = s.values.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ")
            return (
              <polyline
                key={s.id}
                fill="none"
                stroke={s.color}
                strokeWidth={2.5}
                strokeLinejoin="round"
                strokeLinecap="round"
                points={pts}
              />
            )
          })}
          {adminActivitySeries.flatMap((s) =>
            s.values.map((v, i) => (
              <circle key={`${s.id}-${i}`} cx={xAt(i)} cy={yAt(v)} r={4} fill="white" stroke={s.color} strokeWidth={2} />
            )),
          )}
        </svg>
      </div>
    </div>
  )
}

function ReportsDonut() {
  const total = adminReportBreakdown.reduce((a, r) => a + r.count, 0)
  let acc = 0
  const stops = adminReportBreakdown
    .map((r) => {
      const start = (acc / total) * 100
      acc += r.count
      const end = (acc / total) * 100
      return `${r.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`
    })
    .join(", ")

  return (
    <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-heading text-lg font-bold text-[var(--navy)]">Reports &amp; Flags</h2>
        <button type="button" className="text-sm font-semibold text-[var(--iloilo-blue)] hover:underline">
          View All
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <div
          className="relative h-40 w-40 shrink-0 rounded-full shadow-inner ring-4 ring-white"
          style={{
            background: `conic-gradient(from -90deg, ${stops})`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[var(--light-gray)]">
              <span className="font-heading text-3xl font-bold text-[var(--navy)]">{total}</span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-gray)]">Reports</span>
            </div>
          </div>
        </div>
        <ul className="w-full max-w-xs space-y-2.5 text-sm">
          {adminReportBreakdown.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="truncate font-medium text-[var(--charcoal)]">{r.label}</span>
              </span>
              <span className="shrink-0 tabular-nums text-[var(--text-gray)]">
                {r.count}{" "}
                <span className="text-xs">({r.pct.toFixed(1)}%)</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-2 rounded-xl border border-[#f8e4b8] bg-[#fff8e6] px-4 py-3 text-sm text-[var(--charcoal)]">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" strokeWidth={2} />
        <p>{adminReportsNotice}</p>
      </div>
    </div>
  )
}

export default function Admin() {
  return (
    <div className="space-y-6 pb-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[var(--navy)] md:text-3xl">Overview</h1>
          <p className="mt-1 text-sm text-[var(--text-gray)]">SakAI admin dashboard · prototype data</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/community" className="text-sm font-semibold text-[var(--iloilo-blue)] hover:underline">
            View Community
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--light-gray)] bg-white px-3 py-2 text-sm font-semibold text-[var(--navy)] shadow-sm transition hover:bg-[var(--cream)]"
          >
            <CalendarRange size={18} className="text-[var(--iloilo-blue)]" />
            {adminDateRangeLabel}
            <ChevronDown size={16} className="text-[var(--text-gray)]" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {adminKpiCards.map((k) => (
          <div
            key={k.id}
            className="rounded-2xl border border-[var(--light-gray)] bg-white p-4 shadow-sm xl:min-w-0"
          >
            <div className={`inline-flex rounded-xl p-2 ${k.accent}`}>
              <KpiIcon type={k.icon} />
            </div>
            <p className="mt-3 font-heading text-2xl font-bold tracking-tight text-[var(--navy)]">{k.value}</p>
            <p className="text-xs font-semibold text-[var(--text-gray)]">{k.label}</p>
            <p
              className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${
                k.trendUp ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {k.trendUp ? <ArrowUpRight size={14} strokeWidth={2.5} /> : <ArrowDownRight size={14} strokeWidth={2.5} />}
              {k.trendUp ? "↑" : "↓"} {k.trend}% from last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <UserActivityChart />

        <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg font-bold text-[var(--navy)]">Top Routes (Most Searched)</h2>
            <button type="button" className="text-sm font-semibold text-[var(--iloilo-blue)] hover:underline">
              View All
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[360px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--light-gray)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">
                  <th className="pb-2 pr-2">#</th>
                  <th className="pb-2 pr-2">Route</th>
                  <th className="pb-2 pr-2 text-right">Searches</th>
                  <th className="pb-2 text-right">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--light-gray)]">
                {adminTopRoutes.map((r) => (
                  <tr key={r.rank} className="text-[var(--charcoal)]">
                    <td className="py-3 pr-2 font-semibold text-[var(--text-gray)]">{r.rank}</td>
                    <td className="max-w-[200px] py-3 pr-2 font-medium text-[var(--navy)]">{r.route}</td>
                    <td className="py-3 pr-2 text-right tabular-nums text-[var(--charcoal)]">{r.searches}</td>
                    <td className={`py-3 text-right text-xs font-bold ${r.changeUp ? "text-emerald-600" : "text-red-600"}`}>
                      {r.changeUp ? "+" : "−"}
                      {Math.abs(r.change)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg font-bold text-[var(--navy)]">Recent Community Posts</h2>
            <Link to="/community" className="inline-flex items-center gap-0.5 text-sm font-semibold text-[var(--iloilo-blue)] hover:underline">
              View All
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--light-gray)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">
                  <th className="pb-2 pr-3">Post</th>
                  <th className="pb-2 pr-3">Category</th>
                  <th className="pb-2 pr-3">Author</th>
                  <th className="pb-2 pr-3">Time</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--light-gray)]">
                {adminRecentPosts.map((p) => (
                  <tr key={p.id}>
                    <td className="max-w-[220px] py-3 pr-3">
                      <p className="font-semibold text-[var(--navy)]">{p.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--text-gray)]">{p.location}</p>
                    </td>
                    <td className="py-3 pr-3 align-top">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          postCategoryClass[p.category] ?? postCategoryClass.General
                        }`}
                      >
                        {p.category}
                      </span>
                    </td>
                    <td className="py-3 pr-3 align-top text-[var(--charcoal)]">{p.author}</td>
                    <td className="py-3 pr-3 align-top text-xs text-[var(--text-gray)]">{p.time}</td>
                    <td className="py-3 align-top">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ReportsDonut />
      </div>
    </div>
  )
}
