import React, { ReactNode } from 'react'

import Menu from '../menu/Menu'
import menulinks from '../../data/menulinks'

interface LayoutProps {
  pageTitle: string
  children: ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <>
      <Menu menuLinks={menulinks} />
      <h1>{pageTitle}</h1>
      {children}
    </>
  )
}

export default Layout
