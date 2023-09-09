
import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const OpenClose=createContext()
export const useMyOpenCloseContext=()=> useContext(OpenClose)

const OpenCloseContext = ({children}) => {
    const [open, setOpen] =useState(false);
    const [open2, setOpen2] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
  return (
    <OpenClose.Provider value={{open,open2, handleOpen, handleClose, handleOpen2, handleClose2}}>
    {children}
    </OpenClose.Provider>
  )
}

OpenCloseContext.propTypes={
    children:PropTypes.node.isRequired
  }

export default OpenCloseContext