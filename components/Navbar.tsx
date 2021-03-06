import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoPic from '../assets/logo.svg'
import avatarPlaceholderPic from '../assets/avatar-placeholder.png'
import { ImSearch } from 'react-icons/im'
import { FaBell } from 'react-icons/fa'
import Link from 'next/link'
import { AiFillCaretDown } from 'react-icons/ai'
import { useAuth } from '../context/useAuth'

const routes = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'TV Shows',
  },
  {
    id: 3,
    name: 'Movies',
  },
  {
    id: 4,
    name: 'New & Popular',
  },
  {
    id: 5,
    name: 'My List',
  },
]

const Navbar = () => {
  const { signOut } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('Home')

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`nav-bar transition-all duration-500 ease-in ${
        isScrolled && 'fixed bg-black'
      }`}
    >
      <div className="flex">
        <div className="mr-[25px] flex items-center">
          <Link href={'/'}>
            <a>
              <Image
                className="cursor-pointer object-contain"
                src={logoPic}
                alt="Logo"
                width={92.5}
                height={30}
              />
            </a>
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="header-link ml-4 flex items-center md:hidden">
            Browse
            <AiFillCaretDown className="ml-1" />
          </li>
          {routes.length &&
            routes.map((route, ri) => {
              const currentRouteClassName =
                currentRoute === route.name ? 'current-header-link' : ''
              return (
                <li
                  key={`route-${ri}`}
                  className={`header-link ml-[20px] hidden md:flex ${currentRouteClassName}`}
                >
                  {route.name}
                </li>
              )
            })}
        </ul>
      </div>

      <div className="absolute right-[16px] flex h-full flex-grow-[1] items-center justify-end sm:right-[16px] md:right-[32px] lg:right-[60px]">
        <div className="flex items-center">
          <ImSearch className="mr-[20px] hidden md:flex" size={22} />
          <Link href="/">
            <span className="header-link mr-[20px] hidden md:flex">Kids</span>
          </Link>
          <FaBell className="mr-[20px]" size={25} />
          <Link href="/">
            <div className="flex cursor-pointer items-center" onClick={signOut}>
              <Image
                className="rounded object-contain"
                src={avatarPlaceholderPic}
                alt="Avatar placeholder"
                width={32}
                height={32}
              />
              <AiFillCaretDown className="ml-[10px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
