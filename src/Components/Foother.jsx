import React from 'react'
import Container from './Container'
import { navbar } from '../data/Data'
import Btn from './Btn'

const Foother = () => {
  return (
    <Container black>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_3fr] items-center gap-5 '>
            <div>
                <div className='text-yellow-600 text-4xl font-bold uppercase'>Logo</div>
                <div>we are a business type organisation</div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-semibold uppercase'>Company</h1>
                <div className='flex flex-col gap-1 justify-center '>
                    {navbar.map((item, index)=>(
                        <div key={index}>
                            <a href={item.link}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-semibold uppercase'>Company</h1>
                <div className='flex flex-col gap-1 justify-center '>
                    {navbar.map((item, index)=>(
                        <div key={index}>
                            <a href={item.link}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex gap-2'>
                <input type="text" className='w-full text-3xl py-1 px-2 rounded-md outline-none text-white bg-slate-700' />
                <Btn href={'email'} onClick={``}>Submit</Btn>
            </div>
        </div>
    </Container>
  )
}

export default Foother
