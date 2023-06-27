import React from 'react'

export default function EmptyBoard () {
  return (
    <div className='h-full grid place-content-center gap-6 justify-center w-2/3 mx-auto'>
      <p className='text-[#828FA3] text-base font-bold text-center'>This board is empty. Create a new column to get started.</p>
      <button className='w-44 h-12 bg-kpurple mx-auto rounded-3xl text-kwhite font-bold'>+ Add New Column</button>
    </div>
  )
}

export { EmptyBoard }
