import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function SideNav() {
  const { handleSideNavVisibility, sideNavVisible, darkTheme } = useContext(AppContext)

  return (
    <div
      id="side-nav-wrapper"
      onClick={(e) => handleSideNavVisibility(e)}
      className={`SideNavWrapper ${sideNavVisible ? 'visible' : ''}`}
    >
      <nav
        id="side-nav"
        role={'navigation'}
        className={`SideNav ${darkTheme ? 'dark' : 'white'}`}
      >
        <div className="account-info">account info</div>
        <ul className="links">links</ul>
        <div className="settings">settings</div>
        <div className="socials">socials</div>
        <div className="logo">logo</div>
      </nav>
    </div>
  )
}
