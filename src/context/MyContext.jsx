import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext=createContext()
export const useMyCustomHook=()=>useContext(ThemeContext)


const MyContext = ({children}) => {
  // const [isNavBarOpen, setIsNavBar] = useState(false)
  const [show, updateShow] = useState(false)
  

  const setShow=()=>{
    updateShow(!show)
  }
  


  // const setIsNavBarOpen=(newValue)=>{
  //   setIsNavBar(newValue)
  // }
  const USER_TYPES=[
    {
      type:"Writer"
    },
    {
      type:"Admin"
    },
    {
      type:"User"
    }
  ]
  const CURRENT_USER="Admin"
  const USER_TYPE="Admin" //gotten from form
  const DUE_DATE="21st Sep 2023 by 11:59 pm"
  const WORD_COUNT=1500
  const SPECIAL_REQUIREMENTS="There is a specific"
  const ASSIGNMENT_ID="23H"
  return (
    <ThemeContext.Provider value={{ show, setShow,USER_TYPES,CURRENT_USER,DUE_DATE,WORD_COUNT, SPECIAL_REQUIREMENTS,ASSIGNMENT_ID, USER_TYPE}}>
      {children}
    </ThemeContext.Provider>
    
  )
}

MyContext.propTypes={
  children:PropTypes.node.isRequired
}

export default MyContext