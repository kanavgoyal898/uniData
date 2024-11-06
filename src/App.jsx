import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default App
