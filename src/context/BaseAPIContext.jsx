import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types'
import axios from "axios"
import { toast } from "react-toastify"

const BaseApi=createContext()
export const useMyBaseAPIContext=()=>useContext(BaseApi)



const BaseAPIContext = ({children}) => {

const [TOKEN, onsetTOKEN] = useState("")
const BASE_URL="http://localhost:5555"

const setTOKEN=(newToken)=>{
    onsetTOKEN(newToken)
}
// _____________________________________________
    const [firstName, onsetFirstName] = useState("")
    const [lastName, onsetLastName] = useState("")
    const [phoneNumber, onsetPhoneNumber] = useState("")
    const [email, onsetEmail] = useState("")
    const [role, onsetRole] = useState("")
    const [workId, onsetWorkId]=useState()
    const [specificUser, onsetSpecificUser]=useState(null)

const setFirstName=(newValue)=>onsetFirstName(newValue)
const setLastName=(newValue)=>onsetLastName(newValue)
const setPhoneNumber=(newValue)=>onsetPhoneNumber(newValue)
const setEmail=(newValue)=>onsetEmail(newValue)
const setRole=(newValue)=>onsetRole(newValue)
const setWorkId=(newValue)=>onsetWorkId(newValue)
const setSpecificUser=(newValue)=>onsetSpecificUser(newValue)


const saveChangesAndPatch=()=>{
  const UPDATED_USER_DETAILS={
      firstname:firstName,
      lastname:lastName,
      phone_number:phoneNumber,
      email,
      role
  }
  axios.patch(`${BASE_URL}/users/${workId}`,UPDATED_USER_DETAILS)
  .then(()=>{
      // alert(response.data)
      onsetSpecificUser({...specificUser,...UPDATED_USER_DETAILS})
      toast.success("Details updated successfully")

     
  })
  .catch(()=>{
      toast.error("Error while updating details")
     
  })
  // alert("Hello")

}


  return (
    <BaseApi.Provider value={{BASE_URL,specificUser,setSpecificUser,saveChangesAndPatch,TOKEN,setTOKEN,setFirstName,setLastName,setPhoneNumber,setEmail,setRole,setWorkId}}>
    {children}
    </BaseApi.Provider>
  )
}

BaseAPIContext.propTypes={
    children:PropTypes.node.isRequired
  }
export default BaseAPIContext