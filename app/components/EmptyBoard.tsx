import React from 'react'
import Button from './button'

export default function EmptyBoard () {
  return (
    <div className='h-full grid place-content-center gap-6 justify-center w-2/3 mx-auto'>
      <p className='text-[#828FA3] text-base font-bold text-center'>This board is empty. Create a new column to get started.</p>
      <Button style="primarylg">+ Add New Column</Button>
    </div>
  )
}

export { EmptyBoard }
