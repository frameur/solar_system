import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Earth from '../pages/Earth'
import Sun from '../pages/Sun'
import Mercury from '../pages/Mercury'
import Venus from '../pages/Venus'
import Mars from '../pages/Mars'
import Jupiter from '../pages/Jupiter'
import Saturn from '../pages/Saturn'
import Uranus from '../pages/Uranus'
import Neptune from '../pages/Neptune'
import Pluto from '../pages/Pluto'
import Moon from '../pages/Moon'
import Home from '../pages/Home'

import { AnimatePresence } from 'framer-motion'

function AnimateRoutes() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sun" element={<Sun />} />
          <Route exact path="/earth" element={<Earth />} />
          <Route exact path="/mercury" element={<Mercury />} />
          <Route exact path="/venus" element={<Venus />} />
          <Route exact path="/mars" element={<Mars />} />
          <Route exact path="/jupiter" element={<Jupiter />} />
          <Route exact path="/saturn" element={<Saturn />} />
          <Route exact path="/uranus" element={<Uranus />} />
          <Route exact path="/neptune" element={<Neptune />} />
          <Route exact path="/pluto" element={<Pluto />} />
          <Route exact path="/moon" element={<Moon />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default AnimateRoutes
