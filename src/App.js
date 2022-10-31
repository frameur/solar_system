import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimateRoutes from './components/AnimateRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <AnimateRoutes />
      </Router>
    </div>
  )
}

export default App
