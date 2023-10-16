import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types'

const BaseApi=createContext()
export const useMyBaseAPIContext=()=>useContext(BaseApi)



const BaseAPIContext = ({children}) => {

const [TOKEN, onsetTOKEN] = useState("")
const BASE_URL="http://localhost:5555"

const setTOKEN=(newToken)=>{
    onsetTOKEN(newToken)
}
  return (
    <BaseApi.Provider value={{BASE_URL,TOKEN,setTOKEN}}>
    {children}
    </BaseApi.Provider>
  )
}

BaseAPIContext.propTypes={
    children:PropTypes.node.isRequired
  }
export default BaseAPIContext