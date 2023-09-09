const DeleteUserModal = ({handleClose11}) => {
    return (
      <div className='relative w-[50rem] h-full'>  
          <div className='text-2xl pt-5 pl-5'>Delete the user permanently?</div>    
          <div className='absolute bottom-5 right-5'>
              <button onClick={handleClose11} className='mr-4 bg-white hover:bg-blue-500 py-2 px-5 font-prompt text-xl rounded-lg text-blue-500 hover:text-white'>Cancel</button>
              <button onClick={handleClose11} className='bg-red-700 hover:bg-red-900 py-2 px-5 font-prompt text-xl rounded-lg text-white'>Delete</button>
          </div>
          
      </div>
    )
  }
  
  export default DeleteUserModal