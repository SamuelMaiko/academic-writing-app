import AdminTitleManager from "../components/admin/AdminTitleManager"
import AssignmentStatusTableHead from "../components/admin/AssignmentStatusTableHead"
import AssignmentStatusTableRow from "../components/admin/AssignmentStatusTableRow"

const AssignmentStatus = () => {
  return (
    <div className="w-full h-full">
        <div className="w-[90%] mx-auto">
        <div>
            <AdminTitleManager title="Assignment Status" />
        </div>
        <table className="w-full border-1">
            <AssignmentStatusTableHead /> 
            <tbody>
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Not yet" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="Done" />
                <AssignmentStatusTableRow W_ID="1" W_TITLE="Impact of technology on education" W_DUEDATE="22nd September 2023" W_WRITER="John Doe" W_STATUS="not done" />
            </tbody>          
        </table>
            

        </div>

    </div>
  )
}

export default AssignmentStatus