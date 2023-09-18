import { useEffect, useState } from "react";
// import TableRow from "../common/WorkTableRow"
// import TitleManager from "../shared/TitleManager"
import {GoSearch} from 'react-icons/go'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import TableHead from "../common/WorkTableHead";
// import CreateWorkform from "../common/CreateWorkform";
import UserMngTableHead from "../common/UserMngTableHead";
import UserMngTableRow from "../common/UserMngTableRow";
import CreateUserForm from "./CreateUserForm";
import AdminTitleManager from "./AdminTitleManager";
import axios from "axios";

const UserManagementCenter = () => {
    const [open4, setOpen4] =useState(false);
    const handleOpen4= () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const [allAccounts, setAllAccounts] = useState([])
    const TASKS_COUNT=allAccounts.length

    useEffect(()=>{
        axios.get('http://localhost:8001/users')
        .then(response=>{
            setAllAccounts(response.data)
        })
    })
  return (
    <div className=" w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
            <AdminTitleManager title="User Management Center" />
            </div>

            <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
                <div className="relative flex-1 flex justify-center">
                    <input className="h-[2.9rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search user"></input>
                    <span className="text-[1.7rem] absolute left-[14.6rem] top-[50%] translate-y-[-50%] "><GoSearch /></span>
                </div>
                <div className="w-fit">
                    <button onClick={handleOpen4} className="bg-chocolate hover:bg-hover py-2 px-5 font-prompt text-[1.1rem] rounded-lg text-white">Add User</button>

                </div>



{/* Modal start */}

    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open4} onClose={handleClose4} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open4}>
          <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <CreateUserForm handleClose4={handleClose4} />
            </Typography>
          </Box>
        </Fade>
    </Modal>


{/* Modal end */}


                
                
                
            </div>
            <p className="text-[1.2rem] text-black font-opensans mb-7">{TASKS_COUNT} users</p>

            <table className="w-full border-1">
                <UserMngTableHead />
                <tbody>
                    {
                        allAccounts.map((eachAccount, index)=>{
                            return <UserMngTableRow key={index} ID={eachAccount.id} U_REGNO={eachAccount.registrationNumber} U_FIRSTNAME={eachAccount.firstName} U_LASTNAME={eachAccount.lastName} U_PASSWORD={eachAccount.password} U_EMAIL={eachAccount.email} U_ROLE={eachAccount.role} U_PHONE={eachAccount.phone}  />
                        })
                    }
                </tbody>          
            </table>
            
        </div>

    </div>
  )
}

export default UserManagementCenter