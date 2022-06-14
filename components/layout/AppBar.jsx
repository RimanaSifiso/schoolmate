import React, { useContext, useState } from 'react'
import logo from '../../assets/schoolmate-logo-icon.png'
import Link from 'next/link'
import Image from 'next/image'
import AppContext from '../../context/AppContext'

export default function AppBar() {
  const { handleSideNavVisibility, darkTheme, toogleDarkTheme } =
    useContext(AppContext)

  return (
    <nav role="navigation" className={`AppBar ${darkTheme ? 'dark' : 'white'}`}>
      <div className="logo-box" onClick={() => toogleDarkTheme()}>
        <div className="logo">
          <Image className="logo-img" src={logo} alt="Schoolmate App logo" />
        </div>
        <div className="app-name for-desktop">
          <h1>schoolmate</h1>
        </div>
      </div>

      <ul className="ul for-desktop" role={'navigation'}>
        <Link href={'/'} className="link-item">
          Home
        </Link>
        <Link href={'/learn'}>Learn</Link>

        <button href="/signin" className="btn btn-primary white">
          Sign in
        </button>
      </ul>

      <div onClick={(e) => handleSideNavVisibility(e)} className="hamburger">
        <span className="more"></span>
      </div>
    </nav>
  )
}
