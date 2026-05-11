import { useEffect, useRef } from "react"

/** Approximate Iloilo City — SM City & WVSU area (prototype polylines) */
const SM = [10.71325, 122.55145]
const WVSU = [10.71505, 122.56385]
const CENTER = [10.7142, 122.5575]

const ROUTE_PATHS = [
  { color: "#2563EB", weight: 5, coords: [SM, [10.7138, 122.5542], [10.7144, 122.5578], [10.7149, 122.561], WVSU] },
  { color: "#E63946", weight: 4, coords: [SM, [10.7126, 122.553], [10.713, 122.5565], [10.7136, 122.5595], WVSU] },
  { color: "#9333EA", weight: 4, coords: [SM, [10.7148, 122.5528], [10.7162, 122.5555], [10.716, 122.5602], WVSU] },
  { color: "#16A34A", weight: 4, coords: [SM, [10.712, 122.552], [10.7115, 122.556], [10.7128, 122.5615], WVSU] },
  { color: "#FFB800", weight: 3, opacity: 0.9, coords: [SM, [10.7155, 122.5505], [10.717, 122.554], [10.7165, 122.558], WVSU] },
  { color: "#0D9488", weight: 3, dashArray: "10 8", coords: [SM, [10.711, 122.5545], [10.7105, 122.559], [10.7125, 122.5625], WVSU] },
]

export default function RouteMap() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const userMarkerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false

    const run = async () => {
      const [leafletMod] = await Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css")])
      const L = leafletMod.default
      if (cancelled || !containerRef.current) return

      const map = L.map(containerRef.current, {
        zoomControl: false,
        scrollWheelZoom: true,
      }).setView(CENTER, 14)

      mapRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      ROUTE_PATHS.forEach((r) => {
        L.polyline(r.coords, {
          color: r.color,
          weight: r.weight,
          opacity: r.opacity ?? 0.82,
          dashArray: r.dashArray,
          lineJoin: "round",
          lineCap: "round",
        }).addTo(map)
      })

      L.circleMarker(SM, {
        radius: 11,
        color: "#1e40af",
        fillColor: "#3b82f6",
        fillOpacity: 1,
        weight: 3,
      })
        .addTo(map)
        .bindTooltip("SM City Iloilo", { direction: "top" })

      L.circleMarker(WVSU, {
        radius: 11,
        color: "#b91c1c",
        fillColor: "#ef4444",
        fillOpacity: 1,
        weight: 3,
      })
        .addTo(map)
        .bindTooltip("WVSU Back Gate", { direction: "top" })

      map.fitBounds(L.latLngBounds(ROUTE_PATHS.flatMap((r) => r.coords)), { padding: [36, 36] })

      window.setTimeout(() => map.invalidateSize(), 120)
    }

    run()

    const onResize = () => mapRef.current?.invalidateSize()
    window.addEventListener("resize", onResize)

    return () => {
      cancelled = true
      window.removeEventListener("resize", onResize)
      if (userMarkerRef.current) {
        userMarkerRef.current.remove()
        userMarkerRef.current = null
      }
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  const zoom = (delta) => {
    const m = mapRef.current
    if (!m) return
    m.setZoom(m.getZoom() + delta)
  }

  const locate = async () => {
    const m = mapRef.current
    if (!m) return

    const { default: L } = await import("leaflet")

    if (userMarkerRef.current) {
      userMarkerRef.current.remove()
      userMarkerRef.current = null
    }

    if (!navigator.geolocation) {
      m.flyTo(SM, 15)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        m.flyTo([latitude, longitude], 15)
        userMarkerRef.current = L.circleMarker([latitude, longitude], {
          radius: 8,
          color: "#059669",
          fillColor: "#34d399",
          fillOpacity: 0.9,
          weight: 2,
        })
          .addTo(m)
          .bindTooltip("You are here", { direction: "top" })
      },
      () => m.flyTo(SM, 15),
      { enableHighAccuracy: false, timeout: 6000 },
    )
  }

  return (
    <div className="relative h-[min(52vh,520px)] min-h-[280px] w-full overflow-hidden rounded-2xl border border-[var(--light-gray)] bg-[#e8edf5] shadow-inner md:min-h-[440px]">
      <div ref={containerRef} className="absolute inset-0 z-0 [&_.leaflet-control-attribution]:text-[10px] [&_.leaflet-control-attribution]:bg-white/90" />

      <div className="pointer-events-none absolute inset-0 z-[400] shadow-[inset_0_0_80px_rgba(6,26,51,0.06)]" aria-hidden />

      <div className="absolute top-3 right-3 z-[500] flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => zoom(1)}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--light-gray)] bg-white text-lg font-bold text-[var(--navy)] shadow-md transition hover:bg-[var(--cream)]"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => zoom(-1)}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--light-gray)] bg-white text-lg font-bold text-[var(--navy)] shadow-md transition hover:bg-[var(--cream)]"
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          type="button"
          onClick={locate}
          className="pointer-events-auto mt-1 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--light-gray)] bg-white text-[var(--navy)] shadow-md transition hover:bg-[var(--cream)]"
          aria-label="Current location"
          title="Current location"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
        </button>
      </div>
    </div>
  )
}
