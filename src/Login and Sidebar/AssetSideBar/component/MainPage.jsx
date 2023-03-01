import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavPage from "./NavPage"
import Sidebar from './Sidebar'
import "./pages/Dashboard/dashboard.css"
const MainPage = () => {
  return (
    <React.Fragment>
      
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      
      <section className="navpage">
        <div className='grid grid-cols-12 '>
          <div className='col-span-3 bg-blue-500 h-screen   md:col-span-2 w-52'>
              <Sidebar/>   
              
          </div>


          <div className='col-span-9 h-auto  md:col-span-10'>
            <div >
            <NavPage/>
            </div>
             
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;