import * as React from 'react'

export interface GuestLayoutProps {
  children?: React.ReactNode
}

const GuestLayout: React.FC = (props: GuestLayoutProps) => {
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
