import React, { useContext, useState } from 'react'
import Head from 'next/head'
import AppContext from '../context/AppContext'
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from 'react-icons/fa'

export default function signin() {
  const { darkTheme } = useContext(AppContext)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <div className={`signin ${darkTheme ? 'dark' : 'white'}`}>
        <h1>Welcome back🤓</h1>

        <div className="input-group">
          <div className="icon">
            <FaEnvelope size={'2rem'} />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <div className="icon">
            <FaLock size={'2rem'} />
          </div>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <div className="icon">
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                size={'2rem'}
              />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} size={'2rem'} />
            )}
          </div>
        </div>

        <div className="btn-group">
          <button className="btn btn-outline white">Sign up instead</button>
          <div className="btn btn white btn-primary">Sign in </div>
        </div>
      </div>
    </>
  )
}
