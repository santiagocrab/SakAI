export default function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-[var(--navy)] md:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-[var(--text-gray)]">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
