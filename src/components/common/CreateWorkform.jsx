// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlineFileText } from "react-icons/ai"
import { toast } from "react-toastify"
import { useMyAPIcontext } from "../../context/APIs"
import { useMyBaseAPIContext } from "../../context/BaseAPIContext"

const CreateWorkform = ({handleClose3}) => {
    const {WORK_API_URL}=useMyAPIcontext()
    // _________________________________
    const [workID, setWorkID] = useState("")
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [wordCount, setWordCount] = useState("")
    const [assignedWriter, setAssignedWriter] = useState("")
    const [specialRequirement, setSpecialRequirement] = useState("")
    const {BASE_URL}=useMyBaseAPIContext()

    useEffect(()=>{
        generateUniqueID()
    })

    const generateRandomID=()=>{
        // Generate a random letter (A-Z)
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // 65 is the ASCII code for 'A'
        // Generate a random 3-digit number
        const randomNumber = Math.floor(100 + Math.random() * 900);
        // Combine the letter and number
        const randomID = randomLetter + randomNumber;
        // const theRandomID=randomID
        return randomID
    }
    const generateUniqueID=()=>{
        axios.get(`${BASE_URL}/all_assignment_ids`)
        .then(response=>{
            const ALL_IDS=response.data
            
            let uniqueID=generateRandomID()

            while(ALL_IDS.includes(uniqueID)){
                uniqueID=generateRandomID()
            }

            setWorkID(uniqueID)
        })

        .catch(error=>{
            toast.error("Server Error (generating random ID)")
            console.log(error.message)
        })
    }

    const createNewWork=(e)=>{
        e.preventDefault()
        generateUniqueID()
        
        const NEW_WORK_DETAILS={
            assignment_id:workID,
            title,
            deadline:dueDate,
            word_count:wordCount,
            assigned_writer:null,
            additional_info:specialRequirement,
            author_id:1
        }
        // const config={
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // }
        const headers={
                'Content-Type':'application/json'
            }
        axios.post(`${BASE_URL}/assignments`,NEW_WORK_DETAILS,{headers})
        .then(response=>{
            toast.success('Work added successfully!')
            console.log(response.data)
        })
        .catch(error=>{
        toast.error("Server Error (creating work)")
        console.log(error.message)
    })
        handleClose3()
    } 
  return (
    <form onSubmit={createNewWork} className='relative lg:w-[100%] w-full px-5 text-white  font-opensans'>
        <h1 className='text-center text-[1.9rem] mt-3 text-chocolate'>Create Work</h1>
        <div className='mt-2'>
            <label className=' text-[1rem] text-chocolate'>Title </label>
            <input onChange={(e)=>setTitle(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={title} name="title" placeholder='Enter title' required></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className='text-[1rem] text-chocolate'>Due Date</label>
            <input onChange={(e)=>setDueDate(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="date" value={dueDate} name="dueDate" placeholder='Enter due date' required></input>
        </div>

        <div className="hover:bg-hover text-white md:p-1 p-1 flex items-center justify-center bg-chocolate w-20 rounded-[1.3rem] cursor-pointer"><p className="text-[1.15rem] mr-1"><AiOutlineFileText/></p> <p className="text-[1rem]">File</p></div>
        
        <div className='mt-2 mb-2 flex justify-between'>
            <div>
            <label className=' text-[1rem] text-chocolate'>Word Count </label>
            <input onChange={(e)=>setWordCount(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' value={wordCount} type="text" name="wordCount" placeholder='Enter word count' required></input>
            </div>                        
        
            <div>
            <label className=' text-[1rem] text-chocolate'>Assign </label>
            <select onChange={(e)=>setAssignedWriter(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' value={assignedWriter} type="text" name="username" placeholder='Enter writer' >
                <option value="None">None</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option> 
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
                <option value="John">John</option>
                <option>Doe</option>
                <option>Jane Doe</option>
            </select>
            
            </div>                        
        </div>
        
        <div className='mb-2'>
            <label className='text-[1rem] text-chocolate'>Special requirement </label>
            <textarea onChange={(e)=>setSpecialRequirement(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[5rem] pl-3 w-full rounded-lg' value={specialRequirement} type="text" name="specialRequirement" placeholder='Enter special requirement' ></textarea>
        </div>
        <div className='pb-5'>
            <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-chocolate hover:bg-hover mt-5 text-white rounded-lg py-2 '>Create work</button>
            {/* onClick={handleClose3} */}
        </div> 

        <div onClick={handleClose3} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>
    </form>
  )
}

export default CreateWorkform