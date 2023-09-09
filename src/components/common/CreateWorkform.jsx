// import React from 'react'

import { AiOutlineFileText } from "react-icons/ai"

const CreateWorkform = ({handleClose3}) => {
  return (
    <form className='relative lg:w-[100%] w-full px-5 text-white'>
        <h1 className='text-center text-4xl font-prompt'>Create Task</h1>
        <div className='mt-2'>
            <label className=' text-xl font-semibold'>Title </label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="username" value="Hi" name="username" placeholder='Enter Employee No.' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-xl font-semibold'>Due Date</label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="password" placeholder='Enter password' ></input>
        </div>

        <div className="hover:bg-blue-700 md:p-2 p-1 flex items-center justify-center bg-blue-500 w-28 rounded-full cursor-pointer"><p className="text-2xl mr-1"><AiOutlineFileText/></p> <p className="text-xl">File</p></div>
        
        <div className='mt-2 mb-2'>
            <div>
            <label className=' text-xl font-semibold'>Word Count </label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></input>
            </div>                        
        </div>
        
        <div className='mb-2'>
            <label className=' text-xl font-semibold'>Special requirement </label>
            <textarea className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[5rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></textarea>
        </div>
        <div className='pb-5'>
            <button onClick={handleClose3} className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-2xl  bg-green-700 hover:bg-btlinks mt-5 text-white rounded-lg py-2 '>Create work</button>
        </div>

        <div onClick={handleClose3} className='absolute w-12 h-8 top-2 right-4 rounded-full hover:text-blue-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>
    </form>
  )
}

export default CreateWorkform