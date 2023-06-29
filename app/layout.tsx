/* eslint-disable camelcase */
'use client'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import HeaderComp from './components/header'
import { ReactNode, useState } from 'react'
import TabletModal from './components/tabletModal'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout ({ children }: {children: ReactNode}) {
  const [modalTablet, setModalTablet] = useState(false)

  const handleClick = () => setModalTablet(prevState => !prevState)

  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.className} flex flex-col h-[100svh]`}>
        <TabletModal handleClick={handleClick} modalTable={modalTablet} />
        <HeaderComp handleClick={handleClick} />
        <main className='w-full h-full bg-kcianli px-4 pt-6'>
          {children}
        </main>
      </body>
    </html>
  )
}
