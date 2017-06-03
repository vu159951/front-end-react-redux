import { AppLayout } from './components'
import { AboutRoute, Dashboard, DashboardRoute, NotFoundRoute, LoginRoute, Login } from './pages'

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
