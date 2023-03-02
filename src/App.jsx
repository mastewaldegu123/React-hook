import React from 'react'
import {Route,Routes,Link, Outlet} from "react-router-dom"
import UseState from './UseState'

 



function App() {
  return (

    <>
  
    <Routes>
    <Route path='/' element={<UseState/>}/>
    
   
   
   

    </Routes>


    </>
  )
}

export default App