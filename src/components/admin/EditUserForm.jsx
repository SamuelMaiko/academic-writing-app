import React from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { useMyCustomHook } from '../../context/MyContext'

const EditUserForm = ({handleClose10}) => { 
  const {USER_TYPE}=useMyCustomHook()
  return (
    <form className='relative lg:w-[100%] w-full px-5 font-opensans text-white h-[40rem]'>
        <h1 className='text-center text-[1.9rem] text-chocolate mt-3'>Edit User Details</h1>
        <div className='mt-2'>
            <label className=' text-[1rem] text-chocolate'>Reg No. </label>
            <input className='text-[1rem] text-chocolate  border-1  bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="username" value="Hi" name="username" placeholder='Enter Employee No.' ></input>
        </div>
        <div className='flex justify-between'>
            
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>First Name</label>
            <input className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="password" placeholder='Enter password' ></input>
        </div>
        
        <div className='mt-2 mb-2'>
            <div>
            <label className='text-[1rem] text-chocolate'>Last Name </label>
            <input className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></input>
            </div>                        
        </div>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Email</label>
            <input className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="There" name="text" placeholder='Enter password' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Phone</label>
            <input className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="There" name="password" placeholder='Enter password' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Role</label>
            <select className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="input" name="password" placeholder='Enter password'>
                <option value="Admin">Admin</option>
                <option value="Writer" >Writer</option>
            </select>
            <button className={`${USER_TYPE=="Admin"? "hidden":"hidden"} mt-2 px-5 bg-blue-600 hover:bg-blue-800 rounded-lg`} type="button">Edit admit rights</button>
            {/* <input  ></input> */}
        </div>
        
        <div className='pb-5'>
            <button onClick={handleClose10} className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-chocolate hover:bg-hover mt-5 text-white rounded-lg py-2 '>Save changes</button>
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

        <div onClick={handleClose10} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>
    </form>
  )
}

export default EditUserForm