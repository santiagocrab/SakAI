import {
  Bell,
  Bookmark,
  Calendar,
  Camera,
  ChevronDown,
  ChevronRight,
  Edit2,
  Globe,
  Heart,
  Key,
  Lock,
  LogOut,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react"
import { Link } from "react-router-dom"
import profileBot from "@assets/ProfileBot.png"
import Button from "../components/Button"

const savedRoutes = [
  { id: "r1", from: "SM City Iloilo", to: "WVSU Back Gate", time: "28 min", fare: "₱15.00", jeepneyClass: "bg-[#2563eb]" },
  { id: "r2", from: "Jaro Plaza", to: "Molo Church", time: "22 min", fare: "₱13.00", jeepneyClass: "bg-[#ea580c]" },
  { id: "r3", from: "Tagbak Terminal", to: "SM City Iloilo", time: "35 min", fare: "₱18.00", jeepneyClass: "bg-[#9333ea]" },
]

function JeepneyIcon({ className }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${className}`}
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-95">
        <path
          d="M4 14h16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM4 10h16l-1-4H5L4 10zm2-6h12l1 2H5l1-2z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="7.5" cy="17" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="17" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}

export default function Profile() {
  const isGuest = false

  return (
    <div className="mx-auto max-w-6xl space-y-5 pb-4 md:space-y-6">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* User information — grid avoids overlap; single divider between columns */}
        <section className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
          {/* Stack until xl: at lg the card sits in a 2-col page grid (~half width) — a 3-col flex row squeezes the middle to ~0px. */}
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-8">
            {/* Avatar */}
            <div className="flex shrink-0 justify-center xl:justify-start">
              <div className="relative shrink-0">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-[var(--cream)] bg-[var(--cream)] shadow-inner ring-2 ring-[var(--light-gray)] sm:h-32 sm:w-32">
                  {isGuest ? (
                    <div className="flex h-full w-full items-center justify-center bg-[var(--navy)] text-white">
                      <User size={48} strokeWidth={1.25} />
                    </div>
                  ) : (
                    <img
                      src="https://i.pravatar.cc/256?img=12"
                      alt=""
                      className="h-full w-full object-cover"
                      width={128}
                      height={128}
                    />
                  )}
                </div>
                <button
                  type="button"
                  className="absolute right-0 bottom-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[var(--navy)] text-white shadow-md transition hover:bg-[var(--midnight-blue)]"
                  aria-label="Change profile photo"
                >
                  <Camera size={16} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Identity + contacts — full width when stacked; grows only beside meta on xl+ */}
            <div className="min-w-0 w-full space-y-5 xl:flex-1 xl:min-w-[min(100%,20rem)]">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-heading max-w-full text-xl font-bold text-[var(--navy)] sm:text-2xl">
                  {isGuest ? "Guest commuter" : "Juan Dela Cruz"}
                </h2>
                <button
                  type="button"
                  className="shrink-0 rounded-lg p-1.5 text-[var(--iloilo-blue)] transition hover:bg-[var(--cream)]"
                  aria-label="Edit name"
                >
                  <Edit2 size={18} strokeWidth={2} />
                </button>
              </div>

              <ul className="space-y-3 text-sm text-[var(--charcoal)]">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[var(--text-gray)]" strokeWidth={2} />
                  <span className="min-w-0 flex-1 leading-snug [overflow-wrap:anywhere] [word-break:normal]">
                    {isGuest ? "—" : "juan.delacruz@email.com"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[var(--text-gray)]" strokeWidth={2} />
                  <span className="min-w-0 flex-1 whitespace-nowrap leading-snug">{isGuest ? "—" : "0917 123 4567"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--text-gray)]" strokeWidth={2} />
                  <span className="min-w-0 flex-1 leading-snug [overflow-wrap:anywhere] [word-break:normal]">Iloilo City, Philippines</span>
                </li>
              </ul>

              <div
                className={`inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
                  isGuest
                    ? "border-[var(--light-gray)] bg-[var(--light-gray)]/60 text-[var(--navy)]"
                    : "border-amber-200 bg-amber-50 text-amber-900"
                }`}
              >
                <ShieldCheck size={15} className="shrink-0" strokeWidth={2} />
                {isGuest ? "Guest" : "Registered User"}
              </div>
            </div>

            {/* Account meta — own row until xl; fixed width sidebar only when there is room */}
            <div className="w-full shrink-0 space-y-5 border-t border-[var(--light-gray)] pt-6 xl:w-64 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">Preferred language</p>
                <div className="relative mt-2">
                  <Globe
                    size={17}
                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--iloilo-blue)]"
                    strokeWidth={2}
                  />
                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[var(--text-gray)]"
                  />
                  <select
                    aria-label="Preferred language"
                    className="w-full max-w-full cursor-pointer appearance-none rounded-xl border border-[var(--light-gray)] bg-[var(--cream)] py-2.5 pr-10 pl-10 text-sm font-semibold text-[var(--navy)] outline-none focus:border-[var(--navy)]"
                    defaultValue="en"
                  >
                    <option value="en">English</option>
                    <option value="fil">Filipino / Hiligaynon</option>
                  </select>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">Account</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--navy)]">
                  <User size={17} className="shrink-0 text-[var(--iloilo-blue)]" strokeWidth={2} />
                  <span className="min-w-0 leading-snug">{isGuest ? "Guest session" : "Personal commuter account"}</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray)]">Member since</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--navy)]">
                  <Calendar size={17} className="shrink-0 text-[var(--iloilo-blue)]" strokeWidth={2} />
                  <span className="whitespace-nowrap">{isGuest ? "—" : "May 15, 2024"}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome / mascot */}
        <section className="relative min-h-[200px] overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-white p-5 pb-36 shadow-sm sm:min-h-0 sm:p-6 sm:pb-6 md:pb-6">
          <div className="flex flex-col gap-4 pr-0 sm:min-h-[140px] sm:pr-44 md:pr-48">
            <h3 className="font-heading text-lg font-bold text-[var(--navy)] sm:text-xl">
              {isGuest ? "Welcome to SakAI" : "You're all set! 🎉"}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--charcoal)] sm:text-base">
              {isGuest
                ? "Create an account to save routes, join the community, and get the best commute experience in Iloilo City."
                : "Thanks for being part of SakAI. You can now save routes, join the community, and get the best commute experience in Iloilo City."}
            </p>
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-0 h-40 w-40 sm:h-48 sm:w-48 md:right-2 md:h-52 md:w-52">
            <img src={profileBot} alt="" className="h-full w-full object-contain object-bottom" />
          </div>
        </section>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Saved routes */}
        <section className="rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-heading flex items-center gap-2 text-lg font-bold text-[var(--navy)]">
              <Bookmark size={20} className="text-[var(--iloilo-blue)]" strokeWidth={2} />
              Saved Routes
            </h3>
            <button type="button" className="text-sm font-semibold text-[var(--iloilo-blue)] hover:underline">
              View all
            </button>
          </div>
          <ul className="mt-4 divide-y divide-[var(--light-gray)] rounded-xl border border-[var(--light-gray)] bg-white">
            {savedRoutes.map((r) => (
              <li key={r.id} className="flex items-center gap-3 p-4 first:rounded-t-xl last:rounded-b-xl">
                <JeepneyIcon className={r.jeepneyClass} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--navy)]">
                    <span>{r.from}</span>
                    <span className="mx-1.5 text-[var(--text-gray)]">→</span>
                    <span>{r.to}</span>
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-gray)]">
                    <span>{r.time}</span>
                    <span className="mx-2 text-[var(--light-gray)]">·</span>
                    <span>{r.fare}</span>
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[var(--route-red)] transition hover:bg-red-50"
                    aria-label="Favorite route"
                  >
                    <Heart size={20} fill="currentColor" strokeWidth={0} />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[var(--text-gray)] transition hover:bg-[var(--cream)]"
                    aria-label="Route options"
                  >
                    <MoreVertical size={20} strokeWidth={2} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Account & security */}
        <section className="flex flex-col rounded-2xl border border-[var(--light-gray)] bg-white p-5 shadow-sm sm:p-6">
          <h3 className="font-heading flex items-center gap-2 text-lg font-bold text-[var(--navy)]">
            <Lock size={20} className="text-[var(--iloilo-blue)]" strokeWidth={2} />
            Account &amp; Security
          </h3>
          <nav className="mt-4 flex flex-col divide-y divide-[var(--light-gray)] rounded-xl border border-[var(--light-gray)]">
            {[
              { label: "Change Password", icon: Key },
              { label: "Email & Phone", icon: Mail },
              { label: "Notification Settings", icon: Bell },
              { label: "Privacy Settings", icon: Shield },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-semibold text-[var(--charcoal)] transition first:rounded-t-xl last:rounded-b-xl hover:bg-[var(--cream)]"
              >
                <Icon size={18} className="shrink-0 text-[var(--text-gray)]" strokeWidth={2} />
                <span className="flex-1">{label}</span>
                <ChevronRight size={18} className="shrink-0 text-[var(--text-gray)]" />
              </button>
            ))}
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--cream)]"
            >
              <Shield size={18} className="shrink-0 text-[var(--iloilo-blue)]" strokeWidth={2} />
              <span className="flex-1">Admin · moderation</span>
              <ChevronRight size={18} className="shrink-0 text-[var(--text-gray)]" />
            </Link>
          </nav>
          <Button
            variant="outline"
            className="mt-5 w-full border-[var(--route-red)] text-[var(--route-red)] hover:bg-red-50"
          >
            <LogOut size={18} /> Log out
          </Button>
        </section>
      </div>
    </div>
  )
}
