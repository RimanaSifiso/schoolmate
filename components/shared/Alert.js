import React, { useContext } from 'react'

import AppContext from '../../context/AppContext'

export default function Alert({ type, text }) {
  const { darkTheme } = useContext(AppContext)
  return (
    <div className={`Alert ${darkTheme ? 'dark' : 'white'} ${type}`}>
      <p>{text}</p>
    </div>
  )
}
