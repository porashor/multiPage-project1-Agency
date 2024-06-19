import React from 'react'
import HCard from './HCard'
import { slider } from '../data/Data'

const Hero = () => {
  return (
    <div className='bg-white dark:bg-slate-700 text-black dark:text-white'>
      <div className='w-[85%] h-fit mx-auto py-8 px-10'>
        {
            slider.map((item, index)=>(
                <HCard key={index} h1={item.header} h2={item.colorheader} p={item.para} href={``} image={item.image} btn={item.btnText}/>
            ))
        }
      </div>
    </div>
  )
}

export default Hero
