import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ThemeContext=createContext()
export const useMyCustomHook=()=>useContext(ThemeContext)



const MyContext = ({children}) => {
  
  const [show, updateShow] = useState(false)
  

  const setShow=()=>{
    updateShow(!show)
  }
  

  const LOGGEDIN_USER={role:"Admin"}
  const USER_NAME=LOGGEDIN_USER?`${LOGGEDIN_USER.firstName} ${LOGGEDIN_USER.lastName}`:undefined;
 
  const DUE_DATE="21st Sep 2023 by 11:59 pm"
  const WORD_COUNT=1500
  const SPECIAL_REQUIREMENTS="There is a specific"
  const ASSIGNMENT_ID="23H"
  const navigate=useNavigate()
  
 
  return (
    <ThemeContext.Provider value={{ show, setShow,DUE_DATE,WORD_COUNT, SPECIAL_REQUIREMENTS,ASSIGNMENT_ID,navigate,LOGGEDIN_USER, USER_NAME}}>
      {children}
    </ThemeContext.Provider>
    
  )
}

MyContext.propTypes={
  children:PropTypes.node.isRequired
}

export default MyContext