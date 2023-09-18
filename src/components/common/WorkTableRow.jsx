import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import EditWorkForm from './EditWorkForm';
import DeleteWorkModal from './DeleteWorkModal';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';


const WorkTableRow = ({ID,W_ID,W_TITLE,W_DUEDATE,W_WORDCOUNT,W_WRITER,W_ATTACHMENT,W_SPECIAL}) => {
    const [open, setOpen] =useState(false);
    const [open2, setOpen2] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    // const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    // const handleClose = () => {
    //   setOpen(false);
    // };

  return (
    <tr className="border-1 h-[3rem] text-[1rem] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.04)] transition-all duration-500">
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_ID}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_TITLE}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_DUEDATE}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_WORDCOUNT}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_WRITER}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_ATTACHMENT}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_SPECIAL}</td>
        
        <td onClick={handleOpen} className="border-1 border-[rgba(0,0,0,0.2)] cursor-pointer text-chocolate hover:text-hover text-center w-[3rem] ">
            <Tooltip title="Edit" className="text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-14">
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </Tooltip>

        </td>
       

{/* EditWorkForm Modal start */}
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open}>
          <Box className="absolute rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <EditWorkForm handleClose={handleClose} ID={ID} W_TITLE={W_TITLE} W_DUEDATE={W_DUEDATE} W_WORDCOUNT={W_WORDCOUNT} W_WRITER={W_WRITER} W_SPECIAL={W_SPECIAL} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
{/* EditWorkFormModal end */}




        <td onClick={handleOpen2} className="border-1 border-[rgba(0,0,0,0.2)] cursor-pointer text-red-500 hover:text-red-700 text-center w-[4rem] text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-14 h-6">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
        </td>

{/* Modal start  */}
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open2} onClose={handleClose2} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open2}>
          <Box className="absolute text-white rounded-lg flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem] h-[12rem]">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <DeleteWorkModal handleClose2={handleClose2} ID={ID}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
{/* Modal end

{/* //////////////////////////////// */}
{/* <div>
      {/* <Button variant="outlined" onClick={handleOpen2}>
        Open dialog
      </Button> */}
      {/* <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
        className=''
      > */}
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle> */}
        {/* <IconButton
          aria-label="close"
          onClick={handleClose2}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        > */}
          {/* <CloseIcon />
        </IconButton>
        <DialogContent className='bg-blue-500 w-[30rem]'>
          <Typography className=''>
          Delete the work?
          </Typography>
        </DialogContent>
          <Button autoFocus onClick={handleClose2}>
            Save changes
          </Button>
      </BootstrapDialog>
    </div> */} 


{/* ///////////////////////////////////////////// */}
    </tr>
  )
}


// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));
export default WorkTableRow