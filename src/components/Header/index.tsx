'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import toggleBooleanState from '@/helper/toggleBooleanState'

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsAtTop(scrollTop === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {!menuOpen ? (
        <header
          className={`flex items-center h-24 fixed top-0 left-0 w-full z-10 px-[30px] transition-all duration-300 ease-in-out ${
            isAtTop ? 'bg-transparent text-white' : 'bg-white text-black'
          }`}
        >
          <nav className="container mx-auto flex justify-between items-center py-4">
            <figure>
              <Image
                src="/images/logo/bn.svg"
                alt="Logotipo da marca escrito BN"
                width={50}
                height={41}
                className={!isAtTop ? 'invert-[.80]' : ''}
              />
            </figure>
            <button onClick={() => toggleBooleanState(setMenuOpen)}>
              <Image
                src="/images/assets/menu.svg"
                alt=""
                width={34}
                height={34}
                className={!isAtTop ? 'invert-[.80]' : ''}
              />
            </button>
          </nav>
        </header>
      ) : (
        <Navbar setMenuOpen={setMenuOpen} />
      )}
    </>
  )
}

export {}
