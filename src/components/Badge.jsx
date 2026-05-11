export default function Badge({ children, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-100 text-blue-800",
    gold: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    green: "bg-emerald-100 text-emerald-800",
  }

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}
