import { App } from './app'
import { AboutRoute, Dashboard, DashboardRoute, NotFoundRoute, LoginRoute, Login } from './pages'

export const AppRoute = {
  childRoutes: [
    {
      path: '/login',
      component: App,
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
      component: App,
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
