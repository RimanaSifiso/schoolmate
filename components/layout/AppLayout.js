import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function AppLayout({ children }) {
  const { darkTheme } = useContext(AppContext)

  return <div className={`App ${darkTheme ? 'dark' : 'white'}`}>{children}</div>
}
