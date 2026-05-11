export default function TimelineStep({ index, text }) {
  return (
    <div className="relative rounded-2xl border border-[var(--light-gray)] bg-white p-4 pl-12 shadow-sm">
      <span className="absolute top-4 left-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--iloilo-blue)] text-xs font-bold text-white">
        {index}
      </span>
      <p className="text-sm leading-relaxed text-[var(--charcoal)]">{text}</p>
    </div>
  )
}
