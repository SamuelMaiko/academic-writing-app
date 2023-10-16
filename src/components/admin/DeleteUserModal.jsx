import axios from "axios"
import { toast } from "react-toastify"
import { useMyAPIcontext } from "../../context/APIs";

const DeleteUserModal = ({handleClose11, ID}) => {
  const {allAccounts,setAllAccounts}=useMyAPIcontext()

  const deleteUserAccount=(e)=>{
    e.preventDefault()
    axios.delete(`http://localhost:8001/users/${ID}`)
    .then(response=>{
      toast.success('User account deleted successfully!')
      const remainingWork=allAccounts.filter(eachAccount=>{
        return eachAccount.id!==ID
      })
      setAllAccounts(remainingWork)    
    })
    .catch(error=>{
      toast.error("Server Error (Deleting user account)")
      console.log(error.message)
  })
  }
    return ( 
      <div className='relative w-[50rem] h-full'>  
          <div className='text-[1.3rem] pt-5 pl-5 text-chocolate'>Delete the user permanently?</div>    
          <div className='absolute bottom-5 right-5'>
              <button onClick={handleClose11} className='mr-4 bg-secondary py-2 px-5 font-opensans text-[1rem] rounded-lg text-blue-500 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_5px_rgba(0,0,0,0.2)]'>Cancel</button>
              <button onClick={deleteUserAccount} className='bg-red-700 hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4)] py-2 px-5 font-opensans text-[1rem] rounded-lg text-white'>Delete</button>
              {/* onClick={handleClose11} */}
          </div>
          
      </div>
    )
  }
  
  export default DeleteUserModal