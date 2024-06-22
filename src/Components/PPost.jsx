import React from 'react'
import Container from './Container'
import image1 from "../assets/system/pic2.png"
import Btn1 from './Btn1'
import { FaKeybase, FaMouse } from 'react-icons/fa'
import { Fa42Group } from 'react-icons/fa6'
import { AiFillCaretDown } from 'react-icons/ai'
const PPost = () => {
  return (
    <Container>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] items-center justify-between min-h-[500px]'>
            <div className='flex items-center justify-center '>
                <img src={image1} className='w-[200px]' alt="newimage" />
            </div>
            <div className='flex flex-col items-start justify-center gap-5'>
                <p className='leading-8 text-md text-slate-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque ea saepe consectetur dignissimos facilis aliquam in obcaecati, eius quibusdam, fugit, dolores tempore. Earum totam a est ab quis explicabo repellat consequuntur eaque atque voluptas in voluptatem ducimus magni expedita ullam, labore reprehenderit vel porro cumque, debitis quos distinctio fugit!
                </p>
                <div className='flex flex-col gap-2 items-start justify-center'>
                    <h1 className='text-2xl font-semibold text-green-600 '>Tim Smith</h1>
                    <p className='text-md text-slate-700'>British Dragon Boat Racing Association.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-3 text-2xl text-slate-700'>
                        <FaMouse/><Fa42Group/><AiFillCaretDown/><FaKeybase/>
                    </div>
                    <Btn1 title={`meet all customers`}/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PPost
