import { lazy } from 'react'

const ScreenDefault = lazy(() => import('../screens/guest/ScreenDefault'))

const routes = {
  home: {
    path: '/',
    exact: true,
    Component: ScreenDefault
  }
}

export default routes
