import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = ({ darkMode,setDarkMode }) => {
  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Outlet context={{ darkMode }} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainLayout
