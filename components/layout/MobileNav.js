import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function MobileNav() {
  const { darkTheme } = useContext(AppContext)
  return (
    <nav
      role={'navigation'}
      className={`MobileNav ${darkTheme ? 'dark' : 'white'}`}
    >
      <h2>Mobile Naigation</h2>
    </nav>
  )
}
