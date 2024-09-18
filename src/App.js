import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Final from './Components/Final'
import Summary from './Components/Summary'
import Skills from './Components/Skills'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  )
}

export default App