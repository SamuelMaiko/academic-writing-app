const WorkTableHead = () => {
  return (
    <thead>
        <tr className="h-[2rem] text-xl font-pr">
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Assignment ID</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Title</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Due date</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Word count</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Attachment</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Special requirement</th>
        </tr>
    </thead>
    
  )
}

export default WorkTableHead