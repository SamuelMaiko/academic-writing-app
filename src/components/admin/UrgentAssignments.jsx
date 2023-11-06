import AdminAssignmentCard from "../reusable_components/AdminAssignmentCard"

const UrgentAssignments = () => {
  return (
    <div className="w-full h-full">
        <div className="relative w-full h-full">
            <h1 className="text-xl font-medium my-4 bg-[#f5f5f5]">Urgent assignments</h1>

            <div className="flex flex-col gap-y-4">
                <AdminAssignmentCard />
                <AdminAssignmentCard />
                <AdminAssignmentCard />
            </div>

            <p className="absolute -rotate-[90deg] text-2xl font-medium left-[-15rem] top-[50%] -translate-y-[50%]">Urgent assignments</p>
        </div>
    </div>
  )
}

export default UrgentAssignments