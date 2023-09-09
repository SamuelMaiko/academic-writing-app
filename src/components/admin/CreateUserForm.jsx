// import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { AiOutlineFileText } from "react-icons/ai"
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useMyCustomHook } from '../../context/MyContext';

const CreateUserForm = ({handleClose4}) => {
    const [open5, setOpen5] =useState(false);
    const handleOpen5= () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);

    const {USER_TYPE}=useMyCustomHook()

  return (
    <form className='relative lg:w-[100%] w-full px-5 text-white'>
        <h1 className='text-center text-4xl font-prompt mt-3'>Create New User</h1>
        <div className='mt-2'>
            <label className=' text-xl font-semibold'>Reg No. </label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="username" value="Hi" name="username" placeholder='Enter Employee No.' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-xl font-semibold'>First Name</label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="password" placeholder='Enter password' ></input>
        </div>
        
        <div className='mt-2 mb-2'>
            <div>
            <label className=' text-xl font-semibold'>Last Name </label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></input>
            </div>                        
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-xl font-semibold'>Email</label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="There" name="text" placeholder='Enter password' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-xl font-semibold'>Phone</label>
            <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="There" name="password" placeholder='Enter password' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-xl font-semibold'>Role</label>
            <select className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="input" name="password" placeholder='Enter password'>
                <option value="Admin">Admin</option>
                <option value="Writer" >Writer</option>
            </select>
            <button className={`${USER_TYPE=="Admin"? "hidden":"hidden"} mt-2 px-5 bg-blue-600 hover:bg-blue-800 rounded-lg`} type="button">Edit admit rights</button>
            {/* <input  ></input> */}
        </div>
        
        <div className='pb-5'>
            <button onClick={handleClose4} className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-2xl  bg-green-600 hover:bg-green-800 mt-5 text-white rounded-lg py-2 '>Create user</button>
        </div>

        {/* <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open5} onClose={handleClose5} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
            <Fade in={open5}>
                <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[50rem]">
                    <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                        <h1>Hi there it works!</h1>
                    </Typography>
                </Box>
            </Fade>
        </Modal> */}

        <div onClick={handleClose4} className='absolute w-12 h-8 top-2 right-4 rounded-full hover:text-blue-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>
    </form>
    // Admin rights Modal
    
  )
}

export default CreateUserForm