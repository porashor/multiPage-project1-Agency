import React from 'react'
import Container from './Container'
import Header from './Header'
import { system } from '../data/Data'
import SCard from './SCard'
const System = () => {
  return (
    <Container other >
        <Header h1={`manage your entire community in a single system`} p={`we have been working with some fortune 500+ clients `}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {system.map((item, index)=>(
                <SCard key={index} title={item.header} para={item.p} img={item.img}/>
            ))}
        </div>
    </Container>
  )
}

export default System
