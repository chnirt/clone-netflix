import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '../context/useAuth'
import logoPic from '../assets/logo.svg'

const SignUp = () => {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    const userInput = { email, password }
    // signUp(userInput)
  }

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <main className="bg-white">
        <div className="padding-x flex h-[91px] justify-between border-b-[1px] border-b-[#e6e6e6]">
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
          <Link href={'/login'}>
            <div className="flex cursor-pointer items-center">
              <span className=" text-[20px] font-bold text-[#333] hover:underline">
                Sign In
              </span>
            </div>
          </Link>
        </div>

        {/* Form */}
        <div className="pb-[95px]">
          <div className="mx-auto mt-0 mb-[15px] max-w-[978px] px-[32px] pt-[20px] pb-[60px]">
            <div className="my-0 mx-auto max-w-[440px] text-left">
              <div className="mt-[20px]">
                <h1 className="mb-[13px] text-[32px] font-bold text-[#333333]">
                  Create a password to start your membership
                </h1>
              </div>

              <div>
                <p className="text-[18px] text-[#333333]">
                  Just a few more steps and you're done!
                </p>
                <p className="mt-[10px] text-[18px] text-[#333333]">
                  We hate paperwork, too.
                </p>
                <div className="relative mt-[16px] mb-[20px]">
                  <input
                    className="h-[60px] w-full rounded-[2px] border-[1px] border-[#8c8c8c] px-[10px] pt-[10px] text-base text-black"
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
                    className="h-[60px] w-full rounded-[2px] border-[1px] border-[#8c8c8c] px-[10px] pt-[10px] text-base text-black"
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
                  onClick={handleSignUp}
                  className="min-h-[64px] w-full min-w-[110px] rounded bg-[#e50914] py-3 px-[25px] hover:bg-[#f6121d]"
                >
                  <span className="text-[24px] font-[500]">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp
