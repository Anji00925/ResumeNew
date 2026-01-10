import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
// import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import SkillNetwork from './pages/Skills'

export default function App() {
  const location = useLocation()

  // ⛔ Hide footer on long pages
  const hideFooterPages = ["/resume", "/skills"]
  const hideFooter = hideFooterPages.includes(location.pathname)

  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/skills" element={<SkillNetwork />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ✅ Footer shown only on short pages */}
      {!hideFooter && (
        <footer
          style={{
            textAlign: "center",
            padding: "16px 0",
            fontSize: "13px",
            color: "#777",
          }}
        >
          © {new Date().getFullYear()} Anjibabu Mothe
        </footer>
      )}
    </div>
  )
}
