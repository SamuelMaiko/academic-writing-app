// import React from 'react'
import { styled } from 'styled-components'
import LowerImg from '../../assets/images/home-picture3.jpg'
import NavBar from './NavBar'
import { useMyCustomHook } from '../../context/MyContext'
import * as React from 'react'
import axios from 'axios'
const LOWER_IMAGE=LowerImg

const Login = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {show,navigate}=useMyCustomHook()

    const LogUserIn=(e)=>{
        e.preventDefault()
        // alert("Hi")
        const LOGIN_DETAILS={
            registrationNumber:username,
            password
        }

        axios.get('http://localhost:8001/users')
        .then(response=>{
            // console.log(response.data)
            const serverData=response.data
            const user=serverData.find(eachUser=>{
                return eachUser.registrationNumber===LOGIN_DETAILS.registrationNumber&& eachUser.password===LOGIN_DETAILS.password
            });

            if (user){
                localStorage.setItem('LOGGEDIN_USER',JSON.stringify(user))
                navigate('/dashboard-overview')
                // alert(JSON.parse(localStorage.getItem('LOGGEDIN_USER')))
            }
            else{
                alert('input valid credentials!')
            }
        })
        .catch(error=>{
            alert("Error with login!")
            console.log(error.message)
        })

        e.target.reset()
    }
    
    const takeUserToSignUpPage=(e)=>{
        e.preventDefault()
        navigate('/signup')
    }
  return (
    <div className='w-full h-screen font-opensans'>
    <NavBar />
    <div className={`${show?"visible":"invisible opacity-0"} opacity-1 transition-all duration-500 absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[5rem]`}>

    </div>
    <div className='w-[90%] h-[screen-6rem] mx-auto flex justify-between'>
        <section className='relative w-[50%] hidden lg:flex'>

            <LowerImage className='absolute w-[28rem] h-[28rem] left-2 top-24 rounded-full p-4 '>
                
            </LowerImage>

        </section>
        <section className='lg:w-[50%] w-[95%] md:w-[80%] mx-auto lg:mx-0 h-full flex justify-center lg:mt-20 mt-7'>
                <form  onSubmit={LogUserIn} className='lg:w-[35rem] w-full px-5'>
                    <h1 className='text-center text-[2.5rem] font-prompt'>Login</h1>
                    <div className='mb-3 mt-5'>
                        <label className=' text-[1rem] font-semibold'>Username <span className='text-red-600'>*</span></label>
                        <input onChange={(e)=>setUsername(e.target.value)} className='text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value={username} name="username" placeholder='Enter Employee No.' ></input>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label className=' text-[1rem] font-semibold'>Password <span className='text-red-600'>*</span></label>
                        <input onChange={(e)=>setPassword(e.target.value)} className='text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value={password} name="password" placeholder='Enter password' ></input>
                        <p className='text-[1rem] mt-1 '>Password is case sensitive</p>
                    </div>
                    <div className='pb-5'>
                        <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  hover:bg-hover bg-chocolate mt-5 text-white rounded-lg py-2 '>Login</button>
                    </div>
                    <div className='md:flex justify-between px-12 md:px-4'>
                    <a className='text-[1rem] md:inline block underline mb-2 md:mb-0 hover:text-blue-700' href='#'>Forgot Password?</a>
                    <a onClick={takeUserToSignUpPage} className='text-[1rem] underline hover:text-blue-700' href='#'>Create An Account</a>
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