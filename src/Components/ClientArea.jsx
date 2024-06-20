import React from 'react'
import Container from './Container'
import Header from './Header'
import { Fa500Px, FaStar } from 'react-icons/fa'
import { Fa42Group, Fa7 } from 'react-icons/fa6'
import { BiAccessibility, BiMagnet } from 'react-icons/bi'
import { GiAbacus } from 'react-icons/gi'

const ClientArea = () => {
  return (
    <Container other>
        <Header h1={`Our Client`} p={`we have been working with some features and 500+ clients`}/>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-4 my-8 text-4xl text-slate-700 dark:text-slate-400'>
            <FaStar/>
            <Fa42Group/>
            <BiMagnet/>
            <Fa500Px/>
            <BiAccessibility/>
            <GiAbacus/>
        </div>
    </Container>
  )
}

export default ClientArea
