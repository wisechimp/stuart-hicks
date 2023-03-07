import React from "react"

import MenuLink from "./MenuLink"
import { menuContainer } from "./menu.module.css"
import MenuLinkType from "../../types/MenuLinkType"

interface MenuProps {
  menuLinks: Array<MenuLinkType>
}

const Menu = ({ menuLinks }: MenuProps) => {
  return (
    <div className={menuContainer}>
      {menuLinks.map((menuLink) => {
        return (
          <MenuLink
            key={menuLink.key}
            to={menuLink.to}
            linkText={menuLink.linktext}
          />
        )
      })}
    </div>
  )
}

export default Menu
