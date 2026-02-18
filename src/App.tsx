import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useUserStore } from './store/userStore'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/Home/HomePage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import ProfilePage from './pages/Profile/ProfilePage'

function App() {
  const { isLoggedIn } = useUserStore()

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30">
        <Navbar />
        
        <main className="pt-24 pb-12 min-h-screen relative overflow-hidden">
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

        <footer className="py-10 text-center border-t border-slate-800/50">
          <p className="text-sm font-medium text-slate-600">
            &copy; 2026 OpenClaw Development Interface. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
