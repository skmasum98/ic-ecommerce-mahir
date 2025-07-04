import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   <div>
 <Navbar />
 <hr />
    <Outlet className="min-h-96" >

    </Outlet>
    <hr />
    <Footer />
   </div>
   
    
  )
}

export default App