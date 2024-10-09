 import React from 'react'
 import { BrowserRouter, Route, Routes } from "react-router-dom"
 import Home from './Pages/Home'
 import About from './Pages/About'
import Doctor from './Pages/Doctor'
import Login from './Pages/Login'
import MyAppointments from './Pages/MyAppointments'
import MyProfile from './Pages/MyProfile'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Appointments from './Pages/Appointments'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
 
 function App() {
   return (
      <>
      <div className='mx-4 sm:mx-[10%]'>
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='/doctor' element={<Doctor/>} /> */}
          <Route path='/doctor/:speciality' element={<Doctor/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/my-appointment' element={<MyAppointments/>} />
          <Route path='/my-profile' element={<MyProfile/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/appiontments/:docId' element={<Appointments/>} />
          <Route path='*' element={<NotFound/>} />
         </Routes>
        </BrowserRouter>
      </div>
      </>
   )
 }
 
 export default App