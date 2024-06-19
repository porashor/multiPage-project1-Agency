import React, { useState } from 'react'
import { navbar } from '../data/Data'
import Btn from './Btn'
import { BiMenu, BiX } from 'react-icons/bi'
const Navbar = () => {
    const [nav, setnav] = useState(false)
    function toggle (){
        if(nav){
            setnav(false)
        }else{
            setnav(true)
        }
    }
  return (
    <div className='bg-white text-black dark:bg-black/80 dark:text-white w-full sticky top-0 left-0 right-0 border-b border-neutral-300 px-5 py-8 backdrop:blur-sm'>
      <div className='relative'>
      <div className='w-[90%] mx-auto grid grid-cols-[10fr_1fr] md:grid-cols-[1fr_3fr_1fr] items-center justify-between'>
        <div className='text-4xl text-amber-500 font-bold uppercase'>LoGo</div>
        <ul className='hidden md:flex gap-10 text-xl items-center justify-center'>
            {navbar.map((item, index)=>(
                <li className='hover:text-amber-500 duration-200 transition-all' key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
        <div className='hidden md:flex gap-5 items-center justify-end'>
            <Btn onClick={''} href="login">Login</Btn>
            <Btn onClick={''} href="signin">Sign in</Btn>
        </div>
        <button onClick={toggle} className='block md:hidden'>
            {nav ? <BiX className='text-3xl'/> : <BiMenu className='text-3xl'/>}
        </button>
      </div>
      {
        nav && <div className='absolute top-[100px] dark:bg-neutral-800 bg-slate-300/90 rounded-md duration-200 transition-all flex items-center gap-3 flex-col py-4 justify-center w-full min-h-[200px] dark:text-white text-black backdrop-blur-sm md:hidden'>
            <ul>
                {
                    navbar.map((item, index)=>(
                        <div className='hover:text-amber-500 transition-all duration-150' key={index}>
                            <a href={item.href}>{item.name}</a>
                        </div>
                    ))
                }
            </ul>
            <div className='flex gap-4'>
                <Btn onClick={''} href="login">Login</Btn>
                <Btn onClick={''} href="signin">Sign in</Btn>
            </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Navbar
