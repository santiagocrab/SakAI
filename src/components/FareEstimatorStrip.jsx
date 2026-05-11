import { useMemo, useState } from "react"
import { PhilippinePeso } from "lucide-react"

/** Rough prototype fare curve (₱) for Iloilo jeepney distance — not official */
function estimateFareKm(km) {
  const k = Math.max(0, Math.min(50, Number(km) || 0))
  const base = 13
  const perKm = 1.85
  const low = Math.round(base + k * perKm)
  const high = Math.round(low * 1.12)
  return { low, high, k }
}

export default function FareEstimatorStrip({ variant = "layout" }) {
  const [km, setKm] = useState("4")
  const [showRange, setShowRange] = useState(true)

  const { low, high, k } = useMemo(() => estimateFareKm(Number.parseFloat(km)), [km])

  const isLogin = variant === "login"

  return (
    <section
      aria-label="Fare estimator"
      className={
        isLogin
          ? "w-full rounded-2xl border border-[#e8eaef] bg-white/90 p-4 shadow-[0_8px_30px_rgba(10,31,68,0.08)] backdrop-blur-sm sm:p-5"
          : "rounded-xl border border-[var(--light-gray)] bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4"
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`inline-flex shrink-0 items-center gap-2 rounded-lg font-bold text-[var(--navy)] ${isLogin ? "bg-[#FDF2E3] px-2.5 py-1.5 text-xs" : "bg-amber-100/90 px-2 py-1 text-[11px] sm:text-xs"}`}
          >
            <PhilippinePeso size={isLogin ? 15 : 16} className="text-[#c98a00]" strokeWidth={2.25} aria-hidden />
            Fare estimator
          </span>
          <label className="flex min-w-0 flex-1 items-center gap-2 text-sm text-[var(--charcoal)] sm:flex-initial sm:max-w-[200px]">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[var(--text-gray)]">Km</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              max={50}
              step={0.5}
              value={km}
              onChange={(e) => setKm(e.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-[var(--light-gray)] bg-[var(--cream)] px-2.5 py-2 text-sm font-semibold text-[var(--navy)] outline-none transition focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/25"
            />
          </label>
          <button
            type="button"
            onClick={() => setShowRange((s) => !s)}
            className="shrink-0 rounded-lg border border-[var(--light-gray)] bg-[var(--cream)] px-3 py-2 text-xs font-bold text-[var(--navy)] transition hover:border-[#FFB800]/50 hover:bg-white sm:hidden"
          >
            {showRange ? "Hide" : "Show"} fare
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
          <output
            aria-live="polite"
            className={`font-heading font-extrabold tabular-nums text-[var(--navy)] ${showRange ? "block" : "hidden"} sm:block`}
          >
            <span className="text-sm font-semibold text-[var(--text-gray)]">Typical </span>
            <span className="text-lg sm:text-xl">
              ₱{low}–{high}
            </span>
            <span className="ml-1.5 text-xs font-medium text-[var(--text-gray)]">({k} km)</span>
          </output>
          <p className="max-w-[280px] text-[10px] leading-snug text-[var(--text-gray)] sm:max-w-none sm:text-right sm:text-[11px]">
            Ballpark only; actual may vary by route, loading, and boundary transfers.
          </p>
        </div>
      </div>
    </section>
  )
}
