import { useMyCustomHook } from "../../context/MyContext"
import DashboardCard from "../shared/DashboardCard"
import SideBar from "../shared/SideBar"
import TitleManager from "../shared/TitleManager"

const AdminDashboard = () => {
    const {show, setShow}=useMyCustomHook()
  return (
    <div className="w-full h-screen">
        <div className="relative">
            <div className={`${show?" ml-0 mr-0": " "}ml-[-320px] transition-all duration-1000 lg:ml-0 lg:block`}>
                <SideBar />
            </div>
            {/* Cncael icon */}
            <div onClick={()=>setShow(!show)} className='absolute top-5 left-7 z-10 text-4xl cursor-pointer lg:hidden w-[3rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>

            </div>

            <section className={`${show?" overflow-hidden":" "} remove-scroll lg:pl-[18rem] h-full overflow-y-scroll font-prompt`}>
                
                <div className="w-[90%] mx-auto">
                    <TitleManager title="Dashboard"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
                        <DashboardCard title="User Management" description="Create, deactivate and delete user accounts"/>
                        <DashboardCard title="Work Order Management" description="Publish, edit and delete work"/>
                        <DashboardCard title="Assignment Status" description="Check the progress of uptaken work"/>
                        <DashboardCard title="Statisics" description="Check no. of open assignments, total assignments in a week, no.of writers"/>
                        <DashboardCard title="User Management" description="Create, deactivate and delete user accounts"/>
                    </div>
                
                </div>
            </section>
        </div>
    </div>
  )
}

export default AdminDashboard