'use client'

import React, { MouseEventHandler, useState } from 'react'
import { createPortal } from 'react-dom'
import Button from './button'
import { ViewTaskModal } from './ViewTaskModal'
import Image from 'next/image'

export default function HeaderComp ({ handleClick } : {handleClick: MouseEventHandler}) {
  const [modalBoard, setBoardModal] = useState(true)

  // estaba cansado del error asique le agrege esta linea para evitar los errores de compilacion, eslint, etc
  if (typeof (document) !== 'undefined' && !modalBoard) setBoardModal(true)

  return (
    <nav className='w-full h-[64px] flex flex-row shadow-md lg:h-[96px] md:h-[80px] justify-between pr-7'>
      <div className=' mx-4 pr-4 flex items-center justify-center md:border-r border-solid border-opacity-10 border-kpurple'>
        <Image className='md:hidden' width={34} height={35} src='/styles/assets/logo-mobile.svg' alt='logo-mobile.svg' />
        <Image onClick={handleClick} className='hidden md:block cursor-pointer' src='/styles/assets/logo-dark.svg' width={153} height={26} alt='logo-dark.svg' />
      </div>

      <div className='flex items-center font-bold text-xl mr-auto'>
        Platform Launch
      </div>

      <div className='flex content-center items-center ml-2'>

        <div className='w-[48px] h-[32px] md:w-[164px] md:h-[48px] bg-kpurple hover:opacity-60 rounded-full flex justify-center items-center cursor-pointer duration-300 md:hidden'>
          <Image width={14} height={14} src='styles/assets/icon-add-task-mobile.svg' alt='icon-add-task-mobile.svg' />
        </div>

        <div className='hidden md:block'>
          <Button style='primarylg' size='h-10 max-w-[295px]'>+add new task</Button>
        </div>

        <div className='ml-3'>
          <Image width={5} height={20} className='cursor-pointer' src='/styles/assets/icon-vertical-ellipsis.svg' alt='icon-vertical-ellipsis.svg' />
        </div>

      </div>
      {modalBoard && createPortal(<ViewTaskModal />, document.body)}
    </nav>
  )
}
