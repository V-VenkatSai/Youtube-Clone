import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div>
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar sidebarOpen={sidebarOpen}/>
    </div>
  )
}

export default Home