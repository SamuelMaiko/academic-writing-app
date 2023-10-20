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
import UserMngTableHead from '../UserMngTableHead';
import UserMngTableRow from '../UserMngTableRow';
import CreateUserForm from "../CreateUserForm";
import AdminTitleManager from '../../reusable_components/AdminTitleManager';
import { useMyAPIcontext } from '../../../context/APIs.jsx';
import UserAccountCard from "../../reusable_components/UserAccountCard";
import AdminAccounts from "../adminAccounts";
import WriterAccounts from "../WriterAccounts";
// _________________________________
import {BsPersonFillAdd} from 'react-icons/bs'

// import axios from "axios"; 

const UserManagementCenter = () => {
    const [open4, setOpen4] =useState(false);
    const handleOpen4= () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    // const [allAccounts, setAllAccounts] = useState([])
    const {allAccounts,setAllAccounts}=useMyAPIcontext()
    const TASKS_COUNT=allAccounts.length
// ____________________________________
   const [showAdmins, setShowAdmins]=useState(true)
   const [showWriters, setShowWriters]=useState(false)

   const handleShowingTheAdmins=()=>{
        setShowAdmins(true)
        setShowWriters(false)
   }
   const handleShowingTheWriters=()=>{
        setShowWriters(true)
        setShowAdmins(false)
   }

    return(
        <div className="w-full h-full bg-[#f5f5f5]">
            <div className="w-[75%] mx-auto h-full">
                <div className="sticky top-0 bg-[#f5f5f5] z-10 ]">
                    <AdminTitleManager title="User Management Center" />
                </div>
                
                {/* <h1 className="">Hello there</h1> */}

                
                <div className="mb-[2rem] flex justify-between">
                    <ul className="flex ">
                        <li onClick={handleShowingTheAdmins} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 transition-all duration-200 mr-5 cursor-pointer">Admins</li>
                        <li onClick={handleShowingTheWriters} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 cursor-pointer">Writers</li>  
                    </ul>
                    <button onClick={handleOpen4} className="flex items-center bg-blue-800 ml-5 hover:bg-blue-900 py-2 px-5 font-prompt text-[1.1rem] rounded-lg text-white"><span className="text-[1.3rem] mr-2"><BsPersonFillAdd /></span>Add User</button>
                </div>

                <section className="w-full">
                    <div>
                        {
                            showAdmins&& <AdminAccounts />
                        }
                        {
                            showWriters&& <WriterAccounts/>
                        }
                    </div>

                </section>
                {/* <UserAccountCard/> */}
                
            </div>
        </div>
    )
    // useEffect(()=>{
    //     axios.get('http://localhost:8001/users')
    //     .then(response=>{
    //         setAllAccounts(response.data)
    //     })
    // },[])

    // const onSetAllAccounts=(newAccount)=>{
    //     setAllAccounts(newAccount)
    // }
//   return (
//     <div className=" w-full h-full">
//         <div className="w-[90%] mx-auto">
//             <div>
//             <AdminTitleManager title="User Management Center" />
//             </div>

//             <div className="flex pb-5 h-[5rem] justify-between items-center border-b-[rgba(0,0,0,0.14)] border-b-1">
//                 <div className="relative flex-1 flex justify-center">
//                     <input className="h-[2.9rem] outline-none rounded-lg w-[70%] pl-14 text-lg shadow-[0_0_4px_rgba(0,0,0,0.7)] "  type="text" placeholder="Search user"></input>
//                     <span className="text-[1.7rem] absolute left-[14.6rem] top-[50%] translate-y-[-50%] "><GoSearch /></span>
//                 </div>
//                 <div className="w-fit">
//                     <button onClick={handleOpen4} className="bg-chocolate hover:bg-hover py-2 px-5 font-prompt text-[1.1rem] rounded-lg text-white">Add User</button>

//                 </div>



// {/* Modal start */}

//     <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open4} onClose={handleClose4} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
//         <Fade in={open4}>
//           <Box className="absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem]">
//             <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
//                 <CreateUserForm handleClose4={handleClose4} />
//             </Typography>
//           </Box>
//         </Fade>
//     </Modal>


// {/* Modal end */}


                
                
                
//             </div>
//             <p className="text-[1.2rem] text-black font-opensans mb-7">{TASKS_COUNT} users</p>

//             <table className="w-full border-1">
//                 <UserMngTableHead />
//                 <tbody>
//                     {
//                         allAccounts.map((eachAccount, index)=>{
//                             return <UserMngTableRow key={index} ID={eachAccount.id} U_REGNO={eachAccount.registrationNumber} U_FIRSTNAME={eachAccount.firstName} U_LASTNAME={eachAccount.lastName} U_PASSWORD={eachAccount.password} U_EMAIL={eachAccount.email} U_ROLE={eachAccount.role} U_PHONE={eachAccount.phone}  />
//                         })
//                     }
//                 </tbody>          
//             </table>
            
//         </div>

//     </div>
//   )
}

export default UserManagementCenter