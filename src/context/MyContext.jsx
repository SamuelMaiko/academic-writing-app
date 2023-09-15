import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ThemeContext=createContext()
export const useMyCustomHook=()=>useContext(ThemeContext)

// export const LOGGEDIN_USER=JSON.parse(localStorage.getItem('LOGGEDIN_USER'))


const MyContext = ({children}) => {
  // const [isNavBarOpen, setIsNavBar] = useState(false)
  const [show, updateShow] = useState(false)
  

  const setShow=()=>{
    updateShow(!show)
  }
  


  // const setIsNavBarOpen=(newValue)=>{
  //   setIsNavBar(newValue)
  // }
  // const USER_TYPES=[
  //   {
  //     type:"Writer"
  //   },
  //   {
  //     type:"Admin"
  //   },
  //   {
  //     type:"User"
  //   }
  // ]

  const LOGGEDIN_USER=JSON.parse(localStorage.getItem('LOGGEDIN_USER'))
  const USER_NAME=LOGGEDIN_USER?`${LOGGEDIN_USER.firstName} ${LOGGEDIN_USER.lastName}`:undefined;
  // const updateLoggedInUser=(newValue)=>{
  //   localStorage
  // }
  // const USER_TYPE="Admin" //gotten from form
  const DUE_DATE="21st Sep 2023 by 11:59 pm"
  const WORD_COUNT=1500
  const SPECIAL_REQUIREMENTS="There is a specific"
  const ASSIGNMENT_ID="23H"
  const navigate=useNavigate()
  // const ASSIGNMENT_STATUS="Done"
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