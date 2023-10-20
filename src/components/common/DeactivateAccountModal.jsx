import React from 'react'
import { MdOutlineCancel, MdSettingsPower } from 'react-icons/md'

const DeactivateAccountModal = ({setDeactivateModalOpen}) => {
    const handleDeactivateAccount=(e)=>{
        e.preventDefault()
        setDeactivateModalOpen(false)
      }
  return (
    <div>
        <div className='absolute w-[460px] p-4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor rounded-lg'>
            <div className='text-2xl text-center font-medium py-2'>Confirm Account Deactivation</div>
            <p className='text-lg'>Are you sure you want to deactivate this user account? </p>
            <p>This action is irreversible.</p>
            <p className='text-sm text-gray-400 '>Samuel Maiko</p>

            <div className='flex justify-between mt-7 px-4'>
              <button onClick={()=>setDeactivateModalOpen(false)} className='py-2 px-5 bg-blue-600 text-white hover:bg-blue-700 transition-background duration-300 rounded-lg flex items-center'><span className='mr-1'><MdOutlineCancel/></span><span>Cancel</span></button>
              <button onClick={handleDeactivateAccount} className='py-2 px-5 bg-orange-500 hover:bg-orange-600 text-white transition-background duration-300 rounded-lg flex items-center'><span className='mr-1'><MdSettingsPower/></span><span>Deactivate</span></button>
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