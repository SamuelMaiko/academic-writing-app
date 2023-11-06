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
import { BsPersonFillAdd } from "react-icons/bs";
import useLocalStorage from "../../../customHooks/useLocalStorage";
import AssignedAssignments from "../AssignedAssignments";
import UnAssignedAssignments from "../UnAssignedAssignments";
import { AiOutlinePlus } from "react-icons/ai";

const WorkOrderManagement = () => {
    // const {availableWork}=useMyAPIcontext()
    // const [open3, setOpen3] =useState(false);
    // const handleOpen3 = () => setOpen3(true);
    // const handleClose3 = () => setOpen3(false);
    
    // const [availableWork, setAvailableWork] = useState([])
    // // const TASKS_COUNT=availableWork.length
    // const {BASE_URL}=useMyBaseAPIContext()

    // useEffect(()=>{
    //   axios.get(`${BASE_URL}/assignments`)
    //   .then(response=>setAvailableWork(response.data))

    // },[])

  const [showAssignedAssignments, setShowAssignedAssignments]=useLocalStorage("showAssignedAssignments",false)
  const [showUnAssignedAssignments, setShowUnAssignedAssignments]=useLocalStorage("showUnAssignedAssignments",false)
  const [createUserOpenModel,onsetCreateUserOpenModel]=useLocalStorage("createUserOpenModel",false)

   


   const handleShowingAssignedAssignments=()=>{
        setShowAssignedAssignments(true)
        setShowUnAssignedAssignments(false)
   }
   const handleShowingUnAssignedAssignments=()=>{
        setShowUnAssignedAssignments(true)
        setShowAssignedAssignments(false)
   }
    
  return (
    <div className=" w-full h-full bg-[#f5f5f5]">
        {/* <div className="w-[25%] ml-auto">
          <h1 className="">Hello there</h1>
        </div> */}

        <div className="w-[75%] mx-auto">

          <div className="sticky top-0 bg-[#f5f5f5] z-10 ]">
            <AdminTitleManager title="Work Order Management" />
          </div>
                               
          <div className="mb-[1rem] flex justify-between">
            <ul className="flex ">
              <li onClick={handleShowingAssignedAssignments} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 transition-all duration-200 mr-5 cursor-pointer">Assigned assignments</li>
              <li onClick={handleShowingUnAssignedAssignments} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 cursor-pointer">Unassigned assignments</li>  
            </ul>
            <button onClick={()=>""} className="flex items-center bg-blue-800 ml-5 hover:bg-blue-900 transition-colors duration-300 py-2 px-5 font-prompt text-[1.1rem] rounded-lg text-white"><span className="text-[1.3rem] mr-2"><AiOutlinePlus /></span>Add assignment</button>
          </div>

          <section className="w-full pl-1">
              <div>
                  {
                      showAssignedAssignments&& showAssignedAssignments? <AssignedAssignments createUserOpenModel={createUserOpenModel} />:""
                  }
                  {
                      showUnAssignedAssignments&& <UnAssignedAssignments createUserOpenModel={createUserOpenModel}/>
                  }
              </div>

          </section>
            {/* <div>
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

          {/* <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open3} onClose={handleClose3} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open3}>
          <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <CreateWorkform handleClose3={handleClose3} />
            </Typography>
          </Box>
        </Fade>
      </Modal> */}


{/* Modal end */}


               
                
                
            {/* </div>
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
            </table> */}
            
        </div>

    </div>
  )
}

export default WorkOrderManagement