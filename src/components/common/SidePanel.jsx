const SidePanel=({icon,text})=>{
    return(
        <div className='w-full'>
            <div className={`${text==="Dashboard"|| text==="History" ||text==="Log out"?"hover:border-r-[0.5rem] py-6 px-7 hover:bg-[rgba(34,139,34,0.2)] hover:border-r-[rgba(34,139,34,0.5)]" :" "} w-full flex items-center rounded-none cursor-pointer`}>
                <div className=" mr-3">
                    <span className='text-tcolor text-[2.2rem]'>{icon}</span>
                </div>
                <p className=" text-black text-xl flex items-center justify-center">{text}</p>
            </div>
        </div>
    )
}

export default SidePanel