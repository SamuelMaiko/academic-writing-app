// import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { AiOutlineFileText } from "react-icons/ai"
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useMyCustomHook } from '../../context/MyContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMyAPIcontext } from "../../context/APIs";

const CreateUserForm = ({handleClose4}) => {
    // const [open5, setOpen5] =useState(false);
    // const handleOpen5= () => setOpen5(true);
    // const handleClose5 = () => setOpen5(false);
    const {allAccounts,setAllAccounts}=useMyAPIcontext()
    const {USER_TYPE}=useMyCustomHook()
    const [regNo, setRegNo] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("Admin")

    const createNewUser=(e)=>{
        e.preventDefault()
        const NEW_USER_DETAILS={
            registrationNumber: regNo,
            firstName,
            lastName,
            password,
            email,
            phone,
            role,
        }

        const config={
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json'
            }
        }

        axios.post('http://localhost:8001/users',NEW_USER_DETAILS,config)
        .then(response=>{
            toast.success('User account created successfully!')
            const newAccounts=[...allAccounts,NEW_USER_DETAILS]
            setAllAccounts(newAccounts)
            console.log(response.data)
        })
        .catch(error=>{
            toast.error("Server Error (Creating new user account)")
            console.log(error.message)
        })

        e.target.reset()
    }

  return (
    <form onSubmit={createNewUser} className='relative lg:w-[100%] w-full font-opensans px-5 text-white h-[40rem]'> 
        <h1 className='text-center text-[1.9rem] text-chocolate mt-3'>Create New User</h1>
        <div className='mt-2'>
            <label className=' text-[1rem] text-chocolate' required>Reg No. </label>
            <input onChange={(e)=>setRegNo(e.target.value)} className='text-[1rem] text-chocolate  border-1  bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={regNo} name="registrationNumber" placeholder='Enter Employee No.' required></input>
        </div>
        <div className='flex justify-between gap-x-1'>
            <div className='mb-3 mt-2'>
                <label className=' text-[1rem] text-chocolate' >First Name</label>
                <input onChange={(e)=>setFirstName(e.target.value)}className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={firstName} name="firstName" placeholder='Enter First Name' required></input>
            </div>
            
            <div className='mt-2 mb-2'>
                <div>
                <label className='text-[1rem] text-chocolate'>Last Name </label>
                <input onChange={(e)=>setLastName(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={lastName} name="lastName" placeholder='Enter Last Name' required></input>
                </div>                        
            </div>
            <div className='mt-2 mb-2'>
                <div>
                <label className='text-[1rem] text-chocolate'>Password </label>
                <input onChange={(e)=>setPassword(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={password} name="password" placeholder='Enter Password' required></input>
                </div>                        
            </div>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={email} name="email" placeholder='Enter Email' required></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Phone</label>
            <input onChange={(e)=>setPhone(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={phone} name="phone" placeholder='Enter Phone' ></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className=' text-[1rem] text-chocolate'>Role</label>
            <select onChange={(e)=>setRole(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="input" name="password" value={role} placeholder='Enter password'required>
                <option value="Admin">Admin</option>
                <option value="Writer" >Writer</option>
            </select>
            <button className={`${USER_TYPE=="Admin"? "hidden":"hidden"} mt-2 px-5 bg-blue-600 hover:bg-blue-800 rounded-lg`} type="button">Edit admit rights</button>
            {/* <input  ></input> */}
        </div>
        
        <div className='pb-5'>
            <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-chocolate hover:bg-hover mt-5 text-white rounded-lg py-2 '>Create user</button>
        </div>
        {/* onClick={handleClose4} */}
        {/* <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open5} onClose={handleClose5} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
            <Fade in={open5}>
                <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[50rem]">
                    <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                        <h1>Hi there it works!</h1>
                    </Typography>
                </Box>
            </Fade>
        </Modal> */}

        <div onClick={handleClose4} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>
    </form>
    // Admin rights Modal
    
  )
}

export default CreateUserForm