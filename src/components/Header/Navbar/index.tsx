import toggleBooleanState from '@/helper/toggleBooleanState'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface IPROP {
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({ setMenuOpen }: IPROP) {
  return (
    <nav className="mb-[40px]">
      <header className="flex items-center justify-between px-[30px] bg-white h-[101px]">
        <a href="/" target="_self">
          <figure>
            <Image
              src="/images/logo/bn.svg"
              alt="Logotipo da marca escrito BN"
              width={45}
              height={41}
              layout="responsive"
              className="invert-[.80]"
            />
          </figure>
        </a>
        <button onClick={() => toggleBooleanState(setMenuOpen)}>
          <Image
            src="/images/assets/x.svg"
            alt="Botão de fechar menu de navegação."
            width={34}
            height={34}
            className="invert-[.10]"
          />
        </button>
      </header>
      <nav className="flex flex-col bg-[#EEEEEE]">
        <div className="flex gap-5 items-center box-border pl-[30px] h-[96px] border-solid border-b-[1px] border-[#B5B5B5]">
          <Image
            src="/images/assets/navbar/home.svg"
            alt=""
            width={25}
            height={25}
            className="invert-[.10]"
          />
          <Link href="home">Home</Link>
        </div>
        <div className="flex gap-5 items-center box-border pl-[30px] h-[96px] border-solid border-b-[1px] border-[#B5B5B5]">
          <Image
            src="/images/assets/navbar/sobre.svg"
            alt=""
            width={25}
            height={25}
            className="invert-[.10]"
          />
          <Link href="sobre">Sobre</Link>
        </div>
        <div className="flex gap-5 items-center box-border pl-[30px] h-[96px] border-solid border-b-[1px] border-[#B5B5B5]">
          <Image
            src="/images/assets/navbar/contatos.svg"
            alt=""
            width={25}
            height={25}
            className="invert-[.10]"
          />
          <Link href="contatos">Contatos</Link>
        </div>
        <div className="flex gap-5 items-center box-border pl-[30px] h-[96px] border-solid border-b-[1px] border-[#B5B5B5]">
          <Image
            src="/images/assets/navbar/redes.svg"
            alt=""
            width={25}
            height={25}
            className="invert-[.10]"
          />
          <Link
            onClick={() => toggleBooleanState(setMenuOpen)}
            href="#Redes"
            target="_parent"
          >
            Redes
          </Link>
        </div>
        <div className="flex justify-center items-center h-[135px] text-[#2187BF] font-bold">
          <button className="flex justify-center items-center w-[151px] h-[45px] bg-transparent border-solid border-[1px] border-[#2187BF] rounded-[17px]">
            Comece hoje
          </button>
        </div>
      </nav>
    </nav>
  )
}
