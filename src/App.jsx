import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
