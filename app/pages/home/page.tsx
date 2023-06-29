'use client'

import { CardColumn } from '@/app/components/CardColumn'
import EmptyBoard from '@/app/components/EmptyBoard'
import Card from '@/app/components/card'
import React, { useState } from 'react'

const empty: boolean = false

export default function Home () {
  const [boardModal, setBoardModal] = useState<boolean | null>(null)

  function openModal (e: Event) {
    e.preventDefault()
    setBoardModal(true)
  }

  return (
    <>
      {
        empty && <EmptyBoard />
      }
      {
        !empty && <CardColumn><Card /> <Card /> <Card /></CardColumn>
      }
      {
        boardModal && <div>a</div>
      }
    </>
  )
}
