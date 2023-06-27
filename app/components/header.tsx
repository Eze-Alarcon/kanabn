import React from 'react'

export default function HeaderComp() {
  return (
<nav className="w-full h-[64px] flex flex-row shadow-md">
      <div className="w-3/12 flex items-center justify-center md:border-r border-solid border-opacity-20 border-gray-500">
        <img className=' md:hidden w-[34px] h-[35px] '  src="/styles/assets/logo-mobile.svg" alt="logo-mobile.svg" />
        <img className='hidden md:block' src="/styles/assets/logo-dark.svg" alt="logo-dark.svg" />
      </div>
      <div className="w-7/12 flex items-center font-bold text-xl md:mx-3">
        Platform Launch
      </div>
      <div className="w-4/12 flex content-center items-center justify-evenly">
      <div className='w-[48px] h-[32px] md:w-[164px] md:h-[48px] opacity-30 bg-kpurple hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer duration-300 md:justify-evenly'>
          <img className='w-3.5 h-3.5 md:w-2 md:h-2' src="styles/assets/icon-add-task-mobile.svg" alt="icon-add-task-mobile.svg" />
          <p className='hidden md:block text-md font-bold text-kwhite'>Add New Task</p>
        </div>
        <div>
          <img src="/styles/assets/icon-vertical-ellipsis.svg" alt="icon-vertical-ellipsis.svg" />
          </div>
      </div>
    </nav>
  )
}
