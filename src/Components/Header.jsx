import React from 'react'

const Header = ({h1,p}) => {
  return (
    <div className='flex-col flex justify-center items-center gap-4 max-w-[600px] mx-auto'>
      <h1 className='text-xl md:text-3xl font-bold capitalize text-center '>{h1}</h1>
      <h1 className='text-sm md:text-md dark:text-slate-400 text-slate-700 text-center '>{p}</h1>
    </div>
  )
}

export default Header
