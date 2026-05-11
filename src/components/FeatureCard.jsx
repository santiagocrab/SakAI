export default function FeatureCard({ title, subtitle, icon: Icon }) {
  return (
    <div className="group rounded-3xl border border-[var(--light-gray)] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {Icon ? (
        <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-[var(--iloilo-blue)] transition group-hover:bg-[var(--iloilo-blue)] group-hover:text-white">
          <Icon size={18} />
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-[var(--navy)]">{title}</h3>
      <p className="mt-1 text-sm text-[var(--text-gray)]">{subtitle}</p>
    </div>
  )
}
