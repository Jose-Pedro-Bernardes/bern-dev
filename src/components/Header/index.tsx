'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import toggleBooleanState from '@/helper/toggleBooleanState'
import Link from 'next/link'

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
          className={`flex items-center h-24 fixed top-0 left-0 w-full z-10 px-[30px] ${
            isAtTop ? 'bg-transparent text-white' : 'bg-white text-black'
          }`}
        >
          <nav className="container mx-auto flex justify-between items-center py-4 lg:px-[6%]">
            <a href="/" target="_self">
              <figure>
                <Image
                  src="/images/logo/bn.svg"
                  alt="Logotipo da marca escrito BN"
                  width={50}
                  height={41}
                  className={!isAtTop ? 'invert-[.80]' : ''}
                />
              </figure>
            </a>
            <button
              onClick={() => toggleBooleanState(setMenuOpen)}
              className="lg:hidden"
            >
              <Image
                src="/images/assets/menu.svg"
                alt=""
                width={34}
                height={34}
                className={!isAtTop ? 'invert-[.80]' : ''}
              />
            </button>
            <nav className="hidden lg:flex h-full items-end gap-[60px] font-light text-[16px] xl:gap-[94px]">
              <Link href={'/'}>Home</Link>
              <Link href={'/sobre'}>Sobre</Link>
              <Link href={'/contatos'}>Contatos</Link>
              <Link href={'#Redes'}>Redes</Link>
            </nav>
            <a
              href="/contatos"
              target="_parent"
              className={`hidden lg:flex justify-center 
              items-center w-[151px] h-[45px] bg-transparent border-solid border-[1px]
              font-bold rounded-[17px] 
              ${isAtTop ? 'border-[#8CD6FF] text-[#8CD6FF]' : 'border-[#2187BF] text-[#2187BF]'}`}
            >
              Comece hoje
            </a>
          </nav>
        </header>
      ) : (
        <Navbar setMenuOpen={setMenuOpen} />
      )}
    </>
  )
}
