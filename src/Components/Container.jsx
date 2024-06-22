import React from 'react'

const Container = ({children, other, black}) => {
  let color = colorre()
  function colorre(){
    if(other){
      return "bg-white dark:bg-slate-700 text-black dark:text-white"
    }else if(black){
      return "bg-black/90 text-white "
    }else{
      return "bg-slate-300 dark:bg-slate-700 text-black dark:text-white"
    }
  }
  console.log(color)
  return (
    <div className={`z-0 ${color}`}>
      <div className='w-[85%] h-fit mx-auto py-8 px-10'>
        {children}
      </div>
    </div>
  )
}

export default Container;
