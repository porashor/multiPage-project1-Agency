import React from 'react'
import Btn from './Btn'

const HCard = ({image,h1,h2,p,btn,href}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10'>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>{h1}</h1>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent italic'>{h2}</h1>
        <p className='text-slate-300 '>{p}</p>
        <Btn href={href}>{btn}</Btn>
      </div>
      <div className='flex items-center justify-center'>
        <img src={image} alt="image" className='h-[80%] w-[80%] px-3 py-6' />
      </div>
    </div>
  )
}

export default HCard
