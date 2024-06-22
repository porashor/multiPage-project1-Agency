import React from 'react'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const Btn1 = ({title}) => {
  return (
    <div className='py-2 flex cursor-pointer items-center gap-3 px-3 text-xl font-semibold hover:bg-green-500 transition-all duration-200 hover:text-white rounded-md text-green-500 capitalize'>{title}
    <FaSquareArrowUpRight/>
    </div>
  )
}

export default Btn1
