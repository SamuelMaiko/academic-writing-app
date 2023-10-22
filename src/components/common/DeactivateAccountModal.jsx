import axios from 'axios'
import React from 'react'
import { MdOutlineCancel, MdSettingsPower } from 'react-icons/md'
import { useMyBaseAPIContext } from '../../context/BaseAPIContext'
import { toast } from 'react-toastify'

const DeactivateAccountModal = ({account_status, workId, setDeactivateModalOpen}) => {
  const {BASE_URL,specificUser,setSpecificUser}=useMyBaseAPIContext()

  const update_details=(newStatus)=>{
    const newDetailObj={
      account_status:newStatus
    }

    setSpecificUser({...specificUser,...newDetailObj})
  }

  const handleDeactivateAccount=(e)=>{
      e.preventDefault()
      setDeactivateModalOpen(false)
      if (account_status==="Active"){
        axios.patch(`${BASE_URL}/deactivate_user/${workId}`)
        .then(()=>{
          update_details("Deactivated")
          toast.success("User deactivation successful")
        })
        .catch(()=>{toast.error("User deactivation failed")})
        
      }
      else if(account_status==="Deactivated"){
        axios.patch(`${BASE_URL}/activate_user/${workId}`)
        .then(()=>{
          update_details("Active")
          toast.success("User activation successful")
      })
        .catch(()=>toast.error("User activation failed"))
      }
      else{
        toast.error("unable to determine account status")
      }

    }
  return (
    <div>
        <div className='absolute w-[460px] p-4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor rounded-lg'>
            <div className='text-2xl text-center font-medium py-2'>{account_status && account_status==="Active"?"Confirm Account Deactivation":"Confirm Account Activation" } </div>
            <p className='text-lg'>{account_status && account_status==="Active"?
            "Are you sure you want to deactivate this user account? ":
            "Confirm Account Activation" }
            </p>
            <p className={`${account_status && account_status==="Active"?"":"hidden"}`}>This action is irreversible.</p>
            <p className='text-sm text-gray-400 '>Samuel Maiko</p>

            <div className='flex justify-between mt-7 px-4'>
              <button onClick={()=>setDeactivateModalOpen(false)} className='py-2 px-5 bg-blue-600 text-white hover:bg-blue-700 transition-background duration-300 rounded-lg flex items-center'><span className='mr-1'><MdOutlineCancel/></span><span>Cancel</span></button>
              <button onClick={handleDeactivateAccount} className={` ${account_status && account_status!=="Active"?"bg-[#4CAF50] hover:bg-[#45A049]":"bg-orange-500 hover:bg-orange-600"}  py-2 px-5  text-white transition-background duration-300 rounded-lg flex items-center`}><span className='mr-1'><MdSettingsPower/></span><span>
               {account_status && account_status==="Active"?"Deactivate":"Activate" }  
              </span></button>
            </div>
            {/* __________cancel btn */}
            <div onClick={()=>setDeactivateModalOpen(false)} className='absolute top-2 right-3 w-8 h-5 hover:text-[#666] cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

          </div>
    </div>
  )
}

export default DeactivateAccountModal