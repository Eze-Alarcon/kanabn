import React from 'react'
import SubTaskCard from './subTaskCard'
import Button from './button'

function NewBoardModal () {
  return (
    <div className='absolute h-[100svh] w-screen bg-black grid place-content-center bg-opacity-30 z-40'>
      <article className='bg-kwhite w-screen max-w-[345px] md:max-w-[480px] min-h-[415px] p-6 rounded-md flex flex-col gap-6'>
        <h3 className='text-lg font-bold text-kblack'>Add New Board</h3>
        <form className='grid gap-2'>
          <label htmlFor='boardName' className='text-sm font-bold text-kgrayli'>Board Name</label>
          <input type='text' id='boardName' name='boardName' placeholder='e.g. Web Design' className='w-full h-10 border-solid border-kgrayli border-[1px] rounded border-opacity-25 pl-4 py-2 outline-kpurple' />
          <div className='grid gap-2 mt-4 mb-1'>
            <p className='text-sm font-bold text-kgrayli'>Board Columns</p>
            <div className='grid gap-2 overflow-y-auto max-h-28 scrollbar-thin scrollbar-thumb-kpurple pr-4'>
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
              <SubTaskCard />
            </div>
          </div>

          <Button key='newColBtn' style='secondary' size='mb-4'><p>+ Add New Column</p></Button>
          <Button key='newBoardBtn' style='primarysm'><p>Create New Board</p></Button>
        </form>
      </article>
    </div>
  )
}

export { NewBoardModal }
