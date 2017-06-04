import { AppLayout } from './components'
import { AboutRoute, Dashboard, DashboardRoute, NotFoundRoute, LoginRoute, Login, DashboardViewMode } from './pages'

export const AppRoute = {
  childRoutes: [
    {
      path: '/login',
      component: AppLayout,
      indexRoute: {
        component: Login
      },
      childRoutes: [
        LoginRoute,
        NotFoundRoute
      ]
    },
    {
      path: '/dashboard',
      component: AppLayout,
      indexRoute: {
        component: DashboardViewMode
      },
      childRoutes: [
        DashboardRoute,
        AboutRoute,
        NotFoundRoute
      ]
    },
    {
      path: '/',
      component: AppLayout,
      indexRoute: {
        component: Dashboard
      },
      childRoutes: [
        DashboardRoute,
        AboutRoute,
        NotFoundRoute
      ]
    }
  ]
}
