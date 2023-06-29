import React, { MouseEventHandler } from 'react'
import CardModal from './cardModal'

export default function TabletModal ({ handleClick, modalTable } : {handleClick: MouseEventHandler, modalTable: boolean}) {
  const transition = modalTable ? 'enter' : 'exit'
  return (
    <>
      <div className={`${transition} absolute bg-kwhite h-full w-[300px] shadow-md z-10 flex flex-col`}>
        <div className='p-8'>
          <img src='styles/assets/logo-dark.svg' alt='' />
        </div>

        <div className='font-bold text-md opacity-60 ml-6 uppercase tracking-wide'>
          all Board
        </div>

        <div>
          <CardModal>Platform Launch</CardModal>
          <CardModal>Marketing Plan</CardModal>
          <CardModal>Roadmap</CardModal>
          <CardModal>+ Create New Board</CardModal>
        </div>

        <div className='rounded-md mt-auto h-32 flex justify-center items-center'>
          <div className='bg-kcian w-64 h-12' />
        </div>

      </div>
      <div onClick={handleClick} className={`bg-black w-full ${modalTable ? 'opacity-30' : 'hidden'} h-full absolute z-0`} />

    </>
  )
}
