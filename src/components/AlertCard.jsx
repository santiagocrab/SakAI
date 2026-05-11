import Badge from "./Badge"

export default function AlertCard({ title, type, verified }) {
  return (
    <article className="rounded-2xl border border-[var(--light-gray)] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-[var(--navy)]">{title}</h3>
        {verified && <Badge tone="green">Verified</Badge>}
      </div>
      <p className="mt-2 text-xs text-[var(--text-gray)]">{type}</p>
    </article>
  )
}
