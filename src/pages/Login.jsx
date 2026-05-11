import { ArrowRight, CircleUserRound, Eye, Globe, Lock, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import FareEstimatorStrip from "../components/FareEstimatorStrip"
import Input from "../components/Input"
import SakaiLogoMark from "../components/SakaiLogoMark"
import loginBackground from "@assets/LogInbackground.png"

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function InstagramMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <linearGradient id="loginIgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
      <path
        fill="url(#loginIgGrad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  )
}

function FacebookMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="relative isolate min-h-[100dvh] w-full overflow-x-hidden bg-[#f6f7fb]">
      {/* Full-viewport artwork */}
      <div
        className="fixed inset-0 -z-10 bg-[#f6f7fb] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginBackground})` }}
        aria-hidden
      />

      <div className="flex min-h-[100dvh] w-full flex-col">
        {/* Form sits in the “cream” zone on the right in the artwork */}
        <div className="flex flex-1 items-center justify-center px-4 py-8 sm:justify-end sm:px-8 sm:py-10 md:pr-12 lg:pr-20 xl:pr-28">
          <div className="w-full max-w-[420px] rounded-[22px] border border-[#e8eaef] bg-white/95 p-6 shadow-[0_20px_50px_-12px_rgba(10,31,68,0.22)] backdrop-blur-sm sm:p-8">
            <div className="mb-5">
              <SakaiLogoMark size="md" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">Welcome back!</h1>
            <p className="mt-2 text-sm text-[#6B7280]">Log in to continue your journey.</p>

            <div className="mt-6 space-y-3">
              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9CA3AF]"
                  strokeWidth={1.75}
                />
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Email or Phone Number"
                  className="!rounded-xl !py-3.5 pl-11"
                />
              </div>
              <div className="relative">
                <Lock
                  size={17}
                  className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9CA3AF]"
                  strokeWidth={1.75}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-[#9CA3AF] hover:text-[#0A1F44]"
                  aria-label="Show password"
                >
                  <Eye size={17} strokeWidth={1.75} />
                </button>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="!rounded-xl !py-3.5 pr-11 pl-11"
                />
              </div>
              <div className="flex items-center justify-between pt-1 text-xs text-[#6B7280]">
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-[#d1d5db] text-[#0A1F44]" />
                  Remember me
                </label>
                <button type="button" className="font-semibold text-[#0B4F8A] hover:underline">
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A1F44] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#081833]"
              >
                Log In
                <ArrowRight size={18} strokeWidth={2} />
              </button>

              <div className="relative py-2">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#E7EAF0]" />
                <span className="relative mx-auto block w-fit bg-white/95 px-3 text-xs font-medium text-[#9CA3AF]">
                  OR
                </span>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E7EAF0] bg-white py-3.5 text-sm font-semibold text-[#0A1F44] transition hover:bg-[#f9fafb]"
              >
                <GoogleMark />
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E7EAF0] bg-white py-3.5 text-sm font-semibold text-[#0A1F44] transition hover:bg-[#f9fafb]"
              >
                <FacebookMark />
                Continue with Facebook
              </button>

              <button
                type="button"
                onClick={() => navigate("/home")}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#f0e6d8] bg-[#FDF2E3] py-3.5 text-sm font-semibold text-[#0A1F44] shadow-sm transition hover:bg-[#f8e8d4]"
              >
                <CircleUserRound size={18} strokeWidth={1.75} />
                Continue as Guest
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-[#6B7280]">
              Don&apos;t have an account?{" "}
              <Link to="/home" className="font-semibold text-[#0B4F8A] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-8">
          <FareEstimatorStrip variant="login" />
        </div>

        <footer className="border-t border-white/40 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <SakaiLogoMark size="sm" />
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-6">
              <span className="cursor-default hover:text-[#0A1F44]">About Us</span>
              <span className="cursor-default hover:text-[#0A1F44]">How It Works</span>
              <span className="cursor-default hover:text-[#0A1F44]">Help Center</span>
              <span className="cursor-default hover:text-[#0A1F44]">Contact</span>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8eaef] bg-white text-[#1877F2] hover:bg-[#f6f7fb]"
                aria-label="Facebook"
              >
                <FacebookMark />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8eaef] bg-white hover:bg-[#f6f7fb]"
                aria-label="Instagram"
              >
                <InstagramMark />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8eaef] bg-white text-[#6B7280] hover:bg-[#f6f7fb]"
                aria-label="Web"
              >
                <Globe size={16} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
