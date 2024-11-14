import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Paper from './pages/Paper'
import Feed from './pages/Feed'

function App() {

  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<div className="content"><Homepage /></div>} />
          <Route path="/profile" element={<div className="content"><Profile /></div>} />
          <Route path="/signin" element={<div className="content"><SignIn /></div>} />
          <Route path="/signup" element={<div className="content"><SignUp /></div>} />
          <Route path="/paper" element={<div className="content"><Paper /></div>} />
          <Route path="/feed" element={<div className="content"><Feed /></div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
