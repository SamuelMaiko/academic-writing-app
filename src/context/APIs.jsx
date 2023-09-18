
import axios from 'axios'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const APIs=createContext()
export const useMyAPIcontext=()=> useContext(APIs)

const APIContext = ({children}) => {
    const [open, setOpen] =useState(false);
    const [open2, setOpen2] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    
    const [availableWork, setAvailableWork] = useState([])

  const USERS_API_URL=''
  const WORK_API_URL='http://localhost:8001/work'

  useEffect(()=>{
    axios.get('http://localhost:8001/work')
    .then(response=>{
      setAvailableWork(response.data)
    })
    .catch(error=>{
      toast.error("Server Error (Getting work)")
      console.log(error.message)
  })
  })


  return (
    <APIs.Provider value={{open,open2, handleOpen, handleClose, handleOpen2, handleClose2, USERS_API_URL, WORK_API_URL,availableWork}}>
    {children}
    </APIs.Provider>
  )
}

APIContext.propTypes={
    children:PropTypes.node.isRequired
  }

export default APIContext