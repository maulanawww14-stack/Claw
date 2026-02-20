import api from './api';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface AuthResponse {
  user: User;
  token: string;
}

const authService = {
  // Simulasi Login (Mock)
  login: async (username: string): Promise<AuthResponse> => {
    // Simulasi delay jaringan
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock response
    return {
      user: {
        id: '123',
        username: username,
        email: `${username.toLowerCase()}@example.com`,
        role: 'user',
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token',
    };
  },

  // Simulasi Logout
  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  },

  // Mendapatkan profil user saat ini (untuk verifikasi token)
  getMe: async (): Promise<User> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;
