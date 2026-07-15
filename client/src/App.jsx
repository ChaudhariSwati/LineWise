import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import QueueDashboard from './pages/user/QueueDashboard'
import JoinQueue from './pages/user/JoinQueue'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminQueues from './pages/admin/AdminQueues'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<QueueDashboard />} />
        <Route path="join" element={<JoinQueue />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/queues" element={<AdminQueues />} />
        <Route path="admin/analytics" element={<AdminAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
