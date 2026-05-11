import { useEffect, useMemo, useState } from "react"
import { ArrowLeftRight, BusFront, Clock, PhilippinePeso, Search } from "lucide-react"
import RouteMap from "../components/RouteMap"
import { planMapLegend, planRouteCards } from "../data/mockData"

/** Prototype: stable “distance” from typed stops (not real routing) */
function suggestedTripKm(from, to) {
  const s = `${from.trim()}|${to.trim()}`
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  const n = (Math.abs(h) % 75) / 10 + 2
  return Math.round(n * 2) / 2
}

function estimateFareKm(km) {
  const k = Math.max(0, Math.min(50, Number(km) || 0))
  const base = 13
  const perKm = 1.85
  const low = Math.round(base + k * perKm)
  const high = Math.round(low * 1.12)
  return { low, high, k }
}

export default function PlanRoute() {
  const [from, setFrom] = useState("SM City Iloilo")
  const [to, setTo] = useState("WVSU Back Gate")

  const bothStops = from.trim().length > 0 && to.trim().length > 0
  const suggestedKm = useMemo(
    () => (from.trim() && to.trim() ? suggestedTripKm(from, to) : 4),
    [from, to],
  )

  const [tripKm, setTripKm] = useState(suggestedKm)
  useEffect(() => {
    if (bothStops) setTripKm(suggestedKm)
  }, [bothStops, suggestedKm])

  const fare = useMemo(() => estimateFareKm(tripKm), [tripKm])

  return (
    <div className="relative -mx-4 min-h-0 pb-4 lg:-mx-6">
      <div className="min-w-0 space-y-5 px-4 lg:space-y-6 lg:px-6">
        <div>
          <h1 className="font-heading text-xl font-bold text-[var(--navy)] sm:text-2xl">Plan Route</h1>
        </div>

        {/* Map + legend */}
        <section className="relative">
          <RouteMap />
          <div className="pointer-events-none absolute left-3 top-3 z-[500] max-w-[200px] sm:max-w-[220px]">
            <div className="pointer-events-auto rounded-xl border border-[var(--light-gray)] bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:p-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">Route legend</p>
              <ul className="mt-2 space-y-1.5 text-[11px] font-medium text-[var(--charcoal)] sm:text-xs">
                {planMapLegend.map((row) => (
                  <li key={row.id} className="flex items-center gap-2">
                    <span className="h-2.5 w-5 shrink-0 rounded-sm" style={{ backgroundColor: row.color }} />
                    {row.name}
                  </li>
                ))}
                <li className="flex items-center gap-2 border-t border-[var(--light-gray)] pt-2">
                  <BusFront size={14} className="shrink-0 text-[var(--iloilo-blue)]" />
                  Jeepney stop
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search strip */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] p-4 shadow-xl sm:rounded-3xl sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-3">
            <div className="relative min-h-[52px] flex-1 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                From
              </div>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="mt-1 w-full border-0 bg-transparent text-sm font-semibold text-white placeholder:text-white/45 focus:outline-none focus:ring-0"
                placeholder="Where are you starting?"
              />
            </div>
            <div className="flex items-center justify-center lg:pt-5">
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 p-2.5 text-[#FFB800] hover:bg-white/15"
                aria-label="Swap from and to"
                onClick={() => {
                  setFrom(to)
                  setTo(from)
                }}
              >
                <ArrowLeftRight size={18} />
              </button>
            </div>
            <div className="relative min-h-[52px] flex-1 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">
                <span className="h-2 w-2 rounded-full bg-[var(--route-red)]" />
                To
              </div>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="mt-1 w-full border-0 bg-transparent text-sm font-semibold text-white placeholder:text-white/45 focus:outline-none focus:ring-0"
                placeholder="Where do you want to go?"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-1 lg:w-52">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">Route preference</span>
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
                <Clock size={16} className="shrink-0 text-white/70" />
                <select className="w-full cursor-pointer border-0 bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-0 [&>option]:text-[var(--navy)]">
                  <option>Fastest Route</option>
                  <option>Cheapest fare</option>
                  <option>Fewest transfers</option>
                  <option>Less walking</option>
                </select>
              </div>
            </div>
            <div className="flex items-stretch lg:w-auto">
              <button
                type="button"
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 text-sm font-bold text-[var(--navy)] shadow-md transition hover:brightness-105 lg:min-w-[150px]"
              >
                <Search size={18} strokeWidth={2.5} />
                Find Route
              </button>
            </div>
          </div>

          {bothStops ? (
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#FFB800] ring-1 ring-white/15">
                    <PhilippinePeso size={15} strokeWidth={2.25} aria-hidden />
                    Fare estimator
                  </span>
                  <p className="text-xs text-white/70">
                    For <span className="font-semibold text-white/90">{from.trim()}</span>
                    {" → "}
                    <span className="font-semibold text-white/90">{to.trim()}</span>
                  </p>
                </div>
                <label className="flex flex-col gap-1 sm:max-w-[160px]">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#FFB800]/90">
                    Trip distance (km)
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={50}
                    step={0.5}
                    value={tripKm}
                    onChange={(e) => setTripKm(Number.parseFloat(e.target.value) || 0)}
                    className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold text-white outline-none ring-1 ring-white/10 transition placeholder:text-white/40 focus:border-[#FFB800]/50 focus:ring-2 focus:ring-[#FFB800]/30"
                  />
                </label>
                <output
                  aria-live="polite"
                  className="font-heading text-lg font-extrabold tracking-tight text-white sm:text-xl"
                >
                  <span className="mr-2 text-sm font-semibold text-white/60">Typical</span>₱{fare.low}–{fare.high}
                  <span className="ml-2 text-xs font-medium text-white/50">({fare.k} km)</span>
                </output>
              </div>
              <p className="mt-2 text-[10px] leading-snug text-white/45">
                Ballpark from your stops and distance — not official; confirm with the conductor.
              </p>
            </div>
          ) : null}
        </section>

        {/* Route cards */}
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-bold text-[var(--navy)]">Recommended routes</h2>
          {planRouteCards.map((r) => (
            <article
              key={r.id}
              className="relative overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              {r.recommended ? (
                <span className="absolute right-4 top-4 rounded-full bg-[#FFB800] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[var(--navy)]">
                  Recommended
                </span>
              ) : null}
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[#0a2347] text-[#FFB800] shadow-inner">
                  <BusFront size={28} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-gray)]">{r.code}</p>
                  <h3 className="font-heading mt-1 text-lg font-bold text-[var(--navy)] sm:text-xl">{r.routeLabel}</h3>
                  <span
                    className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      r.transferTone === "green"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {r.transferTag}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--charcoal)]">{r.summary}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl bg-[var(--cream)] px-3 py-2.5 text-center sm:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-gray)]">Travel time</p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-[var(--navy)]">{r.time}</p>
                </div>
                <div className="rounded-xl bg-[var(--cream)] px-3 py-2.5 text-center sm:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-gray)]">Est. fare</p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-[var(--navy)]">{r.fare}</p>
                </div>
                <div className="rounded-xl bg-[var(--cream)] px-3 py-2.5 text-center sm:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-gray)]">Transfers</p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-[var(--navy)]">{r.transfers}</p>
                </div>
                <div className="rounded-xl bg-[var(--cream)] px-3 py-2.5 text-center sm:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-gray)]">Walking</p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-[var(--navy)]">{r.walkM}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <p className="text-center text-[11px] leading-relaxed text-[var(--text-gray)]">
          Fares are estimated based on PUJ General Fare Guide (Oct 8, 2023). Live routing is a prototype — verify with
          drivers and conductors.
        </p>
      </div>
    </div>
  )
}
