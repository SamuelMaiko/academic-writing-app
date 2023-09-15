import { useState } from 'react';
import { useMyCustomHook } from '../../context/MyContext';
const EditAdminRightsForm = ({handleCloseOptions}) => {
    const handleSubmit=(e)=>{
        e.preventDefault() 
        handleCloseOptions()
      }
      const [isChecked,setIsChecked] = useState(false)
    const [isChecked2,setIsChecked2] = useState(false)
    const [isChecked3,setIsChecked3] = useState(false)

      const handlecheckboxchange=()=>setIsChecked(!isChecked)
      const handlecheckboxchange2=()=>setIsChecked2(!isChecked2)
      const handlecheckboxchange3=()=>setIsChecked3(!isChecked3)
  return (
    <form onSubmit={handleSubmit}>
              <h1 className='text-[1.4rem] text-chocolate mb-2'>Edit Administrator Permissions</h1>
              {/* <Checkbox value="" checked={isChecked} onChange={isChecked} defaultSelected>Option</Checkbox>
              <Checkbox defaultSelected>Option</Checkbox> */}
              <div className='mb-2 text-xl'>
              <input id="one" className='w-4 h-4 cursor-pointer' type="checkbox" checked={isChecked} onChange={()=>handlecheckboxchange()}></input>
              <label htmlFor='one' className='ml-2 text-chocolate text-[1.1rem]'>Create, delete and deactivate user accounts.</label>
              </div>
              
              <div className='mb-2 text-xl'>
              <input id="two" className='w-4 h-4 cursor-pointer' type="checkbox" checked={isChecked2} onChange={()=>handlecheckboxchange2()}></input>
              <label htmlFor='two' className='ml-2 text-chocolate text-[1.1rem]'>Create, edit and delete academic content.</label>

              </div>
              
              <div className='mb-2 text-xl'>
              <input id="three" className='w-4 h-4 cursor-pointer' type="checkbox" checked={isChecked3} onChange={()=>handlecheckboxchange3()}></input>
              <label htmlFor='three' className='ml-2 text-chocolate text-[1.1rem]' >Manage user roles and Permissions.</label>
              </div>
              <button className='py-1 px-5 bg-blue-600 hover:bg-blue-700 text-xl rounded-lg'>Save changes</button>
             
              <div onClick={handleCloseOptions} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
            </div>
              </form>
  )
}

export default EditAdminRightsForm