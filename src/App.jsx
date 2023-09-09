import { Route, Routes } from 'react-router-dom'
import MyContext from './context/MyContext'
import HomePage from './pages/HomePage'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import DashboardOverview from './components/common/DashboardOverview'
import PropTypes from 'prop-types'
import AdminDashboard from './components/admin/AdminDashboard'
import WriterDashboard from './components/writer/WriterDashboard'
import WorkOrderManagement from './components/admin/WorkOrderManagement'
import OpenCloseContext from './context/OpenCloseContext'
import UserManagementCenter from './components/admin/UserManagementCenter'


const App = () => {
  // const {USER_TYPES,CURRENT_USER }=useMyCustomHook()
  const GeneralRoute=({children})=>{
    return <div>{children}</div>
  }
  GeneralRoute.propTypes={
    children:PropTypes.node.isRequired
  }

  
  return (
    <OpenCloseContext>
      <MyContext>
        <Routes>
          <Route path="/" element={<GeneralRoute><HomePage /></GeneralRoute>}/>
          <Route path="/login" element={<GeneralRoute><Login /></GeneralRoute>} />
          <Route path="/signup" element={<GeneralRoute><Signup /></GeneralRoute>}/>
          <Route path="/dashboard-overview" element={<GeneralRoute><DashboardOverview /></GeneralRoute>}/>
          <Route path="/dashboard-overview/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard-overview/writer/dashboard" element={<WriterDashboard />} />
          <Route path="/dashboard-overview/admin/dashboard/workorder" element={<WorkOrderManagement />} />
          <Route path="/dashboard-overview/admin/dashboard/usermanagement" element={<UserManagementCenter />} />
          <Route path="*" element={<h1>Page Not found!</h1>} />
        </Routes>



      <div className="bg-secondary h-full">
      
      </div>
      </MyContext>
    </OpenCloseContext>
  )
}




export default App