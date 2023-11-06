import { useEffect, useState } from "react"
import HeadTitle from "../reusable_components/HeadTitle"
import UserAccountCard from "../reusable_components/UserAccountCard"
import {BsVectorPen} from 'react-icons/bs'
import axios from "axios"
import { useMyBaseAPIContext } from "../../context/BaseAPIContext"
import Pagination from "../reusable_components/Pagination"
import useLocalStorage from "../../customHooks/useLocalStorage"

const WriterAccounts = ({createUserOpenModel}) => {
    const {BASE_URL}=useMyBaseAPIContext()
    const [writers,setWriters]=useState()

    useEffect(()=>{
        axios.get(`${BASE_URL}/writers`)
        .then(response=>{
            setWriters(response.data)
        })
    },[createUserOpenModel,BASE_URL])

    const [currentPage, setCurrentPage]=useLocalStorage("writerCurrentPage",1)
    
    const cardsPerPage=6
    const indexOfFirstCard=currentPage*cardsPerPage-cardsPerPage
    const indexOfLastCard=currentPage*cardsPerPage-1

    const handlePageChange=(newPage)=>{
        setCurrentPage(newPage)
    }

  return (
    <div className="w-full h-[44rem]">
        <HeadTitle title="Writers" icon={<BsVectorPen />} /> 
        <section className="w-[98%] mx-auto h-[80%] grid grid-cols-3 gap-8">
            {
                writers&&writers.map((each_writer,index)=>{
                    if (index>=indexOfFirstCard && index<=indexOfLastCard){
                        return <UserAccountCard key={index} firstname={each_writer.firstname} lastname={each_writer.lastname} email={each_writer.email} user_status={each_writer.account_status} work_id={each_writer.work_id} profile_url={each_writer.user_profile.profile_url} icon={<BsVectorPen/>} />
                    }
                })
            }
        </section>
        <Pagination currentPage={currentPage} cardsPerPage={cardsPerPage} totalCards={writers && writers.length} onPageChange={handlePageChange} />

    </div>
  )
}

export default WriterAccounts