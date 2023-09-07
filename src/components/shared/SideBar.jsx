// import React from 'react'
import {BsSpeedometer2} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {RxExit} from 'react-icons/rx'
import {GoHistory} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SidePanel from '../common/SidePanel';
import { useState } from 'react';

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
        <section className="w-[18rem] fixed h-full font-prompt bg-[#fff]">
                <p className='w-full text-3xl px-8 font-semibold cursor-pointer mb-10 text-tcolor py-5'>Logo</p>      

                <SidePanel icon={<BsSpeedometer2/>} text="Dashboard" />

                <Accordion  className='hover:border-r-[0.5rem] hover:bg-[rgba(34,139,34,0.2)] hover:border-r-[rgba(34,139,34,0.5)] py-3 px-3 mt-0 rounded-none' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className=''
                    //   expandIcon={<AiOutlineUser />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}> */}
                    <SidePanel icon={<AiOutlineUser/>} text="My Profile" />
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

                <Accordion className='hover:border-r-[0.5rem] hover:bg-[rgba(34,139,34,0.2)] hover:border-r-[rgba(34,139,34,0.5)] px-2 py-3 rounded-none' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
                
                <SidePanel icon={<GoHistory/>} text="History" />

                <SidePanel icon={<RxExit/>} text="Log out" />
                
            </section>
    </div>
  )
}

export default SideBar