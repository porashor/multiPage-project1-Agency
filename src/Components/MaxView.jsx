import React from 'react'
import Container from './Container'
import Header from './Header'
import image1 from "../assets/slider/web1.png"
import Btn1 from './Btn1'
const MaxView = () => {
  return (
    <Container other>
        <Header h1={`Caring is the new Marketing`} p={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis odio tempora obcaecati ducimus distinctio doloremque cupiditate facere commodi possimus!`}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-5 my-4'>
            <div className='max-w-[400px] rounded-md relative my-6'>
                <img src={image1} className='w-[400px] h-[400px] object-cover rounded-lg' alt="" />
                <div className='w-[340px] min-h-[150px] bg-white shadow-lg flex flex-col items-center justify-center gap-3 absolute right-[20%] translate-x-12 -bottom-[10%] hover:scale-105 transition-all duration-300 rounded-lg'>
                    <p className='text-2xl text-center font-semibold text-slate-700 mt-5'>Creating streamlined safeguarding process with oneren</p>
                    <Btn1 title={`Meet all customers`}/>
                </div>
            </div>
            <div className='max-w-[400px] rounded-md relative'>
                <img src={image1} className='w-[400px] h-[400px] object-cover rounded-lg' alt="" />
                <div className='w-[340px] min-h-[150px] bg-white shadow-lg flex flex-col items-center justify-center gap-3 absolute right-[20%] translate-x-12 -bottom-[10%] hover:scale-105 transition-all duration-300 rounded-lg'>
                    <p className='text-2xl text-center font-semibold text-slate-700 mt-5'>Creating streamlined safeguarding process with oneren</p>
                    <Btn1 title={`Meet all customers`}/>
                </div>
            </div>
            <div className='max-w-[400px] rounded-md relative'>
                <img src={image1} className='w-[400px] h-[400px] object-cover rounded-lg' alt="" />
                <div className='w-[340px] min-h-[150px] bg-white shadow-lg flex flex-col items-center justify-center gap-3 absolute right-[20%] translate-x-12 -bottom-[10%] hover:scale-105 transition-all duration-300 rounded-lg'>
                    <p className='text-2xl text-center font-semibold text-slate-700 mt-5'>Creating streamlined safeguarding process with oneren</p>
                    <Btn1 title={`Meet all customers`}/>
                </div>
            </div>
        </div>
    </Container>
  )
}


export default MaxView
