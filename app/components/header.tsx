'use client'

import React, { MouseEventHandler, useState } from 'react'
import Button from './button'
import { createPortal } from 'react-dom'

export default function HeaderComp ({ handleClick } : {handleClick: MouseEventHandler}) {
  const [modalBoard, setBoardModal] = useState(false)

  return (
    <nav className='w-full h-[64px] flex flex-row shadow-md lg:h-[96px] md:h-[80px] justify-between pr-7'>
      <div className=' mx-4 pr-4 flex items-center justify-center md:border-r border-solid border-opacity-10 border-kpurple'>
        <img className='md:hidden w-[34px] h-[35px] ' src='/styles/assets/logo-mobile.svg' alt='logo-mobile.svg' />
        <img onClick={handleClick} className='hidden md:block cursor-pointer' src='/styles/assets/logo-dark.svg' alt='logo-dark.svg' />
      </div>

      <div className='flex items-center font-bold text-xl mr-auto'>
        Platform Launch
      </div>

      <div className='flex content-center items-center ml-2'>

        <div className='w-[48px] h-[32px] md:w-[164px] md:h-[48px] bg-kpurple hover:opacity-60 rounded-full flex justify-center items-center cursor-pointer duration-300 md:hidden'>
          <img className='w-3.5 h-3.5 md:w-2 md:h-2' src='styles/assets/icon-add-task-mobile.svg' alt='icon-add-task-mobile.svg' />
        </div>

        <div className='hidden md:block'>
          <Button style='primarylg'>+add new task</Button>
        </div>

        <div className='ml-3'>
          <img className='cursor-pointer' src='/styles/assets/icon-vertical-ellipsis.svg' alt='icon-vertical-ellipsis.svg' />
        </div>

      </div>
      {modalBoard && createPortal(<div className='absolute h-[100svh] w-screen bg-gray-600 grid place-content-center bg-opacity-90'><p className='bg-red-500'>PORTAL</p></div>, document.body)}
    </nav>
  )
}
