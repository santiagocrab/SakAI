import { useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import profileBot from "@assets/ProfileBot.png"

const samplePrompts = [
  "Ano sakyan ko from SM City to WVSU?",
  "Cheapest route to Molo Church?",
  "May jeep pa after 9 PM?",
  "First time ko, paano sumakay?",
]

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m Ask SakAI. Ask me about routes, fares, or commuting in Iloilo." },
  ])

  const send = () => {
    const t = input.trim()
    if (!t) return
    setMessages((m) => [...m, { role: "user", text: t }])
    setInput("")
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Prototype reply: open Plan Route for full map results. I can help with fares and transfers next.",
        },
      ])
    }, 400)
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-20 z-40 flex flex-col items-end md:bottom-6 md:right-6">
      {open ? (
        <div className="pointer-events-auto mb-3 flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-[var(--light-gray)] bg-[var(--navy)] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFB800]/50">
                <img src={profileBot} alt="Ask SakAI" className="h-full w-full object-cover" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--navy)] bg-emerald-500" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold">Ask SakAI</p>
                <p className="text-[10px] text-white/70">AI Commute Buddy · routes · fares · how to commute</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-64 space-y-2 overflow-y-auto bg-[var(--cream)] p-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`rounded-xl px-3 py-2 ${msg.role === "user" ? "ml-6 bg-[var(--navy)] text-white" : "mr-4 bg-white text-[var(--charcoal)] shadow-sm"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--light-gray)] bg-white p-2">
            <p className="mb-2 text-[10px] font-medium text-[var(--text-gray)]">Try asking:</p>
            <div className="mb-2 flex flex-wrap gap-1">
              {samplePrompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setInput(p)}
                  className="rounded-full border border-[var(--light-gray)] bg-[var(--cream)] px-2 py-0.5 text-left text-[10px] text-[var(--navy)] hover:border-[#FFB800]"
                >
                  {p.length > 36 ? `${p.slice(0, 34)}…` : p}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a question…"
                className="min-w-0 flex-1 rounded-xl border border-[var(--light-gray)] px-3 py-2 text-sm outline-none focus:border-[var(--navy)]"
              />
              <button
                type="button"
                onClick={send}
                className="flex shrink-0 items-center justify-center rounded-xl bg-[#FFB800] px-3 text-[var(--navy)] hover:brightness-95"
                aria-label="Send"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-[var(--navy)] py-2.5 pl-2.5 pr-4 text-white shadow-[0_8px_30px_rgba(6,26,51,0.35)] ring-4 ring-white/70 transition hover:brightness-110"
        aria-label={open ? "Close Ask SakAI" : "Open Ask SakAI"}
      >
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4d9a8] ring-2 ring-[#FFB800]/60">
          <img src={profileBot} alt="Ask SakAI" className="h-full w-full object-cover" />
          <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" title="Online" />
        </span>
        <span className="flex items-center gap-1.5 pr-1">
          <MessageCircle size={18} className="text-[#FFB800]" strokeWidth={2} />
          <span className="text-sm font-bold tracking-tight">Ask SakAI</span>
        </span>
      </button>
    </div>
  )
}
