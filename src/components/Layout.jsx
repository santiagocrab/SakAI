import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Home, MapPinned, MessageCircle, Sun, User } from "lucide-react"
import { navItems } from "../data/mockData"
import FloatingChatbot from "./FloatingChatbot"
import SakaiLogoMark from "./SakaiLogoMark"

const navIcons = {
  "/home": Home,
  "/plan-route": MapPinned,
  "/community": MessageCircle,
  "/profile": User,
}

export default function Layout({ children }) {
  const location = useLocation()
  const showChatbot = location.pathname !== "/profile"
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--cream)] pb-20 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-[var(--light-gray)] bg-white/95 shadow-sm backdrop-blur-md">
        <div className="relative mx-auto flex min-h-[56px] w-full max-w-6xl items-center justify-between gap-2 px-4 py-2.5 md:px-6">
          <Link to="/home" className="z-20 flex shrink-0 flex-col gap-0" onClick={() => setMenuOpen(false)}>
            <SakaiLogoMark size="sm" showTagline />
          </Link>

          <nav className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex">
            <div className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const Icon = navIcons[item.path] || Home
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 rounded-xl border-b-2 px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "border-[#FFB800] text-[var(--navy)]"
                          : "border-transparent text-[var(--text-gray)] hover:text-[var(--navy)]"
                      }`
                    }
                  >
                    <Icon size={17} strokeWidth={2} />
                    {item.label}
                  </NavLink>
                )
              })}
            </div>
          </nav>

          <div className="z-20 flex items-center gap-2 md:gap-4">
            <div className="hidden items-center gap-2 text-sm text-[var(--charcoal)] lg:flex">
              <Sun size={18} className="shrink-0 text-[#FFB800]" />
              <span>
                <span className="font-medium text-[var(--navy)]">Good morning!</span>{" "}
                <span className="text-[var(--text-gray)]">Guest</span>
              </span>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--light-gray)] bg-[var(--cream)] text-[var(--navy)] shadow-sm transition hover:border-[#FFB800]"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                aria-label="Account menu"
              >
                <User size={20} strokeWidth={1.75} />
              </button>
              {menuOpen ? (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-40 cursor-default bg-black/10 md:bg-transparent"
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                  />
                  <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-[var(--light-gray)] bg-white py-1 text-sm shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--cream)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/plan-route"
                      className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--cream)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Plan Route
                    </Link>
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-left text-[var(--route-red)] hover:bg-red-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Log out
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-8">{children}</main>

      <nav className="fixed right-0 bottom-0 left-0 z-30 border-t border-[var(--light-gray)] bg-white px-2 py-2 shadow-[0_-4px_20px_rgba(6,26,51,0.06)] md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-4 gap-1">
          {navItems.map((item) => {
            const Icon = navIcons[item.path] || Home
            const short = item.label.split(" ")[0]
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center rounded-xl px-1 py-2 text-[10px] font-semibold ${isActive ? "text-[var(--navy)]" : "text-[var(--text-gray)]"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} strokeWidth={isActive ? 2.25 : 1.75} className={isActive ? "text-[#FFB800]" : ""} />
                    {short}
                  </>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>

      {showChatbot ? <FloatingChatbot /> : null}
    </div>
  )
}
