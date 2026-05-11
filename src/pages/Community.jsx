import { useMemo, useState } from "react"
import {
  ArrowBigDown,
  ArrowBigUp,
  Ban,
  Building2,
  Car,
  ChevronDown,
  ChevronLeft,
  CloudRain,
  HardHat,
  LayoutGrid,
  MapPin,
  MessageSquare,
  MoreVertical,
  Plus,
  Search,
  Shuffle,
} from "lucide-react"
import Button from "../components/Button"
import Input from "../components/Input"
import PageHeader from "../components/PageHeader"
import {
  communityCategories,
  communityCommentsSample,
  communityGuidelines,
  communityModerationNotice,
  communityThreads,
  communityTopContributors,
} from "../data/mockData"

const categoryBadgeClass = {
  Traffic: "border-red-200 bg-red-50 text-red-800",
  Rerouting: "border-orange-200 bg-orange-50 text-orange-900",
  Construction: "border-amber-200 bg-amber-50 text-amber-900",
  Flooding: "border-sky-200 bg-sky-50 text-sky-900",
  Suspension: "border-violet-200 bg-violet-50 text-violet-900",
  "Terminal Change": "border-teal-200 bg-teal-50 text-teal-900",
  General: "border-[var(--light-gray)] bg-[var(--cream)] text-[var(--navy)]",
}

const categoryIcons = {
  Traffic: Car,
  Rerouting: Shuffle,
  Construction: HardHat,
  Flooding: CloudRain,
  Suspension: Ban,
  "Terminal Change": Building2,
  General: MessageSquare,
}

function CategoryIcon({ name, className }) {
  const Icon = categoryIcons[name] || MessageSquare
  return <Icon size={14} strokeWidth={2} className={className} aria-hidden />
}

function initials(name) {
  const p = name.replace(/[^a-zA-Z0-9]/g, " ").trim().split(/\s+/)
  if (p.length >= 2) return (p[0][0] + p[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

export default function Community() {
  const [selectedId, setSelectedId] = useState(null)
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [comments, setComments] = useState(communityCommentsSample)
  const [draft, setDraft] = useState("")

  const selected = useMemo(
    () => communityThreads.find((t) => t.id === selectedId) ?? null,
    [selectedId],
  )

  const filtered = useMemo(() => {
    const list = communityThreads.filter((t) => {
      const catOk = category === "All" || t.category === category
      const q = query.trim().toLowerCase()
      const qOk =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.preview.toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q)
      return catOk && qOk
    })
    if (sortBy === "popular") {
      return [...list].sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
    }
    return [...list].sort((a, b) => (a.sortKey ?? 999) - (b.sortKey ?? 999))
  }, [category, query, sortBy])

  if (selected) {
    const net = selected.upvotes - selected.downvotes
    return (
      <div className="space-y-6 pb-4">
        <button
          type="button"
          onClick={() => setSelectedId(null)}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:underline"
        >
          <ChevronLeft size={18} />
          Back to threads
        </button>

        <div className="rounded-xl border border-[#f8e4b8] bg-[#fff8e6] px-4 py-3 text-sm text-[var(--charcoal)]">
          {communityModerationNotice}
        </div>

        <article className="rounded-2xl border border-[var(--light-gray)] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold ${categoryBadgeClass[selected.category] ?? categoryBadgeClass.General}`}
            >
              <CategoryIcon name={selected.category} />
              {selected.category}
            </span>
          </div>
          <h1 className="font-heading mt-3 text-2xl font-bold text-[var(--navy)] sm:text-3xl">{selected.title}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-1 text-sm text-[var(--text-gray)]">
            <MapPin size={15} className="shrink-0 text-[var(--iloilo-blue)]" />
            <span>{selected.location}</span>
          </p>
          <p className="mt-2 text-sm text-[var(--text-gray)]">
            <span className="font-medium text-[var(--charcoal)]">{selected.author}</span> · {selected.postedAt}
          </p>
          <p className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-[var(--charcoal)]">{selected.body}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--light-gray)] pt-4">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-xl border border-[var(--light-gray)] px-3 py-1.5 text-sm hover:bg-[var(--cream)]"
            >
              <ArrowBigUp size={18} /> {selected.upvotes}
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-xl border border-[var(--light-gray)] px-3 py-1.5 text-sm hover:bg-[var(--cream)]"
            >
              <ArrowBigDown size={18} /> {selected.downvotes}
            </button>
            <span className="inline-flex items-center gap-1 text-sm text-[var(--text-gray)]">
              <MessageSquare size={16} />
              {selected.comments} comments
            </span>
          </div>
        </article>

        <section className="rounded-2xl border border-[var(--light-gray)] bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-[var(--navy)]">Comments</h2>
          <ul className="mt-4 space-y-4">
            {comments.map((c) => (
              <li key={c.id} className="border-b border-[var(--light-gray)] pb-4 last:border-0">
                <p className="text-xs text-[var(--text-gray)]">
                  <span className="font-semibold text-[var(--charcoal)]">{c.author}</span> · {c.time}
                </p>
                <p className="mt-1 text-sm text-[var(--charcoal)]">{c.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a comment…"
              className="!rounded-xl sm:flex-1"
            />
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                if (!draft.trim()) return
                setComments((c) => [
                  ...c,
                  { id: `c${Date.now()}`, author: "You", body: draft.trim(), time: "Just now" },
                ])
                setDraft("")
              }}
            >
              Post comment
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-6 pb-4">
      <PageHeader
        title="Community"
        subtitle="Real-time commuter updates from the SakAI community."
        action={
          <Button>
            <Plus size={18} /> Create Post
          </Button>
        }
      />

      <div className="lg:grid lg:grid-cols-1 lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <div className="relative min-w-0 flex-1">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 z-10 -translate-y-1/2 text-[var(--text-gray)]"
                size={18}
              />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search threads…"
                className="!rounded-xl !py-3 pl-11"
              />
            </div>
            <div className="relative shrink-0 sm:w-44">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-xl border border-[var(--light-gray)] bg-white py-3 pr-10 pl-3.5 text-sm font-semibold text-[var(--navy)] outline-none focus:border-[var(--navy)]"
                aria-label="Sort threads"
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[var(--text-gray)]"
                size={18}
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setCategory("All")}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                category === "All"
                  ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                  : "border-[var(--light-gray)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"
              }`}
            >
              <LayoutGrid size={14} />
              All
            </button>
            {communityCategories.map((c) => {
              const active = category === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    active
                      ? "border-[#e6a800] bg-[var(--gold)] text-[var(--navy)]"
                      : "border-[var(--light-gray)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"
                  }`}
                >
                  <CategoryIcon name={c} />
                  {c}
                </button>
              )
            })}
          </div>

          <div className="space-y-2.5">
            {filtered.map((t) => {
              const net = t.upvotes - t.downvotes
              const badge = categoryBadgeClass[t.category] ?? categoryBadgeClass.General
              return (
                <article
                  key={t.id}
                  className="flex gap-2 rounded-2xl border border-[var(--light-gray)] bg-white p-3 shadow-sm transition hover:border-[var(--gold)]/80 sm:gap-3 sm:p-4"
                >
                  <div
                    className="flex w-11 shrink-0 flex-col items-center gap-0.5 pt-0.5 sm:w-12"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      className="rounded-lg p-0.5 text-[var(--text-gray)] transition hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                      aria-label="Upvote"
                    >
                      <ArrowBigUp size={22} strokeWidth={1.75} />
                    </button>
                    <span className="font-heading text-sm font-bold tabular-nums text-[var(--navy)]">{net}</span>
                    <button
                      type="button"
                      className="rounded-lg p-0.5 text-[var(--text-gray)] transition hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                      aria-label="Downvote"
                    >
                      <ArrowBigDown size={22} strokeWidth={1.75} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedId(t.id)}
                    className="min-w-0 flex-1 cursor-pointer rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                  >
                    <div className="flex gap-3">
                      <div className="min-w-0 flex-1">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badge}`}
                        >
                          <CategoryIcon name={t.category} />
                          {t.category}
                        </span>
                        <h2 className="font-heading mt-2 text-base font-bold leading-snug text-[var(--navy)] sm:text-lg">
                          {t.title}
                        </h2>
                        <p className="mt-1 flex items-start gap-1 text-xs text-[var(--text-gray)]">
                          <MapPin size={13} className="mt-0.5 shrink-0 text-[var(--iloilo-blue)]" />
                          <span>{t.location}</span>
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--charcoal)]">{t.preview}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-bold text-white"
                            aria-hidden
                          >
                            {initials(t.author)}
                          </span>
                          <span className="text-xs font-semibold text-[var(--charcoal)]">{t.author}</span>
                          <span className="text-xs text-[var(--text-gray)]">· {t.postedAt}</span>
                          <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--text-gray)] sm:ml-0">
                            <MessageSquare size={14} className="text-[var(--iloilo-blue)]" />
                            {t.comments}
                          </span>
                        </div>
                      </div>
                      {t.thumbnail ? (
                        <div className="hidden shrink-0 sm:block">
                          <img
                            src={t.thumbnail}
                            alt=""
                            className="h-20 w-20 rounded-xl border border-[var(--light-gray)] object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                    </div>
                  </button>

                  <div className="flex shrink-0 flex-col items-end justify-between pt-0.5" onClick={(e) => e.stopPropagation()}>
                    {t.thumbnail ? (
                      <img
                        src={t.thumbnail}
                        alt=""
                        className="mb-2 h-14 w-14 rounded-lg border border-[var(--light-gray)] object-cover sm:hidden"
                        loading="lazy"
                      />
                    ) : (
                      <span className="sm:hidden" />
                    )}
                    <button
                      type="button"
                      className="rounded-lg p-1.5 text-[var(--text-gray)] transition hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                      aria-label="Post options"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          <Button variant="outline" className="w-full border-[var(--light-gray)] text-[var(--navy)] hover:bg-[var(--cream)]">
            Load more posts
          </Button>
        </div>

        <aside className="mt-8 min-w-0 space-y-5 lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm">
            <h2 className="font-heading text-sm font-bold text-[var(--navy)]">Community guidelines</h2>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[var(--charcoal)]">
              {communityGuidelines.map((line) => (
                <li key={line} className="leading-snug">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-[#f8e4b8] bg-[#fff8e6] p-5 shadow-sm">
            <p className="text-sm font-medium leading-relaxed text-[var(--charcoal)]">{communityModerationNotice}</p>
          </section>

          <section className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm">
            <h2 className="font-heading text-sm font-bold text-[var(--navy)]">Top contributors</h2>
            <ul className="mt-3 space-y-3">
              {communityTopContributors.map((u, i) => (
                <li key={u.id} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-xs font-bold text-[var(--navy)]">
                    {i + 1}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-xs font-bold text-white">
                    {initials(u.name)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[var(--charcoal)]">{u.name}</p>
                    <p className="text-xs text-[var(--text-gray)]">{u.points.toLocaleString()} pts</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
