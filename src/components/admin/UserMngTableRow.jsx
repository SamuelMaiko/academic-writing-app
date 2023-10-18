import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
import {Checkbox} from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useState } from 'react';
import EditWorkForm from './EditWorkForm';
import DeleteWorkModal from './DeleteWorkModal';
import EditUserForm from '../admin/EditUserForm';
import DeleteUserModal from '../admin/DeleteUserModal';
import EditAdminRightsForm from '../admin/EditAdminrightsForm';

const UserMngTableRow = ({ID, U_REGNO,U_FIRSTNAME, U_LASTNAME, U_PASSWORD, U_EMAIL, U_PHONE, U_ROLE}) => {
    const [open10, setOpen10] =useState(false);
    const [open11, setOpen11] =useState(false);
    const handleOpen10 = () => setOpen10(true);
    const handleClose10 = () => setOpen10(false);
    const handleOpen11 = () => setOpen11(true);
    const handleClose11 = () => setOpen11(false);
    


    const [openOptions, setOpenOptions] =useState(false);
    const handleOpenOptions = () => setOpenOptions(true);
    const handleCloseOptions = () => setOpenOptions(false);
    

    
  return ( 
    <tr className="border-1 h-[3rem] text-[1rem] hover:shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.04)] transition-all duration-500">
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_REGNO}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_FIRSTNAME}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_LASTNAME}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_PASSWORD}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_EMAIL}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_PHONE}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{U_ROLE}</td>
        
        <td className="border-1 border-[rgba(0,0,0,0.2)] cursor-pointer text-blue-500 hover:text-blue-800 text-center w-[4rem] ">
        <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className='border-none'>
            <Tooltip title="Edit" className="text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-14">
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </Tooltip> 
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" textValue="user" onClick={handleOpen10}><span className='text-[1.08rem]'>Edit User Details</span></DropdownItem>
        <DropdownItem key="copy" textValue="user" className={`${U_ROLE=="Admin"? "":"hidden"}`} onClick={handleOpenOptions}><span className='text-[1.08rem]'>Edit Admin Rights</span></DropdownItem>
        {/* <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
    </td>
{/* //////////////////////////////////////// Responsible for the adin rights pop over*/}
        <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={openOptions} onClose={handleCloseOptions} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={openOptions}>
          <Box className="absolute p-4 flex justify-center  text-white rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[32rem] h-[14rem]">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <EditAdminRightsForm handleCloseOptions={handleCloseOptions} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
       {/* //////////////////////////////////////////////////////////////// */}

{/* EditWorkForm Modal start */}
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open10} onClose={handleClose10} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open10}>
          <Box className="absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <EditUserForm handleClose10={handleClose10} ID={ID} U_REGNO={U_REGNO} U_FIRSTNAME={U_FIRSTNAME} U_LASTNAME={U_LASTNAME} U_PASSWORD={U_PASSWORD} U_EMAIL={U_EMAIL} U_ROLE={U_ROLE} U_PHONE={U_PHONE} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
{/* EditWorkFormModal end */}




        <td onClick={handleOpen11} className="border-1 border-[rgba(0,0,0,0.2)] cursor-pointer text-red-400 hover:text-red-700 text-center w-[4rem] text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-6">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
        </td>

{/* Modal start */}
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open11} onClose={handleClose11} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open11}>
          <Box className="absolute text-white rounded-lg flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem] h-[12rem]">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <DeleteUserModal handleClose11={handleClose11} ID={ID} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
{/* Modal end */}


        {/* <td onClick={handleOpen2} className="border-1 border-[rgba(0,0,0,0.2)] cursor-pointer text-red-400 hover:text-red-700 text-center w-[4rem] text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-20 h-7">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
        </td> */}

{/* Modal start */}
     
{/* Modal end */}

    </tr>
  )
}

export default UserMngTableRow