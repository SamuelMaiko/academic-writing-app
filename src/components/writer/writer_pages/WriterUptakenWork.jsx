import UptakenWorkCard from "../../reusable_components/UptakenWorkCard"
import WriterTitleManager from "../../reusable_components/WriterTitleManager.jsx"


const WriterUptakenWork = () => {
  return (
    <div className="w-full h-full">
        <div className="w-[90%] mx-auto">
            <div>
                <WriterTitleManager title="Uptaken Work"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Not Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Not Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Not Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Done"/>
                <UptakenWorkCard ID="012" TITLE="Discuss the impact of technology on education" STATUS="Not Done"/>
            </div>
        </div>
    </div>
  )
}

export default WriterUptakenWork