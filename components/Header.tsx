import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoPic from '../assets/logo.svg'
import avatarPlaceholderPic from '../assets/avatar-placeholder.png'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaBell } from 'react-icons/fa'
import Link from 'next/link'
import { AiFillCaretDown } from 'react-icons/ai'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-gradient-to-b from-[#000000]/70 to-[#00000000] ${
        isScrolled && 'bg-[#141414]'
      }`}
    >
      {/* <div className="flex h-16 items-center justify-between px-12"> */}
      <div className="flex items-center">
        <div className="mr-6 items-center">
          <Image
            className="cursor-pointer object-contain"
            src={logoPic}
            alt="Logo"
            width={92.5}
            height={32}
          />
        </div>
        <ul className="flex items-center">
          <li className="header-link ml-4 flex items-center md:hidden">
            Browse
            <AiFillCaretDown className="ml-1" />
          </li>
          <li className="header-link current-header-link ml-4 hidden md:flex">
            Home
          </li>
          <li className="header-link ml-4 hidden md:flex">TV Shows</li>
          <li className="header-link ml-4 hidden md:flex">Movies</li>
          <li className="header-link ml-4 hidden md:flex">New & Popular</li>
          <li className="header-link ml-4 hidden md:flex">My List</li>
        </ul>
      </div>

      <div className="flex items-center">
        <HiOutlineSearch className="mr-4 hidden md:flex" />
        <Link href="/kids">
          <span className="header-link mr-4 hidden md:flex">Kids</span>
        </Link>
        <FaBell className="mr-4" />
        <Link href="/your-account">
          <div className="flex cursor-pointer items-center">
            <Image
              className="rounded object-contain"
              src={avatarPlaceholderPic}
              alt="Avatar placeholder"
              width={32}
              height={32}
            />
            <AiFillCaretDown className="ml-2" />
          </div>
        </Link>
      </div>
      {/* </div> */}
    </header>
  )
}

export default Header
