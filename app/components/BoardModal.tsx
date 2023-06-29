import React from 'react'
import Button from './button'

const boardColumns = ['Todo', 'Doing']

function BoardModal () {
  return (
    <div className='absolute h-[100svh] w-screen bg-black grid place-content-center bg-opacity-30 z-40'>
      <article className='bg-kwhite w-full max-w-[345px] min-h-[415px] p-6 rounded-md flex flex-col gap-6'>
        <h3 className='text-lg font-bold text-kblack'>Add New Board</h3>
        <form className='grid gap-2'>
          <label htmlFor='boardName' className='text-sm font-bold text-kgrayli'>Board Name</label>
          <input type='text' id='boardName' name='boardName' placeholder='e.g. Web Design' className='w-full h-10 border-solid border-kgrayli border-[1px] rounded border-opacity-25 pl-4 py-2 outline-kpurple' />
          <p className='text-sm font-bold text-kgrayli'>Board Columns</p>
          <div>
            <p>Todo</p>

          </div>

          <Button key='newColBtn' style='secondary'><p>+ Add New Column</p></Button>
          <Button key='newBoardBtn' style='primarysm'><p>+ Add New Column</p></Button>
        </form>
      </article>
    </div>
  )
}

export { BoardModal }
