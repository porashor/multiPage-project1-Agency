import React from 'react'

const Container = ({children, other}) => {
  return (
    <div className={`z-0 ${other? "bg-white dark:bg-slate-700 text-black dark:text-white" :"bg-slate-300 dark:bg-slate-800 text-black dark:text-white"}`}>
      <div className='w-[85%] h-fit mx-auto py-8 px-10'>
        {children}
      </div>
    </div>
  )
}

export default Container;
