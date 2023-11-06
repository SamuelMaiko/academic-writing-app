import UnassignedOtherAssignments from "./UnassignedOtherAssignments"
import UnassignedUrgentAssignments from "./UnassignedUrgentAssignments"

const UnAssignedAssignments = ({createUserOpenModel}) => {
  return (
    <div>
      <h1 className="text-3xl font-medium ">UnAssigned Assignments</h1>
      <div>
        <UnassignedUrgentAssignments />
        <UnassignedOtherAssignments />
      </div>
    </div>
  )
}

export default UnAssignedAssignments