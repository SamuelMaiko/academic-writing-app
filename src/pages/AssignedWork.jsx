import UptakenWorkCard from "../components/common/UptakenWorkCard"
import WriterTitleManager from "../components/writer/WriterTitleManager"

const AssignedWork = () => {
  return (
    <div className="w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
                <WriterTitleManager title="Assigned Work"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="not Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                
            </div>
        </div>
    </div>
  )
}

export default AssignedWork