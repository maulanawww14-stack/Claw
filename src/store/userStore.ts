import { create } from 'zustand'

interface UserState {
  username: string | null
  isLoggedIn: boolean
  login: (name: string) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  isLoggedIn: false,
  login: (name) => set({ username: name, isLoggedIn: true }),
  logout: () => set({ username: null, isLoggedIn: false }),
}))
