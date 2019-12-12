import * as React from 'react'
import AppBar from 'components/AppBar'

export interface GuestLayoutProps {
  children?: React.ReactNode
}

const GuestLayout: React.FC = (props: GuestLayoutProps) => {
  const {
    children
  } = props

  return (
    <div>
      <AppBar title="title"/>
      { children }
    </div>
  )
}

export default GuestLayout
