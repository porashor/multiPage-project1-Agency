import React from 'react'
import Btn from './Btn'

const FixerCard = ({image1, title,para,btn}) => {
  return (
    <div className='grid grid-cols-[2fr_3fr] gap-6 items-center justify-between min-h-[550px]'>
        <div className='flex justify-center items-center'>
            <img src={image1} className='w-[300px] shadow-lg' alt="fixture" />
        </div>
        <div className='flex flex-col items-start gap-6 space-y-3'>
            <h1 className='text-4xl leading-10 font-semibold py-4 '>
                {title}
            </h1>
            <p className='text-sm text-slate-500'>
                {para}
            </p>
            <Btn href={`learn`}>{btn}</Btn>
        </div>
    </div>
  )
}

export default FixerCard
