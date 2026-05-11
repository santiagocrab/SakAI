/** Main app navigation (navbar + mobile bottom bar) */
export const navItems = [
  { label: "Home", path: "/home" },
  { label: "Plan Route", path: "/plan-route" },
  { label: "Community", path: "/community" },
  { label: "Profile", path: "/profile" },
]

/** Home dashboard “SakAI in Numbers” */
export const homeStats = [
  { id: "searches", label: "Route Searches", value: "1,250+", icon: "users", accent: "blue" },
  { id: "updates", label: "Community Updates", value: "430+", icon: "chat", accent: "gold" },
  { id: "saved", label: "Saved Routes", value: "820+", icon: "bookmark", accent: "green" },
  { id: "rating", label: "Rating", value: "4.8 / 5", icon: "heart", accent: "red" },
]

/** Plan Route map legend (matches prototype colors) */
export const planMapLegend = [
  { id: "mand", name: "Mandurriao — City Proper", color: "#E63946" },
  { id: "lapaz", name: "La Paz Route", color: "#9333EA" },
  { id: "jaro", name: "Jaro Route", color: "#16A34A" },
  { id: "molo", name: "Molo Route", color: "#FFB800" },
  { id: "sm", name: "SM City Route", color: "#2563EB" },
  { id: "div", name: "Diversion Route", color: "#0D9488" },
]

/** Recommended route cards (Plan Route page) */
export const planRouteCards = [
  {
    id: "r1",
    recommended: true,
    routeLabel: "Via Mandurriao — La Paz",
    code: "MAND-LPZ 02",
    summary: "SM City Iloilo → Mandurriao → La Paz corridor → WVSU Back Gate.",
    time: "28 min",
    fare: "₱15.00",
    transfers: 0,
    walkM: "250 m",
    transferTag: "Direct ride, no transfers",
    transferTone: "green",
  },
  {
    id: "r2",
    recommended: false,
    routeLabel: "Via Diversion Road",
    code: "DIV-LOOP 08",
    summary: "SM City → Diversion → short transfer at Jaro rotunda → WVSU perimeter.",
    time: "34 min",
    fare: "₱18.00",
    transfers: 1,
    walkM: "180 m",
    transferTag: "1 transfer",
    transferTone: "amber",
  },
  {
    id: "r3",
    recommended: false,
    routeLabel: "Via Molo — City Proper",
    code: "MOLO-CP 05",
    summary: "SM City → Molo loop → City Proper → walk segment to WVSU side gate.",
    time: "41 min",
    fare: "₱17.00",
    transfers: 1,
    walkM: "320 m",
    transferTag: "1 transfer",
    transferTone: "amber",
  },
]

/** @deprecated use planRouteCards */
export const planRouteResults = planRouteCards

/** Reddit-style community threads (verification is admin-only; not shown on Community) */
export const communityThreads = [
  {
    id: "t1",
    title: "Heavy traffic near Diversion Road",
    category: "Traffic",
    location: "Diversion Road, Iloilo City",
    author: "iloilo_rider",
    postedAt: "2h ago",
    sortKey: 2,
    comments: 24,
    upvotes: 128,
    downvotes: 4,
    verification: "Verified",
    thumbnail: "https://picsum.photos/seed/sakai-t1/160/160",
    preview: "Multiple lanes slow both directions. Expect +10–15 min if heading to Mandurriao.",
    body: "Multiple lanes slow both directions near the U-turn slot. Jeepneys are stacking at the merge. If you are going to Mandurriao, consider cutting through smaller streets after SM.",
  },
  {
    id: "t2",
    title: "Temporary rerouting near City Proper",
    category: "Rerouting",
    location: "City Proper, Iloilo City",
    author: "commuter_ko",
    postedAt: "5h ago",
    sortKey: 5,
    comments: 11,
    upvotes: 56,
    downvotes: 2,
    verification: "Community Report",
    thumbnail: "https://picsum.photos/seed/sakai-t2/160/160",
    preview: "Some Jaro routes are skipping one block due to one-way adjustment.",
    body: "Some Jaro routes are skipping one block due to one-way adjustment. Conductors are announcing alternate drop-off near public market side streets.",
  },
  {
    id: "t3",
    title: "Construction near Jaro Plaza",
    category: "Construction",
    location: "Jaro Plaza, Iloilo City",
    author: "student_wvsu",
    postedAt: "1d ago",
    sortKey: 26,
    comments: 7,
    upvotes: 34,
    downvotes: 1,
    verification: "Pending",
    thumbnail: null,
    preview: "Sidewalk work narrows the waiting area. Be careful when boarding during rush hour.",
    body: "Sidewalk work narrows the waiting area. Be careful when boarding during rush hour. City crew said work should finish this weekend.",
  },
  {
    id: "t4",
    title: "Flooding reported near Molo area",
    category: "Flooding",
    location: "Molo, Iloilo City",
    author: "rain_watch",
    postedAt: "1d ago",
    sortKey: 27,
    comments: 19,
    upvotes: 89,
    downvotes: 3,
    verification: "Community Report",
    thumbnail: "https://picsum.photos/seed/sakai-t4/160/160",
    preview: "Ankle-deep water on side streets after heavy rain. Some jeepneys are taking alternate roads.",
    body: "Ankle-deep water on side streets after heavy rain. Some jeepneys are taking alternate roads. Check updates before leaving.",
  },
  {
    id: "t5",
    title: "Reduced jeepney trips after 9 PM",
    category: "Suspension",
    location: "Iloilo City",
    author: "night_shift",
    postedAt: "2d ago",
    sortKey: 50,
    comments: 42,
    upvotes: 201,
    downvotes: 6,
    verification: "Verified",
    thumbnail: "https://picsum.photos/seed/sakai-t5/160/160",
    preview: "Fewer units on several routes. Plan earlier return or confirm terminal availability.",
    body: "Fewer units on several routes after 9 PM, especially toward outer barangays. Plan earlier return or confirm terminal availability.",
  },
  {
    id: "t6",
    title: "Tagbak terminal bay reassignment this week",
    category: "Terminal Change",
    location: "Tagbak Terminal, Iloilo City",
    author: "terminal_watch",
    postedAt: "3h ago",
    sortKey: 3,
    comments: 8,
    upvotes: 45,
    downvotes: 0,
    verification: "Pending",
    thumbnail: "https://picsum.photos/seed/sakai-t6/160/160",
    preview: "Some routes moved to the east wing bays. Look for updated signage before boarding.",
    body: "Some routes moved to the east wing bays. Look for updated signage before boarding. Staff are on-site to assist commuters.",
  },
  {
    id: "t7",
    title: "Best time to avoid Diversion on weekdays?",
    category: "General",
    location: "Mandurriao, Iloilo City",
    author: "JuanD",
    postedAt: "45m ago",
    sortKey: 0,
    comments: 31,
    upvotes: 62,
    downvotes: 1,
    verification: "Verified",
    thumbnail: null,
    preview: "Commuting from Jaro to WVSU — when is traffic usually lightest?",
    body: "Commuting from Jaro to WVSU — when is traffic usually lightest? Open to tips from regulars.",
  },
]

export const communityGuidelines = [
  "Be respectful and helpful to fellow commuters.",
  "No fake news or rumors presented as confirmed facts.",
  "Include location and time when reporting road or route issues.",
  "Avoid sharing personal phone numbers or private details in public posts.",
]

export const communityTopContributors = [
  { id: "c1", name: "iloilo_rider", points: 2840 },
  { id: "c2", name: "night_shift", points: 2410 },
  { id: "c3", name: "rain_watch", points: 1980 },
  { id: "c4", name: "JuanD", points: 1655 },
  { id: "c5", name: "commuter_ko", points: 1420 },
]

export const communityModerationNotice =
  "Community posts are reviewed to prevent misinformation."

export const communityCommentsSample = [
  { id: "c1", author: "jeepney_fan", body: "Can confirm, waited 25 min at SM bay last night.", time: "1h ago" },
  { id: "c2", author: "ruta_ilonggo", body: "Driver said same until Sunday.", time: "45m ago" },
]

export const communityCategories = [
  "Traffic",
  "Rerouting",
  "Construction",
  "Flooding",
  "Suspension",
  "Terminal Change",
  "General",
]

/** Admin overview dashboard (prototype metrics) */
export const adminDateRangeLabel = "May 12 – May 18, 2024"

export const adminKpiCards = [
  { id: "users", label: "Total Users", value: "12,456", trend: 12.5, trendUp: true, icon: "users", accent: "text-blue-600 bg-blue-50" },
  { id: "routes", label: "Active Routes", value: "256", trend: 8.2, trendUp: true, icon: "bus", accent: "text-emerald-600 bg-emerald-50" },
  { id: "jeepneys", label: "Jeepneys", value: "1,124", trend: 5.7, trendUp: true, icon: "jeepney", accent: "text-orange-600 bg-orange-50" },
  { id: "posts", label: "Community Posts", value: "342", trend: 18.3, trendUp: true, icon: "messages", accent: "text-violet-600 bg-violet-50" },
  { id: "reports", label: "Reports", value: "27", trend: 15.4, trendUp: false, icon: "flag", accent: "text-red-600 bg-red-50" },
]

/** Y values 0–5000 scale for chart */
export const adminActivitySeries = [
  { id: "new", name: "New Users", color: "#2563eb", values: [1200, 1800, 1400, 2200, 1900, 2400, 2100] },
  { id: "active", name: "Active Users", color: "#f8b91e", values: [3200, 3400, 3100, 3600, 3500, 3800, 3700] },
  { id: "searches", name: "Route Searches", color: "#d92323", values: [800, 1200, 950, 1400, 1100, 1500, 1300] },
]

export const adminActivityDayLabels = ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"]

export const adminTopRoutes = [
  { rank: 1, route: "SM City Iloilo → WVSU Back Gate", searches: "2,543", change: 14.2, changeUp: true },
  { rank: 2, route: "SM City Iloilo → Molo Church", searches: "2,187", change: 9.7, changeUp: true },
  { rank: 3, route: "La Paz Public Market → SM City Iloilo", searches: "1,864", change: 7.1, changeUp: true },
  { rank: 4, route: "Jaro Plaza → SM City Iloilo", searches: "1,529", change: 3.2, changeUp: false },
  { rank: 5, route: "Mandurriao → City Proper", searches: "1,241", change: 5.4, changeUp: true },
]

export const adminRecentPosts = [
  {
    id: "a1",
    title: "Heavy traffic near Diversion Road",
    location: "Diversion Road, Iloilo City",
    category: "Traffic",
    author: "JuanD",
    time: "45 mins ago",
    status: "Active",
  },
  {
    id: "a2",
    title: "Temporary rerouting near City Proper",
    location: "General Luna St. / Jalandoni St.",
    category: "Rerouting",
    author: "Marie_Commuter",
    time: "1 hour ago",
    status: "Active",
  },
  {
    id: "a3",
    title: "Construction near Jaro Plaza",
    location: "Jaro Plaza, Jaro",
    category: "Construction",
    author: "IlonggoRider",
    time: "2 hours ago",
    status: "Active",
  },
  {
    id: "a4",
    title: "Flooding reported near Molo area",
    location: "Molo, Iloilo City",
    category: "Flooding",
    author: "CommuterNi",
    time: "3 hours ago",
    status: "Active",
  },
  {
    id: "a5",
    title: "Reduced jeepney trips after 9 PM",
    location: "SM City Iloilo - Lapaz route",
    category: "General",
    author: "NightOwl",
    time: "4 hours ago",
    status: "Active",
  },
]

export const adminReportBreakdown = [
  { id: "mis", label: "Misinformation", count: 10, pct: 37.0, color: "#ef4444" },
  { id: "inap", label: "Inappropriate Content", count: 6, pct: 22.2, color: "#f97316" },
  { id: "spam", label: "Spam", count: 5, pct: 18.5, color: "#eab308" },
  { id: "harass", label: "Harassment", count: 3, pct: 11.1, color: "#3b82f6" },
  { id: "other", label: "Others", count: 3, pct: 11.1, color: "#9ca3af" },
]

export const adminReportsNotice =
  "Reports are reviewed by admins. Please take action on pending items."
