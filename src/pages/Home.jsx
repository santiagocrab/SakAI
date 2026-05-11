import { motion } from "framer-motion"
import {
  Accessibility,
  ArrowLeftRight,
  Bookmark,
  Clock,
  Compass,
  Heart,
  LocateFixed,
  MessageCircle,
  Moon,
  MoreHorizontal,
  Navigation,
  PhilippinePeso,
  Search,
  Sparkles,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import heroBackground from "@assets/backgroundHome.png"
import profileBot from "@assets/ProfileBot.png"
import Button from "../components/Button"
import SakaiLogoMark from "../components/SakaiLogoMark"
import { homeStats, navItems } from "../data/mockData"

const statIcon = {
  users: Users,
  chat: MessageCircle,
  bookmark: Bookmark,
  heart: Heart,
}

const statTone = {
  blue: "bg-sky-100 text-sky-700",
  gold: "bg-amber-100 text-amber-800",
  green: "bg-emerald-100 text-emerald-800",
  red: "bg-red-100 text-red-700",
}

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

const heroFade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const routeBarReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

const quickTools = [
  { label: "More Options", icon: MoreHorizontal },
  { label: "First Timer Mode", icon: Compass },
  { label: "Accessibility Mode", icon: Accessibility },
  { label: "Nighttime Check", icon: Moon },
  { label: "Fare Estimator", icon: PhilippinePeso },
]

export default function Home() {
  return (
    <div className="relative -mx-4 space-y-0 pb-6 md:-mx-6">
      <section className="relative min-h-[min(100svh,960px)] overflow-hidden rounded-b-[2rem] shadow-[0_16px_48px_rgba(6,26,51,0.14)] md:rounded-b-[2.5rem]">
        {/* Artwork */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt=""
            className="h-full w-full scale-[1.03] object-cover object-[center_24%] sm:object-[center_20%] lg:object-[center_30%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#fff9ef] via-[#fff9ef]/92 to-transparent sm:via-[#fff9ef]/65 md:max-w-[62%] md:via-[#fff9ef]/35 md:to-transparent lg:max-w-[55%]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#061a33]/92 via-[#061a33]/25 to-[#061a33]/05 sm:from-[#061a33]/88"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_88%_42%,rgba(248,185,30,0.14)_0%,transparent_52%)]"
            aria-hidden
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/15" aria-hidden />
        </div>

        {/* Hero content + mascot */}
        <div className="relative z-[1] mx-auto grid min-h-[min(88svh,860px)] max-w-6xl grid-cols-1 items-end gap-6 px-4 pb-36 pt-12 sm:gap-8 sm:px-6 sm:pb-40 sm:pt-16 md:min-h-[min(90svh,880px)] md:pb-44 md:pt-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(240px,440px)] lg:items-end lg:gap-4 lg:pb-48">
          <motion.div
            className="relative w-full max-w-xl justify-self-start rounded-[1.75rem] border border-white/55 bg-white/[0.22] p-6 shadow-[0_24px_80px_-20px_rgba(6,26,51,0.28)] ring-1 ring-white/40 backdrop-blur-2xl sm:rounded-[2rem] sm:p-8 md:p-10 md:ring-white/50"
            initial="hidden"
            animate="show"
            variants={heroContainer}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/40 to-transparent opacity-70" />
            <div className="relative">
              <motion.div variants={heroFade}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/12 bg-white/95 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--navy)] shadow-sm backdrop-blur-md sm:px-4">
                  <Sparkles size={15} className="text-[#FFB800]" aria-hidden />
                  SakAI is here to answer
                </span>
              </motion.div>
              <motion.h1
                variants={heroFade}
                className="font-heading mt-5 text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.06] tracking-tight text-[#0f1a2e] drop-shadow-[0_1px_0_rgba(255,255,255,0.5)] sm:mt-6 sm:leading-[1.05]"
              >
                Ano sakyan ko?
              </motion.h1>
              <motion.p
                variants={heroFade}
                className="mt-3 text-lg font-bold text-[var(--navy)] sm:mt-4 sm:text-xl md:text-2xl md:leading-snug"
              >
                Your AI-powered Iloilo commute guide.
              </motion.p>
              <motion.p
                variants={heroFade}
                className="mt-3 max-w-md text-sm leading-relaxed text-[#172033]/88 sm:mt-4 sm:text-base md:text-[1.05rem]"
              >
                Find jeepney routes, fare estimates, transfers, and travel alerts around Iloilo City.
              </motion.p>
              <motion.div variants={heroFade} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Link to="/plan-route" className="inline-flex w-full sm:w-auto">
                  <Button className="w-full justify-center !rounded-2xl !px-8 !py-3.5 text-base shadow-[0_10px_32px_rgba(248,185,30,0.42)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(248,185,30,0.5)] sm:!py-4">
                    Plan My Route <Navigation size={18} strokeWidth={2.25} />
                  </Button>
                </Link>
                <Link to="/plan-route" className="inline-flex w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full rounded-2xl border-2 border-[var(--navy)]/14 bg-white/95 px-8 py-3.5 text-base font-bold text-[var(--navy)] shadow-md backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#FFB800]/60 hover:bg-white sm:py-4"
                  >
                    Continue as Guest
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden h-[min(42vh,380px)] justify-self-end lg:block"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={profileBot}
              alt="SakAI commute buddy"
              className="absolute right-0 bottom-0 max-h-[min(52vh,440px)] w-auto max-w-[100%] object-contain object-bottom [filter:drop-shadow(0_28px_48px_rgba(6,26,51,0.4))]"
              width={440}
              height={440}
            />
          </motion.div>

          {/* Mobile mascot peek */}
          <motion.div
            className="pointer-events-none relative -mt-4 flex justify-end justify-self-end lg:hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <img
              src={profileBot}
              alt=""
              className="h-36 w-auto object-contain opacity-95 [filter:drop-shadow(0_16px_28px_rgba(6,26,51,0.25))] sm:h-44"
              width={200}
              height={200}
            />
          </motion.div>
        </div>

        {/* Route planning bar */}
        <motion.div
          className="relative z-[2] mx-auto -mt-8 max-w-5xl px-4 sm:-mt-12 sm:px-6"
          initial="hidden"
          animate="show"
          variants={routeBarReveal}
        >
          <div className="rounded-2xl border border-white/25 bg-[var(--navy)] p-4 shadow-[0_24px_56px_rgba(6,26,51,0.5)] sm:p-5 md:rounded-3xl md:p-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-3">
              <div className="group relative min-h-[56px] flex-1 rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/15 transition focus-within:bg-white/[0.14] focus-within:ring-2 focus-within:ring-[#FFB800]/45">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  From
                  <button
                    type="button"
                    className="ml-auto rounded-lg p-1.5 text-white/70 transition hover:bg-white/12 hover:text-white"
                    aria-label="Use current location"
                  >
                    <LocateFixed size={17} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Where are you starting?"
                  className="mt-1 w-full border-0 bg-transparent text-[15px] font-semibold text-white placeholder:text-white/45 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-center justify-center lg:pt-7">
                <button
                  type="button"
                  className="rounded-full border border-white/25 bg-white/10 p-2.5 text-[#FFB800] shadow-inner transition hover:scale-105 hover:bg-white/18 active:scale-95"
                  aria-label="Swap from and to"
                >
                  <ArrowLeftRight size={19} strokeWidth={2.25} />
                </button>
              </div>

              <div className="group relative min-h-[56px] flex-1 rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/15 transition focus-within:bg-white/[0.14] focus-within:ring-2 focus-within:ring-[#FFB800]/45">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--route-red)] shadow-[0_0_8px_rgba(217,35,35,0.55)]" />
                  To
                  <button
                    type="button"
                    className="ml-auto rounded-lg p-1.5 text-white/70 transition hover:bg-white/12 hover:text-white"
                    aria-label="Locate destination"
                  >
                    <LocateFixed size={17} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="mt-1 w-full border-0 bg-transparent text-[15px] font-semibold text-white placeholder:text-white/45 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex min-w-0 flex-col gap-2 lg:w-52">
                <label className="text-[10px] font-bold uppercase tracking-wide text-[#FFB800]">Route preference</label>
                <div className="flex min-h-[48px] flex-1 items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 transition focus-within:ring-2 focus-within:ring-[#FFB800]/45">
                  <Clock size={17} className="shrink-0 text-white/75" strokeWidth={2} />
                  <select className="w-full cursor-pointer border-0 bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-0 [&>option]:text-[var(--navy)]">
                    <option>Fastest Route</option>
                    <option>Cheapest fare</option>
                    <option>Fewest transfers</option>
                    <option>Less walking</option>
                  </select>
                </div>
              </div>

              <div className="flex items-stretch lg:w-auto">
                <Link
                  to="/plan-route"
                  className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 text-sm font-extrabold tracking-wide text-[var(--navy)] shadow-[0_8px_24px_rgba(248,185,30,0.35)] transition hover:-translate-y-0.5 hover:brightness-[1.03] hover:shadow-[0_12px_28px_rgba(248,185,30,0.45)] active:translate-y-0 lg:min-w-[150px] lg:flex-none"
                >
                  <Search size={19} strokeWidth={2.75} />
                  Find Route
                </Link>
              </div>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-white/50 lg:hidden">Quick tools</p>
              <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                {quickTools.map(({ label, icon: Icon }) => (
                  <Link
                    key={label}
                    to="/plan-route"
                    className="inline-flex min-h-[44px] shrink-0 snap-start items-center gap-2 rounded-full bg-white/12 px-4 py-2.5 text-sm font-semibold text-white/95 ring-1 ring-white/15 transition hover:bg-white/20 hover:ring-white/25 active:scale-[0.98] sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-xs"
                  >
                    <Icon size={17} strokeWidth={2} className="shrink-0 opacity-90" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features + stats */}
      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:mt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--navy)]">SakAI features</h2>
            <p className="mt-2 text-sm text-[var(--text-gray)]">Everything you need for confident commuting in Iloilo.</p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Smart Route Planning",
                  body: "Pick origin and destination, compare jeepney options, and see walking segments clearly.",
                  icon: Navigation,
                  ring: "ring-sky-200/80",
                  iconBg: "bg-sky-100 text-sky-700",
                },
                {
                  title: "AI Commute Assistant",
                  body: "Ask in plain language — fares, landmarks, transfers, and what to tell the driver.",
                  icon: MessageCircle,
                  ring: "ring-amber-200/80",
                  iconBg: "bg-amber-100 text-amber-800",
                },
                {
                  title: "Community Updates",
                  body: "Crowdsourced traffic, closures, and route changes from fellow Iloilo commuters.",
                  icon: Users,
                  ring: "ring-red-200/80",
                  iconBg: "bg-red-100 text-red-700",
                },
              ].map(({ title, body, icon: Icon, iconBg, ring }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex gap-4 rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm ring-2 ${ring} transition hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[var(--navy)]">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-gray)]">{body}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[var(--navy)]">SakAI in numbers</h2>
            <p className="mt-2 text-sm text-[var(--text-gray)]">Growing with every ride shared.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {homeStats.map((s, i) => {
                const Icon = statIcon[s.icon] || Users
                return (
                  <motion.article
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col rounded-2xl border border-[var(--light-gray)] bg-white p-4 shadow-sm transition hover:border-[var(--gold)]/40 hover:shadow-md sm:p-5"
                  >
                    <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${statTone[s.accent]}`}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <p className="font-heading text-2xl font-extrabold text-[var(--navy)] sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-[var(--text-gray)] sm:text-sm">{s.label}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-[var(--light-gray)] px-4 pt-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <SakaiLogoMark size="md" />
            <p className="mt-3 text-sm font-medium text-[var(--navy)]">Developed by AMBOT.ai</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-gray)]">
              SakAI helps Ilonggos move with confidence — routes, fares, and real commuter signals in one place.
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-bold text-[var(--navy)]">Quick links</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[var(--text-gray)] transition hover:text-[var(--navy)] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold text-[var(--navy)]">Contact us</p>
            <ul className="mt-3 space-y-2.5 text-sm text-[var(--text-gray)]">
              <li>
                <a href="mailto:hello@ambot.ai" className="transition hover:text-[var(--navy)] hover:underline">
                  hello@ambot.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-bold text-white">
                  f
                </span>
                <span>Facebook — AMBOT.ai / SakAI (placeholder)</span>
              </li>
              <li>Iloilo City, Philippines</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 pb-4 text-center text-xs text-[var(--text-gray)]">
          © {new Date().getFullYear()} AMBOT.ai · SakAI
        </p>
      </footer>
    </div>
  )
}
