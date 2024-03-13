import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link href="home">Home</Link>
      <Link href="sobre">Sobre</Link>
      <Link href="contatos">Contatos</Link>
      <Link href="#Redes">Redes</Link>
    </nav>
  )
}
