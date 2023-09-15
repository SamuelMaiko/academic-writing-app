
import {MdNotifications} from 'react-icons/md'


import { useMyCustomHook } from '../../context/MyContext'
import AssignmentCard from '../shared/AssignmentCard'
import SideBar from '../shared/SideBar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


 
const DashboardOverview = () => {
  
  const DATE_TODAY="Thursday, September 7, 2023"
//   const USER_NAME=
  const {LOGGEDIN_USER,USER_NAME,show, setShow}=useMyCustomHook()
  const navigate=useNavigate()

  useEffect(()=>{
    if (LOGGEDIN_USER){
        console.log("dashboard overview verified")
    }
    else{
        navigate('/')
    }
    
  })
    
  return (
    <div className="w-full h-full">
        <div className='relative'>
            <div className={`${show?" ml-0 mr-0": " "}ml-[-320px] transition-all duration-1000 lg:ml-0 lg:block`}>
                <SideBar />
            </div>
            {/* ////Menu icon */}
            <div onClick={()=>setShow(!show)} className='absolute top-5 left-7 z-10 text-4xl cursor-pointer lg:hidden w-[3rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>

            </div>
            

            <section className={`${show?" overflow-hidden":" "} remove-scroll lg:pl-[16rem] h-full overflow-y-scroll font-prompt`}>
                <div className='w-[95%] mx-auto'>
                    <div className='relative text-center pt-8 md:pt-4 border-b-1 border-b-[rgba(0,0,0,0.3)] h-[8rem] md:h-[6rem]'>
                        <p className='md:text-[1.1rem] text-xl inline-block  mr-4'>Hello {USER_NAME}!</p>
                        <p className='md:text-[1.1rem] text-lg inline-block'>You are logged in as {LOGGEDIN_USER.role}.</p>
                        <p className='md:text-[1rem] text-md'>{DATE_TODAY}</p>
                        <p className='absolute right-10 top-4'>
                            <span className='relative text-3xl text-black'><MdNotifications/>
                                <span className='absolute rounded-full h-[1.4rem] w-[1.4rem] bg-red-600 -top-[0.2rem] -right-[0.55rem] border-3 border-white text-white text-[1rem] flex  justify-center items-center'>0</span>
                            </span>
                        </p>
                    </div>

                    <div className='bg-[rgba(128,0,0,0.03)] w-full h-[20rem] mt-8 rounded-xl '>
                        <h1 className='md:text-[1.7rem] text-[1.5rem] text-center font-light font-prompt'>Announcements!</h1>
                    </div>
                    
                    <div className='flex items-center h-[5rem] mb-3 mt-3 border-t-1 border-b-1 border-b-[rgba(0,0,0,0.3)] border-t-[rgba(0,0,0,0.3)]'>
                        <h1 className='md:text-[1.9rem] text-[2rem] font-light font-prompt'>Assignments</h1>
                    </div>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-7'>
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                        <AssignmentCard />
                    </div>
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default DashboardOverview