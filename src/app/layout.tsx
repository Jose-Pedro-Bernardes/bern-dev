/* eslint-disable camelcase */
import './globals.css'
import {
  Inter,
  Nunito_Sans,
  Open_Sans,
  Shippori_Antique_B1,
} from 'next/font/google'
import type { Metadata } from 'next'
import { DESCRIPTION } from '@/variables'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const shipporiAntiqueB1 = Shippori_Antique_B1({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bern Dev - Desenvolvedor Web',
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${shipporiAntiqueB1.variable} ${inter.variable}`}
    >
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
