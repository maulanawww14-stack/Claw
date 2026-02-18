import { HomePage, DashboardPage, ProfilePage } from '../container/pages';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  protected?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: HomePage,
    protected: false,
  },
  {
    path: '/dashboard',
    element: DashboardPage,
    protected: true,
  },
  {
    path: '/profile',
    element: ProfilePage,
    protected: false,
  },
];
