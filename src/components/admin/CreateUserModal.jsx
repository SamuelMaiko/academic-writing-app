import { useState } from 'react';
import { useMyCustomHook } from '../../context/MyContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMyBaseAPIContext } from "../../context/BaseAPIContext"

const CreateUserModal = ({setCreateUserOpenModel}) => {

    const {USER_TYPE}=useMyCustomHook()
    const {BASE_URL}=useMyBaseAPIContext()
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
            work_id: regNo,
            firstname:firstName,
            lastname:lastName,
            password,
            email,
            phone_number:phone,
            role,
        }

        const config={
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json'
            }
        }

        axios.post(`${BASE_URL}/users`,NEW_USER_DETAILS,config)
        .then(()=>{
            toast.success('User account created successfully!')
            setCreateUserOpenModel(false)

            setRegNo("")
            setFirstName("")
            setLastName("")
            setPassword("")
            setEmail("")
            setPhone("")
            setRole("Writer")
        })
        .catch(error=>{
            toast.error("Server Error (Creating new user account)")
            console.log(error.message)
        })

        e.target.reset()
    }

  return (
    <div>
        <div className='absolute w-[46rem] p-4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor rounded-lg'>
            <form onSubmit={createNewUser} className='relative lg:w-[100%] w-full font-opensans px-5 text-white h-[32rem]'> 
                <h1 className='text-center text-[1.9rem] font-medium text-chocolate mt-3'>Create New User</h1>
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
                    
                </div>
                <div className='flex justify-between gap-x-1'>
                    <div className='mb-3 mt-2'>
                        <label className=' text-[1rem] text-chocolate'>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={email} name="email" placeholder='Enter Email' required></input>
                    </div>
                    <div className='mb-3 mt-2'>
                        <label className=' text-[1rem] text-chocolate'>Phone</label>
                        <input onChange={(e)=>setPhone(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={phone} name="phone" placeholder='Enter Phone' ></input>
                    </div>
                    <div className='mt-2 mb-2'>
                        <div>
                        <label className='text-[1rem] text-chocolate'>Password </label>
                        <input onChange={(e)=>setPassword(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={password} name="password" placeholder='Enter Password' required></input>
                        </div>                        
                    </div>
                </div>
                <div className='mb-3 mt-2'>
                    <label className=' text-[1rem] text-chocolate'>Role</label>
                    <select onChange={(e)=>setRole(e.target.value)} className='text-[1rem] text-chocolate  border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="input" name="password" value={role} placeholder='Enter password'required>
                        <option value="Admin">Admin</option>
                        <option value="Writer" >Writer</option>
                    </select>
                    <button className={`${USER_TYPE=="Admin"? "hidden":"hidden"} mt-2 px-5 bg-blue-600 hover:bg-blue-800 rounded-lg`} type="button">Edit admit rights</button>
                    
                </div>
                
                <div className='pb-5'>
                    <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-blue-800 hover:bg-blue-900 mt-5 text-white rounded-lg py-2 '>Create user</button>
                </div>
                {/* _______ X cancel button */}
                <div onClick={()=>setCreateUserOpenModel(false)} className='absolute top-2 text-black right-3 w-8 h-5 hover:text-[#666] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </form>
        </div>
    </div>
    // Admin rights Modal
    
  )
}

export default CreateUserModal