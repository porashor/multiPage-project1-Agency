import React from 'react'

const DToken = ({children, num, tit}) => {
  return (
    <div className='grid grid-cols-[2fr_4fr] items-center justify-between'>
        <div>{children}</div>
        <div>
            <h1 className='text-3xl font-semibold'>{num}</h1>
            <p className='text-md capitalize'>{tit}</p>
        </div>
    </div>
  )
}

export default DToken
