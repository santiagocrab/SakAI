export default function StatCard({ label, value }) {
  return (
    <article className="rounded-2xl border border-[var(--light-gray)] bg-white p-4 shadow-sm">
      <p className="text-xs text-[var(--text-gray)]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[var(--navy)]">{value}</p>
    </article>
  )
}
