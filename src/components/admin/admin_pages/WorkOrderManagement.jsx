import { useEffect, useState } from "react";
// import TitleManager from "src/components/reusable_components/TitleManager"
import {GoSearch} from 'react-icons/go'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import WorkTableHead from "../WorkTableHead";
import WorkTableRow from "../WorkTableRow"
import CreateWorkform from "../CreateWorkform";
import AdminTitleManager from "../../reusable_components/AdminTitleManager";
import axios from "axios";
import { toast } from "react-toastify";
// import { useMyAPIcontext } from "../../context/APIs";
import { useMyBaseAPIContext } from "../../../context/BaseAPIContext";

const WorkOrderManagement = () => {
    // const {availableWork}=useMyAPIcontext()
    const [open3, setOpen3] =useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    
    const [availableWork, setAvailableWork] = useState([])
    const TASKS_COUNT=availableWork.length
    const {BASE_URL}=useMyBaseAPIContext()

    useEffect(()=>{
      axios.get(`${BASE_URL}/assignments`)
      .then(response=>setAvailableWork(response.data))

    },[])
    
  return (
    <div className=" w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
            <AdminTitleManager title="Work Order Management" />
            </div>

            <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
                <div className="relative flex-1 flex justify-center">
                    <input className="h-[2.9rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search work"></input>
                    <span className="text-[1.7rem] absolute left-[14.6rem] top-[50%] translate-y-[-50%] "><GoSearch /></span>
                </div>
                <div className="w-fit">
                    <button onClick={handleOpen3} className="bg-chocolate hover:bg-hover py-2 px-5 font-opensans text-[1.1rem] rounded-lg text-white">Create work</button>

                </div>



{/* Modal start */}

          <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open3} onClose={handleClose3} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open3}>
          <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <CreateWorkform handleClose3={handleClose3} />
            </Typography>
          </Box>
        </Fade>
      </Modal>


{/* Modal end */}


               
                
                
            </div>
            <p className="text-[1.2rem] text-black font-opensans mb-7">{TASKS_COUNT} tasks</p>

            <table className="w-full border-1">
                <WorkTableHead />
                <tbody>
                  {
                    availableWork.map((eachWork, index)=>{
                      return <WorkTableRow key={index} ID={eachWork.id} W_ID={eachWork.assignment_id} W_TITLE={eachWork.title} W_DUEDATE={eachWork.deadline} W_WORDCOUNT={eachWork.word_count} W_WRITER={eachWork.assigned_writer?eachWork.assigned_writer:""} W_ATTACHMENT={eachWork.file_url} W_SPECIAL={eachWork.additional_info} />
                    })
                  }                    
                </tbody>          
            </table>
            
        </div>

    </div>
  )
}

export default WorkOrderManagement