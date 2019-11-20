import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'

import GuestLayout from './GuestLayout/Index'

const withLayout: React.ReactNode  = (nextLayout: string) => (ScreenRouter: React.FC) => {
  let LayoutComponent: React.ReactNode

  switch (nextLayout) {
    case 'guest':
      LayoutComponent = GuestLayout
      break
    default:
      LayoutComponent = () => null
      break
  }

  const wrapped: React.FC = (props: object) => (
    <Suspense fallback={ <div /> }>
      <LayoutComponent { ...props }>
        <ScreenRouter { ...props } />
      </LayoutComponent>
    </Suspense>
  )

  return withRouter(wrapped)
}

export default withLayout
