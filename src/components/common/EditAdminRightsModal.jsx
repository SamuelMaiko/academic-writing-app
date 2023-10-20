import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'

const EditAdminRightsModal = ({setRightsModalOpen}) => {
    const [on1,setOn1]=useState(true)
    const [on2,setOn2]=useState(false)
    const [on3,setOn3]=useState(false)
    const [on4,setOn4]=useState(false)
    const [on5,setOn5]=useState(false)
  return (
    <div>
        <div className='absolute w-[460px] p-4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor rounded-lg'>
            <div className='text-2xl text-center font-medium py-2 mb-2'>Admin Rights Control</div>
            <div className="flex flex-col gap-y-2 px-4">
              <div className="flex justify-between">
                <span>Edit admin permissions</span>
                <div onClick={()=>setOn1(()=>!on1)} className={`${on1? "bg-blue-500":" bg-gray-500 "} h-[1.27rem] w-[2.6rem] rounded-xl px-[0.1rem] flex items-center cursor-pointer`}>
                  <div className={`w-[1.25rem] ${on1? "translate-x-[1.18rem]":""} transition-all duration-500 h-[1.15rem] bg-white rounded-full`}></div>
                </div>
              </div>
              {/* <p className="flex justify-between"><span>Delete admin accounts</span><span></span></p> */}
              <div className="flex justify-between">
                <span>Delete admin accounts</span>
                <div onClick={()=>setOn2(()=>!on2)} className={`${on2? "bg-blue-500":" bg-gray-500 "} h-[1.27rem] w-[2.6rem] rounded-xl px-[0.1rem] flex items-center cursor-pointer`}>
                  <div className={`w-[1.25rem] ${on2? "translate-x-[1.18rem]":""} transition-all duration-500 h-[1.25rem] bg-white rounded-full`}></div>
                </div>
              </div>
              {/* <p className="flex justify-between"><span>Deactivate and delete writer accounts</span><span></span></p> */}
              <div className="flex justify-between">
                <span>Deactivate and delete writer accounts</span>
                <div onClick={()=>setOn3(()=>!on3)} className={`${on3? "bg-blue-500":" bg-gray-500 "} h-[1.27rem] w-[2.6rem] rounded-xl px-[0.1rem] flex items-center cursor-pointer`}>
                  <div className={`w-[1.25rem] ${on3? "translate-x-[1.18rem]":""} transition-all duration-500 h-[1.25rem] bg-white rounded-full`}></div>
                </div>
              </div>
              {/* <p className="flex justify-between"><span>Create accounts</span><span></span></p> */}
              <div className="flex justify-between">
                <span>Create accounts</span>
                <div onClick={()=>setOn4(()=>!on4)} className={`${on4? "bg-blue-500":" bg-gray-500 "} h-[1.27rem] w-[2.6rem] rounded-xl px-[0.1rem] flex items-center cursor-pointer`}>
                  <div className={`w-[1.25rem] ${on4? "translate-x-[1.18rem]":""} transition-all duration-500 h-[1.25rem] bg-white rounded-full`}></div>
                </div>
              </div>
              {/* <p className="flex justify-between"><span>Create and edit assignments</span><span></span></p> */}
              <div className="flex justify-between">
                <span>Create and edit assignments</span>
                <div onClick={()=>setOn5(()=>!on5)} className={`${on5? "bg-blue-500":" bg-gray-500 "} h-[1.27rem] w-[2.6rem] rounded-xl px-[0.1rem] flex items-center cursor-pointer`}>
                  <div className={`w-[1.25rem] ${on5? "translate-x-[1.18rem]":""} transition-all duration-500 h-[1.25rem] bg-white rounded-full`}></div>
                </div>
              </div>
            </div>
            <div className='flex justify-between mt-7 px-4'>
              <button onClick={()=>setRightsModalOpen(false)} className='py-2 px-5 bg-[#FF5733] text-white hover:bg-[#D7391E] transition-background duration-300 rounded-lg flex items-center'><span className='mr-1'><MdOutlineCancel/></span><span>Cancel</span></button>
              <button onClick={()=>setRightsModalOpen(false)} className='py-2 px-5 bg-[#4CAF50] hover:bg-[#45A049] text-white transition-background duration-300 rounded-lg flex items-center'><span className='mr-1'><AiOutlineCheck/></span><span>Save</span></button>
            </div>
            {/* __________cancel btn */}
            <div onClick={()=>setRightsModalOpen(false)} className='absolute top-2 right-3 w-8 h-5 hover:text-[#666] cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

          </div>
    </div>
  )
}

export default EditAdminRightsModal