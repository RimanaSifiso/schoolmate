import React, { useContext, useState } from 'react'
import Head from 'next/head'
import AppContext from '../context/AppContext'
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserAlt,
  FaPhoneAlt,
} from 'react-icons/fa'

export default function signup() {
  const { darkTheme } = useContext(AppContext)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <div className={`signin ${darkTheme ? 'dark' : 'white'}`}>
        <h1>Hello 👋, it's nice to meet you!</h1>

        <div className="input-group">
          <div className="icon">
            <FaUserAlt size={'20px'} />
          </div>
          <input name="name" type="text" placeholder="Name" />
        </div>

        <div className="input-group">
          <div className="icon">
            <FaUserAlt size={'20px'} />
          </div>
          <input name="surname" type="text" placeholder="Surname" />
        </div>

        <h3>Select your grade:</h3>
        <div className="btn-group">
          <input type="radio" name="grade" id="grade-10" value={10} />
          <label
            htmlFor="grade-10"
            className={`${darkTheme ? 'dark' : 'white'}`}
          >
            Grade 10
          </label>
          <input type="radio" name="grade" id="grade-11" value={11} />
          <label
            htmlFor="grade-11"
            className={`${darkTheme ? 'dark' : 'white'}`}
          >
            Grade 11
          </label>
          <input type="radio" name="grade" id="grade-12" value={12} />
          <label
            htmlFor="grade-12"
            className={`${darkTheme ? 'dark' : 'white'}`}
          >
            Grade 12
          </label>
        </div>

        <div className="input-group">
          <div className="icon">
            <FaEnvelope size={'20px'} />
          </div>
          <input name="email" type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <div className="icon">
            <FaPhoneAlt size={'20px'} />
          </div>
          <input
            maxLength={10}
            max="10"
            name="contacts"
            type="tel"
            placeholder="WhatsApp contacts (optional)"
          />
        </div>

        <div className="input-group">
          <div className="icon">
            <FaLock size={'20px'} />
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
                size={'20px'}
              />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} size={'20px'} />
            )}
          </div>
        </div>

        <div className="btn-group">
          <button className="btn btn-outline white">Sign in instead</button>
          <div className="btn btn white btn-primary">Sign up</div>
        </div>
      </div>
    </>
  )
}
