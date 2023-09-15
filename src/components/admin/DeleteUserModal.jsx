const DeleteUserModal = ({handleClose11}) => {
    return ( 
      <div className='relative w-[50rem] h-full'>  
          <div className='text-[1.3rem] pt-5 pl-5 text-chocolate'>Delete the user permanently?</div>    
          <div className='absolute bottom-5 right-5'>
              <button onClick={handleClose11} className='mr-4 bg-secondary py-2 px-5 font-opensans text-[1rem] rounded-lg text-blue-500 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_5px_rgba(0,0,0,0.2)]'>Cancel</button>
              <button onClick={handleClose11} className='bg-red-700 hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4)] py-2 px-5 font-opensans text-[1rem] rounded-lg text-white'>Delete</button>
          </div>
          
      </div>
    )
  }
  
  export default DeleteUserModal