import * as React from 'react'

export interface GuestLayoutProps {
  children: React.ReactNode
}

const GuestLayout: React.ReactNode = (props: GuestLayoutProps) => {
  const {
    children
  } = props
  return (
    <div>
      <h1>layout</h1>
      { children }
    </div>
  )
}

export default GuestLayout
