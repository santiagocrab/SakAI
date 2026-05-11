import { AnimatePresence, motion } from "framer-motion"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Admin from "./pages/Admin"
import Community from "./pages/Community"
import Home from "./pages/Home"
import Login from "./pages/Login"
import PlanRoute from "./pages/PlanRoute"
import Profile from "./pages/Profile"

function RoutedApp() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/plan-route"
            element={
              <Layout>
                <PlanRoute />
              </Layout>
            }
          />
          <Route
            path="/community"
            element={
              <Layout>
                <Community />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />

          {/* Legacy paths → new structure */}
          <Route path="/bulletin" element={<Navigate to="/community" replace />} />
          <Route path="/route-result" element={<Navigate to="/plan-route" replace />} />
          <Route path="/first-timer" element={<Navigate to="/plan-route" replace />} />
          <Route path="/accessibility" element={<Navigate to="/plan-route" replace />} />
          <Route path="/pamasahe" element={<Navigate to="/profile" replace />} />
          <Route path="/suki-routes" element={<Navigate to="/profile" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  )
}
