import React from 'react'

export default function cardModal ({ children } : {children: React.ReactNode}) {
  return (
    <>
      <section className='flex text-black hover:bg-kpurple hover:text-kwhite p-4 rounded-r-full mr-6 mt-3 duration-200 cursor-pointer'>
        <div className=' ml-3 mr-2 flex items-center justify-center'>
          <img src='/styles/assets/icon-board.svg' alt='icon-board.svg' />
        </div>
        <div className='font-bold text-md capitalize'>
          {children}
        </div>
      </section>
    </>
  )
}
