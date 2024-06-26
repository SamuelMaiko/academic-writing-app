// import { useMyCustomHook } from "../../context/MyContext"
import { AiOutlineFileText } from "react-icons/ai"

const AssignmentCard = ({TITLE, DUE_DATE, WORD_COUNT,SPECIAL_REQUIREMENTS,ASSIGNMENT_ID}) => {
    // const {DUE_DATE, WORD_COUNT,SPECIAL_REQUIREMENTS,ASSIGNMENT_ID}=useMyCustomHook() 
  return (
    // 34rem
    <div>
        <div className="card relative font-opensans w-[100%] h-[18rem] rounded-lg bg-secondary border-2 border-[#c3c6ce] transition-all duration-500  hover:border-btlinks shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] cursor-pointer">
            <div className="card-details text-black h-full overflow-y-hidden"> 
                <p className=" md:text-[1.1rem] text-[1.3rem] font-normal font-opensans text-tcolor"><span className="font-semibold text-black">Title:</span>{TITLE}</p>
                <p className=" text-[1rem] text-red-600 font-semibold"><span className="font-semibold text-black">Due date:</span> {DUE_DATE}</p>
                <p className="text-[1rem]"><span className="font-semibold">Word Count:</span> {WORD_COUNT} words.</p>
                <p className="text-[1rem] inline">Attachments:</p>
                <div className="hover:bg-hover  text-white md:p-1 p-1 flex items-center justify-center bg-chocolate w-20 rounded-[1.3rem] cursor-pointer"><p className="text-[1.15rem] mr-1"><AiOutlineFileText/></p> <p className="text-[1rem]">File</p></div>
                <p className="text-[1rem]"><span className="font-semibold">Special requirements:</span> {SPECIAL_REQUIREMENTS}</p>
                {/* <div className="bg-blue-700 h-[8rem]"></div> */}
                <div className="absolute md:text-[1rem] text-lg right-1 top-1 bg-chocolate text-white p-1 rounded-full">{ASSIGNMENT_ID}</div>
            </div>
            <button className="card-button rounded-lg translate-x-[-50%] translate-y-[125%] w-[60%] rounded-[1 rem] border-none bg-chocolate text-white text-[1rem] px-[1rem] py-2 absolute left-[50%] bottom-0 opacity-0 transition-all duration-300 hover:bg-hover ">Take up task</button>
        </div>
    </div>
  )
}

export default AssignmentCard