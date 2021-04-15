import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../components'

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  function formSubmitHandler(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (email === '' || password === '') {
      setError(true)
      return setErrMsg('Fields cannot be empty')
    }

    console.log('Success...')
  }
  return (
    <div>
      <Navbar position="absolute" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome back</h2>
          </div>
          {error && <p className="text-red-700">*{errMsg}</p>}
          <form className="mt-8 space-y-6" onSubmit={formSubmitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-gray-900 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-gray-900 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-gray-900 hover:text-gray-800">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-900 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="text-sm">
            <span>
              Don't have an account?
              <Link
                to="/signup"
                onClick={() => {
                  setError(false)
                  setErrMsg('')
                }}
                className="ml-1 font-medium cursor-pointer hover:text-gray-800">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
