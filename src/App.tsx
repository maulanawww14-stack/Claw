import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useUserStore } from './store/userStore'
import { useThemeStore } from './store/themeStore'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/Home/HomePage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import ProfilePage from './pages/Profile/ProfilePage'

function App() {
  const { isLoggedIn } = useUserStore()
  const { theme } = useThemeStore()

  // Handle Theme Switch secara global pada element <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme])

  return (
    <Router>
      {/* Background container yang mengikuti tema */}
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar />
        
        <main className="pt-24 pb-12 min-h-[calc(100vh-80px)] relative overflow-hidden">
          {/* Background Ambient Light (Hanya muncul di Dark Mode agar estetik) */}
          <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
          <div className="hidden dark:block absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/5 blur-[100px] pointer-events-none rounded-full" />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <DashboardPage /> : <Navigate to="/profile" />} 
            />
            
            <Route path="/profile" element={<ProfilePage />} />
            
            {/* 404 Redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="py-10 text-center border-t border-slate-200 dark:border-slate-800/50">
          <p className="text-sm font-medium text-slate-400 dark:text-slate-600">
            &copy; 2026 OpenClaw Development Interface. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
