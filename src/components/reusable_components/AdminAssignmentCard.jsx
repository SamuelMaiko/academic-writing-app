import { BiCog } from "react-icons/bi"
import { AiFillCheckCircle,AiOutlineCloudDownload } from "react-icons/ai"
import { BsFillClipboardCheckFill,BsFillClipboardXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminAssignmentCard = () => {
    const navigate =useNavigate()
  return (
    <div>
        <div onClick={()=>navigate("/assignments/2")} className="bg-[#c7e0e4] hover:bg-[#dce6ed] text-[#000080] w-[80%] border-[1px] border-[#ccc] shadow-[2px_2px_5px] shadow-[#888888]  p-2 rounded-lg cursor-pointer">
            <p className="font-semibold ">43552</p>
            <p>This is the title of the assignment at hand</p>
            <p className="mt-1 mb-2">24th Nov 2023 8.00pm</p>
            <div className="flex gap-x-4">
                <p className="flex items-center gap-x-2 py-1 bg-[#c9a2f7] mt-1 hover:bg-[#b286eb] text-[#000000] transition-colors duration-300 w-fit px-5 rounded-lg text-sm">
                    <span className="text-lg"><BsFillClipboardCheckFill/></span>
                    {/* TbClipboardX */}
                    <span className="">Assigned</span>
                </p>
                <p className="flex items-center gap-x-2 py-1 bg-[#ff7b67] mt-1 hover:bg-[#e65a47] text-[#000000] transition-colors duration-300 w-fit px-5 rounded-lg text-sm">
                    <span className="text-lg"><BsFillClipboardXFill/></span>
                    <span>UnAssigned</span>
                </p>
                <p className="flex items-center gap-x-2 py-1 bg-[#FFD700] mt-1 hover:bg-[#ffec80] text-[#000000] transition-colors duration-300 w-fit px-5 rounded-lg text-sm">
                    <span className="text-lg"><BiCog/></span>
                    <span>In progress</span>
                </p>
                <p className="flex items-center gap-x-2 py-1 bg-[#00FF00] mt-1 hover:bg-[#66FF66] text-[#FFFFFF] transition-colors duration-300 w-fit px-5 rounded-lg text-sm">
                    <span className="text-lg"><AiFillCheckCircle/></span>
                    <span>Completed</span>
                </p>
                <p className="flex items-center gap-x-2 py-1  mt-1 hover:text-[rgba(0,0,0,0.5)] text-[#333333] transition-colors duration-300 w-fit px-5 rounded-lg text-sm">
                    <span className="text-lg"><AiOutlineCloudDownload/></span>
                    <span>Download</span>
                </p>
            </div>
            {/* <p className="bg-[#ff7b67] hover:bg-[#e65a47] transition-colors duration-300 text-[#000000] w-fit px-5 rounded-lg text-sm">In progress</p> */}
        </div>
    </div>
  )
}

export default AdminAssignmentCard