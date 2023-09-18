import React, { useState } from 'react'
// import { AiOutlineFileText } from 'react-icons/ai'
import { useMyCustomHook } from '../../context/MyContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const EditUserForm = ({handleClose10, ID, U_REGNO,U_FIRSTNAME, U_LASTNAME, U_PASSWORD, U_EMAIL, U_PHONE, U_ROLE}) => { 
  const {USER_TYPE}=useMyCustomHook()

  const [regNo, setRegNo] = useState(U_REGNO)
  const [firstName, setFirstName] = useState(U_FIRSTNAME)
  const [lastName, setLastName] = useState(U_LASTNAME)
  const [password, setPassword] = useState(U_PASSWORD)
  const [email, setEmail] = useState(U_EMAIL)
  const [phone, setPhone] = useState(U_PHONE)
  const [role, setRole] = useState(U_ROLE)

  const updateUserAccountDetails=(e)=>{
    e.preventDefault()
    const UPDATED_USER_DETAILS={
        registrationNumber: regNo,
        firstName,
        lastName,
        password,
        email,
        phone,
        role,
    }

    axios.patch(`http://localhost:8001/users/${ID}`,UPDATED_USER_DETAILS)
    .then(response=>{
        toast.success('User Details updtaed successfully!')
        // console.log(response.data)
    })
    .catch(error=>{
        toast.error("Server Error (Editing user account)")
        console.log(error.message)
    })
    

  }
  return (
    <form onSubmit={updateUserAccountDetails} className='relative lg:w-[100%] w-full px-5 font-opensans text-white h-[40rem]'>
        <h1 className='text-center text-[1.9rem] text-chocolate mt-3'>Edit User Details</h1>
        <div className='mt-2'>
            <label className=' text-[1rem] text-chocolate'>Reg No. </label>
            <input onChange={(e)=>setRegNo(e.target.value)}className='text-[1rem] text-chocolate  border-1  bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="registrationNumber" value={regNo} name="username" placeholder='Enter Employee No.' ></input>
        </div>
        <div className='flex justify-between gap-x-1'>
            <div className='mb-3 mt-2'>
                <label className=' text-[1rem] text-chocolate'>First Name</label>
                <input onChange={(e)=>setFirstName(e.target.value)}className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={firstName} name="firstName" placeholder='Enter First Name' ></input>
            </div>
            
            <div className='mt-2 mb-2'>
                <div>
                <label className='text-[1rem] text-chocolate'>Last Name </label>
                <input onChange={(e)=>setLastName(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={lastName} name="lastName" placeholder='Enter Last Name' ></input>
                </div>                        
            </div>
            <div className='mt-2 mb-2'>
                <div>
                <label className='text-[1rem] text-chocolate'>Password </label>
                <input onChange={(e)=>setPassword(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={password} name="password" placeholder='Enter Last Name' ></input>
                </div>                        
            </div>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={email} name="email" placeholder='Enter Email' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Phone</label>
            <input onChange={(e)=>setPhone(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={phone} name="phone" placeholder='Enter Phone' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Role</label>
            <select onChange={(e)=>setRole(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="input" name="password" value={role} placeholder='Enter password'>
                <option value="Admin">Admin</option>
                <option value="Writer" >Writer</option>
            </select>
            <button className={`${USER_TYPE=="Admin"? "hidden":"hidden"} mt-2 px-5 bg-blue-600 hover:bg-blue-800 rounded-lg`} type="button">Edit admit rights</button>
            {/* <input  ></input> */}
        </div>
        
        <div className='pb-5'>
            <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-chocolate hover:bg-hover mt-5 text-white rounded-lg py-2 '>Save changes</button>
        </div>
        {/* onClick={handleClose10} */}

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