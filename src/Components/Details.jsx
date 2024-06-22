import React from 'react'
import Container from './Container'
import DToken from './DToken'
import { Fa42Group } from 'react-icons/fa6'
import { BiAlignJustify } from 'react-icons/bi'
import { GiClubs } from 'react-icons/gi'
import { PiPaypalLogoBold } from 'react-icons/pi'

const Details = () => {
  return (
    <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center min-h-[300px]'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-semibold'>Helping a local</h1>
                <h1 className='text-4xl font-semibold bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-400'>business reinvent itself</h1>
                <p className='text-sm text-slate-400'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius optio, vitae labore totam fuga laborum.
                </p>
            </div>
            <div className='grid gap-12'>
                <div className='flex items-center justify-around  gap-4'>
                    <DToken num={2245789} tit={`members`}>
                        <Fa42Group className='text-5xl text-slate-700 hover:text-green-500'/>
                    </DToken>
                    <DToken num={8876789} tit={`event booking `}>
                        <BiAlignJustify className='text-5xl text-slate-700 hover:text-green-500'/>
                    </DToken>
                </div>
                <div className='flex items-center justify-around gap-4'>
                <DToken num={45335} tit={`clubs`}>
                        <GiClubs className='text-5xl text-slate-700 hover:text-green-500'/>
                    </DToken>
                    <DToken num={1998888909} tit={`payments`}>
                        <PiPaypalLogoBold className='text-5xl text-slate-700 hover:text-green-500'/>
                    </DToken>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Details
