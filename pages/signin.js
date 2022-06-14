import React, { useContext, useState } from 'react'
import Head from 'next/head'
import AppContext from '../context/AppContext'

export default function signin() {
  const { darkTheme } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Sign in or login</title>
      </Head>
      <section
        id="signin"
        className={`signin-page ${darkTheme ? 'dark' : 'white'}`}
      >
        <div className="right-pane">
          <h2>Hello 👋, let's sign you up!</h2>

          <div id="input2" className="input-group">
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="What's your name?"
            />
            <h3>Surname</h3>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="...and your surname?"
            />
            <h3 style={{ display: 'block' }}>
              Which grade are you currently at?{' '}
            </h3>
            <div className="radio-container">
              <input type="radio" name="grade" id="grade-10" />
              <label htmlFor="grade-10">
                Grade 10<span>&#x2713;</span>
              </label>
              <input type="radio" name="grade" id="grade-11" />
              <label htmlFor="grade-11">
                Grade 11<span>&#x2713;</span>
              </label>
              <input type="radio" name="grade" id="grade-12" />
              <label htmlFor="grade-12">
                Grade 12<span>&#x2713;</span>
              </label>
            </div>
            <h3>WhatsApp Contacts (optional) </h3>
            <i>This is how we will reach you for fascinating updates!</i>
            <input
              type="tel"
              maxLength={'10'}
              name="contacts"
              id="contacts"
              placeholder="Example: 0783337408"
            />

            <h3>Email address</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Example: schoolamtelearning@gmail.com"
            />

            <h3>Create a password</h3>
            <input type="password" name="password" id="password" />

            <h3>Confirm password</h3>
            <input
              type="password"
              name="password-confirm"
              id="password-confirm"
            />
          </div>

          <div className="btns">
            <button
              className={`btn btn-outline ${darkTheme ? 'dark' : 'white'}`}
            >
              I already have an account
            </button>
            <button className="btn btn-primary white" id="submit-bio">
              Sign up &rarr;
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
