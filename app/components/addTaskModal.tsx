import React from 'react'
import SubTaskCard from './subTaskCard'
import Button from './button'

export default function AddTaskModal () {
  return (
    <>
      <section className='absolute w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
        <div className='w-[343px] h-[659px] rounded-lg bg-kwhite'>
          <div className='pl-6 pr-6'>
            <h3 className='font-bold text-lg pt-5'>Add New Task</h3>
            <form action=''>
              <p className='opacity-60 font-bold text-xs pt-3 pb-1'>Title</p>
              <input
                className='w-[295px] h-[40px] border-[1px] rounded-md'
                type='text'
                placeholder='e.g. Take coffee break'
              />
              <p className='opacity-60 font-bold text-xs pt-5 pb-1'>Description</p>
              <textarea
                className='w-[295px] h-[112px] border-[1px] rounded-md'
                placeholder='e.g. It’s always good to take a break. This
                        15 minute break will  recharge the batteries
                        a little.'
              />
              <p className='opacity-60 font-bold text-xs pt-5 pb-1'>SubTask</p>
              <div>
                <SubTaskCard />
              </div>
              <Button style='secondary'>+add new task</Button>
              <p className='opacity-60 font-bold text-xs pt-3 pb-1'>Status</p>
              <select name='status' className='w-[295px] h-[40px] border-[1px] rounded-md'>
                <img src='' alt='' />
                <option value=''>Selecciona una opción</option>
                <option value='TODO'>TODO</option>
                <option value='DOING'>DOING</option>
                <option value='DONE'>DONE</option>
              </select>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
