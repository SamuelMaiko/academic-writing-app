import { FaRegEdit, FaRegUser } from 'react-icons/fa'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {MdOutlineEmail, MdSettingsPower} from 'react-icons/md'
import {MdOutlineArrowBack} from 'react-icons/md'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {AiOutlineDelete, AiOutlinePhone} from 'react-icons/ai'
import InfoDisplay from '../reusable_components/InfoDisplay'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { useMyBaseAPIContext } from '../../context/BaseAPIContext'
import { toast } from 'react-toastify'
import DiscardChangesModal from './DiscardChangesModal'
import DeleteAccountModal from './DeleteAccountModal'
import DeactivateAccountModal from './DeactivateAccountModal'
import EditAdminRightsModal from './EditAdminRightsModal'
import useLocalStorage from '../../customHooks/useLocalStorage'



const SpecificUserDetails = () => {
  const [deleteModalOpen, onsetDeleteModalOpen] = useState(false)
  const [deactivateModalOpen, onsetDeactivateModalOpen] = useState(false)
  const [discardModalOpen, onsetDiscardModalOpen] = useState(false)
  const [rightsModalOpen,onsetRightsModalOpen]=useLocalStorage("rightsModalOpen",false)
  const [isEditing, setIsEditing] = useLocalStorage("isEditing",false)
  const {BASE_URL,specificUser,setSpecificUser,saveChangesAndPatch}=useMyBaseAPIContext()
  const [adminRights, setAdminRights]=useState([])
  const [userProfile, setUserProfile]=useState({})

  const {workId}=useParams()

  useEffect(()=>{
    // ________________________ getting the specific user
    axios.get(`${BASE_URL}/users/${workId}`)
    .then(response=>setSpecificUser(response.data))
    .catch(()=>toast.error("Error getting the specific user"))

    // ______________________________ fetching specific user PROFILE(profile_url,bio,username)
    axios.get(`${BASE_URL}/user_profiles/${workId}`)
    .then(response=>setUserProfile(response.data))
    .catch(()=>toast.error("Error getting the specific user profile"))

    // ___________________________ fetching user admin privileges
    
    axios.get(`${BASE_URL}/privilege_by_user_id/${workId}`)
    .then(response=>{
      setAdminRights(response.data)
    })
    .catch(()=>{
      toast.error("Error while getting rights")
    })
    


  },[])

const handleEditDetails=()=>{
  saveChangesAndPatch()
  setIsEditing(false)

}
//   saveChangesAndPatch()
  // const value=
  // if (value){
  //   alert("Wow")
  // }
//   saveChangesAndPatch
//   const UPDATED_USER_DETAILS={
//     firstname:firstName,
//     lastname:lastName,
//     phoneNumber,
//     email,
//     role
// }
// axios.patch(`${BASE_URL}/users/${workId}`,details)
// .then(response=>{
//     console.log(response.data)
// })
// .catch(error=>{
//     toast.error("Error while updating details")
// })
// }
  

const handleOnClickEditBtn=()=>{
  setIsEditing(!isEditing)
  

}

// ___________________________useState setters passed as props
  const setDiscardModalOpen=(newState)=>{
    onsetDiscardModalOpen(newState)
  }
  const setDeleteModalOpen=(newState)=>{
    onsetDeleteModalOpen(newState)
  }
  const setDeactivateModalOpen=(newState)=>{
    onsetDeactivateModalOpen(newState)
  }
  const setRightsModalOpen=(newState)=>{
    onsetRightsModalOpen(newState)
  }
  const onsetSpecificUser=(newState)=>{
    setSpecificUser(newState)
  }
  const onsetIsEditing=(newState)=>{
    setIsEditing(newState)
  }


  const userCardStyles={
    // background:`url(${userProfile.profile_url})`,
    backgroundSize:'cover',
    backgroundAttachment:'scroll',
    backgroundPosition:'center center'
}
  let profile_url=userProfile.profile_url
  if (profile_url==null){
    profile_url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }

  return (
    <div className={`w-full h-screen ${isEditing?"bg-[#e0e0e0]":""} transition-all duration-300`}>
        <div className="w-[75%] h-full mx-auto">
          <div className='flex justify-between items-center py-4 pr-4'>

            <div className='relative pl-2 mb-5'>
              <h1 className='text-[2.5rem] font-medium'>User Information</h1>
              <p className='text-md'>User information is shown below. To edit click on the Edit Information button.</p>
              <NavLink to="/dashboard/usermanagement"><button className="absolute -bottom-14 px-5 py-2 bg-blue-800 hover:bg-blue-900 text-white flex items-center"><span className="mr-2"><MdOutlineArrowBack /></span>Go Back</button></NavLink>
            </div>

            <p className={`${isEditing?"opacity-1 visible":"invisible opacity-0"} transition-all duration-300 text-xl text-[#000000] bg-yellow-300 py-1 px-4 font-medium`}>Edit mode</p>
            <p onClick={()=>setRightsModalOpen(true)} className={`${!isEditing?"opacity-1 visible":"invisible opacity-0"} ${specificUser && specificUser.role=="Writer"?"hidden": ""} transition-all duration-300 text-textLinks underline hover:no-underline cursor-pointer`}>Edit admin rights</p>

            <div className='flex flex-col items-center '>
              <div className='w-[3.4rem] h-[3.4rem] rounded-full overflow-hidden flex items-center justify-center'>
                <img src={`${profile_url}`} style={userCardStyles} className='w-full h-full '></img>
              </div>
              {
                specificUser &&              
              <p className={`${specificUser&& specificUser.account_status=="Active"?"text-green-500":"text-red-500"} text-md bg-white`}>{specificUser && specificUser.account_status}</p>
              }
              {/* <p><span>Samuel</span> <span>Maiko</span> </p> */}
            </div>
          </div>

          {
            specificUser?
          <section className='mt-10 pl-2'>
            <div className={`flex flex-col  ${isEditing? "h-[18.5rem] gap-y-1":"h-[16.77rem] gap-y-3"} transition-height duration-300`}>
              <div className={`${isEditing?"mb-1":""}`}>
                <InfoDisplay isEditing={isEditing} title="Work ID" detail={specificUser.work_id} icon={<HiOutlineOfficeBuilding/>}/>
              </div>
              <div className=''>
                <InfoDisplay isEditing={isEditing} title="First Name" detail={specificUser.firstname} icon={<FaRegUser/>}/>
              </div>
              <div className=''>
                <InfoDisplay isEditing={isEditing} title="Last Name" detail={specificUser.lastname} icon={<FaRegUser/>}/>
              </div>
              <div className=''>
                <InfoDisplay isEditing={isEditing} title="Phone number" detail="+254729165447" icon={<AiOutlinePhone/>}/>
              </div>
              <div className=''>
                <InfoDisplay isEditing={isEditing} title="Email" detail={specificUser.email} icon={<MdOutlineEmail/>}/>
              </div>
              <div className=''>
                <InfoDisplay isEditing={isEditing} title="Role" detail={specificUser.role} icon={<MdOutlineAdminPanelSettings/>}/>
              </div>
            </div>

            <div className={`flex justify-between w-[65%] ${isEditing?"mt-[4.25rem]":"mt-24"} transition-all duration-300 pl-4`}>
              <button onClick={handleOnClickEditBtn} className={`py-2 px-5 ${isEditing?"text-black bg-[#cccccc] hover:bg-[#999999]":"text-white"} bg-[#4287f5]  hover:bg-[#3366cc] transition-background duration-300 rounded-lg flex items-center`}><span className='mr-1 text-lg'>{isEditing?<MdOutlineArrowBack />:<FaRegEdit/>}</span><span>{isEditing?"Back":"Edit"}</span></button>
              <button onClick={()=>setDeleteModalOpen(true)} className={`${isEditing?"hidden":""} py-2 px-5 bg-red-500 text-white hover:bg-[#c92416] transition-background transition-all duration-500 rounded-lg flex items-center`}><span className='mr-1 text-lg'><AiOutlineDelete/></span><span>Delete</span></button>
              <button onClick={()=>setDeactivateModalOpen(true)} className={`${isEditing?"hidden":""} ${specificUser && specificUser.account_status!=="Active"?"bg-[#4CAF50] hover:bg-[#45A049]":"bg-[#888] hover:bg-[#666]"} transition-all py-2 px-5 text-white transition-background duration-500 rounded-lg flex items-center`}><span className='mr-1 text-lg'><MdSettingsPower/></span><span>{specificUser&& specificUser.account_status=="Deactivated"?"Activate":"Deactivate"}</span></button>
              <button onClick={()=>setDiscardModalOpen(true)} className={`${isEditing?"":"hidden"} py-2 px-5 bg-[#FF5733] text-white hover:bg-[#FF2900] transition-background transition-all duration-500 rounded-lg flex items-center`}><span className='mr-1 text-lg'><AiOutlineDelete/></span><span>Discard changes</span></button>
              <button onClick={handleEditDetails} className={`${isEditing?"":"hidden"} transition-all py-2 px-5 bg-[#00CC66] text-white hover:bg-[#00994D] transition-background duration-500 rounded-lg flex items-center`}><span className='mr-1 text-lg'><MdSettingsPower/></span><span>Save Changes</span></button>
            </div>
            {/* Are you sure you want to discard changes? */}
          </section>:
          <section className='flex justify-center'>
            <h1 className='text-4xl font-medium mt-7'>User not found! </h1>
          </section>
          }

        </div>

        {/* __________________________________________Discard new changes modal */}

        <div className={`fixed ${discardModalOpen?"": "hidden"} top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]`}>
          <DiscardChangesModal onsetIsEditing={onsetIsEditing} setDiscardModalOpen={setDiscardModalOpen} />
        </div> 


        {/* __________________________________________delete account modal */}
        <div className={`fixed ${deleteModalOpen?"": "hidden"} top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]`}>
            <DeleteAccountModal onsetSpecificUser={onsetSpecificUser} setDeleteModalOpen={setDeleteModalOpen} user_id={specificUser&& specificUser.work_id} user_role={specificUser && specificUser.role} />
        </div>


        {/* __________________________________________deactivate account modal */}
        <div className={`fixed ${deactivateModalOpen?"": "hidden"} top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]`}>
            <DeactivateAccountModal account_status={specificUser && specificUser.account_status} workId={workId} setDeactivateModalOpen={setDeactivateModalOpen} />          
        </div>

        {/* __________________________________________ edit admin rights modal */}
        <div className={`fixed ${rightsModalOpen?"": "hidden"} top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]`}>
            <EditAdminRightsModal adminRights={adminRights} workId={workId} setRightsModalOpen={setRightsModalOpen} />          
        </div>

        
        
    </div>
  )
}

export default SpecificUserDetails