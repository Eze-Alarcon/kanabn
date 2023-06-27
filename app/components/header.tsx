import React from 'react'

export default function HeaderComp() {
  return (
<nav className="w-100% h-14 flex flex-row">
      <div className="w-3/12 flex items-center justify-center">
        <img className='w-7 h-7'  src="/styles/assets/logo-mobile.svg" alt="logo-mobile.svg" />
      </div>
      <div className="w-8/12 flex items-center font-bold">
        Platform Launch
      </div>
      <div className="w-5/12 flex content-center items-center justify-evenly">
        <div className='w-14 h-10 opacity-30 bg-kpurple rounded-full flex justify-center items-center'>
          <img className='w-3.5 h-3.5' src="styles/assets/icon-add-task-mobile.svg" alt="icon-add-task-mobile.svg" />
        </div>
        <div>
          <img src="/styles/assets/icon-vertical-ellipsis.svg" alt="icon-vertical-ellipsis.svg" />
          </div>
      </div>
    </nav>
  )
}
