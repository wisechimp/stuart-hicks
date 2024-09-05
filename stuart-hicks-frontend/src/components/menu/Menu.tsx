import React from 'react'

import MenuLink from './MenuLink'
import { menuContainer, menuItemsContainer } from './menu.module.css'
import MenuLinkType from '../../types/MenuLinkType'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

interface MenuProps {
  menuLinks: Array<MenuLinkType>
}

const Menu = ({ menuLinks }: MenuProps) => {
  return (
    <div className={menuContainer}>
      <Link to="/">
        <StaticImage
          src="../../images/sh-logo.png"
          alt="The letters S and H in light blue on a royal blue background. The author's logo, designed to momic that of Javascript and Typescript."
          width={48}
        />
      </Link>
      <div className={menuItemsContainer}>
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
    </div>
  )
}

export default Menu
