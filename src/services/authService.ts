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
  // Login dengan Username & Password (Mock)
  login: async (username: string, password: string): Promise<AuthResponse> => {
    // Simulasi delay jaringan
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple mock logic
    if (password === 'admin123') {
      return {
        user: {
          id: '123',
          username: username,
          email: `${username.toLowerCase()}@vps.internal`,
          role: 'admin',
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.industrial-access-granted',
      };
    } else {
      throw new Error('Invalid credentials. Hint: admin123');
    }
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  },

  getMe: async (): Promise<User> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;
