import React from 'react'

export default function SubTaskCard () {
  return (
    <>
      <div className='flex'>
        <input
          className='w-[264px] h-[40px] border-[1px]'
          placeholder='e.g. Make coffee'
          type='text'
        />
        <div className='flex justify-center items-center pl-5'>
          <img className='h-[18px] w-[18px]' src='/styles/assets/icon-cross.svg' alt='icon-cross.svg' />
        </div>
      </div>
    </>
  )
}
