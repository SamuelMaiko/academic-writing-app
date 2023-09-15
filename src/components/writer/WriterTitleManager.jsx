import React from 'react'
import { NavLink } from 'react-router-dom'

const WriterTitleManager = ({title}) => {
  return (
    <div className="w-full mb-4">
      <div className="w-full h-[5rem] flex justify-center lg:justify-normal items-center border-t-0 border-b-1 border-b-[rgba(0,0,0,0.14)] border-t-[rgba(0,0,0,0.14)]">
        <NavLink to='/dashboard-overview/writer/dashboard/'><h1  className='text-[1.2rem] text-[#0374b5] hover:underline cursor-pointer'>Writer dashboard  </h1></NavLink>
        <h1 className='mx-2 text-lg'>></h1>
        <h1 className="text-tcolor md:text-[1.3rem] text-[2rem] "> {title}</h1>
      </div>
    </div> 
  )
}

export default WriterTitleManager