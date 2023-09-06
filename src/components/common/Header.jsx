// import React from 'react'

const Header = () => {
  return (
    <div className='h-screen w-full'>
        <div className=' w-[90%] margin-auto h-full '>
            <section className='absolute left-24 bottom-20 w-[40%]'>
                <p className='text-[2.5rem] font-bold font-prompt'>
                    Welcome to Unknown writers self-Service Portal
                </p>
                <small className='text-lg leading-9'>
                Access our services easily and quickly. Create an account and get to enjoy Unknown writers online services.
                </small>
                <div className="">
                    <button className='rounded-3xl hidden px-5 py-2 mt-4 bg-btlinks text-white font-normal hover:bg-red-700'>
                        Login
                    </button>
                    <button className='ml-7 rounded-3xl px-5 py-3 mt-4 bg-btlinks text-white hover:bg-green-950'>
                        Create account
                    </button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Header