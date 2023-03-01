import React from 'react'
import {Route,Routes,Link, Outlet} from "react-router-dom"
import MainPage from "./Login and Sidebar/AssetSideBar/component/MainPage"
 import Home from "./Login and Sidebar/Home"
 
 import Login from './Login and Sidebar/Login'
import Register from './Login and Sidebar/Register'
 import NotFound from "./Login and Sidebar/NotFound"



function App() {
  return (

    <>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    
   <Route path='login' element={<Login/>}/>
   
   <Route path='register' element={<Register/>}/>
   
   <Route path='/mainpage/*' element={<MainPage/>}/>
   
   

    </Routes>


    </>
  )
}

export default App