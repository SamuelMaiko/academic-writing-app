import { Route, Routes} from 'react-router-dom'
import MyContext from './context/MyContext'
import HomePage from './pages/HomePage'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import DashboardOverview from './components/common/DashboardOverview'
import PropTypes from 'prop-types'
import AdminDashboard from './components/admin/AdminDashboard'
import WriterDashboard from './components/writer/WriterDashboard'
import WorkOrderManagement from './components/admin/WorkOrderManagement'
import APIContext from './context/APIs'
import UserManagementCenter from './components/admin/UserManagementCenter'
import AssignmentStatus from './pages/AssignmentStatus'
import Statistics from './pages/Statistics'
import WriterUptakenWork from './pages/WriterUptakenWork'
import AssignedWork from './pages/AssignedWork'
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
            <Route path="/dashboard-overview/admin/dashboard/usermanagement" element={<UserManagementCenter />} />
            <Route path="/dashboard-overview/admin/dashboard/assignmentstatus" element={<AssignmentStatus />} />
            <Route path="/dashboard-overview/admin/dashboard/statistics" element={<Statistics />} />
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