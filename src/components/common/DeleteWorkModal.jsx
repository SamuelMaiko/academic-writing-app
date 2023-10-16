import axios from "axios"
import { useMyAPIcontext } from "../../context/APIs"
import { toast } from "react-toastify"

const DeleteWorkModal = ({handleClose2,ID}) => {
  const {WORK_API_URL,availableWork,setAvailableWork}=useMyAPIcontext()

  const deleteWork=(e)=>{
    e.preventDefault()
    axios.delete(`${WORK_API_URL}/${ID}`)

    const remainingWork=availableWork.filter(each_work=>{
      return each_work.id!==ID
    })
    setAvailableWork(remainingWork)
    
    handleClose2() 
    toast.success('Work deleted successfully!')
  }

  
  return (
    <div className='relative w-[50rem] h-full'>  
          <div className='text-[1.3rem] pt-5 pl-5 text-chocolate'>Delete the work?</div>    
          <div className='absolute bottom-5 right-5'>
              <button onClick={handleClose2} className='mr-4 bg-secondary py-2 px-5 font-opensans text-[1rem] rounded-lg text-blue-500 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_5px_rgba(0,0,0,0.2)]'>Cancel</button>
              <button onClick={deleteWork} className='bg-red-700 hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4)] py-2 px-5 font-opensans text-[1rem] rounded-lg text-white'>Delete</button>
              {/* onClick={handleClose2} */}
          </div>
          
      </div>
  )
}

export default DeleteWorkModal