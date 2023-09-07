
import {MdNotifications} from 'react-icons/md'


import { useMyCustomHook } from '../../context/MyContext'
import AssignmentCard from '../shared/AssignmentCard'
import SideBar from '../shared/SideBar'


 
const DashboardOverview = () => {
  
  const DATE_TODAY="Thursday, September 7, 2023"
  const USER_NAME="John Doe"
  const {CURRENT_USER}=useMyCustomHook()
    
  return (
    <div className="w-full h-full">
        <div className=''>
            
            <SideBar />

            <section className="remove-scroll pl-[18rem] h-full overflow-y-scroll font-prompt">
                <div className='w-[95%] mx-auto'>
                    <div className='relative text-center pt-4 border-b-1 border-b-[rgba(0,0,0,0.3)] h-[6rem]'>
                        <p className='text-2xl inline-block  mr-4'>Hello {USER_NAME}!</p>
                        <p className='text-xl inline-block'>You are logged in as {CURRENT_USER}.</p>
                        <p className='text-lg'>{DATE_TODAY}</p>
                        <p className='absolute right-10 top-4'>
                            <span className='relative text-4xl text-black'><MdNotifications/>
                                <span className='absolute rounded-full h-[1.7rem] w-[1.7rem] bg-red-600 -top-[0.2rem] -right-[0.55rem] border-3 border-white text-white text-[1rem] flex  justify-center items-center'>0</span>
                            </span>
                        </p>
                    </div>

                    <div className='bg-[rgba(128,0,0,0.07)] w-full h-[20rem] mt-8 rounded-xl '>
                        <h1 className='text-[2.5rem] text-center'>Announcements!</h1>
                    </div>
                    
                    <div className='flex items-center h-[5rem] mb-3 mt-3 border-t-1 border-b-1 border-b-[rgba(0,0,0,0.3)] border-t-[rgba(0,0,0,0.3)]'>
                        <h1 className='text-[3rem]'>Assignments</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-7'>
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