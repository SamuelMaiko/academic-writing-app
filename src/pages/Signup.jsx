import { styled } from 'styled-components'
import SignupImg from '../assets/images/home-picture4.jpg'
import NavBar from '../components/common/NavBar'
import { useMyCustomHook } from '../context/MyContext'
const SIGNUP_IMAGE=SignupImg
const Signup = () => {
    const {show,navigate}=useMyCustomHook()

    const SignUpUser=(e)=>{
        e.preventDefault()
        navigate('/login')
    }

    const TakeUserToLoginPage=(e)=>{
        e.preventDefault()
        navigate('/login')
        e.target.reset()
    }
  return (
    <div className='w-full h-screen font-opensans'>
    <NavBar />

    <div className={`${show?"visible":"invisible opacity-0"} opacity-1 transition-all duration-500 absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[5rem]`}>

    </div>
    <div className='w-[90%] h-[screen-6rem] mx-auto flex justify-between'>
        <section className='relative w-[50%] hidden lg:flex'>
            <SignupImage className='absolute w-[28rem] h-[28rem] left-2 top-24 rounded-full p-4 '>
                
            </SignupImage>

        </section>
        <section className='lg:w-[50%] w-[95%] md:w-[80%] mx-auto lg:mx-0 h-full flex justify-center lg:mt-10 mt-4'>
                <form onSubmit={SignUpUser} className='w-[35rem] px-5'>
                    <h1 className='text-center text-[2.3rem] font-prompt'>SignUp</h1>
                    <div className='mb-3 mt-5'>
                        <label className=' text-[1rem] font-semibold'>Registration number <span className='text-red-600'>*</span></label>
                        <input className='text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="Hi" name="regNo" placeholder='Enter Employee No.' ></input>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label className=' text-[1rem] font-semibold'>Password <span className='text-red-600'>*</span></label>
                        <input className='text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" value="Hi" name="password" placeholder='Enter Password' ></input>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label className=' text-[1rem] font-semibold '>Confirm Password <span className='text-red-600'>*</span></label>
                        <input className='text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="confirmPassword" placeholder='Confirm Password' ></input>
                        {/* <p className='text-sm mt-1'>Password is case sensitive</p> */}
                    </div>
                    <div className='pb-5'>
                        <button type="submit" className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  hover:bg-hover bg-chocolate mt-5 text-white rounded-lg py-2 '>SignUp</button>
                    </div>
                    <div className='flex pl-4'>   
                        <p className='text-[1rem]' href='#'>Already Have An Account? </p><a onClick={TakeUserToLoginPage} className='no-underline text-[1rem] ml-2 font-semibold hover:text-hover' href="#">Login</a>
                    </div>
                </form>
        </section>
        </div>
        </div>
  )
}

const SignupImage=styled.div`
// background-color:blue;
background:url(${SIGNUP_IMAGE});
background-attachment:scroll;
background-repeat:no-repeat;
background-size:100% 100%;
background-position:center center;
box-shadow:inset 0px 0px 10px #f5f5dc;
`;
export default Signup