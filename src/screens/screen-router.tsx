import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GuestScreenRouter from './guest/guest-screen-router'

const ScreenRouter: React.FC = () => (
  <Router>
    <Suspense fallback={ <div /> }>
      <GuestScreenRouter />
    </Suspense>
  </Router>
)

export default ScreenRouter
