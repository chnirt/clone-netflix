import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/useAuth'
import logoPic from '../assets/logo.svg'
import backgroundPic from '../assets/background.jpeg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Login = () => {
  const { signIn } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/')
  }, [])

  const handleLogin = () => {
    const userInput = {
      email,
      password,
    }
    if (email.length === 0 || password.length === 0) return
    signIn(userInput)
  }

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <main className="h-full bg-black text-white md:bg-transparent">
        <div className="absolute z-[-1] hidden h-full min-h-screen w-full opacity-50 md:block">
          <Image
            className="object-cover"
            src={backgroundPic}
            alt="background"
            layout="responsive"
          />
        </div>

        <div className="padding-x flex h-[90px] justify-between">
          <Link href={'/'}>
            <a className="flex cursor-pointer items-center">
              <Image
                className="object-contain"
                src={logoPic}
                alt="Logo"
                width={167}
                height={45}
              />
            </a>
          </Link>
        </div>

        {/* Form */}
        <div className="mx-auto mb-[-236px] min-h-screen max-w-[450px] bg-transparent text-[#737373]">
          <div>
            <div className="padding-x mb-[90px] min-h-[550px] rounded bg-[#000000]/75 pt-[60px] pb-[40px] md:min-h-[660px]">
              <div>
                <h1 className="mb-[13px] text-[32px] font-bold text-white">
                  Sign In
                </h1>

                <div>
                  <div className="relative mt-[16px] mb-[20px]">
                    <input
                      className="h-[60px] w-full rounded-[2px] bg-[#333333] px-[10px] pt-[10px] text-base text-white outline-none"
                      type={'text'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="absolute left-[10px] top-[6px] text-[13px] font-bold text-[#8c8c8c]">
                      Email
                    </label>
                  </div>
                  <div className="relative mt-[16px] mb-[20px]">
                    <input
                      className="h-[60px] w-full rounded-[2px] bg-[#333333] px-[10px] pt-[10px] text-base text-white outline-none"
                      type={'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="absolute left-[10px] top-[6px] text-[13px] font-bold text-[#8c8c8c]">
                      Password
                    </label>
                  </div>
                </div>

                <div className="mt-[24px]">
                  <button
                    onClick={handleLogin}
                    className="w-full min-w-[110px] rounded bg-[#e50914] p-4 hover:bg-[#f6121d]"
                  >
                    <span className="text-[16px] font-[700] text-white">
                      Sign In
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-[16px]">
                <div className="login-signup-now" data-uia="login-signup-now">
                  New to Netflix?{' '}
                  <Link href={'/signup'}>
                    <span className="cursor-pointer text-white hover:underline">
                      Sign up now
                    </span>
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
