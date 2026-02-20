import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useThemeStore } from './themeStore'
import AppRouting from './AppRouting'

function App() {
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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
        <AppRouting />
      </div>
    </Router>
  )
}

export default App
