import toggleBooleanState from '@/helper/toggleBooleanState'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface IPROP {
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({ setMenuOpen }: IPROP) {
  return (
    <>
      <header>
        <figure>
          <Image
            src="/images/logo/bn.svg"
            alt="Logotipo da marca escrito BN"
            width={50}
            height={41}
            className="invert-[.80]"
          />
        </figure>
        <Image
          src="/images/logo/bn.svg"
          alt="Logotipo da marca escrito BN"
          width={50}
          height={41}
          className="invert-[.80]"
        />
        <figure></figure>
      </header>
      <nav>
        <Link href="home">Home</Link>
        <Link href="sobre">Sobre</Link>
        <Link href="contatos">Contatos</Link>
        <Link onClick={() => toggleBooleanState(setMenuOpen)} href="#Redes">
          Redes
        </Link>
      </nav>
    </>
  )
}
