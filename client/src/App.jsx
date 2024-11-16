import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import RefreshHandler from './RefreshHandler'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Paper from './pages/Paper'
import Feed from './pages/Feed'
import Sign from './pages/Sign'

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(localStorage.getItem("userToken") ? true : false)

  return (
    <div className="content">
      <Router>
        <RefreshHandler setIsSignedIn={setIsSignedIn} />
        <Routes>
          <Route path="/" element={<div className="content"><Homepage /></div>} />
          <Route path="/profile" element={<div className="content"><Profile /></div>} />
          <Route path="/signin" element={<div className="content"><Sign isSignInPage={true} /></div>} />
          <Route path="/signup" element={<div className="content"><Sign isSignInPage={false} /></div>} />
          <Route path="/paper" element={<div className="content"><Paper /></div>} />
          <Route path="/feed" element={<div className="content"><Feed /></div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
