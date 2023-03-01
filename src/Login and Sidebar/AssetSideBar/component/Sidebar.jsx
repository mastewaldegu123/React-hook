import React from 'react'
import {SidebarData} from '../Data/SidebarData'
import { NavLink } from "react-router-dom";
import "../../../App.css"
const Sidebar = () => {
    const activeLink = 'hover:bg-sky-400  w-auto rounded h-auto  m-4   flex justify-start items-center  text-base  bg-sky-700'
    const normalLink = 'hover:bg-sky-400  w-auto  rounded h-auto  m-4  flex justify-start items-center  text-base  '

  return (
    <React.Fragment>
    <section>
      <div className="text-white">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div  key={index}>
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
            >
                        <span id='icon'>{item.icon}</span>
                        <span id='title'>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar