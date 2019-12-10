import React, {Suspense} from 'react'
import {withRouter} from 'react-router-dom'

import GuestLayout from './GuestLayout'

const withLayout: Function = (nextLayout: string) => (ScreenRouter: React.FC) => {
  let LayoutComponent: React.FC

  switch (nextLayout) {
    case 'guest':
      LayoutComponent = GuestLayout
      break
    default:
      LayoutComponent = () => null
      break
  }

  const wrapped: React.FC = () => (
    <Suspense fallback={ <div /> }>
      <LayoutComponent>
        <ScreenRouter />
      </LayoutComponent>
    </Suspense>
  )

  return withRouter(wrapped)
}

export default withLayout
