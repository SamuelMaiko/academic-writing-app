import { useMyCustomHook } from "../../context/MyContext"
import { useLocation } from "react-router-dom"

const NAV_LINKS=[
  {
    linkName:'Home',
    link:'#'
  },
  {
    linkName:'Services',
    link:'#'
  },
  {
    linkName:'Contact',
    link:'#'
  },
  {
    linkName:'FAQs',
    link:'#'
  }
]
const NavBar = () => {
  const {show, setShow}=useMyCustomHook()
  const {pathname}=useLocation()

  return (
    <div className='relative w-full h-[5rem] bg-secondary text-tcolor shadow-sm shadow-primary/40'>
      <div className="w-[90%] h-full mx-auto flex justify-between items-center lg:pr-6 ">
        <p className="text-3xl font-semibold cursor-pointer">Logo</p>
        <ul className={`${show?"visible":"invisible "} lg:visible transition-all duration-500 absolute left-10 top-[6rem] right-10 z-10 lg:w-fit lg:flex lg:static gap-20 items-center font-semibold font-xs `}>
          {
            NAV_LINKS.map((navLink,index)=>{
              return <li onClick={()=>setShow(!show)} className="mb-6 lg:mb-0 mt-0 lg:mt-0 lg:p-0 py-2 px-3  rounded-md hover:bg-gray-200 lg:hover:bg-transparent cursor-pointer" key={index}><a href={navLink.link}>{navLink.linkName}</a></li>
            })
          }
          <button onClick={()=>setShow(!show)} className="bg-btlinks text-white hover:bg-green-700 rounded-3xl px-5 py-2 font-normal">Login</button>
        </ul>
        <button  className={`${pathname=="/login"|| pathname=="/signup"?" ":"hidden"} text-white hover:bg-primary rounded-3xl px-5 py-2 font-normal underline bg-[rgba(128,0,0,0.7)] mr-16 lg:mr-0`}>Back to home</button>
        <div className="lg:hidden absolute cursor-pointer right-0 text-3xl duration-500 mr-7">
                <div>
                <input  onClick={()=>setShow(!show)} id="checkbox" type="checkbox"></input>
                <label className="toggle" htmlFor="checkbox">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </label>
                </div>
                

            </div>
      </div>
    </div>
  )
}

export default NavBar