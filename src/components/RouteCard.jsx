import Badge from "./Badge"

export default function RouteCard({ origin, destination, fare, time, code, indicators = [] }) {
  return (
    <article className="rounded-3xl border border-[var(--light-gray)] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-[var(--navy)]">
          {origin} to {destination}
        </h3>
        <Badge tone="gold">{code}</Badge>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-sm text-[var(--text-gray)]">
        <span className="rounded-full bg-[var(--cream)] px-3 py-1">Fare: PHP {fare}</span>
        <span className="rounded-full bg-[var(--cream)] px-3 py-1">Travel time: {time}</span>
      </div>
      {indicators.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {indicators.map((indicator) => (
            <Badge key={indicator} tone="green">
              {indicator}
            </Badge>
          ))}
        </div>
      ) : null}
    </article>
  )
}
