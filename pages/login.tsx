import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '../context/useAuth'

const Login = () => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const userInput = {
      email,
      password,
    }
    signIn(userInput)
  }

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      login
      <br />
      <input
        className="text-black"
        type={'text'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        className="text-black"
        type={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <Link href={'/signup'}>
        <span>SignUp</span>
      </Link>
    </div>
  )
}

export default Login
