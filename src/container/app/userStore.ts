import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../../services/authService'

interface UserState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
  setAuth: (user: User, token: string) => void
  clearAuth: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      setAuth: (user, token) => set({ user, token, isLoggedIn: true }),
      clearAuth: () => set({ user: null, token: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage', // Nama key di localStorage
    }
  )
)
