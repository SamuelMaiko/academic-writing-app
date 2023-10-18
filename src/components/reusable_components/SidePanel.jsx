const SidePanel=({icon,text,onClick})=>{

    return(
        <div className='w-full'>
            <div onClick={onClick} className={`${text==="Dashboard"|| text==="History" ||text==="Log out"||text==="Home"?"hover:border-r-[0.3rem] py-4 px-7 hover:bg-[rgba(0,0,0,0.05)] hover:border-r-hover" :" "} w-full flex items-center rounded-none cursor-pointer`}>
                <div className=" mr-3">
                    <span className='text-tcolor text-[1.6rem]'>{icon}</span>
                </div>
                <p className=" text-black text-[1.1rem] flex items-center justify-center">{text}</p>
            </div>
        </div>
    )
}

export default SidePanel