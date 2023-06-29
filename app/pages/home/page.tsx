'use client'

import { CardColumn } from '@/app/components/CardColumn'
import EmptyBoard from '@/app/components/EmptyBoard'
import Card from '@/app/components/card'
import React from 'react'

const empty: boolean = false

export default function Home () {
  return (
    <>
      {
        empty && <EmptyBoard />
      }
      {
        !empty && <CardColumn><Card /> <Card /> <Card /></CardColumn>
      }
    </>
  )
}
