import React from 'react'

const SCard = ({title, para, img}) => {
  return (
    <div className='w-full border border-slate-400 px-10 py-12 rounded-md hover:shadow-md text-center bg-white dark:bg-slate-500 transition-all duration-200 hover:border-green-500 max-w-[500px] hover:bg-green-500 m-10'>
        <div className='flex flex-col items-center justify-center py-6 space-y-4'>
            <img src={img} className='py-10  px-5 w-[150px] h-fit' alt="ait" />
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p className='text-sm text-slate-600 '>{para}</p>
        </div>
    </div>
  )
}

export default SCard
