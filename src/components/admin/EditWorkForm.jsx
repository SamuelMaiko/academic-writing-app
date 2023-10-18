import { useState } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { useMyAPIcontext } from '../../context/APIs';
import axios from 'axios';
import { toast } from 'react-toastify';


const EditWorkForm = ({handleClose,ID,W_TITLE,W_DUEDATE,W_WORDCOUNT,W_WRITER,W_ATTACHMENT,W_SPECIAL}) => {
  const {WORK_API_URL}=useMyAPIcontext()
  // const [workID, setWorkID] = useState("")
  const [title, setTitle] = useState(W_TITLE)
  const [dueDate, setDueDate] = useState(W_DUEDATE)
  const [wordCount, setWordCount] = useState(W_WORDCOUNT)
  const [assignedWriter, setAssignedWriter] = useState(W_WRITER)
  const [specialRequirement, setSpecialRequirement] = useState(W_SPECIAL)

  const updateWorkDetails=(e)=>{
    e.preventDefault()
    const UPDATED_WORK_DETAILS={
      title,
      dueDate,
      wordCount,
      assignedWriter,
      specialRequirement
  }

  axios.patch(`${WORK_API_URL}/${ID}`,UPDATED_WORK_DETAILS)
  .then(response=>{
    toast.success('Work details successfully updated!')
  })
  .catch(error=>{
    toast.error("Server Error (editing work)")
    console.log(error.message)
})
handleClose()

  }
  return (
    <form onSubmit={updateWorkDetails} className='relative lg:w-[100%] w-full px-5 font-opensans text-white'>
      <h1 className='text-center text-[1.9rem] mt-3 text-chocolate'>Edit Work</h1>
      <div className='mt-2'>
            <label className=' text-[1rem] text-chocolate'>Title </label>
            <input onChange={(e)=>setTitle(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={title} name="title" placeholder='Enter title' required></input>
        </div>
        <div className='mb-3 mt-2'>
            <label className='text-[1rem] text-chocolate'>Due Date</label>
            <input onChange={(e)=>setDueDate(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={dueDate} name="dueDate" placeholder='Enter due date' required></input>
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
            </select>
            
            </div>                        
        </div>
        
        <div className='mb-2'>
            <label className='text-[1rem] text-chocolate'>Special requirement </label>
            <textarea onChange={(e)=>setSpecialRequirement(e.target.value)} className='text-[1rem] text-chocolate border-1 bg-secondary border-[rgba(0,0,0,0.15)] mt-2 outline-none h-[5rem] pl-3 w-full rounded-lg' value={specialRequirement} type="text" name="specialRequirement" placeholder='Enter special requirement' ></textarea>
        </div>
      <div className='pb-5'>
          <button className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  bg-chocolate hover:bg-hover mt-5 text-white rounded-lg py-2'>Save changes</button>
          {/* onClick={handleClose} */}
      </div>

      <div onClick={handleClose} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </div>
    </form>
  )
}

export default EditWorkForm