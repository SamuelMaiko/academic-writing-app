import { useMyCustomHook } from "../../context/MyContext"

const DashboardCard = ({title, description,link}) => {
    const {navigate}=useMyCustomHook()
    if (description.length>34){
        description=description.substring(0,34)+"..."
    }

    const GoToRequestedAdminPage=(e)=>{
        e.preventDefault()
        if (title==="User Management Center"){
            localStorage.setItem("showAdmins",JSON.stringify(true));
        }
        if (title==="Work Order Management"){
            localStorage.setItem("showAssignedAssignments",JSON.stringify(true));
        }
        localStorage.setItem("showWriters",JSON.stringify(false));
        localStorage.setItem("showUnAssignedAssignments",JSON.stringify(false));
        // "showAssignedAssignments",false
        navigate(`${link}`)
    }

  return ( 
    <div className='w-full'>
        <div onClick={GoToRequestedAdminPage} className=" relative w-full h-[12rem] rounded-lg bg-secondary border-2 border-[#c3c6ce] transition-all duration-500  hover:border-btlinks shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.28)] cursor-pointer overflow-hidden">
            <div className="h-[6rem] w-full bg-tcolor">

            </div>
            <div className="card-details text-tcolor h-full overflow-y-scroll"> 
                <p className="card-title transition-all duration-500 ml-4 text-[1.1rem] hover:text-black cursor-pointer">{title}</p>
                <p className="ml-4 text-[1rem]">{description}</p>
            </div>
            {/* 27rem */}
            {/* <button className="card-button translate-x-[-50%] translate-y-[125%] w-[60%] rounded-[1 rem] border-none bg-[#008bf8] text-white text-[1rem] px-[1rem] py-3 absolute left-[50%] bottom-0 opacity-0 transition-all duration-300 hover:bg-yellow-500 text-xl">Take up task</button> */}
        </div>
    </div>
  )
}

export default DashboardCard