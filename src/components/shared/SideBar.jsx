// import React from 'react'
import {SlHome} from 'react-icons/sl'
import {BsSpeedometer2} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {RxExit} from 'react-icons/rx'
import {AiOutlineUser} from 'react-icons/ai'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SidePanel from '../common/SidePanel';
import { useState } from 'react';
import { useMyCustomHook } from '../../context/MyContext'

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);
    const {show, setShow,navigate,LOGGEDIN_USER}=useMyCustomHook()


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigateToDashboardOverview=(e)=>{
    e.preventDefault()
    navigate('/dashboard-overview')
  }
  const navigateToDashboard=(e)=>{
    e.preventDefault()
    // alert(LOGGEDIN_USER)
    if (LOGGEDIN_USER.role=="Admin"){
      navigate('/dashboard-overview/admin/dashboard')
    }
    else if(LOGGEDIN_USER.role=="Writer"){
      navigate('/dashboard-overview/writer/dashboard')
    }
  }
  const handleLogOut=(e)=>{
    e.preventDefault()
    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
        <section className="w-[16rem] fixed z-20 h-full font-prompt bg-[#fff]">
                <p className='w-full text-3xl px-8 font-semibold cursor-pointer mb-10 text-tcolor py-5'>Logo</p>  
                {/* ///Close icon */}
                <p onClick={()=>setShow(!show)} className='w-[3rem] absolute lg:hidden top-2 right-4 cursor-pointer rounded-full hover:bg-[rgba(0,0,0,0.06)] '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </p>    
                <SidePanel icon={<SlHome/>} text="Home" onClick={navigateToDashboardOverview} />
                <SidePanel icon={<BsSpeedometer2/>} text="Dashboard" onClick={navigateToDashboard} />

                <Accordion  className='hover:border-r-[0.3rem] hover:bg-[rgba(0,0,0,0.05)] hover:border-r-hover py-1 px-3 mt-0 rounded-none' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className=''
                    //   expandIcon={<AiOutlineUser />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}> */}
                    <SidePanel icon={<AiOutlineUser/>} text="My Profile"/> 
                    {/* </Typography> */}
                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <a className='underline block mb-4 hover:text-blue-600 text-lg' href="#">Change Password</a>
                        <a className='underline block hover:text-blue-600 text-lg' href="#">View My Information</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='hover:border-r-[0.3rem] hover:bg-[rgba(0,0,0,0.05)] hover:border-r-hover px-2 py-1 rounded-none' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    //   expandIcon={<AiOutlineUser />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}> */}
                    <SidePanel icon={<AiOutlineSetting/>} text="Settings" />
                    {/* </Typography> */}
                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <a className='underline block mb-4 hover:text-blue-600 text-lg' href="#">Notification Preference</a>
                        <a className='underline block hover:text-blue-600 text-lg' href="#">View My Information</a>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                {/* <SidePanel icon={<GoHistory/>} text="History" /> */}

                <SidePanel icon={<RxExit/>} text="Log out" onClick={handleLogOut}/>
                
            </section>
    </div>
  )
}

export default SideBar