import { useState } from "react";
import TableRow from "../common/WorkTableRow"
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
import UserMngTableHead from "../common/UserMngTableHead";
import UserMngTableRow from "../common/UserMngTableRow";
import CreateUserForm from "./CreateUserForm";
import AdminTitleManager from "./AdminTitleManager";

const UserManagementCenter = () => {
    const [open4, setOpen4] =useState(false);
    const handleOpen4= () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const TASKS_COUNT=20
  return (
    <div className=" w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
            <AdminTitleManager title="User Management Center" />
            </div>

            <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
                <div className="relative flex-1 flex justify-center">
                    <input className="h-[3.5rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search user"></input>
                    <span className="text-[1.7rem] absolute left-[14.6rem] top-[50%] translate-y-[-50%] "><GoSearch /></span>
                </div>
                <div className="w-fit">
                    <button onClick={handleOpen4} className="bg-blue-500 hover:bg-blue-700 py-2 px-5 font-prompt text-xl rounded-lg text-white">Add User</button>

                </div>



{/* Modal start */}

    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open4} onClose={handleClose4} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open4}>
          <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <CreateUserForm handleClose4={handleClose4} />
            </Typography>
          </Box>
        </Fade>
    </Modal>


{/* Modal end */}


               
                
                
            </div>
            <p className="text-2xl text-black font-opensans mb-7">{TASKS_COUNT} users</p>

            <table className="w-full border-1">
                <UserMngTableHead />
                <tbody>
                    <UserMngTableRow U_REGNO="20" U_FIRSTNAME="John" U_SECONDNAME="Doe" U_PASSWORD="john123" U_EMAIL="john123@gmail.com" U_ROLE="Admin" U_PHONE="072363261"  />
                </tbody>          
            </table>
            
        </div>

    </div>
  )
}

export default UserManagementCenter