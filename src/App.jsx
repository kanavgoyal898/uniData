import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import TermsConditions from './components/TermsConditions'
import PrivacySupport from './components/PrivacySupport'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tc" element={<TermsConditions />} />
            <Route path="/ps" element={<PrivacySupport />} />
        </Routes>
    </Router>
  )
}

export default App
