import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Final from './Components/Final'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  )
}

export default App