const AssignmentStatusTableHead = () => {
  return (
    <thead>
        <tr className="h-[2rem] text-[1.05rem]"> 
            <th className="border-1 border-[rgba(0,0,0,0.2)] w-[10%]">Assignment ID</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Title</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Due Date</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Writer</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Status</th>
            {/* <th className="border-1 border-[rgba(0,0,0,0.2)]">Special requirement</th> */}
        </tr>
    </thead>
  )
}

export default AssignmentStatusTableHead