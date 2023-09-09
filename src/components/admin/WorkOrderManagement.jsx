import { useState } from "react";
import TableRow from "../common/TableRow"
import TitleManager from "../shared/TitleManager"
import {GoSearch} from 'react-icons/go'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AiOutlineFileText } from "react-icons/ai";

const WorkOrderManagement = () => {
    const [open3, setOpen3] =useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const TASKS_COUNT=20
  return (
    <div className=" w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
            <TitleManager title="Admin Dashboard" />
            </div>

            <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
                <div className="relative flex-1 flex justify-center">
                    <input className="h-[3.5rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search work"></input>
                    <span className="text-[1.7rem] absolute left-3 top-[50%] translate-y-[-50%] "><GoSearch /></span>
                </div>
                <div className="w-fit">
                    <button onClick={handleOpen3} className="bg-blue-500 hover:bg-blue-700 py-2 px-5 font-prompt text-xl rounded-lg text-white">Create work</button>

                </div>



{/* Modal start */}

                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open3}>
          <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <form className='relative lg:w-[100%] w-full px-5 text-white'>
                    <h1 className='text-center text-4xl font-prompt'>Create Task</h1>
                    <div className='mt-2'>
                        <label className=' text-xl font-semibold'>Title </label>
                        <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="username" value="Hi" name="username" placeholder='Enter Employee No.' ></input>
                    </div>
                    <div className='mb-3 mt-2'>
                        <label className=' text-xl font-semibold'>Due Date</label>
                        <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="password" value="There" name="password" placeholder='Enter password' ></input>
                    </div>

                    <div className="hover:bg-blue-700 md:p-2 p-1 flex items-center justify-center bg-blue-500 w-28 rounded-full cursor-pointer"><p className="text-2xl mr-1"><AiOutlineFileText/></p> <p className="text-xl">File</p></div>
                    
                    <div className='mt-2 mb-2'>
                      <div>
                        <label className=' text-xl font-semibold'>Word Count </label>
                        <input className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></input>
                      </div>                        
                    </div>
                    
                    <div className='mb-2'>
                        <label className=' text-xl font-semibold'>Special requirement </label>
                        <textarea className='text-xl shadow-[0_0_4px_rgba(0,0,0,0.3)] border-1 text-white bg-black border-[rgba(255,255,255,0.4)] mt-2 outline-none h-[5rem] pl-3 w-full rounded-lg' type="text" name="username" placeholder='Enter Employee No.' ></textarea>
                    </div>
                    <div className='pb-5'>
                        <button onClick={handleClose3} className='shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-2xl  bg-green-700 hover:bg-btlinks mt-5 text-white rounded-lg py-2 '>Create work</button>
                    </div>

                    <div onClick={handleClose3} className='absolute w-12 h-8 top-2 right-4 rounded-full hover:text-blue-300 cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </div>
                </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>


{/* Modal end */}


               
                
                
            </div>
            <p className="text-2xl text-black font-opensans font-semibold mb-7">{TASKS_COUNT} in total.</p>

            <table className="w-full border-1">

                <thead>
                    <tr className="h-[2rem] text-xl font-pr">
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Assignent ID</th>
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Title</th>
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Due date</th>
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Word count</th>
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Attachment</th>
                        <th className="border-1 border-[rgba(0,0,0,0.2)]">Special requirement</th>
                    </tr>
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                </thead>
            </table>
            
        </div>

    </div>
  )
}

export default WorkOrderManagement