import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import RefreshHandler from './components/RefreshHandler'
import TermsConditions from './components/TermsConditions'
import PrivacySupport from './components/PrivacySupport'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    const navigate = useNavigate()
    return isAuthenticated ? element : <SignIn />
  }

  return (
    <Router>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/tc" element={<TermsConditions />} />
            <Route path="/ps" element={<PrivacySupport />} />
          </Routes>
      </Router>
  )
}

export default App
