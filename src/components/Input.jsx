export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-[var(--light-gray)] bg-white px-4 py-3 text-sm text-[var(--charcoal)] placeholder:text-[var(--text-gray)] shadow-sm focus:border-[var(--iloilo-blue)] focus:ring-2 focus:ring-blue-100 focus:outline-none ${className}`}
      {...props}
    />
  )
}
