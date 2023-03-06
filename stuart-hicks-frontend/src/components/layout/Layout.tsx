import React from 'react'

interface LayoutProps {
  pageTitle: string
}

const Layout = ({ pageTitle }: LayoutProps) => {
  return(
  <h1>{pageTitle}</h1>
  )
}

export default Layout