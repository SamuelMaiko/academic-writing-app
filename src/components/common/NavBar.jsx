// import React from 'react'
const NAV_LINKS=['Home','Services', 'Contact','FAQs']
const NavBar = () => {
  return (
    <div className='w-full h-[5rem] bg-secondary text-tcolor shadow-sm shadow-primary/40'>
      <div className="w-[90%] h-full mx-auto flex justify-between items-center lg:pr-6 ">
        <p className="text-3xl font-semibold ">Logo</p>
        <ul className="lg:flex gap-20 items-center font-semibold font-xs">
          {
            NAV_LINKS.map((navLink,index)=>{
              return <li key={index}><a href="#">{navLink}</a></li>
            })
          }
          <button className="bg-primary text-white hover:bg-red-700 rounded-xl px-5 py-2">Login</button>
        </ul>
      </div>
    </div>
  )
}

export default NavBar