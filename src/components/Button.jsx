export default function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary:
      "bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--warm-gold)] focus:ring-[var(--gold)]",
    secondary:
      "bg-[var(--iloilo-blue)] text-white hover:bg-[var(--midnight-blue)] focus:ring-[var(--iloilo-blue)]",
    outline:
      "border border-[var(--iloilo-blue)] text-[var(--iloilo-blue)] bg-white hover:bg-blue-50 focus:ring-[var(--iloilo-blue)]",
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold shadow-sm transition focus:ring-2 focus:outline-none ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
