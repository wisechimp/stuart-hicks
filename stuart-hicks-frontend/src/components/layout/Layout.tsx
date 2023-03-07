import React from "react"

import Menu from "../menu/Menu"
import menulinks from "../../data/menulinks"

interface LayoutProps {
  pageTitle: string
}

const Layout = ({ pageTitle }: LayoutProps) => {
  return (
    <>
      <Menu menuLinks={menulinks} />
      <h1>{pageTitle}</h1>
    </>
  )
}

export default Layout
