import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

function Modal({ title, text }) {
  const { darkTheme } = useContext(AppContext)
  return (
    <div className="ModalWrapper">
      <div className={`Modal ${darkTheme ? 'dark' : 'white'}`}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Modal
