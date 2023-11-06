import CreateUserModal from "../CreateUserModal";
import AdminTitleManager from '../../reusable_components/AdminTitleManager';
import AdminAccounts from "../adminAccounts";
import WriterAccounts from "../WriterAccounts";
import {BsPersonFillAdd} from 'react-icons/bs'
import useLocalStorage from "../../../customHooks/useLocalStorage";

const UserManagementCenter = () => {
   const [showAdmins, setShowAdmins]=useLocalStorage("showAdmins",false)
   const [showWriters, setShowWriters]=useLocalStorage("showWriters",false)
   const [createUserOpenModel,onsetCreateUserOpenModel]=useLocalStorage("createUserOpenModel",false)

   


   const handleShowingTheAdmins=()=>{
        setShowAdmins(true)
        setShowWriters(false)
   }
   const handleShowingTheWriters=()=>{
        setShowWriters(true)
        setShowAdmins(false)
   }
   const setCreateUserOpenModel=(newState)=>onsetCreateUserOpenModel(newState)

    return(
        <div className="w-full h-full bg-[#f5f5f5]">
            <div className={`${createUserOpenModel?"overflow-y-hidden h-screen": ""} w-[75%] mx-auto h-full`}>
                <div className="sticky top-0 bg-[#f5f5f5] z-10 ]">
                    <AdminTitleManager title="User Management Center" />
                </div>
                               
                <div className="mb-[2rem] flex justify-between">
                    <ul className="flex ">
                        <li onClick={handleShowingTheAdmins} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 transition-all duration-200 mr-5 cursor-pointer">Admins</li>
                        <li onClick={handleShowingTheWriters} className="underline text-lg text-textLinks hover:no-underline hover:text-blue-500 cursor-pointer">Writers</li>  
                    </ul>
                    <button onClick={()=>setCreateUserOpenModel(true)} className="flex items-center bg-blue-800 ml-5 hover:bg-blue-900 transition-colors duration-300 py-2 px-5 font-prompt text-[1.1rem] rounded-lg text-white"><span className="text-[1.3rem] mr-2"><BsPersonFillAdd /></span>Add User</button>
                </div>

                <section className="w-full">
                    <div>
                        {
                            showAdmins&& showAdmins? <AdminAccounts createUserOpenModel={createUserOpenModel} />:""
                        }
                        {
                            showWriters&& <WriterAccounts createUserOpenModel={createUserOpenModel}/>
                        }
                    </div>

                </section>
                
            </div>
            {/* __________________________________ create user modal */}
            <div className={`fixed ${createUserOpenModel?"": "hidden"} top-0 right-0 bottom-0 left-0 z-20 bg-[rgba(0,0,0,0.5)]`}>
                <h1><CreateUserModal setCreateUserOpenModel={setCreateUserOpenModel}/></h1>          
            </div>
        </div>
    )
   
}

export default UserManagementCenter