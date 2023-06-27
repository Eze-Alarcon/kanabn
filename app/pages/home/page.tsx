import EmptyBoard from '@/app/components/EmptyBoard'
import React from 'react'

export const metadata = {
  title: 'Kanban APP',
  description: 'Generated by create next app'
}

const empty = true

export default function Home () {
  return (
    <main className='w-full h-[100%] bg-kcianli bg-red-500'>
      {
        empty && <EmptyBoard />
      }
    </main>
  )
}
