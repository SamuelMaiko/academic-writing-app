import { useEffect, useState } from "react"
import HeadTitle from "../reusable_components/HeadTitle"
import UserAccountCard from "../reusable_components/UserAccountCard"
import {PiCrown} from 'react-icons/pi'
import axios from "axios"
import { useMyBaseAPIContext } from "../../context/BaseAPIContext"
import Pagination from "../reusable_components/Pagination"
import useLocalStorage from "../../customHooks/useLocalStorage"

const AdminAccounts = ({createUserOpenModel}) => {
    const {BASE_URL}=useMyBaseAPIContext() 
    const [admins,setAdmins]=useState()

    useEffect(()=>{
        axios.get(`${BASE_URL}/admins`)
        .then(response=>{
            setAdmins(response.data)
        })
    },[createUserOpenModel,BASE_URL])
    
    const [currentPage, setCurrentPage]=useLocalStorage("adminCurrentPage",1)
    
    const cardsPerPage=6
    const indexOfFirstCard=currentPage*cardsPerPage-cardsPerPage
    const indexOfLastCard=currentPage*cardsPerPage-1

    const handlePageChange=(newPage)=>{
        setCurrentPage(newPage)
    }

  return (
    <div className="w-full h-[44rem] ">
        <HeadTitle title="Admins" icon={<PiCrown/>} /> 
        <section className="w-[98%] mx-auto h-[80%] grid grid-cols-3 gap-8">
            {
                admins&&admins.map((each_admin,index)=>{
                    if (index>=indexOfFirstCard && index<=indexOfLastCard){
                        return <UserAccountCard key={index} firstname={each_admin.firstname} lastname={each_admin.lastname} email={each_admin.email} user_status={each_admin.account_status} work_id={each_admin.work_id} profile_url={each_admin.user_profile.profile_url} icon={<PiCrown />} />
                    }
                })
            }
        </section>
        <Pagination currentPage={currentPage} cardsPerPage={cardsPerPage} totalCards={admins && admins.length} onPageChange={handlePageChange} />

    </div>
  )
}

export default AdminAccounts