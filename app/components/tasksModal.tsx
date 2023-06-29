import React from 'react'
import SubTaskCard from './subTaskCard'
import Button from './button'

export default function TaskModal () {
  return (
    <>
      <section className='absolute w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
        <div className='w-[343px] h-[659px] md:w-[480px] md:h-[675px] rounded-lg bg-kwhite shadow-lg'>
          <div className='pl-6 pr-6'>
            <h3 className='font-bold text-lg pt-5'>Add New Task</h3>
            <form action=''>
              <p className='opacity-60 font-bold text-xs pt-3 pb-1'>Title</p>
              <input
                className='w-full h-[40px] border-[1px] rounded-md pl-4 text-sm'
                type='text'
                placeholder='e.g. Take coffee break'
              />
              <p className='opacity-60 font-bold text-xs pt-4 pb-1'>Description</p>
              <textarea
                className='w-full h-[112px] border-[1px] rounded-md pt-4 pl-4 pr-2 text-sm'
                placeholder='e.g. It’s always good to take a break. This
                        15 minute break will  recharge the batteries
                        a little.'
              />
              <p className='opacity-60 font-bold text-xs pt-4 pb-1'>SubTask</p>
              <div className='h-[120px] mb-5 overflow-auto scrollbar-thin'>
                <SubTaskCard />
                <SubTaskCard />
                <SubTaskCard />
                <SubTaskCard />
                <SubTaskCard />
                <SubTaskCard />
              </div>
              <Button style='secondary' size='full'>+add new task</Button>
              <p className='opacity-60 font-bold text-xs pt-3 pb-1'>Status</p>
              <select name='status' className='w-full h-[40px] border-[1px] rounded-md mb-5'>
                <option value=''>Selecciona una opción</option>
                <option value='TODO'>TODO</option>
                <option value='DOING'>DOING</option>
                <option value='DONE'>DONE</option>
              </select>
              <div><Button style='primarysm'>create task</Button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
