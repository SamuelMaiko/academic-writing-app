import { useMyCustomHook } from "../../context/MyContext"
import { AiOutlineFileText } from "react-icons/ai"

const AssignmentCard = () => {
    const {DUE_DATE, WORD_COUNT,SPECIAL_REQUIREMENTS,ASSIGNMENT_ID}=useMyCustomHook()
  return (
    // 34rem
    <div>
        <div className="card relative w-[100%] h-[23rem] rounded-lg bg-secondary border-2 border-[#c3c6ce] transition-all duration-500  hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
            <div className="card-details text-black h-full overflow-y-scroll"> 
                <p className=" text-[1.5rem] font-bold font-opensans"><span className="font-semibold text-blue-700">Title:</span> Discuss the impact of Technology on education. Discuss the impact of Technology on education. </p>
                <p className=" text-xl text-red-600"><span className="font-semibold text-blue-700">Due date:</span> {DUE_DATE}</p>
                <p className="text-xl"><span className="font-semibold text-blue-700">Word Count:</span> {WORD_COUNT} words.</p>
                <p className="text-xl inline">Attachments:</p>
                <div className="hover:bg-yellow-500 p-2 flex items-center justify-center bg-blue-500 w-28 rounded-full cursor-pointer"><p className="text-2xl mr-1"><AiOutlineFileText/></p> <p className="text-xl">File</p></div>
                <p className="text-xl"><span className="font-semibold">Special requirements:</span> {SPECIAL_REQUIREMENTS}</p>
                {/* <div className="bg-blue-700 h-[8rem]"></div> */}
                <div className="absolute  text-xl right-1 top-1 bg-btlinks text-white p-1 rounded-full">{ASSIGNMENT_ID}</div>
            </div>
            <button className="card-button translate-x-[-50%] translate-y-[125%] w-[60%] rounded-[1 rem] border-none bg-[#008bf8] text-white text-[1rem] px-[1rem] py-3 absolute left-[50%] bottom-0 opacity-0 transition-all duration-300 hover:bg-yellow-500 text-xl">Take up task</button>
        </div>
    </div>
  )
}

export default AssignmentCard