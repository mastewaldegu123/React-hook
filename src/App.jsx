import React from 'react'
import {Route,Routes,Link, Outlet} from "react-router-dom"
import MainPage from "./Login and Sidebar/AssetSideBar/component/MainPage"
 import Home from "./Login and Sidebar/Home"
 import About from "./Login and Sidebar/About"
 import Contact from './Login and Sidebar/Contact'
 import Login from "./Login and Sidebar/Login"
import Register from './Login and Sidebar/Register'
 import NotFound from "./Login and Sidebar/NotFound"
import Dashboard from './Login and Sidebar/AssetSideBar/component/pages/Dashboard/Dashboard'
 import MainPage1 from "./Login and Sidebar/UserPage/component/MainPage1"
 import MyDashboard from './Login and Sidebar/UserPage/component/pages/MyDashboard'
import TotalEmployee from './Login and Sidebar/AssetSideBar/component/pages/Dashboard/TotalEmployee'


function App() {
  return (
    <>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
  <Route path="about" element={<About/>}/>
   <Route path="contact" element={<Contact/>}/>
   <Route path='login' element={<Login/>}/>
   <Route path='totalemployee' element={<TotalEmployee/>}/>
   <Route path='register' element={<Register/>}/>
   
   <Route path='userpage/*' element={<MainPage1/>}>
    
  
    </Route>
   <Route path='/mainpage/*' element={<MainPage/>}>
  
  
    </Route>
   <Route path='*' element={<NotFound/>}/>
   

    </Routes>


    </>
  )
}

export default App