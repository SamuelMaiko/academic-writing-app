// import React from 'react'
import { styled } from 'styled-components'
import LowerImg from '../../assets/images/home-picture3.jpg'
import NavBar from './NavBar'
import { useMyCustomHook } from '../../context/MyContext'
const LOWER_IMAGE=LowerImg

const Login = () => {
    const {show}=useMyCustomHook()
  return (
    <div className='w-full h-screen font-prompt'>
    <NavBar />
    <div className={`${show?"visible":"invisible opacity-0"} opacity-1 transition-all duration-500 absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[5rem]`}>

    </div>
    <div className='w-[90%] h-[screen-6rem] mx-auto flex justify-between'>
        <section className='relative w-[50%] hidden lg:flex'>

            <LowerImage className='absolute w-[28rem] h-[28rem] left-2 top-8 rounded-full p-4 '>
                
            </LowerImage>

        </section>
        <section className='lg:w-[50%] w-[95%] md:w-[80%] mx-auto lg:mx-0 h-full flex justify-center lg:mt-20 mt-7'>
                <form className='lg:w-[35rem] w-full px-5'>
                    <h1 className='text-center text-3xl font-prompt'>Login</h1>
                    <div className='mb-3 mt-5'>
                        <label className=' text-md '>Username <span className='text-red-600'>*</span></label>
                        <input className='shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="username" value="Hi" name="username" placeholder='Enter Employee No.' ></input>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label className=' text-md '>Password <span className='text-red-600'>*</span></label>
                        <input className='shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="password" placeholder='Enter password' ></input>
                        <p className='text-sm mt-1'>Password is case sensitive</p>
                    </div>
                    <div className='pb-5'>
                        <button className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  hover:bg-green-700 bg-btlinks mt-5 text-white rounded-lg py-2 '>Login</button>
                    </div>
                    <div className='flex justify-between px-4'>
                    <a className='text-md underline hover:text-blue-700' href='#'>Forgot Password?</a>
                    <a className='text-md underline hover:text-blue-700' href='#'>Create An Account</a>
                    </div>
                </form>
        </section>
    </div>
    </div>
  )
}
const LowerImage=styled.div`
// background-color:blue;
background:url(${LOWER_IMAGE});
background-attachment:scroll;
background-repeat:no-repeat;
background-size:cover;
background-position:center center;
box-shadow:inset 0px 0px 10px #f5f5dc;
`;

export default Login