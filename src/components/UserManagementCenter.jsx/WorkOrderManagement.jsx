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
import TableHead from "../common/WorkTableHead";
import CreateWorkform from "../common/CreateWorkform";

const WorkOrderManagement = () => {
    const [open3, setOpen3] =useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const TASKS_COUNT=20
  return (
    <div className=" w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
            <TitleManager title="Admin Dashboard: Work Order Management" />
            </div>

            <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
                <div className="relative flex-1 flex justify-center">
                    <input className="h-[3.5rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search work"></input>
                    <span className="text-[1.7rem] absolute left-[14.6rem] top-[50%] translate-y-[-50%] "><GoSearch /></span>
                </div>
                <div className="w-fit">
                    <button onClick={handleOpen3} className="bg-blue-500 hover:bg-blue-700 py-2 px-5 font-prompt text-xl rounded-lg text-white">Create work</button>

                </div>



{/* Modal start */}

          <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open3} onClose={handleClose3} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open3}>
          <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <CreateWorkform handleClose3={handleClose3} />
            </Typography>
          </Box>
        </Fade>
      </Modal>


{/* Modal end */}


               
                
                
            </div>
            <p className="text-2xl text-black font-opensans font-semibold mb-7">{TASKS_COUNT} in total.</p>

            <table className="w-full border-1">
                <TableHead />
                <tbody>
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                    <TableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WORDCOUNT="2000" W_ATTACHMENT="none" W_SPECIAL="None" />
                </tbody>          
            </table>
            
        </div>

    </div>
  )
}

export default WorkOrderManagement