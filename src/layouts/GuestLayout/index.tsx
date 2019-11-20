import * as React from 'react'

export interface IGuestLayoutProps {
  children: React.ReactNode
}

const GuestLayout = (props: IGuestLayoutProps) => {
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
