import React, { ReactNode } from 'react'

function CardColumn ({ children }: { children: ReactNode }) {
  return (
    <section className='grid'>
      <div className='flex h-4 justify-start gap-2 items-center'>
        <div className='h-4 rounded-full w-4 bg-cyan-500' />
        <p className='font-bold text-kgray text-base tracking-widest uppercase'>Todo (4)</p>
      </div>
      {children}
    </section>
  )
}

export { CardColumn }
