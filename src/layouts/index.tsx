import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'

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
