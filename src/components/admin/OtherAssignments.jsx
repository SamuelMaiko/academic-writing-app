import AdminAssignmentCard from "../reusable_components/AdminAssignmentCard"

const OtherAssignments = () => {
  return (
    <div className=" w-full">
        <div className="relative w-full">
            <h1 className="text-xl font-medium mt-14 mb-4 bg-[#f5f5f5]">Others</h1>

            <div className="flex flex-col gap-y-4">
                <AdminAssignmentCard />
                <AdminAssignmentCard />
                <AdminAssignmentCard />
                <AdminAssignmentCard />
                <AdminAssignmentCard />
            </div>

            <p className="absolute -rotate-[90deg] text-2xl font-medium left-[-15rem] top-[50%] -translate-y-[50%]">Other assignments</p>
        </div>
    </div>
  )
}

export default OtherAssignments