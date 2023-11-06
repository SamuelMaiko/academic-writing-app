import AdminAssignmentCard from "../reusable_components/AdminAssignmentCard"

const CompletedAssignments = () => {
  return (
    <div className="relative w-full pb-24">
        <div className="flex flex-col gap-y-4">
            <AdminAssignmentCard />
            <AdminAssignmentCard />
            <AdminAssignmentCard />
            <AdminAssignmentCard />
            <AdminAssignmentCard />
        </div>

        <p className="absolute -rotate-[90deg] text-2xl font-medium left-[-15rem] top-[50%] -translate-y-[50%]">Completed assignments</p>
    </div>
  )
}

export default CompletedAssignments