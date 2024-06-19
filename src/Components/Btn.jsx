import React from 'react'

const Btn = ({children, href, onClick}) => {
  return (
    <button onChange={onClick} className='bg-white text-black transition-all duration-150 px-4 py-2 rounded-md dark:bg-neutral-600 dark:text-white hover:bg-green-500 hover:text-white'>
      <a href={href}>{children}</a>
    </button>
  )
}

export default Btn
