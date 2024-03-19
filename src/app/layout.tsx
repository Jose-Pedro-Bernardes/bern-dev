import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { DESCRIPTION } from '@/variables'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
