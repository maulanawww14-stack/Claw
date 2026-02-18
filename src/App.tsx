import { useState } from 'react'
import { useUserStore } from './store/userStore'
import Navbar from './components/layout/Navbar'
import Button from './components/common/Button'
import InputField from './components/forms/InputField'

function App() {
  const { username, isLoggedIn, login } = useUserStore()
  const [tempName, setTempName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (!tempName) return
    setLoading(true)
    setTimeout(() => {
      login(tempName)
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center pt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-600/20 blur-[120px] pointer-events-none rounded-full" />
        
        <h1 className="relative mb-4 text-5xl font-black tracking-tight text-white md:text-7xl">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Better</span>.
        </h1>
        <p className="max-w-md mb-12 text-lg font-medium text-slate-400">
          Template project modern dengan React, TypeScript, Tailwind, dan Zustand yang sudah terintegrasi.
        </p>
        
        <div className="relative w-full max-w-md p-10 border border-slate-800 bg-slate-800/40 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-50" />
          
          {isLoggedIn ? (
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-emerald-500/10 text-emerald-400">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Welcome back, <span className="text-emerald-400">{username}</span>!</h2>
              <p className="text-slate-400">Kamu sudah terhubung ke sistem global state.</p>
              <div className="flex justify-center gap-3">
                <Button variant="primary">Go to Dashboard</Button>
                <Button variant="secondary">View Profile</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">Member Login</h2>
                <p className="text-sm text-slate-400">Masukkan nama kamu untuk memulai sesi.</p>
              </div>
              
              <div className="space-y-5">
                <InputField 
                  label="Display Name"
                  placeholder="e.g. Hiz M"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                />
                <Button 
                  onClick={handleLogin}
                  isLoading={loading}
                  className="w-full"
                >
                  Authorize Connection
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
          {['React 19', 'Vite 7', 'Zustand', 'Tailwind'].map((tech) => (
            <div key={tech} className="px-4 py-2 text-xs font-bold tracking-widest uppercase border rounded-full border-slate-800 bg-slate-800/30 text-slate-500">
              {tech}
            </div>
          ))}
        </div>
      </main>

      <footer className="py-10 text-center border-t border-slate-800/50">
        <p className="text-sm font-medium text-slate-600">
          &copy; 2026 OpenClaw Development Interface. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
