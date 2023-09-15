import { MdFileDownload, MdFileDownloadOff } from "react-icons/md"
import { useMyCustomHook } from "../../context/MyContext"


const AssignmentStatusTableRow = ({W_ID,W_TITLE,W_DUEDATE,W_WRITER,W_STATUS}) => {
    // const {ASSIGNMENT_STATUS}=useMyCustomHook()
    const ASSIGNMENT_STATUS="Done"
  return ( 
    <tr className="border-1 h-[3rem] text-[1rem] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.04)] transition-all duration-500">
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_ID}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_TITLE}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_DUEDATE}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{W_WRITER}</td>
        <td className="border-1 border-[rgba(0,0,0,0.2)] text-center">{
        W_STATUS=="Done"?
        <button className="bg-[#ff8c00] text-[#fff] text-[1rem] rounded-2xl px-2">Done</button>:
        <button className="bg-[#008000] text-[#cccccc] text-[1rem] rounded-2xl px-2">In progress</button>
        }</td>
        {
            W_STATUS=="Done"?
            <td className="border-1 border-[rgba(0,0,0,0.2)] pl-8 text-chocolate hover:text-hover hover:bg-[rgba(0,0,0,0.08)] text-2xl text-center cursor-pointer"><MdFileDownload/></td>:
            <td className="border-1 border-[rgba(0,0,0,0.2)] pl-8 text-gray-400 text-2xl text-center "><MdFileDownloadOff/></td>
        }
        

    </tr>
    
  )
}

export default AssignmentStatusTableRow