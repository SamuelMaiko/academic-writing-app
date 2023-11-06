import { AiOutlineTrophy } from "react-icons/ai";
import CompletedAssignments from "./CompletedAssignments"
import OtherAssignments from "./OtherAssignments"
import UrgentAssignments from "./UrgentAssignments"
import { LuCalendarClock } from "react-icons/lu";

const AssignedAssignments = ({createUserOpenModel}) => {
  return (
    <div className="w-full h-full">
        <div className="w-full h-full ">
            <h1 className="text-3xl font-medium ">Assigned Assignments</h1>

            <h1 className=" font-medium text-3xl flex items-center gap-x-2 mt-2">
                {/* <span className=" "><LuCalendarClock /></span> */}
                <span className="text-3xl">In progress</span>
            </h1>

            <UrgentAssignments />

            <OtherAssignments />

            {/* <h1 className="text-3xl font-medium mt-14 mb-4">Completed</h1> */}
            <h1 className="flex items-center gap-x-2 font-medium text-3xl mt-14 mb-4">
                {/* <span className=""><AiOutlineTrophy /></span> */}
                <span className="">Completed</span>
            </h1>

            <CompletedAssignments />

        </div>
    </div>
  )
}

export default AssignedAssignments