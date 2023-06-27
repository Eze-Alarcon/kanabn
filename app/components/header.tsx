import React from 'react'

export default function HeaderComp () {
  return (
    <nav className='w-full h-[64px] flex flex-row'>
      <div className='w-3/12 flex items-center justify-center'>
        <img className='w-[34px] h-[35px]' src='/styles/assets/logo-mobile.svg' alt='logo-mobile.svg' />
      </div>
      <div className='w-8/12 flex items-center font-bold text-xl'>
        Platform Launch
      </div>
      <div className='w-3/12 flex content-center items-center justify-evenly'>
        <div className='w-[48px] h-[32px] opacity-30 bg-kpurple hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer duration-300'>
          <img className='w-3.5 h-3.5' src='styles/assets/icon-add-task-mobile.svg' alt='icon-add-task-mobile.svg' />
        </div>
        <div>
          <img src='/styles/assets/icon-vertical-ellipsis.svg' alt='icon-vertical-ellipsis.svg' />
        </div>
      </div>
    </nav>
  )
}
