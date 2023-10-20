import { Route, Routes} from 'react-router-dom'
import MyContext from './context/MyContext'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashboardOverview from './pages/DashboardOverview'
import PropTypes from 'prop-types'
import AdminDashboard from './components/admin/admin_pages/AdminDashboard'
import WriterDashboard from './components/writer/writer_pages/WriterDashboard'
import WorkOrderManagement from './components/admin/admin_pages/WorkOrderManagement'
import APIContext from './context/APIs'
import UserManagementCenter from './components/admin/admin_pages/UserManagementCenter'
import AssignmentStatus from './components/admin/admin_pages/AssignmentStatus'
import Statistics from './components/admin/admin_pages/Statistics'
import WriterUptakenWork from './components/writer/writer_pages/WriterUptakenWork'
import AssignedWork from './components/writer/writer_pages/AssignedWork'
import SpecificUserDetails from './components/common/SpecificUserDetails'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import BaseAPIContext from './context/BaseAPIContext'


const App = () => {
  // const {USER_TYPES,CURRENT_USER }=useMyCustomHook()
  // const navigate=useNavigate()

  const GeneralRoute=({children})=>{
    return (
      <>
      {children}
      </>
    )
  }

  const WriterRoute=({children})=>{
      return (
        <>
        {
          children
          
        }
        
        </>
      )
    
  }
  
  GeneralRoute.propTypes={
    children:PropTypes.node.isRequired
  }
  WriterRoute.propTypes={
    children:PropTypes.node.isRequired
  }

  
  return (
    <BaseAPIContext>
      <APIContext>
        <MyContext>
        <ToastContainer position='bottom-right' theme='colored' hideProgressBar autoClose="2000" ></ToastContainer>
          <Routes>
            <Route path="/" element={<GeneralRoute><HomePage /></GeneralRoute>}/>
            <Route path="/login" element={<GeneralRoute><Login /></GeneralRoute>} />
            <Route path="/signup" element={<GeneralRoute><Signup /></GeneralRoute>}/>
            <Route path="/dashboard-overview" element={<WriterRoute><DashboardOverview /></WriterRoute>}/>
            <Route path="/dashboard-overview/writer/dashboard" element={<WriterDashboard />} />
            <Route path="/dashboard-overview/writer/dashboard/uptakenwork" element={<WriterUptakenWork />} />
            <Route path="/dashboard-overview/writer/dashboard/assignedwork" element={<AssignedWork />} />
            <Route path="/dashboard-overview/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/dashboard-overview/admin/dashboard/workorder" element={<WorkOrderManagement />} />
            <Route path="/dashboard/usermanagement" element={<UserManagementCenter />} />
            <Route path="/dashboard-overview/admin/dashboard/assignmentstatus" element={<AssignmentStatus />} />
            <Route path="/dashboard-overview/admin/dashboard/statistics" element={<Statistics />} />
            <Route path="users/:workId" element={<SpecificUserDetails />}/>
            <Route path="*" element={<h1>Page Not found!</h1>} />
          </Routes>



        <div className="bg-secondary h-full">
        
        </div>
        </MyContext>
      </APIContext>
    </BaseAPIContext>
  )
}






export default App