import wordLogo from "@assets/wordLogo.png"

/**
 * Brand wordmark from `assets/wordLogo.png`.
 * @param {"sm" | "md" | "lg"} size
 */
export default function SakaiLogoMark({ size = "md", showTagline = false, dark = false }) {
  const heights = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-14 md:h-16",
  }
  const tag = dark ? "text-white/70" : "text-[var(--text-gray)]"

  return (
    <div>
      <img
        src={wordLogo}
        alt="SakAI"
        className={`w-auto max-w-[min(100%,280px)] object-contain object-left ${heights[size]} ${dark ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" : ""}`}
        decoding="async"
      />
      {showTagline ? (
        <p className={`mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] ${tag}`}>
          YOUR ILOILO ROUTE BUDDY
        </p>
      ) : null}
    </div>
  )
}
