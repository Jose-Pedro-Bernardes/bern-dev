'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

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
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isAtTop ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <figure>
          <Image
            src="/images/logo/logoHeader.svg"
            alt="Logotipo da marca escrito BN"
            width={50}
            height={41}
          />
        </figure>
        <button>
          <Image src="/images/assets/menu.svg" alt="" width={34} height={34} />
        </button>
      </nav>
    </header>
  )
}
