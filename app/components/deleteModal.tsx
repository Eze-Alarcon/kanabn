import React from 'react'
import Button from './button'

export default function DeleteModal () {
  return (
    <>
      <section className='flex flex-col justify-center items-center absolute bg-black bg-opacity-50 w-full h-full'>
        <div className='bg-kwhite w-[343px] h-[284px] md:w-[480px] md:h-[220px] rounded-md shadow-md pl-6 pr-6'>
          <div className='text-lg pt-6 font-bold capitalize text-kred pb-5'>delete this board?</div>
          <div className='text-sm opacity-60 leading-6'>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</div>
          <div className='flex flex-col md:flex-row md:justify-center p-3 w-full'>
            <div className='pt-3'><Button style='delete'>delete</Button></div>
            <div className='pt-3 md:pl-4'><Button style='secondary'>cancel</Button></div>
          </div>
        </div>
      </section>
    </>
  )
}
